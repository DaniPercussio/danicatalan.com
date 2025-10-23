"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Anim=Ops.Anim || {};
Ops.Html=Ops.Html || {};
Ops.Math=Ops.Math || {};
Ops.Array=Ops.Array || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Graphics=Ops.Graphics || {};
Ops.TimeLine=Ops.TimeLine || {};
Ops.WebAudio=Ops.WebAudio || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Math.Compare=Ops.Math.Compare || {};
Ops.Html.Elements=Ops.Html.Elements || {};
Ops.Array.PointArray=Ops.Array.PointArray || {};
Ops.Graphics.Geometry=Ops.Graphics.Geometry || {};



// **************************************************************
// 
// Ops.Gl.MainLoop_v2
// 
// **************************************************************

Ops.Gl.MainLoop_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    hdpi = op.inFloat("Max Pixel Density (DPR)", 2),
    fpsLimit = op.inValue("FPS Limit", 0),
    reduceFocusFPS = op.inValueBool("Reduce FPS unfocussed", false),
    clear = op.inValueBool("Transparent", false),
    active = op.inValueBool("Active", 1),
    inFocus = op.inValueBool("Focus canvas", 1),
    trigger = op.outTrigger("trigger"),
    width = op.outNumber("width"),
    height = op.outNumber("height"),
    outPixel = op.outNumber("Pixel Density");

op.onAnimFrame = render;
hdpi.onChange = updateHdpi;

const cgl = op.patch.cg = op.patch.cgl;
let rframes = 0;
let rframeStart = 0;
let timeOutTest = null;
let addedListener = false;
if (!op.patch.cgl) op.uiAttr({ "error": "No webgl cgl context" });

const identTranslate = vec3.create();
vec3.set(identTranslate, 0, 0, 0);
const identTranslateView = vec3.create();
vec3.set(identTranslateView, 0, 0, -2);

let firstTime = true;
let fsElement = null;
let winhasFocus = true;
let winVisible = true;

window.addEventListener("blur", () => { winhasFocus = false; });
window.addEventListener("focus", () => { winhasFocus = true; });
document.addEventListener("visibilitychange", () => { winVisible = !document.hidden; });

testMultiMainloop();

// op.patch.cgl.cgCanvas.forceAspect = 1.7777777;
op.patch.tempData.mainloopOp = this;

function updateHdpi()
{
    setPixelDensity();

    if (CABLES.UI)
    {
        if (hdpi.get() < 1)
            op.patch.cgl.canvas.style.imageRendering = "pixelated";
    }

    op.patch.cgl.updateSize();
    if (CABLES.UI) gui.setLayout();
}

active.onChange = function ()
{
    op.patch.removeOnAnimFrame(op);

    if (active.get())
    {
        op.setUiAttrib({ "extendTitle": "" });
        op.onAnimFrame = render;
        op.patch.addOnAnimFrame(op);
        op.log("adding again!");
    }
    else
    {
        op.setUiAttrib({ "extendTitle": "Inactive" });
    }
};

function getFpsLimit()
{
    if (reduceFocusFPS.get())
    {
        if (!winVisible) return 10;
        if (!winhasFocus) return 30;
    }

    return fpsLimit.get();
}

op.onDelete = function ()
{
    cgl.gl.clearColor(0, 0, 0.0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
};

function setPixelDensity()
{
    if (hdpi.get() != 0) op.patch.cgl.pixelDensity = Math.min(hdpi.get(), window.devicePixelRatio);
    else op.patch.cgl.pixelDensity = window.devicePixelRatio;
}

function render(time)
{
    if (!active.get()) return;
    if (cgl.aborted || cgl.canvas.clientWidth === 0 || cgl.canvas.clientHeight === 0) return;

    op.patch.cg = cgl;

    setPixelDensity();

    // if (hdpi.get())op.patch.cgl.pixelDensity = window.devicePixelRatio;

    const startTime = performance.now();

    op.patch.config.fpsLimit = getFpsLimit();

    if (cgl.canvasWidth == -1)
    {
        cgl.setCanvas(op.patch.config.glCanvasId);
        return;
    }

    if (cgl.canvasWidth != width.get() || cgl.canvasHeight != height.get())
    {
        width.set(cgl.canvasWidth / 1);
        height.set(cgl.canvasHeight / 1);
    }

    if (CABLES.now() - rframeStart > 1000)
    {
        CGL.fpsReport = CGL.fpsReport || [];
        if (op.patch.loading.getProgress() >= 1.0 && rframeStart !== 0)CGL.fpsReport.push(rframes);
        rframes = 0;
        rframeStart = CABLES.now();
    }
    CGL.MESH.lastShader = null;
    CGL.MESH.lastMesh = null;

    cgl.renderStart(cgl, identTranslate, identTranslateView);

    if (!clear.get()) cgl.gl.clearColor(0, 0, 0, 1);
    else cgl.gl.clearColor(0, 0, 0, 0);

    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

    trigger.trigger();

    if (CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();

    if (CGL.Texture.previewTexture)
    {
        if (!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(cgl);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }
    cgl.renderEnd(cgl);

    op.patch.cg = null;

    if (!clear.get())
    {
        cgl.gl.clearColor(1, 1, 1, 1);
        cgl.gl.colorMask(false, false, false, true);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        cgl.gl.colorMask(true, true, true, true);
    }

    if (!cgl.tempData.phong)cgl.tempData.phong = {};
    rframes++;
    if (firstTime)
    {
        if (inFocus.get()) cgl.canvas.focus();
        firstTime = false;
    }

    outPixel.set(op.patch.cgl.pixelDensity);
    op.patch.cgl.profileData.profileMainloopMs = performance.now() - startTime;
}

function testMultiMainloop()
{
    clearTimeout(timeOutTest);
    timeOutTest = setTimeout(
        () =>
        {
            if (op.patch.getOpsByObjName(op.name).length > 1)
            {
                op.setUiError("multimainloop", "there should only be one mainloop op!");
                if (!addedListener)addedListener = op.patch.addEventListener("onOpDelete", testMultiMainloop);
            }
            else op.setUiError("multimainloop", null, 1);
        }, 500);
}

}
};

CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};




// **************************************************************
// 
// Ops.Gl.Meshes.PointCloudFromArray_v2
// 
// **************************************************************

Ops.Gl.Meshes.PointCloudFromArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    arr = op.inArray("Array", 3),
    numPoints = op.inValueInt("Num Points"),
    outTrigger = op.outTrigger("Trigger out"),
    outGeom = op.outObject("Geometry"),
    pTexCoordRand = op.inValueBool("Scramble Texcoords", true),
    seed = op.inValue("Seed", 1),
    inCoords = op.inArray("Coordinates", 2),
    inPointSizes = op.inArray("Point sizes", 1),
    vertCols = op.inArray("Vertex Colors", 4);

op.toWorkPortsNeedToBeLinked(arr, exe);
op.setPortGroup("Texture Coordinates", [pTexCoordRand, seed, inCoords]);

const cgl = op.patch.cgl;
const geom = new CGL.Geometry("pointcloudfromarray");
let deactivated = false;
let mesh = null;
let texCoords = [];
let needsRebuild = true;
let showingError = false;

arr.setUiAttribs({ "title": "Positions" });
inCoords.setUiAttribs({ "title": "Texture Coordinates" });

op.onDelete = disposeMesh;

inCoords.onChange =
    pTexCoordRand.onChange = updateTexCoordsPorts;
vertCols.onChange = updateVertCols;
numPoints.onChange = updateNumVerts;
inPointSizes.onChange = updatePointSizes;

seed.onChange =
    arr.onChange =
    vertCols.onLinkChanged =
    inPointSizes.onLinkChanged = reset;

exe.onTriggered = doRender;

function doRender()
{
    let shader = cgl.getShader();
    op.checkGraphicsApi();

    if (CABLES.UI && shader)
    {
        if (shader.glPrimitive != cgl.gl.POINTS) op.setUiError("nopointmat", "Using a Material not made for point rendering. Try to use PointMaterial.");
        else op.setUiError("nopointmat", null);
    }

    if (needsRebuild || !mesh) rebuild();
    if (!deactivated && mesh) mesh.render(shader);
    outTrigger.trigger();
}

function reset()
{
    deactivated = arr.get() == null;

    if (!deactivated)needsRebuild = true;
    else needsRebuild = false;
}

function updateTexCoordsPorts()
{
    if (inCoords.isLinked())
    {
        seed.setUiAttribs({ "greyout": true });
        pTexCoordRand.setUiAttribs({ "greyout": true });
    }
    else
    {
        pTexCoordRand.setUiAttribs({ "greyout": false });

        if (!pTexCoordRand.get()) seed.setUiAttribs({ "greyout": true });
        else seed.setUiAttribs({ "greyout": false });
    }

    disposeMesh();
    needsRebuild = true;
}

function updatePointSizes()
{
    if (!inPointSizes.get()) return;

    if (!geom.getAttribute("attrPointSize")) reset();

    if (mesh)mesh.setAttribute("attrPointSize", inPointSizes.get(), 1);
}

function updateVertCols()
{
    needsRebuild = true;
}

function updateNumVerts()
{
    if (mesh)
    {
        mesh.setNumIndices(Math.min(geom.vertices.length / 3, numPoints.get()));
        if (numPoints.get() == 0)mesh.setNumIndices(geom.vertices.length / 3);
    }
}

function disposeMesh()
{
    if (mesh)mesh.dispose();
    mesh = null;
}

function rebuild()
{
    let verts = arr.get() || [];

    if (verts.length % 3 !== 0)
    {
        op.setUiError("div3", "Array length not multiple of 3");

        return;
    }
    else op.setUiError("div3", null);

    if (geom.vertices.length == verts.length && mesh && !inCoords.isLinked() && !vertCols.isLinked() && !geom.getAttribute("attrPointSize"))
    {
        mesh.setAttribute(CGL.SHADERVAR_VERTEX_POSITION, verts, 3);
        geom.vertices = verts;
        needsRebuild = false;

        return;
    }

    // if (geom.getAttribute("attrPointSize" && inPointSizes.isLinked())) changed = true;

    geom.clear();
    let num = verts.length / 3;
    num = Math.abs(Math.floor(num));

    if (num == 0) return;

    if (!texCoords || texCoords.length != num * 2) texCoords = new Float32Array(num * 2); // num*2;//=

    let rndTc = pTexCoordRand.get();

    if (!inCoords.isLinked())
    {
        Math.randomSeed = seed.get();
        texCoords = []; // needed otherwise its using the reference to input incoords port

        for (let i = 0; i < num; i++)
        {
            if (geom.vertices[i * 3] != verts[i * 3] ||
                geom.vertices[i * 3 + 1] != verts[i * 3 + 1] ||
                geom.vertices[i * 3 + 2] != verts[i * 3 + 2])
            {
                if (rndTc)
                {
                    texCoords[i * 2] = Math.seededRandom();
                    texCoords[i * 2 + 1] = Math.seededRandom();
                }
                else
                {
                    texCoords[i * 2] = i / num;
                    texCoords[i * 2 + 1] = i / num;
                }
            }
        }
    }

    if (vertCols.get())
    {
        if (vertCols.get().length != num * 4)
        {
            op.setUiError("vertColWrongLength", "Color array does not have the correct length! (should be " + num * 4 + ")");

            disposeMesh();
            return;
        }
        else op.setUiError("vertColWrongLength", null);

        geom.vertexColors = vertCols.get();
    }
    else
    {
        op.setUiError("vertColWrongLength", null);
        geom.vertexColors = [];
    }

    if (inPointSizes.get())
    {
        if (inPointSizes.get().length != num)
        {
            op.setUiError("pointsizeWrongLength", "Color array does not have the correct length! (should be " + num + ")");
            disposeMesh();
            return;
        }
        else op.setUiError("pointsizeWrongLength", null);

        geom.setAttribute("attrPointSize", inPointSizes.get(), 1);
    }
    else
    {
        op.setUiError("pointsizeWrongLength", null);
        geom.setAttribute("attrPointSize", [], 1);
    }

    if (inCoords.isLinked()) texCoords = inCoords.get();

    geom.setPointVertices(verts);
    geom.setTexCoords(texCoords);

    if (!mesh)mesh = new CGL.Mesh(cgl, geom, { "glPrimitive": cgl.gl.POINTS });

    mesh.addVertexNumbers = true;
    mesh.setGeom(geom);

    outGeom.setRef(geom);

    updateNumVerts();
    needsRebuild = false;
}

}
};

CABLES.OPS["53bc6de5-8d22-4687-9f03-ccfd3e50d106"]={f:Ops.Gl.Meshes.PointCloudFromArray_v2,objName:"Ops.Gl.Meshes.PointCloudFromArray_v2"};




// **************************************************************
// 
// Ops.Gl.Shader.PointMaterial_v6
// 
// **************************************************************

Ops.Gl.Shader.PointMaterial_v6= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"pointmat_frag":"\r\n{{MODULES_HEAD}}\r\n\r\nUNI vec4 color;\r\nUNI float atlasNumX;\r\n\r\n// IN vec2 pointCoord;\r\nIN float ps;\r\nIN vec2 texCoord;\r\n\r\n#ifdef HAS_TEXTURE_DIFFUSE\r\n    UNI sampler2D diffTex;\r\n#endif\r\n#ifdef HAS_TEXTURE_MASK\r\n    UNI sampler2D texMask;\r\n#endif\r\n#ifdef HAS_TEXTURE_COLORIZE\r\n    IN vec4 colorize;\r\n#endif\r\n#ifdef HAS_TEXTURE_OPACITY\r\n    IN float opacity;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_ROT\r\n    UNI sampler2D texRot;\r\n#endif\r\n\r\n\r\n#ifdef USE_ATLAS\r\n    IN float randAtlas;\r\n    #ifdef HAS_TEXTURE_ATLASLOOKUP\r\n        UNI sampler2D texAtlasLookup;\r\n    #endif\r\n#endif\r\n\r\n\r\n#ifdef VERTEX_COLORS\r\n    IN vec4 vertexColor;\r\n#endif\r\n\r\nvec3 lumcoeff = vec3(0.299,0.587,0.114);\r\n\r\n#define PI 3.14159265\r\n#define TAU (2.0*PI)\r\n\r\nvoid pR(inout vec2 p, float a)\r\n{\r\n\tp = cos(a)*p + sin(a)*vec2(p.y, -p.x);\r\n}\r\n\r\n\r\nvoid main()\r\n{\r\n    #ifdef FLIP_TEX\r\n        vec2 pointCoord=vec2(gl_PointCoord.x,(1.0-gl_PointCoord.y));\r\n    #endif\r\n    #ifndef FLIP_TEX\r\n        vec2 pointCoord=gl_PointCoord;\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_ROT\r\n        float r=texture(texRot,texCoord).r;\r\n        pointCoord-=vec2(0.5);\r\n        pR(pointCoord,r*TAU);\r\n        pointCoord+=vec2(0.5);\r\n    #endif\r\n\r\n    vec2 origPointCoord=pointCoord;\r\n\r\n\r\n    #ifdef USE_ATLAS\r\n\r\n        float atlasIdx=randAtlas;\r\n\r\n        #ifdef HAS_TEXTURE_ATLASLOOKUP\r\n            atlasIdx=texture(texAtlasLookup,texCoord).r;\r\n        #endif\r\n\r\n        #ifdef ATLAS_XFADE\r\n            vec2 pointCoord2=vec2(origPointCoord);\r\n            pointCoord2.x=origPointCoord.x/atlasNumX+ceil(atlasIdx)*(1.0/atlasNumX);\r\n        #endif\r\n\r\n        pointCoord.x=origPointCoord.x/atlasNumX+floor(atlasIdx)*(1.0/atlasNumX);\r\n\r\n\r\n    #endif\r\n\r\n    {{MODULE_BEGIN_FRAG}}\r\n\r\n    if(ps<1.0)discard;\r\n\r\n    vec4 col=color;\r\n\r\n    #ifdef HAS_TEXTURE_MASK\r\n        float mask;\r\n        #ifdef TEXTURE_MASK_R\r\n            mask=texture(texMask,pointCoord).r;\r\n        #endif\r\n        #ifdef TEXTURE_MASK_A\r\n            mask=texture(texMask,pointCoord).a;\r\n        #endif\r\n        #ifdef TEXTURE_MASK_LUMI\r\n        \tmask = dot(texture(texMask,pointCoord).rgb, lumcoeff);\r\n        #endif\r\n\r\n        #ifdef ATLAS_XFADE\r\n            float mask2=texture(texMask,pointCoord2).r;\r\n\r\n            #ifdef TEXTURE_MASK_A\r\n                mask2=texture(texMask,pointCoord2).a;\r\n            #endif\r\n            #ifdef TEXTURE_MASK_LUMI\r\n            \tmask2 = dot(texture(texMask,pointCoord2).rgb, lumcoeff);\r\n            #endif\r\n\r\n            mask=mix(mask,mask2,fract(atlasIdx));\r\n        #endif\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_DIFFUSE\r\n\r\n        col=texture(diffTex,pointCoord);\r\n\r\n        #ifdef ATLAS_XFADE\r\n            vec4 col2=texture(diffTex,pointCoord2);\r\n            col=mix(col,col2,fract(atlasIdx));\r\n        #endif\r\n\r\n        #ifdef COLORIZE_TEXTURE\r\n            col.rgb*=color.rgb;\r\n        #endif\r\n    #endif\r\n\r\n    col.a*=color.a;\r\n\r\n\r\n    #ifdef MAKE_ROUND\r\n\r\n        #ifndef MAKE_ROUNDAA\r\n            if ((gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5) > 0.25) discard; //col.a=0.0;\r\n        #endif\r\n\r\n        #ifdef MAKE_ROUNDAA\r\n            float circ=(gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5);\r\n\r\n            float a=smoothstep(0.25,0.25-fwidth(gl_PointCoord.x),circ);\r\n            if(a==0.0)discard;\r\n            col.a=a*color.a;\r\n        #endif\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_COLORIZE\r\n        col*=colorize;\r\n    #endif\r\n\r\n    #ifdef TEXTURE_COLORIZE_MUL\r\n        col*=color;\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_MASK\r\n        col.a*=mask;\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        col.a*=opacity;\r\n    #endif\r\n\r\n    #ifdef VERTEX_COLORS\r\n        col.rgb = vertexColor.rgb;\r\n        col.a *= vertexColor.a;\r\n    #endif\r\n\r\n    if (col.a <= 0.0) discard;\r\n\r\n    #ifdef HAS_TEXTURE_COLORIZE\r\n        col*=colorize;\r\n    #endif\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n\r\n    outColor = col;\r\n}\r\n","pointmat_vert":"{{MODULES_HEAD}}\r\n\r\n\r\n\r\nIN vec3 vPosition;\r\nIN vec2 attrTexCoord;\r\nIN vec3 attrVertNormal;\r\nIN vec3 attrTangent;\r\nIN vec3 attrBiTangent;\r\nIN float attrPointSize;\r\n\r\n#ifdef VERTEX_COLORS\r\n    IN vec4 attrVertColor;\r\n    OUT vec4 vertexColor;\r\n#endif\r\n\r\nOUT vec3 norm;\r\nOUT float ps;\r\n\r\nOUT vec2 texCoord;\r\n\r\n\r\n#ifdef HAS_TEXTURES\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_COLORIZE\r\n   UNI sampler2D texColorize;\r\n   OUT vec4 colorize;\r\n#endif\r\n#ifdef HAS_TEXTURE_OPACITY\r\n    UNI sampler2D texOpacity;\r\n    OUT float opacity;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_POINTSIZE\r\n   UNI sampler2D texPointSize;\r\n   UNI float texPointSizeMul;\r\n#endif\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\n\r\nUNI float pointSize;\r\nUNI vec3 camPos;\r\n\r\nUNI float canvasWidth;\r\nUNI float canvasHeight;\r\nUNI float camDistMul;\r\nUNI float randomSize;\r\nUNI float minPointSize;\r\nUNI float pixelRatio;\r\n\r\nIN float attrVertIndex;\r\n\r\nUNI float atlasNumX;\r\n\r\n#ifdef USE_ATLAS\r\n    OUT float randAtlas;\r\n#endif\r\n\r\nfloat rand(float n){return fract(sin(n) * 5711.5711123);}\r\n\r\n#define POINTMATERIAL\r\n\r\nvoid main()\r\n{\r\n    norm=attrVertNormal;\r\n    #ifdef PIXELSIZE\r\n        float psMul=1.0;\r\n    #endif\r\n\r\n    #ifndef PIXELSIZE\r\n        float psMul=sqrt(canvasWidth/canvasHeight)+0.00000000001;\r\n    #endif\r\n\r\n    #ifdef USE_ATLAS\r\n        randAtlas=atlasNumX*rand(attrVertIndex+vPosition.x);\r\n    #endif\r\n\r\n    vec3 tangent=attrTangent;\r\n    vec3 bitangent=attrBiTangent;\r\n\r\n\r\n    #ifdef VERTEX_COLORS\r\n        vertexColor=attrVertColor;\r\n    #endif\r\n\r\n    // #ifdef HAS_TEXTURES\r\n        texCoord=attrTexCoord;\r\n    // #endif\r\n\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        // opacity=texture(texOpacity,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex))).r;\r\n        opacity=texture(texOpacity,texCoord).r;\r\n    #endif\r\n\r\n\r\n    #ifdef HAS_TEXTURE_COLORIZE\r\n        #ifdef RANDOM_COLORIZE\r\n            colorize=texture(texColorize,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex)));\r\n        #endif\r\n        #ifndef RANDOM_COLORIZE\r\n            colorize=texture(texColorize,texCoord);\r\n        #endif\r\n    #endif\r\n\r\n\r\n\r\n\r\n\r\n    mat4 mMatrix=modelMatrix;\r\n    vec4 pos = vec4( vPosition, 1. );\r\n\r\n    gl_PointSize=0.0;\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    vec4 model=mMatrix * pos;\r\n\r\n    psMul+=rand(texCoord.x*texCoord.y+texCoord.y*3.0+texCoord.x*2.0+attrVertIndex)*randomSize;\r\n\r\n    float addPointSize=0.0;\r\n    #ifdef HAS_TEXTURE_POINTSIZE\r\n\r\n        #ifdef POINTSIZE_CHAN_R\r\n            addPointSize=texture(texPointSize,texCoord).r;\r\n        #endif\r\n        #ifdef POINTSIZE_CHAN_G\r\n            addPointSize=texture(texPointSize,texCoord).g;\r\n        #endif\r\n        #ifdef POINTSIZE_CHAN_B\r\n            addPointSize=texture(texPointSize,texCoord).b;\r\n        #endif\r\n\r\n        #ifdef DOTSIZEREMAPABS\r\n            addPointSize=1.0-(distance(addPointSize,0.5)*2.0);\r\n            addPointSize=addPointSize*addPointSize*addPointSize*2.0;\r\n        #endif\r\n\r\n        addPointSize*=texPointSizeMul;\r\n\r\n    #endif\r\n\r\n    ps=0.0;\r\n    #ifndef SCALE_BY_DISTANCE\r\n        ps = (pointSize+addPointSize+attrPointSize) * psMul;\r\n    #endif\r\n    #ifdef SCALE_BY_DISTANCE\r\n        float cameraDist = distance(model.xyz, camPos);\r\n        ps = ( (pointSize+addPointSize+attrPointSize) / cameraDist) * psMul;\r\n    #endif\r\n    ps=max(minPointSize,ps);\r\n    ps*=pixelRatio;\r\n\r\n    gl_PointSize += ps;\r\n\r\n\r\n    gl_Position = projMatrix * viewMatrix * model;\r\n}\r\n",};
const cgl = op.patch.cgl;

const
    render = op.inTrigger("render"),
    pointSize = op.inValueFloat("PointSize", 3),
    inPixelSize = op.inBool("Size in Pixels", false),
    randomSize = op.inValue("Random Size", 0),
    makeRound = op.inValueBool("Round", true),
    makeRoundAA = op.inValueBool("Round Antialias", false),
    doScale = op.inValueBool("Scale by Distance", false),
    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),
    a = op.inValueSlider("a", 1),
    vertCols = op.inBool("Vertex Colors", false),
    texture = op.inTexture("texture"),
    textureMulColor = op.inBool("Colorize Texture"),
    textureMask = op.inTexture("Texture Mask"),
    texMaskChan = op.inSwitch("Mask Channel", ["R", "A", "Luminance"], "R"),
    textureColorize = op.inTexture("Texture Colorize"),
    colorizeRandom = op.inValueBool("Colorize Randomize", false),
    textureOpacity = op.inTexture("Texture Opacity"),
    texturePointSize = op.inTexture("Texture Point Size"),
    texturePointSizeChannel = op.inSwitch("Point Size Channel", ["R", "G", "B"], "R"),
    texturePointSizeMul = op.inFloat("Texture Point Size Mul", 1),
    texturePointSizeMap = op.inSwitch("Map Size 0", ["Black", "Grey"], "Black"),
    flipTex = op.inValueBool("Flip Texture", false),

    inAtlasXFade = op.inBool("Atlas Cross Fade", false),
    inAtlasRepeatX = op.inFloat("Atlas Repeat X ", 1),
    inAtlasLookupTex = op.inTexture("Atlas Lookup"),
    inRotTex = op.inTexture("Rotate Texture"),
    minPointSize = op.inValueFloat("Min Point Size", 0),

    trigger = op.outTrigger("trigger"),
    shaderOut = op.outObject("shader", null, "shader");

op.setPortGroup("Texture", [texture, textureMulColor, textureMask, texMaskChan, textureColorize, textureOpacity, colorizeRandom]);
op.setPortGroup("Color", [r, g, b, a, vertCols]);
op.setPortGroup("Size", [pointSize, randomSize, makeRound, makeRoundAA, doScale, inPixelSize, texturePointSize, texturePointSizeMul, texturePointSizeChannel, texturePointSizeMap]);

op.setPortGroup("Atlas", [inAtlasRepeatX, inAtlasLookupTex, inAtlasXFade]);

r.setUiAttribs({ "colorPick": true });

const shader = new CGL.Shader(cgl, "PointMaterial", this);
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
shader.define("MAKE_ROUND");

op.toWorkPortsNeedToBeLinked(render);

const
    uniPointSize = new CGL.Uniform(shader, "f", "pointSize", pointSize),
    texturePointSizeMulUniform = new CGL.Uniform(shader, "f", "texPointSizeMul", texturePointSizeMul),
    uniRandomSize = new CGL.Uniform(shader, "f", "randomSize", randomSize),
    uniMinPointSize = new CGL.Uniform(shader, "f", "minPointSize", minPointSize),
    uniColor = new CGL.Uniform(shader, "4f", "color", r, g, b, a),
    uniRandAtlasX = new CGL.Uniform(shader, "f", "atlasNumX", inAtlasRepeatX),
    uniDpr = new CGL.Uniform(shader, "f", "pixelRatio", 1),
    uniWidth = new CGL.Uniform(shader, "f", "canvasWidth", cgl.canvasWidth),
    uniHeight = new CGL.Uniform(shader, "f", "canvasHeight", cgl.canvasHeight),
    textureUniform = new CGL.Uniform(shader, "t", "diffTex"),
    textureColorizeUniform = new CGL.Uniform(shader, "t", "texColorize"),
    textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity"),
    textureColoPointSize = new CGL.Uniform(shader, "t", "texPointSize"),
    texturePointSizeUniform = new CGL.Uniform(shader, "t", "texPointSize"),
    textureMaskUniform = new CGL.Uniform(shader, "t", "texMask"),
    textureAtlasLookupUniform = new CGL.Uniform(shader, "t", "texAtlasLookup"),
    texRotUni = new CGL.Uniform(shader, "t", "texRot");

shader.setSource(attachments.pointmat_vert, attachments.pointmat_frag);
shader.glPrimitive = cgl.gl.POINTS;
shaderOut.setRef(shader);
shaderOut.ignoreValueSerialize = true;

doScale.onChange =
    inAtlasRepeatX.onChange =
    makeRound.onChange =
    makeRoundAA.onChange =
    texture.onChange =
    textureColorize.onChange =
    textureMask.onChange =
    colorizeRandom.onChange =
    flipTex.onChange =
    texMaskChan.onChange =
    inPixelSize.onChange =
    textureOpacity.onChange =
    texturePointSize.onChange =
    texturePointSizeMap.onChange =
    texturePointSizeChannel.onChange =
    textureMulColor.onChange =
    inAtlasLookupTex.onLinkChanged =
    inRotTex.onLinkChanged =
    vertCols.onChange = updateDefines;

render.onTriggered = doRender;
updateUi();

op.preRender = function ()
{
    if (shader)shader.bind();
    doRender();
};

function doRender()
{
    uniWidth.setValue(cgl.canvasWidth);
    uniHeight.setValue(cgl.canvasHeight);
    op.checkGraphicsApi();

    cgl.pushShader(shader);
    shader.popTextures();
    if (texture.get() && !texture.get().deleted) shader.pushTexture(textureUniform, texture.get());
    if (textureMask.get()) shader.pushTexture(textureMaskUniform, textureMask.get());
    if (textureColorize.get()) shader.pushTexture(textureColorizeUniform, textureColorize.get());
    if (textureOpacity.get()) shader.pushTexture(textureOpacityUniform, textureOpacity.get());
    if (texturePointSize.get()) shader.pushTexture(texturePointSizeUniform, texturePointSize.get());
    if (inAtlasLookupTex.get()) shader.pushTexture(textureAtlasLookupUniform, inAtlasLookupTex.get());
    if (inRotTex.get()) shader.pushTexture(texRotUni, inRotTex.get());

    uniDpr.set(cgl.pixelDensity);

    trigger.trigger();

    cgl.popShader();
}

function useAtlas()
{
    return inAtlasRepeatX.get() > 0 || inAtlasLookupTex.isLinked();
}

function updateUi()
{
    inAtlasRepeatX.setUiAttribs({ "greyout": !useAtlas() });
    texMaskChan.setUiAttribs({ "greyout": !textureMask.isLinked() });

    texturePointSizeChannel.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
    texturePointSizeMul.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
    texturePointSizeMap.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
}

function updateDefines()
{
    shader.toggleDefine("USE_ATLAS", useAtlas());

    shader.toggleDefine("SCALE_BY_DISTANCE", doScale.get());
    shader.toggleDefine("MAKE_ROUND", makeRound.get());
    shader.toggleDefine("MAKE_ROUNDAA", makeRoundAA.get());

    shader.toggleDefine("ATLAS_XFADE", inAtlasXFade.get());

    shader.toggleDefine("VERTEX_COLORS", vertCols.get());
    shader.toggleDefine("RANDOM_COLORIZE", colorizeRandom.get());
    shader.toggleDefine("HAS_TEXTURE_DIFFUSE", texture.get());
    shader.toggleDefine("HAS_TEXTURE_MASK", textureMask.isLinked());
    shader.toggleDefine("HAS_TEXTURE_COLORIZE", textureColorize.isLinked());
    shader.toggleDefine("HAS_TEXTURE_OPACITY", textureOpacity.isLinked());
    shader.toggleDefine("HAS_TEXTURE_POINTSIZE", texturePointSize.isLinked());
    shader.toggleDefine("HAS_TEXTURE_ATLASLOOKUP", inAtlasLookupTex.isLinked());
    shader.toggleDefine("HAS_TEXTURE_ROT", inRotTex.isLinked());

    shader.toggleDefine("TEXTURE_COLORIZE_MUL", textureMulColor.get());

    shader.toggleDefine("FLIP_TEX", flipTex.get());
    shader.toggleDefine("TEXTURE_MASK_R", texMaskChan.get() == "R");
    shader.toggleDefine("TEXTURE_MASK_A", texMaskChan.get() == "A");
    shader.toggleDefine("TEXTURE_MASK_LUMI", texMaskChan.get() == "Luminance");
    shader.toggleDefine("PIXELSIZE", inPixelSize.get());

    shader.toggleDefine("POINTSIZE_CHAN_R", texturePointSizeChannel.get() == "R");
    shader.toggleDefine("POINTSIZE_CHAN_G", texturePointSizeChannel.get() == "G");
    shader.toggleDefine("POINTSIZE_CHAN_B", texturePointSizeChannel.get() == "B");

    shader.toggleDefine("DOTSIZEREMAPABS", texturePointSizeMap.get() == "Grey");
    updateUi();
}

}
};

CABLES.OPS["e44df958-00c7-46e4-95bb-3e6ac6c4188f"]={f:Ops.Gl.Shader.PointMaterial_v6,objName:"Ops.Gl.Shader.PointMaterial_v6"};




// **************************************************************
// 
// Ops.Gl.ClearColor
// 
// **************************************************************

Ops.Gl.ClearColor= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    r = op.inFloatSlider("r", 0.1),
    g = op.inFloatSlider("g", 0.1),
    b = op.inFloatSlider("b", 0.1),
    a = op.inFloatSlider("a", 1);

r.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;

render.onTriggered = function ()
{
    cgl.gl.clearColor(r.get(), g.get(), b.get(), a.get());
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
    trigger.trigger();
};

}
};

CABLES.OPS["19b441eb-9f63-4f35-ba08-b87841517c4d"]={f:Ops.Gl.ClearColor,objName:"Ops.Gl.ClearColor"};




// **************************************************************
// 
// Ops.Graphics.Transform
// 
// **************************************************************

Ops.Graphics.Transform= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValue("posX", 0),
    posY = op.inValue("posY", 0),
    posZ = op.inValue("posZ", 0),
    scale = op.inValue("scale", 1),
    rotX = op.inValue("rotX", 0),
    rotY = op.inValue("rotY", 0),
    rotZ = op.inValue("rotZ", 0),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Rotation", [rotX, rotY, rotZ]);
op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setUiAxisPorts(posX, posY, posZ);

op.toWorkPortsNeedToBeLinked(render, trigger);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let
    doScale = false,
    doTranslate = false,
    translationChanged = true,
    scaleChanged = true,
    rotChanged = true;

rotX.onChange = rotY.onChange = rotZ.onChange = setRotChanged;
posX.onChange = posY.onChange = posZ.onChange = setTranslateChanged;
scale.onChange = setScaleChanged;

render.onTriggered = function ()
{
    // if(!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (scaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (rotChanged) updateMatrix = true;

    if (updateMatrix) doUpdateMatrix();

    const cg = op.patch.cg || op.patch.cgl;
    cg.pushModelMatrix();
    mat4.multiply(cg.mMatrix, cg.mMatrix, transMatrix);

    trigger.trigger();
    cg.popModelMatrix();

    if (CABLES.UI)
    {
        if (!posX.isLinked() && !posY.isLinked() && !posZ.isLinked())
        {
            gui.setTransform(op.id, posX.get(), posY.get(), posZ.get());

            if (op.isCurrentUiOp())
                gui.setTransformGizmo(
                    {
                        "posX": posX,
                        "posY": posY,
                        "posZ": posZ,
                    });
        }
    }
};

// op.transform3d = function ()
// {
//     return { "pos": [posX, posY, posZ] };
// };

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    // doScale=false;
    // if(scale.get()!==0.0)
    doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function setTranslateChanged()
{
    translationChanged = true;
}

function setScaleChanged()
{
    scaleChanged = true;
}

function setRotChanged()
{
    rotChanged = true;
}

doUpdateMatrix();

}
};

CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Graphics.Transform,objName:"Ops.Graphics.Transform"};




// **************************************************************
// 
// Ops.Anim.Timer_v2
// 
// **************************************************************

Ops.Anim.Timer_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inSpeed = op.inValue("Speed", 1),
    playPause = op.inValueBool("Play", true),
    reset = op.inTriggerButton("Reset"),
    inSyncTimeline = op.inValueBool("Sync to timeline", false),
    outTime = op.outNumber("Time");

op.setPortGroup("Controls", [playPause, reset, inSpeed]);

const timer = new CABLES.Timer();
let lastTime = null;
let time = 0;
let syncTimeline = false;

playPause.onChange = setState;
setState();

function setState()
{
    if (playPause.get())
    {
        timer.play();
        op.patch.addOnAnimFrame(op);
    }
    else
    {
        timer.pause();
        op.patch.removeOnAnimFrame(op);
    }
}

reset.onTriggered = doReset;

function doReset()
{
    time = 0;
    lastTime = null;
    timer.setTime(0);
    outTime.set(0);
}

inSyncTimeline.onChange = function ()
{
    syncTimeline = inSyncTimeline.get();
    playPause.setUiAttribs({ "greyout": syncTimeline });
    reset.setUiAttribs({ "greyout": syncTimeline });
};

op.onAnimFrame = function (tt, frameNum, deltaMs)
{
    if (timer.isPlaying())
    {
        if (CABLES.overwriteTime !== undefined)
        {
            outTime.set(CABLES.overwriteTime * inSpeed.get());
        }
        else

        if (syncTimeline)
        {
            outTime.set(tt * inSpeed.get());
        }
        else
        {
            timer.update();

            const timerVal = timer.get();

            if (lastTime === null)
            {
                lastTime = timerVal;
                return;
            }

            const t = Math.abs(timerVal - lastTime);
            lastTime = timerVal;

            time += t * inSpeed.get();
            if (time != time)time = 0;
            outTime.set(time);
        }
    }
};

}
};

CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"]={f:Ops.Anim.Timer_v2,objName:"Ops.Anim.Timer_v2"};




// **************************************************************
// 
// Ops.Array.InterpolateArrays
// 
// **************************************************************

Ops.Array.InterpolateArrays= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("Exe"),
    inArr1 = op.inArray("Array 1"),
    inArr2 = op.inArray("Array 2"),
    inPerc = op.inValueSlider("perc"),
    next = op.outTrigger("Next"),
    outArr = op.outArray("Result");

let needsCalc = true;
let resultArr = [];
op.toWorkPortsNeedToBeLinked(inArr1, inArr2);
inArr1.onChange = inArr2.onChange = inPerc.onChange = calcLater;
exe.onTriggered = execute;

function calcLater()
{
    needsCalc = true;
}

function execute()
{
    let arr1 = inArr1.get();
    let arr2 = inArr2.get();

    let val1;
    let val2;
    let m;

    if (!arr1 || !arr2 || arr1.length < arr2.length)
    {
        outArr.set(null);
        return;
    }

    if (needsCalc)
    {
        if (resultArr.length != arr1.length) resultArr.length = arr1.length;

        let perc = inPerc.get();

        for (let i = 0; i < arr1.length; i++)
        {
            val1 = arr1[i];
            val2 = arr2[i];
            m = (val2 - val1) * perc + val1;
            resultArr[i] = m;
        }
        needsCalc = false;
        outArr.setRef(resultArr);
    }

    next.trigger();
}

// check that array input is string or not
inArr1.onLinkChanged = inArr2.onLinkChanged = function ()
{
    let arr1 = inArr1.get();
    let arr2 = inArr2.get();

    if (!arr1 || !arr2)
    {
        outArr.set(null);
        return;
    }

    let stringTest1 = arr1[0];
    let stringTest2 = arr2[0];

    if (typeof stringTest1 === "string" || typeof stringTest2 === "string")
    {
        outArr.set(null);
    }
};

}
};

CABLES.OPS["09296117-7312-4f80-982b-7b4a81d22cf8"]={f:Ops.Array.InterpolateArrays,objName:"Ops.Array.InterpolateArrays"};




// **************************************************************
// 
// Ops.Graphics.OrbitControls_v3
// 
// **************************************************************

Ops.Graphics.OrbitControls_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    minDist = op.inValueFloat("min distance", 1),
    maxDist = op.inValueFloat("max distance", 999999),

    minRotY = op.inValue("min rot y", 0),
    maxRotY = op.inValue("max rot y", 0),

    initialRadius = op.inValue("initial radius", 2),
    initialAxis = op.inValueSlider("initial axis y", 0.5),
    initialX = op.inValueSlider("initial axis x", 0.25),

    smoothness = op.inValueSlider("Smoothness", 1.0),
    speedX = op.inValue("Speed X", 1),
    speedY = op.inValue("Speed Y", 1),

    active = op.inValueBool("Active", true),

    allowPanning = op.inValueBool("Allow Panning", true),
    allowZooming = op.inValueBool("Allow Zooming", true),
    allowRotation = op.inValueBool("Allow Rotation", true),
    restricted = op.inValueBool("restricted", true),
    inIdentity = op.inBool("Identity", true),
    inReset = op.inTriggerButton("Reset"),

    trigger = op.outTrigger("trigger"),
    outRadius = op.outNumber("radius"),
    outXDeg = op.outNumber("Rot X"),
    outYDeg = op.outNumber("Rot Y");
    // outCoords = op.outArray("Eye/Target Pos");

op.setPortGroup("Initial Values", [initialAxis, initialX, initialRadius]);
op.setPortGroup("Interaction", [smoothness, speedX, speedY]);
op.setPortGroup("Boundaries", [minRotY, maxRotY, minDist, maxDist]);

const halfCircle = Math.PI;
const fullCircle = Math.PI * 2;

const
    vUp = vec3.create(),
    vCenter = vec3.create(),
    viewMatrix = mat4.create(),
    tempViewMatrix = mat4.create(),
    vOffset = vec3.create(),
    finalEyeAbs = vec3.create(),
    tempEye = vec3.create(),
    finalEye = vec3.create(),
    tempCenter = vec3.create(),
    finalCenter = vec3.create();

let eye = vec3.create(),
    mouseDown = false,
    radius = 5,
    lastMouseX = 0, lastMouseY = 0,
    percX = 0, percY = 0,
    px = 0,
    py = 0,
    divisor = 1,
    element = null,
    initializing = true,
    eyeTargetCoord = [0, 0, 0, 0, 0, 0],
    lastPy = 0;

op.onDelete = unbind;
smoothness.onChange = updateSmoothness;
initialRadius.onChange =
    inReset.onTriggered = reset;

eye = circlePos(0);
vec3.set(vCenter, 0, 0, 0);
vec3.set(vUp, 0, 1, 0);
updateSmoothness();
reset();

function reset()
{
    let off = 0;

    if (px % fullCircle < -halfCircle)
    {
        off = -fullCircle;
        px %= -fullCircle;
    }
    else
    if (px % fullCircle > halfCircle)
    {
        off = fullCircle;
        px %= fullCircle;
    }
    else px %= fullCircle;

    py %= (Math.PI);

    vec3.set(vOffset, 0, 0, 0);
    vec3.set(vCenter, 0, 0, 0);
    vec3.set(vUp, 0, 1, 0);

    percX = (initialX.get() * Math.PI * 2 + off);
    percY = (initialAxis.get() - 0.5);

    radius = initialRadius.get();
    eye = circlePos(percY);
}

function updateSmoothness()
{
    divisor = smoothness.get() * 10 + 1;
}

function ip(val, goal)
{
    if (initializing) return goal;
    return val + (goal - val) / divisor;
}

render.onTriggered = function ()
{
    const cgl = op.patch.cg;
    if (!cgl) return;

    if (!element)
    {
        setElement(cgl.canvas);
        bind();
    }

    cgl.pushViewMatrix();

    px = ip(px, percX);
    py = ip(py, percY);

    let degY = (py + 0.5) * 180;

    if (minRotY.get() !== 0 && degY < minRotY.get())
    {
        degY = minRotY.get();
        py = lastPy;
    }
    else if (maxRotY.get() !== 0 && degY > maxRotY.get())
    {
        degY = maxRotY.get();
        py = lastPy;
    }
    else
    {
        lastPy = py;
    }

    const degX = (px) * CGL.RAD2DEG;

    outYDeg.set(degY);
    outXDeg.set(degX);

    circlePosi(eye, py);

    vec3.add(tempEye, eye, vOffset);
    vec3.add(tempCenter, vCenter, vOffset);

    finalEye[0] = ip(finalEye[0], tempEye[0]);
    finalEye[1] = ip(finalEye[1], tempEye[1]);
    finalEye[2] = ip(finalEye[2], tempEye[2]);

    finalCenter[0] = ip(finalCenter[0], tempCenter[0]);
    finalCenter[1] = ip(finalCenter[1], tempCenter[1]);
    finalCenter[2] = ip(finalCenter[2], tempCenter[2]);

    // eyeTargetCoord[0] = finalEye[0];
    // eyeTargetCoord[1] = finalEye[1];
    // eyeTargetCoord[2] = finalEye[2];
    // eyeTargetCoord[3] = finalCenter[0];
    // eyeTargetCoord[4] = finalCenter[1];
    // eyeTargetCoord[5] = finalCenter[2];
    // outCoords.setRef(eyeTargetCoord);

    const empty = vec3.create();

    if (inIdentity.get()) mat4.identity(cgl.vMatrix);

    mat4.lookAt(viewMatrix, finalEye, finalCenter, vUp);
    mat4.rotate(viewMatrix, viewMatrix, px, vUp);

    // finaly multiply current scene viewmatrix
    mat4.multiply(cgl.vMatrix, cgl.vMatrix, viewMatrix);

    trigger.trigger();
    cgl.popViewMatrix();
    initializing = false;
};

function circlePosi(vec, perc)
{
    if (radius < minDist.get()) radius = minDist.get();
    if (radius > maxDist.get()) radius = maxDist.get();

    outRadius.set(radius);

    let i = 0, degInRad = 0;

    degInRad = 360 * perc / 2 * CGL.DEG2RAD;
    vec3.set(vec,
        Math.cos(degInRad) * radius,
        Math.sin(degInRad) * radius,
        0);
    return vec;
}

function circlePos(perc)
{
    if (radius < minDist.get())radius = minDist.get();
    if (radius > maxDist.get())radius = maxDist.get();

    outRadius.set(radius);

    let i = 0, degInRad = 0;
    const vec = vec3.create();
    degInRad = 360 * perc / 2 * CGL.DEG2RAD;
    vec3.set(vec,
        Math.cos(degInRad) * radius,
        Math.sin(degInRad) * radius,
        0);
    return vec;
}

function onmousemove(event)
{
    if (!mouseDown) return;

    const x = event.clientX;
    const y = event.clientY;

    let movementX = (x - lastMouseX);
    let movementY = (y - lastMouseY);

    movementX *= speedX.get();
    movementY *= speedY.get();

    if (event.buttons == 2 && allowPanning.get())
    {
        vOffset[2] += movementX * 0.01;
        vOffset[1] += movementY * 0.01;
    }
    else
    if (event.buttons == 4 && allowZooming.get())
    {
        radius += movementY * 0.05;
        eye = circlePos(percY);
    }
    else
    {
        if (allowRotation.get())
        {
            percX += movementX * 0.003;
            percY += movementY * 0.002;

            if (restricted.get())
            {
                if (percY > 0.5)percY = 0.5;
                if (percY < -0.5)percY = -0.5;
            }
        }
    }

    lastMouseX = x;
    lastMouseY = y;
}

function onMouseDown(event)
{
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    mouseDown = true;

    try { element.setPointerCapture(event.pointerId); }
    catch (e) {}
}

function onMouseUp(e)
{
    mouseDown = false;

    try { element.releasePointerCapture(e.pointerId); }
    catch (e) {}
}

function lockChange()
{
    const el = op.patch.cg.canvas;

    if (document.pointerLockElement === el || document.mozPointerLockElement === el || document.webkitPointerLockElement === el)
        document.addEventListener("mousemove", onmousemove, false);
}

function onMouseEnter(e)
{
}

initialX.onChange = function ()
{
    px = percX = (initialX.get() * Math.PI * 2);
};

initialAxis.onChange = function ()
{
    py = percY = (initialAxis.get() - 0.5);
    eye = circlePos(percY);
};

const onMouseWheel = function (event)
{
    if (allowZooming.get())
    {
        const delta = CGL.getWheelSpeed(event) * 0.06;
        radius += (parseFloat(delta)) * 1.2;
        eye = circlePos(percY);
    }
};

const ontouchstart = function (event)
{
    if (event.touches && event.touches.length > 0) onMouseDown(event.touches[0]);
};

const ontouchend = function (event)
{
    onMouseUp();
};

const ontouchmove = function (event)
{
    if (event.touches && event.touches.length > 0) onmousemove(event.touches[0]);
};

active.onChange = function ()
{
    if (active.get())bind();
    else unbind();
};

function setElement(ele)
{
    unbind();
    element = ele;
    bind();
}

function bind()
{
    if (!element) return;
    if (!active.get()) return unbind();

    element.addEventListener("pointermove", onmousemove);
    element.addEventListener("pointerdown", onMouseDown);
    element.addEventListener("pointerup", onMouseUp);
    element.addEventListener("pointerleave", onMouseUp);
    element.addEventListener("pointerenter", onMouseEnter);
    element.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    element.addEventListener("wheel", onMouseWheel, { "passive": true });
}

function unbind()
{
    if (!element) return;

    element.removeEventListener("pointermove", onmousemove);
    element.removeEventListener("pointerdown", onMouseDown);
    element.removeEventListener("pointerup", onMouseUp);
    element.removeEventListener("pointerleave", onMouseUp);
    element.removeEventListener("pointerenter", onMouseUp);
    element.removeEventListener("wheel", onMouseWheel);
}

}
};

CABLES.OPS["0655b098-d2a8-4ce2-a0b9-ecb2c78f873a"]={f:Ops.Graphics.OrbitControls_v3,objName:"Ops.Graphics.OrbitControls_v3"};




// **************************************************************
// 
// Ops.Gl.Meshes.TriangleSphere
// 
// **************************************************************

Ops.Gl.Meshes.TriangleSphere= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// http://paulbourke.net/geometry/circlesphere/

// http://paulbourke.net/geometry/circlesphere/csource3.c
//! !!! http://paulbourke.net/geometry/circlesphere/csource2.c

const
    render = op.inTrigger("render"),
    next = op.outTrigger("next"),
    inIterations = op.inValue("Iterations", 4),
    geomOut = op.outObject("Geometry"),
    flat = op.inValueBool("Flat", false),
    inDraw = op.inValueBool("Draw", true);

const cgl = op.patch.cgl;
let verts = [];
let geom = null;
let mesh = null;
let needsUpdate = true;
op.onDelete = function () { if (mesh)mesh.dispose(); };

flat.onChange =
inIterations.onChange = () =>
{
    needsUpdate = true;
};

render.onTriggered = function ()
{
    if (needsUpdate) generate();

    if (inDraw.get() && mesh) mesh.render();
    next.trigger();
};

function normalize(v)
{
    const len = Math.sqrt((v[0] * v[0]) + (v[1] * v[1]) + (v[2] * v[2]));
    v[0] /= len;
    v[1] /= len;
    v[2] /= len;
    return v;
}

function index(verts, geom)
{
    const num = verts.length / 3;
    const arr = [];
    const ind = [], tc = [];

    for (let i = 0; i < num; i++)
    {
        let found = false;

        for (let j = 0; j < arr.length; j += 3)
        {
            if (
                arr[j + 0] == verts[i * 3 + 0] &&
                arr[j + 1] == verts[i * 3 + 1] &&
                arr[j + 2] == verts[i * 3 + 2])
            {
                ind.push(j / 3);
                found = true;
                continue;
            }
        }

        if (!found)
        {
            arr.push(verts[i * 3 + 0]);
            arr.push(verts[i * 3 + 1]);
            arr.push(verts[i * 3 + 2]);
            ind.push(arr.length / 3 - 1);

            tc.push(verts[i * 3 + 0]);
            tc.push(verts[i * 3 + 1]);
        }
    }

    geom.verticesIndices = ind;
    geom.vertices = arr;
    geom.texCoords = tc;
}

function generate()
{
    let startTime = performance.now();
    let iterations = Math.max(1, Math.floor(inIterations.get()));
    iterations = Math.min(6, iterations);
    const f = [];
    let i, it;
    const p = [[0, 0, 1], [0, 0, -1], [-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]];

    let nt = 0, ntold;

    /* Create the level 0 object */
    const a = 1 / Math.sqrt(2.0);
    for (i = 0; i < 6; i++)
    {
        p[i][0] *= a;
        p[i][1] *= a;
    }

    for (i = 0; i < 8; i++)
    {
        f[i] = [[], [], []];
    }
    f[0][0] = p[0]; f[0][1] = p[3]; f[0][2] = p[4];
    f[1][0] = p[0]; f[1][1] = p[4]; f[1][2] = p[5];
    f[2][0] = p[0]; f[2][1] = p[5]; f[2][2] = p[2];
    f[3][0] = p[0]; f[3][1] = p[2]; f[3][2] = p[3];
    f[4][0] = p[1]; f[4][1] = p[4]; f[4][2] = p[3];
    f[5][0] = p[1]; f[5][1] = p[5]; f[5][2] = p[4];
    f[6][0] = p[1]; f[6][1] = p[2]; f[6][2] = p[5];
    f[7][0] = p[1]; f[7][1] = p[3]; f[7][2] = p[2];
    nt = 8;

    if (iterations > 1)
    {

        /* Bisect each edge and move to the surface of a unit sphere */
        for (it = 0; it < iterations; it++)
        {
            ntold = nt;
            for (i = 0; i < ntold; i++)
            {
                const pa = [], pb = [], pc = [];
                pa[0] = (f[i][0][0] + f[i][1][0]) / 2;
                pa[1] = (f[i][0][1] + f[i][1][1]) / 2;
                pa[2] = (f[i][0][2] + f[i][1][2]) / 2;
                pb[0] = (f[i][1][0] + f[i][2][0]) / 2;
                pb[1] = (f[i][1][1] + f[i][2][1]) / 2;
                pb[2] = (f[i][1][2] + f[i][2][2]) / 2;
                pc[0] = (f[i][2][0] + f[i][0][0]) / 2;
                pc[1] = (f[i][2][1] + f[i][0][1]) / 2;
                pc[2] = (f[i][2][2] + f[i][0][2]) / 2;

                normalize(pa);
                normalize(pb);
                normalize(pc);

                f.push([]);
                f[nt][0] = f[i][0]; f[nt][1] = pa; f[nt][2] = pc; nt++;
                f.push([]);
                f[nt][0] = pa; f[nt][1] = f[i][1]; f[nt][2] = pb; nt++;
                f.push([]);
                f[nt][0] = pb; f[nt][1] = f[i][2]; f[nt][2] = pc; nt++;

                f[i][0] = pa;
                f[i][1] = pb;
                f[i][2] = pc;
            }
        }
    }

    if (!geom)geom = new CGL.Geometry(op.name);
    geom.clear();

    verts = f.flat(Infinity);

    if (!flat.get()) index(verts, geom);
    else
    {
        geom.unIndex();
        const indices = [];
        for (i = 0; i < verts.length / 3; i++)indices.push(i);
        geom.vertices = verts;
        geom.verticesIndices = indices;
    }

    geom.calculateNormals({ "forceZUp": false });
    geom.calcTangentsBitangents();

    mesh = op.patch.cg.createMesh(geom, { "opId": op.id });

    geomOut.setRef(geom);
    needsUpdate = false;

    // console.log("trianglesphere took", performance.now() - startTime);
}

}
};

CABLES.OPS["ad0e8831-9554-46b3-ac03-c5c166921eda"]={f:Ops.Gl.Meshes.TriangleSphere,objName:"Ops.Gl.Meshes.TriangleSphere"};




// **************************************************************
// 
// Ops.Graphics.Geometry.GeometryAttributes
// 
// **************************************************************

Ops.Graphics.Geometry.GeometryAttributes= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    geometry = op.inObject("Geometry"),
    outFaces = op.outArray("Faces", 3),
    outVertices = op.outArray("Vertices", 3),
    outNormals = op.outArray("Normals", 3),
    outTextcoords = op.outArray("TexCoords", 2),
    outVertexColors = op.outArray("Vertex Colors", 4),
    outTangents = op.outArray("Tangents", 3),
    outBiTangents = op.outArray("BiTangents", 3);

geometry.onChange = function ()
{
    let geom = geometry.get();
    if (!geom)
    {
        outVertices.setRef(null);
        outFaces.setRef(null);
        outTextcoords.setRef(null);
        outNormals.setRef(null);
        outTangents.setRef(null);
        outBiTangents.setRef(null);
        outVertexColors.setRef(null);

        return;
    }

    // convert float32array to array
    let verts = Array.prototype.slice.call(geom.vertices);

    outVertices.setRef(verts);
    outFaces.setRef(geom.verticesIndices);
    outTextcoords.setRef(geom.texCoords);
    outNormals.setRef(geom.vertexNormals);
    outTangents.setRef(geom.tangents);
    outBiTangents.setRef(geom.biTangents);
    outVertexColors.setRef(geom.vertexColors);
};

}
};

CABLES.OPS["b215118b-de1f-4be9-8890-d07a2ecff010"]={f:Ops.Graphics.Geometry.GeometryAttributes,objName:"Ops.Graphics.Geometry.GeometryAttributes"};




// **************************************************************
// 
// Ops.Array.PointArray.TransformArray3
// 
// **************************************************************

Ops.Array.PointArray.TransformArray3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inExec = op.inTriggerButton("Transform"),
    inArr = op.inArray("Array", 3),
    transX = op.inFloat("Translate X"),
    transY = op.inFloat("Translate Y"),
    transZ = op.inFloat("Translate Z"),
    scaleX = op.inFloat("Scale X", 1),
    scaleY = op.inFloat("Scale Y", 1),
    scaleZ = op.inFloat("Scale Z", 1),
    rotX = op.inFloat("Rotation X"),
    rotY = op.inFloat("Rotation Y"),
    rotZ = op.inFloat("Rotation Z"),
    next = op.outTrigger("Next"),
    outArr = op.outArray("Result", 3);

op.setPortGroup("Translation", [transX, transY, transZ]);
op.setPortGroup("Scale", [scaleX, scaleY, scaleZ]);
op.setPortGroup("Rotation", [rotX, rotY, rotZ]);

let resultArr = [];
let needsCalc = true;

let rotVec = vec3.create();
let emptyVec = vec3.create();
let transVec = vec3.create();
let centerVec = vec3.create();

inExec.onTriggered = doTransform;

inArr.onChange =
transX.onChange = transY.onChange = transZ.onChange =
scaleX.onChange = scaleY.onChange = scaleZ.onChange =
rotX.onChange = rotY.onChange = rotZ.onChange = calcLater;

function calcLater()
{
    needsCalc = true;
}

function doTransform()
{
    let arr = inArr.get();
    if (!arr)
    {
        outArr.set(null);
        return;
    }

    if (arr.length / 3 % 1 != 0.0)
    {
        op.setUiError("invalidelength", "invalid array length!");
        outArr.set(null);
        return;
    }
    else op.setUiError("invalidelength", null);

    if (needsCalc)
    {
        resultArr.length = arr.length;

        const nrotx = rotX.get();
        const nroty = rotY.get();
        const nrotz = rotZ.get();
        const scx = scaleX.get();
        const scy = scaleY.get();
        const scz = scaleZ.get();
        const transx = transX.get();
        const transy = transY.get();
        const transz = transZ.get();
        const doRot = nrotx || nroty || nrotz;

        for (let i = 0; i < arr.length; i += 3)
        {
            resultArr[i + 0] = arr[i + 0] * scx;
            resultArr[i + 1] = arr[i + 1] * scy;
            resultArr[i + 2] = arr[i + 2] * scz;

            resultArr[i + 0] = resultArr[i + 0] + transx;
            resultArr[i + 1] = resultArr[i + 1] + transy;
            resultArr[i + 2] = resultArr[i + 2] + transz;

            if (doRot)
            {
                vec3.set(rotVec,
                    resultArr[i + 0],
                    resultArr[i + 1],
                    resultArr[i + 2]);

                if (nrotx != 0) vec3.rotateX(rotVec, rotVec, transVec, nrotx * CGL.DEG2RAD);
                if (nroty != 0) vec3.rotateY(rotVec, rotVec, transVec, nroty * CGL.DEG2RAD);
                if (nrotz != 0) vec3.rotateZ(rotVec, rotVec, transVec, nrotz * CGL.DEG2RAD);

                resultArr[i + 0] = rotVec[0];
                resultArr[i + 1] = rotVec[1];
                resultArr[i + 2] = rotVec[2];
            }
        }

        needsCalc = false;
        outArr.setRef(resultArr);
    }
    next.trigger();
}

}
};

CABLES.OPS["b18040d6-13d7-4f55-950f-3f95cafa4e90"]={f:Ops.Array.PointArray.TransformArray3,objName:"Ops.Array.PointArray.TransformArray3"};




// **************************************************************
// 
// Ops.Array.PointArray.PointsCube
// 
// **************************************************************

Ops.Array.PointArray.PointsCube= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const numx = op.inValueInt("num x", 5),
    numy = op.inValueInt("num y", 5),
    numz = op.inValueInt("num z", 5),
    mul = op.inValue("mul", 1),
    center = op.inValueBool("center", true),
    outArray = op.outArray("Array out", [], 3),
    idx = op.outNumber("Total points"),
    arrayLengthOut = op.outNumber("Array length");

let newArr = [];
outArray.set(newArr);

numx.onChange =
numy.onChange =
numz.onChange =
mul.onChange =
center.onChange = update;

function update()
{
    newArr.length = 0;

    let subX = 0;
    let subY = 0;
    let subZ = 0;

    if (center.get())
    {
        subX = ((numx.get() - 1) * mul.get()) / 2.0;
        subY = ((numy.get() - 1) * mul.get()) / 2.0;
        subZ = ((numz.get() - 1) * mul.get()) / 2.0;
    }

    let xTemp = 0;
    let yTemp = 0;
    let zTemp = 0;

    let m = mul.get();

    for (var z = 0; z < numz.get(); z++)
    {
        zTemp = (z * m) - subZ;

        for (var y = 0; y < numy.get(); y++)
        {
            yTemp = (y * m) - subY;

            for (var x = 0; x < numx.get(); x++)
            {
                xTemp = (x * m) - subX;

                newArr.push(xTemp);
                newArr.push(yTemp);
                newArr.push(zTemp);
            }
        }
    }
    idx.set(x * y * z);
    outArray.setRef(newArr);
    arrayLengthOut.set(newArr.length);
}

update();

}
};

CABLES.OPS["6030193b-089c-4565-a7b8-d837501ded52"]={f:Ops.Array.PointArray.PointsCube,objName:"Ops.Array.PointArray.PointsCube"};




// **************************************************************
// 
// Ops.Html.Elements.DivElement_v3
// 
// **************************************************************

Ops.Html.Elements.DivElement_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inText = op.inString("Text", "Hello Div"),
    inId = op.inString("Id"),
    inClass = op.inString("Class"),
    inStyle = op.inStringEditor("Style", "position:absolute;\nz-index:100;", "inline-css"),
    inInteractive = op.inValueBool("Interactive", false),
    inVisible = op.inValueBool("Visible", true),
    inBreaks = op.inValueBool("Convert Line Breaks", false),
    inPropagation = op.inValueBool("Propagate Click-Events", true),
    outElement = op.outObject("DOM Element", null, "element"),
    outHover = op.outBoolNum("Hover"),
    outClicked = op.outTrigger("Clicked");

let listenerElement = null;
let oldStr = null;
let prevDisplay = "block";
let div = null;

const canvas = op.patch.cgl.canvas.parentElement;

createElement();

inClass.onChange = updateClass;
inBreaks.onChange = inText.onChange = updateText;
inStyle.onChange = updateStyle;
inInteractive.onChange = updateInteractive;
inVisible.onChange = updateVisibility;

updateText();
updateStyle();
warning();
updateInteractive();

op.onDelete = removeElement;

outElement.onLinkChanged = updateStyle;

inInteractive.onLinkChanged =
outClicked.onLinkChanged = () =>
{
    op.setUiError("interactiveProblem", null);
    if (outClicked.isLinked() && !inInteractive.get() && !inInteractive.isLinked())
        op.setUiError("interactiveProblem", "Interactive should be activated when linking clicked port");
};

function createElement()
{
    div = op.patch.getDocument().createElement("div");
    div.dataset.op = op.id;
    div.classList.add("cablesEle");

    if (inId.get()) div.id = inId.get();

    canvas.appendChild(div);
    outElement.setRef(div);
}

function removeElement()
{
    if (div) removeClasses();
    if (div && div.parentNode) div.parentNode.removeChild(div);
    oldStr = null;
    div = null;
}

function setCSSVisible(visible)
{
    if (!visible)
    {
        div.style.visibility = "hidden";
        prevDisplay = div.style.display || "inherit";
        div.style.display = "none";
    }
    else
    {
        // prevDisplay=div.style.display||'inherit';
        if (prevDisplay == "none") prevDisplay = "inherit";
        div.style.visibility = "visible";
        div.style.display = prevDisplay;
    }
}

function updateVisibility()
{
    setCSSVisible(inVisible.get());
}

function updateText()
{
    let str = inText.get();

    if (oldStr === str) return;
    oldStr = str;

    if (str && inBreaks.get()) str = str.replace(/(?:\r\n|\r|\n)/g, "<br>");

    if (div.innerHTML != str) div.innerHTML = str;

    outElement.setRef(div);
}

// inline css inisde div
function updateStyle()
{
    if (!div) return;
    // if (inStyle.get() != div.style)
    // {
    div.setAttribute("style", inStyle.get());
    updateVisibility();
    outElement.setRef(div);
    // }

    if (!div.parentElement) canvas.appendChild(div);

    warning();
}

let oldClassesStr = "";

function removeClasses()
{
    if (!div) return;

    const classes = (inClass.get() || "").split(" ");
    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i]) div.classList.remove(classes[i]);
    }
    oldClassesStr = "";
}

function updateClass()
{
    const classes = (inClass.get() || "").split(" ");
    const oldClasses = (oldClassesStr || "").split(" ");

    let found = false;

    for (let i = 0; i < oldClasses.length; i++)
    {
        if (
            oldClasses[i] &&
            classes.indexOf(oldClasses[i].trim()) == -1)
        {
            found = true;
            div.classList.remove(oldClasses[i]);
        }
    }

    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i])
        {
            div.classList.add(classes[i].trim());
        }
    }

    oldClassesStr = inClass.get();
    warning();
}

function onMouseEnter(e)
{
    outHover.set(true);
}

function onMouseLeave(e)
{
    outHover.set(false);
}

function onMouseClick(e)
{
    if (!inPropagation.get())
    {
        e.stopPropagation();
    }
    outClicked.trigger();
}

function updateInteractive()
{
    op.setUiError("interactiveProblem", null);

    removeListeners();
    if (inInteractive.get()) addListeners();
}

inId.onChange = function ()
{
    div.id = inId.get();
};

function removeListeners()
{
    if (listenerElement)
    {
        listenerElement.removeEventListener("pointerdown", onMouseClick);
        listenerElement.removeEventListener("pointerleave", onMouseLeave);
        listenerElement.removeEventListener("pointerenter", onMouseEnter);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        listenerElement.addEventListener("pointerdown", onMouseClick);
        listenerElement.addEventListener("pointerleave", onMouseLeave);
        listenerElement.addEventListener("pointerenter", onMouseEnter);
    }
}

op.addEventListener("onEnabledChange", function (enabled)
{
    removeElement();
    if (enabled)
    {
        createElement();
        updateStyle();
        updateClass();
        updateText();
        updateInteractive();
    }
    // if(enabled) updateVisibility();
    // else setCSSVisible(false);
});

function warning()
{
    if (inClass.get() && inStyle.get())
    {
        op.setUiError("error", "Element uses external and inline CSS", 1);
    }
    else
    {
        op.setUiError("error", null);
    }
}

}
};

CABLES.OPS["d55d398c-e68e-486b-b0ce-d9c4bdf7df05"]={f:Ops.Html.Elements.DivElement_v3,objName:"Ops.Html.Elements.DivElement_v3"};




// **************************************************************
// 
// Ops.WebAudio.AudioBuffer_v2
// 
// **************************************************************

Ops.WebAudio.AudioBuffer_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const cgl = op.patch.cgl;

const
    audioCtx = CABLES.WEBAUDIO.createAudioContext(op),
    inUrlPort = op.inUrl("URL", "audio"),
    inLoadingTask = op.inBool("Create Loading Task", true),
    audioBufferPort = op.outObject("Audio Buffer", null, "audioBuffer"),
    finishedLoadingPort = op.outBoolNum("Finished Loading", false),
    sampleRatePort = op.outNumber("Sample Rate", 0),
    lengthPort = op.outNumber("Length", 0),
    durationPort = op.outNumber("Duration", 0),
    numberOfChannelsPort = op.outNumber("Number of Channels", 0),
    outLoading = op.outBool("isLoading", 0);

let currentBuffer = null;
let isLoading = false;
let currentFileUrl = null;
let urlToLoadNext = null;
let clearAfterLoad = false;
let fromData = false;
let fromDataNew = false;
let fileReader = new FileReader();
let arrayBuffer = null;
let loadingIdDataURL = 0;

if (!audioBufferPort.isLinked())
{
    op.setUiError("notConnected", "To play back sound, connect this op to a playback operator such as SamplePlayer or AudioBufferPlayer.", 0);
}
else
{
    op.setUiError("notConnected", null);
}

audioBufferPort.onLinkChanged = () =>
{
    if (audioBufferPort.isLinked())
    {
        op.setUiError("notConnected", null);
    }
    else
    {
        op.setUiError("notConnected", "To play back sound, connect this op to a playback operator such as SamplePlayer or AudioBufferPlayer.", 0);
    }
};

function loadAudioFile(url, loadFromData)
{
    currentFileUrl = url;
    isLoading = true;
    outLoading.set(isLoading);

    if (!loadFromData)
    {
        const ext = url.substr(url.lastIndexOf(".") + 1);
        if (ext === "wav")
        {
            op.setUiError("wavFormat", "You are using a .wav file. Make sure the .wav file is 16 bit to be supported by all browsers. Safari does not support 24 bit .wav files.", 1);
        }
        else
        {
            op.setUiError("wavFormat", null);
        }

        CABLES.WEBAUDIO.loadAudioFile(op.patch, url, onLoadFinished, onLoadFailed, inLoadingTask.get());
    }
    else
    {
        let fileBlob = dataURItoBlob(url);

        if (fileBlob.type === "audio/wav")
        {
            op.setUiError("wavFormat", "You are using a .wav file. Make sure the .wav file is 16 bit to be supported by all browsers. Safari does not support 24 bit .wav files.", 1);
        }
        else
        {
            op.setUiError("wavFormat", null);
        }

        if (inLoadingTask.get())
        {
            loadingIdDataURL = cgl.patch.loading.start("audiobuffer from data-url " + op.id, url, op);
            if (cgl.patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingIdDataURL, "title": " loading audio data url (" + op.id + ")" });
        }

        fileReader.readAsArrayBuffer(fileBlob);
    }
}

function dataURItoBlob(dataURI)
{
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    let ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++)
    {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    let blob = new Blob([ab], { "type": mimeString });
    return blob;
}

// change listeners
inUrlPort.onChange = function ()
{
    if (inUrlPort.get())
    {
        fromData = String(inUrlPort.get()).indexOf("data:") == 0;

        if (isLoading)
        {
            fromDataNew = String(inUrlPort.get()).indexOf("data:") == 0;
            const newUrl = fromDataNew ? inUrlPort.get() : op.patch.getFilePath(inUrlPort.get());
            if (newUrl !== currentFileUrl)
            {
                urlToLoadNext = newUrl;
            }
            else
            {
                urlToLoadNext = null;
            }

            clearAfterLoad = false;
            return;
        }

        invalidateOutPorts();
        const url = fromData ? inUrlPort.get() : op.patch.getFilePath(inUrlPort.get());

        loadAudioFile(url, fromData);
    }
    else
    {
        if (isLoading)
        {
            clearAfterLoad = true;
            return;
        }
        invalidateOutPorts();
        op.setUiError("wavFormat", null);
        op.setUiError("failedLoading", null);
    }
};

fileReader.onloadend = () =>
{
    arrayBuffer = fileReader.result;
    cgl.patch.loading.finished(loadingIdDataURL);
    if (cgl.patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingIdDataURL);
    loadFromDataURL();
};

function loadFromDataURL()
{
    if (arrayBuffer) audioCtx.decodeAudioData(arrayBuffer, onLoadFinished, onLoadFailed);
}

function onLoadFinished(buffer)
{
    isLoading = false;
    outLoading.set(isLoading);

    if (clearAfterLoad)
    {
        invalidateOutPorts();
        clearAfterLoad = false;
        return;
    }

    if (urlToLoadNext)
    {
        loadAudioFile(urlToLoadNext, fromDataNew);
        urlToLoadNext = null;
    }
    else
    {
        currentBuffer = buffer;
        lengthPort.set(buffer.length);
        durationPort.set(buffer.duration);
        numberOfChannelsPort.set(buffer.numberOfChannels);
        sampleRatePort.set(buffer.sampleRate);
        audioBufferPort.setRef(buffer);
        op.setUiError("failedLoading", null);
        finishedLoadingPort.set(true);
        fromData = false;
        fromDataNew = false;
    }
}

function onLoadFailed(e)
{
    // op.logError("Error: Loading audio file failed: ", e);
    op.setUiError("failedLoading", "The audio file could not be loaded. Make sure the right file URL is used.", 2);
    isLoading = false;
    invalidateOutPorts();
    outLoading.set(isLoading);
    currentBuffer = null;

    if (urlToLoadNext)
    {
        loadAudioFile(urlToLoadNext, fromDataNew);
        urlToLoadNext = null;
    }
}

function invalidateOutPorts()
{
    lengthPort.set(0);
    durationPort.set(0);
    numberOfChannelsPort.set(0);
    sampleRatePort.set(0);

    audioBufferPort.set(null);

    finishedLoadingPort.set(false);
}

}
};

CABLES.OPS["5f1d6a2f-1c04-4744-b0fb-910825beceee"]={f:Ops.WebAudio.AudioBuffer_v2,objName:"Ops.WebAudio.AudioBuffer_v2"};




// **************************************************************
// 
// Ops.WebAudio.AudioBufferPlayer_v2
// 
// **************************************************************

Ops.WebAudio.AudioBufferPlayer_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// input ports
const audioBufferPort = op.inObject("Audio Buffer", null, "audioBuffer");
const playPort = op.inBool("Start / Stop", false);

const loopPort = op.inBool("Loop", false);
const inResetStart = op.inTriggerButton("Restart");
const offsetPort = op.inFloat("Offset", 0);
const playbackRatePort = op.inFloat("Playback Rate", 1);
const detunePort = op.inFloat("Detune", 0);

op.setPortGroup("Playback Controls", [playPort, loopPort, inResetStart]);
op.setPortGroup("Time Controls", [offsetPort]);
op.setPortGroup("Miscellaneous", [playbackRatePort, detunePort]);

// output ports
const audioOutPort = op.outObject("Audio Out", null, "audioNode");
const outPlaying = op.outBool("Is Playing", false);
const outLoading = op.outBool("Loading", false);

// vars
let source = null;
let isPlaying = false;
let hasEnded = false;
let pausedAt = null;
let startedAt = null;
let isLoading = false;

const audioCtx = CABLES.WEBAUDIO.createAudioContext(op);

const gainNode = audioCtx.createGain();

if (!audioBufferPort.isLinked())
{
    op.setUiError("inputNotConnected", "To be able to play back sound, you need to connect an AudioBuffer to this op.", 0);
}
else
{
    op.setUiError("inputNotConnected", null);
}

audioBufferPort.onLinkChanged = () =>
{
    if (!audioBufferPort.isLinked())
    {
        op.setUiError("inputNotConnected", "To be able to play back sound, you need to connect an AudioBuffer to this op.", 0);
    }
    else
    {
        op.setUiError("inputNotConnected", null);
    }
};

if (!audioOutPort.isLinked())
{
    op.setUiError("outputNotConnected", "To be able to hear sound playing, you need to connect this op to an Output op.", 0);
}
else
{
    op.setUiError("outputNotConnected", null);
}

audioOutPort.onLinkChanged = () =>
{
    if (!audioOutPort.isLinked())
    {
        op.setUiError("outputNotConnected", "To be able to hear sound playing, you need to connect this op to an Output op.", 0);
    }
    else
    {
        op.setUiError("outputNotConnected", null);
    }
};

// change listeners
audioBufferPort.onChange = function ()
{
    if (audioBufferPort.get()) createAudioBufferSource();
    else
    {
        if (isLoading)
        {
            isLoading = false;
            outLoading.set(isLoading);
        }

        if (isPlaying)
        {
            stop(0);
            if (source) source.buffer = null;
            source = null;
        }
    }
};

playPort.onChange = function ()
{
    if (!audioBufferPort.get()) return;

    if (!source)
    {
        if (!isLoading) createAudioBufferSource();
    }

    if (playPort.get())
    {
        const startTime = 0;
        start(startTime);
    }
    else
    {
        const stopTime = 0;
        stop(stopTime);
    }
};

loopPort.onChange = function ()
{
    if (source)
    {
        source.loop = !!loopPort.get();
    }
};

detunePort.onChange = setDetune;

function setDetune()
{
    if (!source) return;

    const detune = detunePort.get() || 0;
    if (source.detune)
    {
        source.detune.setValueAtTime(
            detune,
            audioCtx.currentTime
        );
    }
}

playbackRatePort.onChange = setPlaybackRate;

function setPlaybackRate()
{
    if (!source) return;

    const playbackRate = playbackRatePort.get() || 0;
    if (playbackRate >= source.playbackRate.minValue && playbackRate <= source.playbackRate.maxValue)
    {
        source.playbackRate.setValueAtTime(
            playbackRate,
            audioCtx.currentTime
        );
    }
}

let resetTriggered = false;
inResetStart.onTriggered = function ()
{
    if (!source) return;
    if (!audioBufferPort.get()) return;
    else
    {
        if (!(audioBufferPort.get() instanceof AudioBuffer)) return;
    }

    if (playPort.get())
    {
        if (isPlaying)
        {
            resetTriggered = true;
            stop(0);
        }
        else
        {
            start(0);
        }
    }
};

// functions
function createAudioBufferSource(dontStart = false)
{
    if (isLoading) return;
    if (!(audioBufferPort.get() instanceof AudioBuffer)) return;

    isLoading = true;
    outLoading.set(isLoading);

    if (source)
    {
        source.onended = null;

        if (source.buffer)
        {
            stop(0);
            source.disconnect(gainNode);
            source.buffer = null;
        }

        source = null;
    }

    source = audioCtx.createBufferSource();

    const buffer = audioBufferPort.get();

    if (!buffer)
    {
        isLoading = false;
        outLoading.set(isLoading);
        return;
    }

    source.buffer = buffer;
    source.onended = onPlaybackEnded;
    source.loop = loopPort.get();

    source.connect(gainNode);
    setPlaybackRate();
    setDetune();
    audioOutPort.setRef(gainNode);

    isLoading = false;
    outLoading.set(isLoading);

    if (resetTriggered)
    {
        start(0);
        resetTriggered = false;
        return;
    }

    if (playPort.get() && !dontStart)
    {
        // if (!isPlaying)
        start(0);
    }
}

let timeOuting = false;
let timerId = null;

offsetPort.onChange = () =>
{
    if (offsetPort.get() >= 0) op.setUiError("offsetNegative", null);
    else
    {
        op.setUiError("offsetNegative", "Offset cannot be negative. Setting to 0.", 1);
    }

    if (source)
    {
        if (source.buffer)
        {
            if (offsetPort.get() > source.buffer.duration)
            {
                op.setUiError("offsetTooLong", "Your offset value is higher than the total time of your audio file. Please decrease the duration to be able to hear sound when playing back your buffer.", 1);
            }
            else
            {
                op.setUiError("offsetTooLong", null);
            }
        }
    }
};

function start(time)
{
    try
    {
        if (source)
        {
            let offset = Math.max(0, offsetPort.get());
            source.start(time, offset); // 0 = now

            isPlaying = true;
            hasEnded = false;
            outPlaying.set(true);
        }
        else
        {
            op.log("start() but no src...");
        }
    }
    catch (e)
    {
        op.log("Error on start: ", e.message);
        outPlaying.set(false);

        isPlaying = false;
    }
}

function recreateBuffer()
{
    let dontStart = !loopPort.get();
    createAudioBufferSource(dontStart);
}

function stop(time)
{
    try
    {
        if (source)
        {
            source.stop();
            if (!resetTriggered) recreateBuffer();
        }

        isPlaying = false;
        outPlaying.set(false);
    }
    catch (e)
    {
        op.setUiError(e);
        outPlaying.set(false);
    }
}

function onPlaybackEnded()
{
    if (loopPort.get())
    {
        isPlaying = true;
        hasEnded = false;
    }
    else
    {
        isPlaying = false;
        hasEnded = true;
    }
    outPlaying.set(isPlaying);

    recreateBuffer();
}

}
};

CABLES.OPS["3abd0dbb-eeee-4c65-ae31-b8bc2345e2d5"]={f:Ops.WebAudio.AudioBufferPlayer_v2,objName:"Ops.WebAudio.AudioBufferPlayer_v2"};




// **************************************************************
// 
// Ops.WebAudio.Output_v2
// 
// **************************************************************

Ops.WebAudio.Output_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inAudio = op.inObject("Audio In", null, "audioNode"),
    inGain = op.inFloatSlider("Volume", 1),
    inMute = op.inBool("Mute", false),
    inShowSusp = op.inBool("Show Audio Suspended Button", true),
    outVol = op.outNumber("Current Volume", 0),
    outChannels = op.outNumber("Number Of Channels"),
    outState = op.outString("Context State", "unknown");

op.setPortGroup("Volume Settings", [inMute, inGain]);

let isSuspended = false;
let audioCtx = CABLES.WEBAUDIO.createAudioContext(op);
let gainNode = audioCtx.createGain();
const destinationNode = audioCtx.destination;
let oldAudioIn = null;
let connectedToOut = false;

inMute.onChange = () =>
{
    mute(inMute.get());
    updateStateError();
};

inGain.onChange = setVolume;
op.onMasterVolumeChanged = setVolume;

let pauseId = op.patch.on("pause", setVolume);
let resumeId = op.patch.on("resume", setVolume);

audioCtx.addEventListener("statechange", updateStateError);
inShowSusp.onChange = updateAudioStateButton;

updateStateError();
updateAudioStateButton();

op.onDelete = () =>
{
    if (gainNode) gainNode.disconnect();
    gainNode = null;
    if (CABLES.interActionNeededButton) CABLES.interActionNeededButton.remove("audiosuspended");
    if (pauseId) op.patch.off(pauseId);
    if (resumeId) op.patch.off(resumeId);
};

inAudio.onChange = function ()
{
    op.setUiError("multipleInputs", null);
    if (oldAudioIn)
    {
        try
        {
            if (oldAudioIn.disconnect)
            {
                oldAudioIn.disconnect(gainNode);
            }
        }
        catch (e)
        {
            op.logError(e);
        }
    }

    if (connectedToOut)
    {
        if (gainNode)
        {
            gainNode.disconnect(destinationNode);
        }
        connectedToOut = false;
    }

    if (inAudio.get())
    {
        if (inAudio.links.length > 1) op.setUiError("multipleInputs", "You have connected multiple inputs. It is possible that you experience unexpected behaviour. Please use a Mixer op to connect multiple audio streams.", 1);
        else op.setUiError("multipleInputs", null);

        if (inAudio.get().connect)
        {
            inAudio.get().connect(gainNode);
        }
    }

    oldAudioIn = inAudio.get();

    if (!connectedToOut)
    {
        if (gainNode)
        {
            gainNode.connect(destinationNode);
        }
        connectedToOut = true;
    }

    if (audioCtx && audioCtx.destination)
    {
        outChannels.set(audioCtx.destination.maxChannelCount);
    }
    else
    {
        outChannels.set(0);
    }

    setVolume();
};

function setVolume()
{
    const masterVolume = op.patch.config.masterVolume || 0;

    let volume = inGain.get() * masterVolume;
    if (op.patch._paused || inMute.get()) volume = 0;
    volume = CABLES.clamp(volume, 0, 1);

    if (!gainNode) op.logError("gainNode undefined");
    if (gainNode) gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 0.05);

    outVol.set(volume);
}

function mute(b)
{
    if (b)
    {
        if (audioCtx.state === "suspended")
        { // make sure that when audio context is suspended node will also be muted
            // this prevents the initial short sound burst being heard when context is suspended
            // and started from user interaction
            // also note, we have to cancel the already scheduled values as we have no influence over
            // the order in which onchange handlers are executed

            if (gainNode)
            {
                gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
                gainNode.gain.value = 0;
                gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            }

            outVol.set(0);

            return;
        }
    }

    setVolume();
}

function updateStateError()
{
    outState.set(audioCtx.state);
    op.logVerbose("audioCtx.state change", audioCtx.state);

    op.setUiError("ctxSusp", null);
    if (audioCtx.state == "suspended")
    {
        const errorText = "Your Browser suspended audio context, use playButton op to play audio after a user interaction";
        let level = 1;
        if (inMute.get()) level = 0;
        op.setUiError("ctxSusp", errorText, level);
    }

    updateAudioStateButton();
}

function updateAudioStateButton()
{
    if (audioCtx.state == "suspended")
    {
        mute(true);
        if (inShowSusp.get())
        {
            isSuspended = true;

            if (CABLES.interActionNeededButton)
            {
                CABLES.interActionNeededButton.add(op.patch, "audiosuspended", () =>
                {
                    if (audioCtx && audioCtx.state == "suspended")
                    {
                        audioCtx.resume();
                        if (CABLES.interActionNeededButton)CABLES.interActionNeededButton.remove("audiosuspended");
                    }
                });
            }
        }
        else
        {
            if (CABLES.interActionNeededButton)CABLES.interActionNeededButton.remove("audiosuspended");
        }
    }
    else
    {
        if (CABLES.interActionNeededButton)CABLES.interActionNeededButton.remove("audiosuspended");

        if (isSuspended)
        {
            op.log("was suspended - set vol");
            setVolume();
        }
    }
}

}
};

CABLES.OPS["90b95403-b0c4-4980-ab3b-b6c354771c81"]={f:Ops.WebAudio.Output_v2,objName:"Ops.WebAudio.Output_v2"};




// **************************************************************
// 
// Ops.WebAudio.AudioAnalyzer_v2
// 
// **************************************************************

Ops.WebAudio.AudioAnalyzer_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const clamp = (val, min, max) => { return Math.min(Math.max(val, min), max); };
const MAX_DBFS_RANGE_24_BIT = -144;
const MAX_DBFS_RANGE_26_BIT = -96;

let audioCtx = CABLES.WEBAUDIO.createAudioContext(op);

const inTrigger = op.inTrigger("Trigger In");

const analyser = audioCtx.createAnalyser();
analyser.smoothingTimeConstant = 0.3;
analyser.fftSize = 256;

const FFT_BUFFER_SIZES = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768];

const audioIn = op.inObject("Audio In", null, "audioNode");
const inFFTSize = op.inDropDown("FFT size", FFT_BUFFER_SIZES, 256);
const inSmoothing = op.inFloatSlider("Smoothing", 0.3);

const inRangeMin = op.inFloat("Min", -90);
const inRangeMax = op.inFloat("Max", 0);

op.setPortGroup("Inputs", [inTrigger, audioIn]);
op.setPortGroup("FFT Options", [inFFTSize, inSmoothing]);
op.setPortGroup("Range (in dBFS)", [inRangeMin, inRangeMax]);
const outTrigger = op.outTrigger("Trigger Out");
const audioOut = op.outObject("Audio Out", null, "audioNode");
const fftOut = op.outArray("FFT Array");
const ampOut = op.outArray("Waveform Array");
const frequencyOut = op.outArray("Frequencies by Index Array");
const fftLength = op.outNumber("Array Length");
const avgVolumePeak = op.outNumber("Average Volume");
const avgVolumeAmp = op.outNumber("Average Volume Time-Domain");
const avgVolumeRMS = op.outNumber("RMS Volume");
let updating = false;

let fftBufferLength = analyser.frequencyBinCount;
let fftDataArray = new Uint8Array(fftBufferLength);
let ampDataArray = new Uint8Array(fftBufferLength);
let frequencyArray = [];
frequencyArray.length = fftBufferLength;
let oldAudioIn = null;

audioIn.onChange = () =>
{
    if (audioIn.get())
    {
        const audioNode = audioIn.get();
        if (audioNode.connect)
        {
            audioNode.connect(analyser);
            audioOut.set(analyser);
        }
    }
    else
    {
        if (oldAudioIn)
        {
            if (oldAudioIn.disconnect) oldAudioIn.disconnect(analyser);
            audioOut.set(null);
        }
    }

    oldAudioIn = audioIn.get();
};

function updateAnalyser()
{
    try
    {
        const fftSize = Number(inFFTSize.get());
        analyser.smoothingTimeConstant = clamp(inSmoothing.get(), 0.0, 1.0);
        analyser.fftSize = fftSize;
        const minDecibels = clamp(inRangeMin.get(), MAX_DBFS_RANGE_24_BIT, -0.0001);
        const maxDecibels = Math.max(inRangeMax.get(), analyser.minDecibels + 0.0001);
        analyser.minDecibels = minDecibels;
        analyser.maxDecibels = maxDecibels;

        if (minDecibels < MAX_DBFS_RANGE_24_BIT)
        {
            op.setUiError("maxDbRangeMin",
                "Your minimum is below the lowest possible dBFS value: "
                + MAX_DBFS_RANGE_24_BIT
                + "dBFS. To make sure your analyser data is correct, try increasing the minimum.",
                1
            );
        }
        else
        {
            op.setUiError("maxDbRangeMin", null);
        }

        if (maxDecibels > 0)
        {
            op.setUiError("maxDbRangeMax", "Your maximum is above 0 dBFS. As digital signals only go to 0 dBFS and not above, you should use 0 as your maximum.", 1);
        }
        else
        {
            op.setUiError("maxDbRangeMax", null);
        }

        if (FFT_BUFFER_SIZES.indexOf(fftSize) >= 6)
        {
            op.setUiError("highFftSize", "Please be careful with high FFT sizes as they can slow down rendering. Check the profiler to see if performance is impacted.", 1);
        }
        else
        {
            op.setUiError("highFftSize", null);
        }
    }
    catch (e)
    {
        op.log(e);
    }
}

inFFTSize.onChange = inSmoothing.onChange
= inRangeMin.onChange = inRangeMax.onChange = () =>
    {
        if (inTrigger.isLinked()) updating = true;
        else updateAnalyser();
    };

inTrigger.onTriggered = function ()
{
    if (updating)
    {
        updateAnalyser();
        updating = false;
    }

    if (fftBufferLength != analyser.frequencyBinCount)
    {
        fftBufferLength = analyser.frequencyBinCount;
        fftDataArray = new Uint8Array(fftBufferLength);
        ampDataArray = new Uint8Array(fftBufferLength);

        frequencyArray = [];
        frequencyArray.length = fftBufferLength;

        for (let index = 0; index < fftBufferLength; index += 1)
        {
            frequencyArray[index] = Math.round(index * audioCtx.sampleRate / (analyser.fftSize * 2));
        }

        frequencyOut.set(null);
        frequencyOut.set(frequencyArray);
    }

    if (!fftDataArray) return;
    if (!ampDataArray) return;

    const fftSize = Number(inFFTSize.get());

    try
    {
        analyser.getByteFrequencyData(fftDataArray);
        analyser.getByteTimeDomainData(ampDataArray);

        let values = 0;
        let peakValues = 0;
        let ampPeakValues = 0;
        for (let i = 0; i < analyser.frequencyBinCount; i++)
        {
            values += ampDataArray[i] * ampDataArray[i];
            peakValues += fftDataArray[i];
            ampPeakValues += ampDataArray[i];
        }

        const peakAverage = peakValues / analyser.frequencyBinCount;
        const peakAmpAverage = ampPeakValues / analyser.frequencyBinCount;

        avgVolumePeak.set(peakAverage / 128);
        avgVolumeAmp.set(peakAmpAverage / 256);

        let rms = Math.sqrt(values / analyser.frequencyBinCount);
        rms = Math.max(rms, rms * inSmoothing.get());
        avgVolumeRMS.set(rms / 256);
    }
    catch (e) { op.log(e); }

    // fftOut.set(null);
    fftOut.setRef(fftDataArray);

    // ampOut.set(null);
    ampOut.setRef(ampDataArray);

    fftLength.set(fftDataArray.length);
    outTrigger.trigger();
};

}
};

CABLES.OPS["ff9bf46c-676f-4aa1-95bf-5595a6813ed7"]={f:Ops.WebAudio.AudioAnalyzer_v2,objName:"Ops.WebAudio.AudioAnalyzer_v2"};




// **************************************************************
// 
// Ops.Trigger.TriggerExtender
// 
// **************************************************************

Ops.Trigger.TriggerExtender= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTriggerPort = op.inTriggerButton("Execute"),
    outTriggerPort = op.outTrigger("Next");

inTriggerPort.onTriggered = function ()
{
    outTriggerPort.trigger();
};

}
};

CABLES.OPS["7ef594f3-4907-47b0-a2d3-9854eda1679d"]={f:Ops.Trigger.TriggerExtender,objName:"Ops.Trigger.TriggerExtender"};




// **************************************************************
// 
// Ops.WebAudio.BiquadFilter_v2
// 
// **************************************************************

Ops.WebAudio.BiquadFilter_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
function clamp(val, min, max)
{
    return Math.min(Math.max(val, min), max);
}

const audioContext = CABLES.WEBAUDIO.createAudioContext(op);

// default values + min and max
const FREQUENCY_MIN = 10;
const FREQUENCY_MAX = audioContext.sampleRate / 2; // Nyquist frequency.
const Q_MIN = 0.0001;
const Q_MAX = 1000;
const GAIN_MIN = -40;
const GAIN_MAX = 40;

const filterNode = audioContext.createBiquadFilter();

const inAudio = op.inObject("Audio In", null, "audioNode");
const inFilterType = op.inDropDown("Type", ["peaking", "lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass"], "peaking");

const inFrequency = op.inFloat("Frequency", 2000);
const inQ = op.inFloat("Q", 0.0001);
const inGain = op.inFloat("Gain", 0);

const inDetune = op.inInt("Detune", 0);
const inFrequencyArray = op.inArray("Frequency Array");

op.setPortGroup("Filter Settings", [inFilterType, inFrequency, inQ, inGain]);
op.setPortGroup("Detune (in cents)", [inDetune]);
op.setPortGroup("Filter Response Input", [inFrequencyArray]);
const outAudio = op.outObject("Audio Out", null, "audioNode");
const outMagnitudeResponseArray = op.outArray("Magnitude Response Array");
const outPhaseResponseArray = op.outArray("Phase Response Array");
const responseArraysLength = op.outNumber("Response Arrays Length");

let oldAudioIn = null;
filterNode.type = inFilterType.get();

let oldLength = 0;
let frequencyArray = null;
let phaseResponseArray = null;
let magnitudeResponseArray = null;

function updateFrequencyResponse()
{
    const frequencies = inFrequencyArray.get();

    if (!frequencies) return;

    if (inAudio.get())
    {
        if (oldLength !== frequencies.length)
        {
            frequencyArray = new Float32Array(frequencies);
            phaseResponseArray = new Float32Array(frequencies.length);
            magnitudeResponseArray = new Float32Array(frequencies.length);
            oldLength = frequencies.length;
        }

        if (oldLength)
        {
            filterNode.getFrequencyResponse(frequencyArray, phaseResponseArray, magnitudeResponseArray);

            outMagnitudeResponseArray.set(null);
            outMagnitudeResponseArray.set(magnitudeResponseArray);

            outPhaseResponseArray.set(null);
            outPhaseResponseArray.set(phaseResponseArray);

            responseArraysLength.set(frequencies.length);
        }
        else
        {
            outMagnitudeResponseArray.set(null);
            outPhaseResponseArray.set(null);
            responseArraysLength.set(0);
        }
    }
}

inFrequencyArray.onChange = () => updateFrequencyResponse();
inAudio.onChange = function ()
{
    if (!inAudio.get())
    {
        if (oldAudioIn)
        {
            try
            {
                if (oldAudioIn.disconnect) oldAudioIn.disconnect(filterNode);
            }
            catch (e)
            {
                op.log(e);
            }
        }

        outAudio.set(null);
    }
    else
    {
        if (inAudio.get().connect) inAudio.get().connect(filterNode);
    }
    oldAudioIn = inAudio.get();
    outAudio.set(filterNode);
};

inFilterType.onChange = () =>
{
    const type = inFilterType.get();
    inGain.setUiAttribs({
        "greyout": ["lowpass", "highpass", "bandpass", "notch", "allpass"].includes(type)
    });

    inQ.setUiAttribs({
        "greyout": ["lowshelf", "highshelf"].includes(type)
    });

    filterNode.type = type;
    updateFrequencyResponse();
};

inFrequency.onChange = () =>
{
    const freq = inFrequency.get();
    if (freq)
    {
        if (freq >= FREQUENCY_MIN && freq <= FREQUENCY_MAX)
        {
            filterNode.frequency.setValueAtTime(clamp(freq, FREQUENCY_MIN, FREQUENCY_MAX), audioContext.currentTime);
            op.setUiError("freqRange", null);
        }
        if (freq < FREQUENCY_MIN)
        {
            op.setUiError("freqRange", "The frequency you selected is lower than the possible frequency of " + FREQUENCY_MIN + " Hz.", 1);
        }
        else if (freq > FREQUENCY_MAX)
        {
            op.setUiError("freqRange", "The frequency you selected is higher than the possible frequency of " + FREQUENCY_MAX + " Hz.", 1);
        }
    }
    updateFrequencyResponse();
};

inDetune.onChange = () =>
{
    filterNode.detune.setValueAtTime(inDetune.get(), audioContext.currentTime);
    updateFrequencyResponse();
};

inQ.onChange = () =>
{
    const q = inQ.get();
    filterNode.Q.setValueAtTime(clamp(q, Q_MIN, Q_MAX), audioContext.currentTime);

    if (q < Q_MIN) op.setUiError("qRange", "Your Q value is below the minimum possible value of " + Q_MIN + ".", 1);
    else if (q > Q_MAX) op.setUiError("qRange", "Your Q value is above the maximum possible value of " + Q_MAX + ".", 1);
    else
    {
        op.setUiError("qRange", null);
    }
    updateFrequencyResponse();
};

inGain.onChange = () =>
{
    const gain = inGain.get();
    filterNode.gain.setValueAtTime(clamp(gain, GAIN_MIN, GAIN_MAX), audioContext.currentTime);
    if (gain < GAIN_MIN) op.setUiError("gainRange", "Your gain value is below the minimum possible value of " + GAIN_MIN + " dB.", 1);
    else if (gain > GAIN_MAX) op.setUiError("gainRange", "Your gain value is above the maximum possible value of " + GAIN_MAX + " dB.", 1);
    else
    {
        op.setUiError("gainRange", null);
    }
    updateFrequencyResponse();
};

}
};

CABLES.OPS["a7b30545-6db3-47b5-8ffc-f659accd0eb6"]={f:Ops.WebAudio.BiquadFilter_v2,objName:"Ops.WebAudio.BiquadFilter_v2"};




// **************************************************************
// 
// Ops.Anim.Smooth
// 
// **************************************************************

Ops.Anim.Smooth= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Update"),
    inMode = op.inBool("Separate inc/dec", false),
    inVal = op.inValue("Value"),
    next = op.outTrigger("Next"),
    inDivisorUp = op.inValue("Inc factor", 4),
    inDivisorDown = op.inValue("Dec factor", 4),
    result = op.outNumber("Result", 0);

let val = 0;
let goal = 0;
let oldVal = 0;
let lastTrigger = 0;

op.toWorkPortsNeedToBeLinked(exec);

let divisorUp;
let divisorDown;
let divisor = 4;
let finished = true;

let selectIndex = 0;
const MODE_SINGLE = 0;
const MODE_UP_DOWN = 1;

onFilterChange();
getDivisors();

inMode.setUiAttribs({ "hidePort": true });

inDivisorUp.onChange = inDivisorDown.onChange = getDivisors;
inMode.onChange = onFilterChange;
update();

function onFilterChange()
{
    const selectedMode = inMode.get();
    if (!selectedMode) selectIndex = MODE_SINGLE;
    else selectIndex = MODE_UP_DOWN;

    if (selectIndex == MODE_SINGLE)
    {
        inDivisorDown.setUiAttribs({ "greyout": true });
        inDivisorUp.setUiAttribs({ "title": "Inc/Dec factor" });
    }
    else if (selectIndex == MODE_UP_DOWN)
    {
        inDivisorDown.setUiAttribs({ "greyout": false });
        inDivisorUp.setUiAttribs({ "title": "Inc factor" });
    }

    getDivisors();
    update();
}

function getDivisors()
{
    if (selectIndex == MODE_SINGLE)
    {
        divisorUp = inDivisorUp.get();
        divisorDown = inDivisorUp.get();
    }
    else if (selectIndex == MODE_UP_DOWN)
    {
        divisorUp = inDivisorUp.get();
        divisorDown = inDivisorDown.get();
    }

    if (divisorUp <= 0.2 || divisorUp != divisorUp)divisorUp = 0.2;
    if (divisorDown <= 0.2 || divisorDown != divisorDown)divisorDown = 0.2;
}

inVal.onChange = function ()
{
    finished = false;
    let oldGoal = goal;
    goal = inVal.get();
};

inDivisorUp.onChange = function ()
{
    getDivisors();
};

function update()
{
    let tm = 1;
    if (performance.now() - lastTrigger > 500 || lastTrigger === 0) val = inVal.get() || 0;
    else tm = (performance.now() - lastTrigger) / (performance.now() - lastTrigger);
    lastTrigger = performance.now();

    if (val != val)val = 0;

    if (divisor <= 0)divisor = 0.0001;

    const diff = goal - val;

    if (diff >= 0) val += (diff) / (divisorDown * tm);
    else val += (diff) / (divisorUp * tm);

    if (Math.abs(diff) < 0.00001)val = goal;

    if (divisor != divisor)val = 0;
    if (val != val || val == -Infinity || val == Infinity)val = inVal.get();

    if (oldVal != val)
    {
        result.set(val);
        oldVal = val;
    }

    if (val == goal && !finished)
    {
        finished = true;
        result.set(val);
    }
}

exec.onTriggered = function ()
{
    update();
    next.trigger();
};

}
};

CABLES.OPS["5677b5b5-753a-4fbf-9e91-64c81ec68a2f"]={f:Ops.Anim.Smooth,objName:"Ops.Anim.Smooth"};




// **************************************************************
// 
// Ops.Math.Ease
// 
// **************************************************************

Ops.Math.Ease= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inVal = op.inValue("Value"),
    inMin = op.inValue("Min", 0),
    inMax = op.inValue("Max", 1),
    result = op.outNumber("Result"),
    anim = new CABLES.Anim();

anim.createPort(op, "Easing", updateAnimEasing);
anim.setValue(0, 0);
anim.setValue(1, 1);

op.onLoaded = inMin.onChange = inMax.onChange = updateMinMax;

function updateMinMax()
{
    anim.keys[0].time = anim.keys[0].value = Math.min(inMin.get(), inMax.get());
    anim.keys[1].time = anim.keys[1].value = Math.max(inMin.get(), inMax.get());
}

function updateAnimEasing()
{
    anim.keys[0].setEasing(anim.defaultEasing);
}

inVal.onChange = function ()
{
    const r = anim.getValue(inVal.get());
    result.set(r);
};

}
};

CABLES.OPS["8f6e4a08-33e6-408f-ac4a-198bd03b417b"]={f:Ops.Math.Ease,objName:"Ops.Math.Ease"};




// **************************************************************
// 
// Ops.Math.MapRange
// 
// **************************************************************

Ops.Math.MapRange= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value", 0),
    old_min = op.inValueFloat("old min", 0),
    old_max = op.inValueFloat("old max", 1),
    new_min = op.inValueFloat("new min", 0),
    new_max = op.inValueFloat("new max", 1),
    easing = op.inValueSelect("Easing", ["Linear", "Smoothstep", "Smootherstep"], "Linear"),
    inClamp = op.inBool("Clamp", true),
    result = op.outNumber("result", 0);

op.setPortGroup("Input Range", [old_min, old_max]);
op.setPortGroup("Output Range", [new_min, new_max]);

let doClamp = true;
let ease = 0;
let r = 0;

v.onChange =
    old_min.onChange =
    old_max.onChange =
    new_min.onChange =
    new_max.onChange = exec;

exec();

inClamp.onChange =
() =>
{
    doClamp = inClamp.get();
    exec();
};

easing.onChange = function ()
{
    if (easing.get() == "Smoothstep") ease = 1;
    else if (easing.get() == "Smootherstep") ease = 2;
    else ease = 0;
};

function exec()
{
    const nMin = new_min.get();
    const nMax = new_max.get();
    const oMin = old_min.get();
    const oMax = old_max.get();
    let x = v.get();

    if (doClamp)
    {
        if (x >= Math.max(oMax, oMin))
        {
            result.set(nMax);
            return;
        }
        else
        if (x <= Math.min(oMax, oMin))
        {
            result.set(nMin);
            return;
        }
    }

    let reverseInput = false;
    const oldMin = Math.min(oMin, oMax);
    const oldMax = Math.max(oMin, oMax);
    if (oldMin != oMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(nMin, nMax);
    const newMax = Math.max(nMin, nMax);
    if (newMin != nMin) reverseOutput = true;

    let portion = 0;

    if (reverseInput) portion = (oldMax - x) * (newMax - newMin) / (oldMax - oldMin);
    else portion = (x - oldMin) * (newMax - newMin) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (ease === 0)
    {
        result.set(r);
    }
    else
    if (ease == 1)
    {
        x = Math.max(0, Math.min(1, (r - nMin) / (nMax - nMin)));
        result.set(nMin + x * x * (3 - 2 * x) * (nMax - nMin)); // smoothstep
    }
    else
    if (ease == 2)
    {
        x = Math.max(0, Math.min(1, (r - nMin) / (nMax - nMin)));
        result.set(nMin + x * x * x * (x * (x * 6 - 15) + 10) * (nMax - nMin)); // smootherstep
    }
}

}
};

CABLES.OPS["2617b407-60a0-4ff6-b4a7-18136cfa7817"]={f:Ops.Math.MapRange,objName:"Ops.Math.MapRange"};




// **************************************************************
// 
// Ops.Trigger.TriggerNumber
// 
// **************************************************************

Ops.Trigger.TriggerNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    setValuePort = op.inTriggerButton("Set"),
    valuePort = op.inValueFloat("Number"),
    outNext = op.outTrigger("Next"),
    outValuePort = op.outNumber("Out Value");

outValuePort.changeAlways = true;

setValuePort.onTriggered = function ()
{
    outValuePort.set(valuePort.get());
    outNext.trigger();
};

}
};

CABLES.OPS["9989b1c0-1073-4d5f-bfa0-36dd98b66e27"]={f:Ops.Trigger.TriggerNumber,objName:"Ops.Trigger.TriggerNumber"};




// **************************************************************
// 
// Ops.Array.RandomNumbersArray_v4
// 
// **************************************************************

Ops.Array.RandomNumbersArray_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    numValues = op.inValueInt("Num Values", 100),
    inModeSwitch = op.inSwitch("Mode", ["A", "AB", "ABC", "ABCD"], "A"),
    inSeed = op.inValueFloat("Random Seed ", 0),
    inInteger = op.inBool("Integer", false),
    inClosed = op.inValueBool("Last == First"),
    outValues = op.outArray("Array Out"),
    outTotalPoints = op.outNumber("Chunks Amount"),
    outArrayLength = op.outNumber("Array length");

const letters = ["A", "B", "C", "D"];
const arr = [];

const inArray = letters.map(function (value)
{
    return {
        "min": op.inValueFloat("Min " + value, -1),
        "max": op.inValueFloat("Max " + value, 1),
    };
});

for (let i = 0; i < inArray.length; i += 1)
{
    const portObj = inArray[i];
    const keys = Object.keys(portObj);

    op.setPortGroup("Value Range " + letters[i], keys.map(function (key) { return portObj[key]; }));

    if (i > 0) keys.forEach(function (key) { portObj[key].setUiAttribs({ "greyout": true }); });
}

inModeSwitch.onChange = function ()
{
    const mode = inModeSwitch.get();
    const modes = inModeSwitch.uiAttribs.values;

    outValues.setUiAttribs({ "stride": inModeSwitch.get().length });

    const index = modes.indexOf(mode);

    inArray.forEach(function (portObj, i)
    {
        const keys = Object.keys(portObj);
        keys.forEach(function (key, j)
        {
            if (i <= index) portObj[key].setUiAttribs({ "greyout": false });
            else portObj[key].setUiAttribs({ "greyout": true });
        });
    });
    init();
};

outValues.ignoreValueSerialize = true;

inClosed.onChange =
    numValues.onChange =
    inSeed.onChange =
    inInteger.onChange = init;

const minMaxArray = [];

init();

function init()
{
    const mode = inModeSwitch.get();
    const modes = inModeSwitch.uiAttribs.values;
    const index = modes.indexOf(mode);

    const n = Math.floor(Math.abs(numValues.get()));
    Math.randomSeed = inSeed.get();

    op.setUiAttrib({ "extendTitle": n + "*" + mode.length });

    const dimension = index + 1;
    const length = n * dimension;

    arr.length = length;
    const tupleLength = length / dimension;
    const isInteger = inInteger.get();

    // optimization: we only need to fetch the max min for each component once
    for (let i = 0; i < dimension; i += 1)
    {
        const portObj = inArray[i];
        const max = portObj.max.get();
        const min = portObj.min.get();
        minMaxArray[i] = [min, max];
    }

    for (let j = 0; j < tupleLength; j += 1)
    {
        for (let k = 0; k < dimension; k += 1)
        {
            const min = minMaxArray[k][0];
            const max = minMaxArray[k][1];
            const index = j * dimension + k;

            if (isInteger) arr[index] = Math.floor(Math.seededRandom() * ((max + 1) - min) + min);
            else arr[index] = Math.seededRandom() * (max - min) + min;
        }
    }

    if (inClosed.get() && arr.length > dimension)
    {
        for (let i = 0; i < dimension; i++)
            arr[arr.length - 3 + i] = arr[i];
    }

    outValues.setRef(arr);
    outTotalPoints.set(arr.length / dimension);
    outArrayLength.set(arr.length);
}

// assign change handler
inArray.forEach(function (obj)
{
    Object.keys(obj).forEach(function (key)
    {
        const x = obj[key];
        x.onChange = init;
    });
});

}
};

CABLES.OPS["8a9fa2c6-c229-49a9-9dc8-247001539217"]={f:Ops.Array.RandomNumbersArray_v4,objName:"Ops.Array.RandomNumbersArray_v4"};




// **************************************************************
// 
// Ops.Trigger.TriggerSend
// 
// **************************************************************

Ops.Trigger.TriggerSend= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("Trigger"),
    next = op.outTrigger("Next");

op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.onChange = updateName;

trigger.onTriggered = doTrigger;

op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

updateVarNamesDropdown();

op.varName.setUiAttribs({ "_triggerSelect": true });

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        const vars = op.patch.namedTriggers;
        varnames.push("+ create new one");
        for (const i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

function updateName()
{
    if (CABLES.UI)
    {
        if (op.varName.get() == "+ create new one")
        {
            new CABLES.UI.ModalDialog({
                "prompt": true,
                "title": "New Trigger",
                "text": "Enter a name for the new trigger",
                "promptValue": "",
                "promptOk": (str) =>
                {
                    op.varName.set(str);
                    op.patch.namedTriggers[str] = op.patch.namedTriggers[str] || [];
                    updateVarNamesDropdown();
                }
            });
            return;
        }

        op.refreshParams();
    }

    if (!op.patch.namedTriggers[op.varName.get()])
    {
        op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
        op.patch.emitEvent("namedTriggersChanged");
    }

    op.setTitle(">" + op.varName.get());

    op.refreshParams();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
}

function doTrigger()
{
    const arr = op.patch.namedTriggers[op.varName.get()];
    // fire an event even if noone is receiving this trigger
    // this way TriggerReceiveFilter can still handle it
    op.patch.emitEvent("namedTriggerSent", op.varName.get());

    if (!arr)
    {
        op.setUiError("unknowntrigger", "unknown trigger");
        return;
    }
    else op.setUiError("unknowntrigger", null);

    for (let i = 0; i < arr.length; i++)
    {
        arr[i]();
    }

    next.trigger();
}

}
};

CABLES.OPS["ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0"]={f:Ops.Trigger.TriggerSend,objName:"Ops.Trigger.TriggerSend"};




// **************************************************************
// 
// Ops.Trigger.TriggerReceive
// 
// **************************************************************

Ops.Trigger.TriggerReceive= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const next = op.outTrigger("Triggered");
op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.setUiAttribs({ "_triggerSelect": true });

updateVarNamesDropdown();
op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

let oldName = null;

function doTrigger()
{
    next.trigger();
}

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        let vars = op.patch.namedTriggers;

        for (let i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

op.varName.onChange = function ()
{
    if (oldName)
    {
        let oldCbs = op.patch.namedTriggers[oldName];
        let a = oldCbs.indexOf(doTrigger);
        if (a != -1) oldCbs.splice(a, 1);
    }

    op.setTitle(">" + op.varName.get());
    op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
    let cbs = op.patch.namedTriggers[op.varName.get()];

    cbs.push(doTrigger);
    oldName = op.varName.get();
    updateError();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
};

op.on("uiParamPanel", updateError);

function updateError()
{
    if (!op.varName.get())
    {
        op.setUiError("unknowntrigger", "unknown trigger");
    }
    else op.setUiError("unknowntrigger", null);
}

}
};

CABLES.OPS["0816c999-f2db-466b-9777-2814573574c5"]={f:Ops.Trigger.TriggerReceive,objName:"Ops.Trigger.TriggerReceive"};




// **************************************************************
// 
// Ops.Anim.LFO_v3
// 
// **************************************************************

Ops.Anim.LFO_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    time = op.inValue("Time"),
    speed = op.inFloat("Frequency", 1),
    type = op.inValueSelect("Type", ["sine", "triangle", "ramp up", "ramp down", "square"], "sine"),
    phase = op.inValue("Phase", 0),
    rangeMin = op.inValue("Range Min", -1),
    rangeMax = op.inValue("Range Max", 1),
    result = op.outNumber("Result");

let v = 0;
type.onChange = updateType;

updateType();

const PI2 = Math.PI / 2;

function updateType()
{
    if (type.get() == "sine") time.onChange = sine;
    if (type.get() == "ramp up") time.onChange = rampUp;
    if (type.get() == "ramp down") time.onChange = rampDown;
    if (type.get() == "square") time.onChange = square;
    if (type.get() == "triangle") time.onChange = triangle;
}

function updateTime()
{
    return (time.get() * speed.get()) + phase.get();
}

function square()
{
    let t = updateTime() + 0.5;
    v = t % 2.0;
    if (v <= 1.0)v = -1;
    else v = 1;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampUp()
{
    let t = (updateTime() + 1);
    v = t % 1.0;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function rampDown()
{
    let t = updateTime();
    v = t % 1.0;
    v -= 0.5;
    v *= -2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function triangle()
{
    let t = updateTime();
    v = t % 2.0;
    if (v > 1) v = 2.0 - v;
    v -= 0.5;
    v *= 2.0;
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

function sine()
{
    let t = updateTime() * Math.PI - (PI2);
    v = Math.sin((t));
    v = CABLES.map(v, -1, 1, rangeMin.get(), rangeMax.get());
    result.set(v);
}

}
};

CABLES.OPS["5bdbe26b-dea3-4266-850c-1b66ed29936e"]={f:Ops.Anim.LFO_v3,objName:"Ops.Anim.LFO_v3"};




// **************************************************************
// 
// Ops.Math.Multiply
// 
// **************************************************************

Ops.Math.Multiply= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 1),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = update;
update();

function update()
{
    const n1 = number1.get();
    const n2 = number2.get();

    result.set(n1 * n2);
}

}
};

CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"]={f:Ops.Math.Multiply,objName:"Ops.Math.Multiply"};




// **************************************************************
// 
// Ops.Math.Clamp
// 
// **************************************************************

Ops.Math.Clamp= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValueFloat("val", 0.5),
    min = op.inValueFloat("min", 0),
    max = op.inValueFloat("max", 1),
    ignore = op.inValueBool("ignore outside values"),
    result = op.outNumber("result");

val.onChange = min.onChange = max.onChange = clamp;

function clamp()
{
    if (ignore.get())
    {
        if (val.get() > max.get()) return;
        if (val.get() < min.get()) return;
    }
    result.set(Math.min(Math.max(val.get(), min.get()), max.get()));
}

}
};

CABLES.OPS["cda1a98e-5e16-40bd-9b18-a67e9eaad5a1"]={f:Ops.Math.Clamp,objName:"Ops.Math.Clamp"};




// **************************************************************
// 
// Ops.Trigger.Sequence
// 
// **************************************************************

Ops.Trigger.Sequence= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    cleanup = op.inTriggerButton("Clean up connections");

op.setUiAttrib({ "resizable": true, "resizableY": false, "stretchPorts": true });
const
    exes = [],
    triggers = [],
    num = 16;

let
    updateTimeout = null,
    connectedOuts = [];

exe.onTriggered = triggerAll;
cleanup.onTriggered = clean;
cleanup.setUiAttribs({ "hideParam": true, "hidePort": true });

for (let i = 0; i < num; i++)
{
    const p = op.outTrigger("trigger " + i);
    triggers.push(p);
    p.onLinkChanged = updateButton;

    if (i < num - 1)
    {
        let newExe = op.inTrigger("exe " + i);
        newExe.onTriggered = triggerAll;
        exes.push(newExe);
    }
}

updateConnected();

function updateConnected()
{
    connectedOuts.length = 0;
    for (let i = 0; i < triggers.length; i++)
        if (triggers[i].links.length > 0) connectedOuts.push(triggers[i]);
}

function updateButton()
{
    updateConnected();
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() =>
    {
        let show = false;
        for (let i = 0; i < triggers.length; i++)
            if (triggers[i].links.length > 1) show = true;

        cleanup.setUiAttribs({ "hideParam": !show });

        if (op.isCurrentUiOp()) op.refreshParams();
    }, 60);
}

function triggerAll()
{
    // for (let i = 0; i < triggers.length; i++) triggers[i].trigger();
    for (let i = 0; i < connectedOuts.length; i++) connectedOuts[i].trigger();
}

function clean()
{
    let count = 0;
    for (let i = 0; i < triggers.length; i++)
    {
        let removeLinks = [];

        if (triggers[i].links.length > 1)
            for (let j = 1; j < triggers[i].links.length; j++)
            {
                while (triggers[count].links.length > 0) count++;

                removeLinks.push(triggers[i].links[j]);
                const otherPort = triggers[i].links[j].getOtherPort(triggers[i]);
                op.patch.link(op, "trigger " + count, otherPort.op, otherPort.name);
                count++;
            }

        for (let j = 0; j < removeLinks.length; j++) removeLinks[j].remove();
    }
    updateButton();
    updateConnected();
}

}
};

CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};




// **************************************************************
// 
// Ops.TimeLine.TimeLinePlayer
// 
// **************************************************************

Ops.TimeLine.TimeLinePlayer= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    play = op.inTriggerButton("Play"),
    pause = op.inTriggerButton("Pause"),
    rewind = op.inTriggerButton("rewind"),
    setTime = op.inFloat("Set current time", 0),

    outPlayTrigger = op.outTrigger("play trigger"),
    outPauseTrigger = op.outTrigger("pause trigger"),
    outrewindTrigger = op.outTrigger("rewind trigger"),
    isPlaying = op.outBool("is Playing"),
    outSetTimeTrigger = op.outNumber("set time (seconds)"),
    currentTime = op.outNumber("current time"),
    currentFrame = op.outNumber("current frame");

play.onTriggered = function ()
{
    op.patch.timer.play();

    op.patch.timer.setTime(setTime.get());
    outSetTimeTrigger.set(setTime.get());
    outPlayTrigger.trigger();
};

pause.onTriggered = function ()
{
    op.patch.timer.pause();
    outPauseTrigger.trigger();
};

op.onAnimFrame = function (time)
{
    currentFrame.set(Math.round(time * 30.0));
    currentTime.set(time);
    isPlaying.set(op.patch.timer.isPlaying());
};

rewind.onTriggered = function ()
{
    op.patch.timer.setTime(0);
    outrewindTrigger.trigger();
};

}
};

CABLES.OPS["97e57613-6a51-41cf-9de5-fe3dbc2c69b2"]={f:Ops.TimeLine.TimeLinePlayer,objName:"Ops.TimeLine.TimeLinePlayer"};




// **************************************************************
// 
// Ops.Math.Compare.CompareNumbers
// 
// **************************************************************

Ops.Math.Compare.CompareNumbers= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    numberIn_1 = op.inFloat("Value in", 0),
    logicSelectMode = op.inSwitch("Comparison mode", [">", "<", ">=", "<=", "==", "!=", "><", ">=<"], ">"),
    numberIn_2 = op.inFloat("Condition value", 1),
    numberIn_3 = op.inFloat("Max", 1),
    resultNumberOut = op.outNumber("Result");

let logicFunc;

logicSelectMode.onChange = onFilterChange;

numberIn_1.onChange = numberIn_2.onChange = numberIn_3.onChange = update;

onFilterChange();

function onFilterChange()
{
    let logicSelectValue = logicSelectMode.get();
    if (logicSelectValue === ">") logicFunc = function (a, b, c) { if (a > b) return 1; return 0; };
    else if (logicSelectValue === "<") logicFunc = function (a, b, c) { if (a < b) return 1; return 0; };
    else if (logicSelectValue === ">=") logicFunc = function (a, b, c) { if (a >= b) return 1; return 0; };
    else if (logicSelectValue === "<=") logicFunc = function (a, b, c) { if (a <= b) return 1; return 0; };
    else if (logicSelectValue === "==") logicFunc = function (a, b, c) { if (a === b) return 1; return 0; };
    else if (logicSelectValue === "!=") logicFunc = function (a, b, c) { if (a !== b) return 1; return 0; };
    else if (logicSelectValue === "><") logicFunc = function (a, b, c) { if (a > Math.min(b, c) && a < Math.max(b, c)) return 1; return 0; };
    else if (logicSelectValue === ">=<") logicFunc = function (a, b, c) { if (a >= Math.min(b, c) && a <= Math.max(b, c)) return 1; return 0; };

    if (logicSelectValue === "><" || logicSelectValue === ">=<")
    {
        numberIn_3.setUiAttribs({ "greyout": false });
        numberIn_2.setUiAttribs({ "title": "Min" });
    }
    else
    {
        numberIn_3.setUiAttribs({ "greyout": true });
        numberIn_2.setUiAttribs({ "title": "Condition value" });
    }
    update();
    op.setUiAttrib({ "extendTitle": logicSelectValue });
}

function update()
{
    let n1 = numberIn_1.get();
    let n2 = numberIn_2.get();
    let n3 = numberIn_3.get();

    let resultNumber = logicFunc(n1, n2, n3);

    resultNumberOut.set(resultNumber);
}

}
};

CABLES.OPS["169137db-9853-4384-ac5b-d10a0bbda5c2"]={f:Ops.Math.Compare.CompareNumbers,objName:"Ops.Math.Compare.CompareNumbers"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});

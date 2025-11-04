"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Ui=Ops.Ui || {};
Ops.Anim=Ops.Anim || {};
Ops.Html=Ops.Html || {};
Ops.Math=Ops.Math || {};
Ops.Array=Ops.Array || {};
Ops.Local=Ops.Local || {};
Ops.Cables=Ops.Cables || {};
Ops.Number=Ops.Number || {};
Ops.String=Ops.String || {};
Ops.Boolean=Ops.Boolean || {};
Ops.Gl.GLTF=Ops.Gl.GLTF || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Graphics=Ops.Graphics || {};
Ops.Html.CSS=Ops.Html.CSS || {};
Ops.WebAudio=Ops.WebAudio || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Gl.Textures=Ops.Gl.Textures || {};
Ops.Math.Compare=Ops.Math.Compare || {};
Ops.Html.Elements=Ops.Html.Elements || {};
Ops.Array.PointArray=Ops.Array.PointArray || {};
Ops.Graphics.Geometry=Ops.Graphics.Geometry || {};



// **************************************************************
// 
// Ops.Local.SubPatch0
// 
// **************************************************************

Ops.Local.SubPatch0= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_59tlafryu=op.inArray(\"59tlafryu\");\nport_59tlafryu.setUiAttribs({title:\"Sequence Array\",});\n\nconst port_721cku440=op.inTrigger(\"721cku440\");\nport_721cku440.setUiAttribs({title:\"Stop\",display:\"button\",});\n\nconst port_ycqzyx3mg=op.inTrigger(\"ycqzyx3mg\");\nport_ycqzyx3mg.setUiAttribs({title:\"exe\",});\n\nconst port_hhjmki6s5=op.outObject(\"hhjmki6s5\");\nport_hhjmki6s5.setUiAttribs({title:\"texture_out\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_59tlafryu = addedOps[i].outArray(\"innerOut_59tlafryu\");\ninnerOut_59tlafryu.setUiAttribs({title:\"Sequence Array\"});\nport_59tlafryu.on(\"change\", (a,v) => { innerOut_59tlafryu.setRef(a); });\n\nconst innerOut_721cku440 = addedOps[i].outTrigger(\"innerOut_721cku440\");\ninnerOut_721cku440.setUiAttribs({title:\"Stop\"});\nport_721cku440.onTriggered = () => { innerOut_721cku440.trigger(); };\n\nconst innerOut_ycqzyx3mg = addedOps[i].outTrigger(\"innerOut_ycqzyx3mg\");\ninnerOut_ycqzyx3mg.setUiAttribs({title:\"exe\"});\nport_ycqzyx3mg.onTriggered = () => { innerOut_ycqzyx3mg.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_hhjmki6s5 = addedOps[i].inObject(\"innerIn_hhjmki6s5\");\ninnerIn_hhjmki6s5.setUiAttribs({title:\"texture_out\"});\ninnerIn_hhjmki6s5.on(\"change\", (a,v) => { port_hhjmki6s5.setRef(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"899nceo6w\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"Steps index\",\"value\":31},{\"name\":\"Steps\",\"value\":\"32\"}],\"portsOut\":[{\"name\":\"Sequence Trigger Output\",\"links\":[{\"portIn\":\"Generate\",\"portOut\":\"Sequence Trigger Output\",\"objIn\":\"pjr0f0sfh\",\"objOut\":\"899nceo6w\"},{\"portIn\":\"Generate\",\"portOut\":\"Sequence Trigger Output\",\"objIn\":\"r3yyqc239\",\"objOut\":\"899nceo6w\"},{\"portIn\":\"Generate\",\"portOut\":\"Sequence Trigger Output\",\"objIn\":\"lili4hv6g\",\"objOut\":\"899nceo6w\"}]},{\"name\":\"Sequenced Value\",\"value\":1},{\"name\":\"Current Step\",\"value\":27}],\"objName\":\"Ops.WebAudio.ClockSequencerPattern\"},{\"id\":\"inz1z4uby\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"BPM\",\"value\":130}],\"portsOut\":[{\"name\":\"1/2 Note Trigger\",\"links\":[{\"portIn\":\"Generate\",\"portOut\":\"1/2 Note Trigger\",\"objIn\":\"pjr0f0sfh\",\"objOut\":\"inz1z4uby\"},{\"portIn\":\"Generate\",\"portOut\":\"1/2 Note Trigger\",\"objIn\":\"r3yyqc239\",\"objOut\":\"inz1z4uby\"},{\"portIn\":\"Generate\",\"portOut\":\"1/2 Note Trigger\",\"objIn\":\"lili4hv6g\",\"objOut\":\"inz1z4uby\"}]},{\"name\":\"1/16 Note Trigger\",\"links\":[{\"portIn\":\"Clock Trigger Input\",\"portOut\":\"1/16 Note Trigger\",\"objIn\":\"899nceo6w\",\"objOut\":\"inz1z4uby\"}]},{\"name\":\"Sequencer Running\",\"value\":true},{\"name\":\"BPM Out\",\"value\":130}],\"objName\":\"Ops.WebAudio.ClockSequencer\"},{\"id\":\"pjr0f0sfh\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"min\",\"value\":0.3},{\"name\":\"max\",\"value\":0.8},{\"name\":\"Integer\",\"value\":0},{\"name\":\"No consecutive duplicates\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"r\",\"portOut\":\"result\",\"objIn\":\"gdhde7qeq\",\"objOut\":\"pjr0f0sfh\"}]}],\"objName\":\"Ops.Math.TriggerRandomNumber_v3\"},{\"id\":\"lili4hv6g\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"min\",\"value\":0.3},{\"name\":\"max\",\"value\":0.8},{\"name\":\"Integer\",\"value\":0},{\"name\":\"No consecutive duplicates\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"b\",\"portOut\":\"result\",\"objIn\":\"gdhde7qeq\",\"objOut\":\"lili4hv6g\"}]}],\"objName\":\"Ops.Math.TriggerRandomNumber_v3\"},{\"id\":\"r3yyqc239\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"min\",\"value\":0.3},{\"name\":\"max\",\"value\":0.8},{\"name\":\"Integer\",\"value\":0},{\"name\":\"No consecutive duplicates\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"g\",\"portOut\":\"result\",\"objIn\":\"gdhde7qeq\",\"objOut\":\"r3yyqc239\"}]}],\"objName\":\"Ops.Math.TriggerRandomNumber_v3\"},{\"id\":\"gdhde7qeq\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"a\",\"value\":1}],\"portsOut\":[{\"name\":\"texture_out\",\"links\":[{\"portIn\":\"innerIn_hhjmki6s5\",\"portOut\":\"texture_out\",\"objIn\":\"pyktvp87m\",\"objOut\":\"gdhde7qeq\"}]}],\"objName\":\"Ops.Gl.Textures.ColorTexture\"},{\"id\":\"rho87gl00\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_59tlafryu\",\"title\":\"Sequence Array\",\"links\":[{\"portIn\":\"Sequence Array\",\"portOut\":\"innerOut_59tlafryu\",\"objIn\":\"899nceo6w\",\"objOut\":\"rho87gl00\"}]},{\"name\":\"innerOut_721cku440\",\"title\":\"Stop\",\"links\":[{\"portIn\":\"Start\",\"portOut\":\"innerOut_721cku440\",\"objIn\":\"inz1z4uby\",\"objOut\":\"rho87gl00\"}]},{\"name\":\"innerOut_ycqzyx3mg\",\"title\":\"exe\",\"links\":[{\"portIn\":\"Reset\",\"portOut\":\"innerOut_ycqzyx3mg\",\"objIn\":\"inz1z4uby\",\"objOut\":\"rho87gl00\"},{\"portIn\":\"Stop\",\"portOut\":\"innerOut_ycqzyx3mg\",\"objIn\":\"inz1z4uby\",\"objOut\":\"rho87gl00\"},{\"portIn\":\"Reset\",\"portOut\":\"innerOut_ycqzyx3mg\",\"objIn\":\"899nceo6w\",\"objOut\":\"rho87gl00\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"pyktvp87m\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"innerIn_hhjmki6s5\",\"title\":\"texture_out\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"yejvqgrtk\",\"uiAttribs\":{\"subPatch\":\"nvd4lebje\"},\"storage\":{},\"portsIn\":[{\"name\":\"value\",\"value\":0}],\"portsOut\":[{\"name\":\"result\",\"value\":0}],\"objName\":\"Ops.Number.Number\"}]}",};
const port_59tlafryu=op.inArray("59tlafryu");
port_59tlafryu.setUiAttribs({title:"Sequence Array",});

const port_721cku440=op.inTrigger("721cku440");
port_721cku440.setUiAttribs({title:"Stop",display:"button",});

const port_ycqzyx3mg=op.inTrigger("ycqzyx3mg");
port_ycqzyx3mg.setUiAttribs({title:"exe",});

const port_hhjmki6s5=op.outObject("hhjmki6s5");
port_hhjmki6s5.setUiAttribs({title:"texture_out",display:"texture",objType:"texture",objType:"texture"});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_59tlafryu = addedOps[i].outArray("innerOut_59tlafryu");
innerOut_59tlafryu.setUiAttribs({title:"Sequence Array"});
port_59tlafryu.on("change", (a,v) => { innerOut_59tlafryu.setRef(a); });

const innerOut_721cku440 = addedOps[i].outTrigger("innerOut_721cku440");
innerOut_721cku440.setUiAttribs({title:"Stop"});
port_721cku440.onTriggered = () => { innerOut_721cku440.trigger(); };

const innerOut_ycqzyx3mg = addedOps[i].outTrigger("innerOut_ycqzyx3mg");
innerOut_ycqzyx3mg.setUiAttribs({title:"exe"});
port_ycqzyx3mg.onTriggered = () => { innerOut_ycqzyx3mg.trigger(); };

    }
if(addedOps[i].innerOutput)
{
const innerIn_hhjmki6s5 = addedOps[i].inObject("innerIn_hhjmki6s5");
innerIn_hhjmki6s5.setUiAttribs({title:"texture_out"});
innerIn_hhjmki6s5.on("change", (a,v) => { port_hhjmki6s5.setRef(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}

}
};

CABLES.OPS["f104d02f-aad0-4f0d-9f12-1505cfb2e979"]={f:Ops.Local.SubPatch0,objName:"Ops.Local.SubPatch0"};




// **************************************************************
// 
// Ops.Local.SubPatch1
// 
// **************************************************************

Ops.Local.SubPatch1= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_ryzonyqik=op.inArray(\"ryzonyqik\");\nport_ryzonyqik.setUiAttribs({title:\"Array\",});\n\nconst port_0ekitsejo=op.inArray(\"0ekitsejo\");\nport_0ekitsejo.setUiAttribs({title:\"Array\",});\n\nconst port_pmpcafkxc=op.inArray(\"pmpcafkxc\");\nport_pmpcafkxc.setUiAttribs({title:\"Array\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_ryzonyqik = addedOps[i].outArray(\"innerOut_ryzonyqik\");\ninnerOut_ryzonyqik.setUiAttribs({title:\"Array\"});\nport_ryzonyqik.on(\"change\", (a,v) => { innerOut_ryzonyqik.setRef(a); });\n\nconst innerOut_0ekitsejo = addedOps[i].outArray(\"innerOut_0ekitsejo\");\ninnerOut_0ekitsejo.setUiAttribs({title:\"Array\"});\nport_0ekitsejo.on(\"change\", (a,v) => { innerOut_0ekitsejo.setRef(a); });\n\nconst innerOut_pmpcafkxc = addedOps[i].outArray(\"innerOut_pmpcafkxc\");\ninnerOut_pmpcafkxc.setUiAttribs({title:\"Array\"});\nport_pmpcafkxc.on(\"change\", (a,v) => { innerOut_pmpcafkxc.setRef(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"oe7yodzio\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"Text\",\"value\":\"\"},{\"name\":\"Id\",\"value\":\"\"},{\"name\":\"Class\",\"value\":\"\"},{\"name\":\"Style\",\"value\":\"position:fixed;\\nz-index:98;\\nheight: 1px;\\nbackground: black;\\n\"},{\"name\":\"Interactive\",\"value\":0},{\"name\":\"Visible\",\"value\":1},{\"name\":\"Convert Line Breaks\",\"value\":0},{\"name\":\"Propagate Click-Events\",\"value\":1}],\"portsOut\":[{\"name\":\"DOM Element\",\"links\":[{\"portIn\":\"Element\",\"portOut\":\"DOM Element\",\"objIn\":\"9oq8kvs49\",\"objOut\":\"oe7yodzio\"}]},{\"name\":\"Hover\",\"value\":0}],\"objName\":\"Ops.Html.Elements.DivElement_v3\"},{\"id\":\"f9x2rca43\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsOut\":[{\"name\":\"Average X\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"Average X\",\"objIn\":\"0wo0fc2bc\",\"objOut\":\"f9x2rca43\"},{\"portIn\":\"number1\",\"portOut\":\"Average X\",\"objIn\":\"69h9mdf53\",\"objOut\":\"f9x2rca43\"}]},{\"name\":\"Average Y\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"Average Y\",\"objIn\":\"1qbtb7kd8\",\"objOut\":\"f9x2rca43\"}]},{\"name\":\"Average Z\",\"value\":0}],\"objName\":\"Ops.Array.Array3GetAverage\"},{\"id\":\"1qbtb7kd8\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":14.83}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"9oq8kvs49\",\"objOut\":\"1qbtb7kd8\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"9oq8kvs49\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"Property\",\"value\":\"top\"},{\"name\":\"Value Suffix\",\"value\":\"px\"}],\"portsOut\":[{\"name\":\"HTML Element\",\"links\":[{\"portIn\":\"Element\",\"portOut\":\"HTML Element\",\"objIn\":\"kyy7cem59\",\"objOut\":\"9oq8kvs49\"}]}],\"objName\":\"Ops.Html.CSS.CSSProperty_v2\"},{\"id\":\"m2k4fe4pk\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsOut\":[{\"name\":\"Average X\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"Average X\",\"objIn\":\"ftstfr6y5\",\"objOut\":\"m2k4fe4pk\"}]},{\"name\":\"Average Y\",\"value\":82.61739349365234},{\"name\":\"Average Z\",\"value\":0}],\"objName\":\"Ops.Array.Array3GetAverage\"},{\"id\":\"0wo0fc2bc\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":8}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"0j40co374\",\"objOut\":\"0wo0fc2bc\"}]}],\"objName\":\"Ops.Math.Subtract\"},{\"id\":\"kyy7cem59\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"Property\",\"value\":\"width\"},{\"name\":\"Value Suffix\",\"value\":\"px\"}],\"portsOut\":[{\"name\":\"HTML Element\",\"links\":[{\"portIn\":\"Element\",\"portOut\":\"HTML Element\",\"objIn\":\"0j40co374\",\"objOut\":\"kyy7cem59\"}]}],\"objName\":\"Ops.Html.CSS.CSSProperty_v2\"},{\"id\":\"snw7xv8h4\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsOut\":[{\"name\":\"Average X\",\"links\":[{\"portIn\":\"number2\",\"portOut\":\"Average X\",\"objIn\":\"bgp4ktj6k\",\"objOut\":\"snw7xv8h4\"}]},{\"name\":\"Average Y\",\"value\":16.695653915405273},{\"name\":\"Average Z\",\"value\":1}],\"objName\":\"Ops.Array.Array3GetAverage\"},{\"id\":\"bgp4ktj6k\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"result\",\"objIn\":\"528xswgca\",\"objOut\":\"bgp4ktj6k\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"0j40co374\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"Property\",\"value\":\"left\"},{\"name\":\"Value Suffix\",\"value\":\"px\"}],\"objName\":\"Ops.Html.CSS.CSSProperty_v2\"},{\"id\":\"69h9mdf53\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number2\",\"portOut\":\"result\",\"objIn\":\"528xswgca\",\"objOut\":\"69h9mdf53\"}]}],\"objName\":\"Ops.Math.Subtract\"},{\"id\":\"528xswgca\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Value\",\"portOut\":\"result\",\"objIn\":\"kyy7cem59\",\"objOut\":\"528xswgca\"}]}],\"objName\":\"Ops.Math.Subtract\"},{\"id\":\"ftstfr6y5\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":10}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"result\",\"objIn\":\"bgp4ktj6k\",\"objOut\":\"ftstfr6y5\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"io5hrgcp4\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_ryzonyqik\",\"title\":\"Array\",\"links\":[{\"portIn\":\"Array\",\"portOut\":\"innerOut_ryzonyqik\",\"objIn\":\"f9x2rca43\",\"objOut\":\"io5hrgcp4\"}]},{\"name\":\"innerOut_0ekitsejo\",\"title\":\"Array\",\"links\":[{\"portIn\":\"Array\",\"portOut\":\"innerOut_0ekitsejo\",\"objIn\":\"m2k4fe4pk\",\"objOut\":\"io5hrgcp4\"}]},{\"name\":\"innerOut_pmpcafkxc\",\"title\":\"Array\",\"links\":[{\"portIn\":\"Array\",\"portOut\":\"innerOut_pmpcafkxc\",\"objIn\":\"snw7xv8h4\",\"objOut\":\"io5hrgcp4\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"35h804ntp\",\"uiAttribs\":{\"subPatch\":\"nl1sn7dak\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_ryzonyqik=op.inArray("ryzonyqik");
port_ryzonyqik.setUiAttribs({title:"Array",});

const port_0ekitsejo=op.inArray("0ekitsejo");
port_0ekitsejo.setUiAttribs({title:"Array",});

const port_pmpcafkxc=op.inArray("pmpcafkxc");
port_pmpcafkxc.setUiAttribs({title:"Array",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_ryzonyqik = addedOps[i].outArray("innerOut_ryzonyqik");
innerOut_ryzonyqik.setUiAttribs({title:"Array"});
port_ryzonyqik.on("change", (a,v) => { innerOut_ryzonyqik.setRef(a); });

const innerOut_0ekitsejo = addedOps[i].outArray("innerOut_0ekitsejo");
innerOut_0ekitsejo.setUiAttribs({title:"Array"});
port_0ekitsejo.on("change", (a,v) => { innerOut_0ekitsejo.setRef(a); });

const innerOut_pmpcafkxc = addedOps[i].outArray("innerOut_pmpcafkxc");
innerOut_pmpcafkxc.setUiAttribs({title:"Array"});
port_pmpcafkxc.on("change", (a,v) => { innerOut_pmpcafkxc.setRef(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}

}
};

CABLES.OPS["a8ff4535-2e9c-4dc3-bdb3-098ba09c7355"]={f:Ops.Local.SubPatch1,objName:"Ops.Local.SubPatch1"};




// **************************************************************
// 
// Ops.WebAudio.ClockSequencerPattern
// 
// **************************************************************

Ops.WebAudio.ClockSequencerPattern= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const STEPS = Array(32).fill().map((_, i) => 1 + i);

const inTrigger = op.inTrigger("Clock Trigger Input");
const inSequenceArray = op.inArray("Sequence Array");
const inSteps = op.inDropDown("Steps", STEPS, "16");
const inReset = op.inTriggerButton("Reset");

const outTrigger = op.outTrigger("Sequence Trigger Output");
const outValue = op.outNumber("Sequenced Value");
const outTickCount = op.outNumber("Current Step");

let updateParameters = false;
let arrayChanged = false;
let hasArray = false;

let COUNT_MODULO = Number(inSteps.get());
let tickCount = 0;
inSteps.onChange = () =>
{
    if (inTrigger.isLinked())
    {
        updateParameters = true;
        return;
    }
    COUNT_MODULO = Number(inSteps.get());
};

inSequenceArray.onChange = () => arrayChanged = true;
let resetCount = false;
inReset.onTriggered = () => resetCount = true;

inTrigger.onTriggered = () =>
{
    if (updateParameters)
    {
        COUNT_MODULO = Number(inSteps.get());
        updateParameters = false;
    }

    if (resetCount)
    {
        tickCount = 0;
        resetCount = false;
    }
    const arr = inSequenceArray.get();

    if (arrayChanged)
    {
        if (!arr)
        {
            op.setUiError("noArr", "No array connected. Passing through clock.", 1);
            hasArray = false;
        }
        else
        {
            op.setUiError("noArr", null);
            hasArray = true;
        }
        arrayChanged = false;
    }

    if (hasArray)
    {
        if (arr[tickCount])
        {
            outTrigger.trigger();
            outValue.set(arr[tickCount]);
        }
        else
        {
            outValue.set(0);
        }
    }
    else
    {
        outTrigger.trigger();
    }
    outTickCount.set(tickCount);
    tickCount = (tickCount + 1) % COUNT_MODULO;
};

}
};

CABLES.OPS["3b9b9ff5-4c25-42e3-9897-262b11c9cb94"]={f:Ops.WebAudio.ClockSequencerPattern,objName:"Ops.WebAudio.ClockSequencerPattern"};




// **************************************************************
// 
// Ops.WebAudio.ClockSequencer
// 
// **************************************************************

Ops.WebAudio.ClockSequencer= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"worker_js":"let timerIDs = [];\r\nlet timerID = null;\r\nconst LOOKAHEAD_IN_MS = 25.;\r\nonmessage = (e) => {\r\n    if (e.data === \"start\") {\r\n        timerID = setInterval(() => postMessage(\"tick\"), LOOKAHEAD_IN_MS);\r\n        return;\r\n    }\r\n\r\n    if (e.data === \"stop\") {\r\n        clearInterval(timerID);\r\n        timerID = null;\r\n        console.log(\"stopped\");\r\n    }\r\n};\r\n\r\nonerror = (e) => {\r\n    console.log(\"worker error\", e);\r\n}\r\n",};
const audioCtx = CABLES.WEBAUDIO.createAudioContext(op);

const inBPM = op.inInt("BPM", 100);
const inStart = op.inTriggerButton("Start");
const inStop = op.inTriggerButton("Stop");
const inReset = op.inTriggerButton("Reset");

const outTriggers = [];
for (let i = 0; i < 7 * 3; i += 1)
{
    const noteValue = Math.pow(2, i % 7);
    let string = "1/" + noteValue;
    if (i > 6 && i < 14)
    {
        string = "1/" + noteValue + " Triplet";
    }
    else if (i > 13)
    {
        string = "1/" + noteValue + " Dotted";
    }
    outTriggers[i] = op.outTrigger(string + " Note Trigger");
}

const outRunning = op.outBool("Sequencer Running");
const outBPM = op.outNumber("BPM Out");
const outStart = op.outTrigger("Start Out");
const outStop = op.outTrigger("Stop Out");
const outReset = op.outTrigger("Reset Out");

const MIN_BPM = 20;

const NOTE_QUEUE = [];
const LOOKAHEAD_IN_MS = 25.0;
const SCHEDULEAHEAD_IN_S = 0.1;

const MULTIPLIERS = [
    4, 2, 1, 1 / 2, 1 / 4, 1 / 8, 1 / 16,
    8 / 3, 4 / 3, 2 / 3, 1 / 3, 1 / 6, 1 / 12, 1 / 24, // triplet
    6, 3, 3 / 2, 3 / 4, 3 / 8, 3 / 16, 3 / 32 // dotted
];

const MODULO_PER_NOTE = MULTIPLIERS.map((val) => Math.floor(val * 48 / 2));
const TICK_INDEX = 7 * 2 - 1; // 1/64 triplet fastest note
const MAX_ENUMERATOR = 288;
let NOTES_IN_S = [];
let QUARTER_NOTE_S = 60 / inBPM.get();
NOTES_IN_S = MULTIPLIERS.map((multiplier) => multiplier * QUARTER_NOTE_S);
let TICK_S = NOTES_IN_S[TICK_INDEX] / 2;

outBPM.set(inBPM.get());

let resetTickCount = false;
let changeWhileRunning = false;
inBPM.onChange = updateBpm;

let worker = null;
let isPlaying = false;
let currentNote = 0;
let nextNoteTime = null;
let tickCount = 0;
let workerRunning = false;
let waitForSchedule = false;
updateBpm();

function updateBpm()
{
    outBPM.set(inBPM.get());

    if (workerRunning)
    {
        changeWhileRunning = true;
        return;
    }
    QUARTER_NOTE_S = 60 / inBPM.get();
    NOTES_IN_S = MULTIPLIERS.map((multiplier) => multiplier * QUARTER_NOTE_S);
    TICK_S = NOTES_IN_S[TICK_INDEX];
}

function nextNote()
{
    nextNoteTime += TICK_S;
    tickCount = (tickCount + 1) % MAX_ENUMERATOR;
}

function scheduleNote()
{
    if (waitForSchedule)
    { // code block to swallow initial hickup when starting the sequencer
        let compareValue = 8;
        if (inBPM.get() > 140) compareValue = 12;
        if (inBPM.get() > 160) compareValue = 20;
        if (tickCount === compareValue)
        { // half of highest value
            resetTickCount = true;
            waitForSchedule = false;
        }
        else
        {
            return;
        }
    }

    if (resetTickCount)
    {
        tickCount = 0;
        resetTickCount = false;
    }
    for (let i = 0, len = MODULO_PER_NOTE.length; i < len; i += 1)
    {
        if (tickCount % MODULO_PER_NOTE[i] === 0) outTriggers[i].trigger();
    }
}
function startScheduling()
{
    if (changeWhileRunning)
    {
        QUARTER_NOTE_S = 60 / inBPM.get();
        NOTES_IN_S = MULTIPLIERS.map((multiplier) => multiplier * QUARTER_NOTE_S);
        TICK_S = NOTES_IN_S[TICK_INDEX];
        changeWhileRunning = false;
    }
    while (nextNoteTime < audioCtx.currentTime + SCHEDULEAHEAD_IN_S)
    {
        scheduleNote();
        nextNote();
    }
}

inStart.onTriggered = () =>
{
    if (workerRunning) return;

    if (!worker)
    {
        const blob = new Blob([attachments.worker_js], { "type": "text/javascript" });
        const fileURL = URL.createObjectURL(blob);

        worker = new Worker(fileURL, { "name": "ClockSequencer with op-id: " + op.id });
        worker.addEventListener("message", (e) =>
        {
            if (e.data === "tick") startScheduling();
            if (e.data === "stopped") workerRunning = false;
        },
        false);

        nextNoteTime = audioCtx.currentTime;
        /* dummy buffer source for time */
        const audioBuffer = audioCtx.createBufferSource();
        audioBuffer.start(0);
        workerRunning = true;
        tickCount = 0;
        worker.postMessage("start");
        waitForSchedule = true;
        outRunning.set(workerRunning);
    }

    outStart.trigger();
};

inStop.onTriggered = () =>
{
    if (worker)
    {
        worker.postMessage("stop");
        worker.terminate();
        worker = null;
        workerRunning = false;
        outRunning.set(workerRunning);
    }

    outStop.trigger();
};

inReset.onTriggered = () =>
{
    resetTickCount = true;
    outReset.trigger();
};

op.onDelete = () =>
{
    if (!inStart.isLinked())
    {
        if (worker)
        {
            worker.postMessage("stop");
            worker.terminate();
            worker = null;
            workerRunning = false;
        }
    }
};
inStart.onLinkChanged = () =>
{
    if (!inStart.isLinked())
    {
        if (worker)
        {
            worker.postMessage("stop");
            worker.terminate();
            worker = null;
            workerRunning = false;
            outRunning.set(workerRunning);
        }
    }
};

}
};

CABLES.OPS["7994c33f-d4ca-455b-af72-83dcbf5ae83f"]={f:Ops.WebAudio.ClockSequencer,objName:"Ops.WebAudio.ClockSequencer"};




// **************************************************************
// 
// Ops.Math.TriggerRandomNumber_v3
// 
// **************************************************************

Ops.Math.TriggerRandomNumber_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("Generate"),
    min = op.inValue("min", 0),
    max = op.inValue("max", 1),
    outTrig = op.outTrigger("next"),
    result = op.outNumber("result"),
    inInteger = op.inValueBool("Integer", false),
    noDupe = op.inValueBool("No consecutive duplicates", false);

op.setPortGroup("Value Range", [min, max]);

exe.onTriggered = genRandom;

genRandom();

function genRandom()
{
    let r = (Math.random() * (max.get() - min.get())) + min.get();

    if (inInteger.get())r = randInt();

    if (min.get() != max.get() && max.get() > min.get())
        while (noDupe.get() && r == result.get()) r = randInt();

    result.set(r);
    outTrig.trigger();
}

function randInt()
{
    return Math.floor((Math.random() * ((max.get() - min.get() + 1))) + min.get());
}

}
};

CABLES.OPS["d082beaf-ef4b-4e57-a900-9ee87c0c9fe4"]={f:Ops.Math.TriggerRandomNumber_v3,objName:"Ops.Math.TriggerRandomNumber_v3"};




// **************************************************************
// 
// Ops.Gl.Textures.ColorTexture
// 
// **************************************************************

Ops.Gl.Textures.ColorTexture= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),
    a = op.inValueSlider("a", 1.0),
    texOut = op.outTexture("texture_out");

r.setUiAttribs({ "colorPick": true });
const cgl = op.patch.cgl;
let fb = null;
let wasFp = false;

r.onChange =
    g.onChange =
    b.onChange =
    a.onChange = () => { cgl.addNextFrameOnceCallback(render); };

cgl.addNextFrameOnceCallback(render);

function render()
{
    const fp = wasFp || r.get() < 0.0 || r.get() > 1.0 || g.get() < 0.0 || g.get() > 1.0 || b.get() < 0.0 || b.get() > 1.0;

    if (!fb || wasFp != fp)
    {
        if (fb)fb.dispose();
        if (cgl.glVersion == 1) fb = new CGL.Framebuffer(cgl, 8, 8, { "name": "colorTexture" });
        else fb = new CGL.Framebuffer2(cgl, 8, 8, { "name": "colorTexture", "depth": false, "isFloatingPointTexture": fp });
        fb.setFilter(CGL.Texture.FILTER_LINEAR);
        wasFp = fp;
    }

    fb.renderStart();
    cgl.gl.clearColor(r.get(), g.get(), b.get(), a.get());
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
    fb.renderEnd();
    texOut.setRef(fb.getTextureColor());
}

op.onDelete = () =>
{
    fb.dispose();
};

}
};

CABLES.OPS["59b94270-0364-4c0f-a9fc-ba2561696a23"]={f:Ops.Gl.Textures.ColorTexture,objName:"Ops.Gl.Textures.ColorTexture"};




// **************************************************************
// 
// Ops.Ui.SubPatchInput
// 
// **************************************************************

Ops.Ui.SubPatchInput= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
op.innerInput = true;

const goto = op.inTriggerButton("Goto SubPatchOp");
goto.setUiAttribs({ "hidePort": true });
goto.onTriggered = () =>
{
    const parent = op.patch.getSubPatchOuterOp(op.uiAttribs.subPatch);
    gui.patchView.centerSelectOp(parent.id);
};

}
};

CABLES.OPS["c4e4e933-136e-479e-8de8-0b35b75d9217"]={f:Ops.Ui.SubPatchInput,objName:"Ops.Ui.SubPatchInput"};




// **************************************************************
// 
// Ops.Ui.SubPatchOutput
// 
// **************************************************************

Ops.Ui.SubPatchOutput= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
op.innerOutput = true;

}
};

CABLES.OPS["02d45073-7936-4830-81ad-59a162febf1f"]={f:Ops.Ui.SubPatchOutput,objName:"Ops.Ui.SubPatchOutput"};




// **************************************************************
// 
// Ops.Number.Number
// 
// **************************************************************

Ops.Number.Number= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value"),
    result = op.outNumber("result");

v.onChange = exec;

let isLinked = false;
v.onLinkChanged = () =>
{
    if (!isLinked && v.isLinked())op.setUiAttribs({ "extendTitle": null });
    isLinked = v.isLinked();
};

function exec()
{
    if (CABLES.UI && !isLinked) op.setUiAttribs({ "extendTitle": v.get() });

    result.set(Number(v.get()));
}

}
};

CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"]={f:Ops.Number.Number,objName:"Ops.Number.Number"};




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
// Ops.Array.Array3GetAverage
// 
// **************************************************************

Ops.Array.Array3GetAverage= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array", 3),
    avgX = op.outNumber("Average X"),
    avgY = op.outNumber("Average Y"),
    avgZ = op.outNumber("Average Z");
op.toWorkPortsNeedToBeLinked(inArr);

inArr.onChange = function ()
{
    let arr = inArr.get();
    if (!arr)
    {
        avgX.set(0);
        avgY.set(0);
        avgZ.set(0);
        return;
    }
    let x = 0;
    let y = 0;
    let z = 0;

    for (let i = 0; i < arr.length; i += 3)
    {
        x += arr[i + 0];
        y += arr[i + 1];
        z += arr[i + 2];
    }

    x /= arr.length / 3;
    y /= arr.length / 3;
    z /= arr.length / 3;

    avgX.set(x);
    avgY.set(y);
    avgZ.set(z);
};

}
};

CABLES.OPS["9643edc7-e479-4b26-9f7a-343cdcdc81f4"]={f:Ops.Array.Array3GetAverage,objName:"Ops.Array.Array3GetAverage"};




// **************************************************************
// 
// Ops.Math.Sum
// 
// **************************************************************

Ops.Math.Sum= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 0),
    number2 = op.inValueFloat("number2", 0),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange =
number2.onChange = exec;
exec();

function exec()
{
    const v = number1.get() + number2.get();
    if (!isNaN(v))
        result.set(v);
}

}
};

CABLES.OPS["c8fb181e-0b03-4b41-9e55-06b6267bc634"]={f:Ops.Math.Sum,objName:"Ops.Math.Sum"};




// **************************************************************
// 
// Ops.Html.CSS.CSSProperty_v2
// 
// **************************************************************

Ops.Html.CSS.CSSProperty_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inEle = op.inObject("Element"),
    inProperty = op.inString("Property"),
    inValue = op.inFloat("Value"),
    inValueSuffix = op.inString("Value Suffix", "px"),
    outEle = op.outObject("HTML Element", null, "element");

op.setPortGroup("Element", [inEle]);
op.setPortGroup("Attributes", [inProperty, inValue, inValueSuffix]);

inProperty.onChange = updateProperty;
inValue.onChange = update;
inValueSuffix.onChange = update;
let ele = null;

inEle.onChange = inEle.onLinkChanged = function ()
{
    if (ele && ele.style)
    {
        ele.style[inProperty.get()] = "initial";
    }
    update();
};

function updateProperty()
{
    update();
    op.setUiAttrib({ "extendTitle": inProperty.get() + "" });
}

function update()
{
    ele = inEle.get();
    if (ele && ele.style)
    {
        const str = inValue.get() + inValueSuffix.get();
        try
        {
            if (ele.style[inProperty.get()] != str)
                ele.style[inProperty.get()] = str;
        }
        catch (e)
        {
            op.logError(e);
        }
    }
    else
    {
        setTimeout(update, 50);
    }

    outEle.setRef(inEle.get());
}

}
};

CABLES.OPS["c179aa0e-b558-4130-8c2d-2deab2919a07"]={f:Ops.Html.CSS.CSSProperty_v2,objName:"Ops.Html.CSS.CSSProperty_v2"};




// **************************************************************
// 
// Ops.Math.Subtract
// 
// **************************************************************

Ops.Math.Subtract= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValue("number1", 1),
    number2 = op.inValue("number2", 1),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange =
    number2.onChange = exec;
exec();

function exec()
{
    let v = number1.get() - number2.get();
    if (!isNaN(v)) result.set(v);
}

}
};

CABLES.OPS["a4ffe852-d200-4b96-9347-68feb01122ca"]={f:Ops.Math.Subtract,objName:"Ops.Math.Subtract"};




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
// Ops.Array.PointArray.PointsSphereRandom
// 
// **************************************************************

Ops.Array.PointArray.PointsSphereRandom= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    num = op.inValueInt("Amount of points", 100),
    size = op.inValue("Sphere size", 1),
    seed = op.inValue("Random seed", 0),
    distRand = op.inValueSlider("Random distance from sphere", 0),
    distrib = op.inValueSelect("Distribution", ["Uniform", "Poles", "Half"], "Uniform"),
    outArray = op.outArray("Array out", 3),
    totalPointsOut = op.outNumber("Total points"),
    arrayLengthOut = op.outNumber("Array length");

let newArr = [];
outArray.set(newArr);

seed.onChange =
    num.onChange =
    size.onChange =
    distrib.onChange =
    distRand.onChange =
    outArray.onLinkChanged = generate;

generate();

function generate()
{
    const verts = [];
    verts.length = Math.max(0, Math.round(num.get()) * 3);

    Math.randomSeed = seed.get();

    let rndq = quat.create();
    let tempv = vec3.create();

    let dist = 0;
    if (distrib.get() == "Poles")dist = 1;
    if (distrib.get() == "Half")dist = 2;

    let dRand = distRand.get();

    for (let i = 0; i < num.get(); i++)
    {
        if (dist == 1 || dist == 2)
        {
            rndq[0] = Math.seededRandom();
            rndq[1] = Math.seededRandom();
            rndq[2] = Math.seededRandom();
            rndq[3] = Math.seededRandom();
        }
        else
        {
            rndq[0] = Math.seededRandom() * 2.0 - 1.0;
            rndq[1] = Math.seededRandom() * 2.0 - 1.0;
            rndq[2] = Math.seededRandom() * 2.0 - 1.0;
            rndq[3] = Math.seededRandom() * 2.0 - 1.0;
        }

        quat.normalize(rndq, rndq);

        if (dist == 2)
        {
            tempv[0] = size.get();
        }
        else
        {
            if (i % 2 === 0) tempv[0] = -size.get();
            else tempv[0] = size.get();
        }

        tempv[1] = 0;
        tempv[2] = 0;

        if (dRand !== 0) tempv[0] -= Math.random() * dRand;

        vec3.transformQuat(tempv, tempv, rndq);
        verts[i * 3] = tempv[0];
        verts[i * 3 + 1] = tempv[1];
        verts[i * 3 + 2] = tempv[2];
    }

    outArray.set(null);
    outArray.set(verts);
    totalPointsOut.set(verts.length / 3);
    arrayLengthOut.set(verts.length);
}

}
};

CABLES.OPS["1ea17de7-adad-4053-943a-4874bccf54e9"]={f:Ops.Array.PointArray.PointsSphereRandom,objName:"Ops.Array.PointArray.PointsSphereRandom"};




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
// Ops.Gl.GLTF.GltfScene_v4
// 
// **************************************************************

Ops.Gl.GLTF.GltfScene_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_camera_js":"const gltfCamera = class\r\n{\r\n    constructor(gltf, node)\r\n    {\r\n        this.node = node;\r\n        this.name = node.name;\r\n        // console.log(gltf);\r\n        this.config = gltf.json.cameras[node.camera];\r\n\r\n        this.pos = vec3.create();\r\n        this.quat = quat.create();\r\n        this.vCenter = vec3.create();\r\n        this.vUp = vec3.create();\r\n        this.vMat = mat4.create();\r\n    }\r\n\r\n    updateAnim(time)\r\n    {\r\n        if (this.node && this.node._animTrans)\r\n        {\r\n            vec3.set(this.pos,\r\n                this.node._animTrans[0].getValue(time),\r\n                this.node._animTrans[1].getValue(time),\r\n                this.node._animTrans[2].getValue(time));\r\n\r\n            quat.set(this.quat,\r\n                this.node._animRot[0].getValue(time),\r\n                this.node._animRot[1].getValue(time),\r\n                this.node._animRot[2].getValue(time),\r\n                this.node._animRot[3].getValue(time));\r\n        }\r\n    }\r\n\r\n    start(time)\r\n    {\r\n        if (cgl.tempData.shadowPass) return;\r\n\r\n        this.updateAnim(time);\r\n        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];\r\n\r\n        cgl.pushPMatrix();\r\n        // mat4.perspective(\r\n        //     cgl.pMatrix,\r\n        //     this.config.perspective.yfov*0.5,\r\n        //     asp,\r\n        //     this.config.perspective.znear,\r\n        //     this.config.perspective.zfar);\r\n\r\n        cgl.pushViewMatrix();\r\n        // mat4.identity(cgl.vMatrix);\r\n\r\n        // if(this.node && this.node.parent)\r\n        // {\r\n        //     console.log(this.node.parent)\r\n        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);\r\n        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);\r\n        // mat4.translate(cgl.vMatrix,cgl.vMatrix,\r\n        // [\r\n        //     -this.node.parent._node.translation[0],\r\n        //     -this.node.parent._node.translation[1],\r\n        //     -this.node.parent._node.translation[2]\r\n        // ])\r\n        // }\r\n\r\n        // vec3.set(this.vUp, 0, 1, 0);\r\n        // vec3.set(this.vCenter, 0, -1, 0);\r\n        // // vec3.set(this.vCenter, 0, 1, 0);\r\n        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);\r\n        // vec3.normalize(this.vCenter, this.vCenter);\r\n        // vec3.add(this.vCenter, this.vCenter, this.pos);\r\n\r\n        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);\r\n\r\n        let mv = mat4.create();\r\n        mat4.invert(mv, this.node.modelMatAbs());\r\n\r\n        // console.log(this.node.modelMatAbs());\r\n\r\n        this.vMat = mv;\r\n\r\n        mat4.identity(cgl.vMatrix);\r\n        // console.log(mv);\r\n        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);\r\n    }\r\n\r\n    end()\r\n    {\r\n        if (cgl.tempData.shadowPass) return;\r\n        cgl.popPMatrix();\r\n        cgl.popViewMatrix();\r\n    }\r\n};\r\n","inc_gltf_js":"const le = true; // little endian\r\n\r\nconst Gltf = class\r\n{\r\n    constructor()\r\n    {\r\n        this.json = {};\r\n        this.accBuffers = [];\r\n        this.meshes = [];\r\n        this.nodes = [];\r\n        this.shaders = [];\r\n        this.timing = [];\r\n        this.cams = [];\r\n        this.startTime = performance.now();\r\n        this.bounds = new CABLES.CG.BoundingBox();\r\n        this.loaded = Date.now();\r\n        this.accBuffersDelete = [];\r\n    }\r\n\r\n    getNode(n)\r\n    {\r\n        for (let i = 0; i < this.nodes.length; i++)\r\n        {\r\n            if (this.nodes[i].name == n) return this.nodes[i];\r\n        }\r\n    }\r\n\r\n    unHideAll()\r\n    {\r\n        for (let i = 0; i < this.nodes.length; i++)\r\n        {\r\n            this.nodes[i].unHide();\r\n        }\r\n    }\r\n};\r\n\r\nfunction Utf8ArrayToStr(array)\r\n{\r\n    if (window.TextDecoder) return new TextDecoder(\"utf-8\").decode(array);\r\n\r\n    let out, i, len, c;\r\n    let char2, char3;\r\n\r\n    out = \"\";\r\n    len = array.length;\r\n    i = 0;\r\n    while (i < len)\r\n    {\r\n        c = array[i++];\r\n        switch (c >> 4)\r\n        {\r\n        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:\r\n            // 0xxxxxxx\r\n            out += String.fromCharCode(c);\r\n            break;\r\n        case 12: case 13:\r\n            // 110x xxxx   10xx xxxx\r\n            char2 = array[i++];\r\n            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));\r\n            break;\r\n        case 14:\r\n            // 1110 xxxx  10xx xxxx  10xx xxxx\r\n            char2 = array[i++];\r\n            char3 = array[i++];\r\n            out += String.fromCharCode(((c & 0x0F) << 12) |\r\n                    ((char2 & 0x3F) << 6) |\r\n                    ((char3 & 0x3F) << 0));\r\n            break;\r\n        }\r\n    }\r\n\r\n    return out;\r\n}\r\n\r\nfunction readChunk(dv, bArr, arrayBuffer, offset)\r\n{\r\n    const chunk = {};\r\n\r\n    if (offset >= dv.byteLength)\r\n    {\r\n        // op.log(\"could not read chunk...\");\r\n        return;\r\n    }\r\n    chunk.size = dv.getUint32(offset + 0, le);\r\n\r\n    // chunk.type = new TextDecoder(\"utf-8\").decode(bArr.subarray(offset+4, offset+4+4));\r\n    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));\r\n\r\n    if (chunk.type == \"BIN\\0\")\r\n    {\r\n        // console.log(chunk.size,arrayBuffer.length,offset);\r\n        // try\r\n        // {\r\n        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);\r\n        // }\r\n        // catch(e)\r\n        // {\r\n        //     chunk.dataView = null;\r\n        //     console.log(e);\r\n        // }\r\n    }\r\n    else\r\n    if (chunk.type == \"JSON\")\r\n    {\r\n        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));\r\n\r\n        try\r\n        {\r\n            const obj = JSON.parse(json);\r\n            chunk.data = obj;\r\n            outGenerator.set(obj.asset.generator);\r\n        }\r\n        catch (e)\r\n        {\r\n        }\r\n    }\r\n    else\r\n    {\r\n        op.warn(\"unknown type\", chunk.type);\r\n    }\r\n\r\n    return chunk;\r\n}\r\n\r\nfunction loadAnims(gltf)\r\n{\r\n    const uniqueAnimNames = {};\r\n    maxTimeDict = {};\r\n\r\n    for (let i = 0; i < gltf.json.animations.length; i++)\r\n    {\r\n        const an = gltf.json.animations[i];\r\n\r\n        an.name = an.name || \"unknown\";\r\n\r\n        for (let ia = 0; ia < an.channels.length; ia++)\r\n        {\r\n            const chan = an.channels[ia];\r\n\r\n            const node = gltf.nodes[chan.target.node];\r\n            const sampler = an.samplers[chan.sampler];\r\n\r\n            const acc = gltf.json.accessors[sampler.input];\r\n            const bufferIn = gltf.accBuffers[sampler.input];\r\n\r\n            const accOut = gltf.json.accessors[sampler.output];\r\n            const bufferOut = gltf.accBuffers[sampler.output];\r\n\r\n            gltf.accBuffersDelete.push(sampler.output, sampler.input);\r\n\r\n            if (bufferIn && bufferOut)\r\n            {\r\n                let numComps = 1;\r\n                if (accOut.type === \"VEC2\")numComps = 2;\r\n                else if (accOut.type === \"VEC3\")numComps = 3;\r\n                else if (accOut.type === \"VEC4\")numComps = 4;\r\n                else if (accOut.type === \"SCALAR\")\r\n                {\r\n                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...\r\n                }\r\n                else op.log(\"[] UNKNOWN accOut.type\", accOut.type);\r\n\r\n                const anims = [];\r\n\r\n                uniqueAnimNames[an.name] = true;\r\n\r\n                for (let k = 0; k < numComps; k++)\r\n                {\r\n                    const newAnim = new CABLES.Anim();\r\n                    // newAnim.name=an.name;\r\n                    anims.push(newAnim);\r\n                }\r\n\r\n                if (sampler.interpolation === \"LINEAR\") {}\r\n                else if (sampler.interpolation === \"STEP\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;\r\n                else if (sampler.interpolation === \"CUBICSPLINE\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;\r\n                else op.warn(\"unknown interpolation\", sampler.interpolation);\r\n\r\n                // console.log(bufferOut)\r\n\r\n                // if there is no keyframe for time 0 copy value of first keyframe at time 0\r\n                if (bufferIn[0] !== 0.0)\r\n                    for (let k = 0; k < numComps; k++)\r\n                        anims[k].setValue(0, bufferOut[0 * numComps + k]);\r\n\r\n                for (let j = 0; j < bufferIn.length; j++)\r\n                {\r\n                    // maxTime = Math.max(bufferIn[j], maxTime);\r\n                    maxTimeDict[an.name] = bufferIn[j];\r\n\r\n                    for (let k = 0; k < numComps; k++)\r\n                    {\r\n                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)\r\n                        {\r\n                            const idx = ((j * numComps) * 3 + k);\r\n\r\n                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);\r\n                            key.bezTangIn = bufferOut[idx];\r\n                            key.bezTangOut = bufferOut[idx + (numComps * 2)];\r\n\r\n                            // console.log(an.name,k,bufferOut[idx+1]);\r\n                        }\r\n                        else\r\n                        {\r\n                            // console.log(an.name,k,bufferOut[j * numComps + k]);\r\n                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);\r\n                        }\r\n                    }\r\n                }\r\n\r\n                node.setAnim(chan.target.path, an.name, anims);\r\n            }\r\n            else\r\n            {\r\n                op.warn(\"loadAmins bufferIn undefined \", bufferIn === undefined);\r\n                op.warn(\"loadAmins bufferOut undefined \", bufferOut === undefined);\r\n                op.warn(\"loadAmins \", an.name, sampler, accOut);\r\n                op.warn(\"loadAmins num accBuffers\", gltf.accBuffers.length);\r\n                op.warn(\"loadAmins num accessors\", gltf.json.accessors.length);\r\n            }\r\n        }\r\n    }\r\n\r\n    gltf.uniqueAnimNames = uniqueAnimNames;\r\n\r\n    outAnims.setRef(Object.keys(uniqueAnimNames));\r\n}\r\n\r\nfunction loadCams(gltf)\r\n{\r\n    if (!gltf || !gltf.json.cameras) return;\r\n\r\n    gltf.cameras = gltf.cameras || [];\r\n\r\n    for (let i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        if (gltf.nodes[i].hasOwnProperty(\"camera\"))\r\n        {\r\n            const cam = new gltfCamera(gltf, gltf.nodes[i]);\r\n            gltf.cameras.push(cam);\r\n        }\r\n    }\r\n}\r\n\r\nfunction loadAfterDraco()\r\n{\r\n    if (!window.DracoDecoder)\r\n    {\r\n        setTimeout(() =>\r\n        {\r\n            loadAfterDraco();\r\n        }, 100);\r\n    }\r\n\r\n    reloadSoon();\r\n}\r\n\r\nfunction parseGltf(arrayBuffer)\r\n{\r\n    const CHUNK_HEADER_SIZE = 8;\r\n\r\n    let j = 0, i = 0;\r\n\r\n    const gltf = new Gltf();\r\n    gltf.timing.push([\"Start parsing\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (!arrayBuffer) return;\r\n    const byteArray = new Uint8Array(arrayBuffer);\r\n    let pos = 0;\r\n\r\n    // var string = new TextDecoder(\"utf-8\").decode(byteArray.subarray(pos, 4));\r\n    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));\r\n    pos += 4;\r\n    if (string != \"glTF\") return;\r\n\r\n    gltf.timing.push([\"dataview\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    const dv = new DataView(arrayBuffer);\r\n    const version = dv.getUint32(pos, le);\r\n    pos += 4;\r\n    const size = dv.getUint32(pos, le);\r\n    pos += 4;\r\n\r\n    outVersion.set(version);\r\n\r\n    const chunks = [];\r\n    gltf.chunks = chunks;\r\n\r\n    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));\r\n    pos += chunks[0].size + CHUNK_HEADER_SIZE;\r\n    gltf.json = chunks[0].data;\r\n\r\n    gltf.cables = {\r\n        \"fileUrl\": inFile.get(),\r\n        \"shortFileName\": CABLES.basename(inFile.get())\r\n    };\r\n\r\n    outJson.setRef(gltf.json);\r\n    outExtensions.setRef(gltf.json.extensionsUsed || []);\r\n\r\n    let ch = readChunk(dv, byteArray, arrayBuffer, pos);\r\n    while (ch)\r\n    {\r\n        chunks.push(ch);\r\n        pos += ch.size + CHUNK_HEADER_SIZE;\r\n        ch = readChunk(dv, byteArray, arrayBuffer, pos);\r\n    }\r\n\r\n    gltf.chunks = chunks;\r\n\r\n    const views = chunks[0].data.bufferViews;\r\n    const accessors = chunks[0].data.accessors;\r\n\r\n    gltf.timing.push([\"Parse buffers\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf(\"KHR_draco_mesh_compression\") > -1)\r\n    {\r\n        if (!window.DracoDecoder)\r\n        {\r\n            op.setUiError(\"gltfdraco\", \"GLTF draco compression lib not found / add draco op to your patch!\");\r\n\r\n            loadAfterDraco();\r\n            return gltf;\r\n        }\r\n        else\r\n        {\r\n            gltf.useDraco = true;\r\n        }\r\n    }\r\n\r\n    op.setUiError(\"gltfdraco\", null);\r\n    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\r\n\r\n    if (views)\r\n    {\r\n        for (i = 0; i < accessors.length; i++)\r\n        {\r\n            const acc = accessors[i];\r\n            const view = views[acc.bufferView];\r\n\r\n            let numComps = 0;\r\n            if (acc.type == \"SCALAR\")numComps = 1;\r\n            else if (acc.type == \"VEC2\")numComps = 2;\r\n            else if (acc.type == \"VEC3\")numComps = 3;\r\n            else if (acc.type == \"VEC4\")numComps = 4;\r\n            else if (acc.type == \"MAT4\")numComps = 16;\r\n            else console.error(\"unknown accessor type\", acc.type);\r\n\r\n            //   const decoder = new decoderModule.Decoder();\r\n            //   const decodedGeometry = decodeDracoData(data, decoder);\r\n            //   // Encode mesh\r\n            //   encodeMeshToFile(decodedGeometry, decoder);\r\n\r\n            //   decoderModule.destroy(decoder);\r\n            //   decoderModule.destroy(decodedGeometry);\r\n\r\n            // 5120 (BYTE)\t1\r\n            // 5121 (UNSIGNED_BYTE)\t1\r\n            // 5122 (SHORT)\t2\r\n\r\n            if (chunks[1].dataView)\r\n            {\r\n                if (view)\r\n                {\r\n                    const num = acc.count * numComps;\r\n                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\r\n                    let stride = view.byteStride || 0;\r\n                    let dataBuff = null;\r\n\r\n                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT\r\n                    {\r\n                        stride = stride || 4;\r\n\r\n                        const isInt = acc.componentType == 5125;\r\n                        if (isInt)dataBuff = new Uint32Array(num);\r\n                        else dataBuff = new Float32Array(num);\r\n\r\n                        dataBuff.cblStride = numComps;\r\n\r\n                        for (j = 0; j < num; j++)\r\n                        {\r\n                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);\r\n                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);\r\n\r\n                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);\r\n                            accPos += 4;\r\n                        }\r\n                    }\r\n                    else if (acc.componentType == 5123) // UNSIGNED_SHORT\r\n                    {\r\n                        stride = stride || 2;\r\n\r\n                        dataBuff = new Uint16Array(num);\r\n                        dataBuff.cblStride = stride;\r\n\r\n                        for (j = 0; j < num; j++)\r\n                        {\r\n                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);\r\n\r\n                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);\r\n\r\n                            accPos += 2;\r\n                        }\r\n                    }\r\n                    else if (acc.componentType == 5121) // UNSIGNED_BYTE\r\n                    {\r\n                        stride = stride || 1;\r\n\r\n                        dataBuff = new Uint8Array(num);\r\n                        dataBuff.cblStride = stride;\r\n\r\n                        for (j = 0; j < num; j++)\r\n                        {\r\n                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);\r\n\r\n                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);\r\n\r\n                            accPos += 1;\r\n                        }\r\n                    }\r\n\r\n                    else\r\n                    {\r\n                        console.error(\"unknown component type\", acc.componentType);\r\n                    }\r\n\r\n                    gltf.accBuffers.push(dataBuff);\r\n                }\r\n                else\r\n                {\r\n                    // console.log(\"has no dataview\");\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    gltf.timing.push([\"Parse mesh groups\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    gltf.json.meshes = gltf.json.meshes || [];\r\n\r\n    if (gltf.json.meshes)\r\n    {\r\n        for (i = 0; i < gltf.json.meshes.length; i++)\r\n        {\r\n            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);\r\n            gltf.meshes.push(mesh);\r\n        }\r\n    }\r\n\r\n    gltf.timing.push([\"Parse nodes\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    for (i = 0; i < gltf.json.nodes.length; i++)\r\n    {\r\n        if (gltf.json.nodes[i].children)\r\n            for (j = 0; j < gltf.json.nodes[i].children.length; j++)\r\n            {\r\n                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;\r\n            }\r\n    }\r\n\r\n    for (i = 0; i < gltf.json.nodes.length; i++)\r\n    {\r\n        const node = new gltfNode(gltf.json.nodes[i], gltf);\r\n        gltf.nodes.push(node);\r\n    }\r\n\r\n    for (i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        const node = gltf.nodes[i];\r\n\r\n        if (!node.children) continue;\r\n        for (let j = 0; j < node.children.length; j++)\r\n        {\r\n            gltf.nodes[node.children[j]].parent = node;\r\n        }\r\n    }\r\n\r\n    for (i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        gltf.nodes[i].initSkin();\r\n    }\r\n\r\n    needsMatUpdate = true;\r\n\r\n    gltf.timing.push([\"load anims\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (gltf.json.animations) loadAnims(gltf);\r\n\r\n    gltf.timing.push([\"load cameras\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n    if (gltf.json.cameras) loadCams(gltf);\r\n\r\n    gltf.timing.push([\"finished\", Math.round((performance.now() - gltf.startTime))]);\r\n    return gltf;\r\n}\r\n","inc_mesh_js":"let gltfMesh = class\r\n{\r\n    constructor(name, prim, gltf, finished)\r\n    {\r\n        this.POINTS = 0;\r\n        this.LINES = 1;\r\n        this.LINE_LOOP = 2;\r\n        this.LINE_STRIP = 3;\r\n        this.TRIANGLES = 4;\r\n        this.TRIANGLE_STRIP = 5;\r\n        this.TRIANGLE_FAN = 6;\r\n\r\n        this.test = 0;\r\n        this.name = name;\r\n        this.submeshIndex = 0;\r\n        this.material = prim.material;\r\n        this.mesh = null;\r\n        this.geom = new CGL.Geometry(\"gltf_\" + this.name);\r\n        this.geom.verticesIndices = [];\r\n        this.bounds = null;\r\n        this.primitive = 4;\r\n        this.morphTargetsRenderMod = null;\r\n        this.weights = prim.weights;\r\n\r\n        if (prim.hasOwnProperty(\"mode\")) this.primitive = prim.mode;\r\n\r\n        if (prim.hasOwnProperty(\"indices\")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];\r\n\r\n        gltf.loadingMeshes = gltf.loadingMeshes || 0;\r\n        gltf.loadingMeshes++;\r\n\r\n        this.materialJson =\r\n            this._matPbrMetalness =\r\n            this._matPbrRoughness =\r\n            this._matDiffuseColor = null;\r\n\r\n        if (gltf.json.materials)\r\n        {\r\n            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];\r\n\r\n            if (this.materialJson && this.materialJson.pbrMetallicRoughness)\r\n            {\r\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"baseColorFactor\"))\r\n                {\r\n                    this._matDiffuseColor = [1, 1, 1, 1];\r\n                }\r\n                else\r\n                {\r\n                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\r\n                }\r\n\r\n                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\r\n\r\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"metallicFactor\"))\r\n                {\r\n                    this._matPbrMetalness = 1.0;\r\n                }\r\n                else\r\n                {\r\n                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;\r\n                }\r\n\r\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"roughnessFactor\"))\r\n                {\r\n                    this._matPbrRoughness = 1.0;\r\n                }\r\n                else\r\n                {\r\n                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;\r\n                }\r\n            }\r\n        }\r\n\r\n        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)\r\n        {\r\n            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];\r\n            const num = view.byteLength;\r\n            const dataBuff = new Int8Array(num);\r\n            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);\r\n            for (let j = 0; j < num; j++)\r\n            {\r\n                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);\r\n                accPos++;\r\n            }\r\n\r\n            const dracoDecoder = window.DracoDecoder;\r\n            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>\r\n            {\r\n                const geom = new CGL.Geometry(\"draco mesh \" + name);\r\n\r\n                for (let i = 0; i < geometry.attributes.length; i++)\r\n                {\r\n                    const attr = geometry.attributes[i];\r\n\r\n                    if (attr.name === \"position\") geom.vertices = attr.array;\r\n                    else if (attr.name === \"normal\") geom.vertexNormals = attr.array;\r\n                    else if (attr.name === \"uv\") geom.texCoords = attr.array;\r\n                    else if (attr.name === \"color\") geom.vertexColors = this.calcVertexColors(attr.array);\r\n                    else if (attr.name === \"joints\") geom.setAttribute(\"attrJoints\", Array.from(attr.array), 4);\r\n                    else if (attr.name === \"weights\")\r\n                    {\r\n                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);\r\n\r\n                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)\r\n                        {\r\n                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;\r\n                            for (let j = 0; j < attr.itemSize; j++)\r\n                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];\r\n                        }\r\n                        geom.setAttribute(\"attrWeights\", arr4, 4);\r\n                    }\r\n                    else op.logWarn(\"unknown draco attrib\", attr);\r\n                }\r\n\r\n                geometry.attributes = null;\r\n                geom.verticesIndices = geometry.index.array;\r\n\r\n                this.setGeom(geom);\r\n\r\n                this.mesh = null;\r\n                gltf.loadingMeshes--;\r\n                gltf.timing.push([\"draco decode\", Math.round((performance.now() - gltf.startTime))]);\r\n\r\n                if (finished)finished(this);\r\n            }, (error) => { op.logError(error); });\r\n        }\r\n        else\r\n        {\r\n            gltf.loadingMeshes--;\r\n            this.fillGeomAttribs(gltf, this.geom, prim.attributes);\r\n\r\n            if (prim.targets)\r\n            {\r\n                for (let j = 0; j < prim.targets.length; j++)\r\n                {\r\n                    const tgeom = new CGL.Geometry(\"gltf_target_\" + j);\r\n\r\n                    // if (prim.hasOwnProperty(\"indices\")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];\r\n\r\n                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);\r\n\r\n                    // { // calculate normals for final position of morphtarget for later...\r\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];\r\n                    //     tgeom.calculateNormals();\r\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];\r\n                    // }\r\n\r\n                    this.geom.morphTargets.push(tgeom);\r\n                }\r\n            }\r\n            if (finished)finished(this);\r\n        }\r\n    }\r\n\r\n    _linearToSrgb(x)\r\n    {\r\n        if (x <= 0)\r\n            return 0;\r\n        else if (x >= 1)\r\n            return 1;\r\n        else if (x < 0.0031308)\r\n            return x * 12.92;\r\n        else\r\n            return x ** (1 / 2.2) * 1.055 - 0.055;\r\n    }\r\n\r\n    calcVertexColors(arr, type)\r\n    {\r\n        let vertexColors = null;\r\n        if (arr instanceof Float32Array)\r\n        {\r\n            let div = false;\r\n            for (let i = 0; i < arr.length; i++)\r\n            {\r\n                if (arr[i] > 1)\r\n                {\r\n                    div = true;\r\n                    continue;\r\n                }\r\n            }\r\n\r\n            if (div)\r\n                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;\r\n\r\n            vertexColors = arr;\r\n        }\r\n\r\n        else if (arr instanceof Uint16Array)\r\n        {\r\n            const fb = new Float32Array(arr.length);\r\n            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;\r\n\r\n            vertexColors = fb;\r\n        }\r\n        else vertexColors = arr;\r\n\r\n        for (let i = 0; i < vertexColors.length; i++)\r\n        {\r\n            vertexColors[i] = this._linearToSrgb(vertexColors[i]);\r\n        }\r\n\r\n        if (arr.cblStride == 3)\r\n        {\r\n            const nc = new Float32Array(vertexColors.length / 3 * 4);\r\n            for (let i = 0; i < vertexColors.length / 3; i++)\r\n            {\r\n                nc[i * 4 + 0] = vertexColors[i * 3 + 0];\r\n                nc[i * 4 + 1] = vertexColors[i * 3 + 1];\r\n                nc[i * 4 + 2] = vertexColors[i * 3 + 2];\r\n                nc[i * 4 + 3] = 1;\r\n            }\r\n            vertexColors = nc;\r\n        }\r\n\r\n        return vertexColors;\r\n    }\r\n\r\n    fillGeomAttribs(gltf, tgeom, attribs, setGeom)\r\n    {\r\n        if (attribs.hasOwnProperty(\"POSITION\")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];\r\n        if (attribs.hasOwnProperty(\"NORMAL\")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];\r\n        if (attribs.hasOwnProperty(\"TANGENT\")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];\r\n\r\n        // // console.log(gltf.accBuffers[attribs.COLOR_0])\r\n        // console.log(gltf);\r\n\r\n        if (attribs.hasOwnProperty(\"COLOR_0\")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0], gltf.accBuffers[attribs.COLOR_0].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_1\")) tgeom.setAttribute(\"attrVertColor1\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), gltf.accBuffers[attribs.COLOR_1].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_2\")) tgeom.setAttribute(\"attrVertColor2\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), gltf.accBuffers[attribs.COLOR_2].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_3\")) tgeom.setAttribute(\"attrVertColor3\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), gltf.accBuffers[attribs.COLOR_3].type);\r\n        if (attribs.hasOwnProperty(\"COLOR_4\")) tgeom.setAttribute(\"attrVertColor4\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), gltf.accBuffers[attribs.COLOR_4].type);\r\n\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) tgeom.setAttribute(\"attrTexCoord1\", gltf.accBuffers[attribs.TEXCOORD_1], 2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) tgeom.setAttribute(\"attrTexCoord2\", gltf.accBuffers[attribs.TEXCOORD_2], 2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) tgeom.setAttribute(\"attrTexCoord3\", gltf.accBuffers[attribs.TEXCOORD_3], 2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) tgeom.setAttribute(\"attrTexCoord4\", gltf.accBuffers[attribs.TEXCOORD_4], 2);\r\n\r\n        if (attribs.hasOwnProperty(\"WEIGHTS_0\"))\r\n        {\r\n            tgeom.setAttribute(\"attrWeights\", gltf.accBuffers[attribs.WEIGHTS_0], 4);\r\n        }\r\n        if (attribs.hasOwnProperty(\"JOINTS_0\"))\r\n        {\r\n            if (!gltf.accBuffers[attribs.JOINTS_0])console.log(\"no !gltf.accBuffers[attribs.JOINTS_0]\");\r\n            tgeom.setAttribute(\"attrJoints\", gltf.accBuffers[attribs.JOINTS_0], 4);\r\n        }\r\n\r\n        if (attribs.hasOwnProperty(\"POSITION\")) gltf.accBuffersDelete.push(attribs.POSITION);\r\n        if (attribs.hasOwnProperty(\"NORMAL\")) gltf.accBuffersDelete.push(attribs.NORMAL);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);\r\n        if (attribs.hasOwnProperty(\"TANGENT\")) gltf.accBuffersDelete.push(attribs.TANGENT);\r\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\r\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\r\n        if (attribs.hasOwnProperty(\"COLOR_1\"))gltf.accBuffersDelete.push(attribs.COLOR_1);\r\n        if (attribs.hasOwnProperty(\"COLOR_2\"))gltf.accBuffersDelete.push(attribs.COLOR_2);\r\n        if (attribs.hasOwnProperty(\"COLOR_3\"))gltf.accBuffersDelete.push(attribs.COLOR_3);\r\n\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);\r\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);\r\n\r\n        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);\r\n    }\r\n\r\n    setGeom(geom)\r\n    {\r\n        if (inNormFormat.get() == \"X-ZY\")\r\n        {\r\n            for (let i = 0; i < geom.vertexNormals.length; i += 3)\r\n            {\r\n                let t = geom.vertexNormals[i + 2];\r\n                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];\r\n                geom.vertexNormals[i + 1] = -t;\r\n            }\r\n        }\r\n\r\n        if (inVertFormat.get() == \"XZ-Y\")\r\n        {\r\n            for (let i = 0; i < geom.vertices.length; i += 3)\r\n            {\r\n                let t = geom.vertices[i + 2];\r\n                geom.vertices[i + 2] = -geom.vertices[i + 1];\r\n                geom.vertices[i + 1] = t;\r\n            }\r\n        }\r\n\r\n        if (this.primitive == this.TRIANGLES)\r\n        {\r\n            if (inCalcNormals.get() == \"Force Smooth\" || inCalcNormals.get() == false) geom.calculateNormals();\r\n            else if (!geom.vertexNormals.length && inCalcNormals.get() == \"Auto\") geom.calculateNormals({ \"smooth\": false });\r\n\r\n            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)\r\n            {\r\n                const bitan = vec3.create();\r\n                const tan = vec3.create();\r\n\r\n                const tangents = geom.tangents;\r\n                geom.tangents = new Float32Array(tangents.length / 4 * 3);\r\n                geom.biTangents = new Float32Array(tangents.length / 4 * 3);\r\n\r\n                for (let i = 0; i < tangents.length; i += 4)\r\n                {\r\n                    const idx = i / 4 * 3;\r\n\r\n                    vec3.cross(\r\n                        bitan,\r\n                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],\r\n                        [tangents[i], tangents[i + 1], tangents[i + 2]]\r\n                    );\r\n\r\n                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);\r\n                    vec3.normalize(bitan, bitan);\r\n\r\n                    geom.biTangents[idx + 0] = bitan[0];\r\n                    geom.biTangents[idx + 1] = bitan[1];\r\n                    geom.biTangents[idx + 2] = bitan[2];\r\n\r\n                    geom.tangents[idx + 0] = tangents[i + 0];\r\n                    geom.tangents[idx + 1] = tangents[i + 1];\r\n                    geom.tangents[idx + 2] = tangents[i + 2];\r\n                }\r\n            }\r\n\r\n            if (geom.tangents.length === 0 || inCalcNormals.get() != \"Never\")\r\n            {\r\n                // console.log(\"[gltf ]no tangents... calculating tangents...\");\r\n                geom.calcTangentsBitangents();\r\n            }\r\n        }\r\n\r\n        this.geom = geom;\r\n\r\n        this.bounds = geom.getBounds();\r\n    }\r\n\r\n    render(cgl, ignoreMaterial, skinRenderer)\r\n    {\r\n        if (!this.mesh && this.geom && this.geom.verticesIndices)\r\n        {\r\n            let g = this.geom;\r\n            if (this.geom.vertices.length / 3 > 64000 && this.geom.verticesIndices.length > 0)\r\n            {\r\n                g = this.geom.copy();\r\n                g.unIndex(false, true);\r\n            }\r\n\r\n            let glprim;\r\n\r\n            if (cgl.gl)\r\n            {\r\n                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;\r\n                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;\r\n                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;\r\n                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;\r\n                else\r\n                {\r\n                    op.logWarn(\"unknown primitive type\", this);\r\n                }\r\n            }\r\n\r\n            this.mesh = op.patch.cg.createMesh(g, { \"glPrimitive\": glprim });\r\n        }\r\n\r\n        if (this.mesh)\r\n        {\r\n            // update morphTargets\r\n            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)\r\n            {\r\n                this.mesh.addVertexNumbers = true;\r\n                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);\r\n            }\r\n\r\n            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];\r\n            if (skinRenderer)useMat = false;\r\n\r\n            if (useMat) cgl.pushShader(gltf.shaders[this.material]);\r\n\r\n            const currentShader = cgl.getShader() || {};\r\n            const uniDiff = currentShader.uniformColorDiffuse;\r\n\r\n            const uniPbrMetalness = currentShader.uniformPbrMetalness;\r\n            const uniPbrRoughness = currentShader.uniformPbrRoughness;\r\n\r\n            // if (gltf.shaders[this.material] && !inUseMatProps.get())\r\n            // {\r\n            //     gltf.shaders[this.material]=null;\r\n            // }\r\n\r\n            if (!gltf.shaders[this.material] && inUseMatProps.get())\r\n            {\r\n                if (uniDiff && this._matDiffuseColor)\r\n                {\r\n                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];\r\n                    uniDiff.setValue(this._matDiffuseColor);\r\n                }\r\n\r\n                if (uniPbrMetalness)\r\n                    if (this._matPbrMetalness != null)\r\n                    {\r\n                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();\r\n                        uniPbrMetalness.setValue(this._matPbrMetalness);\r\n                    }\r\n                    else\r\n                        uniPbrMetalness.setValue(0);\r\n\r\n                if (uniPbrRoughness)\r\n                    if (this._matPbrRoughness != null)\r\n                    {\r\n                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();\r\n                        uniPbrRoughness.setValue(this._matPbrRoughness);\r\n                    }\r\n                    else\r\n                    {\r\n                        uniPbrRoughness.setValue(0);\r\n                    }\r\n            }\r\n\r\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);\r\n            if (this.mesh)\r\n            {\r\n                this.mesh.render(cgl.getShader(), ignoreMaterial);\r\n            }\r\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);\r\n\r\n            if (inUseMatProps.get())\r\n            {\r\n                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);\r\n                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);\r\n                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);\r\n            }\r\n\r\n            if (useMat) cgl.popShader();\r\n        }\r\n        else\r\n        {\r\n            console.log(\"no mesh......\");\r\n        }\r\n    }\r\n};\r\n","inc_meshGroup_js":"const gltfMeshGroup = class\r\n{\r\n    constructor(gltf, m)\r\n    {\r\n        this.bounds = new CABLES.CG.BoundingBox();\r\n        this.meshes = [];\r\n\r\n        m.name = m.name || (\"unknown mesh \" + CABLES.simpleId());\r\n\r\n        this.name = m.name;\r\n        const prims = m.primitives;\r\n\r\n        for (let i = 0; i < prims.length; i++)\r\n        {\r\n            const mesh = new gltfMesh(this.name, prims[i], gltf,\r\n                (mesh) =>\r\n                {\r\n                    mesh.extras = m.extras;\r\n                    this.bounds.apply(mesh.bounds);\r\n                });\r\n\r\n            mesh.submeshIndex = i;\r\n            this.meshes.push(mesh);\r\n        }\r\n    }\r\n\r\n    render(cgl, ignoreMat, skinRenderer, _time, weights)\r\n    {\r\n        for (let i = 0; i < this.meshes.length; i++)\r\n        {\r\n            const useMat = gltf.shaders[this.meshes[i].material];\r\n\r\n            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);\r\n            if (skinRenderer)skinRenderer.renderStart(cgl, _time);\r\n            if (weights) this.meshes[i].weights = weights;\r\n            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);\r\n            if (skinRenderer)skinRenderer.renderFinish(cgl);\r\n            if (!ignoreMat && useMat) cgl.popShader();\r\n        }\r\n    }\r\n};\r\n","inc_node_js":"const gltfNode = class\r\n{\r\n    constructor(node, gltf)\r\n    {\r\n        this.isChild = node.isChild || false;\r\n        node.name = node.name || \"unknown node \" + CABLES.simpleId();\r\n        this.name = node.name;\r\n        if (node.hasOwnProperty(\"camera\")) this.camera = node.camera;\r\n        this.hidden = false;\r\n        this.mat = mat4.create();\r\n        this._animActions = {};\r\n        this.animWeights = [];\r\n        this._animMat = mat4.create();\r\n        this._tempMat = mat4.create();\r\n        this._tempQuat = quat.create();\r\n        this._tempRotmat = mat4.create();\r\n        this.mesh = null;\r\n        this.children = [];\r\n        this._node = node;\r\n        this._gltf = gltf;\r\n        this.absMat = mat4.create();\r\n        this.addTranslate = null;\r\n        this._tempAnimScale = null;\r\n        this.addMulMat = null;\r\n        this.updateMatrix();\r\n        this.skinRenderer = null;\r\n        this.copies = [];\r\n    }\r\n\r\n    get skin()\r\n    {\r\n        if (this._node.hasOwnProperty(\"skin\")) return this._node.skin;\r\n        else return -1;\r\n    }\r\n\r\n    copy()\r\n    {\r\n        this.isCopy = true;\r\n        const n = new gltfNode(this._node, this._gltf);\r\n        n.copyOf = this;\r\n\r\n        n._animActions = this._animActions;\r\n        n.children = this.children;\r\n        if (this.skin) n.skinRenderer = new GltfSkin(this);\r\n\r\n        this.updateMatrix();\r\n        return n;\r\n    }\r\n\r\n    hasSkin()\r\n    {\r\n        if (this._node.hasOwnProperty(\"skin\")) return this._gltf.json.skins[this._node.skin].name || \"unknown\";\r\n        return false;\r\n    }\r\n\r\n    initSkin()\r\n    {\r\n        if (this.skin > -1)\r\n        {\r\n            this.skinRenderer = new GltfSkin(this);\r\n        }\r\n    }\r\n\r\n    updateMatrix()\r\n    {\r\n        mat4.identity(this.mat);\r\n        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);\r\n\r\n        if (this._node.rotation)\r\n        {\r\n            const rotmat = mat4.create();\r\n            this._rot = this._node.rotation;\r\n\r\n            mat4.fromQuat(rotmat, this._node.rotation);\r\n            mat4.mul(this.mat, this.mat, rotmat);\r\n        }\r\n\r\n        if (this._node.scale)\r\n        {\r\n            this._scale = this._node.scale;\r\n            mat4.scale(this.mat, this.mat, this._scale);\r\n        }\r\n\r\n        if (this._node.hasOwnProperty(\"mesh\"))\r\n        {\r\n            this.mesh = this._gltf.meshes[this._node.mesh];\r\n            if (this.isCopy)\r\n            {\r\n            }\r\n        }\r\n\r\n        if (this._node.children)\r\n        {\r\n            for (let i = 0; i < this._node.children.length; i++)\r\n            {\r\n                this._gltf.json.nodes[i].isChild = true;\r\n                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;\r\n                this.children.push(this._node.children[i]);\r\n            }\r\n        }\r\n    }\r\n\r\n    unHide()\r\n    {\r\n        this.hidden = false;\r\n        for (let i = 0; i < this.children.length; i++)\r\n            if (this.children[i].unHide) this.children[i].unHide();\r\n    }\r\n\r\n    calcBounds(gltf, mat, bounds)\r\n    {\r\n        const localMat = mat4.create();\r\n\r\n        if (mat) mat4.copy(localMat, mat);\r\n        if (this.mat) mat4.mul(localMat, localMat, this.mat);\r\n\r\n        if (this.mesh)\r\n        {\r\n            const bb = this.mesh.bounds.copy();\r\n            bb.mulMat4(localMat);\r\n            bounds.apply(bb);\r\n\r\n            if (bounds.changed)\r\n            {\r\n                boundingPoints.push(\r\n                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,\r\n                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);\r\n            }\r\n        }\r\n\r\n        for (let i = 0; i < this.children.length; i++)\r\n        {\r\n            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)\r\n            {\r\n                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);\r\n\r\n                bounds.apply(b);\r\n            }\r\n        }\r\n\r\n        if (bounds.changed) return bounds;\r\n        else return null;\r\n    }\r\n\r\n    setAnimAction(name)\r\n    {\r\n        if (!name) return;\r\n\r\n        this._currentAnimaction = name;\r\n\r\n        if (name && !this._animActions[name]) return null;\r\n\r\n        for (let path in this._animActions[name])\r\n        {\r\n            if (path == \"translation\") this._animTrans = this._animActions[name][path];\r\n            else if (path == \"rotation\") this._animRot = this._animActions[name][path];\r\n            else if (path == \"scale\") this._animScale = this._animActions[name][path];\r\n            else if (path == \"weights\") this.animWeights = this._animActions[name][path];\r\n        }\r\n    }\r\n\r\n    setAnim(path, name, anims)\r\n    {\r\n        if (!path || !name || !anims) return;\r\n\r\n        this._animActions[name] = this._animActions[name] || {};\r\n\r\n        // debugger;\r\n\r\n        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;\r\n\r\n        if (this._animActions[name][path]) op.log(\"[gltfNode] animation action path already exists\", name, path, this._animActions[name][path]);\r\n\r\n        this._animActions[name][path] = anims;\r\n\r\n        if (path == \"translation\") this._animTrans = anims;\r\n        else if (path == \"rotation\") this._animRot = anims;\r\n        else if (path == \"scale\") this._animScale = anims;\r\n        else if (path == \"weights\") this.animWeights = this._animActions[name][path];\r\n    }\r\n\r\n    modelMatLocal()\r\n    {\r\n        return this._animMat || this.mat;\r\n    }\r\n\r\n    modelMatAbs()\r\n    {\r\n        return this.absMat;\r\n    }\r\n\r\n    transform(cgl, _time)\r\n    {\r\n        if (!_time && _time != 0)_time = time;\r\n\r\n        this._lastTimeTrans = _time;\r\n\r\n        gltfTransforms++;\r\n\r\n        if (!this._animTrans && !this._animRot && !this._animScale)\r\n        {\r\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);\r\n            this._animMat = null;\r\n        }\r\n        else\r\n        {\r\n            this._animMat = this._animMat || mat4.create();\r\n            mat4.identity(this._animMat);\r\n\r\n            const playAnims = true;\r\n\r\n            if (playAnims && this._animTrans)\r\n            {\r\n                mat4.translate(this._animMat, this._animMat, [\r\n                    this._animTrans[0].getValue(_time),\r\n                    this._animTrans[1].getValue(_time),\r\n                    this._animTrans[2].getValue(_time)]);\r\n            }\r\n            else\r\n            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);\r\n\r\n            if (playAnims && this._animRot)\r\n            {\r\n                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\r\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)\r\n                {\r\n                    this._tempQuat[0] = this._animRot[0].getValue(_time);\r\n                    this._tempQuat[1] = this._animRot[1].getValue(_time);\r\n                    this._tempQuat[2] = this._animRot[2].getValue(_time);\r\n                    this._tempQuat[3] = this._animRot[3].getValue(_time);\r\n                }\r\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)\r\n                {\r\n                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\r\n                }\r\n\r\n                mat4.fromQuat(this._tempMat, this._tempQuat);\r\n                mat4.mul(this._animMat, this._animMat, this._tempMat);\r\n            }\r\n            else if (this._rot)\r\n            {\r\n                mat4.fromQuat(this._tempRotmat, this._rot);\r\n                mat4.mul(this._animMat, this._animMat, this._tempRotmat);\r\n            }\r\n\r\n            if (playAnims && this._animScale)\r\n            {\r\n                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];\r\n                this._tempAnimScale[0] = this._animScale[0].getValue(_time);\r\n                this._tempAnimScale[1] = this._animScale[1].getValue(_time);\r\n                this._tempAnimScale[2] = this._animScale[2].getValue(_time);\r\n                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);\r\n            }\r\n            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);\r\n\r\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);\r\n        }\r\n\r\n        if (this.animWeights)\r\n        {\r\n            this.weights = this.weights || [];\r\n\r\n            let str = \"\";\r\n            for (let i = 0; i < this.animWeights.length; i++)\r\n            {\r\n                this.weights[i] = this.animWeights[i].getValue(_time);\r\n                str += this.weights[i] + \"/\";\r\n            }\r\n\r\n            // this.mesh.weights=this.animWeights.get(_time);\r\n        }\r\n\r\n        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);\r\n\r\n        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);\r\n\r\n        mat4.copy(this.absMat, cgl.mMatrix);\r\n    }\r\n\r\n    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)\r\n    {\r\n        if (!dontTransform) cgl.pushModelMatrix();\r\n\r\n        if (_time === undefined) _time = gltf.time;\r\n\r\n        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);\r\n\r\n        if (this.hidden && !drawHidden)\r\n        {\r\n        }\r\n        else\r\n        {\r\n            if (this.skinRenderer)\r\n            {\r\n                this.skinRenderer.time = _time;\r\n                if (!dontDrawMesh)\r\n                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);\r\n            }\r\n            else\r\n            {\r\n                if (this.mesh && !dontDrawMesh)\r\n                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);\r\n            }\r\n        }\r\n\r\n        if (!ignoreChilds && !this.hidden)\r\n            for (let i = 0; i < this.children.length; i++)\r\n                if (gltf.nodes[this.children[i]])\r\n                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);\r\n\r\n        if (!dontTransform)cgl.popModelMatrix();\r\n    }\r\n};\r\n","inc_print_js":"let tab = null;\r\n\r\nfunction closeTab()\r\n{\r\n    if (tab)gui.mainTabs.closeTab(tab.id);\r\n    tab = null;\r\n}\r\n\r\nfunction formatVec(arr)\r\n{\r\n    const nums = [];\r\n    for (let i = 0; i < arr.length; i++)\r\n    {\r\n        nums.push(Math.round(arr[i] * 1000) / 1000);\r\n    }\r\n\r\n    return nums.join(\",\");\r\n}\r\n\r\nfunction printNode(html, node, level)\r\n{\r\n    if (!gltf) return;\r\n\r\n    html += \"<tr class=\\\"row\\\">\";\r\n\r\n    let ident = \"\";\r\n    let identSpace = \"\";\r\n\r\n    for (let i = 1; i < level; i++)\r\n    {\r\n        identSpace += \"&nbsp;&nbsp;&nbsp;\";\r\n        let identClass = \"identBg\";\r\n        if (i == 1)identClass = \"identBgLevel0\";\r\n        ident += \"<td class=\\\"ident \" + identClass + \"\\\" ><div style=\\\"\\\"></div></td>\";\r\n    }\r\n    let id = CABLES.uuid();\r\n    html += ident;\r\n    html += \"<td colspan=\\\"\" + (21 - level) + \"\\\">\";\r\n\r\n    if (node.mesh && node.mesh.meshes.length)html += \"<span class=\\\"icon icon-cube\\\"></span>&nbsp;\";\r\n    else html += \"<span class=\\\"icon icon-box-select\\\"></span> &nbsp;\";\r\n\r\n    html += node.name + \"</td><td></td>\";\r\n\r\n    if (node.mesh)\r\n    {\r\n        html += \"<td>\";\r\n        for (let i = 0; i < node.mesh.meshes.length; i++)\r\n        {\r\n            if (i > 0)html += \", \";\r\n            html += node.mesh.meshes[i].name;\r\n        }\r\n\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        html += node.hasSkin() || \"-\";\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        let countMats = 0;\r\n        for (let i = 0; i < node.mesh.meshes.length; i++)\r\n        {\r\n            if (countMats > 0)html += \", \";\r\n            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty(\"material\"))\r\n            {\r\n                if (gltf.json.materials[node.mesh.meshes[i].material])\r\n                {\r\n                    html += gltf.json.materials[node.mesh.meshes[i].material].name;\r\n                    countMats++;\r\n                }\r\n            }\r\n        }\r\n        if (countMats == 0)html += \"none\";\r\n        html += \"</td>\";\r\n    }\r\n    else\r\n    {\r\n        html += \"<td>-</td><td>-</td><td>-</td>\";\r\n    }\r\n\r\n    html += \"<td>\";\r\n\r\n    if (node._node.translation || node._node.rotation || node._node.scale)\r\n    {\r\n        let info = \"\";\r\n\r\n        if (node._node.translation)info += \"Translate: `\" + formatVec(node._node.translation) + \"` || \";\r\n        if (node._node.rotation)info += \"Rotation: `\" + formatVec(node._node.rotation) + \"` || \";\r\n        if (node._node.scale)info += \"Scale: `\" + formatVec(node._node.scale) + \"` || \";\r\n\r\n        html += \"<span class=\\\"icon icon-gizmo info\\\" data-info=\\\"\" + info + \"\\\"></span> &nbsp;\";\r\n    }\r\n\r\n    if (node._animRot || node._animScale || node._animTrans)\r\n    {\r\n        let info = \"Animated: \";\r\n        if (node._animRot) info += \"Rot \";\r\n        if (node._animScale) info += \"Scale \";\r\n        if (node._animTrans) info += \"Trans \";\r\n\r\n        html += \"<span class=\\\"icon icon-clock info\\\" data-info=\\\"\" + info + \"\\\"></span>&nbsp;\";\r\n    }\r\n\r\n    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += \"-\";\r\n\r\n    html += \"</td>\";\r\n\r\n    html += \"<td>\";\r\n    let hideclass = \"\";\r\n    if (node.hidden)hideclass = \"node-hidden\";\r\n\r\n    // html+='';\r\n    html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','transform')\\\" class=\\\"treebutton\\\">Transform</a>\";\r\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','hierarchy')\\\" class=\\\"treebutton\\\">Hierarchy</a>\";\r\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"')\\\" class=\\\"treebutton\\\">Node</a>\";\r\n\r\n    if (node.hasSkin())\r\n        html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"',false,{skin:true});\\\" class=\\\"treebutton\\\">Skin</a>\";\r\n\r\n    html += \"</td><td>\";\r\n    html += \"&nbsp;<span class=\\\"icon iconhover icon-eye \" + hideclass + \"\\\" onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').toggleNodeVisibility('\" + node.name + \"');this.classList.toggle('node-hidden');\\\"></span>\";\r\n    html += \"</td>\";\r\n\r\n    html += \"</tr>\";\r\n\r\n    if (node.children)\r\n    {\r\n        for (let i = 0; i < node.children.length; i++)\r\n            html = printNode(html, gltf.nodes[node.children[i]], level + 1);\r\n    }\r\n\r\n    return html;\r\n}\r\n\r\nfunction printMaterial(mat, idx)\r\n{\r\n    let html = \"<tr>\";\r\n    html += \" <td>\" + idx + \"</td>\";\r\n    html += \" <td>\" + mat.name + \"</td>\";\r\n\r\n    html += \" <td>\";\r\n\r\n    const info = JSON.stringify(mat, null, 4).replaceAll(\"\\\"\", \"\").replaceAll(\"\\n\", \"<br/>\");\r\n\r\n    html += \"<span class=\\\"icon icon-info\\\" onclick=\\\"new CABLES.UI.ModalDialog({ 'html': '<pre>\" + info + \"</pre>', 'title': '\" + mat.name + \"' });\\\"></span>&nbsp;\";\r\n\r\n    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)\r\n    {\r\n        let rgb = \"\";\r\n        rgb += \"\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);\r\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);\r\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);\r\n\r\n        html += \"<div style=\\\"width:15px;height:15px;background-color:rgb(\" + rgb + \");display:inline-block\\\">&nbsp;</a>\";\r\n    }\r\n    html += \" <td style=\\\"\\\">\" + (gltf.shaders[idx] ? \"-\" : \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').assignMaterial('\" + mat.name + \"')\\\" class=\\\"treebutton\\\">Assign</a>\") + \"<td>\";\r\n    html += \"<td>\";\r\n\r\n    html += \"</tr>\";\r\n    return html;\r\n}\r\n\r\nfunction printInfo()\r\n{\r\n    if (!gltf) return;\r\n\r\n    const startTime = performance.now();\r\n    const sizes = {};\r\n    let html = \"<div style=\\\"overflow:scroll;width:100%;height:100%\\\">\";\r\n\r\n    html += \"File: <a href=\\\"\" + CABLES.platform.getCablesUrl() + \"/asset/patches/?filename=\" + inFile.get() + \"\\\" target=\\\"_blank\\\">\" + CABLES.basename(inFile.get()) + \"</a><br/>\";\r\n\r\n    html += \"Generator:\" + gltf.json.asset.generator;\r\n\r\n    let numNodes = 0;\r\n    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;\r\n    html += \"<div id=\\\"groupNodes\\\">Nodes (\" + numNodes + \")</div>\";\r\n\r\n    html += \"<table id=\\\"sectionNodes\\\" class=\\\"table treetable\\\">\";\r\n\r\n    html += \"<tr>\";\r\n    html += \" <th colspan=\\\"21\\\">Name</th>\";\r\n    html += \" <th>Mesh</th>\";\r\n    html += \" <th>Skin</th>\";\r\n    html += \" <th>Material</th>\";\r\n    html += \" <th>Transform</th>\";\r\n    html += \" <th>Expose</th>\";\r\n    html += \" <th></th>\";\r\n    html += \"</tr>\";\r\n\r\n    for (let i = 0; i < gltf.nodes.length; i++)\r\n    {\r\n        if (!gltf.nodes[i].isChild)\r\n            html = printNode(html, gltf.nodes[i], 1);\r\n    }\r\n    html += \"</table>\";\r\n\r\n    // / //////////////////\r\n\r\n    let numMaterials = 0;\r\n    if (gltf.json.materials)numMaterials = gltf.json.materials.length;\r\n    html += \"<div id=\\\"groupMaterials\\\">Materials (\" + numMaterials + \")</div>\";\r\n\r\n    if (!gltf.json.materials || gltf.json.materials.length == 0)\r\n    {\r\n    }\r\n    else\r\n    {\r\n        html += \"<table id=\\\"materialtable\\\"  class=\\\"table treetable\\\">\";\r\n        html += \"<tr>\";\r\n        html += \" <th>Index</th>\";\r\n        html += \" <th>Name</th>\";\r\n        html += \" <th>Color</th>\";\r\n        html += \" <th>Function</th>\";\r\n        html += \" <th></th>\";\r\n        html += \"</tr>\";\r\n        for (let i = 0; i < gltf.json.materials.length; i++)\r\n        {\r\n            html += printMaterial(gltf.json.materials[i], i);\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ///////////////////////\r\n\r\n    html += \"<div id=\\\"groupMeshes\\\">Meshes (\" + gltf.json.meshes.length + \")</div>\";\r\n\r\n    html += \"<table id=\\\"meshestable\\\"  class=\\\"table treetable\\\">\";\r\n    html += \"<tr>\";\r\n    html += \" <th>Name</th>\";\r\n    html += \" <th>Node</th>\";\r\n    html += \" <th>Material</th>\";\r\n    html += \" <th>Vertices</th>\";\r\n    html += \" <th>Attributes</th>\";\r\n    html += \"</tr>\";\r\n\r\n    let sizeBufferViews = [];\r\n    sizes.meshes = 0;\r\n    sizes.meshTargets = 0;\r\n\r\n    for (let i = 0; i < gltf.json.meshes.length; i++)\r\n    {\r\n        html += \"<tr>\";\r\n        html += \"<td>\" + gltf.json.meshes[i].name + \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        let count = 0;\r\n        let nodename = \"\";\r\n        if (gltf.json.nodes)\r\n            for (let j = 0; j < gltf.json.nodes.length; j++)\r\n            {\r\n                if (gltf.json.nodes[j].mesh == i)\r\n                {\r\n                    count++;\r\n                    if (count == 1)\r\n                    {\r\n                        nodename = gltf.json.nodes[j].name;\r\n                    }\r\n                }\r\n            }\r\n        if (count > 1) html += (count) + \" nodes (\" + nodename + \" ...)\";\r\n        else html += nodename;\r\n        html += \"</td>\";\r\n\r\n        // -------\r\n\r\n        html += \"<td>\";\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            if (gltf.json.meshes[i].primitives[j].hasOwnProperty(\"material\"))\r\n            {\r\n                if (gltf.json.materials[gltf.json.meshes[i]])\r\n                {\r\n                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + \" \";\r\n                }\r\n            }\r\n            else html += \"None\";\r\n        }\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        let numVerts = 0;\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)\r\n            {\r\n                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);\r\n                numVerts += v;\r\n                html += \"\" + v + \"<br/>\";\r\n            }\r\n            else html += \"-<br/>\";\r\n        }\r\n\r\n        if (gltf.json.meshes[i].primitives.length > 1)\r\n            html += \"=\" + numVerts;\r\n        html += \"</td>\";\r\n\r\n        html += \"<td>\";\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);\r\n            html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeGeom('\" + gltf.json.meshes[i].name + \"',\" + j + \")\\\" class=\\\"treebutton\\\">Geometry</a>\";\r\n            html += \"<br/>\";\r\n\r\n            if (gltf.json.meshes[i].primitives[j].targets)\r\n            {\r\n                html += gltf.json.meshes[i].primitives[j].targets.length + \" targets<br/>\";\r\n\r\n                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)\r\n                    html += \"Targetnames:<br/>\" + gltf.json.meshes[i].extras.targetNames.join(\"<br/>\");\r\n\r\n                html += \"<br/>\";\r\n            }\r\n        }\r\n\r\n        html += \"</td>\";\r\n        html += \"</tr>\";\r\n\r\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\r\n        {\r\n            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];\r\n            if (accessor)\r\n            {\r\n                let bufView = accessor.bufferView;\r\n\r\n                if (sizeBufferViews.indexOf(bufView) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView);\r\n                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;\r\n                }\r\n            }\r\n\r\n            for (let k in gltf.json.meshes[i].primitives[j].attributes)\r\n            {\r\n                const attr = gltf.json.meshes[i].primitives[j].attributes[k];\r\n                const bufView2 = gltf.json.accessors[attr].bufferView;\r\n\r\n                if (sizeBufferViews.indexOf(bufView2) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView2);\r\n                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;\r\n                }\r\n            }\r\n\r\n            if (gltf.json.meshes[i].primitives[j].targets)\r\n                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)\r\n                {\r\n                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])\r\n                    {\r\n                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];\r\n                        const accessor = gltf.json.accessors[accessorIdx];\r\n                        const bufView2 = accessor.bufferView;\r\n                        console.log(\"accessor\", accessor);\r\n                        if (sizeBufferViews.indexOf(bufView2) == -1)\r\n                            if (gltf.json.bufferViews[bufView2])\r\n                            {\r\n                                sizeBufferViews.push(bufView2);\r\n                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;\r\n                            }\r\n                    }\r\n                }\r\n        }\r\n    }\r\n    html += \"</table>\";\r\n\r\n    // / //////////////////////////////////\r\n\r\n    let numSamplers = 0;\r\n    let numAnims = 0;\r\n    let numKeyframes = 0;\r\n\r\n    if (gltf.json.animations)\r\n    {\r\n        numAnims = gltf.json.animations.length;\r\n        for (let i = 0; i < gltf.json.animations.length; i++)\r\n        {\r\n            numSamplers += gltf.json.animations[i].samplers.length;\r\n        }\r\n    }\r\n\r\n    html += \"<div id=\\\"groupAnims\\\">Animations (\" + numAnims + \"/\" + numSamplers + \")</div>\";\r\n\r\n    if (gltf.json.animations)\r\n    {\r\n        html += \"<table id=\\\"sectionAnim\\\" class=\\\"table treetable\\\">\";\r\n        html += \"<tr>\";\r\n        html += \"  <th>Name</th>\";\r\n        html += \"  <th>Target node</th>\";\r\n        html += \"  <th>Path</th>\";\r\n        html += \"  <th>Interpolation</th>\";\r\n        html += \"  <th>Keys</th>\";\r\n        html += \"</tr>\";\r\n\r\n\r\n        sizes.animations = 0;\r\n\r\n        for (let i = 0; i < gltf.json.animations.length; i++)\r\n        {\r\n            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)\r\n            {\r\n                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;\r\n                if (sizeBufferViews.indexOf(bufView) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView);\r\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\r\n                }\r\n\r\n                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;\r\n                if (sizeBufferViews.indexOf(bufView) == -1)\r\n                {\r\n                    sizeBufferViews.push(bufView);\r\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\r\n                }\r\n            }\r\n\r\n            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)\r\n            {\r\n                html += \"<tr>\";\r\n                html += \"  <td> Anim \" + i + \": \" + gltf.json.animations[i].name + \"</td>\";\r\n\r\n                html += \"  <td>\" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + \"</td>\";\r\n                html += \"  <td>\";\r\n                html += gltf.json.animations[i].channels[j].target.path + \" \";\r\n                html += \"  </td>\";\r\n\r\n                const smplidx = gltf.json.animations[i].channels[j].sampler;\r\n                const smplr = gltf.json.animations[i].samplers[smplidx];\r\n\r\n                html += \"  <td>\" + smplr.interpolation + \"</td>\";\r\n\r\n                html += \"  <td>\" + gltf.json.accessors[smplr.output].count;\r\n                numKeyframes += gltf.json.accessors[smplr.output].count;\r\n\r\n                // html += \"&nbsp;&nbsp;<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').showAnim('\" + i + \"','\" + j + \"')\\\" class=\\\"icon icon-search\\\"></a>\";\r\n\r\n                html += \"</td>\";\r\n\r\n                html += \"</tr>\";\r\n            }\r\n        }\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td></td>\";\r\n        html += \"  <td>\" + numKeyframes + \" total</td>\";\r\n        html += \"</tr>\";\r\n        html += \"</table>\";\r\n    }\r\n    else\r\n    {\r\n\r\n    }\r\n\r\n    // / ///////////////////\r\n\r\n    let numImages = 0;\r\n    if (gltf.json.images)numImages = gltf.json.images.length;\r\n    html += \"<div id=\\\"groupImages\\\">Images (\" + numImages + \")</div>\";\r\n\r\n    if (gltf.json.images)\r\n    {\r\n        html += \"<table id=\\\"sectionImages\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>name</th>\";\r\n        html += \"  <th>type</th>\";\r\n        html += \"  <th>func</th>\";\r\n        html += \"</tr>\";\r\n\r\n        sizes.images = 0;\r\n\r\n        for (let i = 0; i < gltf.json.images.length; i++)\r\n        {\r\n            if (gltf.json.images[i].hasOwnProperty(\"bufferView\"))\r\n            {\r\n                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty(\"bufferView\")) == -1)console.log(\"image bufferview already there?!\");\r\n                // else\r\n                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;\r\n            }\r\n            else console.log(\"image has no bufferview?!\");\r\n\r\n            html += \"<tr>\";\r\n            html += \"<td>\" + gltf.json.images[i].name + \"</td>\";\r\n            html += \"<td>\" + gltf.json.images[i].mimeType + \"</td>\";\r\n            html += \"<td>\";\r\n\r\n            let name = gltf.json.images[i].name;\r\n            if (name === undefined)name = gltf.json.images[i].bufferView;\r\n\r\n            html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeTexture('\" + name + \"')\\\" class=\\\"treebutton\\\">Expose</a>\";\r\n            html += \"</td>\";\r\n\r\n            html += \"<tr>\";\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ///////////////////////\r\n\r\n    let numCameras = 0;\r\n    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;\r\n    html += \"<div id=\\\"groupCameras\\\">Cameras (\" + numCameras + \")</div>\";\r\n\r\n    if (gltf.json.cameras)\r\n    {\r\n        html += \"<table id=\\\"sectionCameras\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>name</th>\";\r\n        html += \"  <th>type</th>\";\r\n        html += \"  <th>info</th>\";\r\n        html += \"</tr>\";\r\n\r\n        for (let i = 0; i < gltf.json.cameras.length; i++)\r\n        {\r\n            html += \"<tr>\";\r\n            html += \"<td>\" + gltf.json.cameras[i].name + \"</td>\";\r\n            html += \"<td>\" + gltf.json.cameras[i].type + \"</td>\";\r\n            html += \"<td>\";\r\n\r\n            if (gltf.json.cameras[i].perspective)\r\n            {\r\n                html += \"yfov: \" + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;\r\n                html += \", \";\r\n                html += \"zfar: \" + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;\r\n                html += \", \";\r\n                html += \"znear: \" + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;\r\n            }\r\n            html += \"</td>\";\r\n\r\n            html += \"<tr>\";\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ////////////////////////////////////\r\n\r\n    let numSkins = 0;\r\n    if (gltf.json.skins)numSkins = gltf.json.skins.length;\r\n    html += \"<div id=\\\"groupSkins\\\">Skins (\" + numSkins + \")</div>\";\r\n\r\n    if (gltf.json.skins)\r\n    {\r\n        // html += \"<h3>Skins (\" + gltf.json.skins.length + \")</h3>\";\r\n        html += \"<table id=\\\"sectionSkins\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>name</th>\";\r\n        html += \"  <th></th>\";\r\n        html += \"  <th>total joints</th>\";\r\n        html += \"</tr>\";\r\n\r\n        for (let i = 0; i < gltf.json.skins.length; i++)\r\n        {\r\n            html += \"<tr>\";\r\n            html += \"<td>\" + gltf.json.skins[i].name + \"</td>\";\r\n            html += \"<td>\" + \"</td>\";\r\n            html += \"<td>\" + gltf.json.skins[i].joints.length + \"</td>\";\r\n            html += \"<td>\";\r\n            html += \"</td>\";\r\n            html += \"<tr>\";\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / ////////////////////////////////////\r\n\r\n    if (gltf.timing)\r\n    {\r\n        html += \"<div id=\\\"groupTiming\\\">Debug Loading Timing </div>\";\r\n\r\n        html += \"<table id=\\\"sectionTiming\\\" class=\\\"table treetable\\\">\";\r\n\r\n        html += \"<tr>\";\r\n        html += \"  <th>task</th>\";\r\n        html += \"  <th>time used</th>\";\r\n        html += \"</tr>\";\r\n\r\n        let lt = 0;\r\n        for (let i = 0; i < gltf.timing.length - 1; i++)\r\n        {\r\n            html += \"<tr>\";\r\n            html += \"  <td>\" + gltf.timing[i][0] + \"</td>\";\r\n            html += \"  <td>\" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + \" ms</td>\";\r\n            html += \"</tr>\";\r\n            // lt = gltf.timing[i][1];\r\n        }\r\n        html += \"</table>\";\r\n    }\r\n\r\n    // / //////////////////////////\r\n\r\n    let sizeBin = 0;\r\n    if (gltf.json.buffers)\r\n        sizeBin = gltf.json.buffers[0].byteLength;\r\n\r\n    html += \"<div id=\\\"groupBinary\\\">File Size Allocation (\" + Math.round(sizeBin / 1024) + \"k )</div>\";\r\n\r\n    html += \"<table id=\\\"sectionBinary\\\" class=\\\"table treetable\\\">\";\r\n    html += \"<tr>\";\r\n    html += \"  <th>name</th>\";\r\n    html += \"  <th>size</th>\";\r\n    html += \"  <th>%</th>\";\r\n    html += \"</tr>\";\r\n    let sizeUnknown = sizeBin;\r\n    for (let i in sizes)\r\n    {\r\n        // html+=i+':'+Math.round(sizes[i]/1024);\r\n        html += \"<tr>\";\r\n        html += \"<td>\" + i + \"</td>\";\r\n        html += \"<td>\" + readableSize(sizes[i]) + \" </td>\";\r\n        html += \"<td>\" + Math.round(sizes[i] / sizeBin * 100) + \"% </td>\";\r\n        html += \"<tr>\";\r\n        sizeUnknown -= sizes[i];\r\n    }\r\n\r\n    if (sizeUnknown != 0)\r\n    {\r\n        html += \"<tr>\";\r\n        html += \"<td>unknown</td>\";\r\n        html += \"<td>\" + readableSize(sizeUnknown) + \" </td>\";\r\n        html += \"<td>\" + Math.round(sizeUnknown / sizeBin * 100) + \"% </td>\";\r\n        html += \"<tr>\";\r\n    }\r\n\r\n    html += \"</table>\";\r\n    html += \"</div>\";\r\n\r\n    tab = new CABLES.UI.Tab(\"GLTF \" + CABLES.basename(inFile.get()), { \"icon\": \"cube\", \"infotext\": \"tab_gltf\", \"padding\": true, \"singleton\": true });\r\n    gui.mainTabs.addTab(tab, true);\r\n\r\n    tab.addEventListener(\"close\", closeTab);\r\n    tab.html(html);\r\n\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupNodes\"), ele.byId(\"sectionNodes\"), false);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMaterials\"), ele.byId(\"materialtable\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupAnims\"), ele.byId(\"sectionAnim\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMeshes\"), ele.byId(\"meshestable\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupCameras\"), ele.byId(\"sectionCameras\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupImages\"), ele.byId(\"sectionImages\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupSkins\"), ele.byId(\"sectionSkins\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupBinary\"), ele.byId(\"sectionBinary\"), true);\r\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupTiming\"), ele.byId(\"sectionTiming\"), true);\r\n\r\n    gui.maintabPanel.show(true);\r\n}\r\n\r\nfunction readableSize(n)\r\n{\r\n    if (n > 1024) return Math.round(n / 1024) + \" kb\";\r\n    if (n > 1024 * 500) return Math.round(n / 1024) + \" mb\";\r\n    else return n + \" bytes\";\r\n}\r\n","inc_skin_js":"const GltfSkin = class\r\n{\r\n    constructor(node)\r\n    {\r\n        this._mod = null;\r\n        this._node = node;\r\n        this._lastTime = 0;\r\n        this._matArr = [];\r\n        this._m = mat4.create();\r\n        this._invBindMatrix = mat4.create();\r\n        this.identity = true;\r\n    }\r\n\r\n    renderFinish(cgl)\r\n    {\r\n        cgl.popModelMatrix();\r\n        this._mod.unbind();\r\n    }\r\n\r\n    renderStart(cgl, time)\r\n    {\r\n        if (!this._mod)\r\n        {\r\n            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);\r\n\r\n            this._mod.addModule({\r\n                \"priority\": -2,\r\n                \"name\": \"MODULE_VERTEX_POSITION\",\r\n                \"srcHeadVert\": attachments.skin_head_vert || \"\",\r\n                \"srcBodyVert\": attachments.skin_vert || \"\"\r\n            });\r\n\r\n            this._mod.addUniformVert(\"m4[]\", \"MOD_boneMats\", []);// bohnenmatze\r\n            const tr = vec3.create();\r\n        }\r\n\r\n        const skinIdx = this._node.skin;\r\n        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;\r\n\r\n        // if (this._lastTime != time || !time)\r\n        {\r\n            // this._lastTime=inTime.get();\r\n            if (this._matArr.length != arrLength) this._matArr.length = arrLength;\r\n\r\n            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)\r\n            {\r\n                const i16 = i * 16;\r\n                const jointIdx = gltf.json.skins[skinIdx].joints[i];\r\n                const nodeJoint = gltf.nodes[jointIdx];\r\n\r\n                for (let j = 0; j < 16; j++)\r\n                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];\r\n\r\n                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);\r\n\r\n                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];\r\n            }\r\n\r\n            this._mod.setUniformValue(\"MOD_boneMats\", this._matArr);\r\n            this._lastTime = time;\r\n        }\r\n\r\n        this._mod.define(\"SKIN_NUM_BONES\", gltf.json.skins[skinIdx].joints.length);\r\n        this._mod.bind();\r\n\r\n        // draw mesh...\r\n        cgl.pushModelMatrix();\r\n        if (this.identity)mat4.identity(cgl.mMatrix);\r\n    }\r\n};\r\n","inc_targets_js":"const GltfTargetsRenderer = class\r\n{\r\n    constructor(mesh)\r\n    {\r\n        this.mesh = mesh;\r\n        this.tex = null;\r\n        this.numRowsPerTarget = 0;\r\n\r\n        this.makeTex(mesh.geom);\r\n    }\r\n\r\n    renderFinish(cgl)\r\n    {\r\n        if (!cgl.gl) return;\r\n        cgl.popModelMatrix();\r\n        this._mod.unbind();\r\n    }\r\n\r\n    renderStart(cgl, time)\r\n    {\r\n        if (!cgl.gl) return;\r\n        if (!this._mod)\r\n        {\r\n            this._mod = new CGL.ShaderModifier(cgl, \"gltftarget\");\r\n\r\n            this._mod.addModule({\r\n                \"priority\": -2,\r\n                \"name\": \"MODULE_VERTEX_POSITION\",\r\n                \"srcHeadVert\": attachments.targets_head_vert || \"\",\r\n                \"srcBodyVert\": attachments.targets_vert || \"\"\r\n            });\r\n\r\n            this._mod.addUniformVert(\"4f\", \"MOD_targetTexInfo\", [0, 0, 0, 0]);\r\n            this._mod.addUniformVert(\"t\", \"MOD_targetTex\", 1);\r\n            this._mod.addUniformVert(\"f[]\", \"MOD_weights\", []);\r\n\r\n            const tr = vec3.create();\r\n        }\r\n\r\n        this._mod.pushTexture(\"MOD_targetTex\", this.tex);\r\n        if (this.tex && this.mesh.weights)\r\n        {\r\n            this._mod.setUniformValue(\"MOD_weights\", this.mesh.weights);\r\n            this._mod.setUniformValue(\"MOD_targetTexInfo\", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);\r\n\r\n            this._mod.define(\"MOD_NUM_WEIGHTS\", Math.max(1, this.mesh.weights.length));\r\n        }\r\n        else\r\n        {\r\n            this._mod.define(\"MOD_NUM_WEIGHTS\", 1);\r\n        }\r\n        this._mod.bind();\r\n\r\n        // draw mesh...\r\n        cgl.pushModelMatrix();\r\n        if (this.identity)mat4.identity(cgl.mMatrix);\r\n    }\r\n\r\n    makeTex(geom)\r\n    {\r\n        if (!cgl.gl) return;\r\n\r\n        if (!geom.morphTargets || !geom.morphTargets.length) return;\r\n\r\n        let w = geom.morphTargets[0].vertices.length / 3;\r\n        let h = 0;\r\n        this.numRowsPerTarget = 0;\r\n\r\n        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;\r\n        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;\r\n        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;\r\n        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;\r\n\r\n        h = geom.morphTargets.length * this.numRowsPerTarget;\r\n\r\n        // console.log(\"this.numRowsPerTarget\", this.numRowsPerTarget);\r\n\r\n        const pixels = new Float32Array(w * h * 4);\r\n        let row = 0;\r\n\r\n        for (let i = 0; i < geom.morphTargets.length; i++)\r\n        {\r\n            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)\r\n                {\r\n                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];\r\n                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];\r\n                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];\r\n                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;\r\n                }\r\n                row++;\r\n            }\r\n\r\n            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)\r\n                {\r\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];\r\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];\r\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];\r\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\r\n                }\r\n\r\n                row++;\r\n            }\r\n\r\n            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)\r\n                {\r\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];\r\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];\r\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];\r\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\r\n                }\r\n                row++;\r\n            }\r\n\r\n            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)\r\n            {\r\n                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)\r\n                {\r\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];\r\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];\r\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];\r\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\r\n                }\r\n                row++;\r\n            }\r\n        }\r\n\r\n        this.tex = new CGL.Texture(cgl, { \"isFloatingPointTexture\": true, \"name\": \"targetsTexture\" });\r\n\r\n        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);\r\n\r\n        // console.log(\"morphTargets generated texture\", w, h);\r\n    }\r\n};\r\n","skin_vert":"int index=int(attrJoints.x);\r\nvec4 newPos = (MOD_boneMats[index] * pos) * attrWeights.x;\r\nvec3 newNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.x).xyz);\r\n\r\nindex=int(attrJoints.y);\r\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.y;\r\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.y).xyz)+newNorm;\r\n\r\nindex=int(attrJoints.z);\r\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.z;\r\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.z).xyz)+newNorm;\r\n\r\nindex=int(attrJoints.w);\r\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.w ;\r\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.w).xyz)+newNorm;\r\n\r\npos=newPos;\r\n\r\nnorm=normalize(newNorm.xyz);\r\n\r\n\r\n","skin_head_vert":"\r\nIN vec4 attrWeights;\r\nIN vec4 attrJoints;\r\nUNI mat4 MOD_boneMats[SKIN_NUM_BONES];\r\n","targets_vert":"\r\n\r\nfloat MOD_width=MOD_targetTexInfo.x;\r\nfloat MOD_height=MOD_targetTexInfo.y;\r\nfloat MOD_numTargets=MOD_targetTexInfo.w;\r\nfloat MOD_numLinesPerTarget=MOD_height/MOD_numTargets;\r\n\r\nfloat halfpix=(1.0/MOD_width)*0.5;\r\nfloat halfpixy=(1.0/MOD_height)*0.5;\r\n\r\nfloat x=(attrVertIndex)/MOD_width+halfpix;\r\n\r\nvec3 off=vec3(0.0);\r\n\r\nfor(float i=0.0;i<MOD_numTargets;i+=1.0)\r\n{\r\n    float y=1.0-((MOD_numLinesPerTarget*i)/MOD_height+halfpixy);\r\n    vec2 coord=vec2(x,y);\r\n    vec3 targetXYZ = texture(MOD_targetTex,coord).xyz;\r\n\r\n    off+=(targetXYZ*MOD_weights[int(i)]);\r\n\r\n\r\n\r\n    coord.y+=1.0/MOD_height; // normals are in next row\r\n    vec3 targetNormal = texture(MOD_targetTex,coord).xyz;\r\n    norm+=targetNormal*MOD_weights[int(i)];\r\n\r\n\r\n}\r\n\r\n// norm=normalize(norm);\r\npos.xyz+=off;\r\n","targets_head_vert":"\r\nUNI float MOD_weights[MOD_NUM_WEIGHTS];\r\n",};
const gltfCamera = class
{
    constructor(gltf, node)
    {
        this.node = node;
        this.name = node.name;
        // console.log(gltf);
        this.config = gltf.json.cameras[node.camera];

        this.pos = vec3.create();
        this.quat = quat.create();
        this.vCenter = vec3.create();
        this.vUp = vec3.create();
        this.vMat = mat4.create();
    }

    updateAnim(time)
    {
        if (this.node && this.node._animTrans)
        {
            vec3.set(this.pos,
                this.node._animTrans[0].getValue(time),
                this.node._animTrans[1].getValue(time),
                this.node._animTrans[2].getValue(time));

            quat.set(this.quat,
                this.node._animRot[0].getValue(time),
                this.node._animRot[1].getValue(time),
                this.node._animRot[2].getValue(time),
                this.node._animRot[3].getValue(time));
        }
    }

    start(time)
    {
        if (cgl.tempData.shadowPass) return;

        this.updateAnim(time);
        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];

        cgl.pushPMatrix();
        // mat4.perspective(
        //     cgl.pMatrix,
        //     this.config.perspective.yfov*0.5,
        //     asp,
        //     this.config.perspective.znear,
        //     this.config.perspective.zfar);

        cgl.pushViewMatrix();
        // mat4.identity(cgl.vMatrix);

        // if(this.node && this.node.parent)
        // {
        //     console.log(this.node.parent)
        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);
        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);
        // mat4.translate(cgl.vMatrix,cgl.vMatrix,
        // [
        //     -this.node.parent._node.translation[0],
        //     -this.node.parent._node.translation[1],
        //     -this.node.parent._node.translation[2]
        // ])
        // }

        // vec3.set(this.vUp, 0, 1, 0);
        // vec3.set(this.vCenter, 0, -1, 0);
        // // vec3.set(this.vCenter, 0, 1, 0);
        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);
        // vec3.normalize(this.vCenter, this.vCenter);
        // vec3.add(this.vCenter, this.vCenter, this.pos);

        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);

        let mv = mat4.create();
        mat4.invert(mv, this.node.modelMatAbs());

        // console.log(this.node.modelMatAbs());

        this.vMat = mv;

        mat4.identity(cgl.vMatrix);
        // console.log(mv);
        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);
    }

    end()
    {
        if (cgl.tempData.shadowPass) return;
        cgl.popPMatrix();
        cgl.popViewMatrix();
    }
};
const le = true; // little endian

const Gltf = class
{
    constructor()
    {
        this.json = {};
        this.accBuffers = [];
        this.meshes = [];
        this.nodes = [];
        this.shaders = [];
        this.timing = [];
        this.cams = [];
        this.startTime = performance.now();
        this.bounds = new CABLES.CG.BoundingBox();
        this.loaded = Date.now();
        this.accBuffersDelete = [];
    }

    getNode(n)
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            if (this.nodes[i].name == n) return this.nodes[i];
        }
    }

    unHideAll()
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            this.nodes[i].unHide();
        }
    }
};

function Utf8ArrayToStr(array)
{
    if (window.TextDecoder) return new TextDecoder("utf-8").decode(array);

    let out, i, len, c;
    let char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len)
    {
        c = array[i++];
        switch (c >> 4)
        {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
        case 12: case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
        case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
            break;
        }
    }

    return out;
}

function readChunk(dv, bArr, arrayBuffer, offset)
{
    const chunk = {};

    if (offset >= dv.byteLength)
    {
        // op.log("could not read chunk...");
        return;
    }
    chunk.size = dv.getUint32(offset + 0, le);

    // chunk.type = new TextDecoder("utf-8").decode(bArr.subarray(offset+4, offset+4+4));
    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));

    if (chunk.type == "BIN\0")
    {
        // console.log(chunk.size,arrayBuffer.length,offset);
        // try
        // {
        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);
        // }
        // catch(e)
        // {
        //     chunk.dataView = null;
        //     console.log(e);
        // }
    }
    else
    if (chunk.type == "JSON")
    {
        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));

        try
        {
            const obj = JSON.parse(json);
            chunk.data = obj;
            outGenerator.set(obj.asset.generator);
        }
        catch (e)
        {
        }
    }
    else
    {
        op.warn("unknown type", chunk.type);
    }

    return chunk;
}

function loadAnims(gltf)
{
    const uniqueAnimNames = {};
    maxTimeDict = {};

    for (let i = 0; i < gltf.json.animations.length; i++)
    {
        const an = gltf.json.animations[i];

        an.name = an.name || "unknown";

        for (let ia = 0; ia < an.channels.length; ia++)
        {
            const chan = an.channels[ia];

            const node = gltf.nodes[chan.target.node];
            const sampler = an.samplers[chan.sampler];

            const acc = gltf.json.accessors[sampler.input];
            const bufferIn = gltf.accBuffers[sampler.input];

            const accOut = gltf.json.accessors[sampler.output];
            const bufferOut = gltf.accBuffers[sampler.output];

            gltf.accBuffersDelete.push(sampler.output, sampler.input);

            if (bufferIn && bufferOut)
            {
                let numComps = 1;
                if (accOut.type === "VEC2")numComps = 2;
                else if (accOut.type === "VEC3")numComps = 3;
                else if (accOut.type === "VEC4")numComps = 4;
                else if (accOut.type === "SCALAR")
                {
                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...
                }
                else op.log("[] UNKNOWN accOut.type", accOut.type);

                const anims = [];

                uniqueAnimNames[an.name] = true;

                for (let k = 0; k < numComps; k++)
                {
                    const newAnim = new CABLES.Anim();
                    // newAnim.name=an.name;
                    anims.push(newAnim);
                }

                if (sampler.interpolation === "LINEAR") {}
                else if (sampler.interpolation === "STEP") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;
                else if (sampler.interpolation === "CUBICSPLINE") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;
                else op.warn("unknown interpolation", sampler.interpolation);

                // console.log(bufferOut)

                // if there is no keyframe for time 0 copy value of first keyframe at time 0
                if (bufferIn[0] !== 0.0)
                    for (let k = 0; k < numComps; k++)
                        anims[k].setValue(0, bufferOut[0 * numComps + k]);

                for (let j = 0; j < bufferIn.length; j++)
                {
                    // maxTime = Math.max(bufferIn[j], maxTime);
                    maxTimeDict[an.name] = bufferIn[j];

                    for (let k = 0; k < numComps; k++)
                    {
                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)
                        {
                            const idx = ((j * numComps) * 3 + k);

                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);
                            key.bezTangIn = bufferOut[idx];
                            key.bezTangOut = bufferOut[idx + (numComps * 2)];

                            // console.log(an.name,k,bufferOut[idx+1]);
                        }
                        else
                        {
                            // console.log(an.name,k,bufferOut[j * numComps + k]);
                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);
                        }
                    }
                }

                node.setAnim(chan.target.path, an.name, anims);
            }
            else
            {
                op.warn("loadAmins bufferIn undefined ", bufferIn === undefined);
                op.warn("loadAmins bufferOut undefined ", bufferOut === undefined);
                op.warn("loadAmins ", an.name, sampler, accOut);
                op.warn("loadAmins num accBuffers", gltf.accBuffers.length);
                op.warn("loadAmins num accessors", gltf.json.accessors.length);
            }
        }
    }

    gltf.uniqueAnimNames = uniqueAnimNames;

    outAnims.setRef(Object.keys(uniqueAnimNames));
}

function loadCams(gltf)
{
    if (!gltf || !gltf.json.cameras) return;

    gltf.cameras = gltf.cameras || [];

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].hasOwnProperty("camera"))
        {
            const cam = new gltfCamera(gltf, gltf.nodes[i]);
            gltf.cameras.push(cam);
        }
    }
}

function loadAfterDraco()
{
    if (!window.DracoDecoder)
    {
        setTimeout(() =>
        {
            loadAfterDraco();
        }, 100);
    }

    reloadSoon();
}

function parseGltf(arrayBuffer)
{
    const CHUNK_HEADER_SIZE = 8;

    let j = 0, i = 0;

    const gltf = new Gltf();
    gltf.timing.push(["Start parsing", Math.round((performance.now() - gltf.startTime))]);

    if (!arrayBuffer) return;
    const byteArray = new Uint8Array(arrayBuffer);
    let pos = 0;

    // var string = new TextDecoder("utf-8").decode(byteArray.subarray(pos, 4));
    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));
    pos += 4;
    if (string != "glTF") return;

    gltf.timing.push(["dataview", Math.round((performance.now() - gltf.startTime))]);

    const dv = new DataView(arrayBuffer);
    const version = dv.getUint32(pos, le);
    pos += 4;
    const size = dv.getUint32(pos, le);
    pos += 4;

    outVersion.set(version);

    const chunks = [];
    gltf.chunks = chunks;

    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));
    pos += chunks[0].size + CHUNK_HEADER_SIZE;
    gltf.json = chunks[0].data;

    gltf.cables = {
        "fileUrl": inFile.get(),
        "shortFileName": CABLES.basename(inFile.get())
    };

    outJson.setRef(gltf.json);
    outExtensions.setRef(gltf.json.extensionsUsed || []);

    let ch = readChunk(dv, byteArray, arrayBuffer, pos);
    while (ch)
    {
        chunks.push(ch);
        pos += ch.size + CHUNK_HEADER_SIZE;
        ch = readChunk(dv, byteArray, arrayBuffer, pos);
    }

    gltf.chunks = chunks;

    const views = chunks[0].data.bufferViews;
    const accessors = chunks[0].data.accessors;

    gltf.timing.push(["Parse buffers", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf("KHR_draco_mesh_compression") > -1)
    {
        if (!window.DracoDecoder)
        {
            op.setUiError("gltfdraco", "GLTF draco compression lib not found / add draco op to your patch!");

            loadAfterDraco();
            return gltf;
        }
        else
        {
            gltf.useDraco = true;
        }
    }

    op.setUiError("gltfdraco", null);
    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);

    if (views)
    {
        for (i = 0; i < accessors.length; i++)
        {
            const acc = accessors[i];
            const view = views[acc.bufferView];

            let numComps = 0;
            if (acc.type == "SCALAR")numComps = 1;
            else if (acc.type == "VEC2")numComps = 2;
            else if (acc.type == "VEC3")numComps = 3;
            else if (acc.type == "VEC4")numComps = 4;
            else if (acc.type == "MAT4")numComps = 16;
            else console.error("unknown accessor type", acc.type);

            //   const decoder = new decoderModule.Decoder();
            //   const decodedGeometry = decodeDracoData(data, decoder);
            //   // Encode mesh
            //   encodeMeshToFile(decodedGeometry, decoder);

            //   decoderModule.destroy(decoder);
            //   decoderModule.destroy(decodedGeometry);

            // 5120 (BYTE)	1
            // 5121 (UNSIGNED_BYTE)	1
            // 5122 (SHORT)	2

            if (chunks[1].dataView)
            {
                if (view)
                {
                    const num = acc.count * numComps;
                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);
                    let stride = view.byteStride || 0;
                    let dataBuff = null;

                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT
                    {
                        stride = stride || 4;

                        const isInt = acc.componentType == 5125;
                        if (isInt)dataBuff = new Uint32Array(num);
                        else dataBuff = new Float32Array(num);

                        dataBuff.cblStride = numComps;

                        for (j = 0; j < num; j++)
                        {
                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);
                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);

                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);
                            accPos += 4;
                        }
                    }
                    else if (acc.componentType == 5123) // UNSIGNED_SHORT
                    {
                        stride = stride || 2;

                        dataBuff = new Uint16Array(num);
                        dataBuff.cblStride = stride;

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);

                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);

                            accPos += 2;
                        }
                    }
                    else if (acc.componentType == 5121) // UNSIGNED_BYTE
                    {
                        stride = stride || 1;

                        dataBuff = new Uint8Array(num);
                        dataBuff.cblStride = stride;

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);

                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);

                            accPos += 1;
                        }
                    }

                    else
                    {
                        console.error("unknown component type", acc.componentType);
                    }

                    gltf.accBuffers.push(dataBuff);
                }
                else
                {
                    // console.log("has no dataview");
                }
            }
        }
    }

    gltf.timing.push(["Parse mesh groups", Math.round((performance.now() - gltf.startTime))]);

    gltf.json.meshes = gltf.json.meshes || [];

    if (gltf.json.meshes)
    {
        for (i = 0; i < gltf.json.meshes.length; i++)
        {
            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);
            gltf.meshes.push(mesh);
        }
    }

    gltf.timing.push(["Parse nodes", Math.round((performance.now() - gltf.startTime))]);

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        if (gltf.json.nodes[i].children)
            for (j = 0; j < gltf.json.nodes[i].children.length; j++)
            {
                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;
            }
    }

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        const node = new gltfNode(gltf.json.nodes[i], gltf);
        gltf.nodes.push(node);
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];

        if (!node.children) continue;
        for (let j = 0; j < node.children.length; j++)
        {
            gltf.nodes[node.children[j]].parent = node;
        }
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        gltf.nodes[i].initSkin();
    }

    needsMatUpdate = true;

    gltf.timing.push(["load anims", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.animations) loadAnims(gltf);

    gltf.timing.push(["load cameras", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.cameras) loadCams(gltf);

    gltf.timing.push(["finished", Math.round((performance.now() - gltf.startTime))]);
    return gltf;
}
let gltfMesh = class
{
    constructor(name, prim, gltf, finished)
    {
        this.POINTS = 0;
        this.LINES = 1;
        this.LINE_LOOP = 2;
        this.LINE_STRIP = 3;
        this.TRIANGLES = 4;
        this.TRIANGLE_STRIP = 5;
        this.TRIANGLE_FAN = 6;

        this.test = 0;
        this.name = name;
        this.submeshIndex = 0;
        this.material = prim.material;
        this.mesh = null;
        this.geom = new CGL.Geometry("gltf_" + this.name);
        this.geom.verticesIndices = [];
        this.bounds = null;
        this.primitive = 4;
        this.morphTargetsRenderMod = null;
        this.weights = prim.weights;

        if (prim.hasOwnProperty("mode")) this.primitive = prim.mode;

        if (prim.hasOwnProperty("indices")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];

        gltf.loadingMeshes = gltf.loadingMeshes || 0;
        gltf.loadingMeshes++;

        this.materialJson =
            this._matPbrMetalness =
            this._matPbrRoughness =
            this._matDiffuseColor = null;

        if (gltf.json.materials)
        {
            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];

            if (this.materialJson && this.materialJson.pbrMetallicRoughness)
            {
                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("baseColorFactor"))
                {
                    this._matDiffuseColor = [1, 1, 1, 1];
                }
                else
                {
                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;
                }

                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("metallicFactor"))
                {
                    this._matPbrMetalness = 1.0;
                }
                else
                {
                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;
                }

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("roughnessFactor"))
                {
                    this._matPbrRoughness = 1.0;
                }
                else
                {
                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;
                }
            }
        }

        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)
        {
            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];
            const num = view.byteLength;
            const dataBuff = new Int8Array(num);
            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);
            for (let j = 0; j < num; j++)
            {
                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);
                accPos++;
            }

            const dracoDecoder = window.DracoDecoder;
            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>
            {
                const geom = new CGL.Geometry("draco mesh " + name);

                for (let i = 0; i < geometry.attributes.length; i++)
                {
                    const attr = geometry.attributes[i];

                    if (attr.name === "position") geom.vertices = attr.array;
                    else if (attr.name === "normal") geom.vertexNormals = attr.array;
                    else if (attr.name === "uv") geom.texCoords = attr.array;
                    else if (attr.name === "color") geom.vertexColors = this.calcVertexColors(attr.array);
                    else if (attr.name === "joints") geom.setAttribute("attrJoints", Array.from(attr.array), 4);
                    else if (attr.name === "weights")
                    {
                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);

                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)
                        {
                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;
                            for (let j = 0; j < attr.itemSize; j++)
                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];
                        }
                        geom.setAttribute("attrWeights", arr4, 4);
                    }
                    else op.logWarn("unknown draco attrib", attr);
                }

                geometry.attributes = null;
                geom.verticesIndices = geometry.index.array;

                this.setGeom(geom);

                this.mesh = null;
                gltf.loadingMeshes--;
                gltf.timing.push(["draco decode", Math.round((performance.now() - gltf.startTime))]);

                if (finished)finished(this);
            }, (error) => { op.logError(error); });
        }
        else
        {
            gltf.loadingMeshes--;
            this.fillGeomAttribs(gltf, this.geom, prim.attributes);

            if (prim.targets)
            {
                for (let j = 0; j < prim.targets.length; j++)
                {
                    const tgeom = new CGL.Geometry("gltf_target_" + j);

                    // if (prim.hasOwnProperty("indices")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];

                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);

                    // { // calculate normals for final position of morphtarget for later...
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];
                    //     tgeom.calculateNormals();
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];
                    // }

                    this.geom.morphTargets.push(tgeom);
                }
            }
            if (finished)finished(this);
        }
    }

    _linearToSrgb(x)
    {
        if (x <= 0)
            return 0;
        else if (x >= 1)
            return 1;
        else if (x < 0.0031308)
            return x * 12.92;
        else
            return x ** (1 / 2.2) * 1.055 - 0.055;
    }

    calcVertexColors(arr, type)
    {
        let vertexColors = null;
        if (arr instanceof Float32Array)
        {
            let div = false;
            for (let i = 0; i < arr.length; i++)
            {
                if (arr[i] > 1)
                {
                    div = true;
                    continue;
                }
            }

            if (div)
                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;

            vertexColors = arr;
        }

        else if (arr instanceof Uint16Array)
        {
            const fb = new Float32Array(arr.length);
            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;

            vertexColors = fb;
        }
        else vertexColors = arr;

        for (let i = 0; i < vertexColors.length; i++)
        {
            vertexColors[i] = this._linearToSrgb(vertexColors[i]);
        }

        if (arr.cblStride == 3)
        {
            const nc = new Float32Array(vertexColors.length / 3 * 4);
            for (let i = 0; i < vertexColors.length / 3; i++)
            {
                nc[i * 4 + 0] = vertexColors[i * 3 + 0];
                nc[i * 4 + 1] = vertexColors[i * 3 + 1];
                nc[i * 4 + 2] = vertexColors[i * 3 + 2];
                nc[i * 4 + 3] = 1;
            }
            vertexColors = nc;
        }

        return vertexColors;
    }

    fillGeomAttribs(gltf, tgeom, attribs, setGeom)
    {
        if (attribs.hasOwnProperty("POSITION")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];
        if (attribs.hasOwnProperty("NORMAL")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];
        if (attribs.hasOwnProperty("TANGENT")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];

        // // console.log(gltf.accBuffers[attribs.COLOR_0])
        // console.log(gltf);

        if (attribs.hasOwnProperty("COLOR_0")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0], gltf.accBuffers[attribs.COLOR_0].type);
        if (attribs.hasOwnProperty("COLOR_1")) tgeom.setAttribute("attrVertColor1", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), gltf.accBuffers[attribs.COLOR_1].type);
        if (attribs.hasOwnProperty("COLOR_2")) tgeom.setAttribute("attrVertColor2", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), gltf.accBuffers[attribs.COLOR_2].type);
        if (attribs.hasOwnProperty("COLOR_3")) tgeom.setAttribute("attrVertColor3", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), gltf.accBuffers[attribs.COLOR_3].type);
        if (attribs.hasOwnProperty("COLOR_4")) tgeom.setAttribute("attrVertColor4", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), gltf.accBuffers[attribs.COLOR_4].type);

        if (attribs.hasOwnProperty("TEXCOORD_0")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];
        if (attribs.hasOwnProperty("TEXCOORD_1")) tgeom.setAttribute("attrTexCoord1", gltf.accBuffers[attribs.TEXCOORD_1], 2);
        if (attribs.hasOwnProperty("TEXCOORD_2")) tgeom.setAttribute("attrTexCoord2", gltf.accBuffers[attribs.TEXCOORD_2], 2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) tgeom.setAttribute("attrTexCoord3", gltf.accBuffers[attribs.TEXCOORD_3], 2);
        if (attribs.hasOwnProperty("TEXCOORD_4")) tgeom.setAttribute("attrTexCoord4", gltf.accBuffers[attribs.TEXCOORD_4], 2);

        if (attribs.hasOwnProperty("WEIGHTS_0"))
        {
            tgeom.setAttribute("attrWeights", gltf.accBuffers[attribs.WEIGHTS_0], 4);
        }
        if (attribs.hasOwnProperty("JOINTS_0"))
        {
            if (!gltf.accBuffers[attribs.JOINTS_0])console.log("no !gltf.accBuffers[attribs.JOINTS_0]");
            tgeom.setAttribute("attrJoints", gltf.accBuffers[attribs.JOINTS_0], 4);
        }

        if (attribs.hasOwnProperty("POSITION")) gltf.accBuffersDelete.push(attribs.POSITION);
        if (attribs.hasOwnProperty("NORMAL")) gltf.accBuffersDelete.push(attribs.NORMAL);
        if (attribs.hasOwnProperty("TEXCOORD_0")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);
        if (attribs.hasOwnProperty("TANGENT")) gltf.accBuffersDelete.push(attribs.TANGENT);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_1"))gltf.accBuffersDelete.push(attribs.COLOR_1);
        if (attribs.hasOwnProperty("COLOR_2"))gltf.accBuffersDelete.push(attribs.COLOR_2);
        if (attribs.hasOwnProperty("COLOR_3"))gltf.accBuffersDelete.push(attribs.COLOR_3);

        if (attribs.hasOwnProperty("TEXCOORD_1")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);
        if (attribs.hasOwnProperty("TEXCOORD_2")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);
        if (attribs.hasOwnProperty("TEXCOORD_4")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);

        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);
    }

    setGeom(geom)
    {
        if (inNormFormat.get() == "X-ZY")
        {
            for (let i = 0; i < geom.vertexNormals.length; i += 3)
            {
                let t = geom.vertexNormals[i + 2];
                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];
                geom.vertexNormals[i + 1] = -t;
            }
        }

        if (inVertFormat.get() == "XZ-Y")
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
            {
                let t = geom.vertices[i + 2];
                geom.vertices[i + 2] = -geom.vertices[i + 1];
                geom.vertices[i + 1] = t;
            }
        }

        if (this.primitive == this.TRIANGLES)
        {
            if (inCalcNormals.get() == "Force Smooth" || inCalcNormals.get() == false) geom.calculateNormals();
            else if (!geom.vertexNormals.length && inCalcNormals.get() == "Auto") geom.calculateNormals({ "smooth": false });

            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)
            {
                const bitan = vec3.create();
                const tan = vec3.create();

                const tangents = geom.tangents;
                geom.tangents = new Float32Array(tangents.length / 4 * 3);
                geom.biTangents = new Float32Array(tangents.length / 4 * 3);

                for (let i = 0; i < tangents.length; i += 4)
                {
                    const idx = i / 4 * 3;

                    vec3.cross(
                        bitan,
                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],
                        [tangents[i], tangents[i + 1], tangents[i + 2]]
                    );

                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);
                    vec3.normalize(bitan, bitan);

                    geom.biTangents[idx + 0] = bitan[0];
                    geom.biTangents[idx + 1] = bitan[1];
                    geom.biTangents[idx + 2] = bitan[2];

                    geom.tangents[idx + 0] = tangents[i + 0];
                    geom.tangents[idx + 1] = tangents[i + 1];
                    geom.tangents[idx + 2] = tangents[i + 2];
                }
            }

            if (geom.tangents.length === 0 || inCalcNormals.get() != "Never")
            {
                // console.log("[gltf ]no tangents... calculating tangents...");
                geom.calcTangentsBitangents();
            }
        }

        this.geom = geom;

        this.bounds = geom.getBounds();
    }

    render(cgl, ignoreMaterial, skinRenderer)
    {
        if (!this.mesh && this.geom && this.geom.verticesIndices)
        {
            let g = this.geom;
            if (this.geom.vertices.length / 3 > 64000 && this.geom.verticesIndices.length > 0)
            {
                g = this.geom.copy();
                g.unIndex(false, true);
            }

            let glprim;

            if (cgl.gl)
            {
                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;
                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;
                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;
                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;
                else
                {
                    op.logWarn("unknown primitive type", this);
                }
            }

            this.mesh = op.patch.cg.createMesh(g, { "glPrimitive": glprim });
        }

        if (this.mesh)
        {
            // update morphTargets
            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)
            {
                this.mesh.addVertexNumbers = true;
                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);
            }

            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];
            if (skinRenderer)useMat = false;

            if (useMat) cgl.pushShader(gltf.shaders[this.material]);

            const currentShader = cgl.getShader() || {};
            const uniDiff = currentShader.uniformColorDiffuse;

            const uniPbrMetalness = currentShader.uniformPbrMetalness;
            const uniPbrRoughness = currentShader.uniformPbrRoughness;

            // if (gltf.shaders[this.material] && !inUseMatProps.get())
            // {
            //     gltf.shaders[this.material]=null;
            // }

            if (!gltf.shaders[this.material] && inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor)
                {
                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];
                    uniDiff.setValue(this._matDiffuseColor);
                }

                if (uniPbrMetalness)
                    if (this._matPbrMetalness != null)
                    {
                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();
                        uniPbrMetalness.setValue(this._matPbrMetalness);
                    }
                    else
                        uniPbrMetalness.setValue(0);

                if (uniPbrRoughness)
                    if (this._matPbrRoughness != null)
                    {
                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();
                        uniPbrRoughness.setValue(this._matPbrRoughness);
                    }
                    else
                    {
                        uniPbrRoughness.setValue(0);
                    }
            }

            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);
            if (this.mesh)
            {
                this.mesh.render(cgl.getShader(), ignoreMaterial);
            }
            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);

            if (inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);
                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);
                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);
            }

            if (useMat) cgl.popShader();
        }
        else
        {
            console.log("no mesh......");
        }
    }
};
const gltfMeshGroup = class
{
    constructor(gltf, m)
    {
        this.bounds = new CABLES.CG.BoundingBox();
        this.meshes = [];

        m.name = m.name || ("unknown mesh " + CABLES.simpleId());

        this.name = m.name;
        const prims = m.primitives;

        for (let i = 0; i < prims.length; i++)
        {
            const mesh = new gltfMesh(this.name, prims[i], gltf,
                (mesh) =>
                {
                    mesh.extras = m.extras;
                    this.bounds.apply(mesh.bounds);
                });

            mesh.submeshIndex = i;
            this.meshes.push(mesh);
        }
    }

    render(cgl, ignoreMat, skinRenderer, _time, weights)
    {
        for (let i = 0; i < this.meshes.length; i++)
        {
            const useMat = gltf.shaders[this.meshes[i].material];

            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);
            if (skinRenderer)skinRenderer.renderStart(cgl, _time);
            if (weights) this.meshes[i].weights = weights;
            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);
            if (skinRenderer)skinRenderer.renderFinish(cgl);
            if (!ignoreMat && useMat) cgl.popShader();
        }
    }
};
const gltfNode = class
{
    constructor(node, gltf)
    {
        this.isChild = node.isChild || false;
        node.name = node.name || "unknown node " + CABLES.simpleId();
        this.name = node.name;
        if (node.hasOwnProperty("camera")) this.camera = node.camera;
        this.hidden = false;
        this.mat = mat4.create();
        this._animActions = {};
        this.animWeights = [];
        this._animMat = mat4.create();
        this._tempMat = mat4.create();
        this._tempQuat = quat.create();
        this._tempRotmat = mat4.create();
        this.mesh = null;
        this.children = [];
        this._node = node;
        this._gltf = gltf;
        this.absMat = mat4.create();
        this.addTranslate = null;
        this._tempAnimScale = null;
        this.addMulMat = null;
        this.updateMatrix();
        this.skinRenderer = null;
        this.copies = [];
    }

    get skin()
    {
        if (this._node.hasOwnProperty("skin")) return this._node.skin;
        else return -1;
    }

    copy()
    {
        this.isCopy = true;
        const n = new gltfNode(this._node, this._gltf);
        n.copyOf = this;

        n._animActions = this._animActions;
        n.children = this.children;
        if (this.skin) n.skinRenderer = new GltfSkin(this);

        this.updateMatrix();
        return n;
    }

    hasSkin()
    {
        if (this._node.hasOwnProperty("skin")) return this._gltf.json.skins[this._node.skin].name || "unknown";
        return false;
    }

    initSkin()
    {
        if (this.skin > -1)
        {
            this.skinRenderer = new GltfSkin(this);
        }
    }

    updateMatrix()
    {
        mat4.identity(this.mat);
        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);

        if (this._node.rotation)
        {
            const rotmat = mat4.create();
            this._rot = this._node.rotation;

            mat4.fromQuat(rotmat, this._node.rotation);
            mat4.mul(this.mat, this.mat, rotmat);
        }

        if (this._node.scale)
        {
            this._scale = this._node.scale;
            mat4.scale(this.mat, this.mat, this._scale);
        }

        if (this._node.hasOwnProperty("mesh"))
        {
            this.mesh = this._gltf.meshes[this._node.mesh];
            if (this.isCopy)
            {
            }
        }

        if (this._node.children)
        {
            for (let i = 0; i < this._node.children.length; i++)
            {
                this._gltf.json.nodes[i].isChild = true;
                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;
                this.children.push(this._node.children[i]);
            }
        }
    }

    unHide()
    {
        this.hidden = false;
        for (let i = 0; i < this.children.length; i++)
            if (this.children[i].unHide) this.children[i].unHide();
    }

    calcBounds(gltf, mat, bounds)
    {
        const localMat = mat4.create();

        if (mat) mat4.copy(localMat, mat);
        if (this.mat) mat4.mul(localMat, localMat, this.mat);

        if (this.mesh)
        {
            const bb = this.mesh.bounds.copy();
            bb.mulMat4(localMat);
            bounds.apply(bb);

            if (bounds.changed)
            {
                boundingPoints.push(
                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,
                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);
            }
        }

        for (let i = 0; i < this.children.length; i++)
        {
            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)
            {
                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);

                bounds.apply(b);
            }
        }

        if (bounds.changed) return bounds;
        else return null;
    }

    setAnimAction(name)
    {
        if (!name) return;

        this._currentAnimaction = name;

        if (name && !this._animActions[name]) return null;

        for (let path in this._animActions[name])
        {
            if (path == "translation") this._animTrans = this._animActions[name][path];
            else if (path == "rotation") this._animRot = this._animActions[name][path];
            else if (path == "scale") this._animScale = this._animActions[name][path];
            else if (path == "weights") this.animWeights = this._animActions[name][path];
        }
    }

    setAnim(path, name, anims)
    {
        if (!path || !name || !anims) return;

        this._animActions[name] = this._animActions[name] || {};

        // debugger;

        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;

        if (this._animActions[name][path]) op.log("[gltfNode] animation action path already exists", name, path, this._animActions[name][path]);

        this._animActions[name][path] = anims;

        if (path == "translation") this._animTrans = anims;
        else if (path == "rotation") this._animRot = anims;
        else if (path == "scale") this._animScale = anims;
        else if (path == "weights") this.animWeights = this._animActions[name][path];
    }

    modelMatLocal()
    {
        return this._animMat || this.mat;
    }

    modelMatAbs()
    {
        return this.absMat;
    }

    transform(cgl, _time)
    {
        if (!_time && _time != 0)_time = time;

        this._lastTimeTrans = _time;

        gltfTransforms++;

        if (!this._animTrans && !this._animRot && !this._animScale)
        {
            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);
            this._animMat = null;
        }
        else
        {
            this._animMat = this._animMat || mat4.create();
            mat4.identity(this._animMat);

            const playAnims = true;

            if (playAnims && this._animTrans)
            {
                mat4.translate(this._animMat, this._animMat, [
                    this._animTrans[0].getValue(_time),
                    this._animTrans[1].getValue(_time),
                    this._animTrans[2].getValue(_time)]);
            }
            else
            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);

            if (playAnims && this._animRot)
            {
                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)
                {
                    this._tempQuat[0] = this._animRot[0].getValue(_time);
                    this._tempQuat[1] = this._animRot[1].getValue(_time);
                    this._tempQuat[2] = this._animRot[2].getValue(_time);
                    this._tempQuat[3] = this._animRot[3].getValue(_time);
                }
                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)
                {
                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                }

                mat4.fromQuat(this._tempMat, this._tempQuat);
                mat4.mul(this._animMat, this._animMat, this._tempMat);
            }
            else if (this._rot)
            {
                mat4.fromQuat(this._tempRotmat, this._rot);
                mat4.mul(this._animMat, this._animMat, this._tempRotmat);
            }

            if (playAnims && this._animScale)
            {
                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];
                this._tempAnimScale[0] = this._animScale[0].getValue(_time);
                this._tempAnimScale[1] = this._animScale[1].getValue(_time);
                this._tempAnimScale[2] = this._animScale[2].getValue(_time);
                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);
            }
            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);

            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);
        }

        if (this.animWeights)
        {
            this.weights = this.weights || [];

            let str = "";
            for (let i = 0; i < this.animWeights.length; i++)
            {
                this.weights[i] = this.animWeights[i].getValue(_time);
                str += this.weights[i] + "/";
            }

            // this.mesh.weights=this.animWeights.get(_time);
        }

        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);

        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);

        mat4.copy(this.absMat, cgl.mMatrix);
    }

    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)
    {
        if (!dontTransform) cgl.pushModelMatrix();

        if (_time === undefined) _time = gltf.time;

        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);

        if (this.hidden && !drawHidden)
        {
        }
        else
        {
            if (this.skinRenderer)
            {
                this.skinRenderer.time = _time;
                if (!dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);
            }
            else
            {
                if (this.mesh && !dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);
            }
        }

        if (!ignoreChilds && !this.hidden)
            for (let i = 0; i < this.children.length; i++)
                if (gltf.nodes[this.children[i]])
                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);

        if (!dontTransform)cgl.popModelMatrix();
    }
};
let tab = null;

function closeTab()
{
    if (tab)gui.mainTabs.closeTab(tab.id);
    tab = null;
}

function formatVec(arr)
{
    const nums = [];
    for (let i = 0; i < arr.length; i++)
    {
        nums.push(Math.round(arr[i] * 1000) / 1000);
    }

    return nums.join(",");
}

function printNode(html, node, level)
{
    if (!gltf) return;

    html += "<tr class=\"row\">";

    let ident = "";
    let identSpace = "";

    for (let i = 1; i < level; i++)
    {
        identSpace += "&nbsp;&nbsp;&nbsp;";
        let identClass = "identBg";
        if (i == 1)identClass = "identBgLevel0";
        ident += "<td class=\"ident " + identClass + "\" ><div style=\"\"></div></td>";
    }
    let id = CABLES.uuid();
    html += ident;
    html += "<td colspan=\"" + (21 - level) + "\">";

    if (node.mesh && node.mesh.meshes.length)html += "<span class=\"icon icon-cube\"></span>&nbsp;";
    else html += "<span class=\"icon icon-box-select\"></span> &nbsp;";

    html += node.name + "</td><td></td>";

    if (node.mesh)
    {
        html += "<td>";
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (i > 0)html += ", ";
            html += node.mesh.meshes[i].name;
        }

        html += "</td>";

        html += "<td>";
        html += node.hasSkin() || "-";
        html += "</td>";

        html += "<td>";
        let countMats = 0;
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (countMats > 0)html += ", ";
            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty("material"))
            {
                if (gltf.json.materials[node.mesh.meshes[i].material])
                {
                    html += gltf.json.materials[node.mesh.meshes[i].material].name;
                    countMats++;
                }
            }
        }
        if (countMats == 0)html += "none";
        html += "</td>";
    }
    else
    {
        html += "<td>-</td><td>-</td><td>-</td>";
    }

    html += "<td>";

    if (node._node.translation || node._node.rotation || node._node.scale)
    {
        let info = "";

        if (node._node.translation)info += "Translate: `" + formatVec(node._node.translation) + "` || ";
        if (node._node.rotation)info += "Rotation: `" + formatVec(node._node.rotation) + "` || ";
        if (node._node.scale)info += "Scale: `" + formatVec(node._node.scale) + "` || ";

        html += "<span class=\"icon icon-gizmo info\" data-info=\"" + info + "\"></span> &nbsp;";
    }

    if (node._animRot || node._animScale || node._animTrans)
    {
        let info = "Animated: ";
        if (node._animRot) info += "Rot ";
        if (node._animScale) info += "Scale ";
        if (node._animTrans) info += "Trans ";

        html += "<span class=\"icon icon-clock info\" data-info=\"" + info + "\"></span>&nbsp;";
    }

    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += "-";

    html += "</td>";

    html += "<td>";
    let hideclass = "";
    if (node.hidden)hideclass = "node-hidden";

    // html+='';
    html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','transform')\" class=\"treebutton\">Transform</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','hierarchy')\" class=\"treebutton\">Hierarchy</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "')\" class=\"treebutton\">Node</a>";

    if (node.hasSkin())
        html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "',false,{skin:true});\" class=\"treebutton\">Skin</a>";

    html += "</td><td>";
    html += "&nbsp;<span class=\"icon iconhover icon-eye " + hideclass + "\" onclick=\"gui.corePatch().getOpById('" + op.id + "').toggleNodeVisibility('" + node.name + "');this.classList.toggle('node-hidden');\"></span>";
    html += "</td>";

    html += "</tr>";

    if (node.children)
    {
        for (let i = 0; i < node.children.length; i++)
            html = printNode(html, gltf.nodes[node.children[i]], level + 1);
    }

    return html;
}

function printMaterial(mat, idx)
{
    let html = "<tr>";
    html += " <td>" + idx + "</td>";
    html += " <td>" + mat.name + "</td>";

    html += " <td>";

    const info = JSON.stringify(mat, null, 4).replaceAll("\"", "").replaceAll("\n", "<br/>");

    html += "<span class=\"icon icon-info\" onclick=\"new CABLES.UI.ModalDialog({ 'html': '<pre>" + info + "</pre>', 'title': '" + mat.name + "' });\"></span>&nbsp;";

    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)
    {
        let rgb = "";
        rgb += "" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);

        html += "<div style=\"width:15px;height:15px;background-color:rgb(" + rgb + ");display:inline-block\">&nbsp;</a>";
    }
    html += " <td style=\"\">" + (gltf.shaders[idx] ? "-" : "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').assignMaterial('" + mat.name + "')\" class=\"treebutton\">Assign</a>") + "<td>";
    html += "<td>";

    html += "</tr>";
    return html;
}

function printInfo()
{
    if (!gltf) return;

    const startTime = performance.now();
    const sizes = {};
    let html = "<div style=\"overflow:scroll;width:100%;height:100%\">";

    html += "File: <a href=\"" + CABLES.platform.getCablesUrl() + "/asset/patches/?filename=" + inFile.get() + "\" target=\"_blank\">" + CABLES.basename(inFile.get()) + "</a><br/>";

    html += "Generator:" + gltf.json.asset.generator;

    let numNodes = 0;
    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;
    html += "<div id=\"groupNodes\">Nodes (" + numNodes + ")</div>";

    html += "<table id=\"sectionNodes\" class=\"table treetable\">";

    html += "<tr>";
    html += " <th colspan=\"21\">Name</th>";
    html += " <th>Mesh</th>";
    html += " <th>Skin</th>";
    html += " <th>Material</th>";
    html += " <th>Transform</th>";
    html += " <th>Expose</th>";
    html += " <th></th>";
    html += "</tr>";

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (!gltf.nodes[i].isChild)
            html = printNode(html, gltf.nodes[i], 1);
    }
    html += "</table>";

    // / //////////////////

    let numMaterials = 0;
    if (gltf.json.materials)numMaterials = gltf.json.materials.length;
    html += "<div id=\"groupMaterials\">Materials (" + numMaterials + ")</div>";

    if (!gltf.json.materials || gltf.json.materials.length == 0)
    {
    }
    else
    {
        html += "<table id=\"materialtable\"  class=\"table treetable\">";
        html += "<tr>";
        html += " <th>Index</th>";
        html += " <th>Name</th>";
        html += " <th>Color</th>";
        html += " <th>Function</th>";
        html += " <th></th>";
        html += "</tr>";
        for (let i = 0; i < gltf.json.materials.length; i++)
        {
            html += printMaterial(gltf.json.materials[i], i);
        }
        html += "</table>";
    }

    // / ///////////////////////

    html += "<div id=\"groupMeshes\">Meshes (" + gltf.json.meshes.length + ")</div>";

    html += "<table id=\"meshestable\"  class=\"table treetable\">";
    html += "<tr>";
    html += " <th>Name</th>";
    html += " <th>Node</th>";
    html += " <th>Material</th>";
    html += " <th>Vertices</th>";
    html += " <th>Attributes</th>";
    html += "</tr>";

    let sizeBufferViews = [];
    sizes.meshes = 0;
    sizes.meshTargets = 0;

    for (let i = 0; i < gltf.json.meshes.length; i++)
    {
        html += "<tr>";
        html += "<td>" + gltf.json.meshes[i].name + "</td>";

        html += "<td>";
        let count = 0;
        let nodename = "";
        if (gltf.json.nodes)
            for (let j = 0; j < gltf.json.nodes.length; j++)
            {
                if (gltf.json.nodes[j].mesh == i)
                {
                    count++;
                    if (count == 1)
                    {
                        nodename = gltf.json.nodes[j].name;
                    }
                }
            }
        if (count > 1) html += (count) + " nodes (" + nodename + " ...)";
        else html += nodename;
        html += "</td>";

        // -------

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].hasOwnProperty("material"))
            {
                if (gltf.json.materials[gltf.json.meshes[i]])
                {
                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + " ";
                }
            }
            else html += "None";
        }
        html += "</td>";

        html += "<td>";
        let numVerts = 0;
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)
            {
                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);
                numVerts += v;
                html += "" + v + "<br/>";
            }
            else html += "-<br/>";
        }

        if (gltf.json.meshes[i].primitives.length > 1)
            html += "=" + numVerts;
        html += "</td>";

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);
            html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeGeom('" + gltf.json.meshes[i].name + "'," + j + ")\" class=\"treebutton\">Geometry</a>";
            html += "<br/>";

            if (gltf.json.meshes[i].primitives[j].targets)
            {
                html += gltf.json.meshes[i].primitives[j].targets.length + " targets<br/>";

                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)
                    html += "Targetnames:<br/>" + gltf.json.meshes[i].extras.targetNames.join("<br/>");

                html += "<br/>";
            }
        }

        html += "</td>";
        html += "</tr>";

        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];
            if (accessor)
            {
                let bufView = accessor.bufferView;

                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let k in gltf.json.meshes[i].primitives[j].attributes)
            {
                const attr = gltf.json.meshes[i].primitives[j].attributes[k];
                const bufView2 = gltf.json.accessors[attr].bufferView;

                if (sizeBufferViews.indexOf(bufView2) == -1)
                {
                    sizeBufferViews.push(bufView2);
                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;
                }
            }

            if (gltf.json.meshes[i].primitives[j].targets)
                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)
                {
                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])
                    {
                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];
                        const accessor = gltf.json.accessors[accessorIdx];
                        const bufView2 = accessor.bufferView;
                        console.log("accessor", accessor);
                        if (sizeBufferViews.indexOf(bufView2) == -1)
                            if (gltf.json.bufferViews[bufView2])
                            {
                                sizeBufferViews.push(bufView2);
                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;
                            }
                    }
                }
        }
    }
    html += "</table>";

    // / //////////////////////////////////

    let numSamplers = 0;
    let numAnims = 0;
    let numKeyframes = 0;

    if (gltf.json.animations)
    {
        numAnims = gltf.json.animations.length;
        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            numSamplers += gltf.json.animations[i].samplers.length;
        }
    }

    html += "<div id=\"groupAnims\">Animations (" + numAnims + "/" + numSamplers + ")</div>";

    if (gltf.json.animations)
    {
        html += "<table id=\"sectionAnim\" class=\"table treetable\">";
        html += "<tr>";
        html += "  <th>Name</th>";
        html += "  <th>Target node</th>";
        html += "  <th>Path</th>";
        html += "  <th>Interpolation</th>";
        html += "  <th>Keys</th>";
        html += "</tr>";


        sizes.animations = 0;

        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)
            {
                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }

                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)
            {
                html += "<tr>";
                html += "  <td> Anim " + i + ": " + gltf.json.animations[i].name + "</td>";

                html += "  <td>" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + "</td>";
                html += "  <td>";
                html += gltf.json.animations[i].channels[j].target.path + " ";
                html += "  </td>";

                const smplidx = gltf.json.animations[i].channels[j].sampler;
                const smplr = gltf.json.animations[i].samplers[smplidx];

                html += "  <td>" + smplr.interpolation + "</td>";

                html += "  <td>" + gltf.json.accessors[smplr.output].count;
                numKeyframes += gltf.json.accessors[smplr.output].count;

                // html += "&nbsp;&nbsp;<a onclick=\"gui.corePatch().getOpById('" + op.id + "').showAnim('" + i + "','" + j + "')\" class=\"icon icon-search\"></a>";

                html += "</td>";

                html += "</tr>";
            }
        }

        html += "<tr>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td>" + numKeyframes + " total</td>";
        html += "</tr>";
        html += "</table>";
    }
    else
    {

    }

    // / ///////////////////

    let numImages = 0;
    if (gltf.json.images)numImages = gltf.json.images.length;
    html += "<div id=\"groupImages\">Images (" + numImages + ")</div>";

    if (gltf.json.images)
    {
        html += "<table id=\"sectionImages\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>func</th>";
        html += "</tr>";

        sizes.images = 0;

        for (let i = 0; i < gltf.json.images.length; i++)
        {
            if (gltf.json.images[i].hasOwnProperty("bufferView"))
            {
                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty("bufferView")) == -1)console.log("image bufferview already there?!");
                // else
                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;
            }
            else console.log("image has no bufferview?!");

            html += "<tr>";
            html += "<td>" + gltf.json.images[i].name + "</td>";
            html += "<td>" + gltf.json.images[i].mimeType + "</td>";
            html += "<td>";

            let name = gltf.json.images[i].name;
            if (name === undefined)name = gltf.json.images[i].bufferView;

            html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeTexture('" + name + "')\" class=\"treebutton\">Expose</a>";
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ///////////////////////

    let numCameras = 0;
    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;
    html += "<div id=\"groupCameras\">Cameras (" + numCameras + ")</div>";

    if (gltf.json.cameras)
    {
        html += "<table id=\"sectionCameras\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>info</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.cameras.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.cameras[i].name + "</td>";
            html += "<td>" + gltf.json.cameras[i].type + "</td>";
            html += "<td>";

            if (gltf.json.cameras[i].perspective)
            {
                html += "yfov: " + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;
                html += ", ";
                html += "zfar: " + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;
                html += ", ";
                html += "znear: " + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;
            }
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    let numSkins = 0;
    if (gltf.json.skins)numSkins = gltf.json.skins.length;
    html += "<div id=\"groupSkins\">Skins (" + numSkins + ")</div>";

    if (gltf.json.skins)
    {
        // html += "<h3>Skins (" + gltf.json.skins.length + ")</h3>";
        html += "<table id=\"sectionSkins\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th></th>";
        html += "  <th>total joints</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.skins.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.skins[i].name + "</td>";
            html += "<td>" + "</td>";
            html += "<td>" + gltf.json.skins[i].joints.length + "</td>";
            html += "<td>";
            html += "</td>";
            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    if (gltf.timing)
    {
        html += "<div id=\"groupTiming\">Debug Loading Timing </div>";

        html += "<table id=\"sectionTiming\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>task</th>";
        html += "  <th>time used</th>";
        html += "</tr>";

        let lt = 0;
        for (let i = 0; i < gltf.timing.length - 1; i++)
        {
            html += "<tr>";
            html += "  <td>" + gltf.timing[i][0] + "</td>";
            html += "  <td>" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + " ms</td>";
            html += "</tr>";
            // lt = gltf.timing[i][1];
        }
        html += "</table>";
    }

    // / //////////////////////////

    let sizeBin = 0;
    if (gltf.json.buffers)
        sizeBin = gltf.json.buffers[0].byteLength;

    html += "<div id=\"groupBinary\">File Size Allocation (" + Math.round(sizeBin / 1024) + "k )</div>";

    html += "<table id=\"sectionBinary\" class=\"table treetable\">";
    html += "<tr>";
    html += "  <th>name</th>";
    html += "  <th>size</th>";
    html += "  <th>%</th>";
    html += "</tr>";
    let sizeUnknown = sizeBin;
    for (let i in sizes)
    {
        // html+=i+':'+Math.round(sizes[i]/1024);
        html += "<tr>";
        html += "<td>" + i + "</td>";
        html += "<td>" + readableSize(sizes[i]) + " </td>";
        html += "<td>" + Math.round(sizes[i] / sizeBin * 100) + "% </td>";
        html += "<tr>";
        sizeUnknown -= sizes[i];
    }

    if (sizeUnknown != 0)
    {
        html += "<tr>";
        html += "<td>unknown</td>";
        html += "<td>" + readableSize(sizeUnknown) + " </td>";
        html += "<td>" + Math.round(sizeUnknown / sizeBin * 100) + "% </td>";
        html += "<tr>";
    }

    html += "</table>";
    html += "</div>";

    tab = new CABLES.UI.Tab("GLTF " + CABLES.basename(inFile.get()), { "icon": "cube", "infotext": "tab_gltf", "padding": true, "singleton": true });
    gui.mainTabs.addTab(tab, true);

    tab.addEventListener("close", closeTab);
    tab.html(html);

    CABLES.UI.Collapsable.setup(ele.byId("groupNodes"), ele.byId("sectionNodes"), false);
    CABLES.UI.Collapsable.setup(ele.byId("groupMaterials"), ele.byId("materialtable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupAnims"), ele.byId("sectionAnim"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupMeshes"), ele.byId("meshestable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupCameras"), ele.byId("sectionCameras"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupImages"), ele.byId("sectionImages"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupSkins"), ele.byId("sectionSkins"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupBinary"), ele.byId("sectionBinary"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupTiming"), ele.byId("sectionTiming"), true);

    gui.maintabPanel.show(true);
}

function readableSize(n)
{
    if (n > 1024) return Math.round(n / 1024) + " kb";
    if (n > 1024 * 500) return Math.round(n / 1024) + " mb";
    else return n + " bytes";
}
const GltfSkin = class
{
    constructor(node)
    {
        this._mod = null;
        this._node = node;
        this._lastTime = 0;
        this._matArr = [];
        this._m = mat4.create();
        this._invBindMatrix = mat4.create();
        this.identity = true;
    }

    renderFinish(cgl)
    {
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.skin_head_vert || "",
                "srcBodyVert": attachments.skin_vert || ""
            });

            this._mod.addUniformVert("m4[]", "MOD_boneMats", []);// bohnenmatze
            const tr = vec3.create();
        }

        const skinIdx = this._node.skin;
        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;

        // if (this._lastTime != time || !time)
        {
            // this._lastTime=inTime.get();
            if (this._matArr.length != arrLength) this._matArr.length = arrLength;

            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)
            {
                const i16 = i * 16;
                const jointIdx = gltf.json.skins[skinIdx].joints[i];
                const nodeJoint = gltf.nodes[jointIdx];

                for (let j = 0; j < 16; j++)
                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];

                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);

                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];
            }

            this._mod.setUniformValue("MOD_boneMats", this._matArr);
            this._lastTime = time;
        }

        this._mod.define("SKIN_NUM_BONES", gltf.json.skins[skinIdx].joints.length);
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }
};
const GltfTargetsRenderer = class
{
    constructor(mesh)
    {
        this.mesh = mesh;
        this.tex = null;
        this.numRowsPerTarget = 0;

        this.makeTex(mesh.geom);
    }

    renderFinish(cgl)
    {
        if (!cgl.gl) return;
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!cgl.gl) return;
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, "gltftarget");

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.targets_head_vert || "",
                "srcBodyVert": attachments.targets_vert || ""
            });

            this._mod.addUniformVert("4f", "MOD_targetTexInfo", [0, 0, 0, 0]);
            this._mod.addUniformVert("t", "MOD_targetTex", 1);
            this._mod.addUniformVert("f[]", "MOD_weights", []);

            const tr = vec3.create();
        }

        this._mod.pushTexture("MOD_targetTex", this.tex);
        if (this.tex && this.mesh.weights)
        {
            this._mod.setUniformValue("MOD_weights", this.mesh.weights);
            this._mod.setUniformValue("MOD_targetTexInfo", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);

            this._mod.define("MOD_NUM_WEIGHTS", Math.max(1, this.mesh.weights.length));
        }
        else
        {
            this._mod.define("MOD_NUM_WEIGHTS", 1);
        }
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }

    makeTex(geom)
    {
        if (!cgl.gl) return;

        if (!geom.morphTargets || !geom.morphTargets.length) return;

        let w = geom.morphTargets[0].vertices.length / 3;
        let h = 0;
        this.numRowsPerTarget = 0;

        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;

        h = geom.morphTargets.length * this.numRowsPerTarget;

        // console.log("this.numRowsPerTarget", this.numRowsPerTarget);

        const pixels = new Float32Array(w * h * 4);
        let row = 0;

        for (let i = 0; i < geom.morphTargets.length; i++)
        {
            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)
                {
                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];
                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];
                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];
                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }

                row++;
            }

            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }
        }

        this.tex = new CGL.Texture(cgl, { "isFloatingPointTexture": true, "name": "targetsTexture" });

        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);

        // console.log("morphTargets generated texture", w, h);
    }
};
// https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/2.0/figures/gltfOverview-2.0.0b.png

const
    inExec = op.inTrigger("Render"),
    dataPort = op.inString("data"),
    inFile = op.inUrl("glb File", [".glb"]),
    inRender = op.inBool("Draw", true),
    inCamera = op.inDropDown("Camera", ["None"], "None"),
    inAnimation = op.inString("Animation", ""),
    inShow = op.inTriggerButton("Show Structure"),
    inCenter = op.inSwitch("Center", ["None", "XYZ", "XZ"], "XYZ"),
    inRescale = op.inBool("Rescale", true),
    inRescaleSize = op.inFloat("Rescale Size", 2.5),

    inTime = op.inFloat("Time"),
    inTimeLine = op.inBool("Sync to timeline", false),
    inLoop = op.inBool("Loop", true),

    inNormFormat = op.inSwitch("Normals Format", ["XYZ", "X-ZY"], "XYZ"),
    inVertFormat = op.inSwitch("Vertices Format", ["XYZ", "XZ-Y"], "XYZ"),
    inCalcNormals = op.inSwitch("Calc Normals", ["Auto", "Force Smooth", "Never"], "Auto"),

    inMaterials = op.inObject("Materials"),
    inHideNodes = op.inArray("Hide Nodes"),
    inUseMatProps = op.inBool("Use Material Properties", false),

    inActive = op.inBool("Active", true),

    nextBefore = op.outTrigger("Render Before"),
    next = op.outTrigger("Next"),
    outGenerator = op.outString("Generator"),

    outVersion = op.outNumber("GLTF Version"),
    outExtensions = op.outArray("GLTF Extensions Used"),
    outAnimLength = op.outNumber("Anim Length", 0),
    outAnimTime = op.outNumber("Anim Time", 0),
    outJson = op.outObject("Json"),
    outAnims = op.outArray("Anims"),
    outPoints = op.outArray("BoundingPoints"),
    outBounds = op.outObject("Bounds"),
    outAnimFinished = op.outTrigger("Finished"),
    outLoading = op.outBool("Loading");

op.setPortGroup("Timing", [inTime, inTimeLine, inLoop]);

let cgl = op.patch.cg || op.patch.cgl;
let gltfLoadingErrorMesh = null;
let gltfLoadingError = false;
let gltfTransforms = 0;
let finishedLoading = false;
let cam = null;
let boundingPoints = [];
let gltf = null;
let maxTime = 0;
let maxTimeDict = {};
let time = 0;
let needsMatUpdate = true;
let timedLoader = null;
let loadingId = null;
let data = null;
const scale = vec3.create();
let lastTime = 0;
let doCenter = false;
const boundsCenter = vec3.create();

inFile.onChange =
    inVertFormat.onChange =
    inCalcNormals.onChange =
    inNormFormat.onChange = reloadSoon;

inShow.onTriggered = printInfo;
dataPort.onChange = loadData;
inHideNodes.onChange = hideNodesFromData;
inAnimation.onChange = updateAnimation;
inCenter.onChange = updateCenter;
op.toWorkPortsNeedToBeLinked(inExec);

dataPort.setUiAttribs({ "hideParam": true, "hidePort": true });
op.setPortGroup("Transform", [inRescale, inRescaleSize, inCenter]);

function updateCamera()
{
    const arr = ["None"];
    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].camera >= 0)
            {
                arr.push(gltf.nodes[i].name);
            }
        }
    }
    inCamera.uiAttribs.values = arr;
}

function updateCenter()
{
    doCenter = inCenter.get() != "None";

    if (gltf && gltf.bounds)
    {
        boundsCenter.set(gltf.bounds.center);
        boundsCenter[0] = -boundsCenter[0];
        boundsCenter[1] = -boundsCenter[1];
        boundsCenter[2] = -boundsCenter[2];
        if (inCenter.get() == "XZ") boundsCenter[1] = -gltf.bounds.minY;
    }
}

inRescale.onChange = function ()
{
    inRescaleSize.setUiAttribs({ "greyout": !inRescale.get() });
};

inMaterials.onChange = function ()
{
    needsMatUpdate = true;
};

op.onDelete = function ()
{
    closeTab();
};

inTimeLine.onChange = function ()
{
    inTime.setUiAttribs({ "greyout": inTimeLine.get() });
};

inCamera.onChange = setCam;

function setCam()
{
    cam = null;
    if (!gltf) return;

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].name == inCamera.get())cam = new gltfCamera(gltf, gltf.nodes[i]);
    }
}

inExec.onTriggered = function ()
{
    cgl = op.patch.cg || op.patch.cgl;

    if (!finishedLoading) return;
    if (!inActive.get()) return;

    if (gltfLoadingError)
    {
        if (!gltfLoadingErrorMesh) gltfLoadingErrorMesh = CGL.MESHES.getSimpleCube(cgl, "ErrorCube");
        gltfLoadingErrorMesh.render(cgl.getShader());
    }

    gltfTransforms = 0;
    if (inTimeLine.get()) time = op.patch.timer.getTime();
    else time = Math.max(0, inTime.get());

    if (inLoop.get())
    {
        time %= maxTime;
        if (time < lastTime) outAnimFinished.trigger();
    }
    else
    {
        if (maxTime > 0 && time >= maxTime) outAnimFinished.trigger();
    }

    lastTime = time;

    cgl.pushModelMatrix();

    outAnimTime.set(time || 0);

    if (finishedLoading && gltf && gltf.bounds)
    {
        if (inRescale.get())
        {
            let sc = inRescaleSize.get() / gltf.bounds.maxAxis;
            gltf.scale = sc;
            vec3.set(scale, sc, sc, sc);
            mat4.scale(cgl.mMatrix, cgl.mMatrix, scale);
        }
        if (doCenter)
        {
            mat4.translate(cgl.mMatrix, cgl.mMatrix, boundsCenter);
        }
    }

    let oldScene = cgl.tempData.currentScene || null;
    cgl.tempData.currentScene = gltf;

    nextBefore.trigger();

    if (finishedLoading)
    {
        if (needsMatUpdate) updateMaterials();

        if (cam) cam.start(time);

        if (gltf)
        {
            gltf.time = time;

            if (gltf.bounds && cgl.shouldDrawHelpers(op))
            {
                if (op.isCurrentUiOp()) cgl.pushShader(CABLES.GL_MARKER.getSelectedShader(cgl));
                else cgl.pushShader(CABLES.GL_MARKER.getDefaultShader(cgl));

                gltf.bounds.render(cgl, null, op);
                cgl.popShader();
            }

            if (inRender.get())
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl);
            }
            else
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl, false, true);
            }
        }
    }

    next.trigger();
    cgl.tempData.currentScene = oldScene;

    cgl.popModelMatrix();

    if (cam)cam.end();
};

function finishLoading()
{
    if (!gltf)
    {
        finishedLoading = true;
        gltfLoadingError = true;
        cgl.patch.loading.finished(loadingId);

        op.setUiError("nogltf", "GLTF File not found");
        return;
    }

    op.setUiError("nogltf", null);

    if (gltf.loadingMeshes > 0)
    {
        // op.log("waiting for async meshes...");
        setTimeout(finishLoading, 100);
        return;
    }

    gltf.timing.push(["finishLoading()", Math.round((performance.now() - gltf.startTime))]);

    needsMatUpdate = true;
    // op.refreshParams();
    // outAnimLength.set(maxTime);

    gltf.bounds = new CABLES.CG.BoundingBox();
    // gltf.bounds.applyPos(0, 0, 0);

    // if (!gltf)op.setUiError("urlerror", "could not load gltf:<br/>\"" + inFile.get() + "\"", 2);
    // else op.setUiError("urlerror", null);

    gltf.timing.push(["start calc bounds", Math.round((performance.now() - gltf.startTime))]);

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];
        node.updateMatrix();
        if (!node.isChild) node.calcBounds(gltf, null, gltf.bounds);
    }

    if (gltf.bounds)outBounds.setRef(gltf.bounds);

    gltf.timing.push(["calced bounds", Math.round((performance.now() - gltf.startTime))]);

    hideNodesFromData();

    gltf.timing.push(["hideNodesFromData", Math.round((performance.now() - gltf.startTime))]);

    if (tab)printInfo();

    gltf.timing.push(["printinfo", Math.round((performance.now() - gltf.startTime))]);

    updateCamera();
    setCam();
    outPoints.set(boundingPoints);

    if (gltf)
    {
        if (inFile.get() && !inFile.get().startsWith("data:"))
        {
            op.setUiAttrib({ "extendTitle": CABLES.basename(inFile.get()) });
        }

        gltf.loaded = Date.now();
    }

    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (!gltf.nodes[i].isChild)
            {
                gltf.nodes[i].render(cgl, false, true, true, false, true, 0);
            }
        }

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            const node = gltf.nodes[i];
            node.children = CABLES.uniqueArray(node.children); // stupid fix why are there too many children ?!
        }
    }

    updateCenter();
    updateAnimation();

    outLoading.set(false);

    cgl.patch.loading.finished(loadingId);
    loadingId = null;

    // if (gltf.chunks.length > 1) gltf.chunks[1] = null;
    // if (gltf.chunks.length > 2) gltf.chunks[2] = null;

    // op.setUiAttrib({ "accBuffersDelete": CABLES.basename(inFile.get()) });

    if (gltf.accBuffersDelete)
    {
        for (let i = 0; i < gltf.accBuffersDelete.length; i++)
        {
            gltf.accBuffers[gltf.accBuffersDelete[i]] = null;
        }
    }

    // setTimeout(() =>
    // {
    //     for (let i = 0; i < gltf.nodes.length; i++)
    //     {
    //     // console.log(gltf.nodes[i]);

    //         if (gltf.nodes[i].mesh && gltf.nodes[i].mesh.meshes)
    //         {
    //         // console.log(gltf.nodes[i].mesh.meshes.length);
    //             for (let j = 0; j < gltf.nodes[i].mesh.meshes.length; j++)
    //             {
    //                 console.log(gltf.nodes[i].mesh.meshes[j]);

    //                 // for (let k = 0; k < gltf.nodes[i].mesh.meshes.length; k++)
    //                 {
    //                     if (gltf.nodes[i].mesh.meshes[j].mesh)
    //                     {
    //                         gltf.nodes[i].mesh.meshes[j].mesh.freeMem();
    //                         // console.log(gltf.nodes[i].mesh.meshes[j].mesh);
    //                         // for (let l = 0; l < gltf.nodes[i].mesh.meshes[j].mesh._attributes.length; l++)
    //                         //     gltf.nodes[i].mesh.meshes[j].mesh._attributes[l] = null;
    //                     }
    //                 }

    //                 gltf.nodes[i].mesh.meshes[j].geom.clear();
    //                 console.log("clear!");
    //             }
    //         }
    //     }
    // }, 1000);

    if (!(gltf.json.images && gltf.json.images.length)) gltf.chunks = null;

    finishedLoading = true;
}

function loadBin(addCacheBuster)
{
    if (!inActive.get()) return;

    if (!loadingId)loadingId = cgl.patch.loading.start("gltfScene", inFile.get(), op);

    let fileToLoad = inFile.get();

    if (!fileToLoad || fileToLoad == "null") return;
    let url = op.patch.getFilePath(String(inFile.get()));
    if (!url) return;
    if (inFile.get() && !inFile.get().startsWith("data:"))
    {
        if (addCacheBuster === true)url += "?rnd=" + CABLES.generateUUID();
    }
    needsMatUpdate = true;
    outLoading.set(true);
    fetch(url)
        .then((res) => { return res.arrayBuffer(); })
        .then((arrayBuffer) =>
        {
            if (inFile.get() != fileToLoad)
            {
                cgl.patch.loading.finished(loadingId);
                loadingId = null;
                return;
            }

            boundingPoints = [];
            maxTime = 0;
            gltf = parseGltf(arrayBuffer);
            arrayBuffer = null;
            finishLoading();
        }).catch((e) =>
        {
            if (loadingId)cgl.patch.loading.finished(loadingId);
            loadingId = null;
            finishLoading();

            op.logError("gltf fetch error", e);
        });
    closeTab();

    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    cgl.patch.loading.addAssetLoadingTask(() =>
    {

    });
}

// op.onFileChanged = function (fn)
// {
//     gltf.accBuffersDelete[i];
//     if (fn && fn.length > 3 && inFile.get() && inFile.get().indexOf(fn) > -1) reloadSoon(true);
// };

op.onFileChanged = function (fn)
{
    if (inFile.get() && inFile.get().indexOf(fn) > -1)
    {
        reloadSoon(true);
    }
};

inActive.onChange = () =>
{
    if (inActive.get()) reloadSoon();

    if (!inActive.get())
    {
        gltf = null;
    }
};

function reloadSoon(nocache)
{
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function () { loadBin(nocache); }, 30);
}

function updateMaterials()
{
    if (!gltf) return;

    gltf.shaders = {};

    if (inMaterials.links.length == 1 && inMaterials.get())
    {
        // just accept a associative object with s
        needsMatUpdate = true;
        const op = inMaterials.links[0].portOut.op;

        const portShader = op.getPort("Shader");
        const portName = op.getPort("Material Name");

        if (!portShader && !portName)
        {
            const inMats = inMaterials.get();
            for (let matname in inMats)
            {
                if (inMats[matname] && gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                    {
                        if (gltf.json.materials[i].name == matname)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = inMats[matname];
                        }
                    }
            }
        }
    }

    if (inMaterials.get())
    {
        for (let j = 0; j < inMaterials.links.length; j++)
        {
            const op = inMaterials.links[j].portOut.op;
            const portShader = op.getPort("Shader");
            const portName = op.getPort("Material Name");

            if (portShader && portName && portShader.get())
            {
                const name = portName.get();
                if (gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                        if (gltf.json.materials[i].name == name)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = portShader.get();
                        }
            }
        }
    }
    needsMatUpdate = false;
    if (tab)printInfo();
}

function hideNodesFromArray()
{
    const hideArr = inHideNodes.get();

    if (!gltf || !data || !data.hiddenNodes) return;
    if (!hideArr)
    {
        return;
    }

    for (let i = 0; i < hideArr.length; i++)
    {
        const n = gltf.getNode(hideArr[i]);
        if (n)n.hidden = true;
    }
}

function hideNodesFromData()
{
    if (!data)loadData();
    if (!gltf) return;

    gltf.unHideAll();

    if (data && data.hiddenNodes)
    {
        for (const i in data.hiddenNodes)
        {
            const n = gltf.getNode(i);
            if (n) n.hidden = true;
            else op.verbose("node to be hidden not found", i, n);
        }
    }
    hideNodesFromArray();
}

function loadData()
{
    data = dataPort.get();

    if (!data || data === "")data = {};
    else data = JSON.parse(data);

    if (gltf)hideNodesFromData();

    return data;
}

function saveData()
{
    dataPort.set(JSON.stringify(data));
}

function updateAnimation()
{
    if (gltf && gltf.nodes)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            gltf.nodes[i].setAnimAction(inAnimation.get());
        }
        const animName = inAnimation.get() || Object.keys(maxTimeDict)[0];
        maxTime = maxTimeDict[animName] || -1;
        outAnimLength.set(maxTime);
    }
}

function findParents(nodes, childNodeIndex)
{
    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].children.indexOf(childNodeIndex) >= 0)
        {
            nodes.push(gltf.nodes[i]);
            if (gltf.nodes[i].isChild) findParents(nodes, i);
        }
    }
}

op.exposeTexture = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfTexture");
    newop.getPort("Name").set(name);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Render");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

op.exposeGeom = function (name, idx)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfGeometry");
    newop.getPort("Name").set(name);
    newop.getPort("Submesh").set(idx);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Update");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

function setNewOpPosition(newOp, num)
{
    num = num || 1;

    newOp.setUiAttrib(
        {
            "subPatch": op.uiAttribs.subPatch,
            "translate": { "x": op.uiAttribs.translate.x, "y": op.uiAttribs.translate.y + num * CABLES.GLUI.glUiConfig.newOpDistanceY }
        });
}

op.exposeNode = function (name, type, options)
{
    let tree = type == "hierarchy";
    if (tree)
    {
        let ops = [];

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].name == name)
            {
                let arrHierarchy = [];
                const node = gltf.nodes[i];
                findParents(arrHierarchy, i);

                arrHierarchy = arrHierarchy.reverse();
                arrHierarchy.push(node, node);

                let prevPort = next.name;
                let prevOp = op;
                for (let j = 0; j < arrHierarchy.length; j++)
                {
                    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfNode_v2");
                    newop.getPort("Node Name").set(arrHierarchy[j].name);
                    op.patch.link(prevOp, prevPort, newop, "Render");
                    setNewOpPosition(newop, j);

                    if (j == arrHierarchy.length - 1)
                    {
                        newop.getPort("Transformation").set(false);
                    }
                    else
                    {
                        newop.getPort("Draw Mesh").set(false);
                        newop.getPort("Draw Childs").set(false);
                    }

                    prevPort = "Next";
                    prevOp = newop;
                    ops.push(newop);
                    gui.patchView.testCollision(newop);
                }
            }
        }

        for (let i = 0; i < ops.length; i++)
        {
            ops[i].selectChilds();
        }
    }
    else
    {
        let newopname = "Ops.Gl.GLTF.GltfNode_v2";
        if (options && options.skin)newopname = "Ops.Gl.GLTF.GltfSkin";
        if (type == "transform")newopname = "Ops.Gl.GLTF.GltfNodeTransform_v2";

        gui.serverOps.loadOpLibs(newopname, () =>
        {
            let newop = gui.corePatch().addOp(newopname);

            newop.getPort("Node Name").set(name);
            setNewOpPosition(newop);
            op.patch.link(op, next.name, newop, "Render");
            gui.patchView.testCollision(newop);
            gui.patchView.centerSelectOp(newop.id, true);
        });
    }
    gui.closeModal();
};

op.assignMaterial = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfSetMaterial");
    newop.getPort("Material Name").set(name);
    op.patch.link(op, inMaterials.name, newop, "Material");
    setNewOpPosition(newop);
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);

    gui.closeModal();
};

op.toggleNodeVisibility = function (name)
{
    const n = gltf.getNode(name);
    n.hidden = !n.hidden;
    data.hiddenNodes = data.hiddenNodes || {};

    if (n)
        if (n.hidden)data.hiddenNodes[name] = true;
        else delete data.hiddenNodes[name];

    saveData();
};

}
};

CABLES.OPS["c9cbb226-46f7-4ca6-8dab-a9d0bdca4331"]={f:Ops.Gl.GLTF.GltfScene_v4,objName:"Ops.Gl.GLTF.GltfScene_v4"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfGeometry
// 
// **************************************************************

Ops.Gl.GLTF.GltfGeometry= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Update"),
    inNodeName = op.inString("Name", "default"),
    inSubmesh = op.inInt("Submesh", 0),
    next = op.outTrigger("Next"),
    outGeom = op.outObject("Geometry", null, "geometry"),
    outFound = op.outBoolNum("Found");

const cgl = op.patch.cgl;
let mesh = null;
let currentSceneLoaded = null;

inSubmesh.onChange =
inNodeName.onChange = function ()
{
    outGeom.set(null);
    mesh = null;
    outFound.set(false);
    op.setUiAttrib({ "extendTitle": inNodeName.get() + "." + inSubmesh.get() });
};

exec.onTriggered = () =>
{
    if (!cgl.tempData.currentScene) return;
    if (currentSceneLoaded != cgl.tempData.currentScene.loaded) mesh = null;

    if (!mesh)
    {
        if (!cgl.tempData || !cgl.tempData.currentScene || !cgl.tempData.currentScene.nodes || !cgl.tempData.currentScene.loaded)
        {
            return;
        }
        outFound.set(false);
        outGeom.set(null);
        const name = inNodeName.get();

        currentSceneLoaded = cgl.tempData.currentScene.loaded;

        for (let i = 0; i < cgl.tempData.currentScene.meshes.length; i++)
        {
            if (cgl.tempData.currentScene.meshes[i].name == name)
            {
                mesh = cgl.tempData.currentScene.meshes[i];

                const idx = Math.abs(inSubmesh.get());
                if (mesh.meshes[idx] && mesh.meshes[idx].geom)
                {
                    outFound.set(true);
                    outGeom.set(mesh.meshes[idx].geom);
                }
            }
        }
    }

    next.trigger();
};

}
};

CABLES.OPS["2e59da07-455a-457c-99d8-1c23a1ddeea2"]={f:Ops.Gl.GLTF.GltfGeometry,objName:"Ops.Gl.GLTF.GltfGeometry"};




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
// Ops.Html.CSS.CSSFilter
// 
// **************************************************************

Ops.Html.CSS.CSSFilter= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const inEle = op.inObject("Element");
const inMethod = op.inValueSelect("method", ["-", "blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]);
const inVal = op.inValue("Value");

let suffix = "";
let prefix = "";

inVal.onChange = setValue;
inEle.onChange = setValue;

let oldEle = null;

function getCSSFilterString()
{
    return inMethod.get() + "(" + inVal.get() + suffix + ")";
}

inEle.onLinkChanged = function ()
{
    // remove style when deleting op
    if (inEle.isLinked()) return;

    const ele = oldEle;// inEle.get();

    if (ele && ele.style)
    {
        let filter = ele.style.filter;
        var str = "";

        if (filter && filter.length > 0)
        {
            var str = "";
            let parts = filter.split(" ");
            for (let i = 0; i < parts.length; i++)
            {
                if (parts[i].indexOf(inMethod.get()) == 0)
                    parts[i] = "";
            }

            str = parts.join(" ");
        }
        ele.style.filter = str;
    }
};

function setValue()
{
    const ele = inEle.get();
    let str = "";

    if (ele && ele.style)
    {
        if (ele != oldEle) oldEle = ele;
        let foundMyFilter = false;
        let filter = ele.style.filter;

        if (filter && filter.length > 0)
        {
            let parts = filter.split(" ");
            for (let i = 0; i < parts.length; i++)
            {
                if (parts[i].indexOf(inMethod.get()) == 0)
                {
                    foundMyFilter = true;
                    parts[i] = getCSSFilterString();
                }
            }

            str = parts.join(" ");
        }

        if (!foundMyFilter)
            str += " " + getCSSFilterString();

        ele.style.filter = str;
    }
}

inMethod.onChange = function ()
{
    let m = inMethod.get();

    prefix = inMethod.get() + ":";

    if (m == "blur") suffix = "px";
    if (m == "brightness") suffix = "";
    if (m == "contrast") suffix = "%";
    if (m == "grayscale") suffix = "%";
    if (m == "hue-rotate") suffix = "deg";
    if (m == "invert") suffix = "%";
    if (m == "opacity") suffix = "%";
    if (m == "saturate") suffix = "";
    if (m == "sepia") suffix = "%";
    setValue();
};

}
};

CABLES.OPS["33befabf-7eef-45f6-869f-30e0e4f44739"]={f:Ops.Html.CSS.CSSFilter,objName:"Ops.Html.CSS.CSSFilter"};




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




// **************************************************************
// 
// Ops.Number.SwitchNumber
// 
// **************************************************************

Ops.Number.SwitchNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const idx = op.inValueInt("Index");
const valuePorts = [];
const result = op.outNumber("Result");

idx.onChange = update;

for (let i = 0; i < 16; i++)
{
    let p = op.inValueFloat("Value " + i);
    valuePorts.push(p);
    p.onChange = update;
}

function update()
{
    const i = idx.get();
    if (i >= 0 && valuePorts[i])
    {
        result.set(valuePorts[i].get());
    }
}

}
};

CABLES.OPS["fbb89f72-f2e3-4d34-ad01-7d884a1bcdc0"]={f:Ops.Number.SwitchNumber,objName:"Ops.Number.SwitchNumber"};




// **************************************************************
// 
// Ops.Ui.Area
// 
// **************************************************************

Ops.Ui.Area= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTitle = op.inString("Title", ""),
    inDelete = op.inTriggerButton("Delete");

inTitle.setUiAttribs({ "hidePort": true });

op.setUiAttrib({ "hasArea": true });

op.init =
    inTitle.onChange =
    op.onLoaded = update;

update();

function update()
{
    if (CABLES.UI)
    {
        gui.savedState.setUnSaved("areaOp", op.getSubPatch());
        op.uiAttr(
            {
                "comment_title": inTitle.get() || " "
            });

        op.name = inTitle.get();
    }
}

inDelete.onTriggered = () =>
{
    op.patch.deleteOp(op.id);
};

}
};

CABLES.OPS["38f79614-b0de-4960-8da5-2827e7f43415"]={f:Ops.Ui.Area,objName:"Ops.Ui.Area"};




// **************************************************************
// 
// Ops.Array.PointArray.FillPointArrayDuplicates
// 
// **************************************************************

Ops.Array.PointArray.FillPointArrayDuplicates= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array"),
    inNumPoints = op.inValueInt("Num Elements", 1000),
    inCalc = op.inTriggerButton("Calculate"),
    outArr = op.outArray("Result");
op.toWorkPortsNeedToBeLinked(inArr);

let arr = [];

inCalc.onTriggered = function ()
{
    let num = inNumPoints.get();

    arr.length = num * 3;

    let oldArr = inArr.get();
    if (!oldArr)
    {
        outArr.set(null);
        return;
    }
    let numOld = oldArr.length;

    let i = 0;
    for (i = 0; i < numOld; i++)
    {
        arr[i] = oldArr[i];
    }

    Math.randomSeed = 5711;

    while (i < (num - 1) * 3)
    {
        let ind = Math.floor(Math.seededRandom() * (numOld / 3)) * 3;

        arr[i + 0] = oldArr[ind + 0];
        arr[i + 1] = oldArr[ind + 1];
        arr[i + 2] = oldArr[ind + 2];
        i += 3;
    }

    outArr.setRef(arr);
};

}
};

CABLES.OPS["dae7416d-b130-487e-bdd3-ca5a18278d47"]={f:Ops.Array.PointArray.FillPointArrayDuplicates,objName:"Ops.Array.PointArray.FillPointArrayDuplicates"};




// **************************************************************
// 
// Ops.Ui.VizNumber
// 
// **************************************************************

Ops.Ui.VizNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const inNum = op.inFloat("Number", 0);
const outNum = op.outNumber("Result");

op.setUiAttrib({ "widthOnlyGrow": true });

inNum.onChange = update;

update();

function update()
{
    let n = inNum.get();
    // if (op.patch.isEditorMode())
    // {
    //     let str = "";
    //     if (n === null)str = "null";
    //     else if (isNaN(n))str = "NaN";
    //     else if (n === undefined)str = "undefined";
    //     else
    //     {
    //         str = "" + Math.round(n * 10000) / 10000;

    //         if (str[0] != "-")str = " " + str;
    //     }

    //     op.setUiAttribs({ "extendTitle": str });
    // }
    op.setUiAttribs({ "extendTitle": inNum.getValueForDisplay() });

    outNum.set(n);
}

}
};

CABLES.OPS["2b60d12d-2884-4ad0-bda4-0caeb6882f5c"]={f:Ops.Ui.VizNumber,objName:"Ops.Ui.VizNumber"};




// **************************************************************
// 
// Ops.Array.ReduceArray3_v3
// 
// **************************************************************

Ops.Array.ReduceArray3_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    arr = op.inArray("Array"),
    inMeth = op.inSwitch("Remove", ["Xth Item", "Random", "Duplicates"], "Xth Item"),
    num = op.inValueInt("Every xth Item", 2),
    inThresh = op.inFloatSlider("Threshold", 0.5),
    inSeed = op.inFloat("Seed", 1),
    outArr = op.outArray("Result Array");

num.onChange =
    inThresh.onChange =
    inSeed.onChange =
    arr.onChange = update;

let updateMethod = updateXth;

inMeth.onChange = () =>
{
    if (inMeth.get() == "Xth Item")updateMethod = updateXth;
    if (inMeth.get() == "Random")updateMethod = updateRandom;
    if (inMeth.get() == "Duplicates")updateMethod = updateDupes;

    update();
};

function update()
{
    const theArray = arr.get();
    if (!theArray) return;

    let newArray = updateMethod(theArray);

    outArr.setRef(newArray);
}

function updateDupes(theArray)
{
    const noDupesArr = [];

    for (let i = 0; i < theArray.length; i += 3)
    {
        let found = false;
        for (let j = 0; j < noDupesArr.length; j += 3)
        {
            if (
                theArray[i] == noDupesArr[j] &&
                theArray[i + 1] == noDupesArr[j + 1] &&
                theArray[i + 2] == noDupesArr[j + 2]
            )
            {
                found = true;
                break;
            }
        }

        if (!found)
        {
            noDupesArr.push(theArray[i], theArray[i + 1], theArray[i + 2]);
        }
    }
    return noDupesArr;
}

function updateRandom(theArray)
{
    Math.randomSeed = inSeed.get();

    const newArray = [];

    const thresh = inThresh.get();

    for (let i = 0; i < theArray.length; i += 3)
    {
        if (Math.seededRandom() > thresh)
            newArray.push(theArray[i + 0], theArray[i + 1], theArray[i + 2]);
    }

    return newArray;
}

function updateXth(theArray)
{
    const step = Math.max(0, Math.floor(num.get()));
    const newArray = [];

    if (step === 0)
    {
        outArr.setRef([]);
        return;
    }

    for (let i = 0; i < theArray.length; i += step * 3)
        newArray.push(theArray[i + 0], theArray[i + 1], theArray[i + 2]);

    return newArray;
}

}
};

CABLES.OPS["5ba30060-2e42-4441-8b15-49279dc3bb67"]={f:Ops.Array.ReduceArray3_v3,objName:"Ops.Array.ReduceArray3_v3"};




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
// Ops.Array.StringToArray_v2
// 
// **************************************************************

Ops.Array.StringToArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const text = op.inStringEditor("text", "1,2,3"),
    separator = op.inString("separator", ","),
    toNumber = op.inValueBool("Numbers", true),
    trim = op.inValueBool("Trim", true),
    splitNewLines = op.inBool("Split Lines", false),
    arr = op.outArray("array"),
    parsed = op.outTrigger("Parsed"),
    len = op.outNumber("length");

text.setUiAttribs({ "ignoreBigPort": true });

text.onChange = separator.onChange = toNumber.onChange = trim.onChange = parse;

splitNewLines.onChange = () =>
{
    separator.setUiAttribs({ "greyout": splitNewLines.get() });
    parse();
};

parse();

function parse()
{
    if (!text.get())
    {
        arr.set(null);
        arr.set([]);
        len.set(0);
        return;
    }

    let textInput = text.get();
    if (trim.get() && textInput)
    {
        textInput = textInput.replace(/^\s+|\s+$/g, "");
        textInput = textInput.trim();
    }

    let r;
    let sep = separator.get();
    if (separator.get() === "\\n") sep = "\n";
    if (splitNewLines.get()) r = textInput.split("\n");
    else r = textInput.split(sep);

    if (r[r.length - 1] === "") r.length -= 1;

    len.set(r.length);

    if (trim.get())
    {
        for (let i = 0; i < r.length; i++)
        {
            r[i] = r[i].replace(/^\s+|\s+$/g, "");
            r[i] = r[i].trim();
        }
    }

    op.setUiError("notnum", null);
    if (toNumber.get())
    {
        let hasStrings = false;
        for (let i = 0; i < r.length; i++)
        {
            r[i] = Number(r[i]);
            if (!CABLES.isNumeric(r[i]))
            {
                hasStrings = true;
            }
        }
        if (hasStrings)
        {
            op.setUiError("notnum", "Parse Error / Not all values numerical!", 1);
        }
    }

    arr.setRef(r);
    parsed.trigger();
}

}
};

CABLES.OPS["c974de41-4ce4-4432-b94d-724741109c71"]={f:Ops.Array.StringToArray_v2,objName:"Ops.Array.StringToArray_v2"};




// **************************************************************
// 
// Ops.Gl.Textures.SwitchTextures_v2
// 
// **************************************************************

Ops.Gl.Textures.SwitchTextures_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("exec"),
    num = this.inValueInt("num"),
    defaultTransparent = op.inValueBool("Default Texture Transparent", true),
    next = op.outTrigger("Next"),
    textureOut = this.outTexture("texture");

const cgl = op.patch.cgl;
const texturePorts = [];
let index = 0;
let lastIndex = -1;
let tempTexture = CGL.Texture.getEmptyTexture(cgl);

op.toWorkPortsNeedToBeLinked(exec);
exec.onTriggered = function () { updateTexture(); next.trigger(); };

defaultTransparent.onChange = function ()
{
    if (defaultTransparent.get()) tempTexture = CGL.Texture.getEmptyTexture(cgl);
    else tempTexture = CGL.Texture.getTempTexture(cgl);

    updateTexture(true);
};

for (let i = 0; i < 16; i++)
{
    const tex = op.inTexture("texture" + i);
    texturePorts.push(tex);
    tex.onChange = forceUpdateTexture;
}

function forceUpdateTexture()
{
    updateTexture(true);
}

function updateTexture(force)
{
    index = parseInt(num.get(), 10);
    if (!force)
    {
        if (index == lastIndex) return;
        if (index != index) return;
    }
    if (
	    isNaN(index) ||
	    index < 0 ||
	    index > texturePorts.length - 1
    )
        index = 0;

    if (texturePorts[index].get()) textureOut.setRef(texturePorts[index].get());
    else textureOut.setRef(tempTexture);

    lastIndex = index;
}

}
};

CABLES.OPS["a82ae429-ac07-4760-882b-595a857c7ae0"]={f:Ops.Gl.Textures.SwitchTextures_v2,objName:"Ops.Gl.Textures.SwitchTextures_v2"};




// **************************************************************
// 
// Ops.Boolean.IfTrueThen_v2
// 
// **************************************************************

Ops.Boolean.IfTrueThen_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    boolean = op.inValueBool("boolean", false),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else");

exe.onTriggered = exec;

// let b = false;

// boolean.onChange = () =>
// {
//     b = boolean.get();
// };

function exec()
{
    if (boolean.get()) triggerThen.trigger();
    else triggerElse.trigger();
}

}
};

CABLES.OPS["9549e2ed-a544-4d33-a672-05c7854ccf5d"]={f:Ops.Boolean.IfTrueThen_v2,objName:"Ops.Boolean.IfTrueThen_v2"};




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
// Ops.Html.CSS.CssClass
// 
// **************************************************************

Ops.Html.CSS.CssClass= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inStringEditor("CSS", ""),
    inClassName = op.inString("Class Name", "");

op.toWorkPortsNeedsString(inClassName);

const styleEle = op.patch.getDocument().createElement("style");
styleEle.type = "text/css";
styleEle.id = "style" + CABLES.uuid();
styleEle.textContent = attachments.css_spinner;
styleEle.classList.add("cablesEle");

const head = op.patch.getDocument().getElementsByTagName("body")[0];
head.appendChild(styleEle);

inClassName.onChange =
    inStr.onChange = () =>
    {
        const content = inStr.get() || "";
        styleEle.textContent = "." + inClassName.get() + " {\n" + content + "\n}\n";
    };

op.onDelete = () =>
{
    styleEle.remove();
};

}
};

CABLES.OPS["d0eebfda-eba0-4702-9bcb-a3d31ea05ab4"]={f:Ops.Html.CSS.CssClass,objName:"Ops.Html.CSS.CssClass"};




// **************************************************************
// 
// Ops.Boolean.ToggleBool_v2
// 
// **************************************************************

Ops.Boolean.ToggleBool_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("trigger"),
    reset = op.inTriggerButton("reset"),
    inDefault = op.inBool("Default", false),
    next = op.outTrigger("Next"),
    outBool = op.outBoolNum("result");

let theBool = false;

op.onLoadedValueSet = () =>
{
    theBool = inDefault.get();
    outBool.set(inDefault.get());
    next.trigger();
};

trigger.onTriggered = function ()
{
    theBool = !theBool;
    outBool.set(theBool);
    next.trigger();
};

reset.onTriggered = function ()
{
    theBool = inDefault.get();
    outBool.set(theBool);
    next.trigger();
};

}
};

CABLES.OPS["4313d9bb-96b6-43bc-9190-6068cfb2593c"]={f:Ops.Boolean.ToggleBool_v2,objName:"Ops.Boolean.ToggleBool_v2"};




// **************************************************************
// 
// Ops.Boolean.IfFalseThen
// 
// **************************************************************

Ops.Boolean.IfFalseThen= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("Exe"),
    boolean = op.inValueBool("Boolean", false),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else");

boolean.onChange = execBool;
exe.onTriggered = exec;

function execBool()
{
    if (exe.isLinked()) return;
    exec();
}

function exec()
{
    if (!boolean.get()) triggerThen.trigger();
    else triggerElse.trigger();
}

}
};

CABLES.OPS["91cf65f1-94ac-423f-a536-af71eed08440"]={f:Ops.Boolean.IfFalseThen,objName:"Ops.Boolean.IfFalseThen"};




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
// Ops.String.StringEditor
// 
// **************************************************************

Ops.String.StringEditor= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inStringEditor("value", ""),
    syntax = op.inValueSelect("Syntax", ["text", "glsl", "css", "html", "xml", "json", "javascript", "inline-css", "sql"], "text"),
    result = op.outString("Result");

syntax.onChange = updateSyntax;

function updateSyntax()
{
    let s = syntax.get();
    if (s == "javascript")s = "js";
    v.setUiAttribs({ "editorSyntax": s });
}

v.onChange = function ()
{
    result.set(v.get());
};

}
};

CABLES.OPS["6468b7c1-f63e-4db4-b809-4b203d27ead3"]={f:Ops.String.StringEditor,objName:"Ops.String.StringEditor"};




// **************************************************************
// 
// Ops.Html.Elements.InputElement
// 
// **************************************************************

Ops.Html.Elements.InputElement= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inElType = op.inSwitch("Element", ["Input", "Textarea"], "Input"),
    inType = op.inSwitch("Type", ["Text", "Number", "Password", "Date"], "Text"),
    inText = op.inString("Default Value", ""),
    inPlaceHolder = op.inString("Placeholder", "Type here..."),
    inId = op.inString("Id"),
    inClass = op.inString("Class"),
    inStyle = op.inStringEditor("Style", "color:#ccc;\nbackground-color:#222;\nborder:none;\npadding:4px;\n", "inline-css"),

    inAutoComplete = op.inBool("Autocomplete", false),
    inMaxLength = op.inInt("Max Length", 0),

    inInteractive = op.inValueBool("Interactive", false),
    inVisible = op.inValueBool("Visible", true),

    inFocus = op.inTriggerButton("Focus"),
    inBlur = op.inTriggerButton("Blur"),
    inClear = op.inTriggerButton("Clear"),
    inSelect = op.inTriggerButton("Select"),

    outElement = op.outObject("DOM Element", null, "element"),
    outString = op.outString("Value"),
    outHover = op.outBoolNum("Hover");

let listenerElement = null;
let prevDisplay = "block";
let div = null;

const canvas = op.patch.cgl.canvas.parentElement;

createElement();

inSelect.onTriggered = () =>
{
    div.select();
};

inClear.onTriggered = () =>
{
    div.value = "";
};

inFocus.onTriggered = () =>
{
    div.focus();
};

inBlur.onTriggered = () =>
{
    div.blur();
};

inElType.onChange = () =>
{
    createElement();
    updateStyle();
};

inMaxLength.onChange =
    inType.onChange =
    inAutoComplete.onChange =
    inClass.onChange = updateClass;

inPlaceHolder.onChange = inText.onChange = updateText;

inStyle.onChange = updateStyle;
inInteractive.onChange = updateInteractive;
inVisible.onChange = updateVisibility;

updateText();
updateStyle();
warning();
updateInteractive();

op.onDelete = removeElement;

outElement.onLinkChanged = updateStyle;

function createElement()
{
    removeElement();
    div = document.createElement(inElType.get().toLowerCase());

    div.addEventListener("input", () =>
    {
        outString.set(div.value);
    });

    div.dataset.op = op.id;
    div.classList.add("cablesEle");

    if (inId.get()) div.id = inId.get();

    canvas.appendChild(div);
    outElement.set(div);
}

function removeElement()
{
    if (div) removeClasses();
    if (div && div.parentNode) div.parentNode.removeChild(div);
    div = null;
}

function setCSSVisible(visible)
{
    if (!visible)
    {
        div.style.visibility = "hidden";
        prevDisplay = div.style.display || "block";
        div.style.display = "none";
    }
    else
    {
        if (prevDisplay == "none") prevDisplay = "block";
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

    div.setAttribute("placeholder", inPlaceHolder.get());
    div.value = str;

    outString.set(str);

    outElement.setRef(div);
}

function updateStyle()
{
    if (!div) return;

    div.setAttribute("style", inStyle.get());
    updateVisibility();
    outElement.set(null);
    outElement.set(div);

    if (!div.parentElement)
    {
        canvas.appendChild(div);
    }

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
    div.setAttribute("tabindex", 0);
    div.setAttribute("maxlength", inMaxLength.get() || null);
    div.setAttribute("type", inType.get().toLowerCase());

    if (inAutoComplete.get()) div.setAttribute("autocomplete", "on");
    else div.setAttribute("autocomplete", "off");

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

function updateInteractive()
{
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

CABLES.OPS["b7e1635c-b5c0-43e1-be03-2f137e6e61ea"]={f:Ops.Html.Elements.InputElement,objName:"Ops.Html.Elements.InputElement"};




// **************************************************************
// 
// Ops.Html.Elements.Element_v2
// 
// **************************************************************

Ops.Html.Elements.Element_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inText = op.inString("Text", "Element"),
    inPos = op.inSwitch("Position", ["Absolute", "Static", "Relative", "Fixed"], "Absolute"),
    inInteractive = op.inSwitch("Interactive", ["True", "False", "No Pointer Events"], "True"),

    inSetSize = op.inValueBool("Set Size", false),
    inWidth = op.inFloat("Width", 100),
    inHeight = op.inFloat("Height", 100),
    inSizeUnit = op.inSwitch("Size  Units", ["px", "%", "vwh"], "px"),

    inOverflow = op.inSwitch("Overflow", ["Visible", "Hidden", "Scroll", "Auto"], "Hidden"),

    inStyle = op.inStringEditor("Inline Style", "", "inline-css"),
    inClass = op.inString("CSS Class"),
    inBlacklist = op.inString("Disable CSS Props"),

    inDisplay = op.inDropDown("Display", ["None", "Block", "Inline", "inline-block", "flex", "inline-flex", "grid", "inline-grid", "flow-root"], "Block"),
    inTag = op.inString("Tag Name", "div"),
    inOpacity = op.inFloatSlider("Opacity", 1),
    inPropagation = op.inValueBool("Propagate Click-Events", true),

    outElement = op.outObject("DOM Element", null, "element"),
    outHover = op.outBoolNum("Hovering"),
    outClicked = op.outTrigger("Clicked");

op.setPortGroup("Area", [inWidth, inHeight, inSetSize, inSizeUnit, inOverflow]);
op.setPortGroup("CSS", [inClass, inStyle, inBlacklist]);

let listenerElement = null;
let oldStr = null;
let prevDisplay = "block";
let div = null;

const parent = op.patch.cgl.canvas.parentElement;

createElement();

inClass.onChange = updateClass;
inText.onChange = updateText;

inTag.onChange = () =>
{
    removeElement();
    createElement();
    updateClass();
    updateText();
};

inSetSize.onChange =
    updateUiAndStyle;

inDisplay.onChange =
    inOpacity.onChange =
    inPos.onChange =
    inWidth.onChange =
    inHeight.onChange =
    inOverflow.onChange =
    inSizeUnit.onChange =
    inHeight.onChange =
    inStyle.onChange = updateStyle;

inInteractive.onChange = updateInteractive;

updateText();
updateStyle();
warning();
updateInteractive();

let oldClassesStr = "";
op.onDelete = removeElement;

outElement.onLinkChanged = updateStyle;

inInteractive.onLinkChanged =
outClicked.onLinkChanged = () =>
{
    op.setUiError("interactiveProblem", null);
    if (outClicked.isLinked() && !isInteractive())
        op.setUiError("interactiveProblem", "Interactive should be activated when linking clicked port");
};

function updateUiAndStyle()
{
    inWidth.setUiAttribs({ "greyout": !inSetSize.get() });
    inHeight.setUiAttribs({ "greyout": !inSetSize.get() });
    updateStyle();
}

function createElement()
{
    div = op.patch.getDocument().createElement(inTag.get() || "div");
    div.dataset.op = op.id;
    div.classList.add("cablesEle");

    parent.appendChild(div);
    outElement.setRef(div);
    updateStyle();
}

function removeElement()
{
    if (div) removeClasses();
    if (div && div.parentNode) div.parentNode.removeChild(div);
    oldStr = null;
    div = null;
}

function updateText()
{
    let str = inText.get();

    if (oldStr === str) return;
    oldStr = str;

    if (div.innerHTML != str) div.innerHTML = str;
}

function updateStyle()
{
    if (!div) return;

    div.setAttribute("style", inStyle.get());

    div.style.position = inPos.get().toLowerCase();

    div.style.overflow = inOverflow.get().toLowerCase();
    div.style.display = inDisplay.get();
    div.style.opacity = inOpacity.get();
    if (inInteractive.get() == "No Pointer Events")div.style.pointerEvents = "none";

    if (inSetSize.get())
    {
        div.style.width = inWidth.get() + inSizeUnit.get();
        div.style.height = inHeight.get() + inSizeUnit.get();
    }
    else
    {
        div.style.width = "";
        div.style.height = "";
    }

    outElement.setRef(div);

    if (!div.parentElement) parent.appendChild(div);

    warning();
}

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
    outElement.setRef(div);
}

function onMouseEnter(e)
{
    outHover.set(true);
}

function onMouseLeave(e)
{
    outHover.set(false);
}

function onKey(e)
{
    if (e.keyCode == 13 || e.keyCode == 32)outClicked.trigger();
}

function onMouseClick(e)
{
    if (!inPropagation.get()) e.stopPropagation();
    outClicked.trigger();
}

function isInteractive()
{
    return inInteractive.get() != "No Pointer Events";
}

function updateInteractive()
{
    op.setUiError("interactiveProblem", null);

    removeListeners();
    if (isInteractive()) addListeners();
    updateStyle();
}

function removeListeners()
{
    if (listenerElement)
    {
        listenerElement.removeEventListener("pointerdown", onMouseClick);
        listenerElement.removeEventListener("pointerleave", onMouseLeave);
        listenerElement.removeEventListener("pointerenter", onMouseEnter);
        listenerElement.removeEventListener("keydown", onKey, false);
        listenerElement.removeAttribute("tabindex");
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
        listenerElement.setAttribute("tabindex", 0);
        listenerElement.addEventListener("keydown", onKey, false);
    }
}

op.addEventListener("onEnabledChange", (enabled) =>
{
    removeElement();
    if (!enabled) return;

    createElement();
    updateStyle();
    updateClass();
    updateText();
    updateInteractive();
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

CABLES.OPS["a0d2cc80-0b2f-4422-ba2d-c903ac9ca297"]={f:Ops.Html.Elements.Element_v2,objName:"Ops.Html.Elements.Element_v2"};




// **************************************************************
// 
// Ops.Anim.Bang
// 
// **************************************************************

Ops.Anim.Bang= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inUpdate = op.inTrigger("update"),
    inBang = op.inTriggerButton("Bang"),
    inDuration = op.inValue("Duration", 0.1),
    invert = op.inBool("Invert", false),
    outTrigger = op.outTrigger("Trigger Out"),
    outValue = op.outNumber("Value");

const anim = new CABLES.Anim();
let startTime = CABLES.now();
op.toWorkPortsNeedToBeLinked(inUpdate);

let needsReset = false;

inBang.onTriggered = function ()
{
    needsReset = true;
};

inUpdate.onTriggered = function ()
{
    if (needsReset)
    {
        startTime = CABLES.now();
        anim.clear();
        anim.setValue(0, 1);
        anim.setValue(inDuration.get(), 0);
        needsReset = false;
    }

    const elapsed = (CABLES.now() - startTime) / 1000;
    if (elapsed <= inDuration.get())
    {
        const v = anim.getValue(elapsed);
        if (invert.get()) outValue.set(1.0 - v);
        else outValue.set(v);
    }
    else
    {
        if (invert.get())
        {
            outValue.set(1.0);
        }
        else
        {
            outValue.set(0);
        }
    }

    outTrigger.trigger();
};

}
};

CABLES.OPS["92ca45a7-5b4b-4238-956e-23d79bdc659f"]={f:Ops.Anim.Bang,objName:"Ops.Anim.Bang"};




// **************************************************************
// 
// Ops.Local.ContactFormular
// 
// **************************************************************

Ops.Local.ContactFormular= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// Define inputs
let inputTrigger = op.inTrigger("Trigger");
let inputName = op.inString("Name", "");
let inputEmail = op.inString("Email", "");
let inputMessage = op.inString("Message", "");
let inputMailServer = op.inString("Mail Server", "");

// Define outputs
let outputDone = op.outString("Done", "");

// Define triggers for success and error
let outputSuccessTrigger = op.outTrigger("Success Trigger");
let outputErrorTrigger = op.outTrigger("Error Trigger");

// When trigger is activated
inputTrigger.onTriggered = function() {
    const url = inputMailServer.get().trim();
    if (!url) {
        console.warn("⚠️ No mail server URL provided");
        outputDone.set("no_url");
        outputErrorTrigger.trigger();  // Fire error trigger
        return;
    }

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: inputName.get(),
            email: inputEmail.get(),
            message: inputMessage.get()
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("✅ Email sent!");
            outputDone.set("Email sent!");
            outputSuccessTrigger.trigger(); // Fire success trigger
        } else {
            console.log("❌ Failed to send.");
            outputDone.set("Error, contact danipercussio@yahoo");
            outputErrorTrigger.trigger();  // Fire error trigger
        }
    })
    .catch(err => {
        console.error("⚠️ Network error:", err);
        outputDone.set("Error, contact danipercussio@yahoo");
        outputErrorTrigger.trigger();      // Fire error trigger
    });
};

}
};

CABLES.OPS["8dac3bae-d0a9-4569-b2f9-678d8f63807c"]={f:Ops.Local.ContactFormular,objName:"Ops.Local.ContactFormular"};




// **************************************************************
// 
// Ops.Html.CSS.ElementCssText
// 
// **************************************************************

Ops.Html.CSS.ElementCssText= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inEle = op.inObject("Element", null, "element"),
    inFamily = op.inString("Font Family", "sans serif"),
    inSize = op.inFloat("Text Size", 12),
    inWeight = op.inString("Font Weight", "normal"),

    inAlign = op.inSwitch("Text Align", ["Left", "Center", "Right", "Justify"], "Left"),

    inOverflow = op.inBool("Overflow Ellipsis", false),

    inLetterSpace = op.inFloat("Letter Spacing", 0),

    inLineHeight = op.inFloat("Line Height", 0),

    inUserSelectNone = op.inBool("Disable Text Select", false),

    // in1 = op.inSwitch("White Space",["Initial","no-wrap"], "Initial"),
    outEle = op.outObject("HTML Element", null, "element");

let ele = null;

inLetterSpace.onChange =
    inOverflow.onChange =
    inEle.onChange =
    inEle.onLinkChanged =
    inFamily.onChange =
    inSize.onChange =
    inWeight.onChange =
    inAlign.onChange =
    inLineHeight.onChange =
        update;

op.onDelete = remove;

function remove()
{
    if (!ele) return;
    ele.style.removeProperty("font-family");
    ele.style.removeProperty("user-select");
    ele.style.removeProperty("letter-spacing");
    ele.style.removeProperty("text-align");
    ele.style.removeProperty("line-height");
    ele.style.removeProperty("font-size");
}

function update()
{
    remove();
    ele = inEle.get();

    if (ele && ele.style)
    {
        ele.style["font-family"] = inFamily.get();
        ele.style["letter-spacing"] = inLetterSpace.get() + "px";

        ele.style["font-weight"] = inWeight.get();
        ele.style["text-align"] = inAlign.get().toLowerCase();

        if (inSize.get())ele.style["font-size"] = inSize.get() + "px";
        else ele.style["font-size"] = "";

        if (inLineHeight.get()) ele.style["line-height"] = inLineHeight.get() + "px";
        else ele.style["line-height"] = "";

        if (inUserSelectNone.get())ele.style["user-select"] = "none";
    }
    else
    {
        setTimeout(update, 50);
    }

    if (outEle != inEle.get())
        outEle.setRef(inEle.get());
}

}
};

CABLES.OPS["8413b842-6b92-487e-b74b-da3c0259bd08"]={f:Ops.Html.CSS.ElementCssText,objName:"Ops.Html.CSS.ElementCssText"};




// **************************************************************
// 
// Ops.Html.ElementsPositionsByClass
// 
// **************************************************************

Ops.Html.ElementsPositionsByClass= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inUpd = op.inTriggerButton("Update"),
    inClassName = op.inString("Classname", ""),
    outPosArr = op.outArray("Position", 3),
    outSizeArr = op.outArray("Size", 3),
    outNumEle = op.outNumber("Total Elements");

inUpd.onTriggered = () =>
{
    const arrPos = [];
    const arrSize = [];

    const els = document.getElementsByClassName(inClassName.get());
    const rCanv = op.patch.cgl.canvas.getBoundingClientRect();

    for (let i = 0; i < els.length; i++)
    {
        // inClassName.get();
        let ele = els[i];
        const r = ele.getBoundingClientRect();

        arrPos.push(r.left - rCanv.left, r.top - rCanv.top, 0);
        arrSize.push(r.width, r.height, 1);
    }
    outPosArr.setRef(arrPos);
    outSizeArr.setRef(arrSize);
    outNumEle.set(els.length);
};

}
};

CABLES.OPS["43cf60ec-1a62-4bd0-98ee-2aa85681020f"]={f:Ops.Html.ElementsPositionsByClass,objName:"Ops.Html.ElementsPositionsByClass"};




// **************************************************************
// 
// Ops.Trigger.SequenceMultiPort
// 
// **************************************************************

Ops.Trigger.SequenceMultiPort= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrigs = op.inMultiPort("Input", CABLES.OP_PORT_TYPE_FUNCTION),
    outTrigs = op.outMultiPort("Output", CABLES.OP_PORT_TYPE_FUNCTION);

// op.setUiAttrib({ "resizable": true, "resizableY": false, "stretchPorts": true });

inTrigs.onTriggered = (index) =>
{
    const ports = outTrigs.get();

    for (let i = 0; i < ports.length; i++)
    {
        ports[i].trigger();
    }
};

}
};

CABLES.OPS["be066ff6-85e2-408a-9570-59fb7abff7b2"]={f:Ops.Trigger.SequenceMultiPort,objName:"Ops.Trigger.SequenceMultiPort"};




// **************************************************************
// 
// Ops.Trigger.TriggerOnce
// 
// **************************************************************

Ops.Trigger.TriggerOnce= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("Exec"),
    reset = op.inTriggerButton("Reset"),
    next = op.outTrigger("Next"),
    outTriggered = op.outBoolNum("Was Triggered");

let triggered = false;

op.toWorkPortsNeedToBeLinked(exe);

reset.onTriggered = function ()
{
    triggered = false;
    outTriggered.set(triggered);
};

exe.onTriggered = function ()
{
    if (triggered) return;

    triggered = true;
    next.trigger();
    outTriggered.set(triggered);
};

}
};

CABLES.OPS["cf3544e4-e392-432b-89fd-fcfb5c974388"]={f:Ops.Trigger.TriggerOnce,objName:"Ops.Trigger.TriggerOnce"};




// **************************************************************
// 
// Ops.Cables.LoadingStatus_v2
// 
// **************************************************************

Ops.Cables.LoadingStatus_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    startTimeLine = op.inBool("Play Timeline", true),
    next = op.outTrigger("Next"),
    outInitialFinished = op.outBoolNum("Finished Initial Loading", false),
    outLoading = op.outBoolNum("Loading"),
    outProgress = op.outNumber("Progress"),
    outList = op.outArray("Jobs"),
    loadingFinished = op.outTrigger("Trigger Loading Finished ");

const cgl = op.patch.cgl;
const patch = op.patch;

let finishedOnce = false;
const preRenderTimes = [];
let firstTime = true;
let timeout = 0;

document.body.classList.add("cables-loading");

let loadingId = cgl.patch.loading.start("loadingStatusInit", "loadingStatusInit", op);

op.patch.loading.on("finishedTask", updateStatus.bind(this));
op.patch.loading.on("startTask", updateStatus.bind(this));

function updateStatus()
{
    const jobs = op.patch.loading.getListJobs();
    outProgress.set(patch.loading.getProgress());

    let hasFinished = jobs.length === 0;
    const notFinished = !hasFinished;

    if (notFinished)
    {
        outList.set(op.patch.loading.getListJobs());
    }

    if (notFinished)
    {
        if (firstTime)
        {
            // if (preRenderOps.get()) op.patch.preRenderOps();

            op.patch.timer.setTime(0);
            if (startTimeLine.get())
            {
                op.patch.timer.play();
            }
            else
            {
                op.patch.timer.pause();
            }
        }
        firstTime = false;

        document.body.classList.remove("cables-loading");
        document.body.classList.add("cables-loaded");
    }
    else
    {
        finishedOnce = true;
        outList.set(op.patch.loading.getListJobs());
        if (patch.loading.getProgress() < 1.0)
        {
            op.patch.timer.setTime(0);
            op.patch.timer.pause();
        }
    }

    outInitialFinished.set(finishedOnce);

    if (outLoading.get() && hasFinished) loadingFinished.trigger();

    outLoading.set(notFinished);
    // clearTimeout(timeout);
    // if (notFinished) outLoading.set(notFinished);
    // else
    //     timeout = setTimeout(() =>
    //     {
    //         outLoading.set(notFinished);
    //     }, 100);

    op.setUiAttribs({ "loading": notFinished });
}

exe.onTriggered = () =>
{
    updateStatus();

    next.trigger();

    if (loadingId)
    {
        cgl.patch.loading.finished(loadingId);
        loadingId = null;
    }
};

}
};

CABLES.OPS["e62f7f4c-7436-437e-8451-6bc3c28545f7"]={f:Ops.Cables.LoadingStatus_v2,objName:"Ops.Cables.LoadingStatus_v2"};




// **************************************************************
// 
// Ops.Trigger.GateTrigger
// 
// **************************************************************

Ops.Trigger.GateTrigger= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger('Execute'),
    passThrough = op.inValueBool('Pass Through',true),
    triggerOut = op.outTrigger('Trigger out');

exe.onTriggered = function()
{
    if(passThrough.get())
        triggerOut.trigger();
}

}
};

CABLES.OPS["65e8b8a2-ba13-485f-883a-2bcf377989da"]={f:Ops.Trigger.GateTrigger,objName:"Ops.Trigger.GateTrigger"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});

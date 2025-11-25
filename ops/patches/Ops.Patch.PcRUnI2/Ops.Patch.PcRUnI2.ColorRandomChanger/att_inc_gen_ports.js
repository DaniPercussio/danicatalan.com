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

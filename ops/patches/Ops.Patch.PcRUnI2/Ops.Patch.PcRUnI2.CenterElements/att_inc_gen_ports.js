const port_dfb41azsp=op.inTrigger("dfb41azsp");
port_dfb41azsp.setUiAttribs({title:"Update",display:"button",});

const port_jpoys2oln=op.inString("jpoys2oln","antigone");
port_jpoys2oln.setUiAttribs({title:"Classname",});

const port_lmo2uzftn=op.inFloat("lmo2uzftn",50.00000000000006);
port_lmo2uzftn.setUiAttribs({title:"number1",});

const port_uq17ol8yc=op.outNumber("uq17ol8yc");
port_uq17ol8yc.setUiAttribs({title:"result",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_dfb41azsp = addedOps[i].outTrigger("innerOut_dfb41azsp");
innerOut_dfb41azsp.setUiAttribs({title:"Update"});
port_dfb41azsp.onTriggered = () => { innerOut_dfb41azsp.trigger(); };

const innerOut_jpoys2oln = addedOps[i].outString("innerOut_jpoys2oln");
innerOut_jpoys2oln.set(port_jpoys2oln.get() );
innerOut_jpoys2oln.setUiAttribs({title:"Classname"});
port_jpoys2oln.on("change", (a,v) => { innerOut_jpoys2oln.set(a); });

const innerOut_lmo2uzftn = addedOps[i].outNumber("innerOut_lmo2uzftn");
innerOut_lmo2uzftn.set(port_lmo2uzftn.get() );
innerOut_lmo2uzftn.setUiAttribs({title:"number1"});
port_lmo2uzftn.on("change", (a,v) => { innerOut_lmo2uzftn.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_uq17ol8yc = addedOps[i].inFloat("innerIn_uq17ol8yc");
innerIn_uq17ol8yc.setUiAttribs({title:"result"});
innerIn_uq17ol8yc.on("change", (a,v) => { port_uq17ol8yc.set(a); });

}
}
};

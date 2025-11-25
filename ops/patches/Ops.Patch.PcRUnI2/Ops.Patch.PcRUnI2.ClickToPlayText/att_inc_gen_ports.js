const port_v5hqs98yb=op.inFloat("v5hqs98yb",0);
port_v5hqs98yb.setUiAttribs({title:"Play",display:"bool",});

const port_9pig42owu=op.inFloat("9pig42owu",0);
port_9pig42owu.setUiAttribs({title:"Boolean",display:"bool",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_v5hqs98yb = addedOps[i].outNumber("innerOut_v5hqs98yb");
innerOut_v5hqs98yb.set(port_v5hqs98yb.get() );
innerOut_v5hqs98yb.setUiAttribs({title:"Play"});
port_v5hqs98yb.on("change", (a,v) => { innerOut_v5hqs98yb.set(a); });

const innerOut_9pig42owu = addedOps[i].outNumber("innerOut_9pig42owu");
innerOut_9pig42owu.set(port_9pig42owu.get() );
innerOut_9pig42owu.setUiAttribs({title:"Boolean"});
port_9pig42owu.on("change", (a,v) => { innerOut_9pig42owu.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

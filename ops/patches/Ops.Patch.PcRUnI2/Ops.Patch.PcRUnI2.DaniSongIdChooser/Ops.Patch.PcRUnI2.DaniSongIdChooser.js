// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const
    heartship = op.inFloat("Heartship"),
    serenade  = op.inFloat("Serenade"),
    antigone  = op.inFloat("Antigone"),

    // extra 6 inputs
    comet     = op.inFloat("Comet"),
    lantern   = op.inFloat("Lantern"),
    aurora    = op.inFloat("Aurora"),
    ember     = op.inFloat("Ember"),
    beacon    = op.inFloat("Beacon"),
    ripple    = op.inFloat("Ripple"),

    exec   = op.inTrigger("Trigger"),
    result = op.outNumber("Result"),
    next   = op.outTrigger("Next");

exec.onTriggered = () =>
{
    // read all values
    const h = heartship.get();
    const s = serenade.get();
    const a = antigone.get();
    const c = comet.get();
    const l = lantern.get();
    const u = aurora.get();
    const e = ember.get();
    const b = beacon.get();
    const r = ripple.get();

    let output = 0;

    // one-hot logic – assign unique output per input
    if (h === 1 && s === 0 && a === 0 && c === 0 && l === 0 && u === 0 && e === 0 && b === 0 && r === 0) {
        output = 2;

    } else if (s === 1 && h === 0 && a === 0 && c === 0 && l === 0 && u === 0 && e === 0 && b === 0 && r === 0) {
        output = 3;

    } else if (a === 1 && h === 0 && s === 0 && c === 0 && l === 0 && u === 0 && e === 0 && b === 0 && r === 0) {
        output = 1;

    } else if (c === 1 && h === 0 && s === 0 && a === 0 && l === 0 && u === 0 && e === 0 && b === 0 && r === 0) {
        output = 4;

    } else if (l === 1 && h === 0 && s === 0 && a === 0 && c === 0 && u === 0 && e === 0 && b === 0 && r === 0) {
        output = 5;

    } else if (u === 1 && h === 0 && s === 0 && a === 0 && c === 0 && l === 0 && e === 0 && b === 0 && r === 0) {
        output = 6;

    } else if (e === 1 && h === 0 && s === 0 && a === 0 && c === 0 && l === 0 && u === 0 && b === 0 && r === 0) {
        output = 7;

    } else if (b === 1 && h === 0 && s === 0 && a === 0 && c === 0 && l === 0 && u === 0 && e === 0 && r === 0) {
        output = 8;

    } else if (r === 1 && h === 0 && s === 0 && a === 0 && c === 0 && l === 0 && u === 0 && e === 0 && b === 0) {
        output = 9;

    } else {
        output = 0;
    }

    result.set(output);
    next.trigger();
};


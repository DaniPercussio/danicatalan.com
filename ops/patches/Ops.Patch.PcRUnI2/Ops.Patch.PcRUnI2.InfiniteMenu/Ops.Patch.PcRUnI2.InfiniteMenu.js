const exec = op.inTrigger("Trigger");
const valueIn = op.inFloat("Value");       // target value
const limitLeft = op.inFloat("LimitLeft", -150);
const limitRight = op.inFloat("LimitRight", 150);
const speedIn = op.inFloat("Speed", 0.1);  // interpolation speed 0-1

const next = op.outTrigger("Next");
const result = op.outNumber("Wrapped");

let current = 0;

exec.onTriggered = () => {
    const target = valueIn.get();
    const speed = speedIn.get();
    const left = limitLeft.get();
    const right = limitRight.get();

    // --- Smooth step toward target ---
    current += (target - current) * speed;

    // --- Wrap-around logic ---
    const range = right - left;
    let wrapped = ((current - left) % range + range) % range + left;

    result.set(wrapped);
    next.trigger();
};


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

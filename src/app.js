/* istanbul ignore file */
try {
    const { isEmpty, isValidGamerTag } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        feedbackMessageText = isEmpty(gamerTagValue)
            ? "Gamer tag cannot be empty"
            : "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;

        feedbackMessageText = isValidGamerTag(gamerTagValue)
            ? "Your gamerTag is valid :)"
            : "Your gamerTag is not valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}

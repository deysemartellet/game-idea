function sendInput() {
    const input = document.getElementById("input");
    const log = document.getElementById("log");
    const text = input.value.trim();
    const sendButton = document.getElementById("sendBtn");


if (text === "") return;

//Format dialogue inside quotes as bold
const formatted = text.replace(/"([^"]+)"/g, '<span class="bold-dialogue">"$1"</span>');

//Add Shadow's line to the log
log.innerHTML += `🕶️ <i>Shadow:</i> ${formatted}\n\n`;

//Scroll to the bottom
log.scrollTop = log.scrollHeight;

//Clear input
input.value = "";

//New line and sending the message
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); //Prevents newline
        sendInput(); //Triggers send
    }
});

//Onlick to send
sendButton.addEventListener("click", sendInput);
}
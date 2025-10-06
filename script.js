function toggleChat() {
  const box = document.getElementById("chatBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");
  const userText = input.value.trim();

  if (userText === "") return;

  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<strong>You:</strong> ${userText}`;
  chatBody.appendChild(userMsg);

  let botReply = "I'm still learning 💙";

  if (userText.toLowerCase().includes("hello"))
    botReply = "Hello! Welcome to the AI Health Assistant 🏥";
  else if (userText.toLowerCase().includes("disease"))
    botReply = "You can go to the Prediction page to check for diseases.";
  else if (userText.toLowerCase().includes("thanks"))
    botReply = "You're always welcome 💙";

  const botMsg = document.createElement("p");
  botMsg.innerHTML = `<strong>Bot:</strong> ${botReply}`;
  chatBody.appendChild(botMsg);

  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
}

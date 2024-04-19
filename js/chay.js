const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("sendButton");

let userMessage = null;
const API_KEY = "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";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("div");
    chatLi.textContent = message;
    chatLi.classList.add(className); 
    return chatLi;
};

const generateResponse = async () => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
        const data = await response.json();
        const responseMessage = data.choices[0].message.content.trim();
        chatBox.removeChild(document.querySelector('.incoming')); // Remove the "Thinking..." message
        chatBox.appendChild(createChatLi(responseMessage, "incoming"));
        chatBox.scrollTo(0, chatBox.scrollHeight);
    } catch (error) {
        console.error('Error:', error);
    }
};

const handleChat = () => {
    userMessage = userInput.value.trim();
    if (!userMessage) return;

    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    userInput.value = "";

    setTimeout(() => {
        chatBox.appendChild(createChatLi("Thinking...", "incoming"));
        chatBox.scrollTo(0, chatBox.scrollHeight);
        generateResponse();
    }, 600);
};

sendButton.addEventListener("click", handleChat);
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleChat();
    }
});
 document.addEventListener("DOMContentLoaded", function () {
            const chatList = document.querySelector(".chat-list");
            const newChatButton = document.querySelector(".new-chat-button");
            const messageDisplay = document.querySelector(".message-display");
            const inputBox = document.querySelector("input[type='text']");
            const sendButton = document.querySelector(".send-button");

            // Function to create a new chat and add it to the list
            function createNewChat() {
                const chatItem = document.createElement("div");
                chatItem.classList.add("chat-item");
                chatItem.textContent = "New Chat"; // You can replace this with user input
                chatList.appendChild(chatItem);
            }
           
            // Function to display a message in the message display area
            function displayMessage(message) {
                const messageElement = document.createElement("div");
                messageElement.classList.add("message");
                messageElement.textContent = message;
                messageDisplay.appendChild(messageElement);
                // After sending the message, clear the content of the element
document.getElementById('chatgpt-message').textContent = '';
            }

            newChatButton.addEventListener("click", createNewChat);

            sendButton.addEventListener("click", function () {
                const message = inputBox.value;
                if (message) {
                    displayMessage(message);
                    inputBox.value = "";
                }
            });
            
            const hidePaneButton = document.getElementById('hide-pane-btn');
    const leftPane = document.querySelector('.left-pane');
    let leftPaneVisible = true; // Initially, left pane is visible

    hidePaneButton.addEventListener("click", function () {
        if (leftPaneVisible) {
            leftPane.style.display = 'none';
            leftPaneVisible = false;
        } else {
            leftPane.style.display = 'block';
            leftPaneVisible = true;
            
        }
    });
});
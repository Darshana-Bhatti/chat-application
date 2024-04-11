function sendMessage(){
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value


    if(message.trim() !==""){
        var chatDisplay = document.getElementById("chat-display");
        var newMessage = document.createElement("p");
        newMessage.textContent= "you:" +message;
        chatDisplay.appendChild(newMessage);
        messageInput.value="";
    }
}
document.getElementById("message-input").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
});
document.getElementById("send-button").addEventListener("click", function(){
    sendMessage();
});
import React from "react";
import "./ChatButton.css";

const ChatButton = () => {
  return (
    <div className="chat-button">
      <div className="chat-bubble">Hi! What can I do for you?</div>
      <button className="chat-icon">💬</button>
    </div>
  );
};

export default ChatButton;

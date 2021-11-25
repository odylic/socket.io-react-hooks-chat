import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Chatroom.css";

import useChat from "../useChat";

const Chatroom = (props) => {
  // gets the roomId for the URL params
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => {
            <li
              key={i}
              // will show the css conditionally for my-message or received message
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>;
          })}
        </ol>
      </div>
      
    </div>
  );
};
export default Chatroom;

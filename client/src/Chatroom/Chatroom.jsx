import React, { useState } from "react";
import "./Chatroom.css";

import useChat from "../useChat";

const Chatroom = (props) => {
  // const { roomId } = props.match.params;
  // const { messages, sendMessage } = useChat(roomId);

  return (
    <div className="chat-room-container">
      {/* <h1 className="room-name">Room: {roomId}</h1> */}
      <div className="messages-container">Test</div>
    </div>
  );
};
export default Chatroom;

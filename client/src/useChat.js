import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  // creates a reference, like a box that holds a .current property as mutable value
  const socketRef = useRef();

  // the Ref's current property is assigned
  useEffect(() => {
    // assign .current to socketclient, localhost4000, and query: roomID
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    // messages will hold previous messages, assigns to the user, setsMessages to the message hook
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.currentId,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
    // changes .current property to disconnect
    return () => {
      socketRef.current.disconnect();
    };
    // updates everytime roomID updates
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;

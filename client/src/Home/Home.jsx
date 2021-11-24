import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  const [roomName, setRoomName] = useState("");
  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;

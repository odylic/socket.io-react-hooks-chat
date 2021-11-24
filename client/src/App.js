import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.jsx";
// import Chatroom from "./Chatroom/Chatroom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/:roomId" component={Chatroom}/> */}
      </Routes>
    </Router>
  );
}

export default App;

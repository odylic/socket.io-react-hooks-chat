import React from "react";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";

// import Home from "./Home/Home";
// import Chatroom from "./Chatroom/Chatroom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={Home}/>
        <Route exact path="/:roomId" component={Chatroom}/> */}
      </Routes>
    </Router>
  );
}

export default App;

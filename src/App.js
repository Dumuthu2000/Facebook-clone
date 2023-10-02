import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import {BrowserRouter,Routes, /*instead of "Switch*/Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        <Navbar />
        
        <Routes>
          {/* <Routes path="/add" element={UserProfile} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<UserProfile />} />
        </Routes>
        
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

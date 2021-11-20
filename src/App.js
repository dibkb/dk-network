import {Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/signup/SignUp";
import LogIn from "./components/pages/login/LogIn";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;

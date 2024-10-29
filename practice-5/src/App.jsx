import React from "react";
import Cards from "./Components/Cards";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";

const App = () => {
  return (
    <div>
      <nav className="mt-10 gap-5 flex justify-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-red-400 text-white px-2 rounded-md" : "px-2"}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-red-400 text-white px-2 rounded-md" : "px-2"}
          to="/cards"
        >
          Cards
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-red-400 text-white px-2 rounded-md" : "px-2"}
          to="/about"
        >
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/user/:id" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

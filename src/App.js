import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import "./App.css";
import CharactersDetails from "./components/characters/CharactersDetail";


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
           
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/login" className="nav-link">
                           Login
                        </NavLink>
                        <NavLink to="/admin" className="nav-link">
                           Admin
                        </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/detail/:param" element={<CharactersDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

    </Router>
  );
}

export default App;



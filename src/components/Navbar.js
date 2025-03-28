import React from "react";
import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faConciergeBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">Ar Rahman Tours</div>
        <ul className="navbar-links">
          <li>
            <a href="#home">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>
          <li>
            <a href="#service">
              <FontAwesomeIcon icon={faConciergeBell} /> Service
            </a>
          </li>
          <li>
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>
        <button className="navbar-button">Sign Up</button>
      </nav>
    </div>
  );
};

export default Navbar;

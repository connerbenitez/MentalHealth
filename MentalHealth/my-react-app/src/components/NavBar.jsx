import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/home");
  };
  const goToView = () => {
    navigate("/view");
  };
  const goToAdd = () => {
    navigate("/add");
  };
  const goLogout = () => {
    navigate("/logout");
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item"><a onClick={goToHomepage}>Home</a></li>
        <li className="nav-item"><a onClick={goToView}>View Entries</a></li>
        <li className="nav-item"><a onClick={goToAdd}>Add an Entry</a></li>
        <li className="nav-item" id="logout"><a onClick={goLogout}>Logout</a></li>
      </ul>
    </nav>
  );
}

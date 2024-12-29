"use client";
import React from "react";
import "./header.css";

const Header = ({ title = "Header" }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

export default Header;
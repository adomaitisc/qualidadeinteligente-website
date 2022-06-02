import React from "react";
import logo from "../assets/Qualidade.svg";

export default function index() {
  return (
    <div className="header">
      <img src={logo} alt="Qualidade Inteligente"></img>
      <ul className="navbar">
        <li className="item">Soluções</li>
        <li className="item">Quem Somos</li>
        <li className="item">Explorar</li>
      </ul>
    </div>
  );
}

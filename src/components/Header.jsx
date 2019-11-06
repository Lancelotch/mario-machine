import React from "react";
import "./style.css";

export default function Header({ score, lifespan }) {
  return (
    <div className="header">
      <div><span className="typography">Score<br/>{score}</span></div>
      <div><span className="typography">Lives<br/>{lifespan}</span></div>
    </div>
  );
}

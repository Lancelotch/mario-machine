import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import SMB_Smallmario from '../assets/image/SMB_Smallmario.png';
import SMB_Supermario from '../assets/image/SMB_Supermario.png';
import SMB_Firemario from '../assets/image/SMB_Firemario.png';
import "./style.css";

export default function GameMario() {
  const [mario, setMario] = useState(SMB_Smallmario);
  const handleEat = function() {
    console.log("eat");
    setMario(SMB_Supermario)
  };
  const handleDamage = function() {
    console.log("damage");
  };
  const handleLives = function() {
    console.log("lives");
  };
  return (
    <div className="container">
      <Header score={100} lifespan={3} />
      <div className="content">
        <div className="border-gameplay">
          <img src={mario} alt="mario" className="mario"/>
        </div>
      </div>
      <Footer onSuper={handleEat} onLives={handleLives} onDamage={handleDamage} />
    </div>
  );
}

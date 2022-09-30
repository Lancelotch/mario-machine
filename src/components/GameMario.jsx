import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SMB_Smallmario from '../assets/image/SMB_Smallmario.png';
import SMB_Supermario from '../assets/image/SMB_Supermario.png';
import SMB_Firemario from '../assets/image/SMB_Firemario.png';
import SMB_Die from '../assets/image/pin_game_over_mario.png';
import "./style.css";

export default function GameMario() {
  

  const handleGetCoin = function() {
    
  };
  const handleEat = function() {
    
  };
  const handleDamage = function() {
    
  };
  const handleLives = function() {
    
  };
  
  const marioState = function(value){
    switch(value){
      case 'mario':
        return SMB_Smallmario;
      case 'superMario':
        return SMB_Supermario;
      case 'fireMario':
        return SMB_Firemario;
      case 'gameOver':
        return SMB_Die;
      default:
        return SMB_Smallmario;
      
    }
  }
  return (
    <div className="container">
      <Header score={0} lifespan={3} />
      <div className="content">
        
        <div className={`${'' === 'gameOver' ? 'border-gameover': 'border-gameplay'}`}>
          <img src={marioState('')} alt="mario" className="mario"/>
        </div>
      </div>
      <Footer 
        onCoin={handleGetCoin} 
        onSuper={handleEat} 
        onLives={handleLives} 
        onDamage={handleDamage} 
        marioState={'mario'}
      />
    </div>
  );
}

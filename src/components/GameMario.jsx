import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SMB_Smallmario from '../assets/image/SMB_Smallmario.png';
import SMB_Supermario from '../assets/image/SMB_Supermario.png';
import SMB_Firemario from '../assets/image/SMB_Firemario.png';
import SMB_Die from '../assets/image/pin_game_over_mario.png';
import "./style.css";
import { marioMachine } from "../state_machine/mario";
import { useMachine } from "@xstate/react";

export default function GameMario() {
  const [state, send] = useMachine(marioMachine);
  const {score, lifespan} = state.context;

  const handleGetCoin = function() {
    send('TAKE_COIN');
  };
  const handleEat = function() {
    send('EAT_SM');
  };
  const handleDamage = function() {
    send('GET_DAMAGE');
  };
  const handleLives = function() {
    send('EAT_1UP_M');
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
      <Header score={score} lifespan={lifespan} />
      <div className="content">
        
        <div className={`${state.value === 'gameOver' ? 'border-gameover': 'border-gameplay'}`}>
          <img src={marioState(state.value)} alt="mario" className="mario"/>
        </div>
      </div>
      <Footer 
        onCoin={handleGetCoin} 
        onSuper={handleEat} 
        onLives={handleLives} 
        onDamage={handleDamage} 
        marioState={state.value}
      />
    </div>
  );
}

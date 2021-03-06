import React from "react";
import "./style.css";
import SMB_Supermushroom from '../assets/image/SMB_Supermushroom.png';
import Fire_Flower_SMB from '../assets/image/Fire_Flower_SMB.gif';
import SMB_1_up_Mushroom_Sprite from '../assets/image/SMB_1-up_Mushroom_Sprite.png';
import Goomba_SMB from '../assets/image/Goomba_SMB.png';

export default function Footer({ onSuper, onLives, onDamage }) {
  return (
    <div className="footer">
      <img src={SMB_Supermushroom} alt="super_mushroom" className="button" onClick={onSuper}/>
      <img src={SMB_1_up_Mushroom_Sprite} alt="1_up_mushroom_sprite" className="button" onClick={onLives}/>
      <img src={Goomba_SMB} alt="gooba" className="button" onClick={onDamage}/>
    </div>
  );
}

import React from 'react';
import cardBack from '../img/cardBack.jpg';
export default function Card({ details }) {
  const { name, atk, def, level, desc } = details;

  return (
    <div className='card'>
      <div className='card-name'>{name}</div>
      <span className='card-level'>Level : {level}</span>
      <div className='card-img'>
        <img src={cardBack} alt='yugioh card background' />
      </div>
      <div className='card-point'>
        <h3>Atk : {atk}</h3>
        <h3>Def : {def}</h3>
      </div>
      <p className='card-desc'>Desc : {desc}</p>
    </div>
  );
}

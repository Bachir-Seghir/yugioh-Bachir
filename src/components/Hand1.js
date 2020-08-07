import React, { useEffect } from 'react';
import Card from './Card';
import { GetCard } from '../helpers';
export default function Hand1({ hand1, summon }) {
  const handleHandCard = (event) => {
    const selectedCard = GetCard(event, hand1);
    summon('hand1', 'field1', selectedCard);
  };

  return (
    <div className='hand'>
      {Object.keys(hand1).map((key) => (
        <Card
          key={key}
          details={hand1[key]}
          classN='handCard'
          handleHandCard={handleHandCard}
        />
      ))}
    </div>
  );
}

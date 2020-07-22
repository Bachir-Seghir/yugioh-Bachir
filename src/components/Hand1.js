import React, { useEffect } from 'react';
import Card from './Card';
export default function Hand1({ hand1, summon }) {
  const detectCard = (event) => {
    const ClickedCardName = Array.from(
      event.target.children
    )[0].innerHTML.toLowerCase();
    const [clickedCard] = hand1.filter(
      (card) => card.name.toLowerCase() === ClickedCardName
    );
    summon(hand1, 'field1', clickedCard);
  };
  return (
    <div className='hand'>
      {Object.keys(hand1).map((key) => (
        <Card
          key={key}
          details={hand1[key]}
          classN='handCard'
          detectCard={detectCard}
        />
      ))}
    </div>
  );
}

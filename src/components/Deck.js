import React from 'react';
import cards from '../cards.json';
import Card from './Card';

export default function Deck({ cards }) {
  return (
    <div className='deck'>
      {Object.keys(cards).map((key) => (
        <Card key={key} details={cards[key]} />
      ))}
    </div>
  );
}

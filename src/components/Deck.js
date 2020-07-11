import React from 'react';
import cards from '../cards.json';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Deck() {
  return (
    <div className='deck'>
      <Link to='/'>Home</Link>
      {Object.keys(cards).map((key) => (
        <Card key={key} details={cards[key]} />
      ))}
    </div>
  );
}

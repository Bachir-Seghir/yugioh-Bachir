import React from 'react';
import Deck from './Deck';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Link to='/deck'>Go To Deck</Link>
      <br />
      <Link to='/field'>Play Game</Link>
    </div>
  );
}

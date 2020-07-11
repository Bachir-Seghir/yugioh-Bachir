import React, { useEffect, useState } from 'react';
import Deck from './Deck';
import cards from '../cards.json';

export default function App() {
  return (
    <form>
      <button id='deck'>Go To Deck</button>
      <button id='play'>Play</button>
    </form>
  );
}

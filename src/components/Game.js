import React, { useContext } from 'react';
import LifePoints from './LifePoints';
import Deck1 from './Deck1';
import Hand1 from './Hand1';
import Graveyard1 from './Graveyard1';
import Field1 from './Field1';
import Player from './Player';
import Deck2 from './Deck2';
import Hand2 from './Hand2';
import Graveyard2 from './Graveyard2';
import Field2 from './Field2';
import { CardContext } from '../contexts/CardContext.js';
import { PlayerContext } from '../contexts/PlayerContext.js';

export default function Game() {
  const { lifePtsP1, setLifePtsP1, lifePtsP2, setLifePtsP2 } = useContext(
    PlayerContext
  );
  const {
    deck1,
    setDeck1,
    deck2,
    setDeck2,
    hand1,
    setHand1,
    hand2,
    setHand2,
    graveyard1,
    setGraveyard1,
    graveyard2,
    setGraveyard2,
    field1,
    setField1,
    field2,
    setField2,
  } = useContext(CardContext);
  return (
    <div className='game'>
      <LifePoints points={lifePtsP1} />
      <Deck1 deck1={deck1} setDeck1={setDeck1} />
      <Hand1 hand1={hand1} setHand1={setHand1} />
      <Graveyard1 graveyard1={graveyard1} setGraveyard1={setGraveyard1} />
      <Field1 field1={field1} setField2={setField1} />
      <LifePoints points={lifePtsP2} />
      <Deck2 deck2={deck2} setDeck2={setDeck2} />
      <Hand2 hand2={hand2} setHand2={setHand2} />
      <Graveyard2 graveyard2={graveyard2} setGraveyard2={setGraveyard2} />
      <Field2 field2={field2} setField2={setField2} />
    </div>
  );
}

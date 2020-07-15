import React, { useState, createContext } from 'react';
import cards from '../cards.json';
import { shuffle } from '../helpers.js';

export const CardContext = createContext();

const CardCtxProvider = (props) => {
  const [deck1, setDeck1] = useState(shuffle(cards));
  const [deck2, setDeck2] = useState(shuffle(cards));
  const [graveyard1, setGraveyard1] = useState([]);
  const [graveyard2, setGraveyard2] = useState([]);
  const [hand1, setHand1] = useState(Array(7).fill({}));
  const [hand2, setHand2] = useState(Array(7).fill({}));
  const [field1, setField1] = useState(Array(5).fill({}));
  const [field2, setField2] = useState(Array(5).fill({}));

  return (
    <CardContext.Provider
      value={{
        deck1,
        setDeck1,
        deck2,
        setDeck2,
        graveyard1,
        setGraveyard1,
        graveyard2,
        setGraveyard2,
        hand1,
        setHand1,
        hand2,
        setHand2,
        field1,
        setField1,
        field2,
        setField2,
      }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardCtxProvider;

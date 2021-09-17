import React, { useState, createContext } from 'react';

export const CardContext = createContext();

const CardCtxProvider = (props) => {
  const [deck1, setdeck1] = useState([]);
  const [deck2, setdeck2] = useState([]);
  const [graveyard1, setgraveyard1] = useState([]);
  const [graveyard2, setgraveyard2] = useState([]);
  const [hand1, sethand1] = useState([]);
  const [hand2, sethand2] = useState([]);
  const [field1, setfield1] = useState([]);
  const [field2, setfield2] = useState([]);
  const [summonCount, setSummonCount] = useState(0);
  const [attackerPts, setAttackerPts] = useState({
    attacker: '',
    defender: '',
  });
  return (
    <CardContext.Provider
      value={{
        deck1,
        setdeck1,
        deck2,
        setdeck2,
        graveyard1,
        setgraveyard1,
        graveyard2,
        setgraveyard2,
        hand1,
        sethand1,
        hand2,
        sethand2,
        field1,
        setfield1,
        field2,
        setfield2,
        summonCount,
        setSummonCount,
        attackerPts,
        setAttackerPts,
      }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardCtxProvider;

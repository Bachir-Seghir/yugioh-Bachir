import React, { useContext, useEffect } from 'react';
import LifePoints from './LifePoints';
import Deck1 from './Deck1';
import Hand1 from './Hand1';
import Graveyard1 from './Graveyard1';
import Field1 from './Field1';
import Deck2 from './Deck2';
import Hand2 from './Hand2';
import Graveyard2 from './Graveyard2';
import Field2 from './Field2';
import { CardContext } from '../contexts/CardContext.js';
import { PlayerContext } from '../contexts/PlayerContext.js';

export default function Game() {
  const {
    lifePtsP1,
    setLifePtsP1,
    lifePtsP2,
    cycle,
    setCycle,
    setLifePtsP2,
  } = useContext(PlayerContext);
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
  useEffect(() => {
    switch (true) {
      case cycle.draw:
        Draw(deck1, hand1, 4);
        setCycle((cycle) => ({
          ...cycle,
          draw: false,
          phase1: true,
        }));
        break;
      case cycle.phase1:
        Draw(deck1, hand1, 1);
        setCycle((cycle) => ({ ...cycle, phase1: false }));
        break;
      case cycle.atkPhase:
        setCycle((cycle) => ({ ...cycle, atkPhase: false }));
        break;

      default:
        break;
    }
  }, [cycle]);
  const Draw = (current, next, num) => {
    for (let i = 0; i < num; i++) {
      next.push(current[0]);
      current.splice(0, 1);
    }
    setHand1((hand1) => [...hand1]);
  };
  const summon = (current, next, card) => {
    eval(next).push(card);
    const newArr = current.filter((item) => item.id != card.id);
    setHand1(newArr);
  };

  return (
    <div className='game'>
      <button onClick={() => setCycle((cycle) => ({ ...cycle, draw: true }))}>
        Start
      </button>
      <div className='player player1'>
        <LifePoints points={lifePtsP1} />
        <Deck1
          deck1={deck1}
          setDeck1={setDeck1}
          cycle={cycle}
          setCycle={setCycle}
        />
        <Hand1
          Draw={Draw}
          deck1={deck1}
          hand1={hand1}
          setHand1={setHand1}
          summon={summon}
        />
        <Graveyard1 graveyard1={graveyard1} setGraveyard1={setGraveyard1} />
        <Field1 field1={field1} setField2={setField1} />
      </div>
      <div className='player player2'>
        <LifePoints points={lifePtsP2} />
        <Deck2 deck2={deck2} setDeck2={setDeck2} hand2={hand2} />
        <Hand2 Draw={Draw} deck1={deck2} hand2={hand2} setHand2={setHand2} />
        <Graveyard2 graveyard2={graveyard2} setGraveyard2={setGraveyard2} />
        <Field2 field2={field2} setField2={setField2} />
      </div>
    </div>
  );
}

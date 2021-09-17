import React, { useContext, useEffect } from 'react';
import cards from '../cards.json';
import { shuffle } from '../helpers.js';
import LifePoints from './LifePoints';
import Deck1 from './Deck1';
import Hand1 from './Hand1';
import Graveyard1 from './Graveyard1';
import Field1 from './Field1';
import Deck2 from './Deck2';
import Hand2 from './Hand2';
import Graveyard2 from './Graveyard2';
import Field2 from './Field2';
import Controls from './Controls';
import { CardContext } from '../contexts/CardContext.js';
import { PlayerContext } from '../contexts/PlayerContext.js';

export default function Game() {
  const {
    lifePtsP1,
    setlifePtsP1,
    lifePtsP2,
    cycleP1,
    setcycleP1,
    cycleP2,
    setcycleP2,
    setlifePtsP2,
  } = useContext(PlayerContext);

  const {
    deck1,
    setdeck1,
    deck2,
    setdeck2,
    hand1,
    sethand1,
    hand2,
    sethand2,
    graveyard1,
    setgraveyard1,
    graveyard2,
    setgraveyard2,
    field1,
    setfield1,
    field2,
    setfield2,
    setSummonCount,
    summonCount,
    attackerPts,
    setAttackerPts,
  } = useContext(CardContext);

  // comp did mount : fill the decks with shuffled cards
  useEffect(() => {
    setdeck1(shuffle(cards));
    setdeck2(shuffle(cards));
  }, [setdeck1, setdeck2]);

  // comp did update : surf in the cycles of the turn
  useEffect(() => {
    switch (true) {
      case cycleP1.draw && cycleP1.newTurn:
        {
          Draw('deck1', 'hand1', 4);
          setcycleP1((cycle) => ({
            ...cycle,
            draw: false,
            phase1: true,
          }));
        }
        break;
      case cycleP1.phase1 && cycleP1.newTurn:
        Draw('deck1', 'hand1', 1);
        setSummonCount(1);
        break;
      case cycleP1.atkPhase && cycleP1.newTurn:
        break;
      case cycleP1.endPhase && cycleP1.newTurn:
        setcycleP1((cycle) => ({
          ...cycle,
          atkPhase: false,
          newTurn: false,
        }));
        break;

      default:
        break;
    }
  }, [cycleP1, setcycleP1]);

  // this func draw an nCards from deck to hand
  const Draw = (deck, hand, num) => {
    for (let i = 0; i < num; i++) {
      eval(hand).push(eval(deck)[0]);
      eval(deck).splice(0, 1);
    }
    eval(`set${hand}`)((hand) => [...hand]);
  };

  const summon = (hand, field, card) => {
    eval(field).push(card);
    const newArr = eval(hand).filter((item) => item.id !== card.id);
    eval(`set${hand}`)(newArr);
  };

  const handleStartGame = () => {
    setcycleP1((cycle) => ({ ...cycle, draw: true }));
  };

  const updateField = (field, card) => {
    const indexOfCard = eval(field).findIndex((i) => i.id === card.id);
    eval(field).splice(indexOfCard, 1, card);
    eval(`set${field}`)(eval(field));
  };

  return (
    <div className='game'>
      <button onClick={handleStartGame}>Start</button>
      <div className='player player1'>
        <LifePoints points={lifePtsP1} />
        <Deck1
          deck1={deck1}
          setdeck1={setdeck1}
          cycleP1={cycleP1}
          setcycleP1={setcycleP1}
        />
        <Hand1
          hand1={hand1}
          field1={field1}
          summon={summon}
          setSummonCount={setSummonCount}
          summonCount={summonCount}
        />
        <Graveyard1 graveyard1={graveyard1} setgraveyard1={setgraveyard1} />
        <Field1
          field1={field1}
          setfield1={setfield1}
          updateField={updateField}
          setAttackerPts={setAttackerPts}
          attackerPts={attackerPts}
          cycleP1={cycleP1}
        />
        <Controls cycleP1={cycleP1} setcycleP1={setcycleP1} />
      </div>
      <div className='player player2'>
        <LifePoints points={lifePtsP2} />
        <Deck2 deck2={deck2} setdeck2={setdeck2} hand2={hand2} />
        <Hand2 Draw={Draw} deck1={deck2} hand2={hand2} />
        <Graveyard2 graveyard2={graveyard2} setgraveyard2={setgraveyard2} />
        <Field2 field2={field2} setfield2={setfield2} />
      </div>
    </div>
  );
}

import React, { useState, createContext } from 'react';

export const PlayerContext = createContext();

const PlayerCtxProvider = (props) => {
  const [lifePtsP1, setlifePtsP1] = useState({ pts: 4000 });
  const [lifePtsP2, setlifePtsP2] = useState({ pts: 3000 });
  const [cycleP1, setcycleP1] = useState({
    newTurn: true,
    draw: false,
    phase1: false,
    atkPhase: false,
    endPhase: false,
  });
  const [cycleP2, setcycleP2] = useState({
    newTurn: false,
    draw: false,
    phase1: false,
    atkPhase: false,
    endPhase: false,
  });
  return (
    <PlayerContext.Provider
      value={{
        lifePtsP1,
        setlifePtsP1,
        cycleP1,
        setcycleP1,
        cycleP2,
        setcycleP2,
        lifePtsP2,
        setlifePtsP2,
      }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerCtxProvider;

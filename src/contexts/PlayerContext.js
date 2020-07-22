import React, { useState, createContext } from 'react';

export const PlayerContext = createContext();

const PlayerCtxProvider = (props) => {
  const [lifePtsP1, setLifePtsP1] = useState({ pts: 4000 });
  const [lifePtsP2, setLifePtsP2] = useState({ pts: 3000 });
  const [cycle, setCycle] = useState({
    turn: true,
    draw: false,
    phase1: false,
    atkPhase: false,
    endPhase: false,
  });
  return (
    <PlayerContext.Provider
      value={{
        lifePtsP1,
        setLifePtsP1,
        cycle,
        setCycle,
        lifePtsP2,
        setLifePtsP2,
      }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerCtxProvider;

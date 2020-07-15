import React, { useState, createContext } from 'react';

export const PlayerContext = createContext();

const PlayerCtxProvider = (props) => {
  const [lifePtsP1, setLifePtsP1] = useState({ pts: 4000 });
  const [lifePtsP2, setLifePtsP2] = useState({ pts: 3000 });
  return (
    <PlayerContext.Provider
      value={{
        lifePtsP1,
        setLifePtsP1,
        lifePtsP2,
        setLifePtsP2,
      }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerCtxProvider;

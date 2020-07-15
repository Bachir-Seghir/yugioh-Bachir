import React from 'react';
import Game from './Game';

import CardCtxProvider from '../contexts/CardContext.js';
import PlayerCtxProvider from '../contexts/PlayerContext.js';

export default function App() {
  return (
    <PlayerCtxProvider>
      <CardCtxProvider>
        <Game />
      </CardCtxProvider>
    </PlayerCtxProvider>
  );
}

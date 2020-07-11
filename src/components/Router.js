import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Deck from './Deck';
import App from './App';
import Field from './Field';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/deck' component={Deck} />
        <Route path='/field' component={Field} />
      </Switch>
    </BrowserRouter>
  );
}

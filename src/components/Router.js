import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </BrowserRouter>
  );
}

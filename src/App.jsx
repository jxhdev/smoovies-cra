// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from './data.json';
import './style.css';

const App = () => (
  <div className="app">
    <Search shows={preload.shows} />
  </div>
);

export default App;

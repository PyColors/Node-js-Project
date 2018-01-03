import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { loadJSON } from './utils/config';
import './index.css';

import App from './App';
import Home from './containers/home/Home';
import About from './containers/about/About';
import NotFound from './containers/NotFound';

// Get config.json
loadJSON();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route component={App}>
      <Route component={Home}>
          <Route path="/home/:id/about/sport" component={About} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//  import App from './App';

import Home from './containers/Home/index.js'
import Form from './components/Forms/index.js'
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Home} />
    <Route path="../../components/Forms/index.js" component={Form} />
  </Switch>
  </BrowserRouter>,
  rootElement
);




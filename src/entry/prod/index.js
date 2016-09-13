import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import configureStore from './store';
import App from '../app';

const store = configureStore(hashHistory),
      node  = document.getElementById('app');

render(<App store={ store } history={ hashHistory }/>, node);

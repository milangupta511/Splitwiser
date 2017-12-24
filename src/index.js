import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Splitwise from './components/Splitwise';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <BrowserRouter>
    <Splitwise />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));

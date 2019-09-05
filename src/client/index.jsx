import 'babel-polyfill';
import 'airbnb-browser-shims';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';

// import 'typeface-roboto';
// import { withStyles } from '@material-ui/core/styles';

// import { Grommet } from 'grommet';
// const theme = {
//   global: {
//     font: {
//       family: 'Roboto',
//       size: '14px',
//       height: '20px',
//     },
//   },
// };

// <Grommet theme={theme} />

import App from './App';

// global styles
// import './style.scss';

ReactDOM.render(<App />, document.getElementById('app'));
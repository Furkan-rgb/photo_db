import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
  typography: {
    useNextVariants: true
  }
});

// Alert
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>,
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
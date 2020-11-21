import React, {Component} from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/layout/header';
import UserInfo from './components/userinfo';
import TableForm from './components/forms/tableForm';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Agrandir from './fonts/Agrandir/Agrandir-Regular.woff'

const agrandir = {
  fontFamily : 'Agrandir',
  src: `
    local('Agrandir'),
    url(${Agrandir}) format('woff')
  `
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Agrandir'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [agrandir],
      },
    },
  },
  palette: {
    primary: {
      main: '#F13223',
    },
    secondary: {
      main: '#ffffff',
    },
  }
});

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleHFUChange = this.handleHFUChange.bind(this)
    this.state = {
        firstYearHU: 0,
        secondYearHU: 0,
        thirdYearHU: 0
    };
  }

  handleHFUChange(nam, val) {
    this.setState({[nam]: val});
  }

  render() {
    const listOfHFUs = [this.state.firstYearHU, this.state.secondYearHU, this.state.thirdYearHU]
    return (
      <HashRouter>
        <div className="App">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <header>
              <Header />
            </header>
            <div className="content">
              <Route exact path="/" render={() => <UserInfo onHFUChange={this.handleHFUChange}/>}/>
              <Route path="/calculation" render={() => <TableForm listOfHFUs={listOfHFUs}/>}/>
            </div>
          </ThemeProvider>
        </div>
      </HashRouter>
    )
  }
}

export default App

import React, {Component} from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/layout/header';
import UserInfo from './components/userinfo';
import TableForm from './components/forms/tableForm';
import Footer from './components/footer';
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
    fontFamily: 'Agrandir',
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
      //main: '#F13223',
      main: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
    },
  }
});

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleHFUChange = this.handleHFUChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.state = {
      name: '',
      firstYearHU: 0,
      secondYearHU: 0,
      thirdYearHU: 0
    };
  }

  handleNameChange(nameChange) {
    this.setState({name: nameChange})
  }
  
  handleHFUChange(nam, val) {
    this.setState({[nam]: val})
  }

  handleNoClick() {
    console.log("hit no");
    this.setState({
      firstYearHU: 0,
      secondYearHU: 0,
      thirdYearHU: 0
    });
  }


  render() {
    const listOfHFUs = [this.state.firstYearHU, this.state.secondYearHU, this.state.thirdYearHU]
    return (
      <HashRouter>
        <div className="page-container">
          <div className="content-wrap">
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <header className="App-header">
                <Header />
              </header>
              <div className="content">
                <Route exact path="/" render={() => <UserInfo onHFUChange={this.handleHFUChange} handleNameChange={this.handleNameChange} handleNoClick={() => this.handleNoClick()}/>}/>
                <Route path="/calculation" render={() => <TableForm listOfHFUs={listOfHFUs} userName={this.state.name}/>}/>
              </div>
            </ThemeProvider>
          </div>
          <Footer/>
        </div>
      </HashRouter>
    )
  }
}

export default App

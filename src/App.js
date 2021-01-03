import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/layout/header';
import UserInfo from './components/userinfo';
import TableForm from './components/forms/tableForm';
import Footer from './components/footer';
import './App.css';
import { Container, CssBaseline, Grid } from '@material-ui/core';
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
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
    this.setState({
      firstYearHU: 0,
      secondYearHU: 0,
      thirdYearHU: 0
    });
  }

  render() {
    const listOfHFUs = [this.state.firstYearHU, this.state.secondYearHU, this.state.thirdYearHU]
    return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <Grid container spacing={1} direction="column" justify="flex-end" alignItems="stretch"> {/*min-height:105vh*/}
            <Grid container  direction="column" justify="center" alignItems="center" item xs={12} id="topGrid"> {/*min-height:93vh*/}
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Grid item>
                  <header className="App-header">
                    <Header resetNumbers={() => this.handleNoClick()}/>
                  </header>
                </Grid>
                <Grid item>
                  <Route exact path="/" render={() => <UserInfo onHFUChange={this.handleHFUChange} handleNameChange={this.handleNameChange} handleNoClick={() => this.handleNoClick()}/>}/>
                  <Route path="/calculation" render={() => <TableForm listOfHFUs={listOfHFUs} userName={this.state.name}/>}/>
                </Grid>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} id="bottomGrid">
              <Footer/>
            </Grid>
          </Grid>
        </Container>
      </BrowserRouter>
    )
  }
}

export default App

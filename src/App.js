import React, {Component} from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Header from './components/layout/header';
import UserInfo from './components/userinfo';
import TableForm from './components/forms/tableForm';
import './App.css'

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
        <div>
          <header>
            <Header />
          </header>
          <div className="content">
            <Route exact path="/" render={() => <UserInfo onHFUChange={this.handleHFUChange}/>}/>
            <Route path="/calculation" render={() => <TableForm listOfHFUs={listOfHFUs}/>}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App

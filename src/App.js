import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";
import Enter from './components/enter';
import Header from './components/layout/header';
import Userinfo from './components/userinfo';

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <div className="content">
            <Route exact path="/" component={Enter}/>
            <Route path="/userinfo" component={Userinfo}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App

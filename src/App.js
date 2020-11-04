import React, {Component} from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Enter from './components/enter';
import Header from './components/layout/header';
import UserInfo from './components/userinfo';
import TableForm from './components/forms/tableForm';

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <div className="content">
            <Route exact path="/" component={Enter}/>
            <Route path="/userinfo" component={UserInfo}/>
            <Route path="/calculation" component={TableForm}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App

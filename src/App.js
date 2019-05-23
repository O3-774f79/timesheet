import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import RouteLayout from "./componens/Layout/RouteLayout";
import './App.css';
import 'antd/dist/antd.css';
import NavMenu from './componens/Layout/HomeLayout';
import ActivityTimeSheet from './componens/Activity';
function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={NavMenu} />
          <RouteLayout path="/home" component={ActivityTimeSheet} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

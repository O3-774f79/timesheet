import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import RouteLayout from "./componens/Layout/RouteLayout";
import './App.css';
import 'antd/dist/antd.css';
import NavMenu from './componens/Layout/HomeLayout';
import ActivityTimeSheet from './componens/Activity';
import SummaryData from './componens/SummaryData/SummaryData.js'
import PageNotFound from './componens/Layout/PageNotFound'
import Login from './componens/Login/Login.js'
function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <RouteLayout path="/login" component={Login} />
          <RouteLayout path="/timesheet" component={ActivityTimeSheet} />
          <RouteLayout path="/home" component={SummaryData} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

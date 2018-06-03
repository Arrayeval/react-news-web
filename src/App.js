import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "antd/dist/antd.css";

import MediaQuery from "react-responsive";
import PCIndex from "./components/pc_index"

import MobileIndex from "./components/mobile_index"

import {Route,BrowserRouter as Router,Switch } from "react-router-dom"
import PCNewsDetails from "./components/pc_news_detail"
import MobileNewsDetails from "./components/mobile_news_detail"
import PCUserCenter from "./components/pc_usercenter"
class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <Router>
            <Switch >
              <Route exact path="/" component={PCIndex}></Route>
              <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
              <Route path="/usercenter" component={PCUserCenter}></Route>
            </Switch >
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <Router>
            <Switch >
              <Route exact path="/" component={MobileIndex}></Route>
              <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            </Switch >
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

export default App;

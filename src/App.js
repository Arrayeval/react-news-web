import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "antd/dist/antd.css";

import MediaQuery from "react-responsive";
import PCIndex from "./components/pc_index"

import MobileIndex from "./components/mobile_index"

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <PCIndex></PCIndex>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <MobileIndex></MobileIndex>
        </MediaQuery>
      </div>
    );
  }
}

export default App;

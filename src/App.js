import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import ZenQuote from './ZenQuote';
// import GitHubUserInfo from './GitHubUserInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Timer /> */}
        <ZenQuote />
        {/* <GitHubUserInfo 
        username="facebook"
        /> */}
      </div>
    );

  }
}

export default App;

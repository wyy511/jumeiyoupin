import React, { Component } from 'react';
import './assets/sass/base.scss';
import './static/font/iconfont.css';
import BNav from './components/Bnav';

class App extends Component {
  render() {
    return (
      <div>
          { this.props.children }
          <BNav></BNav>
      </div>
    );
  }
}

export default App;

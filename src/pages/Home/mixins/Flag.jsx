
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section className="t-flag font-26" style={{marginTop: this.props.marginTop}}>
        <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""/>
        { this.props.title }
      </section>
    );
  }
}

export default App;

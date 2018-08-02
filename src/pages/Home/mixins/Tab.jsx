
import React, { Component } from 'react';

class App extends Component {
  tabChange (type) {
    this.setState({
      type: type
    })
    this.props.tabChange(type);
  }
  constructor (props) {
    super(props);
    this.state = {
      type: 'today'
    }
  }
  render() {
    return (
      <section className="t-tab">
        <ul className="t-tab-list">
          <li className={['t-tab-item', 'font-28', this.state.type === 'today' ? 'active': ''].join(' ')} onClick={ this.tabChange.bind(this, 'today') }>今日10点上新</li>
          <li className={['t-tab-item', 'font-28', this.state.type === 'tomorrow' ? 'active': ''].join(' ')} onClick={ this.tabChange.bind(this, 'tomorrow') }>明日10点预告</li>
        </ul>
      </section>
    );
  }
}

export default App;

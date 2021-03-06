
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <NavLink key={ index } className="b-list-item" to='/detail' style={{height: this.props.height, marginBottom: this.props.marginBottom}}>
          <img src={ item.img } alt=""/>
        </NavLink>
      )
    })
    return (
      <section className="b-list" style={{marginBottom: this.props.listBottom}}>
        { list }
      </section>
    );
  }
}

export default App;

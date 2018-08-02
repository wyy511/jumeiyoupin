
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <NavLink key={ index } className="b-activelist-item" to='/detail' style={{width: this.props.width, height: this.props.height}}>
          <img src={ item.img } alt=""/>
        </NavLink>
      )
    })
    return (
      <section className="b-activelist clearfix" style={{marginTop: this.props.listTop}}>
        { list }
      </section>
    );
  }
}

export default App;

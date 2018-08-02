
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    const deals = this.props.deals.map((item, index) => {
      return (
        <NavLink key={ index } className="t-deals-item" to={ item.url }>
          <img src={ item.img } alt=""/>
          <p className="font-20">{ item.title }</p>
        </NavLink>
      )
    })
    return (
      <section className="t-deals">
        { deals }
      </section>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <NavLink key={ index } className="b-goodlist-item" to='/detail'>
          <img className="cover" src={ item.img } alt=""/>
          <img className="deal" src={ item.deal } alt=""/>
          <div className="list-content font-26">
            <div className="desc">{ item.desc }</div>
            <div className="price">
              <span>{ item.unit }{ item.newPrice }</span>
              <span className="old">
                <span>{ item.unit }</span>
                <span className="oldPrice">
                { item.oldPrice }
                </span>
                
              </span>
            </div>
          </div>
        </NavLink>
      )
    })
    return (
      <section className="b-goodlist">
        { list }
      </section>
    );
  }
}

export default App;

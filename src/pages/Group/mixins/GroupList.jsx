import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <NavLink key={ index } className="t-grouplist-item font-20 clearfix" to='/group/recommend'>
          <div className="cover">
            <img src={ item.img } alt=""/>
            <div className="comment">{ item.comment }</div>
          </div>
          <div className="content">
            <p className="content-desc"><span className="group">[{ item.group }人团]</span>{ item.title }</p>
            <div className="content-price">
              <div className="price">
                <span className="new font-30">{ item.unit }{ item.newPrice }</span>
                <span className="old">{ item.unit }{ item.oldPrice }</span>
                <p className="single">单买价{ item.unit }{ item.single }</p>
              </div>
              <div className="btn">去开团</div>
            </div>
          </div>
        </NavLink>
      )
    })
    return (
      <div className="t-grouplist">
        { list }
      </div>
    );
  }
}

export default App;

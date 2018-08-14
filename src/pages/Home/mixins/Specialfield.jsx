
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <NavLink key={ index } className="b-specialfield-item font-30" to='/detail' style={{width: this.props.width, height: this.props.height}}>
          <div className="cover">
            <img src={ item.img } alt=""/>
            <div className="price font-22">{ item.price }</div>
          </div>
          <div className="content clearfix">
            <div className="desc">
              <div className="title">{ item.title }</div>
              <div className="time font-22">仅剩{ item.day > 9 ? item.day : '0' + item.day }天 { item.hour > 9 ? item.hour : '0' + item.hour }时 { item.min > 9 ? item.min : '0' + item.min }分</div>
            </div>
            <img className="logo" src={ item.logo } alt=""/>
          </div>
          
        </NavLink>
      )
    })
    return (
      <section className="b-specialfield clearfix" style={{marginTop: this.props.listTop, marginBottom: this.props.listBottom}}>
        { list }
      </section>
    );
  }
}

export default App;

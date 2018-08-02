import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <section className="b-nav">
        <NavLink exact to="/" activeClassName="active" className="b-nav-item home font-20">
          <i className="icon iconfont icon-home font-36"></i>首页
        </NavLink>
        <NavLink exact to="/group/recommend" activeClassName="active" className="b-nav-item group font-20">
          <i className="icon iconfont icon-group font-36"></i>拼团
        </NavLink>
        <NavLink exact to="/cart" activeClassName="active" className="b-nav-item cart font-20">
          <i className="icon iconfont icon-cart font-36"></i>购物车
        </NavLink>
        <NavLink exact to="/me" activeClassName="active" className="b-nav-item me font-20">
          <i className="icon iconfont icon-me font-36"></i>我的
        </NavLink>
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }
  onScroll () {
    // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    // if (this.refs.Tnav.offsetTop <= scrollTop) {
    //   this.setState({
    //     _style: {
    //       position: 'fixed'
    //     }
    //   })
    // } else {
    //   this.setState({
    //     _style: {
    //       position: 'absolute'
    //     }
    //   })
    // }
  }
  constructor (props) {
    super(props);
    this.state = {
      // _style: {}
    }
  }
  render() {
    const navs = this.props.navlist.map((nav) => {
      return (
        <NavLink key={ nav.name } exact to={ nav.url } activeClassName="active" className="t-nav-item font-20">
          { nav.name }
        </NavLink>
      )
    })
    return (
      <section className="t-nav" ref="Tnav">
        { navs }
      </section>
    );
  }
}

export default App;

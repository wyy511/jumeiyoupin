import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Tnav from '../../components/Tnav';
import Flag from './mixins/Flag'
import Specialfield from './mixins/Specialfield';
import '../../mock/home-brand.js';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      navlist: [ 
        {
          name: '首页',
          url: '/'
        },
        {
          name: '极速免税店',
          url: '/home/freeduty'
        },
        {
          name: '母婴',
          url: '/home/mother'
        },
        {
          name: '轻奢',
          url: '/home/luxury'
        },
        {
          name: '名品特卖',
          url: '/home/brand'
        }
      ],
      specialField: [],
      listTitle: '精选活动'
    }
  }
  componentDidMount () {
    this.getList();
  }
  getList () {
    axios.get(`/api/home/brand`)
    .then((res) => {
      this.setState({
        specialField: res.data.specialField
      })
    })
  }
  render() {
    // const pathname = this.props.location.pathname;
    return (
      <div className="luxury">
        <Tnav navlist={ this.state.navlist }/>
        <Flag title={ this.state.listTitle }/>
        <Flag title={ this.state.listTitle }/>
        <Specialfield list={ this.state.specialField }/>
      </div>
    );
  }
}

export default withRouter(App);

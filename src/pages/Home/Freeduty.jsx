import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Tnav from '../../components/Tnav';
import Deals from './mixins/Deals'
import Flag from './mixins/Flag'
import Goodlist from './mixins/Goodlist'
import '../../mock/freeduty.js';
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
      deals: [],
      goodList: [],
      listTitle: '今日团购，每天10点上新'
    }
  }
  componentDidMount () {
    this.getList();
  }
  getList () {
    axios.get(`/api/freeduty`)
    .then((res) => {
      this.setState({
        deals: res.data.dealList,
        goodList: res.data.goodList
      })
    })
  }
  render() {
    // const pathname = this.props.location.pathname;
    return (
      <div className="freeduty">
        <Tnav navlist={ this.state.navlist }/>
        <Deals deals={ this.state.deals }/>
        <Flag title={ this.state.listTitle }/>
        <Goodlist list={ this.state.goodList }/>
      </div>
    );
  }
}

export default withRouter(App);

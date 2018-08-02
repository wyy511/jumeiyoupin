import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Tnav from '../../components/Tnav';
import '../../mock/home.js';
import Tab from './mixins/Tab'
import List from './mixins/List'
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
      list: [],
      todayList: [],
      tomorrowList: []

    }
  }
  componentDidMount () {
    this.getList();
  }
  getList () {
    axios.get(`/api/home`)
    .then((res) => {
      this.setState({
        list: res.data.todayList,
        todayList: res.data.todayList,
        tomorrowList: res.data.tomorrowList
      })
    })
  }
  tabChange (type) {
    this.setState({
      list: this.state[type+'List']
    })
  }
  render() {
    // const pathname = this.props.location.pathname;
    return (
      <div className="App">
        <Tnav navlist={ this.state.navlist }/>
        <Tab tabChange={ this.tabChange.bind(this) }/>
        <List list={ this.state.list }/>
      </div>
    );
  }
}

export default withRouter(App);

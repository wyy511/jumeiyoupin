import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Tnav from '../../components/Tnav';
import '../../mock/home.js';
import Tab from './mixins/Tab'
import List from './mixins/List'
import ScrollLoad from '../../components/ScrollLoad';
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
      tomorrowList: [],
      scrollTextStatus: -1,
      // true滚动请求中 false请求结束
      isAppending: false,
      // count用来测试滚动了几次停止
      count: 0
    }
  }
  componentDidMount () {
    this._isMounted = true;
    this.getList();
  }
  componentWillUnmount () {
    this._isMounted = false;
  }
  getList () {
    this.setState({
      isAppending: true,
      scrollTextStatus: 0
    })
    axios.get(`/api/home`)
    .then((res) => {
      if (this._isMounted && this.state.count <= 10) {
        this.setState({
          isAppending: false,
          list: this.state.todayList.concat(res.data.todayList),
          todayList: this.state.todayList.concat(res.data.todayList),
          tomorrowList: this.state.todayList.concat(res.data.tomorrowList),
          count: this.state.count + 1
        })
      } else {
        this.setState({
          scrollTextStatus: 2
        })
      }
    }, (err) => {
      console.log(err);
    })
  }
  tabChange (type) {
    this.setState({
      list: this.state[type+'List']
    })
  }
  reachEnd () {
    if (this.state.isAppending) {
      return;
    }
    if (this._isMounted) {
      this.setState({
        isAppending: true
      })
      this.getList();
    }
  }
  render() {
    // const pathname = this.props.location.pathname;
    return (
      <div className="App">
        <ScrollLoad
          beforeDistance={ 100 }
          reachEnd={ this.reachEnd.bind(this) }
          status={this.state.scrollTextStatus}
        >
          <Tnav navlist={ this.state.navlist }/>
          <Tab tabChange={ this.tabChange.bind(this) }/>
          <List list={ this.state.list } listBottom="0.4rem"/>
        </ScrollLoad>
      </div>
    );
  }
}

export default withRouter(App);

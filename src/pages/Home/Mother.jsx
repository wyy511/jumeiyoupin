import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Tnav from '../../components/Tnav';
import '../../mock/home-mother.js';
import Flag from './mixins/Flag';
import List from './mixins/List';
import Todayactive from './mixins/Todayactive';
import Specialfield from './mixins/Specialfield';
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
      todayActive: [],
      todayDiscount: [],
      hotBrand: [],
      specialField: [],
      listTitle1: '特惠价，仅限今日',
      listTitle2: '今日特惠，活动推荐',
      listTitle3: '全球热销品牌',
      listTitle4: '疯抢专场 早10点上新',
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
    axios.get(`/api/home/home-mother`)
    .then((res) => {
      console.log(1)
      if (this._isMounted && this.state.count <= 10) {
        this.setState({
          isAppending: false,
          list: this.state.list.concat(res.data.todayList),
          todayList: this.state.todayList.concat(res.data.todayList),
          todayActive: this.state.todayActive.concat(res.data.todayActive),
          todayDiscount: this.state.todayDiscount.concat(res.data.todayDiscount),
          hotBrand: this.state.hotBrand.concat(res.data.hotBrand),
          specialField: this.state.specialField.concat(res.data.specialField),
          count: this.state.count + 1
        })
      } else {
        this.setState({
          scrollTextStatus: 2
        })
      }
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
      <section className="home">
        <ScrollLoad
          beforeDistance={ 100 }
          reachEnd={ this.reachEnd.bind(this) }
          status={this.state.scrollTextStatus}
        >
          <Tnav navlist={ this.state.navlist }/>
          <Flag title={ this.state.listTitle1 } marginTop="0.92rem"/>
          <List list={ this.state.list } height="4.1rem" marginBottom="0" listBottom="0rem"/>
          <Flag title={ this.state.listTitle2 }/>
          <Todayactive list={ this.state.todayActive }/>
          <Todayactive list={ this.state.todayDiscount } listTop="0.2rem" height="1.875rem"/>
          <Flag title={ this.state.listTitle3 }/>
          <Todayactive list={ this.state.hotBrand } width="25%" height="1.875rem" listTop="0"/>
          <Flag title={ this.state.listTitle4 }/>
          <Specialfield list={ this.state.specialField } listBottom="0.4rem"/>
        </ScrollLoad>
      </section>
    );
  }
}

export default withRouter(App);

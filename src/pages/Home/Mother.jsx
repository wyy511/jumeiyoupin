import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Tnav from '../../components/Tnav';
import '../../mock/home-mother.js';
import Flag from './mixins/Flag';
import List from './mixins/List';
import Todayactive from './mixins/Todayactive';
import Specialfield from './mixins/Specialfield';
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
      listTitle4: '疯抢专场 早10点上新'
    }
  }
  componentDidMount () {
    this.getList();
  }
  getList () {
    axios.get(`/api/home/home-mother`)
    .then((res) => {
      this.setState({
        list: res.data.todayList,
        todayList: res.data.todayList,
        todayActive: res.data.todayActive,
        todayDiscount: res.data.todayDiscount,
        hotBrand: res.data.hotBrand,
        specialField: res.data.specialField
      })
    })
  }
  render() {
    // const pathname = this.props.location.pathname;
    return (
      <section className="home">
        <Tnav navlist={ this.state.navlist }/>
        <Flag title={ this.state.listTitle1 } marginTop="0.92rem"/>
        <List list={ this.state.list } height="4.1rem" marginBottom="0" listBottom="0rem"/>
        <Flag title={ this.state.listTitle2 }/>
        <Todayactive list={ this.state.todayActive }/>
        <Todayactive list={ this.state.todayDiscount } listTop="0.2rem" height="1.875rem"/>
        <Flag title={ this.state.listTitle3 }/>
        <Todayactive list={ this.state.hotBrand } listTop="0.2rem" width="25%" height="1.875rem" listTop="0"/>
        <Flag title={ this.state.listTitle4 }/>
        <Specialfield list={ this.state.specialField }/>
      </section>
    );
  }
}

export default withRouter(App);

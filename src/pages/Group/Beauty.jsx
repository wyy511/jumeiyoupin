import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Tnav from '../../components/Tnav';
import '../../mock/group-beauty.js';
import GroupList from './mixins/GroupList'
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      navlist: [ 
        {
          name: '推荐',
          url: '/group/recommend'
        },
        {
          name: '母婴健康',
          url: '/group/mother'
        },
        {
          name: '家居',
          url: '/group/fitting'
        },
        {
          name: '内衣',
          url: '/group/clothes'
        },
        {
          name: '美妆',
          url: '/group/beauty'
        }
      ],
      list: []
    }
  }
  componentDidMount () {
    this.getList();
  }
  getList () {
    axios.get(`/api/group/beauty`)
    .then((res) => {
      this.setState({
        list: res.data.beautyList
      })
    })
  }
  render() {
    // const pathname = this.props.location.pathname;
    return (
      <div className="App">
        <Tnav navlist={ this.state.navlist }/>
        <GroupList list={this.state.list}/>
      </div>
    );
  }
}

export default withRouter(App);

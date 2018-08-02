import Mock from 'mockjs'


export default Mock.mock('/api/home/luxury', (req, res) => {
  return {
    specialField: [
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/006/6845_std/5b5ed684dad14_2048_1024.jpg?1533120309&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: 'Ferragamo全品类专场',
        price: '全场3.3折起',
        day: 4,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/19012.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/006/6845_std/5b5a8b17a50a1_2048_1024.jpg?1532678447&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '子初品牌专场',
        price: '全场3.3折起',
        day: 0,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/6772.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/006/6845_std/5b5eb1e88fb37_2048_1024.jpg?1532945967&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: 'PRADA箱包腰带专场',
        price: '全场3.2折起',
        day: 10,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/6808.jpg'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/006/6606_std/5b5aea6572652_2048_1024.jpg?1533117425&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: 'COACH箱包专场',
        price: '全长2.1折起',
        day: 7,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/6812.jpg'
      }
    ]
  }
})
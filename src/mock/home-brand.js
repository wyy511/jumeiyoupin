import Mock from 'mockjs'


export default Mock.mock('/api/home/brand', (req, res) => {
  return {
    specialField: [
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/006/6415_std/5b5eb7dcd082e_2048_1024.jpg?1533014077&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '清凉一夏 开启新世界',
        price: '全场3.3折起',
        day: 4,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/16582.jpg'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/005/5223_std/5b5e84e84848d_2048_1024.jpg?1532936535&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '莫妮卡女包品牌团',
        price: '全场3.3折起',
        day: 0,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/15016.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/004/4927_std/5b5ece3aed1e3_2048_1024.jpg?1532939852&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '特百惠盛夏大促',
        price: '全场3.2折起',
        day: 10,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/14683.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/004/4854_std/5b61682eee3c2_2048_1024.jpg?1533110695&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '阿弗之吻 夏末清仓品牌团',
        price: '全长2.1折起',
        day: 7,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/10847.jpg'
      }
    ]
  }
})
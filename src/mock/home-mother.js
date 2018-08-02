import Mock from 'mockjs'


export default Mock.mock('/api/home/home-mother', (req, res) => {
  return {
    todayList: [
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1532672630.jpeg?imageView2/2/w/640/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1532930811.jpeg?imageView2/2/w/640/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp6.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1532930890.jpeg?imageView2/2/w/640/q/90',
        url: '/home/mother'
      }
    ],
    todayActive: [
      {
        img: 'http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1532487111.jpeg?imageView2/2/w/320/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1532934759.jpeg?imageView2/2/w/320/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1532661444.jpeg?imageView2/2/w/320/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1532421276.jpeg?imageView2/2/w/320/q/90',
        url: '/home/mother'
      }
    ],
    todayDiscount: [
      {
        img: 'http://mp6.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1532051730.png?imageView2/2/w/320/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1530067636.jpeg?imageView2/2/w/320/q/90',
        url: '/home/mother'
      }
    ],
    hotBrand: [
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543173.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543700.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543621.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543472.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543264.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      },
      {
        img: 'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498559288.jpeg?imageView2/2/w/160/q/90',
        url: '/home/mother'
      }
    ],
    specialField: [
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/006/6355_std/5b482074cd852_1024_512.jpg?1532498633&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '德国爱他美品牌专场',
        price: '全场89元起',
        day: 4,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/6697.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/003/3325_std/5b515a366ec44_1024_512.jpg?1532496625&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '子初品牌专场',
        price: '满199减100封顶',
        day: 0,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/12802.jpg'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/005/5869_std/5b20b9c958e8d_1024_512.jpg?1532509421&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '贝亲品牌专场',
        price: '满129减30 满159减50',
        day: 10,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/8761.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/005/5869_std/5a2fa1151b6ea_1024_512.jpg?1532498106&imageView2/2/w/640/q/90',
        url: '/home/mother',
        title: '德国爱他美品牌专场',
        price: '单罐低至109元',
        day: 7,
        hour: 0,
        min: 2,
        logo: 'http://p0.jmstatic.com/brand/logo_180/8026.jpg'
      }
    ]
  }
})
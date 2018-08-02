import Mock from 'mockjs'


export default Mock.mock('/api/home', (req, res) => {
  return {
    todayList: [
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/006/6778_std/5b6001703208b_2048_710.jpg?1533018535&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=plt_ht_zh_ahc_180801app&type=jmstore'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/007/7116_std/5b5ecccaa6697_2048_710.jpg?1533003760&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=ppt_ht_o_yaozhuang_180801app&type=jmstore'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/000/234_std/5b5ab8749f802_2048_710.jpg?1533109167&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=ppt_yunifang_20180801_app&type=jmstore'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/006/6574_std/5b601e59eae21_2048_710.jpg?1533027030&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=ppt_obmskincara_180802&type=jmstore'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/006/6415_std/5b5eb9549cedb_2048_710.jpg?1533014077&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=bcw801app&type=jmstore'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/006/6845_std/5b5eb1f1b021a_2048_710.jpg?1532945967&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=ppt_prada_180801_app&type=jmstore'
      }
    ],
    tomorrowList: [
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/000/49_std/5b60344f91052_2048_710.jpg?1533031511&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=meifubao_180802_app&type=jmstore'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/005/5869_std/5b580ee19d5e4_2048_710.jpg?1532497639&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=my_hwwsj_180802app&type=jmstore'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/000/65_std/5b6154c61416a_2048_710.jpg?1533105412&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=2018802cosmetic_691_app&type=jmstore'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/003/3880_std/5b600a061ef48_2048_710.jpg?1533032520&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=ppt_adidas_shoes_20180802_app&type=jmstore'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/004/4927_std/5b5ac5a0d8a3c_2048_710.jpg?1532939852&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=2018_0802_app&type=jmstore'
      },
      {
        img: 'http://mp5.jmstatic.com//jmstore/image/000/000/610_std/5b5945bf81204_2048_710.jpg?1532938930&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=ppt_sekkisei_180806_app&type=jmstore'
      },
      {
        img: 'http://mp6.jmstatic.com//jmstore/image/000/006/6845_std/5b5ff4457a1ff_2048_710.jpg?1533033350&imageView2/2/w/800/q/90',
        url: 'http://h5.jumei.com/activity/detailv2?label=ppt_gucci_180802_app&type=jmstore'
      }
    ]
  }
})
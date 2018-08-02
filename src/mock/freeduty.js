import Mock from 'mockjs'


export default Mock.mock('/api/freeduty', (req, res) => {
  return {
    dealList: [
      {
        img: '//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70',
        url: '/home/freeduty',
        title: '海外直供'
      },
      {
        img: '//mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70',
        url: '/home/freeduty',
        title: '原装正品'
      },
      {
        img: '//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70',
        url: '/home/freeduty',
        title: '急速到货'
      },
      {
        img: '//mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70',
        url: '/home/freeduty',
        title: '轻松退货'
      }
    ],
    goodList: [
      {
        img: 'http://mp5.jmstatic.com/product/002/357/2357602_std/2357602_1000_1000.jpg?v=1499420640&imageView2/2/w/264/q/90',
        url: '/home/freeduty',
        desc: 'Elta MD洁面乳207ml，绵密泡沫让你洗出幸福感！',
        oldPrice: 139,
        newPrice: 108,
        unit: '￥',
        deal: 'http://p0.jmstatic.com/banner/area/000/000/029.jpg'
      },
      {
        img: 'http://mp6.jmstatic.com/deal_product/hh/tz/ht180801p1308285t1zh/ht180801p1308285t1zh_1000_1000.jpg?imageView2/2/w/240/q/90',
        url: '/home/freeduty',
        desc: '贝德玛深层舒妍卸妆水500ml，卸妆+护肤一起搞定！',
        oldPrice: 95,
        newPrice: 228,
        unit: '￥',
        deal: 'http://p0.jmstatic.com/banner/area/000/000/029.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com/product/003/246/3246372_std/3246372_1000_1000.jpg?v=1483939436&imageView2/2/w/264/q/90',
        url: '/home/freeduty',
        desc: '吕舒盈清润洗发水，清爽到忘记3天没洗头！',
        oldPrice: 39.9,
        newPrice: 90,
        unit: '￥',
        deal: 'http://p0.jmstatic.com/banner/area/000/000/029.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com/product/002/185/2185991_std/2185991_1000_1000.jpg?v=1490579530&imageView2/2/w/264/q/90',
        url: '/home/freeduty',
        desc: '官方授权】Eau Precieuse祛痘珍贵水375ml，告别油皮痘肌！',
        oldPrice: 55,
        newPrice: 79,
        unit: '￥',
        deal: 'http://p0.jmstatic.com/banner/area/000/000/029.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com/product/003/426/3426004_std/3426004_1000_1000.jpg?v=1490789863&imageView2/2/w/264/q/90',
        url: '/home/freeduty',
        desc: '碧柔含水清爽防晒50g，让你不怕晒！',
        oldPrice: 55,
        newPrice: 69,
        unit: '￥',
        deal: 'http://p0.jmstatic.com/banner/area/000/000/029.jpg'
      },
      {
        img: 'http://mp6.jmstatic.com/product/002/467/2467347_std/2467347_1000_1000.jpg?v=1493724209&imageView2/2/w/264/q/90',
        url: '/home/freeduty',
        desc: '【官方授权】【肌肤晒不黑】MISTINE AQUA水感防晒霜SPF50 PA+++',
        oldPrice: 39.9,
        newPrice: 45,
        unit: '￥',
        deal: 'http://p0.jmstatic.com/banner/area/000/000/029.jpg'
      },
      {
        img: 'http://mp5.jmstatic.com/product/002/960/2960170_std/2960170_1000_1000.jpg?v=1501034887&imageView2/2/w/264/q/90',
        url: '/home/freeduty',
        desc: '【官方授权】AGE20S牛奶遮瑕气垫粉底膏，透亮嫩白到尖叫！',
        oldPrice: 158,
        newPrice: 240,
        unit: '￥',
        deal: 'http://p0.jmstatic.com/banner/area/000/000/029.jpg'
      }
    ]
  }
})
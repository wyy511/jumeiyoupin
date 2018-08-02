import Mock from 'mockjs'


export default Mock.mock('/api/group/fitting', (req, res) => {
  return {
    fittingList: [
      {
        img: 'http://mp5.jmstatic.com/product/004/401/4401982_std/4401982_1000_1000.jpg?v=1533105825&imageView2/2/w/440/q/90',
        comment: '13.3万条评论',
        group: 2,
        title: '【手机专享】植护三色抽纸原木纸巾30包整箱装',
        oldPrice: 150,
        newPrice: 39.9,
        unit: '￥',
        single: 49.9
      },
      {
        img: 'http://mp5.jmstatic.com/product/003/892/3892788_std/3892788_1000_1000.jpg?v=1522808748&imageView2/2/w/440/q/90',
        comment: '2604条评论',
        group: 2,
        title: '【手机专享】植护无芯卷纸12卷*3提4层卫生纸巾',
        oldPrice: 170,
        newPrice: 85,
        unit: '￥',
        single: 105
      },
      {
        img: 'http://mp5.jmstatic.com/product/004/201/4201174_std/4201174_1000_1000.jpg?v=1533089233&imageView2/2/w/440/q/90',
        comment: '263条评论',
        group: 2,
        title: '【手机专享】慕斯维 纯棉一次性洗脸巾40抽 80抽',
        oldPrice: 1,
        newPrice: 1,
        unit: '￥',
        single: 39
      },
      {
        img: 'http://mp5.jmstatic.com/product/004/330/4330232_std/4330232_1000_1000.jpg?v=1527155683&imageView2/2/w/440/q/90',
        comment: '690条评论',
        group: 2,
        title: '【手机专享】卸妆棉化妆棉全棉盒装1080片',
        oldPrice: 39.9,
        newPrice: 39.9,
        unit: '￥',
        single: 199
      },
      {
        img: 'http://mp5.jmstatic.com/product/003/864/3864434_std/3864434_1000_1000.jpg?v=1519350849&imageView2/2/w/440/q/90',
        comment: '3033条评论',
        group: 2,
        title: '【手机专享】Ymer小麦秸秆便携竹炭牙刷8支装',
        oldPrice: 105,
        newPrice: 88,
        unit: '￥',
        single: 99
      }
    ]
  }
})
import Mock from 'mockjs'


export default Mock.mock('/api/group/mother', (req, res) => {
  return {
    motherList: [
      {
        img: 'http://mp5.jmstatic.com/product/004/433/4433544_std/4433544_1000_1000.jpg?v=1532491406&imageView2/2/w/440/q/90',
        comment: '13.3万条评论',
        group: 2,
        title: '【手机专享】子初温和滋润莹彩气垫BB霜+替换装',
        oldPrice: 39.9,
        newPrice: 39.9,
        unit: '￥',
        single: 278
      },
      {
        img: 'http://mp5.jmstatic.com/product/001/431/1431467_std/1431467_1000_1000.jpg?v=1517363779&imageView2/2/w/440/q/90',
        comment: '2604条评论',
        group: 2,
        title: '【手机专享】日本•花王拉拉裤XL44片',
        oldPrice: 170,
        newPrice: 85,
        unit: '￥',
        single: 105
      },
      {
        img: 'http://mp6.jmstatic.com/product/004/389/4389538_std/4389538_1000_1000.jpg?v=1532930878&imageView2/2/w/440/q/90',
        comment: '263条评论',
        group: 2,
        title: '【手机专享】启蒙爆款积木 自卸车/炮兵',
        oldPrice: 1,
        newPrice: 1,
        unit: '￥',
        single: 39
      },
      {
        img: 'http://mp5.jmstatic.com/product/004/267/4267620_std/4267620_1000_1000.jpg?v=1533103721&imageView2/2/w/440/q/90',
        comment: '690条评论',
        group: 2,
        title: '【手机专享】澳兰黛 孕妇专用眼贴膜提拉眼周',
        oldPrice: 39.9,
        newPrice: 39.9,
        unit: '￥',
        single: 199
      },
      {
        img: 'http://mp6.jmstatic.com/product/001/416/1416555_std/1416555_1000_1000.jpg?v=1429791535&imageView2/2/w/440/q/90',
        comment: '3033条评论',
        group: 2,
        title: '【手机专享】日本•日本花王纸尿裤L58加量',
        oldPrice: 105,
        newPrice: 88,
        unit: '￥',
        single: 99
      }
    ]
  }
})
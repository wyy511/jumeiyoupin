import Mock from 'mockjs'


export default Mock.mock('/api/group/beauty', (req, res) => {
  return {
    beautyList: [
      {
        img: 'http://mp5.jmstatic.com/product/001/242/1242698_std/1242698_1000_1000.jpg?v=1448013017&imageView2/2/w/440/q/90',
        comment: '13.3万条评论',
        group: 2,
        title: '【手机专享】SNP海洋燕窝补水精华面膜10片',
        oldPrice: 180,
        newPrice: 65,
        unit: '￥',
        single: 79
      },
      {
        img: 'http://mp6.jmstatic.com/product/002/465/2465114_std/2465114_1000_1000.jpg?v=1491185720&imageView2/2/w/440/q/90',
        comment: '6.9万条评论',
        group: 2,
        title: '【手机专享】AHC第4代全 效修复紧致眼霜30ml',
        oldPrice: 69,
        newPrice: 55,
        unit: '￥',
        single: 79
      },
      {
        img: 'http://mp5.jmstatic.com/product/003/280/3280768_std/3280768_1000_1000.jpg?v=1496912725&imageView2/2/w/440/q/90',
        comment: '263条评论',
        group: 2,
        title: '【手机专享】Kose 2017新版防水防晒喷雾',
        oldPrice: 56,
        newPrice: 56,
        unit: '￥',
        single: 90
      },
      {
        img: 'http://mp5.jmstatic.com/product/004/433/4433544_std/4433544_1000_1000.jpg?v=1532491406&imageView2/2/w/440/q/90',
        comment: '',
        group: 2,
        title: '【【手机专享】子初温和滋润莹彩气垫BB霜+替换装',
        oldPrice: 39.9,
        newPrice: 39.9,
        unit: '￥',
        single: 278
      },
      {
        img: 'http://mp6.jmstatic.com/product/001/452/1452282_std/1452282_1000_1000.jpg?v=1452594501&imageView2/2/w/440/q/90',
        comment: '3.3万条评论',
        group: 2,
        title: '【手机专享】芭妮兰致柔水润卸妆膏100ml',
        oldPrice: 148,
        newPrice: 85,
        unit: '￥',
        single: 109
      }
    ]
  }
})
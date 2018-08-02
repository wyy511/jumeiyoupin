import Mock from 'mockjs'


export default Mock.mock('/api/group/clothes', (req, res) => {
  return {
    clothesList: [
      {
        img: 'http://mp5.jmstatic.com/product/004/402/4402474_std/4402474_1000_1000.jpg?v=1530624417&imageView2/2/w/440/q/90',
        comment: '13.3万条评论',
        group: 2,
        title: '【手机专享】穗晨韩版可爱吊带夏季少女睡裙',
        oldPrice: 150,
        newPrice: 39.9,
        unit: '￥',
        single: 49.9
      },
      {
        img: 'http://mp5.jmstatic.com/product/003/835/3835916_std/3835916_1000_1000.jpg?v=1529648592&imageView2/2/w/440/q/90',
        comment: '2604条评论',
        group: 2,
        title: '【手机专享】5条浪莎内裤可爱学生棉质三角裤',
        oldPrice: 170,
        newPrice: 85,
        unit: '￥',
        single: 105
      },
      {
        img: 'http://mp5.jmstatic.com/product/003/685/3685498_std/3685498_1000_1000.jpg?v=1520322769&imageView2/2/w/440/q/90',
        comment: '263条评论',
        group: 2,
        title: '【手机专享】纯棉亲肤透气可爱内裤八条装',
        oldPrice: 1,
        newPrice: 1,
        unit: '￥',
        single: 39
      },
      {
        img: 'http://mp5.jmstatic.com/product/004/378/4378984_std/4378984_1000_1000.jpg?v=1528978233&imageView2/2/w/440/q/90',
        comment: '690条评论',
        group: 2,
        title: '【手机专享】穗晨带胸垫韩版可爱少女睡衣套装',
        oldPrice: 39.9,
        newPrice: 39.9,
        unit: '￥',
        single: 199
      },
      {
        img: 'http://mp6.jmstatic.com/product/003/587/3587210_std/3587210_1000_1000.jpg?v=1519982247&imageView2/2/w/440/q/90',
        comment: '3033条评论',
        group: 2,
        title: '【手机专享】纯棉蝴蝶结混款内裤5条礼盒装.',
        oldPrice: 105,
        newPrice: 88,
        unit: '￥',
        single: 99
      }
    ]
  }
})
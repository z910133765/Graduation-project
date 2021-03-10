// index.js文件
Component({
  data: {
  active: 0,
  list: [
    {
      "url": "/pages/index/index",
      "icon": "wap-home-o",
      "text": "首页"
    },
    {
      "url": "/pages/collect/collect",
      "icon": "orders-o",
      "text": "collect"
    },
    {
      "url": "/pages/concern/concern",
      "icon": "points",
      "text": "concern"
    },
    {
      "url": "/pages/user/user",
      "icon": "user-circle-o",
      "text": "我的"
    }
  ]
  },
  methods: {
   onChange(e) {
      this.setData({ active: e.detail });
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
   },
   init() {
       const page = getCurrentPages().pop();
       this.setData({
      　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
       });
      }
   }
});
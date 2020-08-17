//index.js
//获取应用实例
const app = getApp()
let util = require('../../utils/util')
Page({
  data: {
    listArray:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      
    })
  },
  onLoad: function () {
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      data:{
        num:6
      },
      success:(res)=>{
        for(let i = 0 ; i<res.data.length;i++){
          let result = new Date(res.data[i].posttime*1000)
          // let years = result.getFullYear();
          // let month = result.getMonth() <10 ? "0" + result.getMonth():result.getMonth();
          // let days = result.getDay() <10? "0"+ result.getDay(): result.getDay();
          let tim =  util.formatTime(result)
          let timJin = tim.split(" ")[0]
          res.data[i].posttime = timJin
        }
        this.setData({
          listArray:res.data
        })
      }
    })
  },
  getUserInfo: function(e) {
    
  }
})

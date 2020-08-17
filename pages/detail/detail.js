
let utils = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray:{},
    html:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRequest(options.id)
  },
  getRequest:function(option){
    wx.request({
      url: 'https://ku.qingnian8.com/school/show.php',
      data:{
        id:option
      },
      success:(res)=>{
        let newTime = new Date(res.data.posttime*1000)
        let resultTime = utils.formatTime(newTime)
        let resultTime2 = resultTime.split(" ")[0]
        res.data.posttime = resultTime2
        // WxParse.wxParse('article', 'html', res.data.content, this, 5); 
        this.setData({
          dataArray:res.data,
          html:res.data.content
        })
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
let utils = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArray:[],
    show:true,
    num:2
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getRequest(),
   wx.showLoading({
    title: '加载中',
    mask:false
  })
  },
  getRequest:function(p=1,n=6){
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      data:{
        num:n,
        page:p
      },
     
      success:(res)=>{
        
        for(let i = 0; i<res.data.length;i++){
          let result = new Date(res.data[i].posttime*1000)
          let tim = utils.formatTime(result)
          let tim2 = tim.split(" ")[0]
          res.data[i].posttime = tim2
        }
        let oldArray = res.data
        this.data.listArray =  this.data.listArray.concat(oldArray)
        this.setData({
          listArray:this.data.listArray
        })
        wx.hideLoading()    
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
    this.getRequest(1)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let p = this.data.num++
    this.getRequest(p)
    if(p>3){
      this.setData({
        show:false
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
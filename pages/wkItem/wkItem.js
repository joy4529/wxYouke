// pages/wkItem/wkItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wkArray:[],
    show:true,
    num:2,
    cid:0,
    titleArray:[],
    length:0,
    Initial:0,
    idx:0
  },
  getRequest:function(num,page,cid=17){
    wx.request({
      url: 'https://ku.qingnian8.com/school/works.php',
      data:{
        num:num,
        page:page,
        cid:cid,
      },
      success:(res)=>{
        let newWkArray = res.data
        this.data.wkArray = this.data.wkArray.concat(newWkArray)
        this.setData({
          wkArray:this.data.wkArray,
          length:res.data.length
        })
        if(res.data.length < 7){
          this.setData({
            show:false
          })
        }
      }
    })
  },

  getTitleRequest:function(){
    wx.request({
      url: 'https://ku.qingnian8.com/school/infoclass.php',
      success:(res)=>{
        res.data[0].classname="全部"
        this.setData({
          titleArray:res.data
        })
        this.clickTitle();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      cid:options.cid,
      idx:options.idx
    })


    this.getRequest(7,1,this.data.cid)

    // if(this.data.length > 1){
      
    // }
    this.getTitleRequest();
    
  },
  clickTitle:function(e){
    if(!e){
      var cid = this.data.cid
      var index = this.data.idx
    }else{
      var cid = e.currentTarget.dataset.cid
      var index =  e.currentTarget.dataset.index
    }
    let itemWidth 
    try{
      const res = wx.getSystemInfoSync()
      let windowWidth = res.windowWidth
      itemWidth = windowWidth /5
    }catch(e){
      console.log(e)
    }
    let scrollLength = (index -2)*itemWidth
    this.setData({
      scrollLength:scrollLength,
      wkArray:[]
    })
    this.getRequest(7,1,cid)
    this.setData({
      cid:cid,
      num:2,
      idx:index
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
    this.getRequest(7,this.data.num++,this.data.cid)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
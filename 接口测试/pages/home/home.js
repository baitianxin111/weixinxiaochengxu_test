// pages/home/home.js
// console.log(window.screen.height);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    height: 0,
    datas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pageIndex = 1;
    // 只要页面存在，数组中的数据就会一直存在，没有必要再返回这个页面的时候，重新请求数据
    this.loadData();
  },
  // 下拉到底部
  loadData:function(){
    wx.showLoading({
      title:'正在加载中... ...',
      mask:true
    })
    console.log("ok ");
    var self = this;
    wx.request({
      url: 'https://route.showapi.com/255-1?showapi_appid=40104&showapi_sign=f5b0e550387b4dc2b130403d047f6d45&type=41&page='+self.pageIndex,
      method: "GET",
      success: function (res) {
        console.log(res);
        wx.hideLoading();
        if (res.statusCode == 200) {
          self.setData({
            // 键值对的方式
            // 通过接口获得到的（第二页，第三页数据）。通过concat吧2个数组链接到了一起
            datas: self.data.datas.concat(res.data.showapi_res_body.pagebean.contentlist) 
          })
          
            wx.stopPullDownRefresh();
           console.log(self.data.datas);
        } else {
          console.log(res.errMsg);
        }

      },
      fail: function (res) {
        console.log(res);
      },

    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    wx.getSystemInfo({
      success:function(res){
          self.setData({
            height: res.screenHeight
          });
      }
    });
   
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
    this.loadData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
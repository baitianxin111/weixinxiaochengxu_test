// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   datas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pageIndex = 1;
    this.loadData();
   
  },
  loadData:function(){
    var self = this;
    wx.request({
      url: 'https://route.showapi.com/213-4?showapi_appid=40104&showapi_sign=f5b0e550387b4dc2b130403d047f6d45&topid=4',
      method: "GET",
      success: function (res) {
        if (res.statusCode == 200) {
          self.setData({
            datas: res.data.showapi_res_body.pagebean.songlist
          })
          console.log(self.data.datas);
          console.log(res);

        } else {
          console.log(res.errMsg);
        }

      },
      fail: function (res) {
        console.log(res.errMsg);

      }
    });
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
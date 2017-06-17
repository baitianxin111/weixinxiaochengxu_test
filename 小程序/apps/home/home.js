// apps/home/home.js
var app = getApp();
Page({

changeTitle:function(){
  this.setData({
    title: "你好！中华！",
    textColor: "redColor"
  });
},


  /**
   * 页面的初始数据
   */
  data: {
    title:"你好！小程序！",
    list:["ere","dad","dfasdf","dfa"]
   
  },
  nextPage:function(){
    wx.navigateTo({
      url: '../homeDetail/homeDetail',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    console.log("生命周期")
   app.myFun();
   console.log(app.data.usename)
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
App({
  // 监听小程序的初始化的函数，初始化的时候调用
  onLaunch: function () {
    // Do something initial when launch.
    console.log("init");
  },
  // 页面内容已经显示的状态
  onShow: function (  ) {
    // Do something when show.
    console.log("show");
  },
  // 退出小程序，页面消失的时候状态
  onHide: function () {
    // Do something when hide.
    console.log("hide");
  },
  // 加载小程序出现错误的时候
  onError: function (msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  myFunction:function(){
    console.log("my function");
  }

})
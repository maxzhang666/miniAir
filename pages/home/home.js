// miniprogram/pages/home/home.js

var a1 = wx.createInnerAudioContext()
var a2 = wx.createInnerAudioContext()
var a3 = wx.createInnerAudioContext()
var hehe = 0
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    想要源码直接找我吧12:'',
    作者微信4:'qnds2021',
    想要源码直接找我吧3:'',
    a1: 0,
    o:16,
    s:1,
    v1:0,
    想要源码直接找我吧1:'',
    作者微信:'qnds2021',
    想要源码直接找我吧:''
  },

  clickSSS(){
    this.d()
    if(this.data.o>16){
      this.setData({
        o: this.data.o - 1
      })
    }else{
      wx.showToast({
        icon:'error',
        title: '已到最小温度啦',
      })
    }
  },
  clickAdd(){
    this.d()
    if(this.data.o<31){
      this.setData({
        o: this.data.o + 1
      })
    }else{
      wx.showToast({
        icon:'error',
        title: '已到最大温度啦',
      })
    }
  },
  p(e){
    this.d()
    this.setData({
      s: e.currentTarget.dataset.t
    })
  },
  
  lx(){
    wx.previewImage({
      current: 'https://mmbiz.qpic.cn/mmbiz_jpg/ibib2xsTHJkrib0lI97X8IPHRf2QVlhZ6ezKCsMLr4cahkcos4AAJrVibIMVu8KOzK1QbljTibB9dyCChegLKrGrU4A/0?wx_fmt=jpeg', // 当前显示图片的http链接
      urls: ['https://mmbiz.qpic.cn/mmbiz_jpg/ibib2xsTHJkrib0lI97X8IPHRf2QVlhZ6ezKCsMLr4cahkcos4AAJrVibIMVu8KOzK1QbljTibB9dyCChegLKrGrU4A/0?wx_fmt=jpeg'] // 需要预览的图片http链接列表
    })
  },
  a(){
    this.d()
    this.setData({
      a1: !this.data.a1
    })
    if(this.data.a1 == 1){
      a2.play();
      hehe = setTimeout(() => {
        a3.play()
      }, 5000);
    }else{
      a2.stop();
      a3.stop();
      clearTimeout(hehe);
    }
  },

  //滴滴的声音
  d(){
    a1.play(function(e) {
      console.log(e)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // a1.src='../../assets/audio/di.mp3'
    a1.src='https://res.wx.qq.com/voice/getvoice?mediaid=MzUyOTA2NzAxNF8xMDAwMDExMDI='
    a2.src='https://res.wx.qq.com/voice/getvoice?mediaid=MzUyOTA2NzAxNF8xMDAwMDExMDM='
    a3.src='https://res.wx.qq.com/voice/getvoice?mediaid=MzUyOTA2NzAxNF8xMDAwMDExMDQ='

    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-fe839d7ef7bc29fe'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }
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
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
    setTimeout(() => {
      if (interstitialAd) {
        interstitialAd.show().catch((err) => {
          console.error(err)
        })
      }
    }, 15000);
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

  i(){

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'送给你一个空调，别客气热了就开哈~',
      imageUrl:'../../images/icons/a0.png'
    }
  },

  onShareTimeline:function(){
    return{
      title:'给朋友圈的朋友们安排了空调，别客气热了就开哈~',
      imageUrl:'https://wx.qlogo.cn/mmhead/Q3auHgzwzM7pTA1fEtrDbAw8OZoQ5m3XBsZBhusKxGpFMlmAwNpm3g/0'
    }
  }
})
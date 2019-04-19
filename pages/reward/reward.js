// pages/reward/reward.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        multiArray: [
            ['2019年', '2018年'],
            ['1月', '2月', '3月', '4月', '5月'],
            ['第1周', '第2周', '第3周', '第4周']
        ],
        multiIndex: [0, 0, 1]
    },

    bindMultiPickerChange: function(e) {
        this.setData({
            multiIndex: e.detail.value
        })
    },

    receive: function() {
        wx.navigateTo({
            url: '/pages/reward-receive/reward-receive'
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
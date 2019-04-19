// pages/task-visit/task-visit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex: 0
    },

    // tab swiper 切换时调用
    tabChange: function(e) {
        if ("touch" === e.detail.source) {
            let currentPageIndex = this.data.currentIndex
            currentPageIndex = (currentPageIndex + 1) % 2
            this.setData({
                currentIndex: currentPageIndex
            })
        }
    },

    // tab点击时调用
    tabClick: function(e) {
        let currentPageIndex = this.setData({
            //拿到当前索引并动态改变
            currentIndex: e.currentTarget.dataset.index
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
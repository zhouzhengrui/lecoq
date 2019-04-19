// pages/reward-receive/reward-receive.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        shake: true,
        gift: false
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
        // ios不遵循静音开关
        wx.setInnerAudioOption({
            obeyMuteSwitch: false
        })
        var that = this;
        // 监听摇一摇动作
        wx.onAccelerometerChange(function (e) {
            if (e.x > 1 || e.y > 1 || e.z > 1) {
                // 停止监听
                wx.stopAccelerometer()
                wx.showLoading({
                    title: '请稍候...'
                })
                wx.showToast({
                    title: '摇一摇成功',
                    icon: 'success',
                    duration: 2000
                })

                // 摇一摇
                const innerAudioContext = wx.createInnerAudioContext()
                innerAudioContext.autoplay = true
                innerAudioContext.src = 'http://www.maszy.cn/test-file/audio/shake.mp3'
                innerAudioContext.onPlay(() => {

                })
                // 摇一摇完成
                innerAudioContext.onEnded((res) => {
                    innerAudioContext.src = 'http://www.maszy.cn/test-file/audio/shake-finish.mp3'
                    innerAudioContext.onPlay(() => {
                        wx.hideLoading()
                        that.setData({
                            shake: false,
                            gift: true
                        })
                    })
                })
            }
        })
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
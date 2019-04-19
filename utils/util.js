module.exports = {
    fn_shake: fn_shake,
}
function fn_shake(e,that) {
    wx.showToast({
        title: '摇一摇成功',
        icon: 'success',
        duration: 2000
    })
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
   
}
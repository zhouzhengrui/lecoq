// index.js
Page({
    // 下拉刷新
    onPullDownRefresh() {
        setTimeout(function() {
            // 停止下拉刷新
            wx.stopPullDownRefresh();
        }, 1000)
    }
})
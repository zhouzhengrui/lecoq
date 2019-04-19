//app.js
App({
    onLaunch: function () {
        wx.onAccelerometerChange((e) => {
            var pages = getCurrentPages()
            var currentPage = pages[pages.length - 1]
            if (currentPage.onAccelerometerChange) {
                currentPage.onAccelerometerChange(e);
            }
        })
    }
})
// pages/customer-content-label/customer-content-label.js
Page({

    labelDelete: function() {
        wx.showModal({
            // 显示标签名
            content: '确定删除这个标签吗?',
            confirmColor: '#f43530'
        })
    },

    /**
     * 页面的初始数据
     */
    data: {
        custom: [{
                name: "蓝色",
                value: '0',
                checked: true
            },
            {
                name: "红色",
                value: '1',
                checked: true
            },
            {
                name: "绿色",
                value: '2',
                checked: false
            },
            {
                name: "滑雪",
                value: '3',
                checked: false
            },
            {
                name: "文艺青年",
                value: '4',
                checked: true
            },
            {
                name: "橙色",
                value: '5',
                checked: false
            },
            {
                name: "黑色",
                value: '6',
                checked: false
            },
            {
                name: "听音乐",
                value: '7',
                checked: true
            },
            {
                name: "健身达人",
                value: '8',
                checked: true
            }
        ],
        type1: [{
                name: "喜购折扣",
                value: '0',
                checked: true
            },
            {
                name: "喜购多件",
                value: '1',
                checked: false
            },
            {
                name: "喜购鞋子",
                value: '2',
                checked: false
            },
            {
                name: "喜购外套",
                value: '3',
                checked: false
            },
            {
                name: "喜购内搭",
                value: '4',
                checked: false
            },
            {
                name: "喜购裤子",
                value: '5',
                checked: false
            },
            {
                name: "喜购配件",
                value: '6',
                checked: false
            }
        ],
        type2: [{
                name: "休闲",
                value: '0',
                checked: true
            },
            {
                name: "运动",
                value: '1',
                checked: false
            },
            {
                name: "街头",
                value: '2',
                checked: false
            },
            {
                name: "学院",
                value: '3',
                checked: false
            },
            {
                name: "气质",
                value: '4',
                checked: false
            },
            {
                name: "阿姨",
                value: '5',
                checked: false
            }
        ]
    },

    customClicks: function(e) {
        let index = e.currentTarget.dataset.index;
        let arrs = this.data.custom;
        if (arrs[index].checked == false) {
            arrs[index].checked = true;
        } else {
            arrs[index].checked = false;
        }
        this.setData({
            custom: arrs
        })
    },
    type1Clicks: function(e) {
        let index = e.currentTarget.dataset.index;
        let arrs = this.data.type1;
        if (arrs[index].checked == false) {
            arrs[index].checked = true;
        } else {
            arrs[index].checked = false;
        }
        this.setData({
            type1: arrs
        })
    },
    type2Clicks: function(e) {
        let index = e.currentTarget.dataset.index;
        let arrs = this.data.type2;
        if (arrs[index].checked == false) {
            arrs[index].checked = true;
        } else {
            arrs[index].checked = false;
        }
        this.setData({
            type2: arrs
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
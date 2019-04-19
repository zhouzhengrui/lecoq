import * as echarts from '../../ec-canvas/echarts';
let chart = null;
function initChart(canvas, width, height) {
    chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);
    var option = {
        color: ['#4796fa'],
        grid: {
            top: '45',
            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        tooltip: {
            showContent: false,
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    opacity: '0'
                }
            },
            confine: true
        },
        xAxis: {
            type: 'category',
            axisTick: false,
            axisLine: {
                lineStyle: {
                    color: '#4796fa'
                }
            },
            axisLabel: {
                color: '#b3b3b3'
            },
            data: ['8月', '9月', '10月', '11月', '12月', '1月']
        },
        yAxis: {
            type: 'value',
            splitNumber: '3',
            axisTick: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#b3b3b3'
            },
            splitLine: {
                lineStyle: {
                    color: '#e6e6e6'
                }
            }
        },
        series: [{
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                opacity: .5
            },
            emphasis: {
                itemStyle: {
                    opacity: 1
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    distance: '15',
                    rotate: '45',
                    fontSize: '10',
                    formatter: '¥{c}'
                }
            },
            data: [1000, 2000, 3000, 500, 1500, 2200]
        }]
    };
    chart.setOption(option);
    // 默认高亮
    chart.dispatchAction({
        type: 'highlight',
        dataIndex: 5
    });
    // 点击其他列时移除默认高亮
    var index = 5;
    chart.on('click', function(e) {
        if (e.dataIndex != index) {
            chart.dispatchAction({
                type: 'downplay',
                dataIndex: index
            });
        }
    });
    return chart;
}

Page({
    data: {
        ec: {
            onInit: initChart
        },
        date: '2019-01',
    },
    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },
});
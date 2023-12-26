var circleData = {
    //圓餅圖對應顏色
    color: ['#FFCD0E', '#FE8D25',],
    //圓餅圖資料放置處
    data: [
        { y: 43, n: "43%", ns: "國際專利申請比", cn: "#FFCD0E" },
        { y: 57, n: "57%", ns: "本國專利申請比", cn: "#FE8D25" },
    ]
}
$(document).ready(function () {
    Highcharts.setOptions({
        colors: circleData.color
    });
    var chart = {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    }
    var accessibility = {
        point: {
            valueSuffix: '%'
        }
    }
    var plotOptions = {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            animation: false,
            dataLabels: {
                enabled: true,
                format: `
                <span class="point_title" style="position: absolute; top:20px; opacity: 01;">{point.ns}</span>
                <br>  <br>
                <span class='point_num' style='color:{point.cn}'>{point.n}</span>
                
                `,
                // format: '{point.percentage:.1f} %', //會出現小數點
                connectorColor: 'silver',
                style: {
                    fontSize: '20px',
                    color: '#5e5e5e',
                    fontFamily: 'MicrosoftJhengHei',
                },
                distance: 3,//文字與圓餅圖距離
            }
        }
    }
    var series = [{
        data: circleData.data,
        size: '90%',
        innerSize: "70%",
    }]

    var series1 = [{
        data: circleData1.data,
        size: '65%',
        innerSize: "50%",
    }]
    var plotOptions1 = {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            animation: false,
            dataLabels: {
                enabled: true,
                format: `
                <span class="point_title" style="position: absolute; top:20px; opacity: 01;">{point.ns}</span>
                <br>  <br>
                <span class='point_num' style='color:{point.cn}'>{point.n}</span>
                
                `,
                // format: '{point.percentage:.1f} %', //會出現小數點
                connectorColor: 'silver',
                style: {
                    fontSize: '20px',
                    color: '#5e5e5e',
                    fontFamily: 'MicrosoftJhengHei',
                },
                distance: 3,//文字與圓餅圖距離
            }
        }
    }

    var json = {};
    json.chart = chart;
    json.accessibility = accessibility;
    json.plotOptions = plotOptions;
    json.series = series;
    $('#circleContainer').highcharts(json);
    var json1 = {};
    json1.chart = chart;
    json1.accessibility = accessibility;
    json1.plotOptions = plotOptions1;
    json1.series = series1;
    $('#circleContainer1').highcharts(json1);    
})


var circleData1 = {
    //圓餅圖對應顏色
    color: ['#25D7FE', '#2562FE',],
    //圓餅圖資料放置處
    data: [
        { y: 40, n: "40%", ns: "國際專利申請比", cn: "#25D7FE" },
        { y: 60, n: "60%", ns: "本國專利申請比", cn: "#2562FE" },
    ]
}
$(document).ready(function () {
    Highcharts.setOptions({
        colors: circleData1.color
    });
    var chart = {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    }
    var accessibility = {
        point: {
            valueSuffix: '%'
        }
    }
    var plotOptions = {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            animation: false,
            dataLabels: {
                enabled: true,
                format: `
                <span class="point_title" style="position: absolute; top:20px; opacity: 01;">{point.ns}</span>
                <br>  <br>
                <span class='point_num' style='color:{point.cn}'>{point.n}</span>
                
                `,
                // format: '{point.percentage:.1f} %', //會出現小數點
                connectorColor: 'silver',
                style: {
                    fontSize: '20px',
                    color: '#5e5e5e',
                    fontFamily: 'MicrosoftJhengHei',
                },
                distance: 3,//文字與圓餅圖距離
            }
        }
    }
    var series1 = [{
        data: circleData1.data,
        size: '90%',
        innerSize: "70%",
    }]
    var plotOptions1 = {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            animation: false,
            dataLabels: {
                enabled: false,
                format: `
                <span class="point_title" style="position: absolute; top:20px; opacity: 01;">{point.ns}</span>
                <br>  <br>
                <span class='point_num' style='color:{point.cn}'>{point.n}</span>
                
                `,
                // format: '{point.percentage:.1f} %', //會出現小數點
                connectorColor: 'silver',
                style: {
                    fontSize: '20px',
                    color: '#5e5e5e',
                    fontFamily: 'MicrosoftJhengHei',
                },
                distance: 3,//文字與圓餅圖距離
            }
        }
    }
    var json1 = {};
    json1.chart = chart;
    json1.accessibility = accessibility;
    json1.plotOptions = plotOptions1;
    json1.series = series1;
    $('#circleContainer1').highcharts(json1);    
})
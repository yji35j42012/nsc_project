var selHandler = document.querySelectorAll("[name='selHandler']")
var selBox = document.querySelectorAll("[name='selBox']")
var selHandlerCount = null
for (let i = 0; i < selHandler.length; i++) {
    const element = selHandler[i];
    element.onclick = function (e) {
        e.preventDefault();
        if (selHandlerCount == null) {
            selBox[i].classList.add('showGroup')
            selHandlerCount = i
        } else if (selHandlerCount == i) {
            selBox[i].classList.remove('showGroup')
            selHandlerCount = null
        } else {
            selBox[selHandlerCount].classList.remove('showGroup')
            selBox[i].classList.add('showGroup')
            selHandlerCount = i
        }

    }
}


var pupup = document.querySelector("#pupup")
var pupup_close = document.querySelector("#pupup_close")

var result_item = document.querySelectorAll("[name='result_item']")
for (let i = 0; i < result_item.length; i++) {
    const element = result_item[i];
    element.onclick = function () {
        pupup.classList.add("on")
    }
}
pupup_close.onclick = function () {
    pupup.classList.remove("on")
}



var circleData = {
    //圓餅圖對應顏色
    color: ['#B567DA', '#679CDA', '#DA6767', '#7E67DA', '#67DAA3',],
    //圓餅圖資料放置處
    data: [
        { y: 30, n: "30%", ns: "國立成功大學(6) 38%", cn: "#B567DA" },
        { y: 25, n: "25%", ns: "國立清華大學(5) 31%", cn: "#679CDA" },
        { y: 22, n: "22%", ns: "材團法人國家實驗研究院(2) 13%", cn: "#DA6767" },
        { y: 18, n: "18%", ns: "國立中山大學(2) 13%", cn: "#7E67DA" },
        { y: 5, n: "5%", ns: "國立臺灣科技大學(1) 6%", cn: "#67DAA3" },
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
    var json = {};
    json.chart = chart;
    json.accessibility = accessibility;
    json.plotOptions = plotOptions;
    json.series = series;
    $('#circleContainer').highcharts(json);
})



var result_circleColor = document.querySelector("#result_circleColor");


for (let i = 0; i < circleData.data.length; i++) {
    var li = document.createElement('li')
    var li_child1 = document.createElement("div")
    li_child1.setAttribute("class", "colorBox")
    li_child1.style = `background:${circleData.data[i].cn}`
    var li_child2 = document.createElement("div")
    li_child2.setAttribute("class", "colorTitle")
    li_child2.innerHTML = circleData.data[i].ns

    li.append(li_child1)
    li.append(li_child2)
    result_circleColor.append(li)
}



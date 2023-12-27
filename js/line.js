// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        scrollbar: {
            enabled: true
        },
        categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],

        gridLineWidth: 1,
    },
    yAxis: {
        min: 150,
        max: 340,
        title: {
            text: '單位：新台幣億元'
        },
        tickAmount: 12,
          labels: {
            format: '{value}'
        }
        // tickPositioner() {
        //     return  [273.82, 273.12, 283.99, 276.00, 291.67, 179.82, 313.33, 317.00, 311.66, 294.94,];
        // },
        // categories: [0, 150, 170,190,210, 230, 250, 270, 280,300,320,340],
    },
    tooltip: {
        formatter: function() {
            return this.y;
        }
        // pointFormat: '{point.y} Billion',
        // shared: true
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        // name: 'Reggane',
        // data: [27382, 27312, 28399, 27600, 29167, 17982, 31333, 31700, 31166, 29494,],
        data: [273.82, 273.12, 283.99, 276.00, 291.67, 179.82, 313.33, 317.00, 311.66, 294.94,],
        // showM:[27382, 27312, 28399, 27600, 29167, 17982, 31333, 31700, 31166, 29494,],
        color: "#0E9CFF",
        dataLabels: {
            enabled: true,
            formatter: function () {
                return this.y // 數據點物件中 y 屬性即數據點數值
            }
        }
    },],

});


Highcharts.chart('container1', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        scrollbar: {
            enabled: true
        },
        categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],

        gridLineWidth: 1,
    },
    yAxis: {
        min: 10000,
        max: 20000,
        title: {
            text: '單位：件數'
        },
        tickAmount: 12,
        tickmarkPlacement: 'on',
        scrollbar: {
            enabled: true,
            showFull: false
        },

        labels: {
            format: '{value}'
        }
    },
    tooltip: {
        pointFormat: '{point.y}',
        shared: true
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },

    series: [{
        // name: 'Reggane',
        data: [16010, 15533, 15150, 15224, 15276, 10986, 14336, 14005, 13877, 13835,],
        color: "#68D000",
    },]
});

Highcharts.chart('container2', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        scrollbar: {
            enabled: true
        },
        categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],

        gridLineWidth: 1,
    },
    yAxis: {
        min: 1000,
        max: 2000,
        title: {
            text: '單位：件數'
        },
        tickAmount: 12,
        // tickPositioner() {
        //     return [0, 1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000];
        //   },
        // labels: [0,150],
        // categories:['0','150']
        // categories: ['0', '15000', '17000', '19000', '21000', '23000', '25000', '27000', '28000', '30000', '32000', '34000']
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        // name: 'Reggane',
        data: [1204, 1709, 1540, 1293, 1198, 1256, 1311, 1227, 1318, 1093,],
        color: "#E3A400"
    },]
});
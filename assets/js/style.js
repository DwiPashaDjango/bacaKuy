$(document).ready(function () {
    // $('#table').DataTable();

    var xBar = ["2020", "2021", "2022", "2023"];
    var barColors = ["red", "green", "blue", "orange", "brown"];
    var yBar = [81, 200, 60, 250];

    const barChart = new Chart('barChart', {
        type: 'bar',
        data: {
            labels: xBar,
            datasets: [{
                backgroundColor: barColors,
                data: yBar
            }]
        },
        options: {
            maintainAspecRatio: false,
            layout: {
                padding: {
                    left: 10,
                    rigth: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                // xAxes: [{
                //     time: {
                //         unit: 'month'
                //     },
                //     gridLines: {
                //         display: false,
                //         drawBorder: true
                //     },
                //     ticks: {
                //         maxTicksLimit: 6,
                //     },
                //     maxBarThickness: 50
                // }]
            },
            // yAxes: [{
            //     ticks: {
            //         min: 0,
            //         max: 15000,
            //         maxTicksLimit: 5,
            //         padding: 10,
            //         callback: function(value, index, values) {
            //             return 'Rp.' + number_format(value);
            //         }
            //     },
            //     gridLines: {
            //         color: "rgba(234, 236, 244)",
            //         zeroLineColor: "rgba(234, 236, 244)",
            //         drawBorder: true,
            //         borderDash: [2],
            //         zeroLineBorderDash: [2]
            //     }
            // }]
        },
        legend: {
            display: false
        }

    });

    var xLine = ["2020", "2021", "2022", "2023"];;
    var yLine = [100, 25, 351, 250];
    const pieChart = new Chart('pieChart', {
        type: 'line',
        data: {
            labels: xLine,
            datasets: [{
                backgroundColor: barColors,
                data: yLine
            }]
        },
        options: {
            maintainAspecRatio: false,
            layout: {
                padding: {
                    left: 10,
                    rigth: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                // xAxes: [{
                //     time: {
                //         unit: 'month'
                //     },
                //     gridLines: {
                //         display: false,
                //         drawBorder: true
                //     },
                //     ticks: {
                //         maxTicksLimit: 6,
                //     },
                //     maxBarThickness: 50
                // }]
            },
            // yAxes: [{
            //     ticks: {
            //         min: 0,
            //         max: 15000,
            //         maxTicksLimit: 5,
            //         padding: 10,
            //         callback: function (value, index, values) {
            //             return 'Rp.' + number_format(value);
            //         }
            //     },
            //     gridLines: {
            //         color: "rgba(234, 236, 244)",
            //         zeroLineColor: "rgba(234, 236, 244)",
            //         drawBorder: true,
            //         borderDash: [2],
            //         zeroLineBorderDash: [2]
            //     }
            // }]
        },
        legend: {
            display: true
        }
    });
});
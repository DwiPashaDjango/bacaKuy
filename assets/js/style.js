$(document).ready(function () {
    $('#table').DataTable({
        responsive: true,
        bInfo: false,
        bPaginate: false
    });

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
        },
        legend: {
            display: true
        }
    });
});
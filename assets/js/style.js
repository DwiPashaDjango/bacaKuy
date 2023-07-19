$(document).ready(function () {
    $('#table').DataTable({
        responsive: true,
        bInfo: false,
        bPaginate: false,
        ordering: false
    });

     new Chart('barChart', {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Data Peminjaman Buku Tahun 2020 - 2026',
                data: [50, 17, 8, 15, 66, 55],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderWidth: 1,
                borderColor: 'rgb(75, 192, 192)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
             animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
        }
     });
    new Chart('pieChart', {
        type: 'bar',
        data: {
            labels: ['Si Kabayan', 'Sangkuriang', 'Nyonya Menir', 'Jim Labrador', 'Ali Labrador', 'Budi 01 Gaming'],
            datasets: [{
                label: 'Data Buku Populer Buku Tahun 2020 - 2026',
                data: [50, 17, 8, 15, 66, 55],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100
                }
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
        }
    });
});
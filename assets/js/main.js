function chart(element) {
    document.getElementById('booksModal').style.display = 'block';
    let image = element.getAttribute("data-id");
    var imageContainer = document.getElementById("append");
    var imageElement = document.createElement("img");
    imageElement.src = image; 

    imageContainer.innerHTML = "";
    imageContainer.appendChild(imageElement);
}

$(document).ready(function () {
    $('#close').css('display', 'none');
    $('#bars').click(function (e) {
        e.preventDefault();
        $('#menu').css('display', 'block');
        $('#bars').css('display', 'none');
        $('#close').css('display', 'block');
    });

    $('#close').click(function (e) {
        e.preventDefault();
        $('#close').css('display', 'none');
        $('#bars').css('display', 'block');
        $('#menu').css('display', 'none');
    });
    
    $('.banner-area').slick({
        autoplay: true,
        speed: 100,
        arrows: false,
        dots: true,
        fade: true
    });

    $('#login').click(function (e) {
        e.preventDefault();
        $('#loginModal').css('display', 'block');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#booksModal').css('display', 'none');
    });

    $('#register').click(function (e) {
        e.preventDefault();
        $('#registerModal').css('display', 'block');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#loginModal').css('display', 'none');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#registerModal').css('display', 'none');
    });

    $('#link-login').click(function (e) {
        e.preventDefault();
        $('#registerModal').css('display', 'none');
        $('#loginModal').css('display', 'block');
    });

    $('#link-register').click(function (e) {
        e.preventDefault();
        $('#loginModal').css('display', 'none');
        $('#registerModal').css('display', 'block');
    });

    $('#save').click(function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let nim = $('#nim').val();
        let email = $('#email').val();

        if (name == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Isikan nama saudara!',
            })
        } else if (nim == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Isikan nim saudara!',
            })
        } else if (email == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Isikan email saudara!',
            })
        } else {
            let timerInterval
            Swal.fire({
                icon: 'success',
                title: 'Meminjam Buku.',
                html: 'Prosessing in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    $('#booksModal').css('display', 'none');
                    $('.form-validation')[0].reset();
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                    $('#booksModal').css('display', 'none');
                    $('.form-validation')[0].reset();
                }
            })
        }
    });

    $('#post-login').click(function (e) {
        e.preventDefault();
        let username = $('#username').val();
        let password = $('#password').val();

        if (username == '') {
            $('#msg').fadeIn();
            $('#msg').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Masukan Username.
                            </div>`);
            setTimeout(() => {
                $('#msg').fadeOut();
            }, 2000);
        } else if (password == '') {
            $('#msg').fadeIn();
            $('#msg').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Masukan Password.
                            </div>`);
            setTimeout(() => {
                $('#msg').fadeOut();
            }, 2000);
        } else {
            let timerInterval
            Swal.fire({
                icon: 'success',
                title: 'Berhasil.',
                html: 'Prosessing in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    $('#loginModal').css('display', 'none');
                    window.location.href = 'dashboard.html';
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                    $('#loginModal').css('display', 'none');
                    window.location.href = 'dashboard.html';
                }
            })
        }
    });

    $('#post-register').click(function (e) {
        e.preventDefault();
        let username = $('#username_regis').val();
        let email = $('#email_regis').val();
        let password = $('#password_regis').val();
        let password_confirmation = $('#password_confirmation_regis').val();

        if (username == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Userame Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else if (email == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Email Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else if (password == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Password Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else if (password_confirmation == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Konfirmasi Password Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else {
            $('#registerModal').css('display', 'none');
            $('#loginModal').css('display', 'block');

            $('#msg').fadeIn();
            $('#msg').html(`<div class="alert alert-success">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                <strong>Berhasil!</strong> silahkan login.
                            </div>`);
            setTimeout(() => {
                $('#msg').fadeOut();
            }, 2000);
        }
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery:{
			enabled: true,
			navigateByImgClick: true,
			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%',
			preload: [0,1]
		},
		image:{
			tError: '<a href="%url%">The Image #%curr%</a> Tidak Dapat Diproses',
			titleSrc: function(item){
			}
		}
    });
});
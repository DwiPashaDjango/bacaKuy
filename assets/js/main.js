function chart(element) {
    let btn = document.getElementById('save');
    document.getElementById('booksModal').style.display = 'block';
    let image = element.getAttribute("data-id");
    var imageContainer = document.getElementById("append");
    var imageElement = document.createElement("img");
    imageElement.src = image; 

    btn.innerHTML = 'Pinjam'

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
	infinite: true,
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
        $('#post-login').html('Login');
    });

    $('#link-register').click(function (e) {
        e.preventDefault();
        $('#loginModal').css('display', 'none');
        $('#registerModal').css('display', 'block');
    });

    $(document).on('click', '#save', function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let nim = $('#nim').val();
        let email = $('#email').val();
        let prodi = $('#prodi').val();

        if (name == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Silahkan masukan username saudara.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else if (nim == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Silahkan masukan nomor induk mahasiswa saudara.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else if (email == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Silahkan masukan email saudara.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else if (prodi == '') {
            $('#err').fadeIn();
            $('#err').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Silahkan pilih program studi saudara.
                            </div>`);
            setTimeout(() => {
                $('#err').fadeOut();
            }, 2000);
        } else {
            $('#save').html('Posess...');
            setTimeout(() => {
                $('#save').html('Success');
                $('#msg').fadeIn();
                $('#msg').html(`<div class="alert alert-success">
                                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                    Berhasil meminjam buku.
                                </div>`);
                setTimeout(() => {
                    $('#msg').fadeOut();
                    setTimeout(() => {
                        $('#booksModal').css('display', 'none');
                    }, 1000);
                }, 2000);
            }, 2000);
        }
    });

    $(document).on('click', '#post-login', function (e) {
        e.preventDefault();
        let username = $('#username').val();
        let password = $('#password').val();

        if (username == '') {
            $('#err-log').fadeIn();
            $('#err-log').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Masukan Username.
                            </div>`);
            setTimeout(() => {
                $('#err-log').fadeOut();
            }, 2000);
        } else if (password == '') {
            $('#err-log').fadeIn();
            $('#err-log').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Masukan Password.
                            </div>`);
            setTimeout(() => {
                $('#err-log').fadeOut();
            }, 2000);
        } else {
            $('#post-login').html('Posess...');
            setTimeout(() => {
                $('#post-login').html('Success');
                $('#msg-log').fadeIn();
                $('#msg-log').html(`<div class="alert alert-success">
                                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                    Akun terdaftar.
                                </div>`);
                setTimeout(() => {
                    $('#post-login').html('Login');
                    $('#msg-log').fadeOut();
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 800);
                }, 2000);
            }, 2000);
        }
    });

    $(document).on('click', '#post-register', function (e) {
        e.preventDefault();
        let username = $('#username_regis').val();
        let email = $('#email_regis').val();
        let password = $('#password_regis').val();
        let password_confirmation = $('#password_confirmation_regis').val();

        if (username == '') {
            $('#err-reg').fadeIn();
            $('#err-reg').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Userame Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err-reg').fadeOut();
            }, 2000);
        } else if (email == '') {
            $('#err-reg').fadeIn();
            $('#err-reg').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Email Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err-reg').fadeOut();
            }, 2000);
        } else if (password == '') {
            $('#err-reg').fadeIn();
            $('#err-reg').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Password Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err-reg').fadeOut();
            }, 2000);
        } else if (password_confirmation == '') {
            $('#err-reg').fadeIn();
            $('#err-reg').html(`<div class="alert-dangers">
                                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                Konfirmasi Password Tidak Boleh Kosong.
                            </div>`);
            setTimeout(() => {
                $('#err-reg').fadeOut();
            }, 2000);
        } else {
            $('#post-register').html('Prosess...');
            setTimeout(() => {
                setTimeout(() => {
                    $('#post-register').html('Daftar');
                    $('#registerModal').css('display', 'none');
                    $('#loginModal').css('display', 'block');
        
                    $('#msg-log').fadeIn();
                    $('#msg-log').html(`<div class="alert alert-success">
                                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                                        <strong>Berhasil!</strong> silahkan login.
                                    </div>`);
                    setTimeout(() => {
                        $('#msg-log').fadeOut();
                    }, 2000);
                }, 1000);
            }, 1000);
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

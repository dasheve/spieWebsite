$(document).ready(function() {

    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    $(function() {
        $(document).click(function(event) {
            $('.navbar-collapse').collapse('hide');
        });
    });

    $('.navbar-toggler').click(function() {
        $(".navbar").addClass("sticky");
    });


    // Home Page typing texts
    var typed = new Typed(".typing-head-1", {
        strings: ["OPTICS"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-head-2", {
        strings: ["PHOTONICS"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-head-3", {
        strings: ["RESEARCH"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-head-4", {
        strings: ["SCIENCE"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Office Bearers Personal Social

    var personalIcons = $(".personal-social");

    for (i = 0; i < personalIcons.length; ++i) {
        personalIcons[i].innerHTML = `
    <a class="linkedin pers-social"><i class="fab fa-linkedin-in"></i></a>
    <a class="instagram pers-social"><i class="fab fa-instagram"></i></a>
    <a class="facebook pers-social"><i class="fab fa-facebook-f"></i></a>`;
    }

    // linkedin profiles
    var linkedinPersonal = $(".personal-social .linkedin");
    var inURL = "https://www.linkedin.com/in/";
    const linkedinPersonalURL = [inURL + "shruti-yadav-0083151b5", inURL + "devesh-yadav-2045231a6/", "", inURL + "shivansh-bhatnagar-5406aa205", inURL + "ankushrana2001", inURL + "kalpajit-roy"]

    //instagram profiles
    var instaPersonal = $(".personal-social .instagram");
    var grURL = "https://www.instagram.com/";
    const instaPersonalURL = [grURL + "shruti_yadav17?utm_medium=copy_link", grURL + "devesh_930/", grURL + "aditya_goyal77/", grURL + "shivansh_bhatnagar_21?utm_medium=copy_link", grURL + "ankushrana_real/", grURL + "roy_kalpajit"]

    // facebook profiles
    var facebookPersonal = $(".personal-social .facebook");
    var fbURL = "https://www.facebook.com/";
    const facebookPersonalURL = ["", fbURL + "profile.php?id=100067997207494", "", "", fbURL + "profile.php?id=100063075971102", fbURL + "kalpajit.roy.9"]

    for (var i = 0; i < 6; i++) {
        linkedinPersonal[i].setAttribute("href", linkedinPersonalURL[i]);
        instaPersonal[i].setAttribute("href", instaPersonalURL[i]);
        facebookPersonal[i].setAttribute("href", facebookPersonalURL[i]);
    }

});
window.addEventListener("load", function () {
    $(document).ready(function () {
        $(".preload").fadeOut(1000);
        AOS.init();

        $(".carousel").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            autoplay: true,
            fade: true,
            infinite: true,
            easing: "fade",
            infinite: true,
            adaptiveHeight: true,
            dots: true,
        });
    });

    $(".back-to-top").click(function () {
        $("html").animate({ scrollTop: 0 });
    });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            document.querySelector(".back-to-top").classList.add("active");
        } else {
            document.querySelector(".back-to-top").classList.remove("active");
        }
    });

    $(".menu-icon").click(function () {
        $(".mobile-menu").addClass("active");
    });

    $(".menu-icon-close").click(function () {
        $(".mobile-menu").removeClass("active");
    });
});

// Scroll To
const toAny = document.querySelectorAll(".our-navbar .nav-ul .scroll");

function scrollTo(elements) {
    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault()

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth"
            });
        });
    });
}
scrollTo(toAny);




$(function () {

    // Start gallary
    var numberOfSmall = $(".small").children().length,
        marginBetweenSmall = ".5",
        totalMarginBetweenSmall = (numberOfSmall - 1) * marginBetweenSmall,
        smallWidth = (100 - totalMarginBetweenSmall) / numberOfSmall;

    $(".small img").css("width", smallWidth + "%",);
    $('.small img').not(':last').css('marginLeft', marginBetweenSmall + '%');


    $(".small img").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");

        $(".master img").hide().attr("src", $(this).attr("src")).fadeIn(500)

    });
    // End gallary

    // Show Hidden Items From category

    $('.show button').click(function () {

        $('.category .left .hidden').fadeIn(1000);

    });



});


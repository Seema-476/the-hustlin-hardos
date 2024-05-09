const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show")
    menuicon.classList.toggle("cross")
    document.body.classList.toggle("overflowhidden")
})

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // autoplay: true, 
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".btnnext",
    prevArrow: ".btnprev",
    responsive: [
        {
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 815,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 737,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.responsive2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true, 
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: ".arrownext",
    prevArrow: ".arrowprev",
    responsive: [
        {
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 737,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

let counter = 100;
function addone() {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
}
function removeone() {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;
}

// countdown
function countdown(endDate) {
    //  current date and time
    const now = new Date().getTime();
    //difference between the end date and the current date
    const difference = endDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // const milliseconds = difference % 1000;
    return {
        days,
        hours,
        minutes,
        seconds,
        // milliseconds,
    };
}
const endDate = new Date("2024-05-01").getTime();
setInterval(function () {
    const remainingTime = countdown(endDate);
    document.querySelector(
        ".timer"
    ).innerHTML = `${remainingTime.days}: ${remainingTime.hours}: ${remainingTime.minutes}: ${remainingTime.seconds}`;
}, 1000);

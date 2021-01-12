// Smooth scroll
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Slider
$(document).ready(function() {
    $('.header__gallery--item').lightSlider({
        item:1,
        slideMargin: 0,
        onSliderLoad: function() {
            $('.header__gallery--item').removeClass('cS-hidden');
        }  
    });
});

//Count down
var h = null;
var m = null;
var s = null;
var timeout = null;
$(document).ready(function start(){
    if (h === null){
        h = 0;
        m = 15;
        s = 0;
    }
    if (s === -1){
        m -= 1;
        s = 59;
    }
    if (m === -1){
        h -= 1;
        m = 59;
    }
    if (h == -1){
        clearTimeout(timeout);
        return false;
    }
    var i;
    var hours = document.querySelectorAll(".h");
    var minutes = document.querySelectorAll(".m");
    var seconds = document.querySelectorAll(".s");
    for (i = 0; i < hours.length; i++) {
        hours[i].innerText = h;
    }
    for (i = 0; i < minutes.length; i++) {
        minutes[i].innerText = m;
    }
    for (i = 0; i < seconds.length; i++) {
        seconds[i].innerText = s;
    }
    timeout = setTimeout(function(){
        s--;
        start();
    }, 1000);
});

//Popup
$(document).ready(function(){
    ramdomTime = (Math.floor((Math.random() * 15) + 15)) * 1000;
    let timeOut = setInterval(function(){
        $("#popup").addClass('show');
        ramdomTime = (Math.floor((Math.random() * 15) + 15)) * 1000;
        setTimeout(function(){
            $("#popup").removeClass('show');
        }, 2000);
    }, ramdomTime);
});

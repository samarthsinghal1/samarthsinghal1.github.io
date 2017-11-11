$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
});

$(document).ready(function(){
    $("#name").addClass("animated fadeInDown");
    $("#surname").addClass("animated fadeInUp");
    $(".nav").addClass("animated fadeInDown");
    $("#head").addClass("delay1 animated fadeIn");

    var desc = $("#desc");
    var text = $(".interest");
    var bash = $("#bash");
    var table = $("#record");
    var textpos = text.position();
    var pos = desc.position();
    var bashpos = bash.position();
    var contact = $("#cont");
    var contPos = contact.position();
    $(window).scroll(function(){
        var positionOfWindow = $(window).scrollTop() + $(window).height();
        /*console.log(positionOfWindow);
        console.log(pos.top + 3*desc.height());*/
        if (positionOfWindow > (pos.top + 3*desc.height())){
            typeWriter(desc,250);
        };
        if (positionOfWindow >= (textpos.top)) {
            typeWriter(text, 1250);
            typeWriter($(".new"),3500);
            typeWriter($(".new2"),6000);
            typeWriter($(".new3"),8500);
        };
        if (positionOfWindow > (bashpos.top + 3*bash.height())){
            typeWriter(bash,250);
        }
        if (positionOfWindow > table.position().top) {
            setTimeout(function () {
                table.addClass("visible");
                table.addClass("animated fadeIn");
            }, 2000);
        }
        if (positionOfWindow > contPos.top + 3*contact.height()){
            typeWriter(contact,250);
            setTimeout(function() {
                $(".info").addClass("visible");
                $(".info").addClass("animated fadeIn")
            },1500)
            setTimeout(function() {
                $(".footer p").addClass("visible");
            },2000)

        };

    });


});

function typeWriter(elem,time){
    setTimeout(function(){
        elem.addClass("visible");
        elem.addClass("type");
    }, time);
    return false;
}


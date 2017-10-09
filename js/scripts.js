/**
 * Created by Andrew Wang on 9/13/2017.
 */

$(document).ready(function(){
    setupEducation();
});
function setupEducation(){
    $('.education-carousel').slick({
        infinite: true,
        arrows: true,
        prevArrow: $(".fa.fa-angle-left"),
        nextArrow: $(".fa.fa-angle-right"),
        autoplay: false,
        autoplaySpeed: 2000
    });
}
function playMusic(t){
    var parent = $(t).parent().children();
    var aud = parent[0];
    var bar = $(parent[2]);
    var icon = $(t);

    aud.play();
    $(aud).on('timeupdate', function() {
        bar.css("width", ((aud.currentTime / aud.duration)*100)+"%");
    });

    icon.removeClass("fa-play").addClass("fa-pause");
    icon.attr("onclick","pauseMusic(this)");
}
function pauseMusic(t){
    var parent = $(t).parent().children();
    var aud = parent[0];
    var icon = $(t);

    aud.pause();
    icon.removeClass("fa-pause").addClass("fa-play");
    icon.attr("onclick","playMusic(this)");
}

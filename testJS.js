$(document).ready(function() {
    // $('p').mouseover(function() {
    //     $(this).find('strong').stop().animate({
    //         left : "50%"
    //     },400)
    //     $(this).find('span').stop().animate({
    //         opacity : 0.9
    //     },400)
    // })
    // $('p').mouseout(function() {
    //     $(this).find('strong').stop().animate({
    //         left : "-150%"
    //     },400)
    //     $(this).find('span').stop().animate({
    //         opacity : 0
    //     },400)
    // })
    $('p').mouseover(function() {
        return this.class == 'babo';
    }).animate({
        opacity : 0.5
    })
})
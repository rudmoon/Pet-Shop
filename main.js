
//Nav Part : NavBurger Click => Navbar toggle

$(document).ready(function() {

    // 1) Nav Part : NavBurger Click => Navbar toggle 
    $('.nav__hide').click(function() {
        $('.nav__left--menu').fadeToggle();
    });


    // 2) gotoTop btn + appearing the button
    $('#gotoTop-arrow').click(function() {
        $('html, body').animate({
            scrollTop : 0
        },800);
    });

    let docHeight = document.documentElement.offsetHeight;
    $(window).scroll(function() {
        if(docHeight/4 < scrollY) {
            $('#gotoTop-arrow').show(700);
        } else {
            $('#gotoTop-arrow').hide(700);
        }
    })
    
    // 3) Navbar menu click => Auto scroll to specific position

    const yPositions = [$('#about').offset().top-20,$('#services').offset().top-20,$('#products').offset().top-20,$('#comprehensive').offset().top-20];
    for(let i=1; i<$('.nav--menus').length; i++) {
        $('.nav--menus').eq(i).click(function(ev) {
            ev.preventDefault();
            window.scrollTo({
                left : 0,
                top : yPositions[i-1],
                behavior : 'smooth',
            })
        })
    };

    












});



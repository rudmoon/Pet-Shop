
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
    
    window.onresize = function(){
        document.location.reload();
    };
    const yPositions = [$('#about').position().top,$('#services').offset().top,$('#products').offset().top,$('#comprehensive').offset().top];
    for(let i=1; i<$('.nav--menus').length; i++) {
        $('.nav--menus').eq(i).click(function(ev) {
            ev.preventDefault();
            window.scrollTo({
                left : 0,
                top : yPositions[i-1]-10,
                behavior : 'smooth',
            })
        })
    };

    // 4) In pricing part, hover==>up 50px
    console.log($('.info--list').length);
    for(let i=0; i<$('.info--list').length; i++) {
        $('.info--list').eq(i).css({
            left : i*34 + '%'
        });
    };
    $('.info--list')
    .mouseover(function() {
        $(this).stop().animate({
            top : '-50px',
        },200)
    })
    .mouseout(function() {
        $(this).stop().animate({
            top : '0',
        },200)
    });

    // 5)
    












});



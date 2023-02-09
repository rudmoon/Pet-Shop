
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
        });
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

    // 5) Products list slide-show
    let liHeight = $('.products__list li').height();
    let contHeight = liHeight + 100;
    
    

    $('.products__sldieshow--container').css("height",contHeight);
    $('.products__list').css('height',liHeight);
    
    let slideList = document.querySelectorAll('.mySlideDiv');
    let currentIndex = 0;
    
    function gotoSlide(idx) {
        $('.mySlideDiv').each(function(index) {
            $(this).stop().removeClass('active');
            slideList[idx].classList.add('active');
            currentIndex = idx;
        })
    }

    gotoSlide(2);
    $('.products__prevBtn').click(function() {
        if(currentIndex==0) {
            $(this).stop().animate({
                opacity : '0'
            },100)
            $('.products__nextBtn').stop().animate({
                opacity : '1'
            })
        } else {
            $(this).stop().animate({
                opacity : '1'
            },100)
            $('.products__nextBtn').stop().animate({
                opacity : '1'
            })
            gotoSlide(currentIndex-1);
        }
    })
    $('.products__nextBtn').click(function() {
        if(currentIndex===slideList.length-1) {
            $(this).stop().animate({
                opacity : '0'
            },100)
            $('.products__prevBtn').stop().animate({
                opacity : '1'
            })
        } else {
            $(this).stop().animate({
                opacity : '1'
            },100)
            $('.products__prevBtn').stop().animate({
                opacity : '1'
            })
            gotoSlide(currentIndex+1);
        }
    })
    
    // 이부분이 왜 안되는지 모르겠네..
    $('.mySlideDiv').mouseover(function() {
        $(this).find('button').stop().animate({
            opacity : 1
        },300)
        
    }). mouseout(function() {
        $(this).find('button').stop().animate({
            // height : '0',
            opacity : 0
        },300);
    });
    
    








});



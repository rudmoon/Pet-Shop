
//Nav Part : NavBurger Click => Navbar toggle

$(document).ready(function() {

    // 1) Nav Part : NavBurger Click => Navbar toggle 
    $('.nav__hide').click(function() {
        $('.nav__left--menu').slideToggle();
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
    
    const parts = [$('#about'),$('#services'),$('#products'),$('#pricing'),$('#footer')];
    let navList = $('.nav__left--menu li');
    
    for(let i=0; i<parts.length; i++) {
        navList[i+1].addEventListener('click',function(ev) {
            ev.preventDefault();
            window.scrollTo({
                top : parts[i].offset().top -10,
                behavior : 'smooth',
            })    
        })
    }

    
    

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
    let slideUl = document.querySelector('.products__list');
    let currentIndex = 0;
    
    for(let i=0; i<slideList.length; i++) {
        slideList[i].style.left = i * 100 + '%';
    }

    function gotoSlide(idx) {
        slideUl.style.left = -idx * 100 + '%';
        slideUl.classList.add('active');
        currentIndex = idx;

        if(currentIndex==0) {
            $('.products__prevBtn').css ({
                display : "none",
            })
        } else {
            $('.products__prevBtn').css ({
                display : "block",
            })
        }
        if(currentIndex==slideList.length-1) {
            $('.products__nextBtn').css ({
                display : "none",
            })
        } else {
            $('.products__nextBtn').css ({
                display : "block",
            })
        }
    }
        
    

    gotoSlide(2);

    $('.products__prevBtn').click(function() {    
            gotoSlide(currentIndex-1);
    })

    $('.products__nextBtn').click(function() {    
            gotoSlide(currentIndex+1);
        }
    )
    
    // 6) Misson, Vission active
    $('.menu-lines.mission').click(function() {
        $(this).addClass('active');
        $('.menu-lines.vission').removeClass('active');
        $('.goalBox--p.missionDiv').addClass('show');
        $('.goalBox--p.vissionDiv').removeClass('show');
    });
    $('.menu-lines.vission').click(function() {
        $(this).addClass('active');
        $('.menu-lines.mission').removeClass('active');
        $('.goalBox--p.vissionDiv').addClass('show');
        $('.goalBox--p.missionDiv').removeClass('show');
    });
    
});



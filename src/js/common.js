
"use strict";

function carousel3D(){
    setTimeout(init, 100);

    var obox = document.getElementById('box');
    var aImg = obox.getElementsByTagName('img'); // mảng ảnh
    var aVid = obox.getElementsByTagName('video'); // mảng video
    var aEle = [...aImg, ...aVid]; // gộp 2 mảng lại

    var radius = 400;



    function init(delayTime) {
        for (var i = 0; i < aEle.length; i++) {
            aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
            aEle[i].style.transition = "transform 1s";
            aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
        }
    }
    var sX, sY, nX, nY, desX = 0,
        desY = 0,
        tX = 0,
        tY = 10,
        sectionThree = document.getElementById('section_three');

    sectionThree.onmousedown = function(e) {
        clearInterval(obox.timer);
        e = e || window.event;
        var sX = e.clientX,
            sY = e.clientY;

        this.onmousemove = function(e) {
            e = e || window.event;
            var nX = e.clientX,
                nY = e.clientY;
            desX = nX - sX;
            desY = nY - sY;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTranform(obox);
            sX = nX;
            sY = nY;
        }

        this.onmouseup = function(e) {
            this.onmousemove = this.onmouseup = null;
            obox.timer = setInterval(function() {
                desX *= 0.95;
                desY *= 0.95;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTranform(obox);
                if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                    clearInterval(obox.timer);
                }
            }, 13);
        }
        return false;
    }
    document.onmousewheel = function(e) {
        e = e || window.event;
        var d = e.wheelDelta / 500 || -e.detail;
        radius += d;
        init(1);
    };

    function applyTranform(obj) {
        obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
    }

    function mousewheel(obj, fn) {
        document.onmousewheel === null ? obj.onmousewheel : null;
    }
}


$(document).ready(function () {

function burgerButton(){
    if($('.burger_menu_button').hasClass('active')){
        $('.burger_menu_button').removeClass('active')
        $('.menu_dark').removeClass('PC')
        $('.menu_dark').removeClass('mobile')
        $('.menu_dark').removeClass('tablet')

    }else{
        $('.burger_menu_button').addClass('active')
    }
}

function menuShow(){
        var width = $('body').width()

        if($('.burger_menu_button').hasClass('active') && width >= 1200){
            $('.menu_dark').addClass('PC')
            $('.menu_dark').css('display','flex')
            $('.menu_dark_item').css('opacity', '1')
            $('.menu_dark_item:nth-child(1)').css('transform', 'translateX(0)')

        setTimeout(function () {
        $('.menu_dark_item:nth-child(2)').css('transform', 'translateX(0)')
        },100)
        setTimeout(function () {
            $('.menu_dark_item:nth-child(3)').css('transform', 'translateX(0)')


        },200)
        setTimeout(function () {
            $('.menu').css('opacity', '1')
            $('.menu_dark_item p').css('transform', 'translateX(0)')
            $('.menu_dark_item img').css('transform', 'translateX(0)')
            $('.menu').css('transform', 'translateX(0)')

        },800)
        setTimeout(function () {
            $('.cable').css('height', '100px')

        },1200)
        setTimeout(function () {
            $('.logo_header').addClass('on')
            $('.logo_header').removeClass('off')
            $('.menu_dark_item p').css('text-shadow', '20px 20px 10px rgba(100, 100, 100, .7)')
        },2000)

        }

        else if($('.burger_menu_button').hasClass('active') && width <= 550){
            $('.menu_dark').addClass('mobile')
            $('.menu_dark_item').css('opacity', '1')
            $('.menu_dark').css('display','flex')
        setTimeout(function () {

                $('.menu_dark_item:nth-child(3)').css('transform', 'translateX(0)')
                $('.menu').css('transform', 'translateX(0)')
        },10)
        setTimeout(function () {

            $('.cable').css('height', '60px')
        },500)
        setTimeout(function () {
            $('.logo_header').addClass('on')
            $('.logo_header').removeClass('off')
            $('.menu').css('opacity', '1')
        },1000)
        }
        else if($('.burger_menu_button').hasClass('active') && width >= 550 && width<=1200){
            $('.menu_dark').css('display','flex')
            $('.menu_dark').addClass('tablet')
            $('.menu_dark_item').css('opacity', '1')
            $('.menu_dark_item:nth-child(2)').css('transform', 'translateX(0)')

        setTimeout(function () {
            $('.menu_dark_item:nth-child(3)').css('transform', 'translateX(0)')

        },100)
        setTimeout(function () {
            $('.menu_dark_item span').css('opacity', '1')
            $('.menu').css('opacity', '1')
            $('.menu').css('transform', 'translateX(0)')
        },800)
        setTimeout(function () {
            $('.cable').css('height', '100px')

        },1200)
        setTimeout(function () {
            $('.logo_header').addClass('on')
            $('.logo_header').removeClass('off')
            $('.menu_dark_item span').css('text-shadow', '20px 20px 10px rgba(100, 100, 100, .7)')
        },2000)
        }else{
            $('.menu_dark').css('display','none')
            $('.menu_dark_item p').css('text-shadow', '0px 0px 0px ')
            $('.menu_dark_item span').css('text-shadow', '0px 0px 0px ')
            $('.logo_header').addClass('off')
            $('.logo_header').removeClass('on')
            $('.cable').css('height', '5px')
            $('.menu_dark_item p').css('transform', 'translateX(-500%)')
            $('.menu_dark_item img').css('transform', 'translateX(-500%)')
            $('.menu').css('transform', 'translateX(500%)')
            $('.menu_dark_item:nth-child(3)').css('transform', 'translateX(-500%)')
            $('.menu').css('opacity', '0')
            setTimeout(function () {
                $('.menu_dark_item:nth-child(2)').css('transform', 'translateX(-300%)')
            },200)
            setTimeout(function () {
               $('.menu_dark_item').css('opacity', '0')
                $('.menu_dark_item:nth-child(1)').css('transform', 'translateX(-100%)')
            },500)
            setTimeout(function () {
                $('.menu_dark').css('display','none')
            },1500)
        }
    }


    $('.burger_menu_button').on('click',function () {
        burgerButton()
        menuShow()

    })

    $('.menu ul li a').on('click',function () {
        burgerButton()
        menuShow()
    })
    $('.logo_header__wrapper').on('click','.on',function () {
        burgerButton()
        menuShow()
    })


    $(".menu").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".logo_header__wrapper").on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // $('.thumbnails').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     dots: true,
    //     nav: true,
    //     autoplay: false
    // });

    function owl(){
    $('.portfolio').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        autoplay: false
    });
}

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });



function slider() {
    var width1 = $(window).width()
    if(width1 >= 900){
        carousel3D()
    }else{
        owl()
    }
}
    slider()




})




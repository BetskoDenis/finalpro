<template>
    <div id="home">

        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>

    </div>
</template>

<script>

    import SectionOne from './section_one.vue'
    import SectionTwo from './section_two.vue'
    import SectionThree from './section_three.vue'
    import SectionFour from './section_four.vue'
    import SectionFive from './section_five.vue'


    export default {
        name: 'home',
        components: {

            SectionOne,
            SectionTwo,
            SectionThree,
            SectionFour,
            SectionFive,


        },
        mounted(){
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
            function owl(){
                $('.portfolio').owlCarousel({
                    items: 1,
                    loop: true,
                    dots: true,
                    nav: true,
                    autoplay: false
                });
            }

            function slider() {
                var width1 = $(window).width()
                if(width1 >= 900){
                    //carousel3D()
                    carousel3D()
                }else{
                    owl()
                }
            }
            slider()
        }
    }

</script>

<style lang="css" type="text/scss">

</style>

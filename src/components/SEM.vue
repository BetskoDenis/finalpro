

<template>
    <section id="SEM_TM"  class="single_work">
        <div class="container">
            <div class="top_single__wrapper">
                <div class="single__wrapper">

                        <!-- swiper1 -->
                        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                            <swiper-slide class="slide-1"></swiper-slide>
                            <swiper-slide class="slide-2"></swiper-slide>
                            <swiper-slide class="slide-3"></swiper-slide>
                            <swiper-slide class="slide-4"></swiper-slide>
                            <swiper-slide class="slide-5"></swiper-slide>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        </swiper>
                        <!-- swiper2 Thumbs -->
                        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                            <swiper-slide class="slide-1"></swiper-slide>
                            <swiper-slide class="slide-2"></swiper-slide>
                            <swiper-slide class="slide-3"></swiper-slide>
                            <swiper-slide class="slide-4"></swiper-slide>
                            <swiper-slide class="slide-5"></swiper-slide>
                        </swiper>

                    <div class="description_work">
                        <h4>Торговая марка SEM</h4>
                        <p>верстка по индивидуально разработанному дизайну</p><span>технологии использованные в проекте</span>
                        <div class="technology__wrapper">
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>SaSS</p>
                            <p>Jade</p>
                            <p>Gulp</p>
                            <p>JavaScript</p>
                            <p>JQuery</p>
                            <p>Разработка индивидуального дизайна шаблона</p><a href="https://github.com/BetskoDenis/SEM_TM">Посмотреть проект на GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


    export default {
        name: 'SEM_TM',
        data() {
            return {
                swiperOptionTop: {
                    spaceBetween: 10,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    slideToClickedSlide: true,
                }
            }
    }
    }
</script>


<style>
@import "../libs/single_work.css";
@import "../libs/swiper.css";


</style>
<style lang="scss" scoped>
    .swiper-container {
        background-color: #000;
    }
    .swiper-slide {
        background-size: cover;
        background-position: center;


        &.slide-1 {
            background-image:url('../img/single/semtm1.png');

        }

        &.slide-2 {
            background-image:url('../img/single/semtm2.png');
        }

        &.slide-3 {
            background-image:url('../img/single/semtm3.png');
        }

        &.slide-4 {
            background-image:url('../img/single/semtm4.png');
        }

        &.slide-5 {
            background-image:url('../img/single/semtm5.png');
        }
    }
    .gallery-top {
        height: 80%!important;
        width: 100%;
    }
    .gallery-thumbs {
        height: 20%!important;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
</style>
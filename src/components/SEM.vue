<template>
    <section class="single_work">
        <div class="container">
            <div class="top_single__wrapper">
                <div class="single__wrapper">
                    <div class="slider__wrapper">
                    <div id="sync1" class="thumbnails owl-carousel owl-theme">
                        <div class="item">
                            <img src="../img/SEM_TM.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm1.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm2.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm3.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm4.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm5.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm6.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm7.png">
                        </div>
                    </div>
                    <div id="sync2" class="thumbnailsBottom owl-carousel owl-theme">
                        <div class="item">
                            <img src="../img/SEM_TM.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm1.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm2.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm3.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm4.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm5.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm6.png">
                        </div>
                        <div class="item">
                            <img src="../img/single/semtm7.png">
                        </div>
                    </div>
                    </div>
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
                            <p>Разработка индивидуального дизайна шаблона</p>
                            <a href="https://github.com/BetskoDenis/SEM_TM">Посмотреть проект на GitHub</a>
                            <div class="button_line">
                                <router-link to="/our_works" class="button_line_our_works">К списку работ</router-link>
                            </div>

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
        mounted (){
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
        }
    }

</script>


<style>
    @import "../libs/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css";
    @import "../libs/single_work.css";


.button_line{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
    .single_work .top_single__wrapper .description_work .technology__wrapper .button_line .button_line_our_works {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        text-decoration: none;
        text-align: center;
        height: 65px;
        width: 175px;
        background-image: url("../img/button_our_works.png");
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: cover;
        background-size: cover;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        cursor: pointer;
        -webkit-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
        font-family: 'beer', sans-serif;
        font-size: 25px;
        color: #282828; }
.technology__wrapper .button_line_our_works:hover {
    -webkit-transform: scale(0.98);
    -ms-transform: scale(0.98);
    transform: scale(0.98); }

</style>

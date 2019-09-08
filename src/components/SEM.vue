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
                                <a href="#" class="button_line_our_works">К списку работ</a>
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

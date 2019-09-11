<template>

    <section class="our_works">

        <div class="container">
            <div class="our_works__wrapper">
                <div class="headline">
                    <h3>Наши работы</h3>
                </div>
                <div class="our_works_item__line">
                    <div class="our_works_item left white">
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
                        </div>
                        <div class="button__wrapper"><router-link to="/SEM" class="button_line_our_works">Подробнее</router-link></div>
                    </div>
                    <div class="our_works_item right black"><img src="../img/SEM_TM.png"></div>
                </div>
                <div class="our_works_item__line">
                    <div class="our_works_item right black"><img src="../img/force-farma_new.png"></div>
                    <div class="our_works_item left white">
                        <h4>Торговая марка ForceFarma</h4>
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
                        </div>
                        <div class="button__wrapper left_line"><router-link to="/Farma" class="button_line_our_works">Подробнее</router-link></div>
                    </div>
                </div>
                <div class="our_works_item__line">
                    <div class="our_works_item left white">
                        <h4>Торговая марка Alexis</h4>
                        <p>верстка по индивидуально разработанному дизайну</p><span>технологии использованные в проекте</span>
                        <div class="technology__wrapper">
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>SaSS</p>
                            <p>Jade</p>
                            <p>Gulp</p>
                            <p>JavaScript</p>
                            <p>JQuery</p>
                        </div>
                        <div class="button__wrapper"><router-link to="/Alexis" class="button_line_our_works">Подробнее</router-link></div>
                    </div>
                    <div class="our_works_item right black"><img src="../img/Alexis_new.png"></div>
                </div>
                <div class="our_works_item__line">
                    <div class="our_works_item right black"><img src="../img/Boostfolia_new.png"></div>
                    <div class="our_works_item left white">
                        <h4>Торговая марка BoostFolia</h4>
                        <p>верстка по индивидуально разработанному дизайну</p><span>технологии использованные в проекте</span>
                        <div class="technology__wrapper">
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>SaSS</p>
                            <p>Jade</p>
                            <p>Gulp</p>
                            <p>JavaScript</p>
                            <p>JQuery</p>
                        </div>
                        <div class="button__wrapper left_line">
                            <router-link to="/Boost" class="button_line_our_works">Подробнее</router-link></div>
                    </div>
                </div>
            </div>

            <div class="button_line_two">
            <router-link to="/" class="button_line_our_works_two">На главную</router-link>
        </div>
        </div>
    </section>

</template>


<script>

    export default {
        name: 'our_works'

    }
</script>


<style>
    .our_works {
        background-image: url("../img/metal.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
        padding: 80px 0; }
    .our_works .our_works__wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 100%; }
    .our_works .our_works__wrapper .our_works_item__line {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        margin-bottom: 15px;
        background-image: url("../img/line_our_works.png");
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        -webkit-border-radius: 40px;
        border-radius: 40px;
        padding: 30px; }
    @media (max-width: 1000px) {
        .our_works .our_works__wrapper .our_works_item__line {
            -webkit-border-radius: 80px;
            border-radius: 80px; } }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item .technology__wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item .technology__wrapper p {
        width: 150px;
        height: 45px;
        font-weight: bold; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item span {
        font-family: 'comfortaa', sans-serif;
        color: #323232;
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 30px; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item p {
        font-family: 'comfortaa', sans-serif;
        color: #323232;
        font-size: 16px;
        text-align: center;
        margin-bottom: 20px; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item .button__wrapper {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item .button__wrapper .button_line_our_works {
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
    .our_works .our_works__wrapper .our_works_item__line .our_works_item .button__wrapper.left_line {
        -webkit-box-pack: start;
        -webkit-justify-content: start;
        -ms-flex-pack: start;
        justify-content: start; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item .button_line_our_works:hover {
        -webkit-transform: scale(0.98);
        -ms-transform: scale(0.98);
        transform: scale(0.98); }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item.black {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item.white {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item.black {
        min-height: 400px; }
    .our_works .our_works__wrapper .our_works_item__line .our_works_item.black img {
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -webkit-box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.7);
        box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.7);
        -webkit-border-radius: 10px;
        border-radius: 10px; }
    .button_line_two{
        width: 100%;
        display: flex;
        justify-content: center;
    }
 .button_line_our_works_two {
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
  .button_line_our_works_two:hover {
        -webkit-transform: scale(0.98);
        -ms-transform: scale(0.98);
        transform: scale(0.98); }
</style>
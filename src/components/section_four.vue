<template>
    <section id="section_four" class="section_four">
        <div class="container">
            <div class="price__wrapper">
                <div class="headline">
                    <h3>Услуги и цены</h3>
                </div>
                <div class="price_item">
                    <h4>Базовый</h4>
                    <p>Стандартный шаблон</p>
                    <p>Верстка Lending Page (до 5 экранов)</p>
                    <p>Размещение на CMS (Wordpress)</p>
                    <p>Размещение на хостинге</p>
                    <p>Домент на 1 год в подарок (в зонах .net.ua, .com.ua, .ru)</p>
                    <button class="button_price base">Заказать</button>
                </div>
                <div class="price_item">
                    <h4>Оптимальный</h4>
                    <p>Индивидуальный дизайн</p>
                    <p>Верстка Lending Page (больше 5 экранов)</p>
                    <p>Размещение на CMS (Wordpress)</p>
                    <p>Размещение на хостинге</p>
                    <p>Домент на 1 год в подарок (в зонах .net.ua, .com.ua, .ru)</p>
                    <button class="button_price optimal">Заказать</button>
                </div>
                <div class="price_item">
                    <h4>Премиум</h4>
                    <p>Индивидуальный дизайн</p>
                    <p>Верстка по согласованию с заказчиком</p>
                    <p>Размещение на php фреймворках (Laravel или Yii)</p>
                    <p>Размещение на хостинге</p>
                    <p>Домент на 1 год в подарок (в зонах .net.ua, .com.ua, .ru)</p>
                    <button class="button_price premium">Заказать</button>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'SectionFour'
    }
</script>

<style>
    .section_four {
        height: 100%;
        background-image: url("../img/metal.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 80px 0; }
    .section_four .price__wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around; }
    .section_four .price__wrapper .headline {
        width: 100%; }
    .section_four .price__wrapper .price_item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        width: 300px;
        height: 550px;
        background-image: url("../img/price1_bg.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        padding: 30px;
        -webkit-box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.7);
        box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.7);
        position: relative;
        margin-bottom: 20px; }
    .section_four .price__wrapper .price_item p {
        font-family: 'comfortaa', sans-serif;
        font-size: 18px;
        width: 100%;
        text-align: start;
        line-height: 1.5;
        letter-spacing: 1px;
        margin-bottom: 14px; }
    .section_four .price__wrapper .price_item p:nth-child(6) {
        margin-bottom: 20px; }
    .section_four .price__wrapper .price_item .button_price {
        border: none;
        height: 56px;
        width: 146px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        cursor: pointer;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 20px;
        font-family: 'comfortaa', sans-serif;
        color: #323232;
        -webkit-box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.7);
        box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.7);
        -webkit-transition: all .1s;
        -o-transition: all .1s;
        transition: all .1s;
        position: absolute;
        bottom: 30px; }
    .section_four .price__wrapper .price_item:nth-child(3) {
        background-image: url("../img/price2_bg.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat; }
    .section_four .price__wrapper .price_item:nth-child(4) {
        background-image: url("../img/price3_bg.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat; }
    .section_four .price__wrapper .button_price.base {
        background-image: url("../img/button_small.png"); }
    .section_four .price__wrapper .button_price.optimal {
        background-image: url("../img/price_button2.png"); }
    .section_four .price__wrapper .button_price.premium {
        background-image: url("../img/price_button3.png"); }
    .section_four .price__wrapper .button_price:hover {
        -webkit-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95); }

</style>
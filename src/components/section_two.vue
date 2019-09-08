<template>
    <section id="section_two" class="section_two">
        <div class="container">
            <div class="section_two__wrapper">
                <div class="headline revealator-slidedown">
                    <h3>О нас</h3>
                </div>
                <div class="section_two_line one">
                    <div class="section_two_item revealator-slidedown revealator-delay1"><img src="../img/1.png">
                        <h5>ИДЕЯ</h5>
                        <p>у Вас есть идея сделать проект, который будет вашей компании?</p>
                    </div>
                    <div class="section_two_item arrow revealator-slidedown revealator-delay2"><img src="../img/w256h2561339857755left.png"></div>
                    <div class="section_two_item revealator-slidedown revealator-delay3"><img src="../img/Steampunk-Light-icon.png">
                        <h5>Разработка дизайна</h5>
                        <p>
                            Вы обращаэтесь в Lamp и с
                            лучшим дизайнером прорабатываете
                            каждую мелочь
                        </p>
                    </div>
                    <div class="section_two_item arrow revealator-slidedown revealator-delay4"><img src="../img/w256h2561339857755left.png"></div>
                    <div class="section_two_item revealator-slidedown revealator-delay5"><img src="../img/0cf3a0c5d22311f5b20bbf673d1a4a56.png">
                        <h5>Проработка шаблона</h5>
                        <p>
                            лучшие специалисты, используя
                            новейшие технологии, дорабатывают
                            шаблон, продумывая каждую деталь
                        </p>
                    </div>
                </div>
                <div class="section_two_line two">
                    <div class="section_two_item arrow revealator-slidedown revealator-delay2"><img src="../img/w256h2561339857755left.png"></div>
                </div>
                <div class="section_two_line three">
                    <div class="section_two_item revealator-slidedown revealator-delay5"><img src="../img/steampunk-guy-adobe.png">
                        <h5>Продукт</h5>
                        <p>
                            приносящий удовольствие,
                            успех вашему бизнесу и миллионы
                        </p>
                    </div>
                    <div class="section_two_item arrow revealator-slidedown revealator-delay4"><img src="../img/w256h2561339857755left.png"></div>
                    <div class="section_two_item revealator-slidedown revealator-delay3"><img src="../img/3.png">
                        <h5>Устранение замечаний</h5>
                        <p>
                            команда тестировщиков отслеживает
                            мелкие недоработки и специалисты Lamp
                            устраняют их в кратчайшие сроки
                        </p>
                    </div>
                    <div class="section_two_item arrow revealator-slidedown revealator-delay2"><img src="../img/w256h2561339857755left.png"></div>
                    <div class="section_two_item revealator-slidedown revealator-delay1"><img src="../img/2.png">
                        <h5>Разработка тестовой версии</h5>
                        <p>
                            технические ”маньяки” разрбатывавют
                            функционал, предвосхищая Ваши самые смелые идеи
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'SectionTwo'
    }
</script>
<style>

    .section_two {
        height: 100%;
        width: 100%;
        background-color: gainsboro;
        background-image: url("../img/metal.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 80px 0; }
    .section_two .section_two__wrapper {
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
        width: 100%;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%; }
    .section_two .section_two__wrapper .section_two_line {
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
    @media (max-width: 1150px) {
        .section_two .section_two__wrapper .section_two_line {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center; } }
    .section_two .section_two__wrapper .section_two_line .section_two_item {
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
        max-width: 300px;
        margin-bottom: 30px; }
    .section_two .section_two__wrapper .section_two_line .section_two_item img {
        margin-bottom: 15px; }
    .section_two .section_two__wrapper .section_two_line .section_two_item p {
        font-family: 'comfortaa',sans-serif;
        font-size: 18px;
        text-align: center; }
    .section_two .section_two__wrapper .section_two_line .arrow {
        width: 100px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center; }
    .section_two .section_two__wrapper .section_two_line .arrow img {
        -o-object-fit: cover;
        object-fit: cover;
        height: 65px;
        width: 95px; }
    @media (max-width: 1150px) {
        .section_two .section_two__wrapper .section_two_line .arrow {
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg); } }
    .section_two .section_two__wrapper .section_two_line.two {
        min-height: 95px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        margin-right: 10%; }
    @media (max-width: 1150px) {
        .section_two .section_two__wrapper .section_two_line.two {
            margin-right: 0; } }
    .section_two .section_two__wrapper .section_two_line.two .section_two_item.arrow {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        min-width: 95px;
        margin: 40px 0; }
    .section_two .section_two__wrapper .section_two_line.three .arrow {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg); }
    @media (max-width: 1150px) {
        .section_two .section_two__wrapper .section_two_line.three .arrow {
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg); } }

</style>
<template>
    <section id="section_three" class="section_three">
        <div class="container">
            <div class="portfolio__wrapper">
                <div class="headline">
                    <h2>Портфолио</h2>
                </div>
                <div id="box" class="portfolio owl-carousel">
                    <img src="../img/done/alexis.jpg">
                    <img src="../img/done/boostfolia.jpg">
                    <img src="../img/done/forcefarma.jpg">
                    <img src="../img/done/sem.jpg">
                    <img src="../img/done/forcefarma.jpg">
                </div>
                <router-link to="/our_works">больше проектов >></router-link>
            </div>
        </div>
    </section>
</template>


<script>

    export default {
        name: 'SectionThree',
        comments:{
        }
    }
</script>


<style>
    .section_three {
        height: 100%;
        width: 100%;
        background-color: gainsboro;
        background-image: url("../img/metal_black.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 80px 0 150px 0; }
    .section_three .portfolio__wrapper {
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column; }
    .section_three .portfolio__wrapper .headline h2 {
        margin-bottom: 150px; }
    .section_three .portfolio__wrapper #box {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        position: relative;
        min-width: 270px;
        max-width: 320px;
        height: 450px;
        margin: auto;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-10deg);
        transform: rotateX(-10deg); }
    .section_three .portfolio__wrapper #box .owl-stage-outer {
        height: 100%; }
    .section_three .portfolio__wrapper #box .owl-stage-outer .owl-stage {
        height: 100%; }
    .section_three .portfolio__wrapper #box .owl-stage-outer .owl-stage .owl-item {
        height: 100%; }
    .section_three .portfolio__wrapper #box .owl-nav {
        color: white; }
    .section_three .portfolio__wrapper #box .owl-nav .owl-prev {
        height: 20px;
        width: 20px;
        border-top: 1px solid #f0f0f0;
        border-left: 1px solid #f0f0f0;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
        left: -webkit-calc(-5px - 5vw);
        left: calc(-5px - 5vw);
        bottom: -webkit-calc(50% - 20px);
        bottom: calc(50% - 20px);
        z-index: 5; }
    @media (max-width: 500px) {
        .section_three .portfolio__wrapper #box .owl-nav .owl-prev {
            left: -10px;
            height: 10px;
            width: 10px; } }
    .section_three .portfolio__wrapper #box .owl-nav .owl-prev span {
        display: none; }
    .section_three .portfolio__wrapper #box .owl-nav .owl-next {
        height: 20px;
        width: 20px;
        border-top: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        right: -webkit-calc(-5px - 5vw);
        right: calc(-5px - 5vw);
        bottom: -webkit-calc(50% - 20px);
        bottom: calc(50% - 20px);
        z-index: 5; }
    @media (max-width: 500px) {
        .section_three .portfolio__wrapper #box .owl-nav .owl-next {
            right: -10px;
            height: 10px;
            width: 10px; } }
    .section_three .portfolio__wrapper #box .owl-nav .owl-next span {
        display: none; }
    @media (max-width: 1000px) {
        .section_three .portfolio__wrapper #box {
            -webkit-box-shadow: 0 0 0;
            box-shadow: 0 0 0; } }
    .section_three .portfolio__wrapper #box img {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        position: absolute;
        left: 0;
        top: 0;
        min-width: 270px;
        max-width: 320px;
        height: 450px;
        -o-object-fit: cover;
        object-fit: cover;
        line-height: 200px;
        font-size: 50px;
        text-align: center;
        -webkit-box-shadow: 5px 5px 10px 10px black;
        box-shadow: 5px 5px 10px 10px black; }
    @media (max-width: 1000px) {
        .section_three .portfolio__wrapper #box img {
            -webkit-box-shadow: 0 0 0;
            box-shadow: 0 0 0; } }
    .section_three .portfolio__wrapper #box p {
        margin: auto;
        -webkit-transform: translateY(100px) rotateX(90deg);
        transform: translateY(100px) rotateX(90deg);
        background-color: #0005;
        color: #fff; }
    .section_three .portfolio__wrapper a {
        text-decoration: none;
        font-family: 'comfortaa', sans-serif;
        font-size: 24px;
        color: #cdcdcd;
        max-width: 160px;
        position: absolute;
        bottom: -95px;
        right: 0; }

</style>
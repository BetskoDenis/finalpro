<template>
    <section id="section_five" class="section_five">
        <div class="container">
            <div class="headline revealator-slidedown">
                <h2>Обратная связь</h2>
            </div>
            <div class="form__wrapper">
                <form action="" class="revealator-slidedown">
                    <h6>Напишите нам</h6>
                    <input type="text" placeholder="name">
                    <input type="email" placeholder="email">
                    <textarea placeholder="message"></textarea>
                    <button>Send</button>
                </form>
                <div class="image"><img src="../img/knocker-576733.png"></div>
                <div class="social__wrapper revealator-slidedown">
                    <h6>или обратитесь в мессенджерах</h6><img src="../img/viber.png">
                    <img src="../img/pinterest.png">
                    <img src="../img/google.png">
                    <img src="../img/telegramm.png">
                    <img src="../img/linkedin.png">
                    <img src="../img/facebook.png">
                </div>
                <div class="handle"><img src="../img/handle.png"></div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'SectionFive'
    }
</script>


<style>
    .section_five {
        height: 100%;
        background-image: url("../img/metal_black.png");
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        padding: 80px 0 20px 0; }
    .section_five .form__wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around; }
    .section_five .form__wrapper form {
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
        margin-bottom: 40px; }
    .section_five .form__wrapper form input {
        background-image: url("../img/small_shilda_name.png");
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        width: 295px;
        height: 50px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        border: none;
        color: #282828;
        padding: 5px 30px;
        font-family: 'comfortaa', sans-serif;
        font-size: 20px;
        margin-bottom: 30px;
        -webkit-box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.9);
        box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.9); }
    @media (max-width: 500px) {
        .section_five .form__wrapper form input {
            -webkit-box-shadow: 0 0 0;
            box-shadow: 0 0 0; } }
    .section_five .form__wrapper form textarea {
        background-image: url("../img/small_shilda_message.png");
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        max-width: 295px;
        height: 100px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        border: none;
        color: #282828;
        padding: 5px 30px;
        font-family: 'comfortaa', sans-serif;
        font-size: 20px;
        -webkit-box-shadow: 9px 9px 15px 5px black;
        box-shadow: 9px 9px 15px 5px black;
        margin-bottom: 30px; }
    @media (max-width: 500px) {
        .section_five .form__wrapper form textarea {
            -webkit-box-shadow: 0 0 0;
            box-shadow: 0 0 0; } }
    .section_five .form__wrapper form button {
        width: 195px;
        height: 50px;
        background-image: url("../img/button.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        border: none;
        font-family: 'comfortaa', sans-serif;
        font-size: 24px;
        color: #323232;
        cursor: pointer;
        -webkit-box-shadow: 9px 9px 15px 5px black;
        box-shadow: 9px 9px 15px 5px black; }
    .section_five .form__wrapper .image {
        margin: 0 30px 0 50px;
        padding: 50px 0 0 0; }
    @media (max-width: 905px) {
        .section_five .form__wrapper .image {
            display: none; } }
    .section_five .form__wrapper .social__wrapper {
        width: 320px;
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
        justify-content: center;
        margin-bottom: 80px; }
    .section_five .form__wrapper .social__wrapper img {
        height: 83px;
        width: 83px;
        margin: 10px;
        -webkit-box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.9);
        box-shadow: 9px 9px 15px 5px rgba(0, 0, 0, 0.9);
        cursor: pointer;
        -webkit-transition: all .1s;
        -o-transition: all .1s;
        transition: all .1s; }
    .section_five .form__wrapper .social__wrapper img:hover {
        -webkit-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95); }
    .section_five .form__wrapper .social__wrapper img:nth-child(2n) {
        margin-right: 40px; }
    .section_five .form__wrapper .handle {
        width: 100%;
        text-align: end; }
    @media (max-width: 905px) {
        .section_five .form__wrapper .handle {
            display: none; } }
</style>
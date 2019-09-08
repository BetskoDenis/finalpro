<template>
    <header>
        <div class="container">
            <div class="header__wrapper">
                <div class="logo_header__wrapper">
                    <div class="cable"></div><a href="#section_one" class="logo_header off"></a>
                </div>
                <div class="burger_menu_button"><span></span></div>
            </div>
        </div>
        <div class="menu_dark">
            <div class="menu_dark_item">
                <p>ME</p>
            </div>
            <div class="menu_dark_item">
                <p>NU</p><span>MENU</span><img src="../img/steampunk_gear_png_by_lavitadistress-d6rdgyk.png">
            </div>
            <div class="menu_dark_item">
                <nav class="menu">
                    <ul>
                        <li><a href="#section_one">Главная</a></li>
                        <li><a href="#section_two">О нас</a></li>
                        <li><a href="#section_three">Портфолио</a></li>
                        <li><a href="#section_four">Услуги и цены</a></li>
                        <li><a href="#section_five">Обратная связь</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    header {
        height: 70px;
        background-color: rgba(15, 15, 15, 0.95);
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10; }
    header .container .header__wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 100%;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        position: relative; }
    header .container .header__wrapper .logo_header__wrapper {
        position: absolute;
        top: 0;
        left: 0;
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
        z-index: 10; }
    header .container .header__wrapper .logo_header__wrapper .cable {
        width: 2px;
        height: 10px;
        background-color: rgba(240, 240, 240, 0.5);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s; }
    header .container .header__wrapper .logo_header__wrapper .logo_header.off {
        z-index: 3;
        width: 65px;
        height: 65px;
        background-image: url("../img/lamp_off2.png");
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center; }
    header .container .header__wrapper .logo_header__wrapper .logo_header.on {
        z-index: 3;
        width: 65px;
        height: 65px;
        background-image: url("../img/lamp_on.png");
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: block; }
    header .container .header__wrapper .burger_menu_button {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        height: 30px;
        width: 50px;
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        -ms-flex-align: end;
        align-items: flex-end;
        cursor: pointer;
        -webkit-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s; }
    header .container .header__wrapper .burger_menu_button span {
        background-color: rgba(240, 240, 240, 0.8);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        width: 50px;
        height: 2px;
        position: relative; }
    header .container .header__wrapper .burger_menu_button span:before {
        content: '';
        position: absolute;
        height: 2px;
        background-color: rgba(240, 240, 240, 0.8);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        top: -10px;
        right: 0;
        width: 50px; }
    header .container .header__wrapper .burger_menu_button span:after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: rgba(240, 240, 240, 0.8);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        bottom: -10px;
        width: 30px;
        right: 0; }
    header .container .header__wrapper .burger_menu_button.active span {
        width: 0px; }
    header .container .header__wrapper .burger_menu_button.active span:after {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg); }
    header .container .header__wrapper .burger_menu_button.active span:before {
        top: 10px;
        width: 30px;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg); }
    header .menu_dark {
        display: none; }
    header .menu_dark .menu_dark_item {
        border-left: 1px solid black;
        height: -webkit-calc(100vh - 70px);
        height: calc(100vh - 70px);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
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
        opacity: 1;
        padding: 0 10px; }
    header .menu_dark .menu_dark_item:nth-child(1) {
        opacity: 0;
        z-index: 3;
        -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        transform: translateX(-100%);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        width: 100%;
        background-color: rgba(15, 15, 15, 0.95);
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end; }
    header .menu_dark .menu_dark_item:nth-child(2) {
        opacity: 0;
        z-index: 2;
        -webkit-transform: translateX(-300%);
        -ms-transform: translateX(-300%);
        transform: translateX(-300%);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        width: 100%;
        background-color: rgba(15, 15, 15, 0.95);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start; }
    header .menu_dark .menu_dark_item:nth-child(3) {
        opacity: 0;
        z-index: 1;
        -webkit-transform: translateX(-500%);
        -ms-transform: translateX(-500%);
        transform: translateX(-500%);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        width: 100%;
        background-color: rgba(15, 15, 15, 0.95); }
    header .menu_dark .menu_dark_item p {
        font-family: 'beer',sans-serif;
        opacity: 1;
        -webkit-transition: .8s;
        -o-transition: .8s;
        transition: .8s;
        font-size: -webkit-calc(50px + 7.8vw);
        font-size: calc(50px + 7.8vw);
        color: rgba(240, 240, 240, 0.8);
        -webkit-transform: translateX(-500%);
        -ms-transform: translateX(-500%);
        transform: translateX(-500%);
        letter-spacing: 30px;
        text-shadow: 0px 0px 0px; }
    header .menu_dark .menu_dark_item img {
        -webkit-transform: translateX(-500%);
        -ms-transform: translateX(-500%);
        transform: translateX(-500%);
        -webkit-transition: .8s;
        -o-transition: .8s;
        transition: .8s; }
    header .menu_dark .menu_dark_item span {
        display: none;
        font-family: 'beer',sans-serif;
        opacity: 0;
        -webkit-transition: .8s;
        -o-transition: .8s;
        transition: .8s;
        font-size: -webkit-calc(100px + 5.2vw);
        font-size: calc(100px + 5.2vw);
        color: rgba(240, 240, 240, 0.8);
        -webkit-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        transform: rotate(-90deg);
        text-shadow: 0px 0px 0px; }
    header .menu_dark .menu {
        opacity: 0;
        height: 100%;
        -webkit-transform: translateX(700%);
        -ms-transform: translateX(700%);
        transform: translateX(700%);
        -webkit-transition: all .8s;
        -o-transition: all .8s;
        transition: all .8s; }
    header .menu_dark .menu ul {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around; }
    header .menu_dark .menu ul li {
        position: relative;
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: start;
        -ms-flex-pack: start;
        justify-content: start;
        width: 200px; }
    header .menu_dark .menu ul li a {
        font-family: 'comfortaa',sans-serif;
        text-decoration: none;
        color: rgba(240, 240, 240, 0.7);
        font-size: 24px;
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s; }
    header .menu_dark .menu ul li:before {
        content: '';
        position: absolute;
        top: -2px;
        left: -55px;
        background-image: url("../img/lamp_off2.png");
        -webkit-background-size: cover;
        background-size: cover;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        height: 30px;
        width: 30px; }
    header .menu_dark .menu ul li:after {
        content: '';
        position: absolute;
        top: -10%;
        left: -15px;
        height: 30px;
        width: 1px;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        background-color: rgba(240, 240, 240, 0.5);
        -webkit-transition: all .8s;
        -o-transition: all .8s;
        transition: all .8s; }
    header .menu_dark .menu ul li:hover:after {
        background-color: #fafa64; }
    header .menu_dark .menu ul li:hover:before {
        background-image: url("../img/lamp_on.png"); }
    header .menu_dark .menu ul li:hover a {
        color: #fafa64; }
    header .menu_dark.mobile .menu_dark_item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex; }
    header .menu_dark.mobile .menu_dark_item:nth-child(1) {
        display: none; }
    header .menu_dark.mobile .menu_dark_item:nth-child(2) {
        display: none; }
    header .menu_dark.mobile .menu_dark_item:nth-child(3) {
        opacity: 0;
        z-index: 1;
        -webkit-transform: translateX(-500%);
        -ms-transform: translateX(-500%);
        transform: translateX(-500%);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        width: 100%;
        background-color: rgba(15, 15, 15, 0.95);
        padding-left: 100px; }
    header .menu_dark.tablet .menu_dark_item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33%;
        -ms-flex: 1 1 33%;
        flex: 1 1 33%; }
    header .menu_dark.tablet .menu_dark_item:nth-child(1) {
        display: none; }
    header .menu_dark.tablet .menu_dark_item:nth-child(2) {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: start;
        -ms-flex-pack: start;
        justify-content: start; }
    header .menu_dark.tablet .menu_dark_item:nth-child(2) img {
        display: none; }
    header .menu_dark.tablet .menu_dark_item:nth-child(2) p {
        display: none; }
    header .menu_dark.tablet .menu_dark_item:nth-child(2) span {
        display: block; }
    header .menu_dark.tablet .menu_dark_item:nth-child(3) {
        opacity: 0;
        -webkit-transform: translateX(-500%);
        -ms-transform: translateX(-500%);
        transform: translateX(-500%);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        transition: all .4s;
        width: 100%;
        background-color: rgba(15, 15, 15, 0.95);
        z-index: 5; }
    header .menu_dark.tablet .menu ul li a {
        z-index: 5; }
    header .menu_dark.tablet .menu ul li:after {
        height: 30px; }
    header .menu_dark.PC .menu_dark_item {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33%;
        -ms-flex: 1 1 33%;
        flex: 1 1 33%; }
</style>
<template>

</template>
<script>
    export default {
        name: 'General'
    }
</script>
<style>
    /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *, :before, :after {

        -webkit-box-sizing: border-box;
        box-sizing: border-box; }
    @font-face {
        font-family: "robotoslabregular";
        src: url("../fonts/robotoslabregular/robotoslabregular.woff2") format("woff2"), url("../fonts/robotoslabregular/robotoslabregular.woff") format("woff"), url("../fonts/robotoslabregular/robotoslabregular.ttf") format("truetype"); }

    @font-face {
        font-family: "robotoslablight";
        src: url("../fonts/robotoslablight/robotoslablight.woff2") format("woff2"), url("../fonts/robotoslablight/robotoslablight.woff") format("woff"), url("../fonts/robotoslablight/robotoslablight.ttf") format("truetype"); }

    @font-face {
        font-family: "beer";
        src: url("../fonts/beer/beermoney.woff2") format("woff2"), url("../fonts/beer/beermoney.woff") format("woff"), url("../fonts/beer/beermoney.ttf") format("truetype"); }

    @font-face {
        font-family: "habibi";
        src: url("../fonts/habibi/habibi.woff2") format("woff2"), url("../fonts/habibi/habibi.woff") format("woff"), url("../fonts/habibi/habibi.ttf") format("truetype"); }

    @font-face {
        font-family: "comfortaa";
        src: url("../fonts/comfortaa/comfortaa.woff2") format("woff2"), url("../fonts/comfortaa/comfortaa.woff") format("woff"), url("../fonts/comfortaa/comfortaa.ttf") format("truetype"); }
    body {
        font-size: 14px;
        min-width: 320px;
        overflow-x: hidden;
        color: #323232; }

    .container {
        max-width: 1250px;
        padding: 0 15px;
        width: 100%;
        margin: 0 auto;
        height: 100%; }

    h2 {
        width: 100%;
        font-size: 60px;
        color: #cdcdcd;
        font-family: 'beer', sans-serif;
        text-align: center;
        margin-bottom: 70px; }

    h3 {
        width: 100%;
        font-size: 60px;
        font-family: 'beer', sans-serif;
        text-align: center;
        margin-bottom: 70px; }

    h4 {
        width: 100%;
        font-size: -webkit-calc(14px + .84vw);
        font-size: calc(14px + .84vw);
        font-family: 'comfortaa', sans-serif;
        text-align: center;
        margin-bottom: 20px;
        font-weight: bold;
        color: #323232; }

    h5 {
        font-family: 'beer', sans-serif;
        font-size: 35px;
        text-align: center;
        margin-bottom: 15px; }

    h6 {
        width: 100%;
        font-size: 24px;
        color: #cdcdcd;
        font-family: 'beer', sans-serif;
        text-align: center;
        margin-bottom: 40px; }

</style>
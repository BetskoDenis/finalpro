
<template>
    <section id="section_one" class="section_one">
        <video src="../img/HD.mp4" muted="muted" loop="loop" autoplay="autoplay"></video>
    </section>
</template>
<script>
export default {
    name: 'SectionOne'
}
</script>
<style>
    .section_one {
        height: 100vh;
        width: 100%;
        position: relative;
        z-index: 2; }
    .section_one video {
        height: 100%;
        width: 100%;
        position: relative;
        -o-object-fit: cover;
        object-fit: cover; }
    .section_one:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        background-image: url("../img/fon2.png");
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center; }
    @media (max-width: 850px) {
        .section_one:before {
            background-image: url("../img/850.png"); } }
    @media (max-width: 550px) {
        .section_one:before {
            background-image: url("../img/550.png"); } }

</style>
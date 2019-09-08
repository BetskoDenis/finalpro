<template>
    <div id="home">

        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>

    </div>
</template>

<script>

    import SectionOne from './section_one.vue'
    import SectionTwo from './section_two.vue'
    import SectionThree from './section_three.vue'
    import SectionFour from './section_four.vue'
    import SectionFive from './section_five.vue'


    export default {
        name: 'home',
        components: {

            SectionOne,
            SectionTwo,
            SectionThree,
            SectionFour,
            SectionFive,


        },
    }

</script>

<style lang="css" type="text/scss">

</style>

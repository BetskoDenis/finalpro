
<template>
  <div id="app">
    <General/>
      <Header/>
    <router-view/>

  </div>
</template>

<script>

  import General from './components/general.vue'
  import Header from './components/header.vue'


  export default {
  name: 'app',
  components: {
    General,
      Header

  }
}

</script>

<style>
  @import "./libs/revealator-master/fm.revealator.jquery.min.css";
  @import "./libs/libs.min.css";
  @import "./libs/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css";
</style>

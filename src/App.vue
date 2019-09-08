
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
  import Jq from './js/jquery-3.3.1.min.js'

  //import fotorama from './js/fotorama.js'
  import owl from './js/owl.carousel.js'
  import relevator from './js/fm.revealator.jquery.js'
  import Common from './js/common.js'

  export default {
  name: 'app',
  components: {
    General,
    Header,
    Jq,

    //fotorama,
    owl,
    relevator,
    Common
  }
}
</script>

<style>
  @import "./libs/revealator-master/fm.revealator.jquery.min.css";
  @import "./libs/libs.min.css";
  @import "./libs/fotorama.css";
</style>

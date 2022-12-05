<script setup>
import Header from "@/components/TheHeader.vue";
import Main from "@/components/TheMain.vue";
import Footer from "@/components/TheFooter.vue";
</script>

<template>
  <div class="cnotainer">
    <Header title=" Les Argonautes" />
    <Main />
    <Footer footer="Réalisé par Jason en Anthestérion de l'an 515 avant JC" />
  </div>
</template>

<style lang="scss">
/* Button add */
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

*,
*::after,
*::before {
  @include fullBody;
}

.cnotainer {
  box-sizing: $page-sizing;
  font-family: $polce-page;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $polce-page;
  text-align: center;
}
/* Jusqu'ici */
</style>

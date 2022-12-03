<script setup>
import Header from "@/components/TheHeader.vue";
// import Main from "@/components/Main.vue";
// import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="cnotainer">
    <header>
      <Header title=" Les Argonautes" />
    </header>
  </div>
</template>

<style lang="scss">
/* Button add */
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

*,
*::after,
*::before {
  margin: 0 auto;
  padding: 0 auto;
  box-sizing: inherit;
}

header {
  background: #f4f4f4;
  text-align: center;
  padding: 2em;
}

.cnotainer {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-align: center;
}
/* Jusqu'ici */
</style>

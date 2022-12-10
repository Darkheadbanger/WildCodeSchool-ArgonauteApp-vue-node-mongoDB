<script setup>
import logoWCS from "../assets/Wild-Code-School-logo.png";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header>
    <h1>
      <img :src="logoWCS" alt="Logo du wild code school" />
      <p>{{ props.title }}</p>
    </h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $header-background;
  text-align: center;
  padding: 2em;
  h1 {
    display: block ruby;
    @include header-title;
    @include very-small-mobile-only {
      display: unset;
      font-size: 1.5rem;
    }
    @include small-mobile-only {
      font-size: 2rem;
    }
    img {
      @include header-logo;
      padding: 0 2rem 0 0;
      @include very-small-mobile-only {
        padding: unset;
      }
    }
  }
}
</style>

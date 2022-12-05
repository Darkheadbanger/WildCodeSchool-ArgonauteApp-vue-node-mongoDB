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
      {{ props.title }}
    </h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $header-background;
  text-align: center;
  padding: 2em;
  h1 {
    @include header-title;
    img {
      @include header-logo;
    }
  }
}
</style>

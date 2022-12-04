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
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    img {
      width: 17%;
      min-width: 96px;
      max-width: 96px;
    }
  }
}
</style>

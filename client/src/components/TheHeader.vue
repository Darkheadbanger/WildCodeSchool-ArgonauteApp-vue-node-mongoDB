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
  <h1>
    <img :src="logoWCS" alt="Logo du wild code school" />
    {{ props.title }}
  </h1>
</template>

<style lang="scss" scoped>
header {
  h1 {
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
    img {
      width: 17%;
      min-width: 96px;
      vertical-align: middle;
    }
  }
}
</style>

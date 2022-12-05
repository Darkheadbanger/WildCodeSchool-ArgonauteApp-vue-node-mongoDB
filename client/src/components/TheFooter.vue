<script setup>
let props = defineProps({
  footer: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer
    class="container-footer container-footer__element container-footer__element--modifier"
  >
    <p>{{ props.footer }}</p>
  </footer>
</template>
<style lang="scss" scoped>
.container-footer {
  margin-top: 2rem;
  padding: 0.25rem 0;
  background: $footer-container-color;
  &__element {
    text-align: center;
    &--modifier {
      color: $text-color-on-darkend-color;
    }
  }
}
</style>

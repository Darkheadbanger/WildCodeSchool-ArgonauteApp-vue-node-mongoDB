<script setup>
const props = defineProps({
  member: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li
    class="container-member container-member__element container-member__element--modifier"
  >
    <div>Nom: {{ props.member }} ffrfr</div>
    <div>Sexe: {{ props.member }}</div>
    <div>Age: {{ props.member }}</div>
  </li>
</template>
<style lang="scss" scoped>
.container-member {
  @include member-container;
}
</style>

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
    <div class="separator-line">Nom: {{ props.member }}</div>
    <div class="separator-line">Sexe: {{ props.member }}</div>
    <div class="separator-line">Age: {{ props.member }}</div>
  </li>
  <li
    class="container-member container-member__element container-member__element--modifier"
  >
    <div class="separator-line">Nom: {{ props.member }}</div>
    <div class="separator-line">Sexe: {{ props.member }}</div>
    <div class="separator-line">Age: {{ props.member }}</div>
  </li>
</template>
<style lang="scss" scoped>
.container-member {
  @include member-container;
  &__element {
    background-color: $member-background-color;
    text-align: center;
    list-style-type: none;
    &--modifier {
      color: $text-color-on-darkend-color;
    }
  }
  .separator-line {
    @include separator-line;
  }
  // last-of-type peut cibler des éléments d'un type donné placés après des éléments d'un autre type, quel que soit le nombre de ces derniers.
  // Ici on utilise last-child car ul li car c'est une succession des elements du même type
  .separator-line:last-child {
    border-bottom: none;
  }
}
</style>

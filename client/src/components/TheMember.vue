<script setup>
const props = defineProps({
  member: { type: Object, required: true },
});
</script>

<template>
  <li class="li-member li-member__element li-member__element--modifier">
    <div class="separator-line">Nom : {{ props.member.name }}</div>
    <!-- <div class="separator-line">Sexe: {{ props.member }}</div>
    <div class="separator-line">Age: {{ props.member }} ans</div> -->
  </li>
</template>
<style lang="scss" scoped>
.li-member {
  @include flex-row {
    justify-content: space-evenly;
  }
  @include member-container;

  &__element {
    text-align: center;
    list-style-type: none;
    &--modifier {
      color: $text-color-on-darkend-color;
      background-color: $member-background-color;
    }
  }
  // .separator-line {
  //   @include separator-line;
  // }
  // last-of-type peut cibler des éléments d'un type donné placés après des éléments d'un autre type, quel que soit le nombre de ces derniers.
  // Ici on utilise last-child car ul li car c'est une succession des elements du même type
  // .separator-line:last-child {
  //   border-bottom: none;
  // }
}
</style>

<script setup>
const props = defineProps({
  member: { type: Object, required: true },
});
let nom = props.member.membre;
let age = props.member.age;
let sexe =
  props.member.sexe.charAt(0).toUpperCase() + props.member.sexe.slice(1);
</script>

<template>
  <li class="li-member li-member__element li-member__element--modifier">
    <div class="separator-line">
      <span
        >Nom : <span>{{ nom }}</span></span
      >
    </div>
    <div class="separator-line">
      <span
        >Age : <span>{{ age }}</span></span
      >
    </div>
    <div class="separator-line">
      <span
        >Sexe : <span>{{ sexe }}</span></span
      >
    </div>
  </li>
</template>
<style lang="scss" scoped>
.li-member {
  @include flex-row {
    justify-content: space-evenly;
  }
  @include very-small-mobile-only {
    @include flex-column {
      justify-content: space-evenly;
    }
  }
  &__element {
    @include member-container;
    text-align: center;
    list-style-type: none;
    @include very-small-mobile-only {
      margin: 2em 0rem 0em -2rem;
    }
    @include laptop-only {
      margin: 2em 2rem 0em 2rem;
    }
    &--modifier {
      color: $text-color-on-darkend-color;
      background-color: $member-background-color;
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

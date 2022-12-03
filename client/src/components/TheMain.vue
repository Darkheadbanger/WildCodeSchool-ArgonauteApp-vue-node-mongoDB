<script setup>
import Form from "./TheForm.vue";
</script>

<template>
  <main>
    <section class="containerForm containerForm__element containerForm__element--modifier">
      <h2>Add  an Argonautes</h2>
      <Form />
    </section>
    <section class="containerMember containerMember__element containerMember__element--modifier">
      <h3>Membres de l'équipage</h3>
    </section>
  </main>
</template>
<style lang="scss" scoped>
main {
  h2 {
    font-size: 1.5em;
  }
  .containerMember{
    background: $member-background;
  }
}
</style>

<script setup>
import Form from "./TheForm.vue";
import Member from "./TheMember.vue";
</script>

<template>
  <main>
    <section>
      <div
        class="containerForm containerForm__element containerForm__element--modifier"
      >
        <h2>Ajouter un(e) Argonaute</h2>
        <Form />
      </div>

      <section
        class="container-member container-member__element container-member__element--modifier"
      >
        <h2>Membres de l'équipage</h2>
        <div class="ul-wrapper">
          <ul class="member-list-container member-list-container__element">
            <Member
              v-for="crewMember in crewArray"
              :key="crewMember.id"
              :member="crewMember"
            />
          </ul>
        </div>
      </section>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.containerForm {
  &__element {
    text-align: center;
    margin: 1rem 0 0rem 0;
    &--modifier {
      font-size: 1.3rem;
    }
  }
}
.container-member {
  display: flex;
  flex-direction: column;
  &__element {
    padding: 2rem 0 2rem 0;
    align-items: center;
    &--modifier {
      background-color: $member-background;
    }
  }
  .ul-wrapper {
    max-width: 60rem;
  }
  .member-list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &__element {
      justify-content: space-evenly;
      list-style-type: none;
    }
  }
}
</style>

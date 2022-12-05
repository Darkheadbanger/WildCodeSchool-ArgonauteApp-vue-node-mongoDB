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
        class="containerMember containerMember__element containerMember__element--modifier"
      >
        <h3>Membres de l'équipage</h3>
        <div class="ulWrapper">
          <ul
            class="member-list-container member-list-container__element member-list-container__element--modifier"
          >
            <Member />
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
main {
  .containerForm {
    &__element {
      text-align: center;
      margin: 1rem 0 0rem 0;
      &--modifier {
        font-size: 1.3rem;
      }
    }
  }

  .containerMember {
    @include flex-column;
    &__element {
      padding: 2rem 0 2rem 0;
      background: $member-background;
      &--modifier {
        font-size: larger;
      }
    }
  }
  .ulWrapper {
    width: 55rem;
    // max-width: 55rem;
    // min-width: 55rem;
  }
  .member-list-container {
    @include flex-row {
      justify-content: space-evenly;
      margin: 0 2rem 0 0;
    }
    &__element {
      list-style-type: none;
      text-align: center;
      &--modifier {
        font-size: large;
      }
    }
  }
}
</style>

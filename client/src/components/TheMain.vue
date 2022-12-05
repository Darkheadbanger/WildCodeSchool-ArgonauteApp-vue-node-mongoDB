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
        <h2>Add an Argonautes</h2>
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
            <!-- <Member
          v-for="crewMember in crewArray"
          :key="crewMember.id"
          :member="crewMember"
        /> -->
          </ul>
        </div>
      </section>
    </section>
  </main>
</template>
<style lang="scss" scoped>
main {
  h2 {
    font-size: 1.5rem;
  }
  .containerMember {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

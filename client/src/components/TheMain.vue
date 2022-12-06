<script setup>
import Form from "./TheForm.vue";
import Member from "./TheMember.vue";
import { ref, watch } from "vue";
import { stringifyExpression } from "@vue/compiler-core";

// Creation de ID unique
function uniqueId() {
  const firstItem = {
    value: "0",
  };
  /*la longuer peut être ajouter ou diminuer pour ajouter dans la liste.*/
  let counter = "123456789ABCDEF".split("").reduce((acc, curValue) => {
    const curObj = {};
    curObj.value = curValue;
    curObj.prev = acc;

    return curObj;
  }, firstItem);
  firstItem.prev = counter;

  return function () {
    let now = Date.now();
    if (
      typeof performance === "object" &&
      typeof performance.now === "function"
    ) {
      now = performance.now().toString().replace(".", "");
    }
    counter = counter.prev;
    return `${now}${Math.random().toString(16).substr(2)}${counter.value}`;
  };
}
const randomIdGenerator = uniqueId();

const day = new Date().getDay();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
const createdDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

let crewArray = ref([
  { id: randomIdGenerator, name: "", createdAt: createdDate },
]);

crewArray.value = JSON.parse(localStorage.getItem("crewArray")) || [];

watch(crewArray, (watchedValue) => {
  localStorage.setItem("crewArray", JSON.stringify(watchedValue));
});
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

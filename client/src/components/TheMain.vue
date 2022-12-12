<script setup>
import Form from "./TheForm.vue";
import Member from "./TheMember.vue";
// import Argonaute from "../models/Argonaute.js";

import apiClient from "@/utils/ApiClient";

import { ref, watch, onMounted } from "vue";

let aujourdhui = new Date().getTime();

const crewArray = ref([]);
window.crewArray = crewArray.value;

onMounted(() => {
  // crewArray.value = JSON.parse(localStorage.getItem("crewArray")) || [];
  apiClient
    .get("/api/member/")
    .then((data) => {
      console.log(data);
      crewArray.value = data.data;
    })
    .catch((error) => {
      console.log(error);
    });
});

// Methods creation et get
const addMember = (memberValues) => {
  let memberNameValues = memberValues.memberName;
  let memberAgeValues = memberValues.memberAge;
  let memberSexeValues = memberValues.memberSexe;
  if (
    memberNameValues.trim() === "" ||
    memberSexeValues === "" ||
    memberAgeValues === "" ||
    memberAgeValues < 18 ||
    memberAgeValues > 100
  )
    return false;

  // Add to backend mongoDB
  apiClient
    .post("/api/member/", {
      membre: memberNameValues.trim(),
      sexe: memberSexeValues,
      age: memberAgeValues,
      date: aujourdhui,
    })
    .then((data) => {
      console.log(data);
      crewArray.value.push(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

watch(
  crewArray,
  (newVal) => {
    localStorage.setItem("crewArray", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);
</script>

<template>
  <main>
    <section>
      <div
        class="containerForm containerForm__element containerForm__element--modifier"
      >
        <h2>Ajouter un(e) Argonaute</h2>
        <Form @add-member="addMember" />
      </div>

      <section class="container-member container-member__element">
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
      @include very-small-mobile-only {
        font-size: 1em;
      }
    }
  }
}
.container-member {
  @include flex-column;
  @include very-small-mobile-only {
    text-align: center;
  }
  &__element {
    padding: 2rem 0 2rem 0;
    align-items: center;
    background-color: $member-container-background-color;
  }
  .ul-wrapper {
    max-width: 60rem;
    @include very-small-mobile-only {
      max-width: unset;
    }
    @include laptop-only {
      max-width: 58rem;
    }
  }
  .member-list-container {
    @include small-mobile-only {
      @include flex-column;
    }
    @include laptop-only {
      @include flex-row {
        justify-content: center;
      }
    }
    &__element {
      list-style-type: none;
    }
  }
}
</style>

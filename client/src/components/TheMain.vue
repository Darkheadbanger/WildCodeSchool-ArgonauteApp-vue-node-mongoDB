<script setup>
import Form from "./TheForm.vue";
import Member from "./TheMember.vue";
import { ref, watch, onMounted } from "vue";

// Creation de ID unique

const day = new Date().getDay();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
const createdDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

let crewArray = ref([{}]);
window.crewArray = crewArray.value;

onMounted(() => {
  // crewArray.value = JSON.parse(localStorage.getItem("crewArray")) || [];
  apiClient
    .get("/api/member/")
    .then((data) => {
      console.log(data);
      // data.data.forEach((entity) => {
      //   console.log("entity", entity);
      //   let argonaute = new Argonaute();
      //   console.log(argonaute.loadData(entity));
      //   crewArray.value.push(argonaute);
      // });
    })
    .catch((error) => {
      console.log(error);
    });
});

watch(
  crewArray,
  (watchedValue) => {
    localStorage.setItem("crewArray", JSON.stringify(watchedValue));
  },
  {
    // Deep: true est un observateur profond qui permet d'activer toutes les fonctions imbirquées
    // Donc de tout voir y compris le crew.value
    deep: true,
  }
);

const addMember = (memberNameValues) => {
  console.log("hello", memberNameValues);

  const notIdentical = crewArray.value.indexOf(memberNameValues) === -1;
  console.log(notIdentical);
  if (memberNameValues === "") {
    alert("Désolé, vous devez remplir le formulaire nom!");
  } else {
    if (!notIdentical) {
      // Ne fonctionne pas, je veux
      alert("Hello alert");
    } else {
      crewArray.value.push({
        name: memberNameValues.trim(),
        createdAt: createdDate,
      });
    }
  }

  crewArray.value.reverse();
};
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
            <!-- <Member /> -->
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
      max-width: 70rem;
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

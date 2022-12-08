<script setup>
import { ref, watch, onMounted, defineEmits } from "vue";

let memberName = ref("");
// let memberSexe = ref("homme");
// let memberAge = ref("");
let clicked = ref(false);

const emits = defineEmits(["addMember"]);

watch(memberName, (watchedValue) => {
  localStorage.setItem("memberName", watchedValue);
});
const emptyingStringOnRefresh = (window.onload = () => {
  memberName.value = "";
});
onMounted(() => {
  memberName.value = localStorage.getItem("memberName" || null);
  emptyingStringOnRefresh;
});

const addMember = () => {
  // const memberName = {
  //   memberName: memberName.value,
  //   memberAge: memberAge.value,
  //   memberSexe: memberSexe.value,
  // };
  emits("addMember", memberName.value);
  memberName.value = "";
  // memberAge.value = "";
};
</script>
<template>
  <form
    class="member-form-container member-form-container__element"
    @submit.prevent="addMember"
  >
    <fieldset>
      <div>
        <div class="add-name">
          <label for="addName" class="label-name">Nom de l'Argonaute</label>
          <input
            id="addName"
            type="text"
            class="inputName"
            placeholder="Charlampos"
            v-model="memberName"
          />
        </div>
        <!-- showMore : pas de texte -->
        <!-- !showMore : texte -->
        <div
          v-if="memberName === '' && clicked ? !showMore : showMore"
          :style="showMore ? 'visible' : 'hidden'"
        >
          <p class="error error__element error__element--modifier">
            Désolé, vous devez remplir le formulaire du nom!
          </p>
        </div>
        <!-- <div v-if="memberName === '' ? 'hidden' : showMe">
          <p class="error error__element error__element--modifier">
            Désolé, vous devez remplir le formulaire du nom!
          </p>
        </div> -->
      </div>
      <!-- showMe true rendered -->
      <!-- !showMe false not rendered -->
      <button
        @click="clicked"
        type="submit"
        value="submit"
        class="button-add button-add__element button-add__element--modifier"
      >
        <!-- @click.prevent="addMember" -->
        Ajouter un membre
      </button>
    </fieldset>
  </form>
</template>

<style scoped lang="scss">
.member-form-container {
  @include flex-column;
  &__element {
    margin: 1em 0 4em 0;
    text-align: center;
  }
}
fieldset {
  @include flex-row {
    justify-content: center;
    vertical-align: bottom;
  }
  border: none;
  .inputName {
    @include input-text;
  }
  .add-name {
    @include flex-column;
  }
  label {
    padding: 0 0 1rem 1rem;
  }
  .label-name {
    padding: 0 0 0 0;
  }
  .error {
    &__element {
      font-size: small;
      &--modifier {
        color: red;
      }
    }
  }
  .hidden {
    visibility: hidden;
  }
  .show {
    visibility: visible;
  }
}

.button-add {
  @include button-form;
  &__element {
    box-shadow: $box-shadow;
    touch-action: manipulation;
    margin: 1.5rem 0rem 1rem 1rem;
    cursor: pointer;
    &--modifier {
      color: $text-color-button;
      background-color: $button-background-color;
    }
    &:hover {
      opacity: 0.8;
    }
    &:active {
      @include button-active;
    }
  }
}
</style>

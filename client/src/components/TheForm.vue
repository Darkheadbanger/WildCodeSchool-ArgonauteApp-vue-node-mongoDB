<script setup>
import { ref, watch, onMounted, defineEmits, computed } from "vue";

let memberName = ref("");
let memberSexe = ref("homme");
let memberAge = ref("");

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

const isDisabled = computed(() => !memberName.value);

const addMember = () => {
  let memberValues = {
    memberName: memberName.value,
    memberSexe: memberSexe.value,
    memberAge: memberAge.value,
  };
  emits("addMember", memberValues);
  memberName.value = "";
  memberAge.value = "";
};
</script>
<template>
  <form
    class="member-form-container member-form-container__element"
    @submit.prevent="addMember"
  >
    <fieldset>
      <!-- div  add-container -->
      <div class="add-name">
        <label for="addName" class="label-name">Nom de l'Argonaute</label>
        <input
          id="addName"
          type="text"
          class="inputName"
          placeholder="Charlampos"
          required
          v-model="memberName"
        />
      </div>
      <div class="sexeEtAge-container">
        <div class="sexe-container">
          <label for="sexe">Sexe de l'Argonaute </label>
          <select
            required
            name="sexe"
            id="sexe"
            class="sexe"
            v-model="memberSexe"
          >
            <option value="homme">Un homme</option>
            <option value="femme">Une femme</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div class="age-container">
          <label for="age">L'age de l'Argonaute</label>
          <input
            type="number"
            id="age"
            name="age"
            min="18"
            max="100"
            required
            placeholder="minimum 18 ans"
            v-model="memberAge"
          />
        </div>
      </div>
      <button
        :disabled="isDisabled"
        :class="
          isDisabled
            ? 'button-add-disabled button-add-disabled__element button-add-disabled__element--modifier'
            : 'button-add button-add__element button-add__element--modifier'
        "
        type="submit"
        value="submit"
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
  border: none;
  @include flex-row {
    justify-content: center;
    vertical-align: bottom;
  }
  @include very-small-mobile-only {
    @include flex-column {
      vertical-align: unset;
      justify-content: unset;
    }
  }
  @include laptop-only {
    @include flex-row;
  }
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

  input[type="text"]:required {
    @include input-focus-color {
      margin: 1rem 0 0 0;
    }
    &:focus {
      @include input-focus-color {
        margin: 1rem 0 0 0;
      }
    }
  }
  input[type="number"]:required {
    @include input-focus-color;
    &:focus {
      @include input-focus-color;
    }
  }
  .sexe {
    @include input-focus-color;

    &:focus {
      @include input-focus-color;
    }
  }

  .sexeEtAge-container {
    @include flex-column;
    .sexe-container {
      @include flex-row;
      label {
        margin: 0 1rem 0 0;
      }
    }
    .age-container {
      @include flex-row;
      label {
        margin: 0 1rem 0 0;
      }
    }
  }
}

.button-add {
  @include button-form;
  &__element {
    box-shadow: $box-shadow;
    touch-action: manipulation;
    @include very-small-mobile-only {
      margin: 0.5rem 0rem 1rem 0rem;
    }
    @include laptop-only {
      margin: 1.5rem 0rem 1rem 1rem;
    }
    cursor: pointer;
    background-color: $button-background-color;
    &--modifier {
      color: $text-color-button;
    }
    &:hover {
      opacity: 0.8;
    }
    &:active {
      @include button-active;
    }
  }
}

.button-add-disabled {
  @include button-form;
  &__element {
    box-shadow: $box-shadow;
    touch-action: manipulation;
    background-color: $button-background-color-disabled;
    border-color: white;
    @include very-small-mobile-only {
      margin: 0.5rem 0rem 1rem 0rem;
    }
    @include laptop-only {
      margin: 1.5rem 0rem 1rem 1rem;
    }
    cursor: pointer;
    &--modifier {
      color: $text-color-button;
    }
  }
}
</style>

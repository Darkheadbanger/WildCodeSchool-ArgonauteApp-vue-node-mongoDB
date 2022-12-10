<script setup>
import { ref, watch, onMounted, defineEmits, computed } from "vue";

let memberName = ref("");
// let memberSexe = ref("homme");
// let memberAge = ref("");

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

const isDisabled = computed(() => memberName.value);

const addMember = (clicked) => {
  // const memberName = {
  //   memberName: memberName.value,
  //   memberAge: memberAge.value,
  //   memberSexe: memberSexe.value,
  // };
  if (!clicked) {
    return false;
  } else {
    emits("addMember", memberName.value);
    memberName.value = "";
  }
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
            required
            v-model="memberName"
          />
        </div>
      </div>
      <button
        :disabled="isDisabled"
        :class="
          isDisabled
            ? 'button-add button-add__element button-add__element--modifier'
            : 'button-add-disabled button-add-disabled__element button-add-disabled__element--modifier'
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
    border: 2px solid $input-color-required;
    &:focus {
      outline: 2px solid $input-color-required;
    }
  }
}

.button-add {
  @include button-form;
  &__element {
    box-shadow: $box-shadow;
    touch-action: manipulation;
    margin: 1.5rem 0rem 1rem 1rem;
    @include very-small-mobile-only {
      margin: 0.5rem 0rem 1rem 0rem;
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
    margin: 1.5rem 0rem 1rem 1rem;
    background-color: $button-background-color-disabled;
    border-color: white;
    @include very-small-mobile-only {
      margin: 0.5rem 0rem 1rem 0rem;
    }
    cursor: pointer;
    &--modifier {
      color: $text-color-button;
    }
  }
}
</style>

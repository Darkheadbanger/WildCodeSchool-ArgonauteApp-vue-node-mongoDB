<script setup></script>
<template>
  <form class="member-form-container member-form-container__element">
    <fieldset>
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
      <button
        type="submit"
        value="submit"
        class="button-add button-add__element button-add__element--modifier"
        @click.prevent="addMember"
      >
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

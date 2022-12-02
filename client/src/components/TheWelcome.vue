<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    <a href="https://vuejs.org/" target="_blank" rel="noopener"
      >official documentation</a
    >
  </WelcomeItem>
</template>

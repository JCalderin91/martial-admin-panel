<script setup lang="ts">
useHead({
  title: "Martial Admin",
  meta: [{ name: "description", content: "Martial Admin" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Martial Admin",
  meta: [{ name: "description", content: "Martial Admin" }],
  htmlAttrs: {
    lang: "es",
  },
});
</script>

<template>
  <v-layout>
    <v-navigation-drawer>
      <Menu></Menu>
    </v-navigation-drawer>

    <v-app-bar color="primary" title="Martial Admin"></v-app-bar>

    <v-main>
      <div class="pa-5">
        <slot></slot>
      </div>
    </v-main>
  </v-layout>
</template>

<style>
.v-application__wrap {
  min-height: calc(100dvh - 105px);
}
</style>

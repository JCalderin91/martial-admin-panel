<script setup>
definePageMeta({
  layout: "admin",
});
const items = [
  {
    name: "Jesus",
    lastName: "Calderin",
    belt: "Amarillo",
    blood: "A+",
  },
];

const headers = [
  {
    title: "Nombres",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Apellidos", key: "lastName", align: "end" },
  { title: "Cinturon", key: "belt", align: "end" },
  { title: "Tipo de sangre", key: "blood", align: "end" },
];
</script>
<template>
  <v-card>
    <v-card-title primary-title> Representantes </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="items"></v-data-table>
    </v-card-text>
  </v-card>
</template>

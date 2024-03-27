<script setup>
definePageMeta({
  layout: "admin",
});

//
const { data } = await useFetch("https://jsonplaceholder.typicode.com/users");

const items = data._value.map((user) => {
  return {
    name: user.username,
    lastName: user.name,
    belt: "Amarillo",
    blood: "A+",
  };
});

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
    <v-card-title primary-title> Estudiantes </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="items"></v-data-table>
    </v-card-text>
  </v-card>
</template>

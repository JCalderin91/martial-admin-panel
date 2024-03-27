<script setup>
import { useStudentStore } from "@/stores/students";
definePageMeta({
  layout: "admin",
});

const { students, getStudents } = useStudentStore();

onBeforeMount(() => {
  getStudents();
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
      <v-data-table :headers="headers" :items="students"></v-data-table>
    </v-card-text>
  </v-card>
</template>

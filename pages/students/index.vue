<script setup>
import { useStudentStore } from "@/stores/students";
definePageMeta({
  layout: "admin",
});

const { students, getStudents } = useStudentStore();
const isLoading = ref(true);

onBeforeMount(() => {
  getStudents().then(() => {
    isLoading.value = false;
  });
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
    <v-card-title primary-title class="d-flex justify-space-between">
      Estudiantes
      <v-btn to="/students/create" color="secondary">Nuevo</v-btn>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="students"
        :loading="isLoading"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

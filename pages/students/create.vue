<script setup>
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <v-card>
    <v-card-title primary-title class="d-flex justify-space-between">
      Crear nuevo estudiante
    </v-card-title>
    <v-card-text class="pt-5">
      <v-row>
        <v-col md="4">
          <v-text-field label="Nombres"></v-text-field>
        </v-col>
        <v-col md="4">
          <v-text-field label="Apellidos"></v-text-field>
        </v-col>
        <v-col md="4">
          <v-text-field label="Cedula"></v-text-field>
        </v-col>
        <v-col md="3">
          <v-text-field label="Fecha de nacimiento"></v-text-field>
        </v-col>
        <v-col md="3">
          <v-select
            label="Genero"
            :items="['Masculino', 'Femenino']"
          ></v-select>
        </v-col>
        <v-col md="6">
          <v-text-field label="Dirección"></v-text-field>
        </v-col>
        <v-col md="3">
          <v-text-field label="Discapacidad"></v-text-field>
        </v-col>
        <v-col md="3">
          <v-select
            label="Cinturon"
            :items="[
              'Blanco/Amarillo',
              'Amarillo',
              'Amarillo/Naranja',
              'Naranja',
              'Naranja/Verde',
              'Verde',
              'Verde/Azul',
              'Azul',
              'Azul/Rojo',
              'Rojo',
              'Rojo/Negro',
              'Negro',
            ]"
          ></v-select>
        </v-col>
        <v-col md="6">
          <v-text-field label="Notas adicionales"></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-end ga-4">
      <v-btn to="/students">Cancelar</v-btn>
      <v-btn color="success">Guardar</v-btn>
    </v-card-actions>
  </v-card>
</template>

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
          <v-text-field
            density="comfortable"
            label="Nombres"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col md="4">
          <v-text-field
            density="comfortable"
            label="Apellidos"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col md="4">
          <v-text-field
            density="comfortable"
            label="Cedula"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col md="3">
          <v-text-field
            density="comfortable"
            label="Fecha de nacimiento"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col md="3">
          <v-select
            label="Genero"
            density="comfortable"
            variant="outlined"
            :items="['Masculino', 'Femenino']"
          ></v-select>
        </v-col>
        <v-col md="6">
          <v-text-field
            density="comfortable"
            label="Dirección"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col md="3">
          <v-text-field
            density="comfortable"
            label="Discapacidad"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col md="3">
          <v-select
            label="Cinturon"
            density="comfortable"
            variant="outlined"
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
          <v-text-field
            label="Notas adicionales"
            density="comfortable"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="d-flex justify-end ga-4">
      <v-btn to="/students">Cancelar</v-btn>
      <v-btn color="success">Guardar</v-btn>
    </v-card-text>
  </v-card>
</template>

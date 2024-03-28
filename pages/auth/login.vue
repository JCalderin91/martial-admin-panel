<script setup lang="ts">
let showPassword = ref(false);
const toogleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <v-row align="center" justify="center">
    <v-col md="4">
      <v-card>
        <v-card-title>
          <h2 class="my-5 text-center">Bienvenido a Martial Admin</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
            prepend-inner-icon="mdi-email"
            label="Correo"
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-lock"
            label="Contaseña"
            :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="toogleShowPassword"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="primary">Ingresar</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

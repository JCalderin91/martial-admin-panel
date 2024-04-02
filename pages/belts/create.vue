<script setup>
import { reactive } from "vue";
import { useBeltsStore } from "@/stores/belts";
import { Toast } from "@/utils/sweetalert";
import UploadImage from "@/components/UploadImage.vue";
import { rules } from "@/utils/rules";

definePageMeta({
  layout: "admin",
});
const BeltStore = useBeltsStore();
const belt = reactive({});
const handleSubmit = async () => {
  try {
    await BeltStore.create(belt);
    Toast.preset({ mode: "create", type: "success" });
    await navigateTo("/belts");
  } catch (error) {
    Toast.preset({ mode: "create", type: "error" });
  }
};
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title primary-title class="d-flex justify-space-between">
        Crear nuevo cinturon
      </v-card-title>
      <v-card-text class="pt-5">
        <v-row>
          <v-col md="8">
            <v-text-field
              v-model="belt.name"
              label="Nombre"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>

          <v-col md="4">
            <v-text-field
              v-model="belt.icon"
              label="Icono"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-end ga-4">
        <v-btn to="/belts">Cancelar</v-btn>
        <v-btn type="submit" color="success">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

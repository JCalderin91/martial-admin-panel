<script setup lang="ts">
import { useBeltsStore } from "@/stores/belts";
import { Toast } from "@/utils/sweetalert";
import { rules } from "@/utils/rules";
import type { BeltInterface } from "~/types/belts";

const route = useRoute();

definePageMeta({
  layout: "admin",
});

const BeltStore = useBeltsStore();
const belt = ref<BeltInterface>({
  id: null,
  name: "",
  icon: "",
  created_at: "",
  updated_at: "",
});
const isLoading = ref(false);

const handleSubmit = async () => {
  try {
    if (!belt.value.id) return;
    await BeltStore.updateById(belt.value.id, belt.value);
    Toast.preset({ mode: "put", type: "success" });
    await navigateTo("/belts");
  } catch (error) {
    Toast.preset({ mode: "put", type: "error" });
  }
};

onMounted(async () => {
  try {
    if (!route.params.id) return;
    const response = await BeltStore.getById(Number(route.params.id));
    belt.value = { ...response };
  } catch (error) {
    Toast.preset({ mode: "get", type: "error" });
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title primary-title class="d-flex justify-space-between">
        Editar cinturon
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

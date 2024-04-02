<script setup lang="ts">
import { useBeltsStore } from "@/stores/belts";
import { onMounted } from "vue";
import { Dialog, Toast } from "@/utils/sweetalert";

definePageMeta({
  layout: "admin",
});

const BeltStore = useBeltsStore();
const isLoading = ref(true);

onMounted(() => {
  BeltStore.getAll().then(() => {
    isLoading.value = false;
  });
});

const headers: any = [
  {
    title: "Nombre",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Imagen", key: "icon", align: "end" },
  { title: "Acciones", key: "actions", align: "end" },
];
const deleteRow = (id: number) => {
  Dialog.fire({
    title: "¿Está seguro de eliminar?",
    text: "Esta acción no se podrá deshacer!",
    icon: "warning",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        isLoading.value = true;
        await BeltStore.deleteById(id);
        Toast.preset({ mode: "delete", type: "success" });
      } catch (error) {
        Toast.preset({ mode: "delete", type: "error" });
      } finally {
        isLoading.value = false;
      }
    }
  });
};
</script>

<template>
  <v-card>
    <v-card-title primary-title class="d-flex justify-space-between">
      Cinturones
      <v-btn to="/belts/create" color="secondary">Nuevo</v-btn>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="BeltStore.belts"
        :loading="isLoading"
      >
        <template v-slot:item.actions="{ item }">
          <div class="d-flex justify-end ga-1">
            <v-btn
              :to="`/belts/${item.id}`"
              icon
              density="comfortable"
              variant="outlined"
              color="warning"
              ><v-icon>mdi-pen</v-icon></v-btn
            >
            <v-btn
              @click="deleteRow(Number(item.id || 0))"
              icon
              density="comfortable"
              variant="outlined"
              color="error"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

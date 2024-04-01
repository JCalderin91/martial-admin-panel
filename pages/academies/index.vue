<script setup>
import { useAcademiesStore } from "@/stores/academies";
import { onMounted } from "vue";
import { Dialog } from "@/utils/sweetalert";

definePageMeta({
  layout: "admin",
});

const AcademyStore = useAcademiesStore();
const isLoading = ref(true);

onMounted(() => {
  AcademyStore.getAll().then(() => {
    isLoading.value = false;
  });
});

const headers = [
  {
    title: "Nombre",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Direccion", key: "address", align: "end" },
  { title: "email", key: "email", align: "end" },
  { title: "Phone", key: "phone", align: "end" },
  { title: "Acciones", key: "actions", align: "end" },
];
const deleteRow = (id) => {
  Dialog.fire({
    title: "¿Está seguro de eliminar?",
    text: "Esta acción no se podrá deshacer!",
    icon: "warning",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        isLoading.value = true;
        await AcademyStore.deleteAcademyById(id);
        Toast.fire({ icon: "success", title: "Eliminado exitosamente!" });
      } catch (error) {
        Toast.fire({ icon: "error", title: "Error al eliminar!" });
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
      Academias
      <v-btn to="/academies/create" color="secondary">Nuevo</v-btn>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="AcademyStore.academies"
        :loading="isLoading"
      >
        <template v-slot:item.actions="{ item }">
          <div class="d-flex justify-end ga-1">
            <v-btn
              :to="`/academies/${item.id}`"
              icon
              density="comfortable"
              variant="outlined"
              color="warning"
              ><v-icon>mdi-pen</v-icon></v-btn
            >
            <v-btn
              @click="deleteRow(item.id)"
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

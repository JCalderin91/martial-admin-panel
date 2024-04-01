<script setup lang="ts">
import { useAcademiesStore } from "@/stores/academies";
import { Toast } from "@/utils/sweetalert";
import UploadImage from "@/components/UploadImage.vue";
import { rules } from "@/utils/rules";

const route = useRoute();

definePageMeta({
  layout: "admin",
});

const AcademyStore = useAcademiesStore();
const academy = ref({});

const handleSubmit = async () => {
  try {
    await AcademyStore.updateById(academy.value.id, academy.value);
    Toast.fire({ icon: "success", title: "Actualizado exitosamente!" });
    await navigateTo("/academies");
  } catch (error) {
    Toast.fire({ icon: "error", title: "Error al actualizar!" });
  }
};

onMounted(async () => {
  try {
    const response = await AcademyStore.getById(route.params.id);
    academy.value = { ...response };
  } catch (error) {
    Toast.fire({ icon: "error", title: "Error al obtener información!" });
  } finally {
    isLoading.value = false;
  }
});
const handleLogo = (event) => {
  academy.value.logo = event.target.value;
};
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title primary-title class="d-flex justify-space-between">
        Editar academia
      </v-card-title>
      <v-card-text class="pt-5">
        <v-row>
          <v-col md="8">
            <v-row>
              <v-col md="12">
                <v-text-field
                  v-model="academy.name"
                  label="Nombre"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col md="6">
                <v-text-field
                  v-model="academy.email"
                  label="Email"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col md="6">
                <v-text-field
                  v-model="academy.phone"
                  label="Teléfono"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-text-field
                  v-model="academy.address"
                  label="Dirección"
                  :rules="[rules.required]"
                  multi-line
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="4">
            <upload-image v-model="academy.logo" @input="handleLogo" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-end ga-4">
        <v-btn to="/academies">Cancelar</v-btn>
        <v-btn type="submit" color="success">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

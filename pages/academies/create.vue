<script setup>
import { reactive, watch } from "vue";
import { useAcademiesStore } from "@/stores/academies";
import { Toast } from "@/utils/sweetalert";
import UploadImage from "@/components/UploadImage.vue";
import { rules } from "@/utils/rules";

definePageMeta({
  layout: "admin",
});
const academyStore = useAcademiesStore();
const academy = reactive({});
const handleSubmit = async () => {
  try {
    await academyStore.create(academy);
    Toast.fire({ icon: "success", title: "Guardado exitosamente!" });
    await navigateTo("/academies");
  } catch (error) {
    Toast.fire({ icon: "error", title: "Error al guardar!" });
  }
};

const handleLogo = (event) => {
  academy.logo = event.target.value;
};
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title primary-title class="d-flex justify-space-between">
        Crear nueva academia
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

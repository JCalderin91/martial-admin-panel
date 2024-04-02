<script setup lang="ts">
import { Dialog } from "@/utils/sweetalert";
const items = [
  { text: "Inicio", icon: "mdi-home", href: "/" },
  { text: "Estudiantes", icon: "mdi-account-group", href: "/students" },
  {
    text: "Representantes",
    icon: "mdi-human-male-boy",
    href: "/representants",
  },
  { text: "Profesores", icon: "mdi-account-multiple", href: "" },
  { text: "Academias", icon: "mdi-domain", href: "/academies" },
  { text: "Finanzas", icon: "mdi-finance", href: "" },
  { text: "Reportes", icon: "mdi-calculator", href: "" },
  { text: "Documentos", icon: "mdi-file-account", href: "" },
  { text: "Seguridad", icon: "mdi-security", href: "" },
];

const confirmLogout = () => {
  Dialog.fire({
    title: "¿Está seguro?",
    text: "Usted esta saliendo del sistema",
    icon: "warning",
  });
};
</script>

<template>
  <div class="h-100 d-flex flex-column justify-space-between">
    <section>
      <v-list>
        <v-list-item
          prepend-avatar="https://i.ibb.co/vDPqBP4/logo-atin.png"
          subtitle="jhen.c@atin.top"
          title="Jhen Castro"
        >
          <template v-slot:append>
            <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          :to="item.href"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </section>
    <section>
      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <v-list-item color="primary" class="logout-item" @click="confirmLogout">
          <template v-slot:prepend>
            <v-icon icon="mdi-exit-to-app"></v-icon>
          </template>

          <v-list-item-title>Cerrar sessión</v-list-item-title>
        </v-list-item>
      </v-list>
    </section>
  </div>
</template>

<style scoped>
.logout-item:hover * {
  color: red;
  cursor: pointer;
}
</style>

<script>
export default {
  data: () => ({
    items: [
      { text: "Estudiantes", icon: "mdi-account-group" },
      { text: "Representantes", icon: "mdi-human-male-boy" },
      { text: "Profesores", icon: "mdi-account-multiple" },
      { text: "Escuela", icon: "mdi-domain" },
      { text: "Finanzas", icon: "mdi-finance" },
      { text: "Reportes", icon: "mdi-calculator" },
      { text: "Documentos", icon: "mdi-file-account" },
      { text: "Seguridad", icon: "mdi-security" },
    ],
  }),
};
</script>

<template>
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
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

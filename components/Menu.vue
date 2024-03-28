<script>
export default {
  data: () => ({
    items: [
      { text: "Estudiantes", icon: "mdi-account-group", href: "/students" },
      {
        text: "Representantes",
        icon: "mdi-human-male-boy",
        href: "/representants",
      },
      { text: "Profesores", icon: "mdi-account-multiple", href: "" },
      { text: "Escuela", icon: "mdi-domain", href: "" },
      { text: "Finanzas", icon: "mdi-finance", href: "" },
      { text: "Reportes", icon: "mdi-calculator", href: "" },
      { text: "Documentos", icon: "mdi-file-account", href: "" },
      { text: "Seguridad", icon: "mdi-security", href: "" },
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
      :to="item.href"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

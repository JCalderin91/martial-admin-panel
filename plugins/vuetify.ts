// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "custom",
      themes: {
        custom: {
          colors: {
            primary: "#0113ef",
            secondary: "#f6cc1e",
          },
        },
      },
    },
    defaults: {
      VTextField: {
        variant: "outlined",
        density: "compact",
      },
      VSelect: {
        variant: "outlined",
        density: "compact",
      },
      VBtn: {
        size: "small",
      },
      VCard: {
        VCardActions: {
          VBtn: {
            variant: "elevated",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});

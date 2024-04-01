<template>
  <ClientOnly>
    <picture-input
      ref="pictureInput"
      width="600"
      height="600"
      margin="16"
      accept="image/jpeg,image/png"
      size="10"
      button-class="btn"
      removable
      hideChangeButton
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Añada su imagen',
      }"
      @change="onChange"
    >
    </picture-input>
  </ClientOnly>
</template>

<script>
import PictureInput from "vue-picture-input";

export default {
  name: "app",
  props: ["value"],
  data() {
    return {};
  },
  components: {
    PictureInput,
  },
  methods: {
    onChange(image) {
      if (image) {
        this.image = image;
        this.$emit("input", image);
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
  },
};
</script>

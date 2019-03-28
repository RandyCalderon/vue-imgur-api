<template>
  <div>
    <img :src="allImages.data.data[0].link">
    allImages.data.data[0].link
  </div>
</template>
// title, description and link seem to be most relevant

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  // Lifecycle method to mount images
  created() {
    this.fetchImages();
  }
};
</script>
 
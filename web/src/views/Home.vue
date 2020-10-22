<template>
  <div class="home">
    <div>
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>

    <div class="background">World!</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel/Carousel.vue";
import Header from "@/components/Home/Header.vue";

@Component({
  components: {
    Carousel,
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
</style>


<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">Hello {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {
  model: number = 0;
  colors = ["primary", "secondary", "yellow darken-2", "red", "orange"];
}
</script>
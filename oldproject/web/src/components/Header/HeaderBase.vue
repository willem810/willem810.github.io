<template>
  <div>
    <v-app-bar :fixed="scrolled" app :color="scrolled ? 'red' : 'transparent'">
      <slot></slot>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  scrolled: boolean = false;

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }

  updateScroll() {
    var scrollPos = window.scrollY;
    var winHeight = window.innerHeight;
    var docHeight = document.documentElement.scrollHeight;
    var perc = (100 * scrollPos) / (docHeight - winHeight);
    this.scrolled = perc > 1;
  }
}
</script>
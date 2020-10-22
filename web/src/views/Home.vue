<template>
  <div class="home">
    <div class="background">
      <Header/>
    </div>
    
    <div style="height:200px"> </div>
    <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" class="background"></v-parallax> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/components/Home/Header.vue";

@Component({
  components: {
    HelloWorld,
    Header
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.background {
  height: 100vh;
    background-color: red;
}
</style>

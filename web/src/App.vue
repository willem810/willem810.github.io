<template>
  <v-app>
    <Header />

    <!-- <v-main>
      <Home />
    </v-main> -->

    <v-main class="ma-0 pa-0">
      <Home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Home from "./views/Home.vue";
import Header from "./components/Header/Header.vue";

@Component({
  components: {
    Home,
    Header,
  },
})
export default class App extends Vue {}
</script>

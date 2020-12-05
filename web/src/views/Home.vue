<template>
  <div class="home">
    <div class="container">
      <!-- <Carousel /> -->
      
      <Raadsel1 :trigger="raadsels[1]" @guessCorrect="raadselCorrect" @guessWrong="raadselWrong"/>
      <Raadsel2 :trigger="raadsels[2]" @guessCorrect="raadselCorrect"  @guessWrong="raadselWrong" v-show="currentRaadselIndex >= 2"/>



      <v-btn block @click="click()">
        check
      </v-btn>
    </div>

    <!-- <div class="background">World!</div> -->
  </div>
</template>

<script lang="ts" src="./Home.ts">
</script>

<style lang="scss">
$container-width: 40%;

.home {
  //  background: red;
  height: 100%;
  width: 100%;
}

.container {
  left: (100 - $container-width) /2;
  //  right: 20%;
  width: $container-width;
}
</style>

<template>
  <div class="home">
    <div class="container text-center">
      <!-- <Carousel /> -->
  Speciaal voor jesper <3
      <Raadsel1
        :trigger="raadsels[1]"
        @guessCorrect="raadselCorrect"
        @guessWrong="raadselWrong"
      />
      <Raadsel2
        :trigger="raadsels[2]"
        @guessCorrect="raadselCorrect"
        @guessWrong="raadselWrong"
        v-show="currentRaadselIndex >= 2"
      />
      <div class="text-center" v-show="currentRaadselIndex >= 3">
        <v-btn fab small dark @click="playVictoryAudio">
          <v-icon>mdi-replay</v-icon>
        </v-btn>
        <p>replay audio</p>
      </div>

      <br />

      <v-btn block @click="click()"> check </v-btn>
    </div>

    <!-- <div class="background">World!</div> -->
  </div>
</template>

<script lang="ts" src="./Home.ts">
</script>

<style lang="scss">
$container-width: 80%;

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

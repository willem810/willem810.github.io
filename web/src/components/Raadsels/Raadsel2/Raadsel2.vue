
<template>
  <div>
    <h1>Correct! kijk in je mail</h1>
    <h2>{{ raadsel }}</h2>
    <h4 style="color: red;" v-show="wrong">Is helemaal fout nat nek</h4>
    <v-text-field
      v-model="textField"
      label="zeg ik lekker niet"
      clearable
      solo
    ></v-text-field>
  </div>
</template>

<script lang="ts" src = "./Raadsel2.ts">
</script>

<template>
  <div>
    <h1>{{ raadsel }}</h1>
    <h4 style="color: red;" v-show="wrong">Ben jij kaolo dom ah sahbe</h4>
    <v-text-field
      v-model="textField"
      label="4 ofzo?"
      clearable
      solo
    ></v-text-field>

  </div>
</template>

<script lang="ts" src = "./Raadsel1.ts">
</script>
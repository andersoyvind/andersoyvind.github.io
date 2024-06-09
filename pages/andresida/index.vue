<script setup>
import json from "/static/syllabus.json";
import Button from 'primevue/button';
</script>
<template>
  <p>Her er andre sida:</p>
  <div v-if="json">
    <Button label="kuy.id" v-for="kuy in json.kyus"></Button>
  </div>
  <NuxtLink to="/">Tilbake til start</NuxtLink>
</template>

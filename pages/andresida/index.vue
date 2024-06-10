<script setup>
import json from "/static/syllabus.json";
import { ref, onMounted } from "vue";
const selectedItem = ref(null);
const items = ref([]);

onMounted(() => {
  items.value = json.kyus;
  selectItem(10);
});

const selectItem = (itemId) => {
  console.log("Selected " + itemId);
  selectedItem.value = items.value.find((item) => item.id === itemId) || null;
};
</script>
<template>
  <div :key="kuy.id" v-for="kuy in items">
    <Button
      :label="kuy.id.toString()"
      @click="() => selectItem(kuy.id)"
    ></Button>
  </div>
  <div v-if="selectedItem">
    <h2>Tsuki</h2>
    <p v-for="tsuki in selectedItem.tsukis">{{tsuki.name}}</p>
    <h2>Uke</h2>
    <p v-for="uke in selectedItem.ukes">{{uke.name}}</p>
    <h2>Keri</h2>
    <p v-for="keri in selectedItem.keris">{{keri.name}}</p>
    <h2>Katas</h2>
    <p v-for="kata in selectedItem.katas">{{ kata.name }}</p>
  </div>
  <NuxtLink to="/">Tilbake til start</NuxtLink>
</template>

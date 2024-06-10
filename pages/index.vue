<script setup lang="js">
import json from "/static/syllabus.json";
import { ref, onMounted } from "vue";
const selectedItem = ref(null);
const items = ref([]);

onMounted(() => {
  items.value = json;
  selectItem(10);
});

const selectItem = (itemId) => {
  selectedItem.value = items.value.find((item) => item.id === itemId) || null;
};
</script>
<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.horizontal .button {
  width: 100%;
  border: 1px solid;
  margin-top: 0.5rem;
  height: 5px;
}
</style>
<template>
  <div class="horizontal">
  <div :key="kuy.id" v-for="kuy in items">
    <Button @click="() => selectItem(kuy.id)">{{ kuy.id }}</Button>
    <div class="button" :style="{ 'background-color': kuy.color}"></div>
  </div>
</div>
  <div v-if="selectedItem">
    <h2>Tachikata</h2>
    <p v-for="tachi in selectedItem.tachikatas">{{tachi.name}}</p>
    <h2>Tsuki</h2>
    <p v-for="tsuki in selectedItem.tsukis">{{tsuki.name}}</p>
    <h2>Uke</h2>
    <p v-for="uke in selectedItem.ukes">{{uke.name}}</p>
    <h2>Keri</h2>
    <p v-for="keri in selectedItem.keris">{{keri.name}}</p>
    <h2>Katas</h2>
    <p v-for="kata in selectedItem.katas">{{ kata.name }}</p>
  </div>
</template>

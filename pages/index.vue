<script setup lang="js">
import json from "/static/syllabus.json";
import { ref, onMounted } from "vue";
const selectedItem = ref(null);
const items = ref([]);

onMounted(() => {
  items.value = json;
  selectItem(20);
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
.selected {
  width: 100%;
  border-bottom: 5px solid black;
 }
</style>
<template>
  <div class="horizontal">
  <div :key="kuy.id" v-for="kuy in items">
    <Button @click="() => selectItem(kuy.id)">{{ kuy.name }}</Button>
    <div class="button" :style="{ 'background-color': kuy.color}"></div>
    <div class="selected" v-show="selectedItem && selectedItem.id == kuy.id"></div>
  </div>
</div>
  <div v-if="selectedItem">
    <h1>{{ selectedItem.name }}</h1>
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
    <div v-if="selectedItem.renrakus">
      <h2>Renraku</h2>
      <p v-for="renraku in selectedItem.renrakus">{{ renraku.name }} - {{ renraku.steps}}</p>
    </div>
    <h2>Requirements</h2>
    <p>Push ups: {{ selectedItem.pushups }}</p>
    <p>Sit ups: {{ selectedItem.situps }}</p>
    <p>Jumps: {{ selectedItem.jumps }}</p>
    <p>Pull ups: {{ selectedItem.pullups }}</p>
    <p>Tobi Geri: {{ selectedItem.tobigeri }}</p>
    <p>Fights: {{ selectedItem.fights }}</p>
  </div>
</template>

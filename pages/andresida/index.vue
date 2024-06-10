<script setup>
 import json from "/static/syllabus.json";
 import { ref, onMounted } from 'vue';
 const selectedItem = ref(null);
 const items = ref({});

 interface Item {
   id: number;
   name: string;
 }

 onMounted(() => {
   items.value = json;
   console.log(json);
 });
const selectItem = (itemId: number) => {
   selectedItem.value = items.value.kyus.find(item => item.id=itemId) || null;
}
</script>
<template>
  <p>Her er andre sida:</p>
  <div v-if="items.value">
    <Button :label="kuy.id.toString()" v-for="kuy in items.value.kyus" @click="selectItem(kuy.id)" :key="kuy.id"></Button>
  </div>
  <div v-else>Forresten</div>
  <div> {{ selectedItem }}</div>

  <NuxtLink to="/">Tilbake til start</NuxtLink>
</template>

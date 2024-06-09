<template>
    <ul v-if="liste.length > 0">
        <li v-for="linje in liste">{{ linje }}</li>
    </ul>
    <div v-else>Ingenting</div>
</template>
<script setup>
const liste = [ "Morote tsuki", "Seiken oi tsuki", "Seiken gyaku tsuki" ];
</script>
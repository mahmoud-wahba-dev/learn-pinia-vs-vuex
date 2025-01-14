<template>
  <div>state count is {{ count }}</div>
  <h2>store getter is countPlusOne {{ countPlusOne }}</h2>
  <h3>name is {{ name }}</h3>
  <h2>actions <button @click="increase">increase</button></h2>
  <h2>actions <button @click="decrease">decrease</button></h2>
  <h2>change name <button @click="changeName">change name</button></h2>
  <h2>reset <button @click="store.$reset">reset</button></h2>
</template>

<script setup>
import { onMounted } from "vue";
import { counterStore } from "@/store/counterStore.js";
import { storeToRefs } from "pinia";
const store = counterStore();

const { count, countPlusOne, name } = storeToRefs(store);
const { decrease, increase, changeName } = store;
// const increase = store.increase;
// const decrease = store.decrease;
// const changeName = store.changeName;
onMounted(() => {
  console.log(count, "count");
});
</script>

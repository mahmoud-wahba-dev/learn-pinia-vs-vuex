<template>
  <div>
    <h1>hello</h1>
    <h3>state counter is {{ productsModule.counter }}</h3>
    <h3>getter is {{ getters.multiblyCntr }}</h3>
    <div>
      <button @click="store.commit('inc')">increase</button>
      <button @click="store.commit('dec')">decrease</button>
    </div>
    <div>
      <button @click="store.dispatch('increase')">increase</button>
      <button @click="store.dispatch('decreament')">decrease</button>
    </div>
    <div>
      <input type="number" v-model="productsModule.counter" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
console.log(useStore().getters);
const store = useStore();
const productsModule = store.state.productsModule;
const getters = store.getters;
console.log(store, "store");
</script>

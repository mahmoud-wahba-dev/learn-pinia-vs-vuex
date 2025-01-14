<template>
  <div>state count is {{ count }}</div>
  <h2>store getter is {{ storeGetter }}</h2>
  <h2>actions <button @click="increase">increase</button></h2>
  <h2>actions <button @click="decrease">decrease</button></h2>
</template>

<script>
import { counterStore } from "@/store/counterStore.js";
import { mapState, mapActions } from "pinia";

export default {
  // computed: {
  //   ...mapState(counterStore, {
  //     myCount: (state) => state.count,
  //   }),
  // },
  computed: {
    ...mapState(counterStore, ["count"]),
    storeGetter() {
      return counterStore().countPlusOne; // this will call the getter method
    },
  },
  methods: {
    ...mapActions(counterStore, ["increase", "decrease"]),
  },
  mounted() {
    console.log(counterStore().increase());
  },
};
</script>

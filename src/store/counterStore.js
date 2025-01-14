import { defineStore } from "pinia";

export const counterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    name: "Ahmed",
  }),
  getters: {
    countPlusOne() {
      return this.count + 1;
    },
  },
  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    changeName() {
      this.name = "John Doe";
    },
    $reset() {
      console.log("fired");
      this.count = 0;
    },
  },
});

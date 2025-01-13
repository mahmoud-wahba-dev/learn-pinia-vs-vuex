import { createStore } from "vuex";

export default createStore({
  state: {
    name: "ahmed elmasry",
    age: 28,
    title: "front end",
    // userData: "",
  },
  getters: {
    getNameWithTitle(state) {
      return `${state.name} and my age is ${state.age} and am ${state.title}`;
    },
  },
  mutations: {
    changeTitle(state) {
      state.title = "web developer";
      console.log(state);
    },
  },
  actions: {},
  modules: {},
});

export default {
  state: {
    name: "ahmed elmasry",
    title: "web dev",
  },
  mutations: {
    changeName(state) {
      state.name = "mohamed";
    },
  },
  //   getters: {
  //     addTitle(state) {
  //       return `my name is ${state.name} and am ${state.title}`;
  //     },
  //   },
  // getters: {
  //   getNameWithTitle(state) {
  //     return `${state.name} and my age is ${state.age} and am ${state.title}`;
  //   },
  // },
  //   mutations: {
  // changeTitle(state) {
  //   state.title = "web developer";
  //   console.log(state);
  // },
  // getProducts(state, products) {
  //   state.products = products;
  //   console.log(products);
  // },
  //   },
  //   actions: {
  //     async doGetproducts(context) {
  //       await fetch("https://dummyjson.com/products")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           context.commit("getProducts", data.products);
  //         });
  //     },
  //   },
};

<template>
  <div class="home">
    <h1>this is home page</h1>
    <h2>
      {{ this.$store.getters.getNameWithTitle }}
    </h2>

    <div>
      <ul>
        <li
          v-for="product in this.$store.state.productsModule.products"
          :key="product.id"
        >
          {{ product.title }}
        </li>
      </ul>
    </div>
    <div>
      <button @click="this.$store.dispatch('doGetproducts')">
        get product
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  // data() {
  //   return {
  //     name: "ahmed elmasry",
  //     age: 28,
  //   };
  // },
  // mounted() {
  //   console.log(this.$store);
  // },
  methods: {
    changeTitle() {
      this.$store.commit("changeTitle");
    },
  },
};
</script>

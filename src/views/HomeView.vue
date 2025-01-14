<template>
  <div>
    <h1>name is {{ this.$store.state.productsModule.name }}</h1>
    <button @click="changeName">update</button>
    <!-- <h1>user iss {{ addTitle }}</h1> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "HomeView",
  methods: {
    ...mapMutations(["changeName"]),
  },
  // computed: {
  //   ...mapGetters(["addTitle"]),
  // },
  // computed: {
  //   ...mapState(["productsModule"]),
  // },
  // mounted() {
  // console.log(productsModuleu);

  // console.log(this.$store.state.productsModule.name);
  // },
};
</script>

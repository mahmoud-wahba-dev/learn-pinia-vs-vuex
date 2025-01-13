<template>
  <div class="home">
    <h1>this is home page</h1>
    <h3>my name is: {{ this.$store.state.name }}</h3>
    <h4>age is : {{ this.$store.state.age }}</h4>
    <div>
      <input type="text" v-model="this.$store.state.name" />
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
  mounted() {
    console.log(this.$store);
  },
};
</script>

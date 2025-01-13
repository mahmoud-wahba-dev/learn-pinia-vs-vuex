<template>
  <div class="home">
    <h1>this is home page</h1>
    <h2>
      {{ this.$store.getters.getNameWithTitle }}
    </h2>
    <div>
      <button @click="changeTitle">fire mutation</button>
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

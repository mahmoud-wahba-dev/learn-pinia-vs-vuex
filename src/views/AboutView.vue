<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>my name is: {{ this.$store.state.name }}</h3>
    <h4>age is : {{ this.$store.state.age }}</h4>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$store);
  },
};
</script>

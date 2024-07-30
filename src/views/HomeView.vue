<template>
  <p>click my face to interact</p>
  <Home />
</template>

<script>
import Home from '../components/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style scoped>
p {
  text-align: center;
  color: gray;
}
</style>
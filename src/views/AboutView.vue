<template>
    <Navigation />
    <div class="content">
        <div class="header"><h1>Christopher A. Cook</h1></div>
        <About />
    </div>
  </template>
  
  <script>
  import Navigation from '../components/Navigation.vue';
  import About from '../components/About.vue';
  
  export default {
      components: {
          Navigation,
          About
      }
  }
  </script>
  
  <style scoped>
  h1 {
    margin: 0;
    width: 90%;
}
.content {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 0px;
    padding-top: 20px;
}
.header {
    width: 100%;
    margin-top: 0px;
    margin-left: 50px;
}
  </style>
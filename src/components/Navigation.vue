<template>
  <nav>
      <img src="/assets/images/chris-000.jpg" alt="">
      <div><router-link v-bind:to="{ name: 'home' }">Home</router-link></div>
      <div><router-link v-bind:to="{ name: 'about'}">About Me</router-link></div>
      <div><router-link v-bind:to="{ name: 'projects'}">Projects</router-link></div>
  </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  nav {
      display: flex;
      background-color: #6b6b6b;
  }
  img {
      width: 30px;
  }
  nav div {
    color: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 256px;
  }
  nav div:hover {
    background-color: #929292;
    color: #242424;
  }
  </style>
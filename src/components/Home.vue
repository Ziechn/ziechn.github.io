<template>
    <div class="content">
      <div>
        <h1 v-bind:class="{ 'nav-hidden': hideNav == true }">Chris's Portfolio</h1>
        <img v-bind:src="imageSource" v-on:mouseover="hideNav = false" v-on:mouseleave="hideNav = true" />
        <nav v-bind:class="{ 'nav-hidden': hideNav == true }" v-on:mouseover="hideNav = false"
          v-on:mouseleave="hideNav = true">
          <div><router-link v-bind:to="{ name: 'about' }">About Me</router-link></div>
          <div><router-link v-bind:to="{ name: 'projects' }">Projects</router-link></div>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hideNav: true,
        imageSource: '/src/images/chris-000.jpg',
      }
    },
    created() {
      const delayInSeconds = 4;
      let index = 0;
  
      const imageDir = '/src/images/';
      const images = ['chris-000.jpg',
        'chris-001.jpg',
        'chris-002.jpg',
        'chris-003.jpg',
        'chris-004.jpg',
        'chris-005.jpg',
      ];
  
      setInterval(() => {
        index++
  
        if (index > images.length - 1) {
          index = 0;
        }
  
        console.log("Image index: " + index);
        this.imageSource = imageDir + images[index];
  
        console.log("Image Source: " + this.imageSource);
      }, delayInSeconds * 1000);
    }
  }
  </script>
  
  <style scoped>
  .content {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  
  h1 {
    font-size: 2.1em;
    margin-bottom: 10px;
  }
  
  img {
    margin: -6px;
    padding: 0;
  }
  
  nav {
    margin: 0;
    padding: 0;
    width: 256px;
  }
  
  .nav-hidden {
    display: none;
  }
  
  nav div {
    background-color: #6b6b6b;
    color: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
  }
  
  nav div:hover {
    background-color: #929292;
    color: #242424;
  }
  </style>
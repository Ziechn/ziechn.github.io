<template>
  <div class="content">
    <h1 v-bind:class="{ 'nav-hidden': hideNav == true }">Chris's Portfolio</h1>
    <div class="image-container">
      <img v-bind:src="imageSource" v-on:mouseover="hideNav = false" v-on:click="hideNav = false" v-on:mouseleave="hideNav = true" />
    </div>
    <nav v-bind:class="{ 'nav-hidden': hideNav == true }" v-on:mouseover="hideNav = false"
      v-on:mouseleave="hideNav = true">
      <div><router-link v-bind:to="{ name: 'about' }">About Me</router-link></div>
      <div><router-link v-bind:to="{ name: 'projects' }">Projects</router-link></div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directory: '/assets/images/',
      images: [
        'chris-000.jpg',
        'chris-001.jpg',
        'chris-002.jpg',
        'chris-003.jpg',
        'chris-004.jpg',
        'chris-005.jpg',
      ],
      index: 0,
      imageSource: '',
      hideNav: true
    };
  },
  mounted() {
    this.startImageRotation();
  },
  methods: {
    startImageRotation() {
      this.imageSource = this.directory + this.images[this.index];
      setInterval(() => {
        this.index++;
        if (this.index > this.images.length - 1) {
          this.index = 0;
        }
        console.log("Image index: " + this.index);
        this.imageSource = this.directory + this.images[this.index];
      }, 3000); // Change image every 3 seconds
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2.1em;
  margin-bottom: 10px;
  color: whitesmoke;
  margin: 0;
  padding: 0;
  width: 256px;
  position: relative;
  bottom: 150px;
  left: 256px;
}

img {
  display: block;
}

nav {
  margin: 0;
  padding: 0;
  width: 256px;
  position: relative;
  top: 158px;
  right: 256px;
}

nav div {
  background-color: #412728;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}

nav div:hover {
  background-color: #7f4d3e;
}

.content {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  min-height: 100vh;
}

.image-container {
  position: relative;
  display: inline-block;
}

.overlay {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    text-align: center;
    width: 80%;
    pointer-events: none;
}

.top {
    top: -50px;
}

.bottom {
    bottom: -50px;
}

.nav-hidden {
  display: none;
}
</style>
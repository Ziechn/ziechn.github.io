<template>
  <div class="content">
    <div>
      <h1 v-bind:class="{ 'nav-hidden': hideNav == true }">Chris's Portfolio</h1>
      <div class="image-container">
        <img v-bind:src="imageSource" v-on:mouseover="hideNav = false" v-on:click="hideNav = false" />
        <nav v-bind:class="{ 'nav-hidden': hideNav == true }" v-on:mouseover="hideNav = false">
          <router-link v-bind:to="{ name: 'about' }">
            <div>About Me</div>
          </router-link>
          <router-link v-bind:to="{ name: 'projects' }">
            <div>Projects</div>
          </router-link>
        </nav>
      </div>
    </div>
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
  width: auto;
  text-align: center;
}

nav {
  margin: 0;
  padding: 0;
  width: 256px;
  position: absolute;
  background-color: #412728;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
}

nav div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 15px 0px;
}

.content {
  align-items: center;
}

.image-container img {
  display: block;
}

.nav-hidden {
  opacity: 0;
  pointer-events: none;
}

@media (min-width: 480px) {
  nav div:hover {
    background-color: #7f4d3e;
  }
}
</style>
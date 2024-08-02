<template>
  <img class="profile-image" v-bind:src="imageSource" v-on:mouseover="hideNav = false" v-on:click="hideNav = false" />
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
      }, 2000); // Change image every 3 seconds
    }
  }
};
</script>

<style>

</style>
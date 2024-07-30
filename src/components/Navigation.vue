<template>
  <div>
    <nav>
      <img src="/assets/images/chris-000.jpg" alt="">
      <div><router-link v-bind:to="{ name: 'home' }">Home</router-link></div>
      <div><router-link v-bind:to="{ name: 'about' }">About Me</router-link></div>
      <div><router-link v-bind:to="{ name: 'projects' }">Projects</router-link></div>
    </nav>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
div {
  display: flex;
  width: 100vw;
  background-color: #412728;
  justify-content: center;
}

nav div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 256px;
}

nav div:hover {
  background-color: #7f4d3e;
}

@media screen and (min-width: 500px) {
  img {
    width: 30px;
  }

  nav {
    display: flex;
    width: 60%;
    margin: 0 20%;
  }
}

@media screen and (max-width: 500px) {
  img {
    display: none;
  }

  nav {
    flex-direction: column;
  }
}
</style>
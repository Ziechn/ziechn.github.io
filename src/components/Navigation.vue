<template>
  <div class="navigation">
    <nav>
      <span class="name">Chris Cook's Portfolio</span>
      <router-link v-bind:to="{ name: 'projects' }"><div>Projects</div></router-link>
      <router-link v-bind:to="{ name: 'resume' }"><div>Resume</div></router-link>
      <router-link v-bind:to="{ name: 'about' }"><div>About</div></router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
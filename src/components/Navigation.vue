<template>
  <div class="navigation">
    <nav>
      <span class="name">Chris Cook's Portfolio</span>
      <router-link v-bind:to="{ name: 'projects' }" v-if="route.name != 'projects'">
        <div>Projects</div>
      </router-link>
      <router-link v-bind:to="{ name: 'resume' }" v-if="route.name != 'resume'">
        <div>Resume</div>
      </router-link>
      <router-link v-bind:to="{ name: 'about' }" v-if="route.name != 'about'">
        <div>About</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';


export default {
  setup() {
    const route = useRoute();
    return { route };
  }
}
</script>

<style></style>
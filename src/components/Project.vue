<template>
  <div class="project">
    <HitTheDeck/>
  </div>
</template>

<script>
import HitTheDeck from './HitTheDeck.vue';
export default {
  components: {
    HitTheDeck
  }
}
</script>

<style scoped>
.project {
  display: flex;
}
</style>
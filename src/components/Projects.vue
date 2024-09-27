<template>
  <div class="content">
    <h1>Projects</h1>
    <h3>Contributions to a diverse range of projects.</h3>
    <HitTheDeck />
    <SecondNature />
    <NominEat />
    <FullStackVendingMachine />
    <TEnmo />
    <VendingMachine />
  </div>
</template>

<script>
import HitTheDeck from './HitTheDeck.vue';
import SecondNature from './SecondNature.vue';
import NominEat from './NominEat.vue';
import FullStackVendingMachine from './FullStackVendingMachine.vue';
import TEnmo from './TEnmo.vue';
import VendingMachine from './VendingMachine.vue';

export default {
  components: {
    HitTheDeck,
    NominEat,
    FullStackVendingMachine,
    TEnmo,
    VendingMachine,
    SecondNature
  }
}
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .content {
  background-image: url("/assets/images/project-background-0.02-htd.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding: 300px 50px 0px;
  }
}
</style>
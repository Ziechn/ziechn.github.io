<template>
  <div class="content">
    <h1>Projects</h1>
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

<style></style>
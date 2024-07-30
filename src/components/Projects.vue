<template>
  <HitTheDeck/>
  <hr>
  <SecondNature/>
  <hr>
  <NominEat/>
  <hr>
  <FullStackVendingMachine/>
  <hr>
  <TEnmo/>
  <hr>
  <VendingMachine/>
  <div class="contact">
    <a href="mailto:" target="_blank">chrisacook1984@gmail.com</a>
    <a href="http://github.com/Ziechn" target="_blank">github</a>
    <a href="http://x.com/thrownspaghetti" target="_blank">x</a>
    <a href="http://www.instagram.com/thrownspaghetti/" target="_blank">instagram</a>
    <a href="http://www.linkedin.com/in/chrisacook84/" target="_blank">linkedin</a>
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
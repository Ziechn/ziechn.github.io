<template>
    <NavigationVue />
    <AboutVue />
    <FooterVue />
</template>

<script>
import NavigationVue from '../components/Navigation.vue';
import AboutVue from '../components/About.vue';
import FooterVue from '../components/Footer.vue';

export default {
    components: {
        NavigationVue,
        AboutVue,
        FooterVue
    }
}
</script>

<style>

</style>
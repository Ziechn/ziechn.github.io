<template>
    <Navigation />
    <div class="content">
        <div class="header">
            <h1>Christopher A. Cook</h1>
        </div>
        <About />
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import About from '../components/About.vue';

export default {
    components: {
        Navigation,
        About
    }
}
</script>

<style scoped>

</style>
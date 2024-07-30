<template>
    <Navigation />
    <div class="content">
        <div class="header">
            <h1>Projects</h1>
        </div>
        <Projects />
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Projects from '../components/Projects.vue';
export default {
    components: {
        Navigation,
        Projects
    }
}
</script>

<style scoped>
</style>
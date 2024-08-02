<template>
    <div class="detail-container">
        <DetailImagesVue v-bind:path="path" v-bind:imageCount="imageCount" />
        <div class="detail">
            <h2>Hit the Deck Racing - Mobile</h2>
            <h3>Hit the Deck Racing is a retro styled, low poly, sci-fi racing game</h3>
            <p>
                Releasing when it's ready!
            </p>
            <p>
                Hit the Deck Racing - Mobile is an exciting sci-fi racing game that captures the simplicity and fun of classic retro games.
                Inspired by arcade racers from the Nintendo 64 and PlayStation 1 eras, it offers modern twists for a fresh experience.
                Compete to build your reputation within the Hit the Deck league and rise to become the ultimate racer.
            </p>
            <p>
                Race through 16 tracks, either against computer opponents or your friends, across three exciting game modes:
            </p>
            <ul>
                <li>Classic Race: Compete to be the first across the finish line.</li>
                <li>Race Royale: The last racer of each lap is eliminated until only two remain. The first to finish the final lap wins!</li>
                <li>Qualifiers: Race against the clock to earn your next license level</li>
            </ul>
            <p>
                Hit the Deck Racing - Mobile is a personal passion project of mine.
                I embarked on this ambitious project to learn programming and explore game development tools.
                Built with the Unity game engine and written in C# using object-oriented programming standards,
                the game also leverages various tools for asset creation, including Blender 3D for 3D models,
                Procreate and Krita for textures and images, and various other tools.
            </p>
            <h4>Unity 3D | Blender 3D | C# | Adobe Illustrator | Procreate | Krita | Inkscape | Ableton Live</h4>
        </div>
    </div>
</template>

<script>
import DetailImagesVue from "./DetailImages.vue";

export default {
    components: {
        DetailImagesVue
    },
    data() {
        return {
            path: "hit-the-deck/",
            imageCount: 6
        }
    }
}

</script>

<style scoped>
@media screen and (min-width: 1000px) {
    img {
        order: 1;
    }

    .detail {
        order: 0;
    }
}
</style>
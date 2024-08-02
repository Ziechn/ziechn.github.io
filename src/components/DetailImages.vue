<template>
    <img class="detail-images right" v-bind:src="imageSource" />
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        },
        imageCount: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            directory: '/assets/images/' + this.path,
            index: 1,
            imageSource: '',
            hideNav: true,
        };
    },
    mounted() {
        this.startImageRotation();
    },
    methods: {
        startImageRotation() {
            this.imageSource = this.directory + this.index + ".jpg";
            setInterval(() => {
                this.index++;
                if (this.index > this.imageCount) {
                    this.index = 1;
                }
                this.imageSource = this.directory + this.index + ".jpg";
            }, 2000); // Change image every 3 seconds
        }
    }
};
</script>

<style></style>
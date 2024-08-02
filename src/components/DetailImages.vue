<template>
    <div class="detail-images right">
        <img v-bind:src="imageSource" />
        <div class="detail-image-buttons">
            <button class="previous-button" v-on:click="previousImage">&lt;</button>
            <button class="next-button" v-on:click="nextImage">&gt;</button>
        </div>
    </div>
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
            cycle: true
        };
    },
    mounted() {
        this.startImageRotation();
    },
    methods: {
        startImageRotation() {
            this.imageSource = this.directory + this.index + ".jpg";
            setInterval(() => {
                let nextIndex = this.index + 1;
                if (nextIndex > this.imageCount) {
                    nextIndex = 1;
                }
                if (this.cycle === true){
                    this.setIndex(nextIndex);
                }
            }, 2000); // Change image every 3 seconds
        },
        setIndex(index) {
            this.index = index;
            console.log(this.index);
            this.imageSource = this.directory + this.index + ".jpg"
        },
        previousImage() {
            this.cycle = false;
            let previousIndex = this.index - 1;
            if (previousIndex < 1) {
                previousIndex = this.imageCount;
            }
            this.setIndex(previousIndex);
        },
        nextImage() {
            this.cycle = false;
            let nextIndex = this.index + 1;
            if (nextIndex > this.imageCount) {
                nextIndex = 1;
            }
            this.setIndex(nextIndex);
        }
    },
    computed: {
        setImageIndex() {
            this.imageSource = this.directory + this.index + ".jpg";
        }
    }
};
</script>

<style scoped>
button {
    color: white;
    background-color: black;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-style: none;
}

button:hover {
    background-color: #181818;
}

img {
    margin-top: 0;
}

.detail-image-buttons {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 600px) {
    button {
        background-color: #181818;
    }
}
</style>
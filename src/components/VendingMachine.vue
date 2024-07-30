<template>
    <div class="project-container">
        <img src="/assets/images/vending-machine.png" alt="Vending Machine">
        <div class="detail">
            <h2>Vending Machine Application</h2>
            <h3>A CLI application to simulate a virtual vending machine.</h3>
            <p>
                No version available to view. (Ask to view source code)
            </p>
            <p>
                Our bootcamp's first group capstone project. The vending machine CLI application where users add vitural
                money and purchase simulated snacks. Written in Java using object orientated programming principals.
            </p>
            <h4>Java | Inheritance | Object Orientated Programming</h4>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
    margin: 0;
    color: #e2b659;
}

h3 {
    font-size: 1em;
    font-weight: lighter;
    margin: 0;
    color: #7f4d3e;
}

h4 {
    font-size: 0.8em;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    color: #e2b659;
}

p {
    color: #b87c4c;
}

.project-container {
    display: flex;
}

.project-container img {
    border-radius: 10px;
    display: block;
    width: 256px;
    height: 256px;
    background-color: #7f4d3e;
    margin-top: 20px;
    margin-left: 20px;
}

.detail {
    background-color: #412728;
    padding: 20px;
    border-radius: 5px;
    margin: 20px;
}
</style>
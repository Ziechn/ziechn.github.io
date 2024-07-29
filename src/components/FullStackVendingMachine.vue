<template>
    <div class="project-container">
        <div class="detail">
            <h2>Full Stack Vending Machine</h2>
            <h3>Taking the CLI application made during the bootcamp and making it a full stack application.</h3>
            <p>
                Click to view this application: Full Stack Vending Machine (Coming Soon)
            </p>
            <p>
                After our bootcamp ended, one of my classmates asked for help fixing our first capstone project together.
                I thought it would be fun to help get that working while turning it into a full event for my friends.
                I hosted a Discord event to help walk through how to update our original code, as well building the vending machine full stack application.
            </p>
            <p>
                This app features most of the techniques we learned during our bootcamp. A PostgreSQL server, a Java / Springboot backend, utilizing the REST and JDBC templates, testing endpoints with Postman, and building a front-end with Vue.js with the fundamentals we learned about HTML, CSS, and Javascript.
            </p>
            <h4>Java | Springboot | PostgreSQL | Postman | HTML | CSS | JavaScript | Vue.js | Axios | External APIs | RESTful API | JDBC</h4>
        </div>
        <img src="/assets/images/full-stack-vending-machine.png" alt="">
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

img {
    border-radius: 10px;
}

p {
    color: #b87c4c;
}

.project-container {
    display: flex;
}

.project-container img {
    display: block;
    width: 256px;
    height: 256px;
    background-color: #7f4d3e;
    margin-top: 20px;
    margin-right: 20px;
}

.detail {
    background-color: #412728;
    padding: 20px;
    border-radius: 5px;
    margin: 20px;
}
</style>
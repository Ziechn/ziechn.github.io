<template>
    <div class="project-container">
        <img src="/assets/images/nomin-eat.png" alt="">
        <div class="detail">
            <h2>NominEat</h2>
            <h3>NominEat takes the stress out of restaurant selection.</h3>
            <p>
                Click to view this application: Full Stack Vending Machine (Coming Soon)
            </p>
            <p>NominEat is a restaurant selection service where you, as an event organizer, selects a number of
                restaurants for
                your friends to vote on. To make selecting a restaurant to eat much easier.</p>
            <p>NominEat was a group project for our final capstone while I was attending the Tech Elevator bootcamp. I
                helped to
                design the database, write the backend code using a Java Springboot server, as well as assisted with the
                front end
                using Vue.js and axios.</p>
            <h4>Java | Springboot | PostgreSQL | Postman | HTML | CSS | JavaScript | Vue.js | Axios | External APIs |
                RESTful API | JDBC</h4>
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
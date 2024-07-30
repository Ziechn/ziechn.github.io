<template>
    <div class="project-container">
        <img src="/assets/images/nomin-eat.png" alt="NominEat Logo">
        <div class="detail">
            <h2>NominEat</h2>
            <h3>NominEat takes the stress out of restaurant selection.</h3>
            <p>
                <a href="http://github.com/Ziechn/NominEat-Capstone" target="_blank">github</a>
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
@media screen and (min-width: 1000px) {
    img {
        order: 1;
    }

    .detail {
        order: 0;
    }
}
</style>
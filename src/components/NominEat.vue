<template>
    <div class="detail-container">
        <img src="/assets/images/nomin-eat.png" alt="NominEat Logo">
        <div class="detail">
            <h2>NominEat</h2>
            <h3>NominEat takes the stress out of restaurant selection.</h3>
            <p>
                <a href="http://github.com/Ziechn/NominEat-Capstone" target="_blank">github</a>
            </p>
            <p>
                NominEat is a restaurant selection service where you, as an event organizer, search for and select a number of
                restaurants that you would like to eat at. Then send that list to your friends and ask them to vote for their favorites.
            </p>
            <p>
                Group restaurant selection is now a fun event for the entire group.
            </p>
            <p>
                NominEat was our final capstone project at the Tech Elevator bootcamp.
                I designed the database and wrote backend code using Java/Spring Boot,
                connecting to a PostgreSQL server via the JDBC Template. I also integrated an external Yelp! API,
                set up internal API endpoints with the REST Template, and helped finalize the front-end features using Vue.js and Axios.
            </p>
            <h4>Java | Springboot | PostgreSQL | Postman | HTML | CSS | JavaScript | Vue.js | Axios | External APIs | RESTful API | JDBC</h4>
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
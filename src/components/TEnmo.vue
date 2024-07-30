<template>
    <div class="project-container">
        
        <div class="detail">
            <h2>TENmo</h2>
            <h3>A CLI application to simulate transfering money between users.</h3>
            <p>
                No Version Available to view. (Ask to view source code)
            </p>
            <p>
                Our bootcamp's second group capstone project. TEnmo was a group project to create a Venmo clone where
                users can transfer and view simulated funds in a CLI
                application. Using our understanding of a Java backend, using object orientated principal, and
                connecting to a PostgreSQL database throught the JDBC template.
            </p>
            <h4>Java | Springboot | PostgreSQL | JDBC</h4>
        </div>
        <img src="/assets/images/tenmo.png" alt="TEnmo">
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
    margin-right: 20px;
}

.detail {
    background-color: #412728;
    padding: 20px;
    border-radius: 5px;
    margin: 20px;
}
</style>
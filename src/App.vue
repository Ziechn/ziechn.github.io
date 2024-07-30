<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
h1 {
  margin: 0;
  width: fit-content;
  font-size: 1.5em;
}

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

hr {
  border: 1px solid #b87c4c;
}

p {
  color: #b87c4c;
}

ul {
  color: #b87c4c;
  list-style: square;
}

.contact {
  display: flex;
  width: auto;
  margin: 10px 0px;
  justify-content: center;
}

.contact a:last-child {
    border: none;
  }

.content {
  display: flex;
  justify-content: center;
  margin-top: 0px;
  padding-top: 10px;
  min-height: 70vh;
  flex-direction: column;
}

.detail {
  background-color: #412728;
  padding: 20px;
  border-radius: 5px;
  margin: 10px 0;
  width: auto;
}

.header {
  width: 100%;
  margin-top: 0px;
}

.headline {
  margin: 0px;
  padding: 0 10px;
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
  margin: 10px 0;
  margin-left: 20px;
}

.section {
  background-color: #412728;
  padding: 20px;
  border-radius: 5px;
  margin: 10px 0;
}

@media screen and (min-width: 1000px) {
  .contact a {
    display: block;
    padding: 0 10px;
    border-right: 1px solid white;
  }

  .content {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
}

@media screen and (max-width: 1000px) {
  .contact a {
    display: block;
    padding: 0 10px;
    border-right: 1px solid white;
    margin: 10px 0;
  }

  .content {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .project-container {
    flex-direction: column;
  }

  .project-container img {
    width: auto;
    height: auto;
    margin: 10px 0;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    text-align: center;
    width: auto;
  }

  hr {
    border: 1px solid #b87c4c;
    width: 100%;
  }

  .contact {
    flex-direction: column;
  }

  .contact a {
    text-align: center;
    margin: 5px 0;
    border: none;
  }

  .content {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }

  .headline {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
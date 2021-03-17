<template>
  <div id="header-menue">
    <div class="header">
      <!--Logo!-->
      <nav class="left-side">
        <img id="logo" src="../assets/sirius.png" alt="" />
      </nav>
      <!--phone number!-->
      <nav class="right-side">
        <div class="phone-number">
          <h2>06102-815-3335</h2>
        </div>
        <!--Links-->
        <div class="nav-list">
          <a href="#" v-on:click="comp = 'start'" @click="test">Startseite</a>
          <a href="#" v-on:click="comp = 'pflege'" @click="test"
            >Pflegedienst</a
          >
          <a>Kontakt</a>
          <a href="#" v-on:click="comp = 'impr'" @click="test">Impressum</a>
        </div>
      </nav>
    </div>
    <component v-bind:is="comp"></component>
  </div>
</template>

<script>
//import components
import pflegedienst from "./pflegedienst.vue";
import startseite from "./startseite.vue";
import impressum from "./impressum.vue";
//import Vue from'vue';

//define export object for navigation menue
export default {
  //call components
  components: {
    pflege: pflegedienst,
    start: startseite,
    impr: impressum,
  },

  name: "header",
  data() {
    return {
      //default component
      comp: "start",
      method: {
        test: function () {
          window.scrollTo(0, 0);
        },
      },
    };
  },
};
</script>

<style scoped>
#logo {
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 100%;
  position: fixed;
  border: 1px solid white;
  box-shadow: 10px 5px 5px grey;
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
}

.phone-number {
  color: rgb(70, 130, 180);
}
/*Link font decoration*/
a {
  margin-top: 5%;
  text-decoration: none;
  text-align: center;
  font-family: verdana;
  font-weight: 400;
  font-size: 20px;
  color: grey;
  cursor: pointer;
  padding-bottom: 15px;
}
/*Link Container Flex box*/
.nav-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-right: 10px;
}

.nav-list a:hover {
  color: rgb(70, 130, 180);
  text-decoration: underline;
}

.nav-list a {
  display: inline-block;
}

.nav-list a {
  transition: all 0.3s ease 0s;
}
/*header right sied(links)*/
.right-side {
  margin-left: 30em;
}
.phone-number {
  margin-left: 20em;
}
</style>


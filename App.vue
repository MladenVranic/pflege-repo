<template>
  <div id="app">
    
    <!--Call Components-->
    <navigation/>
    <footerPflege/>

    <div class="backToTop-btn" >
      <a href="#" id="backToTop" class="backBTN" v-scrollanimation></a>
    </div>


  </div>
</template>

<script>
//import my other components, so i can use them in this file
import navigation from './components/navigation.vue';
import footerPflege from './components/footerPflege.vue';
//import startseite from './components/startseite.vue';
//import pflegedienst from './components/pflegedienst.vue';





export default {
  name: 'App',
   //call components
  components:{
    navigation,
    footerPflege,
    //startseite,
    //pflegedienst,
  },
  data(){
    return{

    }
  }
}
   
</script>

<style>

body{
  
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.backBTN{
  display: inline;
  width: 30px;
  height: 30px;
  padding: 25px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999999999999999999999999999999;
  background:  rgb(70,130,180);
  border: 1px solid rgb(70,130,180);
  border-radius: 100px;
  box-shadow: 0 0 9px 1px rgb(0 0 0 / 40%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  transform: rotate(-90deg);
  transition: 0.3s all ease-out;
  opacity: 0;
}
.before-enter{
  opacity: 0;
  transition: all 1s ease-out;
}
.enter{
  opacity: 1;
}
</style>

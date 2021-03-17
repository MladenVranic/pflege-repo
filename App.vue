<template>
  <div id="app">
    
    <!--Call Components-->
    <navigation/>
    <footerPflege/>


  </div>
</template>

<script>
//import my other components, so i can use them in this file
import navigation from './components/navigation.vue';
import footerPflege from './components/footerPflege.vue';
//import startseite from './components/startseite.vue';
//import pflegedienst from './components/pflegedienst.vue';




export default {
   //call components
  components:{
    navigation,
    footerPflege,
    //startseite,
    //pflegedienst,
  },

 name: 'App',
  
  data(){
    return{
      user:{
       
      }
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
}
</style>

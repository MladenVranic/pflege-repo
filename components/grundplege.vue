<template>
<div class="grundpflege" >
  <div class="grundpflege-left" v-slideInAnimation>
    <h1>Grundpflege</h1>
      </div>
      <!-- <div class="grundpflege-mobile" v-slideInAnimation>
        <h1>Grundpflege</h1> <br>
      </div> -->
        <div class="grundpflege-right" v-intersection>
         <h1>Grundpflege Übersicht: </h1><br>
            <ul> <li>- Körperpflege</li></ul>
            <ul> <li>- Hilfe beim An - und Ausziehen</li></ul>
            <ul> <li>- Hilfe beim Essen und Trinken</li> </ul>
            <ul> <li>- Bewegungshilfe</li></ul>
            <ul><li>- Hauswirtschaftliche Aufgaben</li></ul>
        </div>
</div>
</template>

<script>

export default {
  name: 'grundpflege',
    data:() => {
        return {

    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
$font-color: rgb(70,130,180);
/**BREAKPOINTS  */
$small-desktop: 769px;
$large-desktop: 1600px;
$mobile: 576px;

.grundpflege{
  margin-top:10%;
  display:flex;
  height: 550px;
  padding-top:150px;
}
.grundpflege-left{
  background-color: $font-color;
  z-index:-1;
  width:50%;
  background:linear-gradient(300deg, transparent 20%,rgb(70,130,180) 0) top right;
}
.grundpflege-left h2{
  color:#fff;
  margin-top:3%;
}
.grundpflege-left h1{
   color:#fff;
   margin-top:2%;
   margin-left:50%;
   border-bottom:3px solid #fff;
}
.grundpflege-right{
  margin:0 auto;
  width:45%;
  line-height: 1.55;
  text-align: center;
  padding:5px;
  margin-top:5%;

}
li{
  list-style: none;
}
.grundpflege-mobile{
  display:none;
}

@media only screen and (min-width: #{$small-desktop}) and (max-width: #{$large-desktop}){
  .grundpflege{
    margin-top:15%;
  }
  .grundpflege-left{
    background-color: $font-color;
    z-index:-1;
    width:52%;
    background:linear-gradient(300deg, transparent 25%,rgb(70,130,180) 0) top right;
}
  .grundpflege-right{
    margin:0 auto;
    width:50%;
    line-height: 1.55;
    text-align: center;
    padding:5px;
    margin-top:5%;
    padding-right:25px;

  }

}

/**MOBILE DESIGN */
@media (max-width: #{$mobile}){
    h1{
          font-size:22px;
      }
  .grundpflege{
      display:flex;
      flex-wrap: wrap;
      display:flex;
      height: 300px;
      padding-top:20px;

    }
  .grundpflege-left{
    display:none;
  }

  .grundpflege-right{
    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);
    margin:0 auto;
    width:100%;
    line-height: 1.4;
    text-align: justify;
    padding-left:50px;
    padding-right:25px;
    padding-top:25px;
  }

}

</style>
<template>
<div class="service" >
  <div class="service-left" v-slideInAnimation>
    <h1>Serviceleistungen</h1>
      </div>
      <div class="service-mobile" v-slideInAnimation>
        <h1>Serviceleistungen</h1>
      </div>
        <div class="service-right" v-intersection>
          <h1>Serviceleistungen Übersicht: </h1><br>
                        <ul> <li>- Pflegehilfe</li></ul>
                        <ul> <li>- Begleitung bei Spaziergängen</li></ul>
                        <ul> <li>- Pflegeberatung nach §37 Abs. 3 SGB XI</li></ul>
                        <ul> <li>- häusliche Pflege nach §37 SGB V</li></ul>
        </div>
</div>
</template>

<script>

export default {
  name: 'service',
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

.service{
  margin-top:10%;
  margin-bottom:10%;
  display:flex;
  height: 550px;
  padding-top:150px;
}
.service-left{
  background-color: $font-color;
  z-index:-1;
  width:50%;
  background:linear-gradient(300deg, transparent 20%,rgb(70,130,180) 0) top right;
}
.service-left h2{
  color:#fff;
  margin-top:3%;
}
.service-left h1{
   color:#fff;
   margin-top:2%;
   margin-left:50%;
   border-bottom:3px solid #fff;
}
.service-right{
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
.service-mobile{
  display:none;
}

@media only screen and (min-width: #{$small-desktop}) and (max-width: #{$large-desktop}){
  .service{
    margin-top:15%;
  }
  .service-left{
    background-color: $font-color;
    z-index:-1;
    width:52%;
    background:linear-gradient(300deg, transparent 23%,rgb(70,130,180) 0) top right;
}
  .service-right{
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
  .service{
      display:flex;
      flex-wrap: wrap;
      display:flex;
      height: 300px;
      padding-top:20px;

    }
  .service-left{
    display:none;
  }

  .service-right{
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
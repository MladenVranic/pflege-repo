<template>
<div class="behandlungspflege" >
  <div class="behandlungspflege-left" v-slideInAnimation>
    <h1>Medizinische Maßnahmen</h1>
      </div>
      <!-- <div class="behandlungspflege-mobile" v-slideInAnimation>
        <h1>Medizinische Maßnahmen</h1> <br>
      </div> -->
        <div class="behandlungspflege-right" v-intersection>
         <h1>Medizinische Maßnahmen <br> Übersicht: </h1><br>
            <ul> <li>- Verabreichen von Medikamenten</li></ul>
            <ul> <li>- Injektionen</li></ul>
            <ul> <li>- Blutdruck & - zucker Kontrolle</li> </ul>
            <ul> <li>- Wundversorgung</li></ul>
        </div>
</div>
</template>

<script>

export default {
  name: 'behandlungspflege',
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

.behandlungspflege{
  margin-top:10%;
  display:flex;
  height: 550px;
  padding-top:150px;
}
.behandlungspflege-left{
  background-color: $font-color;
  z-index:-1;
  width:50%;
  background:linear-gradient(300deg, transparent 20%,rgb(70,130,180) 0) top right;
}
.behandlungspflege-left h2{
  color:#fff;
  margin-top:3%;
}
.behandlungspflege-left h1{
   color:#fff;
   margin-top:2%;
   margin-left:40%;
   border-bottom:3px solid #fff;
}
.behandlungspflege-right{
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
.behandlungspflege-mobile{
  display:none;
}

@media only screen and (min-width: #{$small-desktop}) and (max-width: #{$large-desktop}){
  .behandlungspflege{
    margin-top:15%;
  }
  .behandlungspflege-left{
    background-color: $font-color;
    z-index:-1;
    width:52%;
    background:linear-gradient(300deg, transparent 25%,rgb(70,130,180) 0) top right;
}
  .behandlungspflege-right{
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
  .behandlungspflege{
      display:flex;
      flex-wrap: wrap;
      display:flex;
      height: 300px;
      padding-top:20px;

    }
  .behandlungspflege-left{
    display:none;
  }

  .behandlungspflege-right{
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
<template>
<div class="intensiv" >
  <div class="intensiv-left" v-slideInAnimation>
    <h1>Intensivpflege</h1>
      </div>
      <div class="intensiv-mobile" v-slideInAnimation>
        <h1>Intensivpflege</h1>
      </div>
        <div class="intensiv-right" v-intersection>
          <h1>Intensivpflege Übersicht: </h1><br>
                        <ul> <li>- Überwachung & Vitalisierung</li></ul>
                        <ul> <li>- Lagerungsbehandlung</li></ul>
                        <ul> <li>- Mobilisation</li></ul>
        </div>
</div>
</template>

<script>

export default {
  name: 'intensiv',
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

.intensiv{
  margin-top:10%;
  display:flex;
  height: 550px;
  padding-top:150px;
}
.intensiv-left{
  background-color: $font-color;
  z-index:-1;
  width:50%;
  background:linear-gradient(300deg, transparent 20%,rgb(70,130,180) 0) top right;
}
.intensiv-left h2{
  color:#fff;
  margin-top:3%;
}
.intensiv-left h1{
   color:#fff;
   margin-top:2%;
   margin-left:50%;
   border-bottom:3px solid #fff;
}
.intensiv-right{
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
.intensiv-mobile{
  display:none;
}

@media only screen and (min-width: #{$small-desktop}) and (max-width: #{$large-desktop}){
  .intensiv{
    margin-top:15%;
  }
  .intensiv-left{
    background-color: $font-color;
    z-index:-1;
    width:52%;
    background:linear-gradient(300deg, transparent 25%,rgb(70,130,180) 0) top right;
}
  .intensiv-right{
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
  .intensiv{
      display:flex;
      flex-wrap: wrap;
      display:flex;
      height: 300px;
      padding-top:20px;

    }
  .intensiv-left{
    display:none;
  }

  .intensiv-right{
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
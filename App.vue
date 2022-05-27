<template>
  <div id="app">
<nav>
    <div class="navigation" v-bind:class="{scrollNav: scrollPosition}">
        <!-- LEFT SIDE NAVIGATION FOR LOGO AND NAME -->
        <div class="left-nav" v-bind:class="{scrollIMG: scrollPosition}">
            <a href="#start"><img src="./assets/logo.png" alt="firmenlogo" width="200px" v-bind:class="{scrollIMG: scrollPosition}"></a>
        </div>
        <div class="right-nav" v-bind:class="{scrollLinks: scrollPosition}">
            <div><a href="#start">Pflegedienst</a></div>
            <div><a href="#leistung">Leistungen</a></div>
              <!-- <div class="dropdown-content">
                <a href="#breitbnd">Breitband</a>
                <a href="#garten">Gartenbau</a>
              </div> -->
            <div><a href="#kontakt">Kontakt</a></div>
            <div><a href="#impressum" v-bind:class="{showImpr: impr}" @click="showImpr = !showImpr">Impressum</a></div>
        </div>
    </div>

    <!-- MOBILE NAVIGATION -->
<header class="header" v-bind:class="{scrollNav: scrollPosition }">
    <div class="mobile-nav" >
      <div class="left-nav-mobile">
            <a href="#start"><img src="./assets/logo.png" alt="firmenlogo" width="90px" ></a>
            </div>

        <!-- SIED NAV -->

        <div class="hamburger-menue">
          <button class="navbar-toggler hamburger-button" type="button" data-toggle="collapse" data-target="#ham-content"
          aria-controls="ham-content" aria-expanded="false" aria-label="Toggle navigation">
          <div class="animated-hamburger" v-bind:class="{open:showNav}" @click="showNav=!showNav"><span></span><span></span><span></span></div>
        </button>
        </div>

<div class="sidenav" v-if="showNav" v-bind:class="{scrollNavLinks: scrollPosition }">
                <div class="logo-mobile-menue">
                  <a href="#start"><img src="./assets/logo.png" alt="firmenlogo" width="90px" ></a>
                </div>
                <div class="links"><a href="#start"  @click="showNav=!showNav">Pflegedienst</a></div>
                  <div class="links"><a href="#leistung"  @click="showNav=!showNav">Leistungen</a></div>
                  <div class="links"><a href="#kontakt"  @click="showNav=!showNav">Kontakt</a></div>
                  <div class="links"><a href="#impressum" v-bind:class="{showImpr: impr}" @click="showImpr = !showImpr, showNav=!showNav">Impressum</a></div>
          </div>
    </div>
  </header>
</nav>
<div class="phone-btn" >
   <a href="tel:061028153335" ><img src="./assets/phone-message.png" alt="" class="phoneBTN"></a>
  </div>


    <about id="start"></about>
    <leistungen id="leistung"></leistungen>
    <grundpflege id="grundpflege"></grundpflege>
    <behandlungspflege id="behandlungspflege"></behandlungspflege>
    <intensiv id="intensivpflege"></intensiv>
    <service id="serviceleistungen"></service>
    <karriere id="karriere"></karriere>
    <kontakt id="kontakt"></kontakt>
    <impressum id="impressum" class="impr" v-if="showImpr"></impressum>
  </div>
</template>

<script>
import About from './components/about.vue'
import grundpflege from './components/grundplege.vue'
import Kontakt from './components/footer.vue'
import Leistungen from './components/leistungen.vue'
import Impressum from './components/impressum.vue'
import intensiv from './components/intensivpflege.vue'
import behandlungspflege from './components/behandlungspflege.vue'
import service from './components/serviceleistungen.vue'

export default {
  name: 'App',
  components: {
    About,
    grundpflege,
    Kontakt,
    Leistungen,
    behandlungspflege,
    intensiv,
    service,
    Impressum

  },
  data:() => {
        return {
          scrollPosition: null,
          showNav: false,
          showDrop: false,
          showImpr: false,
        }
    },
    methods:{
      updateScroll(){
        this.scrollPosition = window.scrollY
      }
    },
    mounted(){
      window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<style lang="scss">
/*VARIBALES*/
$font-color: rgb(70,130,180);
$link-color: gray;
$small-desktop: 769px;
$large-desktop: 1600px;
$mobile: 576px;

/*STYLE */
.phone-btn{
  display:none;
}
h1,h2,h3{
  color:$font-color;
}
body{
  margin-left:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-top:0px;
}

#app {
  font-family: MaisonNeue-Book,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:21px;
  font-weight:400;
}

/*CLASSES FOR INTERSECTION OBSERVER */
.before-enter{
  opacity: 0;
  transition: all 3s ease-out;
}
.enter{
  opacity: 1;
}

/*SLIDE ANIMATION OBSERVER */
.before-slide{
    opacity: 0;

}
.slide{
    opacity: 1;
    transform: translateX(-100%);
    animation: slide 2s forwards;
}
@keyframes slide{
    100%{transform: translateX(0%);}
}

.impr{
  display:block;
}
.impr-hide{
  display:none
}

/*NAVIGATION */

span{
    color:$font-color;
}

    .navigation{
        background-color: rgba(255, 255, 255, 0.90);
        position:fixed;
        z-index:99999;
        display:flex;
        height: 120px;
        border-bottom: 1px solid $font-color;
        align-items: center;
        justify-content: space-between;
        width:100%;
    }

    /**DROPDOWN NAV */
    .dropdown {
      float: left;
    }

    .dropdown .dropbtn {
      border: none;
      outline: none;
      color: $font-color;
      background-color: inherit;
      font-family: inherit;
      margin: 0;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      float: none;
      color: $font-color;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }
    .dropdown-content a:hover {
      background-color: #ddd;
      color:$font-color;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    /**DROPDOWN END */

    .left-nav{
        margin-left: 10%;
        color: $font-color;
    }
    .right-nav{
        width:33%;
        display:flex;
        justify-content: space-around;
        margin-right:5%;
    }
    .right-nav>div>a{
        color: $font-color;
        margin:15px;
        font-size:20px;
    }
    .right-nav>div>a:hover{
        color:$font-color;
    }

    .scrollLinks{
      background-color: #fff;
    }
    .scrollNav{
      background-color: #fff;
      height:80px;
    }
    .scrollIMG{
      width:152px;
      height:60px;
    }

.header{
  display:none;
}


@media (min-width: #{$small-desktop}) and (max-width: #{$large-desktop}) {
      .phone-btn{
      display:none;
    }

    .navigation{
        width:100%;
        background-color: rgba(255, 255, 255, 0.90);
        position:fixed;
        z-index:99999;
        display:flex;
        height: 120px;
        border-bottom: 1px solid $font-color;
        align-items: center;
        justify-content: space-between;
    }
    .right-nav{
        width:36%;
        display:flex;
        justify-content: space-around;
        margin-right:9%;
    }
    .right-nav>div>a{
      color: $font-color;
      margin:15px;
      font-size:20px;
    }
    .left-nav{
        margin-left: 9%;
        color: $font-color;
    }
       .scrollLinks{
      background-color: #fff;
    }
    .scrollNav{
      background-color: #fff;
      height:80px;
    }
    .scrollIMG{
      width:152px;
      height:60px;
    }

}/*END */

/**MOBILE STYLE */
@media (max-width: #{$mobile}){
  #app{
        font-size: calc(14px + 3 * ((100vw - 320px) / 255));
        transition: margin-left .5s;
  }
  .phone-btn{
      display: block;
    }
    .phone-btn img{
      width: 100px;
      height: 100px;
      padding: 25px;
      position: fixed;
      bottom: 40px;
      right:4px;

    }
  .navigation{
    display:none;
  }
  .logo-mobile-menue{
    margin-top:20px;
  }
    /**DROPDOWN NAV */
    .dropdown-mob .dropbtn-mob {
      border: none;
      outline: none;
      color: $font-color;
      background-color: inherit;
      font-family: inherit;
      font-size: 20px;
    }
    .dropdown-content-mob {
      display: block;
    }

    .dropdown-content-mob a {
      float: none;
      color: $font-color;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

    }

    /**DROPDOWN END */
  .header{
      display:block;
      width:100%;
      background-color: rgba(255, 255, 255, 0.90);
      z-index:99999;
      display:flex;
      height: 10%;
      border-bottom: 1px solid $font-color;
      align-items: center;
      justify-content: space-between;
      position:fixed;
  }
  .left-nav-mobile{
    padding-left:25px;
  }
  .mobile-nav{
      width:100%;
      display:flex;
      align-items: center;
      justify-content: space-between;
  }

  .sidenav{
        text-align: center;
        display:block;
        text-decoration: none;
        margin: 0 auto;
        padding: 0;
        width: 70%;
        height:1000px;
        background-color: #fff;
        border-right: 1px solid $font-color;
        left:0;
        top:0%;
        position: fixed;
        transition: 3s ease-in-out;

      }
.sidenav a{
      font-size: 20px;
      color: $font-color;
}
.links{
  margin:30px;
}
  .scrollNav{
      background-color: #fff;
      height:80px;
    }
    .animated-hamburger{
      width: 30px;
      height: 20px;
      position: relative;
      margin: 0px;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .5s ease-in-out;
      -moz-transition: .5s ease-in-out;
      -o-transition: .5s ease-in-out;
      transition: .5s ease-in-out;
      cursor: pointer;
    }
    .animated-hamburger span{
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
      }

    .animated-hamburger span {
      background: $font-color;
    }
    .animated-hamburger span:nth-child(1) {
      top: 0px;
  }

  .animated-hamburger span:nth-child(2) {
    top: 10px;
  }

  .animated-hamburger span:nth-child(3) {
    top: 20px;
  }

  .animated-hamburger.open span:nth-child(1) {
    top: 11px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  .animated-hamburger.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  .animated-hamburger.open span:nth-child(3) {
    top: 11px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

}
</style>

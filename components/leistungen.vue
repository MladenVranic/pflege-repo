<template>
<div class="leistungen">
    <div class="leistungen-text" >
        <h2  v-slideInAnimation>Erhalten sie einen Einblick in die verschiedenen Leistungen <br> der ambulanten Pflege</h2> <br>
        <p v-slideInAnimation>
            Bei weiteren Fragen kontaktieren Sie uns <a href="#kontakt">Telefonisch</a>
            oder schreiben Sie uns eine <a href="#kontakt">E-mail</a>.
        </p>
    <br><br>
    <div class="beschreibung">
        <div class="leistungen-btns-left" v-slideInAnimation>
            <div><b-button class="test-btn" variant="outline-info" v-bind:class="{leistungenPanel:putzText}"
                @click="putzText=true,estrich=false, erdText=false,roh=false, anlagen=false">Grundpflege</b-button></div>
            <div><b-button class="test-btn" variant="outline-info" v-bind:class="{leistungenPanel:erdText}"
                @click="erdText=!erdText, estrich=false,putzText=false,roh=false, anlagen=false">Intensivpflege</b-button></div>
            <div><b-button class="test-btn" variant="outline-info" v-bind:class="{leistungenPanel:anlagen}"
                @click="anlagen=!anlagen,estrich=false,erdText=false,roh=false, putzText=false">Serviceleistungen</b-button></div>
        </div>
            <div class="leistungen-text-right" >
                <div class="leistungenPanel" v-if="putzText" v-intersection>
                    <h1>Grundpflege</h1> <br>
                    <p>
                        Menschen, die körperlich und geistig nicht mehr so fit sind,
                        können meistens alltägliche Tätigkeiten, wie z.B selbständig essen,
                        das Klo aufsuchen und sich selbständig anziehen nicht mehr bewältigen.
                        Natürlich fällt auch die <span>Vorsorge</span> in die Grundpflege.
                        Durch die <span>Vorsorge</span> werden Einschränkungen wie Erkältung,
                        Versteifung und weitere Beschwerden vermieden. Um eine sorgfältige
                        Vorsorge durchzuführen, kümmern wir uns um jegliche negative Einflüsse
                        unserer Patienten und beseitigen diese.
                    </p>
                </div>
                <div class="leistungenPanel" v-if="erdText" v-intersection>
                    <h1>Intensivpflege</h1><br>
                    <p>
                        Die Intensivpflege ist ein wesentlicher Bestandteil unserer Leistungen.
                        Ambulante Intensivpflege bezeichnet die Behandlung pflegebedürftiger Menschen
                        mit lebensbedrohlicher Erkrankungen außerhalb der Klinik.
                        Sie tritt in kraft, wenn eine stationäre klinische Behandlung und
                        medizinischer Versorgung nicht mehr erforderlich ist.
                    </p>
                </div>
                <div class="leistungenPanel" v-if="anlagen" v-intersection>
                    <h1>Serviceleistungen</h1><br>
                    <p>
                        Zu unseren Servieleistungen gehört unter anderem die <span> häusliche
                        Krankenpflege nach §37 SGB V  </span> als Leistung der gesetzlichen Krankenversicherung,
                        welche unter anderem die <span>Medikamentengabe</span>, den <span>Verbandswechsel</span>  und <span>Injektionen</span> beinhaltet.
                    </p>
                </div>
            </div>
        </div>
    </div>
<!-- MOBILE LEISTUNGEN -->
<div class="leistungen-mobile">
    <div class="leistungen-mobile-txt">
        <h1 v-slideInAnimation>Übersicht unserer Leistungen</h1> <br>
            <p v-intersection>
                Erhalten sie einen Einblick in die verschiedenen Leistungen,
                die wir ihnen in als ambulante Pflegedienste zur verügung stellen! Bei weiteren Fragen kontaktieren Sie uns <a href="#kontakt">Telefonisch</a>
                oder schreiben Sie uns eine <a href="#kontakt">E-mail</a>.
            </p>
        </div>
    <br><br>
    <div class="leistungen-btn-mobile" v-intersection>
         <div><b-button class="test-btn" variant="outline-info" v-bind:class="{leistungenPanelMobile:putzTextMobile}"
                @click="putzTextMobile=!putzTextMobile">Grundpflege</b-button></div>
                <div class="leistungenPanelMobile" v-if="putzTextMobile" v-intersection>
                    <h1>Grundpflege</h1> <br>
                    <p>
                        Menschen, die körperlich und geistig nicht mehr so fit sind,
                        können meistens alltägliche Tätigkeiten, wie z.B selbständig essen,
                        das Klo aufsuchen und sich selbständig anziehen nicht mehr bewältigen.
                        Natürlich fällt auch die <span>Vorsorge</span> in die Grundpflege.
                        Durch die <span>Vorsorge</span> werden Einschränkungen wie Erkältung,
                        Versteifung und weitere Beschwerden vermieden. Um eine sorgfältige
                        Vorsorge durchzuführen, kümmern wir uns um jegliche negative Einflüsse
                        unserer Patienten und beseitigen diese.
                    </p>
                </div>
            <div><b-button class="test-btn" variant="outline-info" v-bind:class="{leistungenPanel:erdText}"
                @click="erdText=!erdText">Intensivpflege</b-button></div>
                <div class="leistungenPanelMobile" v-if="erdText" v-intersection>
                    <h1>Intensivpflege</h1><br>
                    <p>
                        Die Intensivpflege ist ein wesentlicher Bestandteil unserer Leistungen.
                        Ambulante Intensivpflege bezeichnet die Behandlung pflegebedürftiger Menschen
                        mit lebensbedrohlicher Erkrankungen außerhalb der Klinik.
                        Sie tritt in kraft, wenn eine stationäre klinische Behandlung und
                        medizinischer Versorgung nicht mehr erforderlich ist.
                    </p>
                </div>
            <div><b-button class="test-btn" variant="outline-info" v-bind:class="{leistungenPanel:anlagen}"
                @click="anlagen=!anlagen">Serviceleistungen</b-button></div>
                <div class="leistungenPanelMobile" v-if="anlagen" v-intersection>
                    <h1>Serviceleistungen</h1><br>
                    <p>
                        Zu unseren Servieleistungen gehört unter anderem die <span> häusliche
                        Krankenpflege nach §37 SGB V  </span> als Leistung der gesetzlichen Krankenversicherung,
                        welche unter anderem die <span>Medikamentengabe</span>, den <span>Verbandswechsel</span>  und <span>Injektionen</span> beinhaltet.
                    </p>
                </div>
    </div>
</div>

</div>
</template>

<script>
export default {
  name: 'Leistungen',
  components: {
  },
    data:() => {
        return {
            putzText: true,
            putzTextMobile: false,
            erdText: false,
            anlagen:false,
            estrich:false,
            roh:false,
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
/**VARIABLES */
$font-color: #3f888f;
/**BREAKPOINTS  */
$small-desktop: 769px;
$large-desktop: 1600px;
$mobile: 576px;

.leistungen{
    background-image: linear-gradient(hsla(240,7%,89%,.6),#fff);
    height:550px;
    padding-top:130px;
}

.leistungen-text{
    width:60%;
    margin: 0 auto;
    text-align: justify;

}
.leistungen-text>p>a{
    color:$font-color;
}

.leistungen-btns-left{
    margin:0 auto;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width:50%;
}
.leistungen-btns-left>div{
    width: 100%;

}
.leistungen-btns-left>div>button{
    width:70%;
    height:55px;
    font-size:20px;
}
.leistungen-text-right{
    width:50%;
}
.leistungenPanel{
    width:100%;
    height:350px;
}
.beschreibung{
    display:flex;
    justify-content: space-around;

}


.leistungen-mobile{
    display:none;
}
/**SMALLER SCREEN MEDIA QUEIRES */

@media only screen and (min-width: #{$small-desktop}) and (max-width: #{$large-desktop}) {
    h1{
        font-size:34px;
    }
    .leistungen{
        background-image: linear-gradient(hsla(240,7%,89%,.6),#fff);
        height:550px;
        padding-top:130px;
        display:flex;
        flex-wrap:wrap;
    }
    .leistungen-btns-left{
        margin:0 auto;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width:50%;
    }
    .leistungen-btns-left>div{
        width: 100%;
        margin:10px;
    }
    .leistungen-btns-left>div>button{
        width:70%;
        height:50px;
        font-size:18px;
    }
    .leistungen-text-right{
    width:60%;
}

}

@media only screen and (max-width: #{$mobile}){
     h1{
        font-size:22px;
    }
    .leistungen{
        height:100%;
        padding-top:100px;
        display:flex;
        flex-wrap:wrap;
    }
    .leistungen-text{
        display:none;
    }
    .leistungen-mobile{
        display:block;
    }
    .leistungen-mobile-txt{
        width:100%;
        padding-left:25px;
        padding-right:25px;
        margin: 0 auto;
        text-align: justify;

    }
    .leistungen-mobile-txt>p>a{
        color:$font-color;
    }
    .leistungs-btn-mobile{
        margin:0 auto;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width:100%;
    }
    .leistungen-btn-mobile>div{
        margin:10px;
}
    .leistungen-btn-mobile>div>button{
        width:100%;
        height:55px;
        font-size:18px;
    }
    .leistungenPanelMobile{
        display:block;
        text-align: justify;
        padding-left: 25px;
        padding-right: 25px;
    }
    .leistungenPanelMobile>h1{
        margin-top: 25px;
    }

}

</style>
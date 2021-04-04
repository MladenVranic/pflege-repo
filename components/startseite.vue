<template>
    <div id="startseite">

        <div>
            <!--Startseite Anzeigebild-->
            <div class="intro-img">
            <img src="../assets/cargiver_3.png" alt="" >
            </div>
            <!--Form im Anzeigebild-->
            <div class="intro-form" >
                <!--Überschrift-->
                <div class="titel">
                    <h2 v-scrollanimation>Sirius Pflegedienst in Frankfurt und Umgebung</h2>
                </div>
                <!--Text & Icons in der Form-->
                <div class="form-text" v-scrollanimation>
                    <div><img src="../assets/starIcon.png" alt="" class="icon"></div>
                        <div>
                            <p>
                                <strong>
                                    langjährige Erfahrung
                                </strong>
                            </p>
                        </div>

                <div class="form-text-2">
                    <div> <img src="../assets/starIcon.png" alt="" class="icon"></div>
                        <div>
                            <p>
                                <strong>
                                    24h verfügbar
                                </strong>
                            </p>
                        </div>
                    </div>
                    <div class="form-text-3">
                        <div>
                            <p>
                                <strong>
                                    sirius.pd@outlook.de
                                </strong>
                            </p>
                        </div>
                    </div><!--Ende Form-text-3-->
                </div><!--Ende Form-text-->
            </div><!--Ende Intro Form-->
        </div>

<div class="inhalt">
    <div class="titel" v-scrollanimation>
        <h1>Sirius Pflegedienst - Ihr Pflegedienst in Frankfurt und Umgebung</h1>
    </div>

        <div class="intro-text">
            <div class="txt">
                <p v-scrollanimation><strong>
                Sie suchen einen hochqualifizierten Pflegedienst in Ihrer Umgebung?
                Dann sind sie bei uns genau richtig! Wir betreuen jede Art von Patienten,
                ob einfacher Pflegefall oder Intensivfall,
                die Sirius Pflegedienst GmbH steht Ihnen zur verfügung.
                Außerdem stehen wir Ihnen auch außerhalb der Öffnungszeiten bei Notfällen
                24h zur verfügung. In den folgenden Bereichen sind wir Experten:
                </strong>
                </p>
                    <div class="intro-list" v-scrollanimation>
                        <ul><li><span>Grundpflege</span></li></ul>
                        <ul><li><span>Behandlungspflege</span></li></ul>
                        <ul><li><span>Intensivpflege</span></li></ul>
                        <ul><li><span>Serviceleistungen</span></li></ul>
                    </div>
                </div>
              

                <div class="txt">
                    <p v-scrollanimation>
                        <strong>
                            Bei uns steht das Wolhbefinden der Patienten an erster Stelle. 
                            Wir wollen das Vertrauen unserer Patienten gewinnen, um all die 
                            Pflegenotwendingen Leistungen zusammen durchzuführen und der Patient sich 
                            während der gesamten Verpflegung wohl und sicher fühlt.
                        </strong>
                    </p>
                </div>
            </div><!--Ende Intro Text-->
        </div><!--Ende Inhalt--> 

        <!--GrundPflege Überschrift-->
            <div class="grundpflege" v-scrollanimation>
                <div><img src="../assets/grundpflegeIcon.png" alt=""></div>
                    <div><h2>Grundpflege:</h2></div>
                </div>
            <!--Informationstext über die Grundpflege-->
                <div class="grundpflege-text">
                    <div class="txt">
                        <p v-scrollanimation>
                        <strong>
                            Menschen, die körperlich und geistig nicht mehr so fit sind,
                            können meistens alltägliche Tätigkeiten, wie z.B selbständig essen,
                            das Klo aufsuchen und sich selbständig anziehen nicht mehr bewältigen.
                            Natürlich fällt auch die <span>Vorsorge</span> in die Grundpflege.
                            </strong>
                            </p>
                        </div>   
                        <div class="txt">
                            <p v-scrollanimation>
                                <strong>
                                    Durch die <span>Vorsorge</span> werden Einschränkungen wie Erkältung,
                                    Versteifung und weitere Beschwerden vermieden. Um eine sorgfältige
                                    Vorsorge durchzuführen, kümmern wir uns um jegliche negative Einflüsse
                                    unserer Patienten und beseitigen diese.
                                </strong>
                            </p>
                        </div>
                    </div>

              <!--Informationskontainer für Intensivpflege infos. und service Leistungen-->   
    <div class="intensiv-service-information">
        <div>
            <!--Intensivpflege überschrift-->
            <div class="intensiv-pflege" v-scrollanimation>
                <div><img src="../assets/intensivIcon.png" alt=""></div>
                <div><h2>Intensivpflege:</h2></div>
            </div>
        <!--Informationstext über die Intensivpflege-->

                <div class="intensivpflege-text">
                    <div class="txt">
                        <p v-scrollanimation>
                            <strong>
                                Die Intensivpflege ist ein wesentlicher Bestandteil unserer Leistungen.
                                Ambulante Intensivpflege bezeichnet die Behandlung pflegebedürftiger Menschen
                                mit lebensbedrohlicher Erkrankungen außerhalb der Klinik.
                                Sie tritt in kraft, wenn eine stationäre klinische Behandlung und 
                                medizinischer Versorgung nicht mehr erforderlich ist. 
                            </strong>
                        </p>
                    </div>
                </div>
            </div><!--Ende Intensivpflege Kontainer-->
                      <!--Service Leistungen Überschrift-->
        <div>
            <div class="service-leistungen" v-scrollanimation>
                <div><img src="../assets/serviceIcon.png" alt=""></div>
                <div><h2>Serviceleistungen:</h2></div>
            </div>
            <!--Service Leistungen Text-->
                <div class="service-text">
                    <p v-scrollanimation>
                        <strong>
                            Zu unseren Servieleistungen gehört unter anderem die <span> häusliche
                            Krankenpflege nach §37 SGB V  </span> als Leistung der gesetzlichen Krankenversicherung,
                            welche unter anderem die <span>Medikamentengabe</span>, den <span>Verbandswechsel</span>  und <span>Injektionen</span> beinhaltet.
                        </strong>
                    </p>
                </div>
            </div><!--Ende service Kontainer-->
        </div><!--Ende Intensiv-servie Leistungen Kontainer-->
                    <!--Grundpflege Balken-->
                            <div class="balken" >
                                <div class="balken-text" v-slideInAnimation> 
                                    <h3>Welche Leistungen zählen zur Grundpflege?</h3>
                                    <p>alle Leistungen, die die Körperpflege, Ernährung und Mobilität betreffen,
                                        fallen unter die Grundpflege.
                                    </p>
                                </div>
                                <div class="balken-list" v-scrollanimation>
                                    <h1>Grundpflege Übersicht: </h1><br>
                                        <ul> <li>Körperpflege</li></ul>
                                        <ul> <li>Hilfe beim An - und Ausziehen</li></ul>
                                        <ul> <li>Hilfe beim Essen und Trinken</li> </ul>
                                        <ul> <li>Bewegungshilfe</li></ul>
                                        <ul><li>Hauswirtschaftliche Aufgaben</li></ul>
                                    </div>
                                </div>


            <div class="balken" >
                <div class="balken-text" v-slideInAnimation> 
                    <h3>aus welchen medizinischen Maßnahmen setzt sich unsere Behandlungspflege zusammen?</h3>
                </div>
                    <div class="balken-list" v-scrollanimation>
                        <h1>medizinische Maßnahmen Übersicht: </h1><br>
                        <ul> <li>Verabreichen von Medikamenten</li></ul>
                        <ul> <li>Injektionen</li></ul>
                        <ul> <li>Blutdruck & - zucker Kontrolle</li></ul>
                        <ul> <li>Wundversorgung</li></ul>
                    </div>
                </div>
                  
            <!--Intensivpflege Balken-->
            <div class="balken" >
                <div class="balken-text" v-slideInAnimation> 
                    <h3>Welche Leistungen zählen zur Intensivpflege?</h3>
                    <p>ein wichtiger Bestandteil unserer Leistungen ist die Intensivpflege.</p>
                </div>
                    <div class="balken-list" v-scrollanimation>
                        <h1>Intensivpflege Übersicht: </h1><br>
                        <ul> <li>Überwachung & Vitalisierung</li></ul>
                        <ul> <li>Lagerungsbehandlung</li></ul>
                        <ul> <li>Mobilisation</li></ul>
                    </div>
                </div>
            
            <!--Service Balken-->
            <div class="balken" >
                    <div class="balken-text" v-slideInAnimation> 
                        <h3>Welche Serviceleistungen stehen Ihnen zur Verfügung?</h3>
                            <p>Die Sirius Pflegedienst GmbH stellt Ihnen ein attraktives
                            Paket an Serviceleistungen zur Verfügung.
                            </p>
                    </div>
                        <div class="balken-list" v-scrollanimation>
                            <h1>Serviceleistungen Übersicht: </h1><br>
                                <ul> <li>Pflegehilfe</li></ul>
                                <ul> <li>Begleitung bei Spaziergängen</li></ul>
                                <ul> <li>Pflegeberatung nach §37 Abs. 3 SGB XI</li> </ul>
                                <ul> <li>häusliche Pflege nach §37 SGB V</li> </ul>
                            </div>
                        </div>
            </div>
</template>

<script>
export default {
    name: 'start',
    data(){
        return{
            user:{

            }
        }
    }
}
</script>

<style scoped>



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

#startseite{
    /*calling slide animation for this section*/
    /*animation: 1s ease-out 0s 1 slide;*/
    margin-bottom: 10%;
    font-family: sans-serif;
}

                                /*INTRO-FORM*/

.intro-form{
    color: rgb(70,130,180);
    width: 30em;
    height: 25em;
    margin: 0 auto;
    position: absolute;
    bottom: 10em;
    left: 45em;
    right: 0;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.678);
    text-align: center;  
}
.form-text{
    display:flex;
    flex-wrap: wrap;
    margin-top: 3em;
    margin-left: 2em;
    padding: 3px;
    font-size: 22px;
    font-family: sans-serif;
    width: 20em;
}
.form-text-2{
    display:flex;
    font-size: 22px;
    font-family: sans-serif;
    width: 10em;
}
.form-text-3{
    margin-left: 1.5em;
    margin-top: 7em;
    width: 70%;
    height: 40px;
    border-radius: 3px;
    background: rgb(70,130,180);
    color: white;
    text-align: center;
    padding-bottom:13px;
    position: absolute;

}


.intro-img{
    position: relative;
    display:inline-block;
    width: 100%;
}

.intro-img img{
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 8%;
    height: 42em;
    width: 99.5%;
    
}


                            /*Text Inhalt der Seite*/


.inhalt{
    margin-right: 10%;
    margin-top: 10%;
    margin-left: 10%;
}

                                /*TITEL SCHRIFTFARBE*/

                            
.titel{
    color: rgb(70,130,180);
}


                                    /*INTRO TEXT*/


.intro-text{
    display:flex;
    font-size: 18px;
    outline-color: initial;
    color: grey;
    text-align: left;
    margin-top: 5%;
    justify-content: space-between;
    flex-wrap: wrap;
    line-height: 25px;
    
}
.intro-list{
    font-weight: 600;
    margin-top: 2em;
}

                        /*TEXT DIVS DER LEISTUNGEN*/

.txt{
    width: 30em;
}

                            /*GRUNDPFLEGE*/

.grundpflege{
    margin-top: 5%;
    margin-left: 10%;
    display: flex;
    color: rgb(70,130,180);
   
}
img{
    margin-top: 1em;
    padding: 3px;
}

.grundpflege-text{
    display:flex;
    font-size: 18px;
    color:grey;
    line-height: 25px;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;

}
.balken{
    display: flex;
    margin-top: 5em;
}
.balken-text p{
    margin-left: 18em;
    font-size: 17px;
    color: #fff;
}
.balken-text{
    background: rgb(70,130,180);
    width: 45em;
    color: #fff;
    
}
.balken-text h3{
    margin-left: 12em;
    margin-top: 3em;
    font-size: 25px;
}
.balken-list{
    font-weight: 600;
    width: 23em;
    margin-left: 15em;
    color: grey;
}

.balken-list h1{
    color: rgb(70,130,180);
}

span{
    color: rgb(70,130,180);
}


                            /*Intensivpflege && service Leistungen*/

.intensiv-service-information{
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: space-between;
  
}


.intensiv-pflege{
    display:flex;
    color: rgb(70,130,180);
    margin-top: 3em;

    
}
.intensivpflege-text{
    display:flex;
    flex-wrap: wrap;
    font-weight: 600;
    font-size: 18px;
    outline-color: initial;
    color: grey;
    line-height: 25px;

}
.intensiv-list{
    margin-top: 2em;
}


                            /*Service Leistungen*/

.service-leistungen{
    display:flex;
    color: rgb(70,130,180);
    margin-top: 3em;

}
.service-text{
    display:flex;
    flex-wrap: wrap;
    font-weight: 600;
    font-size: 18px;
    outline-color: initial;
    color: grey;
    line-height: 25px;
    width: 30em;
    
}

</style>
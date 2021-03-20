<template>
    <div id="startseite">

        <div class="titel">
        <h1>Sirius Pflegedienst - Ihr Pflegedienst in Frankfurt und Umgebung</h1>
        </div>

        <div class="intro-text">
            <p><strong>
                Sie suchen einen hochqualifizierten Pflegedienst in Ihrer Umgebung?
                Dann sind sie bei uns genau richtig! Wir betreuen jede Art von Patienten,
                ob einfacher Pflegefall oder Intensivfall,
                die Sirius Pflegedienst GmbH steht Ihnen zur verfügung.
                Außerdem stehen wir Ihnen auch außerhalb der Öffnungszeiten bei Notfällen
                24h zur verfügung. In den folgenden Bereichen sind wir Experten:
                </strong>
            </p>
                <li><span>Grundpflege</span></li>
                <li><span>Intensivpflege</span></li>
                <li><span>Serviceleistungen</span></li>
            <br>
            <p>
                <strong>
                    Bei uns steht das Wolhbefinden der Patienten an erster Stelle. 
                    Wir wollen das Vertrauen unserer Patienten gewinnen, um all die 
                    Pflegenotwendingen Leistungen zusammen durchzuführen und der Patient sich 
                    während der gesamten Verpflegung wohl und sicher fühlt.
                </strong>
                <br>

            </p>
        </div>
        <br>
        <br>
        <div class="grundpflege">
            <div><img src="../assets/grundpflegeIcon.png" alt=""></div>
            <div><h2>Folgende pflegerische Leistungen zählen zur Grundpflege:</h2></div>
        </div>
        <br>
        <div class="grundpflege-text">
            <p>
                <strong>
                    <li><span>Körperpflege</span></li>
                    <li><span>Hilfe beim An - und Ausziehen</span></li>
                    <li><span>Hilfe beim Essen und Trinken</span></li>
                    <li><span>Bewegungshilfe</span></li>
                    <li><span>Hauswirtschaftliche Aufgaben</span></li>
                </strong>
            </p>
            <br>
            <p>
                <strong>
                    Natürlich fällt auch die <span>Vorsorge</span> in die Grundpflege.
                    Durch die <span>Vorsorge</span> werden Einschränkungen wie Erkältung,
                    Versteifung und weitere Beschwerden vermieden. Um eine sorgfältige
                    Vorsorge durchzuführen, kümmern wir uns um jegliche negative Einflüsse
                    unserer Patienten und beseitigen diese.
                </strong>
            </p>
        </div>
        <br>
        <div class="intensiv-pflege">
            <div><img src="../assets/intensivIcon.png" alt=""></div>
            <div><h2>Intensivpflege:</h2></div>
        </div>
        <br>
        <div class="intensivpflege-text">
            <p>
                <strong>
                    Die Intensivpflege ist ein wesentlicher Bestandteil unserer Leistungen.
                    Ambulante Intensivpflege bezeichnet die Behandlung pflegebedürftiger Menschen
                    mit lebensbedrohlicher Erkrankungen außerhalb der Klinik.
                    Sie tritt in kraft, wenn eine stationäre klinische Behandlung und 
                    medizinischer Versorgung nicht mehr erforderlich ist. Folgende Leistungen
                    bieten wir für die Intensivpflege an:
                </strong>
            </p>
            <br>
            <p>
                <strong>
                    <li><span>Überwachung & Vitalisierung</span></li>
                    <li><span>Lagerungsbehandlungen & Mobilisation</span></li>
                </strong>
            </p>
        </div>
        <br>
        <div class="service-leistungen">
            <div><img src="../assets/serviceIcon.png" alt=""></div>
            <div><h2>Folgende Serviceleistungen stehen Ihnen zur Auswahl:</h2></div>
        </div>
        <div class="service-text">
            <p>
                <strong>
                    Zu unseren Servieleistungen gehört unter anderem die <span> häusliche
                    Krankenpflege nach §37 SGB V  </span> als Leistung der gesetzlichen Krankenversicherung,
                    welche die <span>Medikamentengabe</span>, den <span>Verbandswechsel</span>  und <span>Injektionen</span> beinhaltet.
                </strong>
            </p>
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
/*Slide animation*/
@keyframes slide{
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

#startseite{
    /*calling slide animation for this section*/
    animation: 1s ease-out 0s 1 slide;
    margin-left: 10%;
    margin-top: 13%;
    margin-right: 10%;
    margin-bottom: 10%;
}
/*Überschrift*/
.titel{
    color: rgb(70,130,180);
}
/*Paragraph text*/
.intro-text{
    font-family: verdana;
    font-weight: 600;
    font-size: 16px;
    outline-color: initial;
    color: grey;
    text-align: left;
    margin-top: 5%;
    
}
.grundpflege{
    display: flex;
    color: rgb(70,130,180);
    
}
img{
    margin-top: 1em;
    padding: 3px;
}

.grundpflege-text{
    font-family: verdana;
    font-weight: 500;
    font-size: 16px;
    color:grey;

}

span{
    color: rgb(70,130,180);
}
.intensiv-pflege{
    display:flex;
    color: rgb(70,130,180);
}
.intensivpflege-text{
    font-family: verdana;
    font-weight: 500;
    font-size: 16px;
    color:grey;
}

.service-leistungen{
    display:flex;
    color: rgb(70,130,180);
}
.service-text{
    font-family: verdana;
    font-weight: 500;
    font-size: 16px;
    color:grey;
}


</style>
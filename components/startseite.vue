<template>
    <div id="startseite">

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
                <ul><li><span>Intensivpflege</span></li></ul>
                <ul><li><span>Serviceleistungen</span></li></ul>
                </div>
                </div>
            <br>
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
        </div>
        <br>
        <br>
        <div class="grundpflege" v-scrollanimation>
            <div><img src="../assets/grundpflegeIcon.png" alt=""></div>
            <div><h2>Grundpflege:</h2></div>
        </div>
        <br>
        <div class="grundpflege-text">
            <div class="txt">
            <p v-scrollanimation>
                <strong>
                    Menschen, die körperlich und geistig nicht mehr so fit sind,
                    können meistens alltägliche Tätigkeiten, wie z.B selbständig essen,
                    das Klo aufsuchen und sich selbständig anziehen nicht mehr bewältigen.
                    Folgende Leistungen zählen zu der Grundpflege:
                    <br><br>
                   <ul> <li><span>Körperpflege</span></li></ul>
                   <ul> <li><span>Hilfe beim An - und Ausziehen</span></li></ul>
                   <ul> <li><span>Hilfe beim Essen und Trinken</span></li> </ul>
                   <ul> <li><span>Bewegungshilfe</span></li></ul>
                   <ul><li><span>Hauswirtschaftliche Aufgaben</span></li></ul>
                </strong>
            </p>
            </div>
            <br>
            <div class="txt">
            <p v-scrollanimation>
                <strong>
                    Natürlich fällt auch die <span>Vorsorge</span> in die Grundpflege.
                    Durch die <span>Vorsorge</span> werden Einschränkungen wie Erkältung,
                    Versteifung und weitere Beschwerden vermieden. Um eine sorgfältige
                    Vorsorge durchzuführen, kümmern wir uns um jegliche negative Einflüsse
                    unserer Patienten und beseitigen diese.
                </strong>
            </p>
            </div>
        </div>
        <br>
        <div class="intensiv-pflege" v-scrollanimation>
            <div><img src="../assets/intensivIcon.png" alt=""></div>
            <div><h2>Intensivpflege:</h2></div>
        </div>
        <br>
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
           
            <br>
            <div class="txt">
            <p v-scrollanimation>
                <strong>
                    Folgende Leistungen
                    bieten wir für die Intensivpflege an: <br>
                    <div class="intensiv-list">
                    <ul><li><span>Überwachung & Vitalisierung</span></li></ul>
                    <ul><li><span>Lagerungsbehandlungen & Mobilisation</span></li></ul>
                    </div>
                </strong>
            </p>
            </div>
        </div>
        <br>
        <div class="service-leistungen" v-scrollanimation>
            <div><img src="../assets/serviceIcon.png" alt=""></div>
            <div><h2>Folgende Serviceleistungen stehen Ihnen zur Auswahl:</h2></div>
        </div>
        <div class="service-text">
            <p v-scrollanimation>
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
    display:flex;
    font-family: verdana;
    font-weight: 600;
    font-size: 14px;
    outline-color: initial;
    color: grey;
    text-align: left;
    margin-top: 5%;
    justify-content: space-between;
    flex-wrap: wrap;
    line-height: 25px;
    
}
.intro-list{
    margin-top: 2em;
}
.txt{
    width: 40em;
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
    display:flex;
    flex-wrap: wrap;
    font-family: verdana;
    font-weight: 500;
    font-size: 14px;
    color:grey;
    line-height: 25px;
    justify-content: space-between;

}

span{
    color: rgb(70,130,180);
}
.intensiv-pflege{
    display:flex;
    color: rgb(70,130,180);
    margin-top: 2em;
    
}
.intensivpflege-text{
    display:flex;
    flex-wrap: wrap;
    font-family: verdana;
    font-weight: 600;
    font-size: 14px;
    outline-color: initial;
    color: grey;
    justify-content: space-between;
    line-height: 25px;
    padding: 10px;
}
.intensiv-list{
    margin-top: 2em;
}

.service-leistungen{
    display:flex;
    color: rgb(70,130,180);
}
.service-text{
    font-family: verdana;
    font-weight: 500;
    font-size: 14px;
    color:grey;
}


</style>
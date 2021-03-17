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
            <h2>Folgende Pflegerische Leistungen zählen zur Grundpflege:</h2>
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
    height: 50em;
    margin-left: 10%;
    margin-top: 13%;
    margin-right: 10%;
}
/*Überschrift*/
.titel{
    
    color: rgb(70,130,180);
    
}
/*Paragraph text*/
.intro-text{
    font-family: verdana;
    font-weight: 600;
    font-size: 18px;
    outline-color: initial;
    color: grey;
    text-align: left;
    margin-top: 5%;
    
}
.grundpflege-text{
    font-family: verdana;
    font-weight: 600;
    font-size: 18px;
    outline-color: 18px;

}
.grundpflege{
    
    color: rgb(70,130,180);
}
span{
    color: rgb(70,130,180);
}


</style>
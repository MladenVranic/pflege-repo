<template>
    <div id="service">

        <div class="titel">
            <h1>Was bedeutet Pflegedienst?</h1>
        </div>

        <div class="text">
            <p>
                <strong>
                    Ein ambulanter Pflegedienst übernimmt die Aufgaben der täglichen Pflege.
                    Die Pflegekräfte helfen bei der täglichen Routine, zu der gehören
                    unter anderem die <span>Körperhygiene</span>, die <span>Ernährung</span> des betroffenen
                    und natürlich das Anleiten zur <span>Bewegung</span> und <span>hauswirtschaftliche Arbeiten</span>.
                </strong>
            </p>
            <p>
                <strong>
                    Ein Pflegedienst ist mehr als nur eine Dienstleistung, sie ist in 
                    erster Linie eine Entlastung für die Familien Angehörigen der Patienten,
                    da die Pflegedienstmitarbeiter zum Patienten nachhause kommen und bei der
                    täglichen Pflege helfen. Der Patient kann also weiterhing in seiner
                    vertrauten Umgebung leben und sich wohl fühlen während der 
                    Verpflegung.
                </strong>
            </p>
        </div>


    </div>
</template>

<script>
export default {
    name: 'pflegedienst',
    data() {
        return{
            user: {

            }
        }
        
    }
}
</script>

<style scoped>
/*slide animation*/
@keyframes slide{
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

#service{
    /*calling slide animation for this section*/
    animation: 1s ease-out 0s 1 slide;
    height: 50em;
    margin-left:  10%;
    margin-right: 10%;
    margin-top: 13%;
}

.titel{
    margin-top: 13%;
    color: rgb(70,130,180);
}
/*Seiteninhalt*/
.text{
    font-family: verdana;
    font-weight: 600;
    font-size: 18px;
    outline-color: initial;
    color: grey;
    text-align: left;
    margin-top: 5%;

}
span{
    color: rgb(70,130,180);
}
</style>
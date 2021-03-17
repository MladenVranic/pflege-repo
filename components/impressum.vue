<template>
    <div id="impressum">
        <div class="titel">
            <h1>Impressum</h1>
        </div>
        <!--Impressum Inhalt -->
        <div class="kontakt-info">
            <h2>Angaben gemäß §5 TMG</h2>

            <p>
               <span>Sirius</span> Pflegedienst GmbH
                <br>
                Schleussnerstr. 90
                <br>
                63263 Neu Isenburg
            </p>
            <br>
            <p>
                Handelsregister: ####
                <br>
                Registergericht: ####
            </p>
            <br>
            <p>
                <strong>Vertereten durch die Geschäftsführer:</strong>
                <br>
                Zorica Stankovic
            </p>
            <br>
            <h2>Kontakt</h2>
            <p>
                Telefon: 06102 815 3335
                <br>
                Fax.: 06102 815 3336
                <br>
                Mobil: #####
                <br>
                E-Mail: ####
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'impressum',
    data(){
        return{
            user:{

            }
        }
    }
}
</script>

<style scoped>
/*animation*/
@keyframes slide{
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

#impressum{
    /*calling slide animation for this section*/
    animation: 1s ease-out 0s 1 slide;
    height: 50em;
    margin-left: 10%;
}
/*überschrift*/
.titel{
    margin-top: 13%;
    color: rgb(70,130,180);
}
.kontakt-info{
    color: grey;
}
p{
    font-family: verdana;
}

span{
    color: rgb(70,130,180);
}


</style>

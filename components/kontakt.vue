<template>
    <div id="kontakt">

        <div class="titel">
            <h1>Sie haben noch Fragen? Kontaktieren Sie uns jeder Zeit</h1> 
        </div>

        <div class="info-text">
            <p>
                <strong>
                    Falls Sie Fragen haben, können Sie uns jeder Zeit über die unten genannten
                    Kontaktinofrmationen kontaktieren. Wir stehen Ihnen rund um die Uhr zur verfügung.
                </strong>
            </p>
        </div>
        <div class="kontakt-form">
            <div><h3>Kontaktinofrmationen:</h3></div>

            <div class="kontakt-info">
                <strong>Sirius Pflegedienst GmbH <br>
                Geschäftsführer: <span> Zorica Stankovic </span><br>
                Schleussnerstr. 90 <br>
                63263 Neu Isenburg</strong>
                <br>
                <br>
                <strong>
                    Telefon: <span>06102-815-3335</span><br> 
                    Fax: <span>06102-815-3336</span><br>
                    E-Mail: <span>########</span><br>
                </strong>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'kontakt',
    data(){
        return{
            user: {

            }
        }
    }
}
</script>

<style scoped>
@keyframes slide{
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
#kontakt{
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
.info-text{
    font-family: verdana;
    font-size: 16px;
    color: grey;
}
.kontakt-form{
    margin-left: 25%;
    margin-top: 12%;
    height: 30em;
    width: 30em;
    border: 1px solid grey;
    box-shadow: 10px 5px 5px grey;
}
.kontakt-form h3{
    text-align: center;
    color: rgb(70,130,180);
}
.kontakt-info{
    font-family: verdana;
    font-weight: 15px;
    margin-left: 3%;
    margin-top: 10%;
    color: grey;
}
span{
    color: rgb(70,130,180);
}

</style>

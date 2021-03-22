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
        <div class="form">
        <div class="kontakt-form">
            <div><h3>Geschäftsführung:</h3></div>

            <div class="kontakt-info">
                <strong>Sirius Pflegedienst GmbH <br>
                Geschäftsführer: <span> Dalibor Stankovic </span><br>
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

        <div class="kontakt-form-pdl">
            <div><h3>Pflegedienst Leitung:</h3></div>

            <div class="kontakt-info-pdl">
                <strong>Sladjana Milakovic <br>
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
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10%;
}
.kontakt-form{

    margin-top: 12%;
    height: 20em;
    width: 25em;
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

.kontakt-form-pdl{

    margin-top: 12%;
    height: 20em;
    width: 25em;
    border: 1px solid grey;
    box-shadow: 10px 5px 5px grey;
}
.kontakt-form-pdl h3{
    text-align: center;
    color: rgb(70,130,180);
}
.kontakt-info-pdl{
    font-family: verdana;
    font-weight: 15px;
    margin-left: 3%;
    margin-top: 10%;
    color: grey;
}

</style>

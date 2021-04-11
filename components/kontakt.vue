<template>
    <div id="kontakt">

        <div class="titel" v-scrollanimation>
            <h1>Kontaktieren Sie uns jeder Zeit</h1> 
        </div>

        <div class="info-text" v-scrollanimation>
            <p>
                <strong>
                    Falls Sie Fragen haben, können Sie uns jeder Zeit über die unten genannten
                    Kontaktinofrmationen kontaktieren. Wir stehen Ihnen rund um die Uhr zur verfügung.
                </strong>
            </p>
        </div>
        <div class="form" v-scrollanimation>
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
                    E-Mail: <span>sirius.pd@outlook.de</span><br>
                </strong>
            </div>
        </div>

<div class="kontakt-form">
            <div><h3>Stellvertretende Geschäftsführung:</h3></div>

            <div class="kontakt-info">
                <strong>
                <span> Zorica Stankovic </span><br>
                Schleussnerstr. 90 <br>
                63263 Neu Isenburg</strong>
                <br>
                <br>
                <strong>
                    Telefon: <span>06102-815-3335</span><br> 
                    Fax: <span>06102-815-3336</span><br>
                    E-Mail: <span>sirius.pd@outlook.de</span><br>
                </strong>
            </div>
        </div>


        <div class="kontakt-form-pdl">
            <div><h3>Pflegedienstleitung:</h3></div>

            <div class="kontakt-info-pdl">
                <strong> <span>Sladjana Milakovic </span> <br>
                Schleussnerstr. 90 <br>
                63263 Neu Isenburg</strong>
                <br>
                <br>
                <strong>
                    Telefon: <span>06102-815-3335</span><br> 
                    Fax: <span>06102-815-3336</span><br>
                    E-Mail: <span>sirius.pd@outlook.de</span><br>
                </strong>
            </div>
        </div>
    <div class="map">
        <div class="standort">
            <h2>Unser Standort: </h2>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.0621081204204!2d8.6782245158694!3d50.047667824185666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0cebda57735f%3A0x955d09e52f248f8e!2sSchleussnerstra%C3%9Fe%2090%2C%2063263%20Neu-Isenburg!5e0!3m2!1sde!2sde!4v1618044100055!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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

#kontakt{
    /*calling slide animation for this section*/
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
.map{
    
    width: 100%;
}
iframe{
    margin-top: 4em;
    width: 100%;
}
.standort{
    margin-top: 6em;
    color: rgb(70,130,180);
}


</style>

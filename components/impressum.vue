<!--Impressum-->
<template>
<div class="impressum" v-if="activeImpr">
            <div class="impressum-text">
                <b-button class="impr-btn" variant="outline-info" v-bind:class="{dsText: activeDS}"
                @click="activeImpr= !activeImpr">Impressum</b-button>
                 <br><br> <br>
                 <div class="imprText" >
                <p>
                Sirius Pflegedienst GmbH <br>
                Schleussnerstr. 90 <br>
                63263 Neu Isenburg <br>
                sirius.pd@outlook.de <br>
                Tel: 06102 815 3335 <br>
                Fax: 06102 815 3336
            </p><br>
            <h3>
                Firmendaten:
            </h3>
            <p>
                Geschäftsführer: Dalibor Stankovic <br>
                Sirius Pflegedienst GmbH <br>
                HRB 52817 <br>
                Amtsgericht Offenbach am Main
            </p>
            </div>
        </div>
        <div class="datenschutz">
            <b-button class="ds-btn" variant="outline-info" v-bind:class="{dsText: activeDS}" @click="activeDS = !activeDS">Datenschutz</b-button>
                <br><br> <br>
            <div class="dsText" v-if="activeDS">
                <h3>
                    Dies ist die <br> Datenschutzerklärung der Firma:
                </h3> <br>
                <p>
                    Sirius Pflegedienst GmbH <br>
                    Schleussnerstr. 90 <br>
                    63263 Neu Isenburg <br>
                    sirius.pd@outlook.de <br>
                    Tel: 06102 815 3335 <br>
                    Fax: 06102 815 3336
                </p>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'Impressum',
  components: {
  },
    data:() => {
        return {
            activeImpr: true,
            activeDS: false,

    }
  }
}
</script>

<style lang="scss" scoped>
$font-color: #3f888f;
$mobile: 576px;


    .impressum{
        background-image: linear-gradient(hsla(240,7%,89%,.6),#fff);
        display:flex;
        justify-content: space-around;
    }
    .impressum-text{
        text-align: justify;
        padding-top:10%;
        margin-bottom: 5%;
        margin-left:5%;
    }
    .datenschutz{
        text-align: justify;
        width:30%;
        padding-top:10%;
        margin-bottom: 5%;
    }
    a{
        color:$font-color;
    }

    /** BTNS */
    .impr-btn, .ds-btn{
        width:450px;
        height: 50px;
        font-size:25px;
    }

@media (max-width: #{$mobile}){
    .impressum{
        display:flex;
        flex-direction: column;
        width:100%;
    }
       .impr-btn, .ds-btn{
        width:300px;
        height: 50px;
        font-size:25px;
    }
    .datenschutz{
        text-align: justify;
        padding-top:10%;
        margin-bottom: 5%;

        width:100%;
        padding-left:25px;
        padding-right:25px;
    }

}

</style>
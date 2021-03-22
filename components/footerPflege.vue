<template>

    <div id="footer-pflege">
<!--Footer start!-->

        <div class="footer">
<!--Footer-contact-information section!-->
                <div class="footer-section-contact">

                    <h4 class="overhead">Kontakt:</h4>
                    
                    <div class="contact-text">
                        <p>
                            <strong>Sirius Pflegedienst GmbH</strong>
                            <br>
                            <strong>Geschäftsführer: Dalibor Stankovic</strong>
                            <br>
                            <strong>Schleussnerstr. 90</strong>
                            <br>                     
                            <strong>63263 Neu Isenburg</strong>
                        </p>
                    </div>
                    <br>
                    <div class="phone-contact">
                        <p>
                            <strong>Tel: 06102 815 3335</strong>
                            <br>
                            <strong>Fax: 06102 815 3336</strong>
                            <br>
                            <strong>E-Mail: ######</strong>
                        </p>
                    </div>
                 </div>
            <div class="footer-section-logos">
                <div class="bpa">
                    <div class="logo-bpa">
                        <img src="../assets/bpa.png" alt="">
                    </div>
                    <div class="text-bpa">
                        <p>
                            <strong>
                                Mitglied im bpa – Bundesverband <br> 
                                privater Anbieter sozialer Dienste e.V.
                            </strong>
                        </p>
                    </div>
                </div>
        </div>
        </div>
<!--Footer-bottom-copyright!-->
        <div class="footer-bottom">
            &copy; Sirius Pflegedienst GmbH 2021
        </div>
    </div>
</template>

<script>
//import navigation from './navigation.vue'
/*
import impressum from './impressum.vue'
*/



//define export object for footer
export default {
    //call component

    name: 'footer-pflege',
    data(){
        return{
            user:{
              
              }
            }
        }
    }

</script>

<style scoped>

#footer-pflege{
    width: 100%;
    left: 0;
    bottom: 0;

}
.footer {
    background: grey;
    color: #d3d3d3;
    height: 400px;
    position: relative;
    bottom: 0;
    display:flex;
    flex-wrap:wrap;
    
    
}
.footer-section-contact{
    color: white;
    padding: 60px;
    text-align: left;
    line-height: 25px;
}
.phone-contact{
    margin-top: 20px;
}
.footer-bottom{
    background-color: #777;
    color: white;
    height: 50px;
    text-align: center;
    bottom: 0;
    left: 0;
    padding-top: 20px;
    width:100%;
}
.footer-section-logos{
    margin-left: 15%;
}
.bpa{
    display: flex;
    margin-top: 15%;
    
}
.text-bpa{
    color:white;
    margin-left: 3em;
}


</style>
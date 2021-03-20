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
                    <div class="links">
                        <a href="#">Kontakt</a> |
                        <a href="#">Impressum</a>
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
/*
import kontakt from './kontakt.vue'
import impressum from './impressum.vue'
import startseite from './startseite.vue'
*/

//define export object for footer
export default {
    //call components
    
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
    background: #303036;
    color: #d3d3d3;
    height: 400px;
    position: relative;
    bottom: 0;
    
    
}
.footer-section-contact{
    padding: 60px;
    text-align: left;
}
.phone-contact{
    margin-top: 20px;
}
.footer-bottom{
    background: #343a40;
    color: #686868;
    height: 50px;
    text-align: center;
    bottom: 0;
    left: 0;
    padding-top: 20px;
    width:100%;
}
 a{
    text-decoration: none;
    cursor: pointer;
    color: grey;
}

</style>
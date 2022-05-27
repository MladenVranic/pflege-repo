<template>
<div class="about">
    <img src="../assets/cargiver_3.png" alt="" width="100%">
        <div class="about-bg">
                <div class="about-text" >
                    <br>
                    <h1 v-slideInAnimation>Sirius Pflegedienst</h1><br>
                    <h1 v-slideInAnimation>Ihr Pflegedienst in Frankfurt und Umgebung</h1>
                    <br>
                    <p v-intersection>
                        Sie suchen einen hochqualifizierten Pflegedienst in Ihrer Umgebung?
                        Dann sind sie bei uns genau richtig! Wir betreuen jede Art von Patienten,
                        ob einfacher Pflegefall oder Intensivfall,
                        die Sirius Pflegedienst GmbH steht Ihnen zur verfügung.
                        Außerdem stehen wir Ihnen auch außerhalb der Öffnungszeiten bei Notfällen
                        24h zur verfügung. Bei uns steht das Wolhbefinden der Patienten an erster Stelle.
                        Wir wollen das Vertrauen unserer Patienten gewinnen, um all die
                        Pflegenotwendingen Leistungen zusammen durchzuführen und der Patient sich
                        während der gesamten Verpflegung wohl und sicher fühlt.
                    </p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
    data:() => {
        return {

    }
  }
}
</script>

<style lang="scss" scoped>
$img-bg-color: rgba(255, 255, 255, 0.85);
$small-desktop: 769px;
$large-desktop: 1600px;
$mobile: 576px;

.about{
     position:relative;
}
.about-text{
    margin:0 auto;
    margin-top: 200px;
    width:50%;
    text-align: justify;
    line-height: 1.55;
}
.about-text>h2{
    margin-top:50px;
}
.about-bg{
    position: absolute;
    bottom:0px;
    background-color: $img-bg-color;
    height:100%;
}
img{
    height:45em;
}

@media only screen and (min-width: #{$small-desktop}) and (max-width: #{$large-desktop}) {
    h1{
        font-size:34px;
    }
    .about-text>h2{
        margin-top:30px;
    }
}

@media only screen and (max-width: #{$mobile}) {
    h1{
        font-size: 24px;
        font-weight:550;

    }
    .about-text>h2{
        margin-top:5px;
    }
    .about-text{
        margin:0 auto;
        margin-top: 100px;
        width:100%;
        text-align: justify;
        line-height: 1.4;
        padding-left: 25px;
        padding-right: 25px;
        font-size: 17px;
    }
    .about-bg{
        position: absolute;
        bottom:0px;
        background-color: $img-bg-color;
        height:100%;
    }
    img{
        height:700px;

    }
}
</style>
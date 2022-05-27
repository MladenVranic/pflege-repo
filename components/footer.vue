<!--FOOTER-->
<template>
<div class="kontakt-footer">
    <div class="kontakt">
        <h2>Kontakt</h2><br>
        <p>
            Sirius Pflegedienst GmbH <br>
            Geschäftsführer: Dalibor Stankovic <br>
            Schleussnerstr. 90 <br>
            63263 Neu Isenburg
        </p>
        <p>
            sirius.pd@outlook.de <br>
            Tel: 06102 815 3335<br>
            Fax: 06102 815 3336
        </p>
    </div>
    <div class="oeffnungszeiten">
        <h2>Öffnungszeiten: </h2><br>
        <p>
          Montag: 08-16h <br>
          Dienstag: 08-16h <br>
          Mittwoch: 08-16h <br>
          Donnerstag: 08-16h <br>
          Freitag: 08-16h <br>
        </p>
    </div>
    <div class="copyright">
        <a href='https://de.freepik.com/fotos/geschaeft'>Fotos erstellt von fanjianhua - de.freepik.com</a> <br>
        <p>&copy; Sirius Pflegedienst GmbH | Designed by Sirius Pflegedienst GmbH</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Kontakt',
  components: {
  },
    data:() => {
        return {


    }
  }
}
</script>

<style lang="scss" scoped>
$border-color:  rgb(70,130,180);
$mobile: 576px;

.kontakt-footer{
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
    border-top: 1px solid $border-color;
    background-color:$border-color;
    height:700px;
}
.kontakt{
    color: #fff;
    line-height: 1.55;
    text-align: left;
    margin-top: 50px;

}
.oeffnungszeiten{
    text-align: left;
    margin-top: 50px;
    color: #fff;

}
.kontakt>h2, .oeffnungszeiten>h2{
    color:#fff;
}



.copyright{
    margin-top:90px;
    width:100%;
    color:#fff;
}
.copyright a{
  color:#fff;
}
.copyright p{
  margin-top:40px;
}

@media (max-width: #{$mobile}){
  .kontakt-footer{
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
    border-top: 1px solid $border-color;
    background-color:$border-color;
    height:700px;
}
.kontakt{
    color: #fff;
    line-height: 1.55;
    text-align: left;
    margin-top: 50px;

}
.oeffnungszeiten{
    text-align: left;
    color: #fff;
    height:170px;

}
.kontakt>h2, .oeffnungszeiten>h2{
    color:#fff;
}

.copyright{
    border-top: 1px solid #fff;
    margin-top:30px;
    color:#fff;
    height:100px;
}
.copyright a{
  display:none;
}

}


</style>
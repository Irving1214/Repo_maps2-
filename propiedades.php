<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Revimex</title>

    <!-- Bootstrap Core CSS -->
    <link href="map/css/bootstrap.css" rel="stylesheet">
    <link href="map/css/full-slider.css" rel="stylesheet">
    <link href="map/css/animate.css" rel="stylesheet">
    <link href="map/css/desplegar.css" rel="stylesheet">
    <link href="map/css/nouislider.min.css" rel="stylesheet">
    <!-- jQuery -->
    <script src="map/js/jquery.js"></script>
    <style>
    .noUi-connect {
    background: #002967 !important;
    }




    .logos.redes_sociales{
        margin-right: 13%;
    }

        @media (max-width: 1500px) {


          div.scroll {
          width: 130% !important;
          margin-left: -28% !important;
        }

        }
    .col-md-4.col-md-offset-4.detelle{
      margin-top: 5%;
    }
    .glyphicon-chevron-left:before {
    content: "\e079";
    color: #48BEEF;
    /* margin-right: 17%; */
     }
     .glyphicon-chevron-right:before {
    content: "\e080";
    color: #48BEEF;
     }

    div.scroll {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 70%;
    width: 120%;
    margin-left: -18%;
    }
    .col-md-6.como_estas {
    width: 37%;
    /* margin-left: 10%; */
    margin-right: 10%;
    /* height: 700px; */
    }
      .col-md-6.hola_description{
     width: 44%;
     margin-left: 5%;
    }




     .col-md-6.hola_description{
       width: 41%;
   margin-left: 10%;


     }


    @media (min-width: 1500px) {
       #map{
         width: 100% !important;


       }


       .col-md-6.hola_description{
      width: 38%;
      margin-left: 8%;
     }


     }
     #map{
       width: 110% ;
       height: 68% !important;
       margin-top: 4% !important;
       margin-left: 6%;

     }


        .loading {
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;

            display: none;

            width: 100%;
            height: 100%;

            background: rgba(255, 255, 255, .8) url('images/carga_v1.gif') 50% 50% no-repeat;
        }

        #pac-input{


        background-position: right center;



       width:353px;
       height: 40px;

       margin-left: 15%;
       background-image:  url("images/loupe.png") ;

       background-repeat: no-repeat;
        }

        .cajaDos {

            width: 25%;
            height: auto;
            border: 3px solid green;
            padding: 25px;
            margin: 25px;
        }
        .imagenCajaDo{
            width: 100%;
            height: auto;
        }
        .divButton .estiloBton {
            background-color: #002967; /* blue */
            border: 1px;
            color: white;
            padding: 8px 39px;
            text-align: center;

            font-size: 13px;
        }
        .divButton .estiloBton:not(:last-child) {
            border-right: none; /* Prevent double borders */
        }
        .divButton .estiloBton:hover {
            background-color: #CFDB00;
        }
    </style>
</head>

<body>
<div id="top"></div>

<!-- Navigation -->
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

        </div>


        <div class="collapse navbar-collapse" id="navbar-collapse-1">
            <ul class="nav navbar-nav navbar-center">
                <li class="tipo"><a href="http://www.revimex.mx/">CONÓCENOS </a></li>
                <li class="tipo"><a href="http://www.revimex.mx/sitio/propiedades.php">PROPIEDADES </a></li>
                <li class="tipo"><a href="http://www.revimex.mx/inversionistas.php">INVERSIONISTAS </a></li>
            </ul>

            <a class="navbar-brand-sp logo" href="http://www.revimex.mx/"><img style="height: 80px !important; " src="images/WEB-JUN2017-LOGO-REVIMEX.jpg"
                                                          alt="" class="logo"></a>

            <ul class="nav navbar-nav navbar-center">
                <li class="tipo"><a href="http://www.revimex.mx/sitio/recomendadores.php">RECOMENDADORES </a></li>
                <li class="tipo"><a href="http://revimex.mx/casos.php">CASOS DE ÉXITO </a></li>
                <li class="tipo"><a href="http://revimex.mx/sitio/vacantes.php">VACANTES </a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div>
</nav>


<div id="controls" style="background-color: #F6F6F6;">
    <br>
    <div class="row" style="padding-bottom: 2%;">
        <div class="col-md-8 col-md-offset-2">
            <div class="col-md-6">
                <input id="pac-input" class="form-control controls" type="text" placeholder="Introduce una ciudad">
            </div>

            <div class="col-md-6"><div id="slider"></div></div>
                <!--
                <div class="form-group">
                    <label class="sr-only" for="precio_minimo">Amount (in dollars)</label>
                    <div class="input-group">
                        <div class="input-group-addon">$</div>
                        <input type="number"
                               onkeyup="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')"
                               class="form-control" id="precio_minimo" min="0" placeholder="Mìnimo">
                        <div class="input-group-addon">.00</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label class="sr-only" for="precio_maximo">Amount (in dollars)</label>
                    <div class="input-group">
                        <div class="input-group-addon">$</div>
                        <input type="number"
                               onkeyup="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')"
                               class="form-control" id="precio_maximo" min="0" placeholder="Máximo">
                        <div class="input-group-addon">.00</div>
                    </div>
                </div>
            </div>
            -->
        </div>
    </div>
</div>

<br>

    <div class="row" style=" margin-right: 0px;  margin-left: 0px;">
        <div id="msg"></div>
        <div class="col-md-5">
            <div id="icon_pic_return_container"
                 style="position: absolute; z-index: 4; padding-right: 0;: 15px; padding-top: 6%; margin-left: 90%; display: none">

               <a href="http://www.revimex.mx/sitio/mapas2.html" > <img src="images/ICON-PIC-MAP.png">  </a>
            </div>
            <div id="map">
            </div>
        </div>
  <div class="col-md-2">
  </div>
        <div class="col-md-5" id="house_cards">
            <div id="title-header"></div>
            <br>
            <div class="scroll" id="casas">
            </div>
        </div>
        <div id="description-casas"></div>
    </div>


<!-- MODAL  -->
<div class="modal fade" role="dialog" id="pdf-modal"></div>
<!-- Bootstrap Core JavaScript -->
<script src="map/js/bootstrap.min.js"></script>
<script src="map/js/printThis.js"></script>
<script src="map/js/nouislider.min.js"></script>
<script defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCw6cDizVt_aD3GPH7murcfwz-vh140lpg&libraries=places&callback=initMap"></script>
<script src="map/js/wNumb.js"></script>
<script src="map/js/propiedades.js"></script>
<div class="loading" id="wait"></div>


</body>
</html>

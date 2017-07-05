/**
 * Created by maquina81 on 03/07/17.
 */

// Expresion regular para obtener extension de archivo
var re = /(?:\.([^.]+))?$/;

/*
 + Construe el modal para una propiedad
 */
function createModal(propiedad, index) {
    $("#description-casas").html("");

    var modal_casa = '<div class="col-md-6 hola_description" id="house_description_' + index + '" style="display: block">' +

        '<div class="col-md-12">' +
        '<div id="myCarousel_' + index + '" class="carousel slide" data-ride="carousel">' +
        '<!-- Indicators -->' +
        '<ol class="carousel-indicators">';

    var main_photo = "images/700x420.jpg";
    if (!jQuery.isEmptyObject(propiedad.fotoPrincipal)) {
        main_photo = propiedad.fotoPrincipal;
    }

    if (propiedad.files.length > 0) {
        var ind = 0;
        propiedad.files.forEach(function (file) {
            if (re.exec(file.nombre)[1] != "mp4") {
                if (ind === 0) {
                    modal_casa = modal_casa + '<li data-target="#myCarousel_' + index + '" data-slide-to="0" class="active"></li>';
                } else {
                    modal_casa = modal_casa + '<li data-target="#myCarousel_' + index + '" data-slide-to="' + ind + '"></li>';
                }
                ind += 1;
            }

        });
    } else {
        modal_casa = modal_casa + '<li data-target="#myCarousel_' + index + '" data-slide-to="0" class="active"></li>';
    }


    modal_casa = modal_casa +
        '</ol>' +

        '<!-- CorazÃ³n de Like -->' +
        '<div style="position: absolute; z-index: 4; padding-right: : 10px; padding-top: 15px; margin-left: 90%">' +
        '<img height="13%" id="heart_' + index + '" src="images/ICON-PIC-HEART.png" "></i>' +
        '</div>' +

        '<!-- Regreso a Cards -->' +
        '<div style="position: absolute; z-index: 4; padding-left: 15px; padding-top: 15px;">' +
        '<img height="13%" id="card_cubes_' + index + '" src="images/ICON-PIC-RETURN.png" "></i>' +
        '</div>' +

        '<!-- Wrapper for slides -->' +
        '<div class="carousel-inner">' +

        '<div class="caption" id="modalFavoritos' + index + '" style="background-color:White;display:none;position:absolute;z-index:3;margin-left: 38%;margin-top:8%; height:200px;width:180px;border-style:solid;border-color:#49BEEF">' +
        '<center>' +
        '<br>' +
        '<button id = "GoToFavorites_' + index + '" class="bg-primary">Ir a favoritos</button>' +
        '<br>' +
        '<br>' +
        '<br>' +
        '<button id = "KeepWhatching_' + index + '" class="bg-primary">Seguir viendo</button>' +
        '</center>' +
        '</div>';

    if (propiedad.files.length > 0) {
        ind = 0;
        propiedad.files.forEach(function (file) {
            if (re.exec(file.nombre)[1] != "mp4") {
                if (ind === 0) {
                    modal_casa = modal_casa +
                        '<div class="item active">' +
                        '<center>' +
                        '<img class="imgt" src="' + file.linkPublico + '" alt="' + file.nombre + '">' +
                        '<center>' +
                        '<div class="carousel-caption">' +
                        '</div>' +
                        '</div>';
                } else {
                    modal_casa = modal_casa +
                        '<div class="item">' +
                        '<center>' +
                        '<img class="imgt" src="' + file.linkPublico + '" alt="' + file.nombre + '">' +
                        '</center>' +
                        '<div class="carousel-caption">' +
                        '</div>' +
                        '</div>';
                }
                ind += 1;


            }
        });
    } else {
        modal_casa = modal_casa +
            '<div class="item active">' +
            '<center>' +

            '<img class="imgt" src="images/700x420.jpg" alt="Imagen no disponible">' +
            '<center>' +
            '<div class="carousel-caption">' +
            '</div>' +
            '</div>';
    }


    modal_casa = modal_casa +
        '</div>' +
        '<!-- Left and right controls -->' +
        '<a class="left carousel-control" href="#myCarousel_' + index + '" data-slide="prev">' +
        '<span class="glyphicon glyphicon-chevron-left"></span>' +
        '<span class="sr-only">Anterior</span>' +
        '</a>' +

        '<a class="right carousel-control" href="#myCarousel_' + index + '" data-slide="next">' +
        '<span class="glyphicon glyphicon-chevron-right"></span>' +
        '<span class="sr-only">Siguiente</span>' +
        '</a>' +
        '</div>' +
        '<center>' +
        '<div class="revimexBlue"><br>' +

        '<i class="capitalize">' + nombreMunicipio(propiedad.Municipio__c) + propiedad.Estado__c + '<br>' +
        '' + propiedad.Calle__c +
        ', Col. ' + propiedad.Colonia__c + '<br>' +

        '</div>' +
        '</center>' +
        '</div>' +

        '<div class="row" align="center">' +
        '<div class="col-md-4 col-md-offset-4 detelle">' +
        '<button class="boton_detalles_auto"  class="btn btn-primary" data-toggle="modal" id="back_to_' + index + '" style="    margin-bottom: 4%;">Regresar</button>' +
        '</div>' +
        '</div>' +

        // INFORMACION CASAS
        '<div class="row revimexBlue">' +
        // Caracteristicas
        '<div class="col-md-6"><br>' +

        '<div class="row">' +
        '<p class="bg-primary" align="center">Características</p>' +
        '<ul><br>' +
        '<li><strong>ID: </strong>' + propiedad.oferta + '</li>' +
        '<li><strong>Precio:</strong> $' + propiedad.PrecioVenta__c + '</li>' +

        '<li><div><strong> Terreno:</strong> ' + propiedad.Terreno_m2__c + '&nbsp;m<sup>2</sup></div>' + '</li>' +
        '<li><strong>Construcción:</strong> ' + propiedad.Construccion_m2__c + '&nbsp;m<sup>2</sup>' + '</li>' +
        '<li><strong>Niveles:</strong> ' + propiedad.Niveles_Plantas__c + '</li>' +

        '<li><strong>Habitaciones: </strong>' + propiedad.N_de_Habitaciones__c + '</li>' +
        '<li><strong>Baños: </strong>' + propiedad.N_de_Ba_os__c + '</li>' +
        '<li><strong>Estacionamientos: </strong> ' + propiedad.Estacionamiento__c + '</li>' +

        '</ul>' +
        '</div>' +

        '<div class="row" align="center">' +
        '<div class="col-md-4">' +

        '</div>' +
        '<div class="col-md-4">' +

        '</div>' +
        '<div class="col-md-4">' +

        '</div>' +
        '</div>' +
        '<br><br>' +
        '</div>' +

        // Lugares Cercanos
        '<div class="col-md-6" align="center"><br>' +
        '<p class="bg-primary">Lugares cercanos</p>' +
        '<br>' +
        '<div class="row" align="center">' +
        '<div class="col-md-4">' +
        '<button id="restaurantes_' + index + '" class="btn btn-default"><img id="img_restaurantes_' + index + '" class="img_borde" class="IconTarjeta" src="images/IconoTarjetaDinamica/ICONS-PROPIEDADES-WEB_RESTAURANTES-OFF.png"></button><i class="numTarjeta"></i>' +
        '</div>' +

        '<div class="col-md-4">' +
        '<button id="escuelas_' + index + '" class="btn btn-default"><img id="img_escuelas_' + index + '" class="img_borde" class="IconTarjeta" src="images/IconoTarjetaDinamica/ICONS-PROPIEDADES-WEB_ESCUELAS-OFF.png"></button><i class="numTarjeta"></i>' +
        '</div>' +

        '<div class="col-md-4">' +
        '<button id="hospitales_' + index + '" class="btn btn-default"><img id="img_hospitales_' + index + '" class="img_borde" class="IconTarjeta" src="images/IconoTarjetaDinamica/ICONS-PROPIEDADES-WEB_HOSPITALES-OFF.png"></button><i class="numTarjeta"></i>' +
        '</div>' +
        '</div>' +
        '</br></br>' +
        '<div class="row" align="center">' +
        '<div class="col-md-4">' +
        '<button id="cormercio_' + index + '" class="btn btn-default"><img id="img_cormercio_' + index + '" class="img_borde" class="IconTarjeta" src="images/IconoTarjetaDinamica/ICONS-PROPIEDADES-WEB_COMERCIALES-OFF.png"></button><i class="numTarjeta"></i>' +
        '</div>' +

        '<div class="col-md-4">' +
        '<button id="super_' + index + '" class="btn btn-default"><img id="img_super_' + index + '" class="img_borde" class="IconTarjeta" src="images/IconoTarjetaDinamica/ICONS-PROPIEDADES-WEB_SUPER-OFF.png"></button><i class="numTarjeta"></i>' +
        '</div>' +

        '<div class="col-md-4">' +
        '<button id="parques_' + index + '" class="btn btn-default"><img id="img_parques_' + index + '" class="img_borde" class="IconTarjeta" src="images/IconoTarjetaDinamica/ICONS-PROPIEDADES-WEB_PARQUES-OFF.png"></button><i class="numTarjeta"></i>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="row" align="center">' +
        '<div class="col-md-4 col-md-offset-4 detelle" style="margin-top: -4%;">' +
        '<button class="boton_detalles_auto"  class="btn btn-primary" onclick="modal_variables(\'' +
        propiedad.Calle__c +
        '\', \'' + propiedad.Colonia__c +
        '\', \'' + propiedad.Municipio__c +
        '\', \'' + propiedad.Estado__c +
        '\', \'' + propiedad.Terreno_m2__c +
        '\', \'' + propiedad.Construccion_m2__c +
        '\', \'' + propiedad.N_de_Habitaciones__c +
        '\', \'' + propiedad.N_de_Ba_os__c +
        '\', \'' + propiedad.Patios__c +
        '\', \'' + propiedad.Estacionamiento__c +
        '\', \'' + propiedad.PrecioVenta__c +
        '\', \'' + main_photo +
        '\', \'' + propiedad.oferta +

        '\');" data-toggle="modal" data-target="#pdf-modal" >Detalles</button>' +
        '</div>' +
        '</div>' +

        '</br></br>' +

        //SECCION GERENTE
        '<div class="row">' +
        '<div class="col-md-12" style="margin-top: -3%;">' +
        '<p class="bg-primary" align="center">Ejecutivo de Ventas</p>' +
        '<div class="row revimexBlue" style="margin-top: -4%;">' +
        '<div class="col-md-7" style="padding-left: 0%;">' +
        '<p  style="font-size: 15px; margin-top:13%;">' +


        '<b><img id="heart" class="logos" src="images/CONTACT-PROPIEDADES-WEB-MAIL.png">&nbsp; &nbsp;<a href="mailto:info@revimex.mx" style="font-size:.78em; text-transform:lowercase;font-size: 16px;">info@revimex.mx</a></b><br><br>' +

        '<b><img id="heart" class="logos" src="images/CONTACT-PROPIEDADES-WEB-PHONE.png">&nbsp; &nbsp;01 800 200 0440</b><br><br>' +

        '<b><a target="_blank" href="https://www.facebook.com/REVIMEXOFICIAL/"><img id="facebook" class="logos redes_sociales" src="images/CONTACT-PROPIEDADES-WEB-FACEBOOK.png""></a>' +

        '<b><a target="_blank" href="https://www.instagram.com/revimex_oficial/"><img id="instagram" class="logos redes_sociales" src="images/CONTACT-PROPIEDADES-WEB-INSTAGRAM.png""></a>' +

        '<b><a target="_blank" href="https://twitter.com/oficialrevimex"><img id="twitter" class="logos redes_sociales" src="images/CONTACT-PROPIEDADES-WEB-TWITTER.png""></a>' +

        '<b><a target="_blank" href="https://www.youtube.com/channel/UCdn2VMwAvrJ_Te9nJqFYHYg/videos"><img id="youtube" class="logos redes_sociales" src="images/CONTACT-PROPIEDADES-WEB-YOUTUBE.png""></a>' +


        '<br>' +

        '</p>' +
        '</div>' +

        '<div class="col-md-5">' +
        '<form>' +
        '<div class="form-group">' +
        '<br><br>' +
        '<input type="text" class="input_borde" class="form-control" id="form_nombre_' + propiedad.Id + '" placeholder="  Nombre" aria-describedby="sizing-addon2">' +
        '<br></br>' +
        '<input type="text" class="input_borde" class="form-control" id="form_telefono_' + propiedad.Id + '" placeholder="  Telefono" aria-describedby="sizing-addon2">' +
        '<br></br>' +
        '<input type="text" class="input_borde" class="form-control" placeholder="  E-mail" id="form_email_' + propiedad.Id + '" aria-describedby="sizing-addon2">' +
        '<br></br></br>' +
        '<textarea class="input_borde" class="form-control" placeholder="  Comentarios" id="form_mensaje_' + propiedad.Id + '"></textarea><br>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '<br>' +
        '</div>' +
        '</div>' +

        '<div class="row" align="center">' +
        '<div class="col-md-4 col-md-offset-4">' +
        '<button type="button" onclick="sendMail(\'' + propiedad.Id + '\');" class ="boton_detalles_auto" class="btn btn-primary">Enviar</button>' +
        '</div>' +
        '</div>' +

        '</br>';

    $("#description-casas").append(modal_casa);
    modalListeners(index);
}

/*
 * Agrega una coma al nombre del estado
 */
function nombreMunicipio(estado) {
    if (estado == '') {
        return ''
    } else {
        return estado + ', '
    }
}

/*
 * Activa los listeners del modal
 */
function modalListeners(index) {
        $("#card_cubes_" + index + ", #back_to_" + index).click(function () {

            $('#casas').appendTo('#house_cards');
            $("#house_description_" + index).hide();
            $("#house_cards").show();
            $('#casas_cercanas').hide();
            setDefaulBehaviorMarkers();
            $("#titulocercanas").hide();
            reCentrar();
            changePlazaToColonia(false);
            var cent = false;
            $("#modalFavoritos" + index).hide();
        });

        $("#heart_" + index).click(function () {
            iLikeIt(index);
        });

        $("#escuelas_" + index).click(function () {
            changeButtonColor(this.id, index);
            getMarkersPlace(index, 1);
        });


        $("#restaurantes_" + index).click(function () {
            changeButtonColor(this.id, index);
            getMarkersPlace(index, 2);
        });

        $("#hospitales_" + index).click(function () {
            changeButtonColor(this.id, index);
            getMarkersPlace(index, 5);
        });

        $("#cormercio_" + index).click(function () {
            changeButtonColor(this.id, index);
            getMarkersPlace(index, 6);
        });

        $("#parques_" + index).click(function () {
            changeButtonColor(this.id, index);
            getMarkersPlace(index, 7);
        });

        $("#super_" + index).click(function () {
            changeButtonColor(this.id, index);
            getMarkersPlace(index, 8);
        });

        $("#GoToFavorites_" + index).click(function () {
            window.location.href = 'favoritos.html';
        });

        $("#KeepWhatching_" + index).click(function () {
            $("#modalFavoritos" + index).hide();
        });
}
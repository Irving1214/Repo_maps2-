
function boxListeners() {
    var others = Array.from(document.querySelectorAll('*[id^="img-thumbnail"]'));
    others.forEach(function (item) {
        $(item).mouseover(function () {
            var aiDi = $(item).attr('id');
            aiDi = aiDi.split("_");
            hover(aiDi[1]);
stopOthersMarkers();
            jumping = setInterval(function() {
                jumpMarker(aiDi[1]);
            }, 1000);
        });

        $(item).mouseout(function () {
            var aiDi = $(item).attr('id');
            aiDi = aiDi.split("_");
            out(aiDi[1]);

            if (jumping) {
                clearInterval(jumping);
                jumping = null;
            }
        });

        $(item).click(function () {
            var aiDi = $(item).attr('id');
            aiDi = aiDi.split("_");
            createModal(propiedades[aiDi[1]-1], aiDi[1]);
            $("#house_cards").hide();
            $("#caja_" + aiDi[1]).hide();

            console.log(jumping);
            // Para los demas markers
            stopOthersMarkers(aiDi[1]);

            //Brincar marker
            jumping = setInterval(function() {
                jumpMarker(aiDi[1]);
            }, 1000);
            console.log(jumping);

            propiedadesCercanas(aiDi[1]);
            $("#titulocercanas").show();
            getMarker(aiDi[1]);
        });
    });
}

function hover(id) {
    $("#img-thumbnail_" + id).css({
        "posistion": "relative",
        "z-index": "1032",
        "border-color": "#CFDB00",
    });

    $("#image_main_thumbnail_" + id).css({
        "filter": "brightness(0.30)",
    });
    $("#letrasImagen" + id).css({

        "opacity": "1",
        "color": "#fff",
        "posistion": "relative",
        "z-index": "1033"
    });

    click = false;

    if (map.getZoom() > 10) {
        console.log("si");
    }

    else {
        for (var i = 0; i < allMarkers.length; i++) {
            if ("marker" + id == allMarkers[i].id) {
                allMarkers[i].setIcon(markerRed);
                 
                infoWindows[i].open(map, allMarkers[i]);

                //  AQUI DEBE IR ESTE PUTO PERO NO FUNCIONA
                //allMarkers[i].setAnimation(google.maps.Animation.BOUNCE);
                //$("#markerLayer" + i).css("animation", "pulse .5s infinite alternate");

                if (map.getZoom() > 16) {
                    map.panTo(allMarkers[i].getPosition());
                    map.setZoom(17);
                }

                break;
            }
        }
    }

}

function out(id) {
    $("#img-thumbnail_" + id).css({
        "box-shadow": "",
        "border-width": "",
        "font-size": "",
        "display": "block",
        "background": "#FFF",
        "filter": "brightness(100%)",
        "border": "4px solid #46BEEF"
    });

    $("#image_main_thumbnail_" + id).css({
        "filter": ""
    });

    $("#letrasImagen" + id).css({
        "opacity": "0",
        "position": "absolute",
        "top": "30%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
    });


    if (click === false) {
        for (var i = 0; i < allMarkers.length; i++) {
            if ("marker" + id == allMarkers[i].id) {
                allMarkers[i].setIcon(markerBlue);
                allMarkers[i].setAnimation(null);
                infoWindows[i].close();
                $("#markerLayer" + i).css("animation", "none");
                break;
            }
        }
    }
}

function propiedadesCercanas(id) {

    var propiedad_id = null;
    for (var i = 0; i < allMarkers.length; i++) {
        if ("marker" + id == allMarkers[i].id) {
            propiedad_id = allMarkers[i].propiedad;
            break;
        }
    }

    $.ajax({
        url: url + "/propiedades/cercanas",
        type: "POST",
        data: {
            id: propiedad_id
        },
        dataType: "JSON",
        beforeSend: function () {
            $("#wait").show();
        },

        success: function (response) {
            if (response.propiedades.length > 0) {
                showOnlySomeCards(response.propiedades, "cerca");
            }
        },
        error: function (respuesta) {
            console.log(respuesta);
        },
        complete: function () {
            $("#wait").hide();
        }
    });

    $('#casas').appendTo('#casas_cercanas');
    $('#casas_cercanas').show();
}

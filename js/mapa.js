'use strict'; 
window.addEventListener("contextmenu", e => e.preventDefault()); 
var myobj, map, image, bounds, iconoIsla, iconoBarcos, iconoMokokos, iconoMazmorra,markers, windowLocation;
var todos = [];  
window.onload = checkUrl();  
function checkUrl(){  
    windowLocation = window.location.href;
    if(todos.length === 0)  { 
        ciudades.features.forEach(e => 
            {
                todos.push(e.properties.nombre); 
            }
        );   
        islas.features.forEach(e => 
            {
                todos.push(e.properties.nombre);  
            }
        ); 
        mazmorras.features.forEach(e => 
            {
                todos.push(e.properties.nombre);  
            }
        );
        subzonas.features.forEach(e => 
            {
                todos.push(e.properties.nombre);  
            }
        );
    }
    
    var input = document.getElementById("buscador"); 
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            myFunction();
        }
    });
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let urlParam1 = urlParams.get('a');
    if(urlParam1) urlParam1.toLowerCase();

    let urlParam2 = urlParams.get('b');
    if(urlParam2) urlParam2.toLowerCase();

    let urllatlng = urlParams.get('latlng');  
    let temp = null;
    let temp2;
    if(urlParam1 === 'ciudad'){
        ciudades.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == urlParam2){
                    temp = urlParam2;  
                    cambiarMapa(e.properties,e.geometry.coordinates,urllatlng);
                }
            }
        );
        subzonas.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == urlParam2){
                    temp = urlParam2;  
                    cambiarMapa(e.properties,e.geometry.coordinates,urllatlng);
                }
            }
        );   
        if (temp == null) {
            temp2 = 'arkesia' ;
        }
    }
    if(urlParam1 === 'mazmorra'){
        mazmorras.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == urlParam2){
                    temp = urlParam2;  
                    cambiarMapa(e.properties,e.geometry.coordinates,urllatlng);
                }
            }
        );  
        subzonas.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == urlParam2){
                    temp = urlParam2;  
                    cambiarMapa(e.properties,e.geometry.coordinates,urllatlng);
                }
            }
        );  
        if (temp == null) {
            temp2 = 'arkesia' ;
        }
    }
    if(urlParam1 === 'isla'){
        islas.features.forEach(e => 
            {
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == urlParam2){
                    temp = urlParam2;  
                    cambiarMapa(e.properties,e.geometry.coordinates,urllatlng);
                }
            }
        );  
        if (temp == null) {
            temp2 = 'arkesia' ;
        }
    }   
    if(temp2 === 'arkesia' || temp == null){
        arkesia();
    }   
    
    copiar();  
}
function ocultarSideBarMarcadores(){
    var hide = document.querySelectorAll("[id^=marcador-]")
    for(var i=0; i<hide.length; i++){ 
        hide[i].classList.remove("visible"); 
        hide[i].classList.add("hidden"); 
    }
    var arr = [];
    var marcadoresArr = [] 
    map.eachLayer(function(layer){
        if(layer.feature){ 
            arr.push(layer.feature.properties.tipo);
        }  
        
    }); 
    var marcadoresExisten = document.querySelectorAll('*[id^="marcador-"]');
    for (var i = 0; i < marcadoresExisten.length; i++){
        marcadoresArr.push(marcadoresExisten[i].id);
    } 

    var uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
    })   
    for (var i = 0; i < uniqueArray.length; i++){  
        const element = document.getElementById("marcador-"+uniqueArray[i]); 
        element.classList.toggle("hidden");        
    } 
    
}

function arkesia(f){   
    document.title = 'Mapa de Lost Ark en Español';
    document.getElementById('tituloh2').innerHTML = 'Arkesia';    
    document.getElementById("container-map").innerHTML += `
    <div id="mapid">
    </div>
    `;  
    myobj = document.getElementById("mapid");
    
    if(f != undefined){ 
        if(f.lat != undefined){
            map = L.map('mapid', {
                crs: L.CRS.Simple, 
                name: "Arkesia",  
            }).setView([f.lat,f.lng], 5);   
        }else{
            map = L.map('mapid', {
                crs: L.CRS.Simple, 
                name: "Arkesia",  
            }).setView([f[1],f[0]], 5); 
        }
    }else{ 
        map = L.map('mapid', {
            crs: L.CRS.Simple, 
            name: "Arkesia",
            zoomControl: false, 
        }).setView([-125,125], 3);  
    }
    bounds = [
        [-30,0],
        [-220,250]
      ];
    L.tileLayer('./imagenes/tiles/{z}/{x}/{y}.jpg', {
        maxZoom: 6,
        minZoom: 3, 
        maxNativeZoom: 5, 
        continuousWorld: false,
        tileSize: 256, 
        crs: L.CRS.Simple, 
        bounds, bounds, 
    }).addTo(map);

    L.control.zoom({
        position: 'bottomleft'
    }).addTo(map);

    var ciudadClase = {
        'className': 'class-ciudad'
    } 
    var islaClase = {
        'className': 'class-isla'
    } 
    var islapvpClase = {
        'className': 'class-islapvp'
    } 
    map.attributionControl.addAttribution('<span>Creado por </span> <a id="test" href="https://www.thelordoftheguides.com/lost-ark" target="_blank" style="color: #f57b0f">Yoho</a>');
    markers = new L.geoJSON([islas,otrosmarcadores,ciudades], {
        pointToLayer: function (feature, latlng) {
            var label = String(feature.properties.nombre);
            var img = String(feature.properties.img);
            var tipo = String(feature.properties.tipo);
            var titulo = String(feature.properties.title);  
            var horarioAv = String(feature.properties.horario).replace(/\s/g,'').toLowerCase();
            if(tipo == "ciudad"){ 
                var ciudadGroup = L.layerGroup().addTo(map); 
                if(label == "Berna"){ 
                    var ciudadmarker = L.marker(latlng, {icon: L.divIcon({ 
                        html:'<div class="class-ciudad"><img width="50px" src="imagenes/ciudades/'+img+'.png"/><div class="label-ciudad">Castillo de Berna</div></div>'
                    }
                    )});  
                }
                if(label == "Elgacia"){ 
                    var ciudadmarker = L.marker(latlng, {icon: L.divIcon({ 
                        html:'<div class="class-ciudad image-cropper"><img id="elgacia" width="150px" src="imagenes/ciudades/'+img+'.png"/></div>'
                    }
                    )}); 
                    ciudadmarker.addTo(ciudadGroup) 
                    $(ciudadmarker._icon).addClass('elgacia');   
                }else{ 
                    var ciudadmarker = L.marker(latlng, {icon: L.divIcon({ 
                        html:'<div class="class-ciudad"><img width="50px" src="imagenes/ciudades/'+img+'.png"/><div class="label-ciudad">'+label+'</div></div>'
                    }
                    )});   
                }
                    ciudadmarker.addTo(ciudadGroup) 
                    $(ciudadmarker._icon).addClass('ciudades');  
                   return ciudadmarker;
            }
            if(tipo == "barcomercante"){
                return L.marker(latlng, {icon: L.divIcon({html: '<div class="div-iconos iconos-'+tipo+'"><img class="marcador-arkesia" src="imagenes/iconos/iconos-arkesia/'+tipo+'.png"/></div>',iconAnchor: [10, 10]})});
            } 
            if(tipo == "navegacioncooperativa"){
                var navegacioncooperativaGroup = L.layerGroup().addTo(map); 
                var navegacioncooperativamarker = L.marker(latlng, {icon: L.divIcon({ 
                    html:'<div class="class-navegacioncooperativa"><img width="25px" src="imagenes/iconos/iconos-arkesia/'+tipo+'.png"/></div>'
                }
                )}); 
                navegacioncooperativamarker.addTo(navegacioncooperativaGroup) 
                $(navegacioncooperativamarker._icon).addClass('navegacioncooperativa');
                return navegacioncooperativamarker;
            }
            if(tipo == "portales"){
                var portalesGroup = L.layerGroup().addTo(map); 
                var portalesmarker = L.marker(latlng, {icon: L.divIcon({ 
                    html:`
                    <div class="class-portales"><img width="25px" src="imagenes/iconos/iconos-arkesia/`+tipo+`.png"/><div class="fix-label" style="margin-top: 2px">`+label+`</div></div>`
                }
                )}); 
                portalesmarker.addTo(portalesGroup) 
                $(portalesmarker._icon).addClass('portales');
                return portalesmarker;
            }
            if(tipo == "barcofantasma"){
                var barcofantasmaGroup = L.layerGroup().addTo(map); 
                var barcofantasmamarker = L.marker(latlng, {icon: L.divIcon({ 
                    html:'<div class="class-barcofantasma"><img width="25px" src="imagenes/iconos/iconos-arkesia/'+tipo+'.png"/><div class="fix-label" style="margin-top: 5px">'+label+'</div></div>'
                }
                )}); 
                barcofantasmamarker.addTo(barcofantasmaGroup) 
                $(barcofantasmamarker._icon).addClass('barcofantasma');
                return barcofantasmamarker;
            }
            if(tipo == "islapvp"){
                if(horarioAv == "siempreaccesible"){ 
                    var islasGroup = L.layerGroup().addTo(map);  
                    var islamarker = L.marker(latlng, {icon: L.divIcon({ 
                        html:'<div class="class-islapvp"><img width="18px" src="imagenes/iconos/iconos-arkesia/'+tipo+'.png"/><div class="fix-label">'+label+'</div></div>'
                    }
                    )});  
                        islamarker.addTo(islasGroup) 
                        $(islamarker._icon).addClass('islaspvp');  
                       return islamarker;
                }else{ 
                    var islasGroup = L.layerGroup().addTo(map);  
                    var islamarker = L.marker(latlng, {icon: L.divIcon({ 
                        html:'<div class="class-islapvp"><img width="18px" src="imagenes/iconos/iconos-arkesia/islapvpaventura.png"/><div class="fix-label">'+label+'</div></div>'
                    }
                    )});  
                        islamarker.addTo(islasGroup) 
                        $(islamarker._icon).addClass('islaspvp');  
                    return islamarker;
                }
            }
            if(tipo == "islapvpaventura"){
                var islasGroup = L.layerGroup().addTo(map); 
                var islamarker = L.marker(latlng, {icon: L.divIcon({ 
                    html:'<div class="class-islapvpaventura"><img width="18px" src="imagenes/iconos/iconos-arkesia/'+tipo+'.png"/><div class="fix-label">'+label+'</div></div>'
                }
                )});  
                    islamarker.addTo(islasGroup) 
                    $(islamarker._icon).addClass('islaspvpaventura');  
                   return islamarker;
            }
            if(tipo == "islaaventura"){ 
                var islasGroup = L.layerGroup().addTo(map);
                var islamarker = L.marker(latlng, {icon: L.divIcon({ 
                    html:'<div class="class-islaaventura"><img width="20px" src="imagenes/iconos/iconos-arkesia/'+tipo+'.png"/><div class="fix-label">'+label+'</div></div>'
                }
                )}); 
                    islamarker.addTo(islasGroup) 
                    $(islamarker._icon).addClass('islasaventura');  
                   return islamarker;
            }
            if(tipo == "isla"){ 
                if(horarioAv == "siempreaccesible"){  
                    var islasGroup = L.layerGroup().addTo(map);
                    var islamarker = L.marker(latlng, {icon: L.divIcon({ 
                        html:'<div class="class-isla"><img width="20px" src="imagenes/iconos/iconos-arkesia/'+tipo+'.png"/><div class="fix-label">'+label+'</div></div>'
                    }
                    )}); 
                        islamarker.addTo(islasGroup) 
                        $(islamarker._icon).addClass('islas');  
                       return islamarker;
                }else{ 
                    var islasGroup = L.layerGroup().addTo(map);
                    var islamarker = L.marker(latlng, {icon: L.divIcon({ 
                        html:'<div class="class-isla"><img width="20px" src="imagenes/iconos/iconos-arkesia/islaaventura.png"/><div class="fix-label">'+label+'</div></div>'
                    }
                    )}); 
                        islamarker.addTo(islasGroup) 
                        $(islamarker._icon).addClass('islas');  
                    return islamarker;
                }
            }            
        }, 
        onEachFeature: function (f, l) {
            l.on('mouseover', function (e) {   
                if(f.properties.tipo == "ciudad" || f.properties.tipo == "barcomercante"){
                    return;
                } 
                if(f.properties.tipo == "barcofantasma"){ 
                    l.bindPopup('<div style="display:block; text-align:center"><h2 style="color:rgb(150 101 177);">'+f.properties.nombre+'</h2><p>Nivel de objeto: <b>'+f.properties.ilvl+'</b></p></div>').openPopup();
                }
                if(f.properties.tipo == "navegacioncooperativa"){ 
                    l.bindPopup('<div style="display:block; text-align:center"><h2 style="color:rgb(146 247 146);">'+f.properties.nombre+'</h2>'+f.properties.recompensas+'<p>Nivel de objeto: <b>'+f.properties.ilvl+'</b></p></div>').openPopup();
                }
                if(f.properties.tipo == "portales"){ 
                    l.bindPopup('<div style="display:block; text-align:center"><h2 style="color:rgb(0 233 230);">'+f.properties.nombre+'</h2><p>Requisito: <b class="amarillo-texto">'+f.properties.ilvl+'</b></p>Horario: <ul style="text-align:center">'+f.properties.horario+'</ul></div>').openPopup();
                }
                if(f.properties.tipo == "islapvp"){
                    l.bindPopup('<div style="display:block; text-align:center"><h2 style="color:#df8c25;">'+f.properties.nombre+'</h2><img class="islapvpimg" src="./imagenes/iconos-islas/'+f.properties.title+'.jpg"/><p>Horario: '+f.properties.horario+'</p><p>Nivel de objeto: <b>'+f.properties.ilvl+'<b></p></div>').openPopup();
                }
                if(f.properties.tipo == "islapvpaventura"){
                    l.bindPopup('<div style="display:block; text-align:center"><h2 style="color:#df8c25;">'+f.properties.nombre+'</h2><img class="islapvpimg" src="./imagenes/iconos-islas/'+f.properties.title+'.jpg"/><p>Horario: '+f.properties.horario+'</p><p>Nivel de objeto: <b>'+f.properties.ilvl+'<b></p></div>').openPopup();
                }
                if(f.properties.tipo == "islaaventura"){
                    l.bindPopup('<div style="display:block; text-align:center"><h2 style="color:#df8c25;">'+f.properties.nombre+'</h2><img class="islaimg" src="./imagenes/iconos-islas/'+f.properties.title+'.jpg"/><p>Horario: '+f.properties.horario+'</p><p>'+f.properties.isladesc+'</p><p>Nivel de objeto: <b>'+f.properties.ilvl+'<b></p></div>').openPopup();
                }
                if(f.properties.tipo == "isla"){
                    l.bindPopup('<div style="display:block; text-align:center"><h2 style="color:#df8c25;">'+f.properties.nombre+'</h2><img class="islaimg" src="./imagenes/iconos-islas/'+f.properties.title+'.jpg"/><p>Horario: '+f.properties.horario+'</p><p>'+f.properties.isladesc+'</p><p>Nivel de objeto: <b>'+f.properties.ilvl+'<b></p></div>').openPopup();
                }
               
            });
            l.on('mouseout', function (e) {
               l.closePopup();
            });
            l.on('click', function(e){  
                if(f.properties.tipo == "barcomercante" || f.properties.tipo == "barco" || f.properties.tipo == "barcofantasma" || f.properties.tipo == "portales" || f.properties.tipo == "navegacioncooperativa"  ){
                    return;
                }
                if(f.properties.tipo == "ciudad" || f.properties.tipo == "isla" || f.properties.tipo == "islapvp" || f.properties.tipo == "islaaventura" || f.properties.tipo == "islapvpaventura" ){ 
                    cambiarMapa(e.sourceTarget.feature.properties,e.latlng);
                }
            })
        }
    }).addTo(map);  
    
    
    if(map.getZoom() == '3'){ 
        $('.label-ciudad').css({'visibility': 'hidden'});  
    }
    if(map.getZoom() == '5'){ 
        $('.class-ciudad').css({'transform':'scale(1.3)'}); 
        $('.class-isla').css({'transform':'scale(1.3)'}); 
        $('.class-islaaventura').css({'transform':'scale(1.3)'}); 
        $('.class-islapvpaventura').css({'transform':'scale(1.3)'}); 
        $('.class-islapvp').css({'transform':'scale(1.3)'}); 
    }
    if(map.getZoom() != '3'){ 
        $('.label-ciudad').css({'visibility': 'visible'});  
    }
    /**Calcular el text de los marcadores para colocarlo */
    var longitudTexto = document.querySelectorAll('*[id^="calculo-"]');
    for (var i = 0; i < longitudTexto.length; i++){  
        var calcular = ($( longitudTexto[i] ).width() / 2.4) - 5;
        longitudTexto[i].style.marginLeft  = "-"+calcular+"px";
    } 
    var longitudTextoa = document.querySelectorAll('*[class="texto-ciudades"]');
    for (var i = 0; i < longitudTextoa.length; i++){  
        var calcular = ($( longitudTextoa[i] ).width() / 5) - 50;
        longitudTextoa[i].style.marginLeft  = ""+calcular+"px";
    } 
    var longitudTextob = document.querySelectorAll('*[class="fix-label"]');
    for (var i = 0; i < longitudTextob.length; i++){  
        var calcular = ($( longitudTextob[i] ).width() / 2) - 10;
        longitudTextob[i].style.left  = "-"+calcular+"px";
    } 
    var longitudTextoc = document.querySelectorAll('*[class="label-ciudad"]');
    for (var i = 0; i < longitudTextoc.length; i++){  
        var calcular = ($( longitudTextoc[i] ).width() / 2) - 18;
        longitudTextoc[i].style.left  = "-"+calcular+"px";
    }  
    markers.on('mouseover', function(e) {
        var calcularPopup = document.querySelectorAll('*[class="leaflet-popup-content-wrapper"]');
        for (var i = 0; i < calcularPopup.length; i++){  
            var calcular = ($( calcularPopup[i] ).width() / 2);
            var calcular2 = ($( calcularPopup[i] ).height() + 2);  
            calcularPopup[i].style.marginLeft  = "-"+calcular+"px";   
            //calcularPopup[i].style.marginTop  = "-"+calcular2+"px"; 
        } 
    });

    map.on('zoomend', function() { 
        switch (map.getZoom()) {
            case 3:
                $('.class-ciudad').css({'transform':'scale(1.1)'}); 
                $('.class-isla').css({'transform':'scale(1.1)'}); 
                $('.class-islapvp').css({'transform':'scale(1.1)'}); 
                $('.class-islapvpaventura').css({'transform':'scale(1.1)'}); 
                $('.class-islaaventura').css({'transform':'scale(1.1)'}); 
              break;
            case 4:
                $('.class-ciudad').css({'transform':'scale(1.2)'}); 
                $('.label-ciudad').css({'transition': '0.4s !important'});
                $('.class-isla').css({'transform':'scale(1.2)'}); 
                $('.class-islapvp').css({'transform':'scale(1.2)'}); 
                $('.class-islapvpaventura').css({'transform':'scale(1.2)'}); 
                $('.class-islaaventura').css({'transform':'scale(1.2)'}); 
              break;
            case 5:
                $('.class-ciudad').css({'transform':'scale(1.3)'}); 
                $('.label-ciudad').css({'transition': '0.4s'});
                $('.class-isla').css({'transform':'scale(1.3)'}); 
                $('.class-islapvp').css({'transform':'scale(1.3)'}); 
                $('.class-islapvpaventura').css({'transform':'scale(1.3)'}); 
                $('.class-islaaventura').css({'transform':'scale(1.3)'});
              break; 
            case 6: 
                $('.class-ciudad').css({'transform':'scale(1.4)'}); 
                $('.class-isla').css({'transform':'scale(1.4)'}); 
                $('.class-islapvp').css({'transform':'scale(1.4)'}); 
                $('.class-islapvpaventura').css({'transform':'scale(1.4)'}); 
                $('.class-islaaventura').css({'transform':'scale(1.4)'}); 
            break;   
          }
        if (map.getZoom() == 3){ 
            $('.class-ciudad').css({'transform':'scale(1)'}); 
            $('.label-ciudad').css({'transition': '0s'});
            $('.class-isla').css({'transform':'scale(1)'}); 
            $('.class-islapvp').css({'transform':'scale(1)'}); 
            $('.class-islapvpaventura').css({'transform':'scale(1)'}); 
            $('.class-islaaventura').css({'transform':'scale(1)'}); 
            $('.label-ciudad').css({'visibility': 'hidden '});
        } 
        if(map.getZoom() != '3'){ 
            $('.label-ciudad').css({'visibility': 'visible'});
        }
        if (map.getZoom() >= 4){  
            $('.iconos-barco span').css({'font-size':'15px'}); 
        }
        if (map.getZoom() <= 4){ 
            $('.iconos-barco span').css({'font-size':'15px'}); 
        }  
    }); 
    if(map.zoomControl)map.zoomControl.remove();  
    document.getElementById('tituloh3').style.display= '';    
    busqueda();
    sugerencias();
    ocultarSideBarMarcadores();
} 
var anteriormvl = ''; 
function cambiarMapa(e,f,latlng) { 
    document.title = e.nombre; 
    if(myobj) { 
        myobj.remove();
    }    
    document.getElementById("container-map").innerHTML += `
    <div id="mapid">
    </div>
    `;  
    anteriormvl = '';
    anteriormvl = f;
    myobj = document.getElementById("mapid");   
    var splitlatlang;
    if(latlng){
        splitlatlang = latlng.split(',');
    }
    if (typeof splitlatlang === 'object' && latlng !== null){ 
        map.remove();
        map = L.map('mapid', {
            crs: L.CRS.Simple,  
            minZoom: -1,
            maxZoom: 2, 
            id: e.nombre,
            anterior: e.anterior, 
            zoomSnap: 0.5,
            wheelPxPerZoomLevel:200,
            zoomDelta: 0.5,
        }).setView([splitlatlang[0],splitlatlang[1]], 5);  
    }
    if(e.nombre == "Elgacia"){ 
        var zoomLevel = -1;
        var initialCoordinates = [450, 465];
        var bounds = L.latLngBounds(
            [initialCoordinates[0] - 580, initialCoordinates[1] - 580],
            [initialCoordinates[0] + 580, initialCoordinates[1] + 580]
          );
        map = L.map('mapid', {
            crs: L.CRS.Simple,
            minZoom: 0.8,
            maxZoom: 2, 
            maxBounds: bounds,
            id: e.nombre,
            anterior: e.anterior, 
            maxBoundsViscosity: 0.8,
            zoomSnap: 0.5,
            wheelPxPerZoomLevel:200,
            zoomDelta: 0.5, 
        });  
        map.setView(initialCoordinates, zoomLevel); 
    } 
    else{  
        map.remove(); 
        if (typeof splitlatlang === 'object' && latlng !== null){ 
            map = L.map('mapid', {
                crs: L.CRS.Simple,
                minZoom: -1,
                maxZoom: 2, 
                id: e.nombre,
                anterior: e.anterior, 
                zoomSnap: 0.5,
                wheelPxPerZoomLevel:200,
                zoomDelta: 0.5,
            });  
            map.setView([splitlatlang[0],splitlatlang[1]], 5); 
        }else{
            map = L.map('mapid', {
                crs: L.CRS.Simple,
                minZoom: -1,
                maxZoom: 2, 
                id: e.nombre,
                anterior: e.anterior, 
                zoomSnap: 0.5,
                wheelPxPerZoomLevel:200,
                zoomDelta: 0.5,
            });  
            map.setView([200,500], -1);
        }
    }
    map.zoomControl.remove();   
    L.control.zoom({
        position: 'bottomleft'
    }).addTo(map);
    bounds = [[0,0], [741,975]];
    image = L.imageOverlay('./imagenes/mapas/'+e.title+'.png', bounds).addTo(map); 
    map.attributionControl.addAttribution('<span>Creado por </span> <a id="test" href="https://www.thelordoftheguides.com/lost-ark" target="_blank" style="color: #f57b0f">Yoho</a>');
     
    //Cargar los marcadores
    cargarMarcadores(e); 
    var checkbuttons = document.getElementsByClassName('sugerencias');
    if(!checkbuttons || checkbuttons.length < 1){
        busqueda();  
        sugerencias();
    }
    document.getElementById('tituloh2').innerHTML = e.nombre;
    document.getElementById('titulo-mapa').innerHTML = e.nombre; 
    if(map.getZoom() == -1) $('#titulo-mapa').css({'color':'#ffffff14'}); 
    document.getElementById('spantitulo').innerHTML = e.zona; 
    document.getElementById('tituloh4').style.display = 'none';
    if(e.zona != 'Isla'){
        document.getElementById('tituloh4').href = 'https://www.thelordoftheguides.com/lost-ark/tomo-'+ e.zona.replace(/\s/g, '-').toLowerCase();
        document.getElementById('tituloh4').style.display = 'block';
    } 
    if(e.zona == 'Isla'){
        document.getElementById('tituloh3').style.display = 'block';
        document.getElementById('tituloh3').innerHTML = e.zona; 
    } 
    if(map.getZoom() >= 1) document.getElementById('titulo-mapa').style.color ='#ffffff00';
    //Cambiar tamaño
    map.on('zoomend', function() { 
        if (map.getZoom() >= 2){  
            $('#mapid .mokokos').css({'width':'30px','height':'30px','margin-left':'-20px','margin-top':'-20px'}); 
        }
        if (map.getZoom() <= 1){  
            $('#mapid .mokokos').css({'width':'18px','height':'18px','margin-left':'-12px','margin-top':'-12px'}); 
        }
        if (map.getZoom() >= 0){  
            $('#mapid .mazmorra').css({'width':'50px','height':'50px','margin-left':'-24px','margin-top':'-29px'}); 
            $('#mapid .portal').css({'width':'50px','height':'50px','margin-left':'-24px','margin-top':'-29px'});  
        } 
        if (map.getZoom() >= 1){  
            $('#mapid .mazmorra').css({'width':'80px','height':'80px','margin-left':'-47px','margin-top':'-55px'});  
            $('#mapid .portal').css({'width':'80px','height':'80px','margin-left':'-47px','margin-top':'-55px'});    
        } 
        if (map.getZoom() <= -1){  
            $('#mapid .mazmorra').css({'width':'27px','height':'27px','margin-left':'-12px','margin-top':'-12px'}); 
            $('#mapid .portal').css({'width':'27px','height':'27px','margin-left':'-12px','margin-top':'-12px'}); 
        }
        if (map.getZoom() <= -1){  
            $('#titulo-mapa').css({'color':'#ffffff14'}); 
        } 
        if (map.getZoom() >= 0){  
            $('#titulo-mapa').css({'color':'#ffffff00'}); 
        } 
    });
    $('#mapid .mokokos').on('click', function(e){  
        $(this).toggleClass("grayscale");  
    })
    if (document.getElementById('titulo-mapa').innerHTML.length >= 25) document.getElementById('titulo-mapa').style.fontSize = '80px';
    copiar();   
     
    map.on('mousedown', clickDerecho);
    function clickDerecho(e){    
        if(e.originalEvent.buttons == 2 && map.options.anterior =='arkesia'){  
            document.getElementById('tituloh2').innerHTML= '';
            document.getElementById('titulo-mapa').innerHTML= '';
            document.getElementById('tituloh4').style.display= 'none';
            todos = [];
            var toggleMarcadorRemove = document.getElementsByClassName("toggle-marcador");
            while (toggleMarcadorRemove.length)
            toggleMarcadorRemove[0].classList.remove("toggle-marcador");  
            myobj.remove(); 
            var url = window.location.href.split('?'); 
            window.history.pushState('Arkesia', 'Arkesia', url[0]); 
            arkesia(f); 
        }
        if(e.originalEvent.buttons == 2 && map.options.anterior != 'arkesia'){  
            pantoPrev(map.options.anterior);
        }
    } 
    ocultarSideBarMarcadores()
    map.eachLayer(function(layer){
        var iconosZonaArr = []
        var iconosZonaArrClean = []
        if(layer.options.icon != undefined){
            iconosZonaArr.push(layer.options.icon);  
            for (var i = 0; i < iconosZonaArr.length; i++){ 
                iconosZonaArrClean.push(iconosZonaArr[i].options.iconUrl.split('/')[3].split('.')[0]) 
            }  
            for (var i = 0; i < iconosZonaArrClean.length; i++){  
                var este = document.getElementById("marcador-"+iconosZonaArrClean[i]);
                if(este){
                    este.classList.add("visible");        
                }else{return}
            } 
        }else{return}
         
    }); 
}


function volverAnterior(e)  {
    if(map.options.anterior =='arkesia'){    
        document.getElementById('tituloh2').innerHTML= '';
        document.getElementById('titulo-mapa').innerHTML= '';
        document.getElementById('tituloh4').style.display= 'none';
        todos = [];
        var toggleMarcadorRemove = document.getElementsByClassName("toggle-marcador");
        while (toggleMarcadorRemove.length)
        toggleMarcadorRemove[0].classList.remove("toggle-marcador");  
        myobj.remove(); 
        var url = window.location.href.split('?'); 
        window.history.pushState('Arkesia', 'Arkesia', url[0]); 
        arkesia(anteriormvl); 
    }
    if(map.options.anterior != 'arkesia'){  
        pantoPrev(map.options.anterior);
    }
}

 
function copiar(){     
map.on('click', onMapClick); 
    function onMapClick(e) {  
    copyTextToClipboard(e.latlng.lng +','+ e.latlng.lat); 
} 

map.on('mousedown', clickCentral);  
function clickCentral(e){  
    if(e.originalEvent.buttons == 4){    
        copyTextToClipboard(e.latlng.lat+','+e.latlng.lng); 
    }
} 


/*Copiar coordenadas con click*/
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() { 
    }, function(err) { 
    });
    }
}


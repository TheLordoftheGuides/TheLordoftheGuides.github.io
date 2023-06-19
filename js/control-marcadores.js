if (getCookie("ayuda") === null){  
    var panel = document.getElementById("panelayuda");
    panel.classList.toggle('mostrar-ayuda');  
    setCookie("ayuda","1","90")
}

function openNav() {
    document.getElementById("mySidebar").classList.toggle("mostrar-side-buscador");
    document.getElementById("main").classList.toggle("mostrar-buscador");    
    document.getElementById("buscarmapa").classList.toggle("bottombox");
    var input = document.getElementById("buscador"); 
    input.focus(); 
    input.value = '';
    myFunction();
} 
function closeNav() {
    document.getElementById("mySidebar").classList.remove("mostrar-side-buscador");
    document.getElementById("main").classList.remove("mostrar-buscador");
}
function openNavMarcadores() { 
    document.getElementById("mainMarcadores").classList.toggle("mostrar");  
    document.getElementById("sidebarMarcadores").classList.toggle("mostrar-side");  
    document.getElementById("marcadores").classList.toggle("bottombox");
}

function closeNavMarcadores() {  
    document.getElementById("sidebarMarcadores").classList.remove("mostrar-side"); 
    document.getElementById("mainMarcadores").classList.remove("mostrar");
}

function paneldeayuda(){
    var panel = document.getElementById("panelayuda");
    panel.classList.toggle('mostrar-ayuda'); 
} 
function cerrarAyuda(){ 
    var panel = document.getElementById("panelayuda");
    panel.classList.toggle('mostrar-ayuda'); 
    if (getCookie("ayuda") === null){ 
        setCookie("ayuda","1","90")
    } 
} 
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString(); 
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var mokokosHover = document.getElementById("mokokos");
var mokokosEnMapa = document.getElementsByClassName("mokokos");
mokokosHover.addEventListener('mouseover', function() {
    for(var i = 0; i < mokokosEnMapa.length; i++){
        mokokosEnMapa[i].classList.toggle('background-moko');
    }
});
mokokosHover.addEventListener('mouseout', function() {
    for(var i = 0; i < mokokosEnMapa.length; i++){
        mokokosEnMapa[i].classList.toggle('background-moko');
    }
});
function myFunction() {
    filterFunction();
    var input, filter, txtspace;
    var temporal = null;
	document.getElementById("tituloh3").innerHTML = '';
    input = document.getElementById("buscador");
    filter = input.value.toLowerCase();
    txtspace = filter.replace(/\s/g,'');  
    ciudades.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == txtspace){  
                temporal = txtspace;
                document.getElementById("mySidebar").classList.toggle("mostrar-side-buscador"); 
                document.getElementById("buscarmapa").classList.toggle("bottombox");
                cambiarMapa(e.properties,e.geometry.coordinates);
            }
        }
    );   
    islas.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == txtspace){
                temporal = txtspace; 
                document.getElementById("mySidebar").classList.toggle("mostrar-side-buscador"); 
                document.getElementById("buscarmapa").classList.toggle("bottombox");  
                cambiarMapa(e.properties,e.geometry.coordinates);
            }
        }
    );  
    mazmorras.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == txtspace){
                temporal = txtspace;   
                document.getElementById("mySidebar").classList.toggle("mostrar-side-buscador"); 
                document.getElementById("buscarmapa").classList.toggle("bottombox");
                cambiarMapa(e.properties,e.geometry.coordinates);
            }
        }
    );
    subzonas.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == txtspace){
                temporal = txtspace;  
                document.getElementById("mySidebar").classList.toggle("mostrar-side-buscador"); 
                document.getElementById("buscarmapa").classList.toggle("bottombox"); 
                cambiarMapa(e.properties,e.geometry.coordinates);
            }
        }
    );   
}  
function busqueda(){
    var frag = document.createDocumentFragment(); 
    for(var i = 0; i < todos.length; i++) {
        var a = document.createElement("button");  
        a.classList.add('sugerencias');
        a.innerHTML = todos[i];
        frag.appendChild(a);
    }
    document.getElementById('myDropdown').appendChild(frag);
    
}
function sugerencias(){ 
    var sugerencias = document.getElementsByClassName('sugerencias');
    var inputBuscador = document.getElementById("buscador"); 
    for(var i = 0; i < sugerencias.length; i++){ 
        sugerencias[i].addEventListener("click", function(){  
            inputBuscador.value = this.textContent;
            myFunction();
        })
    }
}
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("buscador");
    if(input.value.length >= 1) {
        input.style.marginBottom ="10px"
    }else{
        input.style.marginBottom ="0px"
    }
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("button");  
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "block";
      } else {
        a[i].style.display = "none";
      }
    } 
    if($('#buscador').val() === '' ){$('.sugerencias').hide();} 
  }

function toggleMarcador(e) {    
    map.closePopup();
    document.getElementById(e.parentNode.id).classList.toggle("toggle-marcador"); 
    var nombreMarcador = e.parentNode.id.split('-')[1];
    var ocultarmarcadores = document.getElementsByClassName('iconos-'+nombreMarcador);    
    var tooltipsHistoriaadicional = document.getElementsByClassName('class-historiaadicional');
    var tooltipsHistoriaoculta = document.getElementsByClassName('class-historiaoculta');
    var tooltipsCiudad = document.getElementsByClassName('class-ciudad');
    var tooltipsIslas = document.getElementsByClassName('class-isla');
    var tooltipsIslasPvp = document.getElementsByClassName('class-islapvp');
    var tooltipsMonstruo = document.getElementsByClassName('class-monstruo');
    var tooltipsIngrediente = document.getElementsByClassName('class-ingrediente');
    var tooltipsVista = document.getElementsByClassName('class-vista');    
    var tooltipsComerciante = document.getElementsByClassName('class-comerciante');  
    var tooltipsCorazondegigante = document.getElementsByClassName('class-corazondegigante');  
    var tooltipsObramaestra = document.getElementsByClassName('class-obramaestra');  
    var tooltipsPasoprevio = document.getElementsByClassName('class-pasoprevio');  
    if (ocultarmarcadores.length == 0){ 
        var elemento = e.id.replace(/\s/g,'').toLowerCase(); 
        var ocultarElemento = document.getElementsByClassName(elemento);
        for(var i = 0; i < ocultarElemento.length; i++){  
            ocultarElemento[i].classList.toggle('hidden'); 
        }
        
    }else{
        for(var i = 0; i < ocultarmarcadores.length; i++){
            ocultarmarcadores[i].classList.toggle('hidden'); 
        } 
    }  
    if(elemento == 'corazondegigante'){ 
        for(var i = 0; i < tooltipsCorazondegigante.length; i++){
            tooltipsCorazondegigante[i].classList.toggle('visibility');  
        }
    } 
    if(elemento == 'pasoprevio'){ 
        for(var i = 0; i < tooltipsPasoprevio.length; i++){
            tooltipsPasoprevio[i].classList.toggle('visibility');  
        }
    } 
    if(elemento == 'obramaestra'){ 
        for(var i = 0; i < tooltipsObramaestra.length; i++){
            tooltipsObramaestra[i].classList.toggle('visibility');  
        }
    }  
    if(elemento == 'historiaadicional'){ 
        for(var i = 0; i < tooltipsHistoriaadicional.length; i++){
            tooltipsHistoriaadicional[i].classList.toggle('visibility');  
        }
    } 
    if(elemento == 'ciudades'){ 
        for(var i = 0; i < tooltipsCiudad.length; i++){
            tooltipsCiudad[i].classList.toggle('visibility');  
        }
    } 
    if(elemento == 'islas'){ 
        for(var i = 0; i < tooltipsIslas.length; i++){
            tooltipsIslas[i].classList.toggle('visibility');  
        }
    }
    if(elemento == 'islaspvp'){ 
        for(var i = 0; i < tooltipsIslasPvp.length; i++){
            tooltipsIslasPvp[i].classList.toggle('visibility');  
        }
    }
    if(elemento == 'historiaoculta'){ 
        for(var i = 0; i < tooltipsHistoriaoculta.length; i++){
            tooltipsHistoriaoculta[i].classList.toggle('visibility');  
        }
    } 
    if(elemento == 'monstruos'){ 
        for(var i = 0; i < tooltipsMonstruo.length; i++){
            tooltipsMonstruo[i].classList.toggle('visibility');
        }
    } 
    if(elemento == 'ingrediente'){ 
        for(var i = 0; i < tooltipsIngrediente.length; i++){
            tooltipsIngrediente[i].classList.toggle('visibility');
        }
    } 
    if(elemento == 'vista'){ 
        for(var i = 0; i < tooltipsVista.length; i++){
            tooltipsVista[i].classList.toggle('visibility');
        } 
    }  
    if(elemento == 'comercianteitinerante'){ 
        for(var i = 0; i < tooltipsComerciante.length; i++){
            tooltipsComerciante[i].classList.toggle('visibility');
        } 
    } 
}   

function panto(irmapa, coordenadas){
    var latlng = coordenadas.split(','); 
    var temporal = null;
	ciudades.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){  
                    temporal = irmapa; 
                    cambiarMapa(e.properties,e.geometry.coordinates,coordenadas);
                }
            }
        );   
        islas.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){
                    temporal = irmapa;   
                    cambiarMapa(e.properties,e.geometry.coordinates,coordenadas);
                }
            }
        );  
        mazmorras.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){
                    temporal = irmapa;   
                    cambiarMapa(e.properties,e.geometry.coordinates,coordenadas);
                }
            }
        );
        subzonas.features.forEach(e => 
            { 
                if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){
                    temporal = irmapa;   
                    cambiarMapa(e.properties,e.geometry.coordinates,coordenadas);
                }
            }
        );  
    
    
}
function zoom(coords){ 
    var latlng = coords.split(','); 
    map.setView([latlng[0], latlng[1]], 5);
}
function pantoPrev(irmapa, coords){  
    var temporal = null;   
    ciudades.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){  
                temporal = irmapa; 
                cambiarMapa(e.properties,e.geometry.coordinates);
            }
        }
    );   
    islas.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){
                temporal = irmapa;   
                cambiarMapa(e.properties,e.geometry.coordinates);
            }
        }
    );  
    mazmorras.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){
                temporal = irmapa;   
                cambiarMapa(e.properties,e.geometry.coordinates);
            }
        }
    );
    subzonas.features.forEach(e => 
        { 
            if(e.properties.nombre.toLowerCase().replace(/ /g,'') == irmapa){
                temporal = irmapa;   
                cambiarMapa(e.properties,e.geometry.coordinates,coords);
            }
        }
    );   
}
 
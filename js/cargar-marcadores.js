function cargarMarcadores(e){    
    var mokokoGroup = L.layerGroup().addTo(map); 
    var descripcionFicha= e.conseguirficha;  
    var historiaadicionalClase = {
        'className': 'class-historiaadicional'
    }
    var historiaocultaClase = {
        'className': 'class-historiaoculta'
    }
    var monstruoClase = {
        'className': 'class-monstruo'
    }
    var ingredienteClase = {
        'className': 'class-ingrediente'
    }
    var vistaClase = {
        'className': 'class-vista'
    }
    var comercianteClase = {
        'className': 'class-comerciante'
    }
    var corazondegiganteClase = {
        'className': 'class-corazondegigante'
    }
    var obramaestraClase = {
        'className': 'class-obramaestra'
    }
    var pasoprevioClase = {
        'className': 'class-pasoprevio'
    }
    var claserel = {
        'className': 'claserel'
    } 
    const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
        first.toLocaleUpperCase(locale) + rest.join('')
    if(e.mokokos){      
        for (var i = 0; i < e.mokokos.length; i++){ 
            var mokokoClass = L.marker(e.mokokos[i],{icon: iconoMokokos});
            mokokoClass.addTo(mokokoGroup) 
            $(mokokoClass._icon).addClass('mokokos'); 
        }
        let mokokolength = Object.getOwnPropertyNames(mokokoGroup._layers); 
        var b = document.getElementById('mokokos');
        b.textContent = 'Mokokos: '+mokokolength.length;
    } 


    if(e.pasillosecreto){
        for (var i = 0; i < e.pasillosecreto.length; i++){ 
            var pasilloSecretoClass = L.marker(e.pasillosecreto[i],{icon: iconoPasilloSecreto});
            var pasillosecretodesc;
            if(e.pasillosecretodesc){
                pasillosecretodesc = String(e.pasillosecretodesc[i]);
                pasilloSecretoClass.bindPopup('<div style="text-align:center; padding:15px; min-width:250px">'+pasillosecretodesc+'</div>',claserel);
                pasilloSecretoClass.addTo(map);
                $(pasilloSecretoClass._icon).addClass('pasillosecreto');
            }else{
                pasilloSecretoClass.addTo(map);
                $(pasilloSecretoClass._icon).addClass('pasillosecreto');
            } 
        } 
    }
    if(e.afinidad){
        for (var i = 0; i < e.afinidad.length; i++){ 
            var afinidadpj = String(e.afinidadnombre[i]);
            var afinidaddesc;
            if(e.afinidaddesc) afinidaddesc = String(e.afinidaddesc[i]);
            var afinidadClass = L.marker(e.afinidad[i],{icon: iconoAfinidad});   
            if(afinidadpj == 'neria2'){
                afinidadClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom:15px;"><h2 class="afinidad">Neria</h2><img style="margin-bottom:11px" src="./imagenes/afinidad/neria2.png" /><a class="guia" target="_blank" href="https://www.thelordoftheguides.com/lost-ark/afinidad/">Ver más</a></div></div>',claserel);
                $(afinidadClass._icon).addClass('afinidad'); 
            }
            if(afinidadpj === 'neria3'){
                afinidadClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom:15px;"><h2 class="afinidad">Neria</h2><img style="margin-bottom:11px" src="./imagenes/afinidad/neria3.png" /><a class="guia" target="_blank" href="https://www.thelordoftheguides.com/lost-ark/afinidad/">Ver más</a></div></div>',claserel);
                $(afinidadClass._icon).addClass('afinidad'); 
            }
			if(afinidadpj === 'neria4'){
                afinidadClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom:15px;"><h2 class="afinidad">Neria</h2><img style="margin-bottom:11px"  src="./imagenes/afinidad/neria4.png" /><div class="guiadiv"><a class="guia" target="_blank" href="https://www.thelordoftheguides.com/lost-ark/afinidad/">Ver más</a></div></div>',claserel);
                $(afinidadClass._icon).addClass('afinidad'); 
            }
            if(afinidadpj === 'neria5'){
                afinidadClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom:15px;"><h2 class="afinidad">Neria</h2><img style="margin-bottom:11px"  src="./imagenes/afinidad/neria5.png" /><div class="guiadiv"><a class="guia" target="_blank" href="https://www.thelordoftheguides.com/lost-ark/afinidad/">Ver más</a></div></div>',claserel);
                $(afinidadClass._icon).addClass('afinidad'); 
            }
            if(afinidadpj === 'neria6'){
                afinidadClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom:15px;"><h2 class="afinidad">Neria</h2><img style="margin-bottom:11px"  src="./imagenes/afinidad/neria6.png" /><div class="guiadiv"><a class="guia" target="_blank" href="https://www.thelordoftheguides.com/lost-ark/afinidad/">Ver más</a></div></div>',claserel);
                $(afinidadClass._icon).addClass('afinidad'); 
            }
            if(e.afinidaddesc){ 
                afinidadClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom:15px;"><h2 class="afinidad">'+capitalizeFirstLetter(afinidadpj)+'</h2><img style="margin-bottom:11px" src="./imagenes/afinidad/'+afinidadpj.toLowerCase().replace(/ /g,'')+'.png" /><br/>'+afinidaddesc+'<div class="guiadiv"><a class="guia" target="_blank" href="https://www.thelordoftheguides.com/lost-ark/afinidad/">Ver más</a></div></div>',claserel);
                $(afinidadClass._icon).addClass('afinidad');  
            }
            if(afinidadpj != 'neria3' && afinidadpj != 'neria2' && afinidadpj != 'neria4' && afinidadpj != 'neria5' && afinidadpj != 'neria6'){
                afinidadClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom:15px;"><h2 class="afinidad">'+capitalizeFirstLetter(afinidadpj)+'</h2><img style="margin-bottom:11px" src="./imagenes/afinidad/'+afinidadpj.toLowerCase().replace(/ /g,'')+'.png" /><div class="guiadiv"><a class="guia" target="_blank" href="https://www.thelordoftheguides.com/lost-ark/afinidad/">Ver más</a></div></div>',claserel);
                $(afinidadClass._icon).addClass('afinidad');  
            }
        }    
    }
    if(e.cocinero){ 
        for (var i = 0; i < e.cocinero.length; i++){ 
            var cocineronombre = String(e.cocineronombre[i]);
            var cocinerorecetas = String(e.cocinerorecetas[i]);
            var cocineroClass = L.marker(e.cocinero[i],{icon: iconoCocinero});
            cocineroClass.addTo(map).bindPopup('<div style="text-align:center;"><h2>'+capitalizeFirstLetter(cocineronombre)+'</h2>'+cocinerorecetas+'</div>',claserel);
            $(cocineroClass._icon).addClass('cocinero'); 
        }   
    }
    if(e.prisionero){ 
        for (var i = 0; i < e.prisionero.length; i++){  
            var prisioneroClass = L.marker(e.prisionero[i],{icon: iconoPrisionero});
            prisioneroClass.addTo(map);
            $(prisioneroClass._icon).addClass('prisionero'); 
        }   
    }
    if(e.misionsecreta){ 
        for (var i = 0; i < e.misionsecreta.length; i++){  
            var misionSecretaClass = L.marker(e.misionsecreta[i],{icon: iconoMisionSecreta});  
            var misionsecretadesc = String(e.misionsecretadesc[i]);
            var misionsecretatit = String(e.misionsecretatit[i]);
            misionSecretaClass.bindPopup('<div style="text-align:center; padding: 10px;"><h2 style="margin-top:0" class="questamarilla">'+misionsecretatit+'</h2>'+misionsecretadesc+'</div>',claserel).addTo(map);
        
            $(misionSecretaClass._icon).addClass('misionsecreta'); 
        }   
    }
    if(e.quest){ 
        for (var i = 0; i < e.quest.length; i++){  
            var questClass = L.marker(e.quest[i],{icon: iconoQuest});  
            var questDesc = String(e.questdesc[i]);
            var questtit = String(e.questtit[i]);
            questClass.bindPopup('<div style="text-align:center; padding: 10px;"><h2 style="margin-top:0" class="questamarilla">'+questtit+'</h2>'+questDesc+'</div>',claserel).addTo(map);
        
            $(questClass._icon).addClass('quest'); 
        }   
    }
    if(e.questmorada){ 
        for (var i = 0; i < e.questmorada.length; i++){  
            var questmoradaClass = L.marker(e.questmorada[i],{icon: iconoQuestMorada});
            if (e.questmoradadesc !== undefined){ 
                var questmoradaDesc = String(e.questmoradadesc[i]);
                questmoradaClass.bindPopup('<div style="text-align:center; padding: 10px;">'+questmoradaDesc+'</div>',claserel).addTo(map);
            }else{
                questmoradaClass.bindPopup('<div style="text-align:center; padding: 10px;">Icono orientativo para indicar misiones en otras guías o fichas de isla.</div>',claserel).addTo(map);
            } 
            $(questmoradaClass._icon).addClass('questmorada'); 
        }   
    }
    if(e.youtube){ 
        for (var i = 0; i < e.youtube.length; i++){ 
            var youtubeurl = String(e.youtubeurl[i]); 
            var youtubedesc = String(e.youtubedesc[i]); 
            var youtubeClass = L.marker(e.youtube[i],{icon: youtube}); 
            youtubeClass.bindTooltip(youtubedesc,{permanent: true,direction: 'right',interactive:true});
            youtubeClass.addTo(map).bindPopup('<div style="text-align:center;margin: 10px">'+youtubeurl+'</div>',claserel);
            $(youtubeClass._icon).addClass('youtube'); 
        }   
    }
    if(e.mokokotip){ 
        for (var i = 0; i < e.mokokotip.length; i++){ 
            var mokokotipnum = String(e.mokokotipnum[i]); 
            var mokokotipdesc = String(e.mokokotipdesc[i]); 
            var mokokotipClass = L.marker(e.mokokotip[i],{icon: mokokotip}); 
            mokokotipClass.bindTooltip(mokokotipnum,{permanent: true,direction: 'right',interactive:true});
            mokokotipClass.addTo(map).bindPopup('<div style="text-align:center;margin: 10px">'+mokokotipdesc+'</div>',claserel);
            $(mokokotipClass._icon).addClass('mokokotip'); 
        }   
    }
    if(e.skillpoint){ 
        for (var i = 0; i < e.skillpoint.length; i++){ 
            var skillpointnpc = String(e.skillpointnpc[i]);
            var skillpointguia = String(e.skillpointguia[i]) 
            var skillpointClass = L.marker(e.skillpoint[i],{icon: iconoSkillpoint});
            skillpointClass.addTo(map).bindPopup('<div style="text-align:center;margin-bottom: 15px"><h2>'+capitalizeFirstLetter(skillpointnpc)+'</h2>'+skillpointguia+'</div>',claserel);
            $(skillpointClass._icon).addClass('skillpoint'); 
        }   
    }
    if(e.ingrediente){ 
        for (var i = 0; i < e.ingrediente.length; i++){  
        var ingredientevendedor = String(e.ingredientevendedor[i]);ingredientetooltip
        var descripcioningrediente = String(e.descripcioningrediente[i]);
        var ingredientetooltip = String(e.ingredientetooltip[i]);
            var ingredienteClass = L.marker(e.ingrediente[i],{icon: iconoIngrediente}).bindTooltip(ingredientetooltip,{permanent: true,direction: 'right',interactive:true, ...ingredienteClase}, ingredienteClase);;
            ingredienteClass.addTo(map).bindPopup('<div style="text-align:center; min-width:250px"><h2 class="ingrediente">'+capitalizeFirstLetter(ingredientevendedor)+'</h2>'+descripcioningrediente+'</div>',claserel);
            $(ingredienteClass._icon).addClass('ingrediente'); 
        }    
    } 
    if(e.cancion){ 
        for (var i = 0; i < e.cancion.length; i++){ 
            let nombreCancion = String(e.cancionicono[i]); 
            let canciondesc = String(e.canciondesc[i]);
            let cancionClass = L.marker(e.cancion[i],{icon: window[nombreCancion]})
            cancionClass.addTo(map);
            $(cancionClass._icon).addClass(e.cancionicono[i]); 
            let enlace;
            if(nombreCancion == 'minuetodelbosque') enlace = 'https://www.thelordoftheguides.com/lost-ark/minueto-del-bosque/';
            if(nombreCancion == 'cancionderesonancia') enlace = 'a'; 
            if(nombreCancion == 'canciondeeternidad') enlace = 'a';
            if(nombreCancion == 'canciondeprimavera') enlace = 'a';
            if(nombreCancion == 'canciondeloslobos') enlace = 'a';
            if(nombreCancion == 'armaromantica') enlace = 'a';
            if(enlace != 'a'){
                cancionClass.bindPopup('<div style="display:block; text-align:center; min-width:250px; margin-bottom: 27px"><p>'+canciondesc+'</p><p><a class="guia" href="'+enlace+'" target="_blank">Cómo conseguir la canción</a></p></div>',claserel).addTo(map)
            }else{
                cancionClass.bindPopup('<div style="display:block; text-align:center; min-width:250px; margin-bottom: 27px"><p>'+canciondesc+'</p><p><a class="guia" href="https://www.thelordoftheguides.com/lost-ark/canciones" target="_blank">Cómo conseguir la canción</a></p></div>',claserel).addTo(map)
            }
            
        } 
    } 
    if(e.fichadeisla && descripcionFicha){
        var fichadeIslaClass = L.marker(e.fichadeisla,{icon: iconoFichaIsla});
        fichadeIslaClass.addTo(map);
        $(fichadeIslaClass._icon).addClass('fichadeisla');   
        fichadeIslaClass.bindPopup('<div style="display:block; text-align:center; margin:10px 0; min-width:250px">'+descripcionFicha+'</div>',claserel);
        fichadeIslaClass.on('click', function (e) {
            fichadeIslaClass.openPopup();
        }); 
    }
    if(e.masterpiece){ 
        var masterPieceClass = L.marker(e.masterpiece,{icon: iconoMasterpiece});
        masterPieceClass.addTo(map);
        $(masterPieceClass._icon).addClass('masterpiece');  
        masterPieceClass.bindPopup('<div style="display:block; text-align:center"><p>Recompensas de las Obras Maestras</p><br/><img style="margin:0" width="300px" src="./imagenes/extraimg/masterpieces.jpg"/></div>',claserel).addTo(map)
    } 
    if(e.slime){ 
        for (var i = 0; i < e.slime.length; i++){ 
            var slimeClass = L.marker(e.slime[i],{icon: iconoSlime});
            slimeClass.addTo(map);
            $(slimeClass._icon).addClass('slime');  
        }
    }
    if(e.hielo){ 
        for (var i = 0; i < e.hielo.length; i++){ 
            var hieloClass = L.marker(e.hielo[i],{icon: iconoHielo});
            hieloClass.addTo(map);
            $(hieloClass._icon).addClass('hielo');  
        }
    }
    if(e.vendedor){ 
        for (var i = 0; i < e.vendedor.length; i++){ 
            var vendedorClass = L.marker(e.vendedor[i],{icon: iconoVendedor});
            if (e.vendedordesc !== undefined){ 
                var vendedordesc = String(e.vendedordesc[i]);
                vendedorClass.bindPopup('<div style="text-align:center; padding: 10px;">'+vendedordesc+'</div>',claserel).addTo(map);
            } 
            vendedorClass.addTo(map);
            $(vendedorClass._icon).addClass('vendedor');   
        }
    } 
    if(e.eventocooperativo){ 
        for (var i = 0; i < e.eventocooperativo.length; i++){ 
            var eventocooperativoClass = L.marker(e.eventocooperativo[i],{icon: iconoEventocooperativo});
            eventocooperativoClass.addTo(map);
            $(eventocooperativoClass._icon).addClass('eventocooperativo');   
        }
    }
    if(e.corazondegigante){ 
        for (var i = 0; i < e.corazondegigante.length; i++){  
            var corazondegigantenum = String(e.corazondegigantenum[i]);
            var corazondegiganteClass = L.marker(e.corazondegigante[i],{icon: iconoCorazondeGigante}).bindTooltip(corazondegigantenum,{permanent: true,direction: 'right',interactive:true, ...corazondegiganteClase},corazondegiganteClase);
            var corazondegigantedesc = String(e.corazondegigantedesc[i]); 
            corazondegiganteClass.bindPopup('<div style="text-align:center; width: 300px">'+corazondegigantedesc+'</div>',claserel).addTo(map)
            $(corazondegiganteClass._icon).addClass('corazondegigante');   
        }
    } 
    if(e.obramaestra){ 
        for (var i = 0; i < e.obramaestra.length; i++){ 
            var obramaestranum = String(e.obramaestranum[i]);
            var obramaestraClass = L.marker(e.obramaestra[i],{icon: iconoObramaestra}).bindTooltip(obramaestranum,{permanent: true,direction: 'right',interactive:true, ...obramaestraClase},obramaestraClase);;
            var obramaestradesc = String(e.obramaestradesc[i]);
            obramaestraClass.addTo(map);
            $(obramaestraClass._icon).addClass('obramaestra');   
            obramaestraClass.bindPopup('<div style="text-align:center; width: 300px">'+obramaestradesc+'</div>',claserel).addTo(map) 
        }
    } 
    
    if(e.pasoprevio){ 
        for (var i = 0; i < e.pasoprevio.length; i++){ 
            var pasoprevioClass = L.marker(e.pasoprevio[i],{icon: iconoPasoPrevio});
            if(e.pasopreviodesc){
                pasoprevioClass.addTo(map).bindPopup('<div style="padding:15px; text-align:center">'+String(e.pasopreviodesc[i])+'</div>',claserel);
                $(pasoprevioClass._icon).addClass('pasoprevio'); 
            }
            if(e.pasoprevionum){
                var pasoprevionum = String(e.pasoprevionum[i]);
                pasoprevioClass.bindTooltip(pasoprevionum,{permanent: true,direction: 'right',interactive:true, ...pasoprevioClase}, pasoprevioClase);
            }
            else{
                pasoprevioClass.addTo(map);
                $(pasoprevioClass._icon).addClass('pasoprevio'); 
            }  
        }
    } 
    if(e.mazmorra){ 
        for (var i = 0; i < e.mazmorra.length; i++){ 
            var nombreMazmorra = String(e.nombreMazmorra[i]); 
            var mazmorraClass = L.marker(e.mazmorra[i],{icon: iconoMazmorra}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreMazmorra+" </span></div>",{permanent: false,direction: 'right',interactive:true});
            mazmorraClass.addTo(map);
            $(mazmorraClass._icon).addClass('mazmorra'); 
            mazmorraClass.on('click', function (e) { 
                var tempMaz = nombreMazmorra.toLowerCase().replace(/ /g,'');
                mazmorras.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempMaz){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );     
            }); 
        }
    }
    if(e.mazmorra2){ 
        for (var i = 0; i < e.mazmorra2.length; i++){ 
            var nombreMazmorra2 = String(e.nombreMazmorra2[i]); 
            var mazmorraClass2 = L.marker(e.mazmorra2[i],{icon: iconoMazmorra}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreMazmorra2+" </span></div>",{permanent: false,direction: 'right',interactive:true});
            mazmorraClass2.addTo(map);
            $(mazmorraClass2._icon).addClass('mazmorra'); 
            mazmorraClass2.on('click', function (e) { 
                var tempMaz = nombreMazmorra2.toLowerCase().replace(/ /g,'');
                mazmorras.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempMaz){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );     
            }); 
        }
    }
    if(e.portal1){ 
        $(".toggle-marcador").removeClass("toggle-marcador");
        let portalnombre = String(e.portal1[1]); 
        let texto = String(e.portal1[2]); 
        let portalclass = L.marker(e.portal1[0],{icon: iconoPortal}).bindTooltip("<div><span class='"+texto+" text-shadow' style='color:#11c4fe'>"+portalnombre+" </span></div>",{permanent: true,direction: texto,interactive:true});
        portalclass.addTo(map);
        $(portalclass._icon).addClass('portal'); 
        portalclass.on('click', function (e) { 
            var tempSubzona = portalnombre.toLowerCase().replace(/ /g,'');
            subzonas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );
            mazmorras.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            ); 
            ciudades.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );  
            islas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );     
        });  
    }
    if(e.portal2){ 
        $(".toggle-marcador").removeClass("toggle-marcador");
        let portalnombre = String(e.portal2[1]); 
        let texto = String(e.portal2[2]); 
        let portal2class = L.marker(e.portal2[0],{icon: iconoPortal}).bindTooltip("<div><span class='"+texto+" text-shadow' style='color:#11c4fe'>"+portalnombre+" </span></div>",{permanent: true,direction: texto,interactive:true});
        portal2class.addTo(map);
        $(portal2class._icon).addClass('portal'); 
        portal2class.on('click', function (e) { 
            var tempSubzona = portalnombre.toLowerCase().replace(/ /g,'');
            subzonas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );
            mazmorras.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            ); 
            ciudades.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );  
            islas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );     
        });  
    }
    if(e.portal3){ 
        $(".toggle-marcador").removeClass("toggle-marcador");
        let portalnombre = String(e.portal3[1]); 
        let texto = String(e.portal3[2]); 
        let portal3class = L.marker(e.portal3[0],{icon: iconoPortal}).bindTooltip("<div><span class='"+texto+" text-shadow' style='color:#11c4fe'>"+portalnombre+" </span></div>",{permanent: true,direction: texto,interactive:true});
        portal3class.addTo(map);
        $(portal3class._icon).addClass('portal'); 
        portal3class.on('click', function (e) { 
            var tempSubzona = portalnombre.toLowerCase().replace(/ /g,'');
            subzonas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );
            mazmorras.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            ); 
            ciudades.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );  
            islas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );     
        });  
    }
    if(e.portal4){ 
        $(".toggle-marcador").removeClass("toggle-marcador");
        let portalnombre = String(e.portal4[1]); 
        let texto = String(e.portal4[2]); 
        let portal4class = L.marker(e.portal4[0],{icon: iconoPortal}).bindTooltip("<div><span class='"+texto+" text-shadow' style='color:#11c4fe'>"+portalnombre+" </span></div>",{permanent: true,direction: texto,interactive:true});
        portal4class.addTo(map);
        $(portal4class._icon).addClass('portal'); 
        portal4class.on('click', function (e) { 
            var tempSubzona = portalnombre.toLowerCase().replace(/ /g,'');
            subzonas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );
            mazmorras.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            ); 
            ciudades.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );  
            islas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );     
        });  
    }
    if(e.portal5){ 
        $(".toggle-marcador").removeClass("toggle-marcador");
        let portalnombre = String(e.portal5[1]); 
        let texto = String(e.portal5[2]); 
        let portal5class = L.marker(e.portal5[0],{icon: iconoPortal}).bindTooltip("<div><span class='"+texto+" text-shadow' style='color:#11c4fe'>"+portalnombre+" </span></div>",{permanent: true,direction: texto,interactive:true});
        portal5class.addTo(map);
        $(portal5class._icon).addClass('portal'); 
        portal5class.on('click', function (e) { 
            var tempSubzona = portalnombre.toLowerCase().replace(/ /g,'');
            subzonas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );
            mazmorras.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            ); 
            ciudades.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );  
            islas.features.forEach(e => 
                { 
                    if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                        cambiarMapa(e.properties, e.geometry.coordinates);
                    }
                }
            );     
        });  
    }
    if(e.subzonamaz){
        for (var i = 0; i < e.subzonamaz.length; i++){
            var nombreSubzona = String(e.subzonamazNombre[i]); 
            var subzonaClass = L.marker(e.subzonamaz[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzona+" </span></div>",{permanent: false,direction: 'right',interactive:true});
            subzonaClass.addTo(map);
            $(subzonaClass._icon).addClass('escaleras'); 
            subzonaClass.on('click', function (e) { 
                var tempSubzona = nombreSubzona.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );
                mazmorras.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );      
            }); 
        }
    }
    if(e.subzonamaz2){
        for (var i = 0; i < e.subzonamaz2.length; i++){
            var nombreSubzona2 = String(e.subzonamazNombre2[i]); 
            var subzonaClass2 = L.marker(e.subzonamaz2[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzona2+" </span></div>",{permanent: false,direction: 'right',interactive:true});
            subzonaClass2.addTo(map);
            $(subzonaClass2._icon).addClass('escaleras'); 
            subzonaClass2.on('click', function (e) { 
                var tempSubzona2 = nombreSubzona2.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona2){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );   
                mazmorras.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona2){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );  
            }); 
        }
    }
    if(e.subzonamaz3){
        for (var i = 0; i < e.subzonamaz3.length; i++){
            var nombreSubzona3 = String(e.subzonamazNombre3[i]); 
            var subzonaClass3 = L.marker(e.subzonamaz3[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzona3+" </span></div>",{permanent: false,direction: 'right',interactive:true});
            
            subzonaClass3.addTo(map);
            $(subzonaClass3._icon).addClass('escaleras'); 
            subzonaClass3.on('click', function (e) { 
                var tempSubzona3 = nombreSubzona3.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona3){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );   
                mazmorras.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona3){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );  
            }); 
        }
    }
    if(e.subzonamaz4){
        for (var i = 0; i < e.subzonamaz4.length; i++){
            var nombreSubzona4 = String(e.subzonamazNombre4[i]); 
            var subzonaClass4 = L.marker(e.subzonamaz4[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzona4+" </span></div>",{permanent: false,direction: 'right',interactive:true});
            
            subzonaClass4.addTo(map);
            $(subzonaClass4._icon).addClass('escaleras'); 
            subzonaClass4.on('click', function (e) { 
                var tempSubzona4 = nombreSubzona4.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona4){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );  
                mazmorras.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona4){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );   
            }); 
        }
    }
    if(e.subzonaisla){
        for (var i = 0; i < e.subzonaisla.length; i++){
            var nombreSubzonaIsla = String(e.subzonaislaNombre[i]);
            var islasubzonaClass = L.marker(e.subzonaisla[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzonaIsla+" </span></div>",{permanent: false,direction: 'right',interactive:true});
             
            islasubzonaClass.addTo(map);
            $(islasubzonaClass._icon).addClass('escaleras'); 
            islasubzonaClass.on('click', function (e) { 
                var islatempSubzona = nombreSubzonaIsla.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == islatempSubzona){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                ); 
                islas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == islatempSubzona){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );       
            }); 
        }
    }
    if(e.subzonaisla2){
        for (var i = 0; i < e.subzonaisla2.length; i++){
            var nombreSubzonaIsla2 = String(e.subzonaislaNombre2[i]);
            var islasubzonaClass2 = L.marker(e.subzonaisla2[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzonaIsla2+" </span></div>",{permanent: false,direction: 'right',interactive:true});
             
            islasubzonaClass2.addTo(map);
            $(islasubzonaClass2._icon).addClass('escaleras'); 
            islasubzonaClass2.on('click', function (e) { 
                var islatempSubzona2 = nombreSubzonaIsla2.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == islatempSubzona2){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                ); 
                islas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == islatempSubzona2){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );       
            }); 
        }
    }
    if(e.subzonaciudad){
        for (var i = 0; i < e.subzonaciudad.length; i++){
            var nombreSubzona = String(e.subzonaciudadNombre[i]);
            var subzonaClass = L.marker(e.subzonaciudad[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzona+" </span></div>",{permanent: false,direction: 'right',interactive:true});
             
            subzonaClass.addTo(map);
            $(subzonaClass._icon).addClass('escaleras'); 
            subzonaClass.on('click', function (e) { 
                var tempSubzona = nombreSubzona.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                ); 
                ciudades.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );       
            }); 
        }
    }
    if(e.subzonaciudad2){
        for (var i = 0; i < e.subzonaciudad2.length; i++){
            var nombreSubzona2 = String(e.subzonaciudadNombre2[i]); 
            var subzonaClass2 = L.marker(e.subzonaciudad2[i],{icon: iconoSubzona}).bindTooltip("<div><span class='descripcioneslabel text-shadow' style='color:#f57b0f'>"+nombreSubzona2+" </span></div>",{permanent: false,direction: 'right',interactive:true});;;
            
            subzonaClass2.addTo(map);
            $(subzonaClass2._icon).addClass('escaleras'); 
            subzonaClass2.on('click', function (e) { 
                var tempSubzona2 = nombreSubzona2.toLowerCase().replace(/ /g,'');
                subzonas.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona2){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                ); 
                ciudades.features.forEach(e => 
                    { 
                        if(e.properties.nombre.toLowerCase().replace(/ /g,'') == tempSubzona2){ 
                            cambiarMapa(e.properties, e.geometry.coordinates);
                        }
                    }
                );       
            }); 
        }
    }
    if(e.vista){ 
        for (var i = 0; i < e.vista.length; i++){
            let vistadescripcion; 
            if(e.vistadescripcion){ 
                vistadescripcion = String(e.vistadescripcion[i]);
            }
            var vistaClass = L.marker(e.vista[i],{icon: iconoVista}).bindTooltip(vistadescripcion,{permanent: true,direction: 'right',interactive:true, ...vistaClase}, vistaClase);
            vistaClass.addTo(map);
            $(vistaClass._icon).addClass('vista');   
        }
    }
    if(e.gesto){ 
        for (var i = 0; i < e.gesto.length; i++){
            let gestodesc = String(e.gestodesc[i]); 
            let gestonombre = String(e.gestonombre[i]);
            var gestoClass = L.marker(e.gesto[i],{icon: iconoGesto}).bindPopup('<div style="text-align:center; width:300px"><h2>Gesto: <b style="color:#5497ac;">'+gestonombre+'</b></h2><p>'+gestodesc+'</p></div>',claserel).addTo(map)
            gestoClass.addTo(map);
            $(gestoClass._icon).addClass('gesto');   
        }
    }
    if(e.puntorojo){ 
        for (var i = 0; i < e.puntorojo.length; i++){
            let puntorojodesc = String(e.puntorojodesc[i]);  
            var puntorojoClass = L.marker(e.puntorojo[i],{icon: puntorojo}).bindPopup('<div style="text-align:center; width:300px"><p>'+puntorojodesc+'</p></div>',claserel).addTo(map)
            puntorojoClass.addTo(map);
            $(puntorojoClass._icon).addClass('puntorojo');   
        }
    }
    if(e.puntonaranja){ 
        for (var i = 0; i < e.puntonaranja.length; i++){
            let puntonaranjadesc = String(e.puntonaranjadesc[i]);  
            var puntonaranjaClass = L.marker(e.puntonaranja[i],{icon: puntonaranja}).bindPopup('<div style="text-align:center; width:300px"><p>'+puntonaranjadesc+'</p></div>',claserel).addTo(map)
            puntonaranjaClass.addTo(map);
            $(puntonaranjaClass._icon).addClass('puntonaranja');   
        }
    }
    if(e.puntoverde){ 
        for (var i = 0; i < e.puntoverde.length; i++){
            let puntoverdedesc = String(e.puntoverdedesc[i]);  
            var puntoverdeClass = L.marker(e.puntoverde[i],{icon: puntoverde}).bindPopup('<div style="text-align:center; width:300px"><p>'+puntoverdedesc+'</p></div>',claserel).addTo(map)
            puntoverdeClass.addTo(map);
            $(puntoverdeClass._icon).addClass('puntoverde');   
        }
    }
    if(e.puntoazul){ 
        for (var i = 0; i < e.puntoazul.length; i++){
            let puntoazuldesc = String(e.puntoazuldesc[i]);   
            var puntoazulClass = L.marker(e.puntoazul[i],{icon: puntoazul}).bindPopup('<div style="text-align:center; width:300px"><p>'+puntoazuldesc+'</p></div>',claserel).addTo(map)
            puntoazulClass.addTo(map);
            $(puntoazulClass._icon).addClass('puntoazul');   
        }
    }
    if(e.puntorosa){ 
        for (var i = 0; i < e.puntorosa.length; i++){
            let puntorosadesc = String(e.puntorosadesc[i]);  
            var puntorosaClass = L.marker(e.puntorosa[i],{icon: puntorosa}).bindPopup('<div style="text-align:center; width:300px"><p>'+puntorosadesc+'</p></div>',claserel).addTo(map)
            puntorosaClass.addTo(map);
            $(puntorosaClass._icon).addClass('puntorosa');   
        }
    }
    if(e.comercianteitinerante){ 
        for (var i = 0; i < e.comercianteitinerante.length; i++){ 
            let comercianteitinerantenombre = String(e.comercianteitinerantenombre[i]);
            var comercianteitineranteClass = L.marker(e.comercianteitinerante[i],{icon: iconoComercianteItinerante}).bindTooltip(comercianteitinerantenombre,{permanent: true,direction: 'right',interactive:true, ...comercianteClase},comercianteClase);
            if (e.comercianteitinerantenombre !== undefined){ 
                var comercianteitinerantehorario = String(e.comercianteitinerantehorario[i]);
                comercianteitineranteClass.bindPopup('<div style="text-align:center; padding: 10px;"><b>Horarios: </b>'+comercianteitinerantehorario+'</div>',claserel).addTo(map);
                
            }  
            comercianteitineranteClass.addTo(map);
            $(comercianteitineranteClass._icon).addClass('comercianteitinerante');   
        }
    }  
    if(e.historiaoculta){ 
        for (var i = 0; i < e.historiaoculta.length; i++){ 
            let historiaocultatitulo = String(e.historiaocultatitulo[i]);
            let historiaodcultadescripcion = String(e.historiaodcultadescripcion[i]);
            var historiaocultaClass = L.marker(e.historiaoculta[i],{icon: iconoHistoriaOculta}).bindTooltip(historiaocultatitulo,{permanent: true,direction: 'right',interactive:true, ...historiaocultaClase}, historiaocultaClase);
            historiaocultaClass.bindPopup(historiaodcultadescripcion,claserel).addTo(map);
            $(historiaocultaClass._icon).addClass('historiaoculta');  
        }
    }
    if(e.historiaadicional){ 
        for (var i = 0; i < e.historiaadicional.length; i++){ 
            let historiaadicionaltitulo = String(e.historiaadicionaltitulo[i]);
            let historiaadicionaldescripcion = String(e.historiaadicionaldescripcion[i]);
            var historiaadicionalClass = L.marker(e.historiaadicional[i],{icon: iconoHistoriaAdicional}).bindTooltip(historiaadicionaltitulo,{permanent: true,direction: 'right',interactive:true, ...historiaadicionalClase}, historiaadicionalClase);
            historiaadicionalClass.bindPopup(historiaadicionaldescripcion,claserel).addTo(map);
            $(historiaadicionalClass._icon).addClass('historiaadicional');   
        }
    }
    if(e.campana){ 
        for (var i = 0; i < e.campana.length; i++){  
            var campanadesc = String(e.campanadesc[i]);
            var campanaClass = L.marker(e.campana[i],{icon: iconoCampana}).addTo(map);
            campanaClass.bindPopup('<div style="display:block; text-align:center; margin:10px 0; min-width:250px">'+campanadesc+'</div>', claserel).addTo(map);
            $(campanaClass._icon).addClass('campana');   
        }
    }
    if(e.monstruos){ 
        for (var i = 0; i < e.monstruos.length; i++){  
            let monstruosdescripcion = String(e.monstruosdescripcion[i]); 
            let monstruosimagen = String(e.monstruosimagen[i]);
            var monstruosClass = L.marker(e.monstruos[i],{icon: iconoMonstruos}).bindTooltip(monstruosdescripcion,{permanent: true,direction: 'right',interactive:true, ...monstruoClase}, monstruoClase);
            monstruosClass.bindPopup(monstruosimagen,claserel).addTo(map);
            $(monstruosClass._icon).addClass('monstruos');   
        }
    }
    
    if(e.jefesdezona){ 
        for (var i = 0; i < e.jefesdezona.length; i++){   
            let jefesdezonaimagen = String(e.jefesdezonaimagen[i]);
            let jefesdezonanombre = String(e.jefesdezonanombre[i]);
            var jefesdezonaClass = L.marker(e.jefesdezona[i],{icon: iconoJefesDeZona}).bindTooltip(jefesdezonanombre,{permanent: false,direction: 'right',interactive:true});
            jefesdezonaClass.bindPopup('<h2 style="text-align:center">'+jefesdezonanombre+'</h2>'+jefesdezonaimagen,claserel).addTo(map);
            $(jefesdezonaClass._icon).addClass('jefesdezona');   
        }
    }  
}


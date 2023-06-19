//ar urlClean = window.location.origin;
var ciudades = {
    "type": "FeatureCollection",
    "name": "ciudades",
    "features": [
        { 
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Norte",
                "title": "berna",
                "img": "berna",
                "nombre": "Berna",
                "mokokos": [
                    [477,873.5],
                    [471,879],
                    [415.25,829.75],
                    [485.75,640.75],
                    [449.5,481.75],
                    [327.5,266.75]
                ],
                "portal1":[[166.5,319.25],["Puerto de Krona"],["left"]],
                "portal2":[[619.779093710009,139.30003589374988],["Territorio de Candaria"],["top"]],
                "afinidad": [[629,734],[645,786.5]],
                "afinidadnombre": [["avele"],["ealyn"]],
                "pasillosecreto": [[465.5,869.5]],
                "pasillosecretodesc": [ 
                    ["Espera a que la bibliotecaria se acerque para poder abrir el pasillo secreto.<br><img class='imgsecreto'src='./imagenes/secretos/berna1.jpg' />"],  
                ],   
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/mHUqzm7SndM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],   
                "vendedor": [[96,427]], 
                "historiaadicional":[[611.6473657263635,794.7880220536794]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>#2 Conclusión</span>"], 
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><b class="rojo-texto">OTRA HISTORIA DE BERNA DEL SUR</b>  
                    Cuando acabes toda la historia principal de <b class="verde-texto">Berna de Sur</b> habla con <b class="afinidad">Ealyn</b>
                     para recibir una <b class="amarillo-texto">cadena de misiones amarillas</b> que desbloqueará la <b class="historiaadicionaltit">Otra historia Nº2</b> de <b class="verde-texto">Berna de Sur</b>.
                     <p>Solo puedes completar 1 misión de la cadena al día.</p>
                    </div>`],
                ],
                "cocinero": [[496,255.5]],
                "cocineronombre":["stellia"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Stelia permite cocinar hasta 6 platos únicos con los ingredientes de Berna del Norte. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Armonía</td><td><div class="guiadiv"><button onclick="panto('berna','386.5,320.5')" class="guia">Berna</button></div></td></tr>
                    <tr><td>Ensalada del guardabosques de Balankar</td><td> <div class="guiadiv"><button onclick="panto('bosquedeparna','278.25,659.25')" class="guia">Bosque de Parna</button></div></td></tr>
                    <tr><td>Sopa de pescado de trasgo</td><td><div class="guiadiv"><button onclick="panto('bosquedeparna','548,509')" class="guia">Bosque de Parna</button></div></td></tr>
                    <tr><td>Plato principal de Proxima (1/2)</td><td><div class="guiadiv"><button onclick="panto('aldearania','132.75,792.125')" class="guia">Aldea Rania</button></div></td></tr>
                    <tr><td>Plato principal de Proxima (2/2)</td><td><div class="guiadiv"><button onclick="panto('bosquebernés','293.625,347')" class="guia">Bosque Bernés</button></div></td></tr> 
                    <tr><td>Guiso de setas de Fesnar</td><td><div class="guiadiv"><button onclick="panto('montañasdefesnar','558.25,343.875')" class="guia">Montañas de Fesnar</button></div> </td></tr>
                    <tr><td>¡Larga vida a la reina!</td><td>Requiere volver a crear todos los platos anteriores.</td></tr>
                    </tbody>
                    </table>
                </div>`],
                "ingrediente":[[386,319.75]],
                "ingredientevendedor": [["Cóctel"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Compra <b>Cócteles</b> hasta conseguir los tres tipos:<br/>
                    <ul><li>Cóctel cuestionable x1</li><li>Cóctel fuerte x1</li><li>Cóctel sabroso x1</li></ul>
                    <p><img src='./imagenes/ingrediente/coctelcuestionable.png' /></p>
                    Una vez obtengas los tres cócteles ya podrás preparar el plato <b>Armonía</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('berna','496,255.25')" class="guia">Stellia</button></div>
                    </div>`]
                ], 
                "historiaoculta":[[638,804]],
                "historiaocultatitulo":[["<span class='historiaocultatit text-shadow'>[3/3] Phels el legendario</span>"]],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('puertodekrona','54.5,395.25')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('puertodekrona','192.75,851.25')" class="guia">Segunda parte</button></div> 
                    <p><img width="200px" src='./imagenes/secretos/legendariophels3.jpg' /></p>
                    </div>`]
                ],
            }, 
            "geometry": { "type": "Point", "coordinates": [136.703125,-123.1875] } 
        }, 
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "title": "puertodekrona",
                "img": "puertodekrona",
                "zona": "Berna del Norte",
                "nombre": "Puerto de Krona",
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/5IXMQbZK5L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "questmorada" : [[-69,231]],
                "questmoradadesc" : [[`
                Para interactuar con la estatua y poder iniciar la misión oculta necesitas el 
                <b class="epico-texto nowrap"><img class='imgitem epico' src='./imagenes/secretos/mapasecreto.png' />tip.name.treasuremap_301</b> que te puede salir matando monstruos en <b class="verde-texto">Berna del Norte</b>.
                <br/><p>Para poder completar la misión necesitas el gesto 
                <a target="_blank" href="https://thelordoftheguides.com/mapa-lostark/?a=ciudad&b=peyto-cubierta&latlng=424,136">Adorable</a>, 
                el gesto Amenazar (Es la recompensa de las <b class="verde-texto">10</b> Fichas de Isla)
                y la <a target="_blank" href="https://thelordoftheguides.com/mapa-lostark/?a=ciudad&b=peyto-cubierta&latlng=287,752">Canción de Resonancia</a></p>
                <div class="guiadiv"><img width="100px" src='./imagenes/secretos/estatuatuki.png' /></div>
                `]],
                "mokokos": [[12.5,319.5],[6.5,312],[-194,338.5],[59.625,778.5],[98.625,548.625],[106.125,548.25],[326.25,765.5],[443.625,547.875],[602.125,329.625],[442,317.125],[198.5,205.625],[150.125,446.5]],
                "pasillosecreto": [[7.5,329.25],[117,547.5]],  
                "portal1":[[414,95.5],["Berna"],["left"]],
                "portal2":[[689,362.5],["Aldea Rania"],["right"]], 
                "pasillosecretodesc": [ 
                    ["Espera delante de la escalera hasta que llegue la niña para poder subir por ella.<br><img class='imgsecreto'src='./imagenes/secretos/krona1.jpg' />"],
                    ["Espera en las escaleras hasta que llegue el niño para desbloquear el salto con la 'G'.<br><img class='imgsecreto'src='./imagenes/secretos/krona2.jpg' />"]  
                ],     
                "comercianteitinerante": [[115,619.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Peter</span><div>"]],
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "historiaoculta":[[55,394.875],[191.5,851]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] Phels el legendario</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[2/3] Phels el legendario</span>"]],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Historia oculta nº 7 de Berna del Norte</h3>  
                    <div class="guiadiv"><button onclick="panto('puertodekrona','192,856')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('berna','606.5,768.5')" class="guia">Tercera parte</button></div>   
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Historia oculta nº 7 de Berna del Norte</h3> 
                    <div class="guiadiv"><button onclick="panto('puertodekrona','52,396')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('berna','606.5,768.5')" class="guia">Tercera parte</button></div>  
                    </div>`]],
                "vista": [[-47.75,431.875]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"]]
                
            }, 
            "geometry": { "type": "Point", "coordinates": [148.125,-118.125] } 
        }
        , 
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Norte",
                "title": "montanasdebalankar",
                "img": "montanasdebalankar",
                "nombre": "Montañas de Balankar",
                "mokokos": [
                    [330.125,27.875],
                    [327.25,37.75],
                    [354.75,44],
                    [359.625,56.125],
                    [457,465.5],
                    [368.625,618.375],
                    [421.25,615.25],
                    [571.625,575.625],
                    [705.5,563.25]
                ], 
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/yT4P-Qp0htk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[185.5,885.5],["Aldea Rania"],["right"]],
                "pasillosecreto": [[340.75,55]],
                "pasillosecretodesc": [ 
                    ["Desciende por las lianas para llegar a las 2 Mokokos.<br><img class='imgsecreto'src='./imagenes/secretos/balankar1.jpg' />"],  
                ],     
                "comercianteitinerante": [[154.125,450.875]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Peter</span><div>"]],
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "vista": [[302.5,559],[258,167.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 10<span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</span></div>"]],
                "monstruos": [[180.25,744.25],[212.5,614],[425,234.625],[625.75,621.875]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-12.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-13.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-15.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-14.png'/></div>"],
                ],
                "jefesdezona": [[331.5,916.25]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Casrick</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/casrick.png'/></div>"]],
                "mazmorra": [[711.625,533.375]],
                "nombreMazmorra": [["Elveria Antigua"]],

                
            }, 
            "geometry": { "type": "Point", "coordinates": [129.1796875,-119.578125] } 
        }, 
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Norte",
                "title": "aldearania",
                "img": "aldearania",
                "nombre": "Aldea Rania",
                "mokokos": [
                    [-396.5,521.5], 
                    [-419.5,553],
                    [-4.5,573.25],
                    [211,677.25], 
                    [-85.75,307.25],
                    [-48.75,231],
                    [-63,229.25],
                    [154.5,349.5]

                ], 
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/D0oxGYjXxX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],     
                "portal1":[[-442,330],["Puerto de Krona"],["bottom"]],
                "portal2":[[460,834],["Bosque de Parna"],["right"]],
                "portal3":[[608,756],["Bosque Bernés"],["top"]],
                "portal4":[[634,496],["Montañas de Fesnar"],["left"]],
                "portal5":[[64,62],["Montañas de Balankar"],["left"]],
                "cancion": [[-339.5,528]],
                "cancionicono": [["cancionderesonancia"]],
                "cancionnombre": [["Canción de Resonancia"]], 
                "canciondesc": [["Toca la <b>Canción de Resonancia</b> para acceder a esta zona del mapa."]],
                "vista": [[-325,314.5],[-18.5,400.5]],
                "afinidad": [[170.25,287],[200,331.25]],
                "afinidadnombre": [["Gideon"],["Anabel"]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1<span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</span></div>"]],
                "ingrediente":[[249.5,705.25],[132.25,792]],
                "ingredientevendedor": [["Licor de aniversario de Berna"],["Tallo y raíz de Proxima"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3</span></div>"]
                ],
				"historiaoculta":[[232.25,691.5],[192.75,287.25]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Obsesión transfronteriza</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left: -153px'>Juramento de caballero</span>"]
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Berna del Norte</h3>
						Interactúa con la carta.
                        <ul style='text-align: center;'><li><img width="200px" src='./imagenes/secretos/obsesion.jpg' /></li></ul>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta  nº 5 de Berna del Norte</h3> 
						Interactúa con el objeto que está entre el banco y la estantería.
                    </div>`],
                ],
                "descripcioningrediente": [
                    [`<div>Compra el <b>Licor</b> al mercader y registralo en el tomo del aventurero de Berna del Norte.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/licor.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div style='text-align:left; margin-bottom:10px' >
                    Compra <b>los dos ingredientes:</b><ul><li><img src='./imagenes/ingrediente/tallodeproxima.png' />
                    <span style='position:fixed; margin:25px 0 0 10px'>Tallo de Proxima</span></li>
                    <li><img src='./imagenes/ingrediente/raizdeproxima.png' /><span style='position:fixed; margin:25px 0 0 10px'> Raíz de Proxima</span></li>
                    </ul><span>
                    Crea la <b>Ensalada del guardabosques de Balankar</b> y la <b>Ensalada de Proxima</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('berna','496,255.25')" class="guia">Stellia</button></div>
                    Y consigue el último ingrediente del <b>Plato principal de Proxima</b> en:
                    <div class="guiadiv"><button onclick="panto('bosquebernés','294,347.5')" class="guia">Bosque Bernés</button></div>
                    </span></div>`],
                ],
                "historiaadicional":[[163.3416664540925,408.000612744638],[0.25,314.5],[-27,352],[-28.75,366.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Imparable [1/6]</span>"],
                    ["<span class='historiaadicionaltit text-shadow'>Imparable [2/6]</span>"], 
                    ["<span class='historiaadicionaltit text-shadow' style='margin-left: -112px'>Imparable [3/6]</span>"], 
                    ["<span class='historiaadicionaltit text-shadow'>Imparable [6/6]</span>"], 
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><b class="rojo-texto">OTRA HISTORIA DE BERNA DEL SUR</b>  
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Tercera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','567.8067452927976,315.3696244092002')" class="guia">Cuarta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','449.01280605345767,251.7300141024109')" class="guia">Quinta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Sexta parte</button></div>
                    Misiones necesarias para desbloquear la <b class="historiaadicionaltit">Otra Historia</b> de Berna del sur.
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','486,496.75')" class="guia">Personas desaparecidas</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','310.5,306.5')" class="guia">Duende Perdido</button></div> 
                    </div>`],
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><b class="rojo-texto">OTRA HISTORIA DE BERNA DEL SUR</b> 
                    <div class="guiadiv"><button onclick="panto('aldearania','160.51323932934628,412.2432534317572')" class="guia">Primera parte</button></div>      
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Tercera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','567.8067452927976,315.3696244092002')" class="guia">Cuarta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','449.01280605345767,251.7300141024109')" class="guia">Quinta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Sexta parte</button></div>
                    Misiones necesarias para desbloquear la <b class="historiaadicionaltit">Otra Historia</b> de Berna del sur.
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','486,496.75')" class="guia">Personas desaparecidas</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','310.5,306.5')" class="guia">Duende Perdido</button></div> 
                    </div>`],
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><b class="rojo-texto">OTRA HISTORIA DE BERNA DEL SUR</b> 
                    <div class="guiadiv"><button onclick="panto('aldearania','160.51323932934628,412.2432534317572')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Segunda parte</button></div>      
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','567.8067452927976,315.3696244092002')" class="guia">Cuarta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','449.01280605345767,251.7300141024109')" class="guia">Quinta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Sexta parte</button></div>
                    Misiones necesarias para desbloquear la <b class="historiaadicionaltit">Otra Historia</b> de Berna del sur.
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','486,496.75')" class="guia">Personas desaparecidas</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','310.5,306.5')" class="guia">Duende Perdido</button></div> 
                    </div>`],
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><b class="rojo-texto">OTRA HISTORIA DE BERNA DEL SUR</b> 
                    <div class="guiadiv"><button onclick="panto('aldearania','160.51323932934628,412.2432534317572')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Tercera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','567.8067452927976,315.3696244092002')" class="guia">Cuarta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','449.01280605345767,251.7300141024109')" class="guia">Quinta parte</button></div>   
                    Misiones necesarias para desbloquear la <b class="historiaadicionaltit">Otra Historia</b> de Berna del sur.
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','486,496.75')" class="guia">Personas desaparecidas</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','310.5,306.5')" class="guia">Duende Perdido</button></div> 
                    </div>`],
                ],
                
            }, 
            "geometry": { "type": "Point", "coordinates": [136.234375,-112.5] } 
        }, 
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Norte",
                "title": "montañasdefesnar",
                "img": "montañasdefesnar",
                "nombre": "Montañas de Fesnar",
                "mokokos": [
                    [-143.25,665],
                    [-141,678.5],
                    [-130,478.5], 
                    [89.25,831.125], 
                    [266.5,875.5], 
                    [232.25,238], 
                    [238,239.5], 
                    [638,466.5],  

                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/QJb_2Vrq_H0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-322,488],["Aldea Rania"],["bottom"]], 
                "pasillosecreto": [[218.625,236.625],[-133.125,671]],
                "pasillosecretodesc": [["Mata a los enemigos cercanos para desbloquear el salto con la 'G'."],["Mata a los enemigos cercanos para desbloquear el salto con la 'G'."]],
                "vista": [[34,406.5],[315,367.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5<span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</span></div>"]],        
                "ingrediente":[[558.125,343.75]],
                "ingredientevendedor": [["Seta venenosa de Fesnar"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"],
                    
                ],
                "descripcioningrediente": [
                    [`<div>Recoge la seta parapoder cocinar el <b>Guiso de setas de Fesnar</b> que prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('berna','496,255.25')" class="guia">Stellia</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/setavenenosa.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ],
                "monstruos": [[341,253],[118,424],[225.5,831.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],                    
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-5.png'/></div>"],                
                ],
                "historiaoculta":[[236,93.25],[260.5,238.75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left: -195px'>[2/3]  El secreto de su majestad</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3]  El secreto de su majestad</span>"]
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('montañasdefesnar','262,240')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('elveriaantigua','18,407')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta  nº 6 de Berna del Norte</h3> 
                    <div class="guiadiv"><button onclick="panto('montañasdefesnar','383,197')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('elveriaantigua','18,407')" class="guia">Tercera parte</button></div>  
                    </div>`],
                ], 
                "historiaadicional":[[308,492.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>El destino de Navegal</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Berna del Norte</h3>
                    Para iniciar la misión mata al <b>Mensajero de Veloran</b> para obtener el objeto:
                    <div style='text-align:center;padding-top: 15px'><img src='./imagenes/objetos/ha_frontera.png'/></div></div>`],
                ],
                
                
            }, 
            "geometry": { "type": "Point", "coordinates": [125.28125,-112.71875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Norte",
                "title": "bosquebernes",
                "img": "bosquebernes",
                "nombre": "Bosque Bernés",
                "mokokos": [
                    [188.5,758.5], 
					[198.25,759],
					[298.25,943.25],
					[305.75,949.5],
					[368.25,833.25],
					[369,846.5],
					[277,506],
					[331.25,391.75],
					[534,515],
					[666.5,450.75]

                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/-LlYZios5jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-38,332],["Aldea Rania"],["bottom"]], 
                "pasillosecreto": [[165.5,735.25]],
                "pasillosecretodesc": [ 
                    ["Mata al monstruo para poder escalar."],  
                ],     
                "vista": [[147.25,443.625],[50.25,706.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8<span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</span></div>"]
                ],            
                "comercianteitinerante": [[64.75,702.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Peter</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "cancion": [[348.5,844.75]],
                "cancionicono": [["minuetodelbosque"]],
                "cancionnombre": [["Minueto del Bosque"]],                 
                "canciondesc": [["Toca la <b>Minueto del Bosque</b> para acceder a esta zona del mapa."]],
                "afinidad": [[121.5,649.25]],
                "afinidadnombre": [["Payla"]],                
                "ingrediente":[[293.75,347]],
                "ingredientevendedor": [["Piel natural de Proxima"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div>Para obtener el material derrota al jefe de zona y así conseguir <b>Piel natural de Proxima</b>, que es uno de los ingredientes para el <b>Plato principal de Proxima</b> que lo prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('berna','496,255.25')" class="guia">Stellia</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/piel.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                ],
                "jefesdezona": [[311.875,345.75]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Proxima</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/proxima.png'/></div>"]],
                "monstruos": [[210.125,128],[433.5,172],[432.125,422.75],[353.5,733.75]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],                    
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],                    
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-8.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-11.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-10.png'/></div>"],                
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-9.png'/></div>"],
                ],
                "historiaoculta":[[112.5,772.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>La última misión</span>"],
                    
                ],
                "historiaodcultadescripcion":[
                    ["<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Berna del Norte</h3>Interactúa con el objeto</div>"],
                    
                ],
                "mazmorra": [[508,767.5]],
                "nombreMazmorra": [["Nido de la Gorgona"]],
                
                
            }, 
            "geometry": { "type": "Point", "coordinates": [135.046875,-107.25] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Norte",
                "title": "bosquedeparna",
                "img": "bosquedeparna",
                "nombre": "Bosque de Parna",
                "mokokos": [
                    [135.5,81.875],
                    [323.625,193.375],  
                    [330.875,194.75], 
                    [253.75,289.625], 
                    [248.625,300.75], 
                    [-5.125,305.625], 
                    [2.625,753.75], 
                    [59.25,786.75], 
                    [149.125,554.875], 
                    [171.25,607], 
                    [283.5,498.5], 
                    [394.5,785.375], 

                ],  
                "portal1":[[-266,592],["Aldea Rania"],["bottom"]], 
                "pasillosecreto": [[314.75,183.75],[299.625,331.25]],
                "pasillosecretodesc": [
                    ["<div>Mata a todos los enemigos de la zona para que un goblin te desbloquee el pasillo.</div>"],
                    ["<div>Mata a todos los enemigos e interactua con la seta.</div>"]],
                "vista": [[186.125,602.125]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4<span></div>"],
                ],            
                "comercianteitinerante": [[255.375,541.125]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Peter</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "afinidad": [[289.125,539.75]],
                "afinidadnombre": [["Aventurera Selfa"]],                
                "ingrediente":[[277.5,659],[540.5,559.25],[553.75,465]],
                "ingredientevendedor": [["Vid"],["Pez atrapado por los goblins"],["Sopa sospechosa"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [2/2]</span></div>"],
                    
                ],
                "descripcioningrediente": [
                    [`<div>Recoge la <b>Vid</b> para preparar la <b>Ensalada del guardabosques de Balankar</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('berna','496,255.25')" class="guia">Stellia</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/vid.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Recoge el <b>Pescado</b> y la:
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','554,463.5')" class="guia">Sopa</button></div>
                    Y prepara la <b>Sopa de pescado goblin</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('berna','496,255.25')" class="guia">Stellia</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/pezgoblin.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Recoge la <b>Sopa desconocida</b> y el:
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','541,559.5')" class="guia">Pescado</button></div>
                    Y prepara la <b>Sopa de pescado goblin</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('berna','496,255.25')" class="guia">Stellia</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/sopasospechosa.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    
                ],
                "monstruos": [[22.75,685.75],[113.5,906.5],[228,450.5],[1.375,254.375],[193,878]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],                    
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],                  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-2.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-3.png'/></div>"],                
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-4.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Berna del Norte</h3><img class='monstruos-img' src='./imagenes/monstruos/bn-2.png'/></div>"],
                ],
                "historiaoculta":[[-79.625,693.875],[-83.625,663.625],[-68.25,633.75],[523.75,405.75],[627.375,442.875],[604.75,683.75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3]  Lección aprendida de los fracasos</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3]  Lección aprendida de los fracasos</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3]  Lección aprendida de los fracasos</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3]  El niño abandonado</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3]  El niño abandonado</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3]  El niño abandonado</span>"],
                    
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','-83.625,663.625')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','-68.25,633.75')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','-79.625,693.875')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','-68.25,633.75')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','-79.625,693.875')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','-83.625,663.625')" class="guia">Segunda parte</button></div>
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','627.375,442.875')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','604.75,683.75')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','523.75,405.75')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','604.75,683.75')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Berna del Norte</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','523.75,405.75')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquedeparna','627.375,442.875')" class="guia">Segunda parte</button></div>
                    </div>`],
                    
                ],
                "historiaadicional":[[281.875,558]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Investigando la aldea de los trasgos</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 1 de Berna del Norte</h3>
                    La misión aparecerá una vez completemos las siguientes misiones de la zona: 
                    <ul>
                    <li><b class="nowrap questamarilla"><img class='imgquest' src='./imagenes/objetos/quest.png' />La causa de su locura</b></li>
                    <li><b class="nowrap questamarilla"><img class='imgquest' src='./imagenes/objetos/quest.png' />El inspector perezoso</b></li>
                    <li><b class="nowrap questamarilla"><img class='imgquest' src='./imagenes/objetos/quest.png' />La visión del anciano</b></li></ul></div>`],
                    
                ],
                
                
            }, 
            "geometry": { "type": "Point", "coordinates": [141.9453125,-110.734375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rethramis",
                "title": "prideholme",
                "img": "prideholme",
                "nombre": "Prideholme",
                "mokokos": [
                    [272,-26.5],
                    [261.125,-25.875],  
                    [259,385.5], 
                    [391.5,284.5], 
                    [379.5,486], 
                    [454.5,533.5], 
                    [261,629.5], 
                    [-99,737.5], 
                    [48,887.5],  

                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/84oX8LzmEE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[372,820],["Loghill"],["top"]], 
                "pasillosecreto": [[351,59.5]],
                "pasillosecretodesc": [
                    ["<div>Atraviesa la pared para encontrar las Mokoko</div>"]
                ],
                "vista": [[389.125,309.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1<span></div>"],
                ],  
                "cocinero": [[43,404]],
                "cocineronombre":["Hely"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Hely permite cocinar hasta 3 platos únicos con los ingredientes de Rethramis.
                    <table class='tabla-recetas'>
                    <thead><tr><th>Plato</th><th style='width: 50%'>Zona</th></tr></thead>
                    <tbody>
                    <tr><td>Pan de trigo de Regria</td><td><div class="guiadiv"><button onclick="panto('prideholme','42,403.5')" class="guia">Hely</button></div></td></tr>
                    <tr><td>Sidra de brote de árbol solar</td><td><div class="guiadiv"><button onclick="panto('fronteraderethramis','258,606')" class="guia">Frontera de Rethramis</button></div></td></tr>
                    <tr><td>Guiso de pájaro blanco lleno de proteínas</td><td><div class="guiadiv"><button onclick="panto('loghill','-276,589')" class="guia">Loghill</button></div> </td></tr> 
                    </tbody>
                    </table>
                </div>`],
                "ingrediente":[[32.75,440.375],[488,469],[-104,807.5]],
                "ingredientevendedor": [["Siera"],["Mercader Veda"],["Saco de trigo gigante"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"],
                ],
                "descripcioningrediente": [
                    [`<div style="text-align:center">
                    <p>Para desbloquear el ingrediente <b>Patata especial</b> tienes que aumentar la <b class="afinidad text-shadow">afinidad</b> con Siera hasta el rango de: <b class="confianza">confianza.</b></p>
                    <img src="./imagenes/ingrediente/patataespecial.png">
                    </div>`],
                    [`<div style='text-align:center'>
                    <p>Habla con Veda y cómprale la <b>Comida casera de Veda típica de Prideholme</b>:</p>
                    <img src="./imagenes/ingrediente/mercaderveda.png" />
                    </div>`],
                    [`<div style='text-align:center'>
                    <p>Con este ingrediente puedes cocinar el <b>Pan de trigo de Regria</b> en la cocinera Hely</p>
                    <img src="./imagenes/ingrediente/sacodetrigo.png" />
                    </div>`]
                ],
                "afinidad": [[513.5,540],[54,448.25]],
                "afinidadnombre": [["Neria"],["Siera"]], 
                "historiaoculta":[[-66.5,725],[153.5,753.5],[133.5,766],[427.875,71.625]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>El gato de Korumba<b class='aventurero'></b></span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] Girasoles para mi amor</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] Girasoles para mi amor</span>"],
                    ["<span class='historiaocultatit text-shadow'>El pasado oculto de Varut</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Rethramis</h3>Interactúa con la tumba para completar la misión</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Rethramis<h3>
                    <div class="guiadiv"><button onclick="panto('loghill','-293.75,216.25')" class="guia">Segunda parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Rethramis</h3>
                    <div class="guiadiv"><button onclick="panto('loghill','-293.75,216.25')" class="guia">Segunda parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Rethramis</h3>La historia oculta esta escondida al otro lado de la pared que hay detrás de la tumba del león.</b></div>`],
                ],
                "historiaadicional":[[60.125,414.625]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Una canción heroica</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    ["<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 2 de Rethramis</h3>Completa la misión principal de <b class='principal'>La losa de las revelaciones</b> para desbloquear esta historia adicional</div>"],
                    
                ],
                
            }, 
            "geometry": { "type": "Point", "coordinates": [106.40625,-191.21875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rethramis",
                "title": "loghill",
                "img": "loghill",
                "nombre": "Loghill",
                "mokokos": [
                    [-402,376],   
                    [-294,312.625],
                    [-235.625,545.125],
                    [-54.375,241.625],
                    [-54.375,232.875],
                    [88.625,578.125],
                    [520.625,203.875],
                    [518,211.625],
                    [406.75,927.5],
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/q1L4MqInMlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-626,316],["Prideholme"],["bottom"]],                 
                "portal2":[[680,632],["Montaña Anguemos"],["top"]], 
                "pasillosecreto": [[-64.75,244.75]],
                "pasillosecretodesc": [["<div>Derrota a todos los enemigos para desbloquear el pasillo secreto</div>"]],
                "comercianteitinerante": [[-38.625,530.875],[377.75,678.75]],
                "comercianteitinerantenombre": [
                    ["<div><span class='descripcioneslabel comerciante text-shadow'>Ben</span><div>"],
                    ["<div><span class='descripcioneslabel comerciante text-shadow'>Ben</span><div>"]],
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"],["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"],],
                "vista": [[-373.5,268.5],[-130.5,634.75],[69,598],[95.5,727.875]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</span></div>"],
                ],
                "cancion": [[473.875,212.25]],
                "cancionicono": [["minuetodelbosque"]],
                "cancionnombre": [["Minueto del Bosque"]], 
                "canciondesc": [["Toca la <b>Minueto del Bosque</b> para acceder a esta zona del mapa."]],
                "historiaoculta":[[-293.375,216.125],[383,711]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[2/3]  Girasoles para mi amor</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3]  Un caballero de reluciente armadura</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'> <h3 class='aventurero'>Historia oculta nº 6 de Rethramis</h3>
                    <div class="guiadiv"><button onclick="panto('prideholme','141.75,760.125')" class="guia">Primera parte y 3</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'> <h3 class='aventurero'>Historia oculta nº 7 de Rethramis</h3> 
                    <div class="guiadiv"><button onclick="panto('montañaanguemos','-110.5,462.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('fronteraderethramis','-388,790')" class="guia">Tercera parte</button></div> 
                    </div>`]
                ],
                "ingrediente":[[-276.75,602.75]],
                "ingredientevendedor": [["Masa vomitada"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                ],
                "descripcioningrediente": [
                    [`<div>
                    Ingrediente necesario para cocinar el <b>Guiso de pájaro blanco lleno de proteínas</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('prideholme','42,403.5')" class="guia">Hely</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/masavomitada.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ],
				"monstruos": [[-90,582],[466,664]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],                    
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-2.png'/></div>"],    
                ],
                "mazmorra": [[233.625,834.75]],
                "nombreMazmorra": [["Cueva de los Garra Venenosa"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [110.1875,-180.28125] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rethramis",
                "title": "fronteraderethramis",
                "img": "fronteraderethramis",
                "nombre": "Frontera de Rethramis", 
                "mokokos": [
                    [-779.5,501],
                    [-708,379.5],
                    [-525.5,413.5],
                    [-89.75,538.75],
                    [-89.25,550.5],
                    [-78,790.75],
                    [108.875,798.375],
                    [59,-22],
                    [54.5,-37.5],
                    [24.5,-61.5],
                ],
                "youtube":[[324,-498]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/wCn1YiX-K7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-880,478],["Montaña Anguemos"],["bottom"]],                 
                "portal2":[[664,530],["Colina de Saland"],["top"]], 
                "pasillosecreto": [[-178,89]],
                "pasillosecretodesc": [["<div>Derrota a todos los enemigos para desbloquear el pasillo secreto</div>"]],
                "gesto": [[-251,662]],
                "gestonombre": [["Dolor"]],
                "gestodesc": [
                    [`Alcanza el nivel 3 de reputación en el encargo de Una: <b><img class='imgitem' src='./imagenes/objetos/una.png' /> Restos de la plaga</b>
                    <ul style='text-align:center'><li><img src='./imagenes/gestos/dolor.png'/></li></ul>
                    `]],
                "comercianteitinerante": [[-0.375,630.5]],
                "comercianteitinerantenombre": [
                    ["<div><span class='descripcioneslabel comerciante text-shadow'>Ben</span><div>"],
                ],
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "vista": [[-38.875,571.125],[197.375,130.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</span></div>"],
                ], 
                "historiaoculta":[[-520.5,208],[24,411],[-393,792.625]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Quemado por amor</span>"],
                    ["<span class='historiaocultatit text-shadow'>El sepulturero maldito</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3]  Un caballero de reluciente armadura</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Rethramis</h3> Interactúa con el objeto para completar la historia oculta</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Rethramis</h3> Interactúa con el objeto para completar la historia oculta</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Rethramis</h3>  
                    <div class="guiadiv"><button onclick="panto('loghill','386,718')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('montañaanguemos','-108,464')" class="guia">Segunda parte</button></div>  
                    </div>`], 
                ],
                "historiaadicional":[[150.5,180.75]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Una tragedia labrada en piedra</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    ["<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 1 de Rethramis</h3>Para iniciar la misión mata a enemigos de la zona para obtener el siguiente objeto:<div style='text-align:center;padding-top: 15px'><img src='./imagenes/objetos/ha_frontera.png'/></div></div>"],
                    
                ],
                "ingrediente":[[250.5,601],[-167,432]],
                "ingredientevendedor": [["Brote de árbol solar"],["Aceite de flores de Regria"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 2</span></div>"], 
                ],
                "descripcioningrediente": [
                    [`<div>
                    Ingrediente necesario para cocinar <b>Sidra de brote de árbol solar</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('prideholme','42,403.5')" class="guia">Hely</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/brotedeárbolsolar.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div><br/>Ingrediente para el plato nº 2 de Rethramis</h3>Utiliza el objeto para agregarlo al <b class='aventurero'>Tomo del aventurero</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/aceitedeflores.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul>
                    </div>`],
                ],
                "jefesdezona": [[-187,268.5]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Rudric</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/rudric.png'/></div>"]],
                "monstruos": [[-255,487.5],[-78.5,334],[191.375,525.25],[69.29646455628166,390.32294321497426],[-74.24621202458748,255.26554800834364]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],    
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],               
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-8.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-6.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-6.png'/></div>"],     
                ],
                "mazmorra": [[463.5,290.5]],
                "nombreMazmorra": [["Cola de Aguiloss"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [120.171875,-176.65625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rethramis",
                "title": "montanaanguemos",
                "img": "montanaanguemos",
                "nombre": "Montaña Anguemos",
                "mokokos": [
                    [114,380],
                    [233.375,783.875],
                    [451,491.5],
                    [309.5,147.75],
                    [649.5,523], 
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/6VGf6QrptKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "vista": [[482.25,587.25]],
                "portal1":[[-143,500],["Loghill"],["bottom"]], 
                "portal2":[[675,399],["Frontera de Rethramis"],["top"]], 
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</span></div>"], 
                ], 
                "historiaoculta":[[134.875,335.75],[-108,463.5],],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>La verdad de un borracho</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] Un caballero de reluciente armadura</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Rethramis</h3>
                    Interactúa con el objeto para completar la historia oculta.</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Rethramis</h3>  
                    <div class="guiadiv"><button onclick="panto('loghill','384,714')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('fronteraderethramis','-392,796')" class="guia">Tercera parte</button></div>  
                    </div>`], 
                ],
                "comercianteitinerante": [[100,314]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Ben</span><div>"]],
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "monstruos": [[73.875,451.625],[209,144],[256,873.5],[538,751]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],                      
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-4.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-14.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-5.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Rethramis</h3><img class='monstruos-img' src='./imagenes/monstruos/rr-15.png'/></div>"],     
                ],
                "mazmorra": [[665.75,927]],
                "nombreMazmorra": [["Cabeza de Aguiloss"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [122.09375,-188.5] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yudia",
                "title": "colinadeozhorn",
                "img": "colinadeozhorn",
                "nombre": "Colina de Ozhorn",
                "mokokos": [
                    [350.25,795.25],
                    [20,515],
                    [162.75,429.875],
                    [181.875,555],
                    [198.875,222.375],
                    [297.5,91],
                    [470.5,378.125],
                    [509.375,281.375],
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/gIySoxr972c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[151,895],["Colina de Saland"],["bottom"]], 
                "portal2":[[720.5,452.5],["Monte Zagoras"],["top"]],
                "vista": [[549,376.375]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</span></div>"], 
                ], 
                "historiaoculta":[[38.75,465.375]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>El espejismo</span>"], 
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Yudia</h3>
                    Interactúa con el objeto para completar la historia oculta</div>`],  
                ], 
                "historiaadicional":[[364,315.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Fuente de demonios</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    ["<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 2 de Yudia</h3>Para desbloquear la misión debes completar primero la misión de la historia principal: <b>Armel y el demonio</b></div>"],
                    
                ],
                "comercianteitinerante": [[337,497.875]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Lucas</span><div>"]],  
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "ingrediente":[[74.375,583.75]],
                "ingredientevendedor": [
                    ["Cofre de comida encaviana antiguo"]
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left: -58px'>Nº 5</span></div>"], 
                ],
                "descripcioningrediente": [
                    [`<div>
                    Ingrediente necesario para cocinar <b>Caja de comida salada</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('colinadesaland','399.25,499.25')" class="guia">Hella</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidaencaviana.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ],
                "monstruos": [
                    [377,748],
                    [96,621],
                    [10.5,433],
                    [145.375,229.625],
                    [355.875,153.25],
                    [378.75,396.25],
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left: -52px'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],                      
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-10.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-11.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-5.png'/></div>"],     
                ],
                "afinidad": [[268,936]],
                "afinidadnombre": [["Morina"]], 
                "obramaestra": [[122.5,517.5]],
                "obramaestradesc": [[`<p>Alcanza el nivel 3 de reputación en el encargo de Una <b class="verde-texto"><img class='imgitem' src='./imagenes/objetos/una.png' /> Las ruinas malditas</b>.</p>
                `]],
                "obramaestranum": [["Nº 9"]],
                "mazmorra": [[247,34]],
                "nombreMazmorra": [["Cueva Sapira"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [127.78125,-180.25] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yudia",
                "title": "colinadesaland",
                "img": "colinadesaland",
                "nombre": "Colina de Saland",
                "mokokos": [
                    [-205.5,148.5],
                    [-329.75,656.25],
                    [-174.25,410.125],
                    [-170.75,377.25],
                    [-81.125,210.875],
                    [390.25,486.25],
                    [422.25,814.5],
                    [505.25,403.75],
                    [682.75,570],
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/UwDZM3vNWdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-474,304],["Frontera de Rethramis"],["bottom"]], 
                "portal2":[[450,275.5],["Colina de Ozhorn"],["left"]], 
                "vista": [[-58.5,422.25],[358.125,537.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</span></div>"], 
                ],  
                "historiaadicional":[[217.75,588]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Eliminando a los bandidos</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    ["<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 1 de Yudia</h3>La misión que está en el punto marcado es una <b>cadena de misiones</b> que debes completar previamente, la primera misión se inicia en este mismo punto. <br>La primera misión es: Suministros para su supervivencia.<br>Y la segunda: Mirando al infinito </div>"],
                    
                ],
                "jefesdezona": [[395.375,583]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Gigante de sal</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/gigantedesal.png'/></div>"]],
                "comercianteitinerante": [[-128.75,484.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Lucas</span><div>"]], 
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "ingrediente":[[445.125,491.25],[545.75,747.75],[-187.75,584.5],[343.75,626.5],[-404,299]],
                "ingredientevendedor": [
                    ["Ingrediente de comida ritual"],["Heces de lombriz de sal"],["Cristal de sal"],["Bicho de sal a la parrilla con sal"],["Cecina mungka natural"]
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 1</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 2</span></div>"], 
                ],
                "descripcioningrediente": [
                    [`<div>Ingrediente necesario para cocinar <b>Comida del ritual de invocación de lluvia</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('colinadesaland','399.25,499.25')" class="guia">Hella</button></div>
					Alcanza el rango de <b>Confianza</b> con <b class="afinidad">Trueno</b> para conseguir el ingrediente.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidaritual.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Ingrediente necesario para cocinar <b>Café a las heces de lombriz</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('colinadesaland','399.25,499.25')" class="guia">Hella</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/heceslombriz.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
					[`<div>Hay una pequeña probabilidad de que este objeto se convierta en una <b class="legendario-texto nowrap"><img src='./imagenes/ingrediente/piruleta.png' class="imgitem legendario"/>Galleta Salada</b> al usarse.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cristal.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
					[`<div>Añade el <b>Bicho de sal a la parrilla con sal</b> al tomo del aventurero de Rethramis.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/bicho.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
					[`<div>Añade la <b>Cecina mungka natural</b> al tomo del aventurero de Rethramis.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cecina.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ],
                "cocinero": [[398.5,499.25]],
                "cocineronombre":["Hella"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Hella permite cocinar hasta 4 platos únicos con los ingredientes de Yudia.
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Café a las heces de lombriz</td><td><div class="guiadiv"><button onclick="panto('colinadesaland','545.5,748.5')" class="guia">Colina de Saland</button></div></td></tr>
                    <tr><td>Comida del ritual de invocación de lluvia</td><td><div class="guiadiv"><button onclick="panto('colinadesaland','443.25,491.5')" class="guia">Colina de Saland</button></div></td></tr>
                    <tr><td>Caja de comida salada</td><td>
                    <div class="guiadiv"><button onclick="panto('colinadeozhorn','73.5,582.5')" class="guia">Colina de Ozhorn</button></div> 
                    </td></tr>
                    <tr><td>Vino cavatiano añejo</td>
					<td>
                    <div class="guiadiv"><button onclick="panto('cuevasapira','-142,808')" class="guia">Cueva Sapira</button></div> 
                    </td>
					</tr>
					<tr><td>Galleta salada</td>
					<td>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','-188,589')" class="guia">Colina de Saland</button></div> 
                    </td>
					</tr>
                    </tbody>
                    </table>
                </div>`],
                "monstruos": [
                    [-321,257],
                    [-124,209],
                    [294.75,523],
                    [623.5,502],
                    [521.25,748], 
                    [691.5,597.5],
                    [99.5,639.5]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],                      
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-55px'>Nº 8</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],     
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],     
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-4.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-2.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-3.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-8.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-3.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Yudia</h3><img class='monstruos-img' src='./imagenes/monstruos/y-3.png'/></div>"],     
                ],
                "historiaoculta":[
                    [-455.25,295.125],
                    [-157.75,347],
                    [118.5,436.75],
                    [349.75,645.75],
                    [373.75,471.75],
                    [377.25,512.25],
                    [389,503],
                    [435.5,504.25],
                    [328.25,382.75],
                    [370.5,292.5],
                    [418,378.25],
                    [479.25,318.5],
                    [490,423.25],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[3/3]  Pasar la eternidad juntos</span>"],
                    ["<span class='historiaocultatit text-shadow'>La predicción siniestra</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3]  Pasar la eternidad juntos</span>"],
                    ["<span class='historiaocultatit text-shadow'>Puntería perfecta</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3]  Pasar la eternidad juntos</span>"],
                    ["<span class='historiaocultatit text-shadow'>El origen del nombre</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3]  Caramelo de sal solar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3]  Caramelo de sal solar</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-140px'>[4/4]  Canción Tododo</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-140px'>[3/4]  Canción Tododo</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-173px'>[1/3]  Caramelo de sal solar</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-140px'>[2/4] Canción Tododo</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/4]  Canción Tododo</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','365.5,469.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','120.5,438')" class="guia">Segunda parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Yudia</h3>Interactúa con el objeto</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Yudia</h3> 
                    <div class="guiadiv"><button onclick="panto('colinadesaland','365.5,469.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','-455.5,295.5')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Yudia</h3>Interactúa con el objeto</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','120.5,438')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','-455.5,295.5')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Yudia</h3>Interactúa con el objeto</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','412,373')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','430.5,507.5')" class="guia">Segunda parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Yudia</h3> 
                    <div class="guiadiv"><button onclick="panto('colinadesaland','412,373')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','389,503.5')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','479,425')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','478,319')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','369,292')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','479,425')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','478,319')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','329,383')" class="guia">Cuarta parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','428.25,507.75')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','389.75,503.75')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','479,425')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','369,292')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','329,383')" class="guia">Cuarta parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Yudia</h3>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','478,319')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','369,292')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('colinadesaland','329,383')" class="guia">Cuarta parte</button></div>
                    </div>`]
                ],
                "afinidad": [[427.25,487.5]],
                "afinidadnombre": [["trueno"]],
                "mazmorra": [[235.375,382]],
                "nombreMazmorra": [["Ruinas de Morai"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [129.6875,-185.65625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Occidental",
                "title": "monasteriodemedrick",
                "img": "monasteriodemedrick",
                "nombre": "Monasterio de Medrick",
                "mokokos": [
                    [-57,519.5],
                    [34,540.25],
                    [118.25,594],
                    [208.5,676.25],
                    [245,600.75],
                    [65,354.5],
                    [73.25,350],
                    [286.75,388.25],
                    [292.75,399],
                    [423.25,164],
                    [390.375,661.5],
                    [329.75,686.375],
                    [686.75,540.125],
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/mtrwObgeAlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-164,506],["Lakebar"],["bottom"]], 
                "portal2":[[694,502],["Bosque Bilbrin"],["top"]], 
                "vista": [[457.75,278.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</span></div>"],  
                ],  
                "pasillosecreto": [[264.625,382.125]],
                "historiaoculta":[[204,538.75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[2/4] El material del que está hecho un héroe</span>"], 
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('lakebar','283.5,586.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquebilbrin','-10,288')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('llanurashostiles','502,565')" class="guia">Cuarta parte</button></div> 
                    </div>`],  
                ],  
                "comercianteitinerante": [[175.75,495.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Malone</span><div>"]],  
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "cancion": [[58.625,340.5]],
                "cancionicono": [["cancionderesonancia"]],
                "cancionnombre": [["Canción de Resonancia"]],
                "canciondesc": [["Toca la Canción de Resonancia enfrente de la estatua para desplazarla."]],
                "ingrediente":[[164.25,497],[196.75,506]],
                "ingredientevendedor": [
                    ["Plantapelo"],["Receta especial de arroz con huevo"]
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4</span></div>"], 
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Plantapelo a Malone</b> y espera 10min hasta poder crear el plato <b>Agente anticaída de pelo maduro</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('lakebar','335.5,592.75')" class="guia">Heron</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/plantapelo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Recoge la receta para cocinar <b>Arroz con huevo de Effen</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('lakebar','335.5,592.75')" class="guia">Heron</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/recetaespecial.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                ],
                "monstruos": [
                    [229.5,356],
                    [587,595], 
                    [367.5,651.5]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-3.png'/></div>"], 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-3.png'/></div>"], 
                ], 
            }, 
            "geometry": { "type": "Point", "coordinates": [135.15625,-183.625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Occidental",
                "title": "bosquebilbrin",
                "img": "bosquebilbrin",
                "nombre": "Bosque Bilbrin",
                "mokokos": [
                    [538.125,682.5], 
                    [601.5,512.25],
                    [433.875,245.5],
                    [-110.75,437.5],
                    [-153.5,596],
                    [-33,688.75],
                    [159.75,482.25],
                    [172.5,424.75],
                    [318.75,568],
                ],
                "portal1":[[-300,454],["Monasterio de Medrick"],["bottom"]], 
                "portal2":[[157.5,886.5],["Llanuras Hostiles"],["right"]], 
                "vista": [[6.5,731]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</span></div>"],  
                ],  
                "historiaoculta":[[29,750.5],[-3.25,287.25],[31.5,270.625],[186.5,211]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[2/2] Carta perdida</span>"], 
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-273px'>[3/4] El material del que está hecho un héroe</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/2] Carta perdida</span>"],
                    ["<span class='historiaocultatit text-shadow'>El tigre de Bilbrin</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('bosquebilbrin','32,271')" class="guia">Primera parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Luterania Occidental</h3> 
                    <div class="guiadiv"><button onclick="panto('lakebar','283.5,586.5')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('monasteriodemedrick','204.5,539')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('llanurashostiles','502,565')" class="guia">Cuarta parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('bosquebilbrin','29,750.5')" class="guia">Segunda parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Luterania Occidental</h3>
                    Interactúa con los papeles del suelo.
                    </div>`],  
                ],  
                "comercianteitinerante": [[184.25,636.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Malone</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],                
                "ingrediente":[[176.75,631.25],[-156.875,639.25],[182.75,200.25]],
                "ingredientevendedor": [
                    ["Plantapelo"],
                    ["Vesícula de un oso comehombres"],
                    ["Tentáculo de Rovlen"],
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 6</span></div>"], 
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Plantapelo a Malone</b> y espera 10min hasta poder crear el plato <b>Agente anticaída de pelo maduro</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('lakebar','335.5,592.75')" class="guia">Heron</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/plantapelo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Ingrediente para cocinar <b>Sartén de vesícula de oso</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('lakebar','335.5,592.75')" class="guia">Heron</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/vesiculadeunoso.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>El tentáculo se transformará en el plato <b>Tentáculo crudo que se contonea</b> a los 30minutos de obtenerlo, añádelo al tomo del aventurero de Luterania Occidental.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/tentaculo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                ],
                "jefesdezona": [[166.5,205]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Rovlen</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/rovlen.png'/></div>"]],
                "monstruos": [
                    [-126,438.5],
                    [0.5,677.5], 
                    [282,732.5], 
                    [639.5,503.25], 
                    [450,291],
                    [322,252]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-15.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-5.png'/></div>"], 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-14.png'/></div>"], 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-6.png'/></div>"], 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-6.png'/></div>"], 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-6.png'/></div>"], 
                ], 
                "mazmorra": [[106,53]],
                "nombreMazmorra": [["Mina martillo gris"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [136.6875,-178.5625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Occidental",
                "title": "lakebar",
                "img": "lakebar",
                "nombre": "Lakebar",
                "mokokos": [
                    [155,824.5], 
                    [-95.25,595.5],
                    [-73.25,505.25],
                    [-12,353.5],
                    [79.75,444.75],
                    [87.75,333.75],
                    [93.75,332.25],
                    [267.75,409.25],
                    [510.75,453.75],
                    [408.25,715.5],
                    [404.5,729.5],
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/s3lVFmRX19U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[282,938],["Monte Zagoras"],["right"]], 
                "portal2":[[710,533],["Monasterio de Medrick"],["top"]],
                "vista": [[383.5,717]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</span></div>"],  
                ],  
                "cancion": [[106.5,321]],
                "cancionicono": [["minuetodelbosque"]],
                "cancionnombre": [["Minueto del bosque"]], 
                "canciondesc": [["Toca la <b>Minueto del bosque</b> para acceder a esta zona del mapa."]],
                "pasillosecreto": [[489.5,611]],
                "pasillosecretodesc":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/s3lVFmRX19U?start=89" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "historiaoculta":[[282.625,587]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-273px'>[1/4] El material del que está hecho un héroe</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('monasteriodemedrick','204.5,539')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquebilbrin','-10,288')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('llanurashostiles','502,565')" class="guia">Cuarta parte</button></div> 
                    </div>`],  
                ],  
                "comercianteitinerante": [[361.375,658]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Malone</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[349.625,653.375],[278.5,598.5]],
                "ingredientevendedor": [
                    ["Plantapelo"],
                    ["Guiso de pescado de agua dulce de Lakebar"], 
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 2</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Plantapelo a Malone</b> y espera 10min hasta poder crear el plato <b>Agente anticaída de pelo maduro</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('lakebar','335.5,592.75')" class="guia">Heron</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/plantapelo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Cómprale al mercader el <b>Guiso de pescado de agua dulce de Lakebar</b> y añádelo al tomo del aventurero de Luterania Occidental.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/guisopescado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                ],
                "historiaadicional":[[81.25,456.875]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>El vendedor ambulante de Luterania</span>"],
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 2 de Luterania Occidental</h3>
                    Para poder iniciar esta misión debes completar la misión de historia de <b>El espíritu de Luterania</b> préviamente.</div>`],
                ],
                "afinidad": [[306,565.75]],
                "afinidadnombre": [["artesano urr"]],
                "cocinero": [[333.5,588.75]],
                "cocineronombre":["Heron"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Heron permite cocinar hasta 4 platos únicos con los ingredientes de Luterania Occidental.
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Agente anticaída de pelo maduro</td><td>Compra el ingrediente al mercader ambulante <b>Malone</b>.</td></tr>
                    <tr><td>Sartén de vesícula de oso</td><td>
                    <div class="guiadiv"><button onclick="panto('bosquebilbrin','-158,636')" class="guia">Bosque Bilbrin</button></div> 
                    </td></tr>
                    <tr><td>Receta especial de arroz con huevo</td><td> 
                    <div class="guiadiv"><button onclick="panto('monasteriodemedrick','196,505.75')" class="guia">Monasterio de Medrick</button></div>  
                    </td></tr>
                    <tr><td>Ron del minero</td><td>
                    <div class="guiadiv"><button onclick="panto('minamartillogris','-44,832')" class="guia">Mina martillo gris</button></div>   
                    </td></tr>
                    </tbody>
                    </table>
                </div>`], 
                "monstruos": [
                    [-41,605],
                    [259,92],  
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-10.png'/></div>"], 
                ], 
                "mazmorra": [[217,65]],
                "nombreMazmorra": [["Cresta Reluciente"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [139.15625,-187.96875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Occidental",
                "title": "llanurashostiles",
                "img": "llanurashostiles",
                "nombre": "Llanuras Hostiles",
                "mokokos": [
                    [302.5,207.5],
                    [441,261.5],
                    [575,233.5],
                    [297,438.5],
                    [256,597.125],
                    [496.25,933.75],
                    [647.5,680],  
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/CQm4XivqGBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[459,29],["Bosque Bilbrin"],["left"]], 
                "portal2":[[672,738],["Castillo de Luterania"],["top"]],
                "vista": [[510.5,526.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</span></div>"],  
                ],    
                "historiaoculta":[[503.375,564.75],[434,716]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[4/4] El material del que está hecho un héroe</span>"],
                    ["<span class='historiaocultatit text-shadow'>Las orejas de asno del regente</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('lakebar','-282.75,587.125')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('monasteriodemedrick','204.5,539')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquebilbrin','-10,288')" class="guia">Tercera parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Luterania Occidental</h3>
                    Interactúa con el objeto al borde del mapa.
                    </div>`],   
                ],  
                "comercianteitinerante": [[241.5,486.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Malone</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[249.25,485]],
                "ingredientevendedor": [
                    ["Plantapelo"],
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Plantapelo a Malone</b> y espera 10min hasta poder crear el plato <b>Agente anticaída de pelo maduro</b> en el cocinero: 
                    <div class="guiadiv"><button onclick="panto('lakebar','335.5,592.75')" class="guia">Heron</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/plantapelo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ], 
                "monstruos": [
                    [415.5,747],  
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-11.png'/></div>"],
                ],  
            }, 
            "geometry": { "type": "Point", "coordinates": [143.34375,-182.34375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Occidental",
                "title": "montezagoras",
                "img": "montezagoras",
                "nombre": "Monte Zagoras",
                "mokokos": [
                    [43.5,554.5], 
                    [-66,488.5],
                    [-108,442.5],
                    [-110.5,434.5],
                    [-115.5,442],
                    [114.5,303],
                    [227,130],
                    [300,910],
                    [463.5,732.5],
                    [479,351.875],
                    [474.625,355.625],
                    [469.25,348.125], 
                ],
                "portal1":[[186,32],["Lakebar"],["left"]], 
                "portal2":[[-156,538],["Colina de Ozhorn"],["bottom"]],
                "vista": [[243.875,531.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</span></div>"],  
                ],    
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/ZPHx75oyjN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "historiaoculta":[[548.75,696.25],[376.75,445.5],[329.75,387.75],[385.25,416.75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[3/3] Historia del fantasma del pozo</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] Historia del fantasma del pozo</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] Historia del fantasma del pozo</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left: -152px'>Juramento de caballero</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('montezagoras','377,446')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('montezagoras','329,388.5')" class="guia">Segunda parte</button></div>
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('montezagoras','329,388.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('montezagoras','549.5,697')" class="guia">Tercera parte</button></div>
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Luterania Occidental</h3>
                    <div class="guiadiv"><button onclick="panto('montezagoras','377,446')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('montezagoras','549.5,697')" class="guia">Tercera parte</button></div>
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Luterania Occidental</h3>
                    Interactúa con el objeto que esta al lado del barril.
                    </div>`],   
                ], 
                "historiaadicional":[[357.625,413]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Corazón grabado en la lápida</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 1 de Luterania Occidental</h3>
                    Para poder iniciar la misión es necesario completar la misión previa <b>La declaración</b> de la historia principal.</div></div>`],
                ],  
                "comercianteitinerante": [[360.75,392.625]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Malone</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[348.875,393],[-5.25,615]],
                "ingredientevendedor": [
                    ["Plantapelo"],
                    ["Barbacoa de jabalí"]
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7</span></div>"],  
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 1</span></div>"],
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Plantapelo a Malone</b> y espera 10min hasta poder crear el plato <b>Agente anticaída de pelo maduro</b> en el cocinero: 
                    <div class="guiadiv"><button onclick="panto('lakebar','335.5,592.75')" class="guia">Heron</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/plantapelo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Interactúa con la barbacoa para recoger el plato, haz clic en el objeto para añadirlo al tomo del aventurero.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/bbqjabali.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ], 
                "pasillosecreto": [
                    [-89,450.5],[488.25,345.25],
                ],
                "pasillosecretodesc": [ 
                    ["<div>Destruye la barricada para poder acceder a las 3 Mokoko.</div>"], 
                    ["<div>Acércate al precipicio para poder descender, utiliza la acción 'G'.</div>"], 
                ],
                "monstruos": [
                    [118,474],[59,608],[459.5,791],[318.5,641.5],[259,615]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-2.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-8.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Luterania Occidental</h3><img class='monstruos-img' src='./imagenes/monstruos/lo-1.png'/></div>"],
                ],  
            }, 
            "geometry": { "type": "Point", "coordinates": [135.9375,-192.6875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "llanuradyorika",
                "img": "llanuradyorika",
                "nombre": "Llanura Dyorika",
                "mokokos": [
                    [28.5,725.5], 
                    [-146,525],
                    [-114,512],
                    [-50.5,387],
                    [357.5,783],
                    [285,606.5],
                    [700,587],
                    [353.5,371],
                    [277.75,430],
                    [187.5,312.25],
                    [308.5,54.75], 
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/Df1DK23cyMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[72,188],["Castillo de Luterania"],["left"]], 
                "portal2":[[230,856.5],["Colina Brillasol"],["right"]],
                "vista": [[283.125,784]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</span></div>"],  
                ],   
                "afinidad": [[387.5,563.25],[298,346.25],[136,557]],
                "afinidadnombre": [["aprendiz de herrero turner"],["norin nahun"],["elia nahun"]],    
                "comercianteitinerante": [[169.5,675]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Morris</span><div>"]], 
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "ingrediente":[[166.125,690.125]],
                "ingredientevendedor": [
                    ["Carne madurada"], 
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 5</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Carne madurada a Morris</b> y espera 10min hasta poder crear el plato <b>Filete T-bone de Thirain</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/carnemadurada.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                ],  
                "monstruos": [
                    [354,748.25],[670.5,530]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left: -50px'>Nº 1</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left: -50px'>Nº 3</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-3.png'/></div>"],
                ],  
            }, 
            "geometry": { "type": "Point", "coordinates": [144.53125,-176.046875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "colinabrillasol",
                "img": "colinabrillasol",
                "nombre": "Colina Brillasol",
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/Kx2OHiQB4VQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [-203,715],  
                    [-59,889.5], 
                    [-22.5,507.5], 
                    [40,562], 
                    [97.5,409.5], 
                    [154.5,318], 
                    [-126,314], 
                    [40,66.5], 
                    [358.5,643], 
                    [227,466],
                ],
                "portal1":[[236,858],["Huerto Floreciente"],["right"]], 
                "portal2":[[-342,548],["Llanura Dyorika"],["bottom"]],
                "vista": [[289,513.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</span></div>"],  
                ],   
                "comercianteitinerante": [[199.5,504]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Morris</span><div>"]], 
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "ingrediente":[[188,502]], 
                "ingredientevendedor": [
                    ["Carne madurada"], 
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 5</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Carne madurada a Morris</b> y espera 10min hasta poder crear el plato <b>Filete T-bone de Thirain</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/carnemadurada.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                ], 
                "historiaoculta":[[132.25,58.75]],
                "historiaocultatitulo":[["<span class='historiaocultatit text-shadow'>Rituales sagrados de los cosechadores</span>"]],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Luterania Oriental</h3>
                    Interactúa con los papeles que hay encima de la mesa.
                    </div>`]],  
                "monstruos": [
                    [-160,354.5]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left: -50px'>Nº 2</span></div>"],  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-2.png'/></div>"],
                ],  
                "jefesdezona": [[535.5,529.5]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Wili-wili</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/wili-wili.png'/></div>"]],
                "mazmorra": [[421,780]],
                "nombreMazmorra": [["Bosque Lastra"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [148.90625,-172.09375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "castillodeluterania",
                "img": "castillodeluterania",
                "nombre": "Castillo de Luterania",
                "mokokos": [
                    [-98.5,716],
                    [-31.5,533],
                    [-238.5,549],
                    [179.5,156],
                    [173.5,160],
                    [368.75,206],
                    [363.25,200.25],
                    [346,188.25],
                    [664,308.25],
                    [-4375.422685901165,678]
                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/h5gQhWF4esM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokotip": [[34,-256]], 
                "mokokotipnum": [["<b class='rainbow'>Mokoko extra</b>"]],
                "mokokotipdesc": [
                    [`Haz clic en el icono de las <b class="nowrap"><img src="./imagenes/iconos/escaleras.png" class="imgitem"/>Escaleras</b> para encontrar la última Mokoko.
                    `], 
                ], 
                "portal1":[[-238,744],["Llanuras Hostiles"],["bottom"]], 
                "portal2":[[-122,868],["Llanura Dyorika"],["right"]],
                "gesto": [[17.5,313]],
                "gestonombre": [["Educación"]],
                "gestodesc": [
                    [`Completa la misión<b class="nowrap questamarilla"><img class='imgquest' src='./imagenes/objetos/quest.png' />Este libro engancha</b> que te dará <b>Boris el lector empedernido</b>.
                    <p>Complétala para desbloquear la misión <b class="nowrap questamarilla"><img class='imgquest' src='./imagenes/objetos/quest.png' />Anhelos reales</b> que te dará:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','7,480')" class="guia">Vivian</button></div> 
                    Completa la misión para recibir el gesto.
                    <ul style='text-align:center'><li><img src='./imagenes/gestos/educacion.png'/></li></ul>
                    `]],
                "pasillosecreto": [
                    [377.5,214],[194.25,149.25]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Atraviesa la gran puerta de madera.</div>"], 
                    ["<div>Pasa entre los dos pilares.</div>"],
                ],
                "skillpoint": [[453.5,186.5]],
                "skillpointnpc": [["Recuerdos de Luterania"]],
                "skillpointguia": [[`<p>Habla con Thirain para iniciar la cadena de misiones.</p>
                <div class='guiadiv'>
                <a class='guia' target='_blank' href='https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/'>Guía completa</a>
                </div>`]],   
                "afinidad": [[7,482],[-0.5,449.5],[445.125,175.125]],
                "afinidadnombre": [["vivian"],["neria2"],["thirain"]], 
                "ingrediente":[
                    [-213.5,556.5],
                    [-148,517.5],
                    [-192.5,536],
                    [-149.75,498.25],
                    [389.5,438.5],
                ],
                "ingredientevendedor": [
                    ["Solomillo"], 
                    ["Cortesías luteranas"], 
                    ["Vino centenario de la fundación"],
                    ["Migas de pan"],
                    ["Dulce arcoíris polvoriento"],
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3 - [2/2]</span></div>"],
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 2</span></div>"],
                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left:-56px'>Nº 6</span></div>"],
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 1</span></div>"],
                ],
                "descripcioningrediente": [
                    [`<div>Compra el <b>Solomillo</b> al mercader para tener uno de los ingredientes del <b>Plato principal de Luterania</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/solomillo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Compra las <b>Cortesías luteranas</b> al mercader para tener uno de los ingredientes del <b>Plato principal de Luterania</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cortesias.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Compra el <b>Vino centenario de la fundación</b> al mercader y añádelo al tomo del aventurero de Luterania Oriental.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/vinocentenario.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],  
                    [`<div style="text-align:left">Compra las <b>Migas de pan</b> al mercader y sigue los pasos para conseguir a la <b>Doncella donut</b>:<br>
                    1) Utiliza las migas de pan hasta recibir <b>Sirviente donut</b>.<br>
                    2) Utiliza el sirviente donut hasta recibir <b>Mayordomo donut</b>.<br>
                    3) Utiliza el mayordomo donut hasta recibir <b>Doncella donut</b>.<br>
                    4) Una vez tengas la <b>Doncella donut</b>, añádela al tomo del aventurero de Luterania Oriental.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/migasdepan.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Interactúa con el objeto, cercano al banco, para recibir el <b>Dulce arcoíris polvoriento</b> y agrégalo al tomo del aventurero de Luterania Oriental.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/carameloarcoiris.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],  
                    
                ],
                "cocinero": [[-105.5,498]],
                "cocineronombre":["Hyde"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Hyde permite cocinar hasta 4 platos únicos con los ingredientes de Luterania Oriental.
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Guiso gourmet de marisco</td><td>Los dos ingredientes están en:
                    <div class="guiadiv"><button onclick="panto('costadecroconys','278,544.5')" class="guia">Costa de Croconys</button></div> 
                    </td></tr>
                    <tr><td>Filete T-bone de Thirain</td><td>Compra el ingrediente al mercader ambulante <b>Morris</b>.</td></tr>
                    <tr><td>Plato principal de Luterania</td><td> 
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-214,556.75')" class="guia">Castillo de Luterania [1/2]</button></div> 
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-147.5,517.5')" class="guia">Castillo de Luterania [2/2]</button></div> 
                    </td></tr>
                    <tr><td>Helado derritiéndose [1/2]</td><td>
                    <div class="guiadiv"><button onclick="panto('puertodeloleaje','296,492')" class="guia">Puerto del oleaje</button></div>
                    </td></tr>
                    <tr><td>Helado derritiéndose [2/2]</td><td>
                    Compra el <b>Café al chocolate caliente</b> al mercader ambulante <b>Burt</b>. <br>
                    Una vez crees el <b>Helado derritiéndose</b> deja que pasen unos 5 minutos conseguir el <b>Helado derretido</b>.</td></tr>
                    </tbody>
                    </table>
                </div>`], 
                "historiaoculta":[[427,247.5]],
                "historiaocultatitulo":[["<span class='historiaocultatit text-shadow'>El secreto de la criada</span>"]],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Luterania Oriental</h3>
                    Interactúa con el objeto que hay entre el mueble y el jarrón.
                    </div>`]],    
                "subzonaciudad":[[232,79.5]],
                "subzonaciudadNombre":[["Sótano de la catedral de Kadan"]]
            }, 
            "geometry": { "type": "Point", "coordinates": [148.4296875,-185.6640625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "dominiodeborea",
                "img": "dominiodeborea",
                "nombre": "Dominio de Borea",
                "mokokos": [
                    [144,695], 
                    [-35,298.5],
                    [97,390.5],
                    [60.5,122],
                    [266,261],
                    [287,200],
                    [429,227.5],
                    [328,420],
                    [327.625,535.375],
                    [322.25,535.375],
                    [563.25,421],
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/VyR6K9a80aI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-204,390],["Terraza de Leyar"],["bottom"]], 
                "portal2":[[420,832],["Puerto del Oleaje"],["right"]],
                "vista": [[445.625,246]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</span></div>"],  
                ],  
                "cancion":[[325.875,560]],
                "cancionicono": [["minuetodelbosque"]],
                "cancionnombre": [["Minueto del Bosque"]],                 
                "canciondesc": [["Toca la <b>Minueto del Bosque</b> para acceder a esta zona del mapa."]],
                "comercianteitinerante": [[29,555.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Burt</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[
                    [16,558], 
                ],
                "ingredientevendedor": [
                    ["Café al chocolate caliente"],  
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7 - [2/2]</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div>Compra el <b>Café al chocolate caliente</b> al mercader para tener uno de los ingredientes del <b>Helado derritiéndose</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <div class="guiadiv"><button onclick="panto('puertodeloleaje','296,492')" class="guia">Primer ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cafe.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                   
                ],  
                "monstruos": [[207,81],[510,151.5],[522.5,333],[523.5,623.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-11.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-12.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-14.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-13.png'/></div>"],
                ],    
            }, 
            "geometry": { "type": "Point", "coordinates": [154.25,-176.71875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "capillablackrose",
                "img": "capillablackrose",
                "nombre": "Capilla Blackrose",
                "mokokos": [
                    [195,714], 
                    [27.75,266.25],
                    [152.125,285.375],
                    [145.125,274.125],
                    [166.75,247.25],
                    [188,131],
                    [204,98.5],
                    [255.75,67.5],
                    [276.5,325.5],
                    [375,257],
                    [555,79.5],
                    [450.5,381.5],
                    [666,554.5],
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/GvgXE_GTfew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-128,438],["Huerto Floreciente"],["bottom"]], 
                "portal2":[[332,936],["Terraza de Leyar"],["right"]],
                "pasillosecreto": [[140.25,283],[146.375,173.375]],
                "pasillosecretodesc": [
                    ["<div>Entra en el almacén.</div>"],
                    ["<div>Entra por la casa destruida.</div>"]
                ],
                "vista": [[709,551.25]], 
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"]], 
                "comercianteitinerante": [[33.25,648.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Burt</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[
                    [41,646.5], 
                ],
                "ingredientevendedor": [
                    ["Café al chocolate caliente"],  
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7 - [2/2]</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div>Compra el <b>Café al chocolate caliente</b> al mercader para tener uno de los ingredientes del <b>Helado derritiéndose</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <div class="guiadiv"><button onclick="panto('puertodeloleaje','296,492')" class="guia">Primer ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cafe.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                   
                ],
                "historiaoculta":[[270,363.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>El nombre de Blackrose</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Luterania oriental</h3>
                    El objeto se encuentra entre unos arbustos.
                    </div>`],
                ], 
                "historiaadicional":[[74,655.75]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Tu salvador</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 2 de Luterania oriental</h3>
                    Para desbloquear esta misión antes tienes que completar la misión de la historia principal <b><img class="imgitem" src='./imagenes/objetos/mainquest1.png'/> El viento permanece, los sueños se desvanecen</b> y después completar la cadena de misiones
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','450.5,187.5')" class="guia">Recuerdos de Luterania</button></div>
                    Al completar la cadena de misiones dirígete a este punto y completa todas las misiones, para finalmente, completar la misión: <b>Tu salvador</b>.
                    </div>`],
                ],  
                "monstruos": [[268.75,798.75],[514.25,123.25]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-5.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-6.png'/></div>"],
                ],    
                "mazmorra": [[390.25,47.25]],
                "nombreMazmorra": [["Sótano de Blackrose"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [155.875,-182.40625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "huertofloreciente",
                "img": "huertofloreciente",
                "nombre": "Huerto Floreciente",
                "mokokos": [
                    [-98.5,452.5],
                    [50,340],
                    [132,533.5],
                    [159,819],
                    [250.75,901],
                    [620.75,487.5],
                    [528.75,439.5],
                    [334.25,247],
                    [255,306.25],
                    [232.75,90], 
                ], 
                "portal1":[[-162,510],["Colina Brillasol"],["bottom"]], 
                "portal2":[[710,410],["Capilla Blackrose"],["top"]],
                "questtit": [["Quest"]], 
                "quest": [
                    [199.5,518.5]
                ],
                "questdesc": [ 
                    ["<div><b class='questamarilla'>El secreto del huerto de rambután dulce.</b></div>"],  
                ],  
                "vista": [[524.25,315]], 
                "vistadescripcion": [["<div><span class='descripcioneslabel text-shadow vistas' style='margin-left:-59px'>Nº 3</div>"]],
                "comercianteitinerante": [[491.375,726.625]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Morris</span><div>"]],  
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "vendedor": [[352.5,41.75]],
                "gesto": [[371.75,67]],
                "gestonombre": [["Risa"]],
                "gestodesc": [
                    [`Cómprale el <b class="nowrap"><img class='imgitem' src='./imagenes/objetos/gesto.png' /> Gesto: Risa</b> a la vendedora <b>Naphta</b>.
                    <ul style='text-align:center'><li><img src='./imagenes/gestos/risa.png'/></li></ul>
                    `]],
                "ingrediente":[[482.25,726.125]],
                "ingredientevendedor": [
                    ["Carne madurada"], 
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 5</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div><b>Cómprale la Carne madurada a Morris</b> y espera 10min hasta poder crear el plato <b>Filete T-bone de Thirain</b> en el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/carnemadurada.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                ],  
                "historiaoculta":[[22,262.25],[30,363.5],[91.25,378.75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left: -137px'>[3/3] Los perales y él</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] Los perales y él</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] Los perales y él</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Luterania oriental</h3>
                    <div class="guiadiv"><button onclick="panto('huertofloreciente','30,368')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('huertofloreciente','91.25,378.75')" class="guia">Segunda parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Luterania oriental</h3>
                    <div class="guiadiv"><button onclick="panto('huertofloreciente','91.25,378.75')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('huertofloreciente','22,262.25')" class="guia">Tercera parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Luterania oriental</h3>
                    <div class="guiadiv"><button onclick="panto('huertofloreciente','30,368')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('huertofloreciente','22,262.25')" class="guia">Tercera parte</button></div>
                    </div>`],
                ],    
                "monstruos": [[73.5,327]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-52px'>Nº 4</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-4.png'/></div>"],
                ],     
            }, 
            "geometry": { "type": "Point", "coordinates": [156.0625,-189.875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "costadecroconys",
                "img": "costadecroconys",
                "nombre": "Costa de Croconys",
                "mokokos": [
                    [120.75,632.25],
                    [-53,305],
                    [-33.5,229.25],
                    [-107.5,162],
                    [31.5,104],
                    [96,267],
                    [122,133.5],
                    [250,482.5],
                    [301.5,399.5],
                    [236,652.5],
                    [494,683],
                    [638,682.5],
                    [535.5,503],
                    [488.5,486.625],
                    [273.5,290],
                    [278.25,282.75],
                    [343.25,303.5],
                    [351,293.5], 
                ],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/aDHrwxKBx38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[94,40],["Puerto del Oleaje"],["left"]],  
                "pasillosecreto": [[263.5,277],[309,328.5]],
                "pasillosecretodesc": [
                    ["<div>Escala por las lianas</div>"],
                    ["<div>Rompe la barricada</div>"]], 
                "vista": [[152.5,169.5],[354.5,677],[428.5,494]], 
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 10</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</div>"],
            ],
                "comercianteitinerante": [[87,98.75],[423.75,691.75]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Burt</span><div>"],["<div><span class='descripcioneslabel comerciante text-shadow'>Burt</span><div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"],["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[
                    [75,104.5],
                    [424.875,698.625],
                    [306.75,557.5],
                    [252.5,540.5],
                ],
                "ingredientevendedor": [
                    ["Café al chocolate caliente"],  
                    ["Café al chocolate caliente"],
                    ["Marisco de cueva rocosa"],
                    ["Almeja de cueva rocosa"],
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7 - [2/2]</span></div>"],   
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 7 - [2/2]</span></div>"],
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4 - [1/2]</span></div>"],
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4 - [2/2]</span></div>"],
                ],
                "descripcioningrediente": [
                    [`<div>Compra el <b>Café al chocolate caliente</b> al mercader para tener uno de los ingredientes del <b>Helado derritiéndose</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div> 
                    <div class="guiadiv"><button onclick="panto('puertodeloleaje','296,492')" class="guia">Primer ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cafe.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Compra el <b>Café al chocolate caliente</b> al mercader para tener uno de los ingredientes del <b>Helado derritiéndose</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <div class="guiadiv"><button onclick="panto('puertodeloleaje','296,492')" class="guia">Primer ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cafe.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Recoge la almeja para tener uno de los ingredientes del <b>Guiso gourmet de marisco</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <div class="guiadiv"><button onclick="panto('costadecroconys','254.5,540.5')" class="guia">Segundo ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/almeja.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div>Recoge el marisco para tener uno de los ingredientes del <b>Guiso gourmet de marisco</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <div class="guiadiv"><button onclick="panto('costadecroconys','308.5,556')" class="guia">Primer ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/gamba.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                   
                ],      
                "monstruos": [[136.5,266]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-4.png'/></div>"],
                ],  
                "mazmorra": [[710.5,805]],
                "nombreMazmorra": [["Gruta de llanto tormentoso"]],   
            }, 
            "geometry": { "type": "Point", "coordinates": [160.65625,-166.09375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "terrazadeleyar",
                "img": "terrazadeleyar",
                "nombre": "Terraza de Leyar",
                "youtube":[[190,-312]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/l05wn7lR4T8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],     
                "mokokos": [
                    [-53.5,552.5], 
                    [193.5,714.5],
                    [-344,333.5],
                    [-58,36.5],
                    [324,321],
                    [346.5,460],
                    [558,224],
                    [474,107.5],
                ],
                "portal1":[[-35,44],["Capilla Blackrose"],["left"]],  
                "portal2":[[378,916],["Dominio de Borea"],["top"]],  
                "pasillosecreto": [[511.25,172.5]],  
                "pasillosecretodesc": [[`<iframe width="560" height="315" src="https://www.youtube.com/embed/l05wn7lR4T8?start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "vista": [[462,110],[101,134.25]], 
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"],
            ],
                "comercianteitinerante": [[-214,341.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Burt</span><div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[
                    [-199.5,332.5], 
                ],
                "ingredientevendedor": [
                    ["Café al chocolate caliente"],   
                ],
                "ingredientetooltip": [
                    [`<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left:-90px'>Nº 7 - [2/2]</span>
                    </div>`],    
                ],
                "descripcioningrediente": [
                    [`<div>Compra el <b>Café al chocolate caliente</b> al mercader para tener uno de los ingredientes del <b>Helado derritiéndose</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <div class="guiadiv"><button onclick="panto('puertodeloleaje','296,492')" class="guia">Primer ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cafe.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                   
                ],      
                "monstruos": [[-75,671],[155,462],[349,315],[526,541],],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-8.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Luterania Oriental</h3><img class='monstruos-img' src='./imagenes/monstruos/lor-9.png'/></div>"],
                ], 
                "historiaoculta":[[156.5,172.25],[407,338.5],[501,220.5],[520,314.5],[651,343]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>El camino de un genio</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/4]  Los orígenes de los puruu</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/4]  Los orígenes de los puruu</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/4]  Los orígenes de los puruu</span>"],
                    ["<span class='historiaocultatit text-shadow'>[4/4]  Los orígenes de los puruu</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Luterania oriental</h3>Interactúa con la tumba.</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Luterania oriental</h3>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','504.5,220.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','521.5,314.5')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','654,343')" class="guia">Cuarta parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Luterania oriental</h3>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','406.5,338.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','521.5,314.5')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','654,343')" class="guia">Cuarta parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Luterania oriental</h3>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','504.5,220.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','406.5,338.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','654,343')" class="guia">Cuarta parte</button></div>
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Luterania oriental</h3>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','504.5,220.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','406.5,338.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','521.5,314.5')" class="guia">Tercera parte</button></div>
                    </div>`],
                ], 
                "historiaadicional":[[-181,418.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>La sabiduría del hueso</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    ["<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Otra historia nº 1 de Luterania oriental</h3>Para poder acceder a la misión interactua con la escotilla de madera del suelo.</div></div>"],
                ],  
            }, 
            "geometry": { "type": "Point", "coordinates": [161.25,-178.9375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Luterania Oriental",
                "title": "puertodeloleaje",
                "img": "puertodeloleaje",
                "nombre": "Puerto del Oleaje",
                "mokokos": [
                    [306.5,527.5], 
                    [421,562.5],
                    [333,307.5],
                    [373.5,406.5],
                    [520,301.5],
                    [599.125,223.25], 
                ],
                "portal1":[[168,370],["Costa de Croconys"],["bottom"]],  
                "portal2":[[308,220],["Dominio de Borea"],["left"]],   
                "afinidad": [[360,334.75],[445.5,354.75]],
                "afinidadnombre": [["neria4"],["cals"]],
                "ingrediente":[
                    [296.25,489.5], 
                ],
                "ingredientevendedor": [
                    ["Helado"],   
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left:-90px'>Nº 7 - [1/2]</span></div>"],    
                ],
                "descripcioningrediente": [
                    [`<div>Compra el <b>Helado</b> al mercader para tener uno de los ingredientes del <b>Helado derritiéndose</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('castillodeluterania','-106,498.5')" class="guia">Hyde</button></div>
                    <div class="guiadiv"><button onclick="panto('terrazadeleyar','-205,338')" class="guia">Segundo ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/helado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/MwkK-YuVpWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],     
                "historiaoculta":[[568,71]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-101px'>Vida nobiliaria</span>"], 
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Luterania oriental</h3>Interactúa con el montón de libros.</div>`],
                ], 
                "obramaestra": [[512,442]],
                "obramaestradesc": [[`<p>Alcanza el nivel 3 de reputación en el encargo de Una <b class="verde-texto"><img class='imgitem' src='./imagenes/objetos/una.png' /> Agente de Moronto</b>.</p>
                `]],
                "obramaestranum": [["Nº 10"]],   
            }, 
            "geometry": { "type": "Point", "coordinates": [162.21875,-174.09375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Tortoyk",
                "title": "bosquemarino",
                "img": "bosquemarino",
                "nombre": "Bosque Marino",
                "vista": [[423,891],[487,96]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"],
                ],
                "portal1":[[496,72],["Aldea Mokoko"],["top"]],   
                "ingrediente":[[341,151]],
                "ingredientevendedor": [["Panal"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],
                    
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Ingrediente necesario para cocinar el plato <b>Gelatina real dulce-dulce</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeamokoko','355,325')" class="guia">Supisu</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/honey.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`]],
                "comercianteitinerante": [[200.5,552.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Oliver</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "historiaoculta":[[-106,382.25],[700,614.25]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-353px'>[1/4]  El camino para convertirse en un experto en narunis</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/2]  El Locarok móvil de Cowl</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Tortoyk</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','-513.75,331.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','-164,668')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','565,448')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Tortoyk</h3> 
                    <div class="guiadiv"><button onclick="panto('estepaaltocielo','-559,481')" class="guia">Segunda parte</button></div>  
                    </div>`]
                ],   
                "historiaadicional":[[270,748],[461,177]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Un poco de gracias</span>"],
                    ["<span class='historiaadicionaltit text-shadow'>¿Quién era?</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Tortoyk</h3>
                    Antes de poder recibir la misión debes completar la mision <b><img class="imgitem" src='./imagenes/objetos/mainquest.png'/>No desesperes</b> de la historia principal de Tortoyk.</div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Tortoyk</h3>
                    Antes de poder recibir la misión debes completar la mision <b><img class="imgitem" src='./imagenes/objetos/mainquest.png'/>Jugoso y rojo</b> de la historia principal de Tortoyk.</div>`],
                ],
                "monstruos": [[94,770],[461,599],[355.625,79.375]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-58px'>Nº 12</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-2.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-12.png'/></div>"],
                ],
            }, 
            "geometry": { "type": "Point", "coordinates": [182.2734375,-155.03125] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Tortoyk",
                "title": "aldeamokoko",
                "img": "aldeamokoko",
                "nombre": "Aldea Mokoko",
                "corazondegigante": [[655.5,308]],
                "portal1":[[84,244],["Bosque Marino"],["left"]],
                "portal2":[[344,884],["Bosque de Aguadulce"],["right"]],
                "corazondegigantedesc": [[`<p>Empieza la misión <b class="questmorada"><img class='imgquest' src='./imagenes/objetos/questmorada.png' />Llegando a una encrucijada</b> que te dará <b class="afinidad text-shadow">Totoma</b> cuando entregues el arca de Tortoyk a Beatrice.  
                </p><p>Tendrás que completar un total de 4 misiones para recibir el Corazón de gigante.</p>
                <p>El <b>segundo corazón</b> te lo dará <b class="afinidad text-shadow">Beatrice</b> cuando tu nivel de <b class="afinidad text-shadow">afinidad</b> sea de: <b class="confianza">Amigable.</b>
                </p>`]],
                "corazondegigantenum": [["<div>Nº 1</div>"]],
                "afinidad": [[303.5,332],[659.75,276],[686,298.75]],
                "afinidadnombre": [["daku"],["mokamoka"],["totoma"]], 
                "gesto": [[675.5,241.5]],
                "gestonombre": [["Alegría"]],
                "gestodesc": [
                    [`Alcanza el rango de <b>Confianza</b> con <b class="afinidad">Mokamoka</b> para conseguir el gesto.
                    <ul style='text-align:center'><li><img src='./imagenes/gestos/alegria.png'/></li></ul>
                    `]],
                "ingrediente":[[365,567],[344.625,574.375],[163.75,632.25]],
                "ingredientevendedor": [["Huevo mokoko hervido"],["Anacardo"],["Miel, dulce miel"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Compra el huevo al mercader, después de 1 minuto se convertira en el plato único <b>Huevo pasado por agua huevito-huevito</b>.
                    <b>No olvides utilizarlo</b> para agregarlo al tomo del aventurero de Tortoyk <b>o se pudrirá</b>.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/huevo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div style='text-align:center'>Compra unos 20+ anacardos al mercader para crear <b>Polvo de anacardo grueso</b> y <b>Polvo de anacardo fino</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeamokoko','355,325')" class="guia">Supisu</button></div></div>
                    <br>Necesitarás <b>x10 Polvo de anacardo grueso</b> y <b>x2 Polvo de anacardo fino</b> para crear el plato único <b>Batido de anacardo-anacardo</b>.
                    Ten en cuenta que la probabilidad de obtener <b>Polvo de anacardo fino</b> es aproximadamente del 10%.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/anacardo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                    [`<div style='text-align:center'>Compra la miel al mercader para cocinar el plato único <b>Tónico de salud de miel pum-pum</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeamokoko','355,325')" class="guia">Supisu</button></div> </div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/mielmiel.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ],
                "cocinero": [[355,326]],
                "cocineronombre":["Supisu"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Supisu permite cocinar hasta 5 platos únicos con los ingredientes de Tortoyk. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Batido de anacardo-anacardo</td><td><div class="guiadiv"><button onclick="panto('aldeamokoko','345,575')" class="guia">Aldea Mokoko</button></div></td></tr>
                    <tr><td>Concha frita cruji-cruje</td><td>
                    <div class="guiadiv"><button onclick="panto('elcorazóndetortoyk','443.5,456.5')" class="guia">El corazón de tortoyk</button></div>  
                    </td></tr>
                    <tr><td>Gelatina real dulce-dulce</td><td>
                    <div class="guiadiv"><button onclick="panto('bosquemarino','342,150')" class="guia">Bosque Marino</button></div>  
                    </td></tr>
                    <tr><td>Mitad y mitad, mojar y servir</td><td>
                    <div class="guiadiv"><button onclick="panto('estepaaltocielo','365,567')" class="guia">Estepa Altocielo</button></div>   
                    </td></tr>
                    <tr><td>Tónico de salud de miel pum-pum</td><td><div class="guiadiv"><button onclick="panto('aldeamokoko','162.5,632.5')" class="guia">Aldea Mokoko</button></div></td></tr> 
                    </tbody>
                    </table>
                </div>`],
                "historiaoculta":[[277,309]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-171px'>[2/3] Rey pirata a la espera</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Tortoyk</h3>
                    <div class="guiadiv"><button onclick="panto('estepaaltocielo','-279,286')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('guaridadepiratas','571,591')" class="guia">Tercera parte</button></div>  
                    </div>`], 
                ],     
                "obramaestra": [[699.5,336.5]],
                "obramaestradesc": [[`<p>Recoge 950 semillas Mokoko para recibir la <b class="obramaestra">Obra Maestra</b></p>`]],
                "obramaestranum": [["Nº 32"]], 
            }, 
            "geometry": { "type": "Point", "coordinates": [183.7734375,-153.734375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Tortoyk",
                "title": "estepaaltocielo",
                "img": "estepaaltocielo",
                "nombre": "Estepa Altocielo",
                "portal1":[[-1196,592],["Bosque de Aguadulce"],["bottom"]],
                "portal2":[[636,538],["Bosque de los Gigantes"],["top"]],
                "vista": [[17.5,247]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"]
                ], 
                "ingrediente":[[-229,706.75]],
                "ingredientevendedor": [["Cuenco para mojar y servir roto"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div style='text-align:center'>Acaba con el jefe de zona <b>Caspiel</b> para recibir el ingrediente para cocinar el plato <b>Mitad y mitad, mojar y servir</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeamokoko','355,325')" class="guia">Supisu</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/platoroto.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ],
                "historiaoculta":[[-559,481],[-482.5,716.75],[-254.5,879.5],[-164,668],[107,270.5],[-279,286],],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[2/2] El Locarok móvil de Cowl</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] La forma del amor</span>"],
                    ["<span class='historiaocultatit text-shadow'>¡El monstruo horripilante!</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/4] El camino para convertirse en un experto en narunis</span>"],
                    ["<span class='historiaocultatit text-shadow'>El alma del aventurero</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-171px'>[1/3] Rey pirata a la espera</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Tortoyk</h3>
                    <div class="guiadiv"><button onclick="panto('bosquemarino','700,614.25')" class="guia">Primera parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Tortoyk</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','98,348')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','-206,614')" class="guia">Segunda parte</button></div>   
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Tortoyk</h3>
                    Interactúa con el objeto.
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Tortoyk</h3> 
                    <div class="guiadiv"><button onclick="panto('bosquemarino','-106,382.25')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','565,448')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquedelosgigantes','-513.75,331.5')" class="guia">Cuarta parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Tortoyk</h3>
                    Interactúa con el objeto del fango.
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Tortoyk</h3>
                    <div class="guiadiv"><button onclick="panto('aldeamokoko','277,309')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('guaridadepiratas','571,591')" class="guia">Tercera parte</button></div>
                    </div>`],
                ],
                "jefesdezona": [[-242,702]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Caspiel</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/caspiel.png'/></div>"]], 
                "monstruos": [[-1047.5,562.5],[-857,187],[-491.25,680.75],[-15,709],[380,395]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-52px'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-4.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-5.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-8.png'/></div>"],
                ],    
            }, 
            "geometry": { "type": "Point", "coordinates": [184.9296875,-151.6171875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Tortoyk",
                "title": "bosquedelosgigantes",
                "img": "bosquedelosgigantes",
                "nombre": "Bosque de los Gigantes",
                "portal1":[[-1008,352],["Estepa Altocielo"],["bottom"]], 
                "vista": [[30.875,545.375]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"]
                ],  
                "historiaoculta":[[-513.75,331.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-350px'>[4/4] El camino para convertirse en un experto en narunis</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Tortoyk</h3> 
                    <div class="guiadiv"><button onclick="panto('bosquemarino','-106,382.25')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','565,448')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('estepaaltocielo','-164,668')" class="guia">Tercera parte</button></div>  
                    </div>`],
                ],
                "comercianteitinerante": [[-317.75,473.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Oliver</span></div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "monstruos": [[-551,621],[-328,800],[586,663]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-11.png'/></div>"],
                ], 
                "mazmorra": [[353.5,743.5]],
                "nombreMazmorra": [["El corazón de Tortoyk"]],   
            }, 
            "geometry": { "type": "Point", "coordinates": [186.09375,-150.109375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Tortoyk",
                "title": "bosquedeaguadulce",
                "img": "bosquedeaguadulce",
                "nombre": "Bosque de Aguadulce",
                "portal1":[[-294,434],["Aldea Mokoko"],["left"]],
                "portal2":[[199,49],["Estepa Altocielo"],["left"]], 
                "vista": [[-326.75,455.375],[667.25,512]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"]
                ],
                "comercianteitinerante": [[143.5,466]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Oliver</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],   
                "historiaoculta":[[565,448],[93,319],[-206.75,601.75],[-319,444]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-350px'>[2/4] El camino para convertirse en un experto en narunis</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] La forma del amor</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] La forma del amor</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-196px'>El gran código de los mokoko</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Tortoyk</h3>
                    <div class="guiadiv"><button onclick="panto('bosquemarino','-106,382.25')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('estepaaltocielo','-164,668')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquedelosgigantes','-513.75,331.5')" class="guia">Cuarta parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Tortoyk</h3> 
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','-214,606')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('estepaaltocielo','-482.5,716.75')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Tortoyk</h3>
                    <div class="guiadiv"><button onclick="panto('bosquedeaguadulce','90,320')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('estepaaltocielo','-482.5,716.75')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Tortoyk</h3>
                    Interactúa con el objeto que se encuentra entre las plantas nada más entrar en el Bosque de Aguadulce, detrás de unas monedas. 
                    </div>`],
                ],
                "ingrediente":[[-7.75,651.75]],
                "ingredientevendedor": [["Paquete de regalo mokoko lleno-lleno"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"],
                    
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Recoge el objeto y agrégalo al tomo del aventurero de Tortoyk.<br>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/regalo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`]
                ],  
                "monstruos": [[-16.5,775],[78,635],[196,439.5],[266.5,431.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-3.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-13.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-15.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Tortoyk</h3><img class='monstruos-img' src='./imagenes/monstruos/tt-14.png'/></div>"],
                ], 
                "mazmorra": [[692.25,518]],
                "nombreMazmorra": [["Guarida de piratas"]],   
            }, 
            "geometry": { "type": "Point", "coordinates": [186.6875,-153.578125] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Anikka",
                "title": "ciudadportuariadechangchun",
                "img": "ciudadportuariadechangchun",
                "nombre": "Ciudad Portuaria de Chang Chun", 
                "portal1":[[70,110],["Colina Rattan"],["left"]],
                "portal2":[[558,922],["Condado de Delphi"],["right"]], 
                "mokokos": [
                    [315,185], 
                    [285,544],
                    [-84.5,251.75],
                    [512,845],  
                ], 
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/u3qZayEDR-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "afinidad": [[306.25,555.25]],
                "afinidadnombre": [["Yuul"]], 
                "afinidaddesc": [["Para desbloquear a Yuul completa <b>Lluvia, estrellas, viento.</b>"]],
                "vista": [[72.5,610.75],[240.25,578]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"]
                ],  
                "historiaoculta":[[-54,255],[298,212],[360.75,287.75],[165.5,182],[593.25,363.25]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] La ladrona fantasma de Chang Chun</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] La ladrona fantasma de Chang Chun</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] La ladrona fantasma de Chang Chun</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-264px'>[2/3] Las cualificaciones del gran maestro</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] Las cualificaciones del gran maestro</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Anikka</h3>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','298,212')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','360.75,287.75')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Anikka</h3>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','-54,255')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','360.75,287.75')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Anikka</h3>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','-54,255')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','298,212')" class="guia">Segunda parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Anikka</h3>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','594,360')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('valleprisma','240,76')" class="guia">Tercera parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Anikka</h3>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','164,180')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('valleprisma','232,80')" class="guia">Tercera parte</button></div>   
                    </div>`], 
                ], 
                "historiaadicional":[[272,580]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Lluvia, estrellas, viento</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Anikka</h3>
                    Para poder iniciar la misión completa <b><img class="imgitem" src='./imagenes/objetos/mainquest.png'/>La prueba de mi valía</b> de la historia principal.
                    </div>`],
                ],
                "ingrediente":[[162.5,385.5],[166.5,371],[144.5,379.5],[104.5,223]],
                "ingredientevendedor": [["Ciempiés centenario"], ["Buñuelo viejo"],["Roca de azúcar"],["Cofre de galletas de la suerte"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-90px'>Nº 4 - [2/2]</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-57px'>Nº 6</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],
                ], 
                "descripcioningrediente": [
                    [`<div>Compra el <b>Ciempiés</b> al mercader Kongbo para tener uno de los ingredientes del <b>Buñuelo de carne secreto de Manpo</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','200,255')" class="guia">Sobin</button></div></div>
                    <div><ul style='text-align:center'><li><img src='./imagenes/ingrediente/cienpies.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Compra el <b>Buñuelo viejo</b> al mercader Kongbo para tener uno de los ingredientes del <b>Buñuelo de carne secreto de Manpo</b> que lo prepara el cocinero:
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','200,255')" class="guia">Sobin</button></div></div>
                    <div><ul style='text-align:center'><li><img src='./imagenes/ingrediente/bunuelo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Compra varias <b>Rocas de azúcar</b> al mercader Kongbo y haz clic en ellas hasta obtener <b>Escultura de azúcar perfecta</b>. Añádela al tomo del aventurero.
                    <div><ul style='text-align:center'><li><img src='./imagenes/ingrediente/rocaazucar.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Compra varios <b>Cofres de galletas de la suerte</b> al mercader y haz clic en ellos hasta obtener <b>Galleta de la suerte afortunada</b>. Añádela al tomo del aventurero.
                    <div><ul style='text-align:center'><li><img src='./imagenes/ingrediente/cofre.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],
                ], 
                "skillpoint": [[548.5,572.5]],
                "skillpointnpc": [["Hallazgo maravilloso"]], 
                "skillpointguia": [
                    [`<p>Habla con Cadri para iniciar la misión.</p> 
                    <div class="guiadiv"><button onclick="panto('colinarattan','-91.5,514')" class="guia">Segunda parte</button></div> 
                    </div> 
                    <div class="guiadiv"><button onclick="panto('brumasdelocaso','-182.5,354.5')" class="guia">Tercera parte</button></div>  
                    </div>
                    <div class='guiadiv'>
                    <a class='guia' target='_blank' href='https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/'>Guía completa</a>
                    </div>`]], 
                "cocinero": [[306,154.5]],
                "cocineronombre":["Sobin"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Sobin permite cocinar hasta 4 platos únicos con los ingredientes de Anikka. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Buñuelo de carne secreto de Manpo</td><td>Los dos ingredientes se encuentran en:
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','165.5,377')" class="guia">Ciudad portuaria de Chang Chun</button></div>
                    </td></tr>
                    <tr><td>Guiso de cascos traseros de ciervo</td><td>
                    <div class="guiadiv"><button onclick="panto('colinarattan','-80,628')" class="guia">Colina Rattan</button></div> 
                    </td></tr>
                    <tr><td>Marinado secreto especial al estilo Yeon</td><td>
                    <div class="guiadiv"><button onclick="panto('barreradeyeon','494,418')" class="guia">Barrera de Yeon</button></div> 
                    </td></tr>
                    <tr><td>Sopa de trascendencia</td><td>
                    <div class="guiadiv"><button onclick="panto('acantiladotenebroso','-86,876')" class="guia">Acantilado tenebroso</button></div>  
                    </td></tr>
                    </tbody>
                    </table>
                </div>`],
            }, 
            "geometry": { "type": "Point", "coordinates": [202.375,-134] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Anikka",
                "title": "condadodedelphi",
                "img": "condadodedelphi",
                "nombre": "Condado de Delphi", 
                "portal1":[[-248,406],["Ciudad Portuaria de Chang Chun"],["bottom"]],
                "portal2":[[684,462],["Valle Prisma"],["top"]], 
                "mokokos": [
                    [122.5,68], 
                    [26.5,139],
                    [26.5,464.5],
                    [89,515.5],  
                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/F433POXPDK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "vista": [[33.5,439.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas' style='margin-left:-57px'>Nº 10</div>"],
                ],  
                "historiaoculta":[[234.75,869.25]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>El mundo en mis ojos</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Anikka</h3>
                    Interactúa con el objeto que se encuentra entre el árbol y el muro de la casa.  
                    </div>`],
                ],   
                "comercianteitinerante": [[-64,501.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Mac</span></div>"]],
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "monstruos": [[188,847],[322,482.5],[249,134.25]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-11.png'/></div>"],
                ],  
                "mazmorra": [[50,164.5]],
                "nombreMazmorra": [["Mansión de luna llena"]],  
            }, 
            "geometry": { "type": "Point", "coordinates": [214.5,-137.5625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Anikka",
                "title": "bosquemelodia",
                "img": "bosquemelodia",
                "nombre": "Bosque Melodía", 
                "portal1":[[-20.5,458.5],["Colina Rattan"],["bottom"]],
                "portal2":[[705,418],["Brumas del Ocaso"],["top"]], 
                "mokokos": [
                    [114.5,478], 
                    [259.75,277.25],
                    [426.75,537.25],
                    [375.5,800],
                    [572.625,529.875],
                    [625.5,712],
                    [644,726],
                    [629.75,739.75], 
                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/xjRvWTptgCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "pasillosecreto": [
                    [578.5,690.25],
                ],
                "pasillosecretodesc": [ 
                    ["<div>Rompe la vegetación para poder pasar.</div>"], 
                ], 
                "afinidad": [[264.5,781.5]],
                "afinidadnombre": [["fantasma de Ryeon"]], 
                "vista": [[119.75,462.25],[355.25,627.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas' style='margin-left:-57px'>Nº 5</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas' style='margin-left:-57px'>Nº 6</div>"],
                ],  
                "historiaoculta":[[529.5,808.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[2/3] El anhelo creciente</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Anikka</h3> 
                    <div class="guiadiv"><button onclick="panto('colinarattan','255.5,488.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('valleprisma','-64.5,818.5')" class="guia">Tercera parte</button></div> 
                    </div>`],
                ],
                "ingrediente":[[360,154]],
                "ingredientevendedor": [["Píldora secreta de la familia Jeok"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"],  
                ], 
                "descripcioningrediente": [
                    [`<div>Recoge la píldora para añadirla al tomo del aventurero de Anikka</div>
                    <div><ul style='text-align:center'><li><img src='./imagenes/ingrediente/pildora.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],   
                ],    
                "comercianteitinerante": [[60.75,218.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Mac</span></div>"]],
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "monstruos": [[246,571.5],[230,738],[566,678]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-57px'>Nº 14</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-15.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-4.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-14.png'/></div>"],
                ],  
                "mazmorra": [[355.75,906.25]],
                "nombreMazmorra": [["Velo de Jeok"]],  
                "jefesdezona": [[474.5,580.5 ]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Chuo del caos</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/chaoticchuo.png'/></div>"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [227.40625,-133.75] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Anikka",
                "title": "colinarattan",
                "img": "colinarattan",
                "nombre": "Colina Rattan", 
                "mokokos": [
                    [-312.75,469.25],
                    [-302.25,481],
                    [-330,486.25],
                    [-50,704.75],
                    [13,582.75],
                    [131.25,234.75],
                    [240,586.5],
                    [455.75,401.25],
                    [673.75,591],
                    [674.125,542.75],  
                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/Vt5GJzk71Wo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-298,592],["Ciudad Portuaria de Chang Chun"],["bottom"]],
                "portal2":[[562,840],["Bosque Melodía"],["top"]], 
                "pasillosecreto": [
                    [-273.75,485.5],
                ],
                "pasillosecretodesc": [ 
                    ["<div>Pasillo secreto.</div>"], 
                ], 
                "cancion": [[657,625.5]],
                "cancionicono": [["minuetodelbosque"]],
                "cancionnombre": [["Minueto del Bosque"]],                 
                "canciondesc": [["Toca la <b>Minueto del Bosque</b> para acceder a esta zona del mapa."]], 
                "vista": [[104.5,386],[82,662]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"],
                ],  
                "skillpoint": [[-89,513]],
                "skillpointnpc": [["Recuerdo sospechoso"]],
                "skillpointguia": [
                    [`<p>Habla con Cadri para iniciar la misión.</p>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','528,586')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('brumasdelocaso','-194,348')" class="guia">Tercera parte</button></div> 
                    <div class='guiadiv'>
                    <a class='guia' target='_blank' href='https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/'>Guía completa</a>
                    </div>`]], 
                "historiaoculta":[[209,493.5],[255.5,488.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-217px'>Carta para ti de dentro de 10 años</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-160px'>[1/3] El anhelo creciente</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Anikka</h3> 
                    Interactúa con el objeto cercano al agua.
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Anikka</h3> 
                    <div class="guiadiv"><button onclick="panto('bosquemelodía','529.5,808.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('valleprisma','-64.5,818.5')" class="guia">Tercera parte</button></div> 
                    </div>`],
                ],
                "ingrediente":[[-80.25,628.25]],
                "ingredientevendedor": [["Casco trasero de un ciervo"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],  
                ], 
                "descripcioningrediente": [
                    [`<div>Recoge la carne para poder cocinar el <b>Guiso de cascos traseros de ciervo</b> en el cocinero:</div> 
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','200,255')" class="guia">Sobin</button></div>
                    <div><ul style='text-align:center'><li><img src='./imagenes/ingrediente/cascociervo.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>`],   
                ],    
                "comercianteitinerante": [[133.26887714772812,369.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Mac</span></div>"]],
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "monstruos": [[84,299],[471,405.5],[301,774]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-57px'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-2.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-3.png'/></div>"],
                ],  
                "mazmorra": [[262.25,898.5]],
                "nombreMazmorra": [["Barrera de Yeon"]],   
            }, 
            "geometry": { "type": "Point", "coordinates": [209.21875,-123.34375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Anikka",
                "title": "brumasdelocaso",
                "img": "brumasdelocaso",
                "nombre": "Brumas del Ocaso", 
                "portal1":[[-349,729],["Bosque Melodía"],["bottom"]],
                "portal2":[[352,138],["Valle Prisma"],["left"]], 
                "mokokos": [
                    [-138.5,318.625], 
                    [-94,296.5], 
                    [45,302.5], 
                    [94,521], 
                    [82,56.5], 
                    [113,168.5], 
                    [153,223.5], 
                    [232.625,567.75], 
                    [510,372], 
                    [590.5,557.5],
                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/IBwQdEGeP-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "pasillosecreto": [
                    [-144,306.125],
                ],
                "pasillosecretodesc": [ 
                    ["<div>Pasillo secreto entre las nubes.</div>"], 
                ],  
                "vista": [[67.75,305.875],[-286,746]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</div>"],
                ],    
                "skillpoint": [[-180.75,352.5]],
                "skillpointnpc": [["Huevos en el cielo"]],
                "skillpointguia": [
                    [`<p>Habla con Cadri para iniciar la misión.</p>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','528,586')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','-102,514')" class="guia">Segunda parte</button></div> 
                    <div class='guiadiv'>
                    <a class='guia' target='_blank' href='https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/'>Guía completa</a>
                    </div>`]],  
                "comercianteitinerante": [[260,364.75]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Mac</span></div>"]],
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "monstruos": [[59.5,569],[436,533.5],[569,712]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-57px'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-8.png'/></div>"],
                ], 
                "jefesdezona": [[92.75,584]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Chuo</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/chuo.png'/></div>"]], 
                "mazmorra": [[109.5,216.5]],
                "nombreMazmorra": [["Acantilado tenebroso"]],  
                "mazmorra2": [[680.5,555.5]],
                "nombreMazmorra2": [["Cueva del mal"]],  
            }, 
            "geometry": { "type": "Point", "coordinates": [227.90625,-125.8125] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Anikka",
                "title": "valleprisma",
                "img": "valleprisma",
                "nombre": "Valle Prisma", 
                "portal1":[[-264,598],["Condado de Delphi"],["bottom"]],
                "portal2":[[336,666],["Brumas del Ocaso"],["right"]], 
                "mokokos": [
                    [226.25,157.5],  
                    [192.5,345.25], 
                    [294.75,486.5], 
                    [323.25,576.25], 
                    [379.5,549.5], 
                    [411.75,311.5], 
                    [538.625,449.375],
                ],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/cUSpwai85lU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "pasillosecreto": [
                    [306.75,536.25],[356,538.75]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Pasillo secreto entre las nubes.</div>"],
                    ["<div>Pasillo secreto entre las nubes.</div>"], 
                ],  
                "vista": [[285.75,507.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</div>"],
                ],  
                "afinidad": [[199.5,250.75]],
                "afinidadnombre": [["sorang"]],    
                "comercianteitinerante": [[195.625,827.875]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Mac</span></div>"]],
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "monstruos": [[130,852.5],[-66,455],[35,264]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-5.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-12.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Anikka</h3><img class='monstruos-img' src='./imagenes/monstruos/ak-13.png'/></div>"],
                ],  
                "historiaoculta":[[-150,571],[-64.5,818.5],[234.5,75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>El pasado de sir Druden</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] El anhelo creciente</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-264px'>[3/3] Las cualificaciones del gran maestro</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Anikka</h3> 
                    Interactúa con el montón de papeles.
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Anikka</h3> 
                    <div class="guiadiv"><button onclick="panto('colinarattan','255.5,488.5')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('bosquemelodía','529.5,808.5')" class="guia">Segunda parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Anikka</h3> 
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','593.25,363.25')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ciudadportuariadechangchun','160,181')" class="guia">Segunda parte</button></div> 
                    </div>`],
                ], 
                "historiaadicional":[[323,399.25]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow' style='margin-left:-113px'>El guarda vive</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Anikka</h3>
                    Para poder iniciar la misión antes debes completar la misión <b><img class="imgitem" src='./imagenes/objetos/mainquest.png'/>En el umbral</b> de la historia principal de Anikka.</div>`],
                ], 
                
            }, 
            "geometry": { "type": "Point", "coordinates": [238.84375,-122.34375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "rutaarida",
                "img": "rutaarida",
                "nombre": "Ruta Árida", 
                "portal1":[[694,510],["Los Orígenes de Stern"],["right"]], 
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/kqIRiMbba50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [216,310],
                    [-243.125,438.5],
                    [-139,293.5],
                    [-96.5,610.25],
                    [-109.75,623.25],
                    [-1.25,658.75],
                    [113.75,476.5],   
                ],  
                "pasillosecreto": [
                    [-244.375,443.75],[-36.25,546.875]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Entra por la puerta, la Mokoko se encuentra al final: <br><img src='./imagenes/extraimg/aridpathmokoko.jpg' /></div>"],
                    ["<div>Pasillo secreto para llegar a las 2 Mokokos.</div>"], 
                ],  
                "vista": [[-129.5,158.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"],
                ],     
                "comercianteitinerante": [[-251,349]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Nox</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[-249,362]],
                "ingredientevendedor": [["Fluido estimulador de adrenalina"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div>Compra el fluido al mercader ambulante <b>Nox</b> para preparar la <b>Sopa fluida estimulante</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/adrenalina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                ],
                "monstruos": [[-115,483.5],[160,777.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-2.png'/></div>"],
                ],  
                "historiaoculta":[[-139.5,205.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Un escritor testarudo</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Arthetine</h3> 
                    Interactúa con el objeto que está entre las cajas.
                    </div>`],
                ],  
                
            }, 
            "geometry": { "type": "Point", "coordinates": [192.53125,-92] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "colinasdelportadordelviento",
                "img": "colinasdelportadordelviento",
                "nombre": "Colinas del Portador del Viento", 
                "portal1":[[432,64],["Los Orígenes de Stern"],["top"]], 
                "portal2":[[468,780],["Totrich"],["right"]], 
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/HaPMEWmGVus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [177.5,209], 
                    [158,398],
                    [-31,574],
                    [-164,604],
                    [265,886],
                    [366.5,681],
                    [447.25,552.125],
                    [442.875,555.375],
                    [477.5,319], 
                ], 
                "pasillosecreto": [
                    [445,539]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Dirígete al icono de la <b>Canción de Resonancia</b> para acceder a las Mokokos.</div>"], 
                ],    
                "vista": [[309,322.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"],
                ],  
                "cancion": [[633.625,613.375]],
                "cancionicono": [["cancionderesonancia"]],
                "cancionnombre": [["Canción de Resonancia"]], 
                "canciondesc": [["Toca la <b>Canción de Resonancia</b> mover la estatua y poder coger las dos Mokokos."]],   
                "comercianteitinerante": [[392,550.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Nox</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[402,553]],
                "ingredientevendedor": [["Fluido estimulador de adrenalina"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div>Compra el fluido al mercader ambulante <b>Nox</b> para preparar la <b>Sopa fluida estimulante</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/adrenalina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                ],
                "monstruos": [[263,92],[630,332]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-10.png'/></div>"],
                ],    
                
            }, 
            "geometry": { "type": "Point", "coordinates": [197.125,-98.625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "losorigenesdestern",
                "img": "losorigenesdestern",
                "nombre": "Los orígenes de Stern", 
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/QxnNZ8xh9v4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-90.5,771.5],["Colinas del Portador del Viento"],["bottom"]], 
                "portal2":[[-96,266],["Ruta Árida"],["left"]], 
                "portal3":[[444,804],["Cataratas de Riza"],["top"]], 
                "portal4":[[442,238],["Desguace"],["top"]], 
                "mokokos": [
                    [190.5,52.5],  
                    [138.25,230.75],  
                    [-54.5,432.5],  
                    [22.625,608.25],  
                    [119.5,910],  
                    [360.5,823],  
                    [444.5,342.5],  
                    [675.5,501.75],  
                    [682.625,525.5],  
                    [711.875,544],  
                    [715.25,568.875],  
                    [668.5,568.625], 
                    [-3020.3706639057946,332.1677257744036],
                    [-3020.3706639057946,332.1677257744036]
                ],
                "mokokotip": [[526,-356]], 
                "mokokotipnum": [["<b class='rainbow'>Mokoko extra</b>"]],
                "mokokotipdesc": [
                    [`Haz clic en el icono de las <b class="nowrap"><img src="./imagenes/iconos/escaleras.png" class="imgitem"/>Escaleras</b> para encontrar las otras Mokokos.
                    `], 
                ],    
                "quest" :[[144.75,233.75]], 
                "questtit": [["Quest para desbloquear la afinidad de Neria"]],
                "questdesc": [["Interactúa con el objeto que está al fondo a la derecha del edificio."]], 
                "questmorada" :[[131.5,119.5]],
                "vista": [[-83,308]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"],
                ], 
                "corazondegigante": [[681,540]],
                "corazondegigantedesc": [[`
                <p>Aumenta la <b class="afinidad text-shadow">afinidad</b> con <b class="afinidad text-shadow">Sasha</b> hasta el rango de: <b class="confianza">confianza.</b></p>`]],
                "corazondegigantenum": [["<div>Nº 3</div>"]],
                "afinidad": [
                    [17,161],
                    [9,608],
                    [688.5,522.125],
                    [692.125,531.625]
                ],
                "afinidadnombre": [["mercenaria Zeira"],["neria3"],["bastian"],["sasha"]],  
                "ingrediente":[[-31,594],[-9.625,584.375]],
                "ingredientevendedor": [["Cristal desconocido"],["Ración de combate cykin Tipo A"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div>Compra 22 cristales desconocidos al mercader <b>DeBerry</b> para preparar el <b>Líquido hirviente</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    Mira la receta del <b>Líquido hirviente</b> del cocinero y crea todos los ingredientes que pide, luego crea el plato y <b>espera 5 min</b> hasta que se convierta en <b>Líquido desconocido XD-6353</b> para añadirlo al tomo del aventurero.
                    </div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/cristal.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Compra la ración a la mercader Malina y registra el plato en el tomo del aventurero.
                    </div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/racioncombate.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                ],  
                "cocinero": [[-12,560.5]],
                "cocineronombre":["Maestro de cocina"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    El Maestro de cocina permite cocinar hasta 5 platos únicos con los ingredientes de Arthetine.
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Bebida de Bergstrom</td><td>
                    <div class="guiadiv"><button onclick="panto('laboratoriodeldoctorbergstrom','-4.5,664')" class="guia">Laboratorio Bergstrom [1/2]</button></div>
                    <div class="guiadiv"><button onclick="panto('laboratoriodeldoctorbergstrom','592,662')" class="guia">Laboratorio Bergstrom [2/2]</button></div> 
                    </td></tr>
                    <tr><td>Líquido hirviente</td><td> 
                    <div class="guiadiv"><button onclick="panto('losorigenesdestern','-31.875,594')" class="guia">Los orígenes de Stern</button></div>  </td></tr>
                    <tr><td>Ración de combate cykin Tipo C</td><td>
                    <div class="guiadiv"><button onclick="panto('desguace','118,412.5')" class="guia">Desguace [1/2]</button></div> 
                    <div class="guiadiv"><button onclick="panto('desguace','172.5,528')" class="guia">Desguace [2/2]</button></div>  
                    </td></tr>
                    <tr><td>Sceptrumpam 3 mg</td><td>
                    <div class="guiadiv"><button onclick="panto('corazóndesceptrum','54,859')" class="guia">Corazón de Sceptrum</button></div>   
                    </td></tr>
                    <tr><td>Sopa fluida estimulante</td><td>Compra el <b>Fluido estimulador de adrenalina</b> al mercader ambulante <b>Nox</b> para poder crear la <b>Sopa fluida estimulante</b></td></tr> 
                    </tbody>
                    </table>
                </div>`], 
                "historiaoculta":[
                    [114,138],
                    [-81.5,648],
                    [214.5,896],
                    [365,799],
                    [321.5,851.5],
                    [342,868],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/4] La respuesta a la agonía</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/4] La respuesta a la agonía</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/4] La respuesta a la agonía</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] La mayor forma de evolución</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] La mayor forma de evolución</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] La mayor forma de evolución</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Arthetine</h3> 
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-86,648')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','218,898')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('subsuelodestern','-88,452')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Arthetine</h3> 
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','126,140')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','218,898')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('subsuelodestern','-88,452')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Arthetine</h3> 
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','126,140')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-86,648')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('subsuelodestern','-88,452')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Arthetine</h3> 
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','344,843')" class="guia">Segunda parte y 3</button></div>
                    <img width="300px" src='./imagenes/secretos/lamayorformadeevolucion1.jpg' />
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Arthetine</h3> 
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','344,843')" class="guia">Primera parte y 3</button></div>
                    <img width="300px" src='./imagenes/secretos/lamayorformadeevolucion2.jpg' />
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Arthetine</h3> 
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','344,843')" class="guia">Primera parte y 2</button></div>
                    <img width="300px" src='./imagenes/secretos/lamayorformadeevolucion3.jpg' />
                    </div>`],
                ],   
                "subzonaciudad2": [[44,518]],
                "subzonaciudadNombre2":[["Ojo de Sceptrum"]],
                "subzonaciudad":[[355,427],[45.5,912.75]],
                "subzonaciudadNombre":[["Subsuelo de Stern"],["Subsuelo de Stern"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [199.75,-92.4375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "desguace",
                "img": "desguace",
                "nombre": "Desguace", 
                "portal1":[[-164,578],["Los Orígenes de Stern"],["right"]], 
                "portal2":[[434,154],["Nevelhorn"],["top"]],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/QTe8YbgKPqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [22.625,342.75],
                    [212.375,694],
                    [222,710],
                    [225.875,692],
                    [183.75,790.75],
                    [254.375,323.25],
                    [366.75,410.75],
                    [402.5,283.5], 
                      
                ],      
                "vista": [[249,498.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"],
                ],   
                "pasillosecreto": [
                    [132.5,609.75]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Escala por la escalera y continua por el camino hasta encontrar las 3 Mokokos.</div>"], 
                ],  
                "comercianteitinerante": [[133,434]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Nox</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[121.5,439.5],[118.5,413],[172.25,527.5]],
                "ingredientevendedor": [["Fluido estimulador de adrenalina"],["Polvo X-1 secado al vacío"],["Polvo X-3 secado al vacío"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-92px'>Nº 3 - [1/2]</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3 - [2/2]</span></div>"],
                ],
                "descripcioningrediente": [
                    [`<div>Compra el fluido al mercader ambulante <b>Nox</b> para preparar la <b>Sopa fluida estimulante</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/adrenalina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el ingrediente para preparar <b>Ración de combate cykin Tipo C</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    <div class="guiadiv"><button onclick="panto('desguace','172.5,528')" class="guia">Segundo Ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/polvox1.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el ingrediente para preparar <b>Ración de combate cykin Tipo C</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    <div class="guiadiv"><button onclick="panto('desguace','118.5,412.5')" class="guia">Primer Ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/polvox3.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                ],   
                "historiaoculta":[
                    [491.25,462.75],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-97px'>Informe RGM</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Arthetine</h3> 
                    Interactúa con el objeto al borde del precipicio.
                    </div>`],
                ],  
                "monstruos": [[198,807.5],[322.5,638]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-3.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-4.png'/></div>"],
                ],    
                "jefesdezona": [[496.5,538.5]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Signatus</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/signatus.png'/></div>"]], 
                "mazmorra": [[700.75,428]],
                "nombreMazmorra": [["Nido de hormigas soldado"]], 
            }, 
            "geometry": { "type": "Point", "coordinates": [198.5625,-87.25] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "nevelhorn",
                "img": "nevelhorn",
                "nombre": "Nevelhorn", 
                "portal1":[[-96,770],["Desguace"],["bottom"]],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/U8AVHgxacWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [14.875,666.25], 
                    [20.625,657],
                    [205,853.625],
                    [406.625,463.5],
                    [418.125,458.75],
                    [242.125,172.875],
                    [518.75,379.5],
                    [675.25,482.125],
                      
                ],      
                "vista": [[19.75,492.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"],
                ],   
                "pasillosecreto": [
                    [61.625,624],[455.75,474.125]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Baja por el acantilado para recoger las 2 Mokokos.</div>"], 
                    ["<div>Utiliza la 'G' para subir por el acantilado.</div>"], 
                ],  
                "comercianteitinerante": [[183.125,443.125]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Nox</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[170.5,454.125]],
                "ingredientevendedor": [["Fluido estimulador de adrenalina"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-55px'>Nº 5</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div>Compra el fluido al mercader ambulante <b>Nox</b> para preparar la <b>Sopa fluida estimulante</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/adrenalina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],   
                "historiaoculta":[
                    [175.5,519],[362,512.875]
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Ser humano</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-169px'>[1/2] El fin de su obsesión</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Arthetine</h3> 
                    Interactúa con el objeto de la caja.
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Arthetine</h3> 
                    <div class="guiadiv"><button onclick="panto('verdantiernivel3','488,446')" class="guia">Segunda parte</button></div> 
                    </div>`],
                ],  
                "monstruos": [[-24.5,603],[-165.75,413.5],[283.75,190],[348,659]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-5.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-8.png'/></div>"],
                ],     
                "mazmorra": [[237,543]],
                "nombreMazmorra": [["Corazón de Sceptrum"]], 
            }, 
            "geometry": { "type": "Point", "coordinates": [195.0625,-81.25] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "cataratasderiza",
                "img": "cataratasderiza",
                "nombre": "Cataratas de Riza", 
                "portal1":[[-34,258],["Los Orígenes de Stern"],["left"]],
                "portal2":[[298,940],["Desierto de Arena Roja"],["right"]],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/osecRc1i94Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [-14.625,577],  
                    [-17.75,562],
                    [10.875,476.625],
                    [125.75,627.5],
                    [169.25,406],
                    [205,278.75],
                    [313.5,723],
                    [461.75,769.5],
                    [576.25,697.5],
                    [456.25,447.5],
                ],      
                "vista": [[428,507]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</div>"],
                ],   
                "pasillosecreto": [
                    [32.125,556.625],[312.75,519.75],[366.75,628.75],[435.25,799.75]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Pasa entre las tuberías para recoger las 2 Mokokos.</div>"], 
                    ["<div>Completa la misión de la Otra historia de Arthetine <b>La senda arenosa</b> para poder utilizar <b>el portal y acceder a la vista oculta</b>.</div>"], 
                    ["<div>Completa la misión de la Otra historia de Arthetine <b>La senda arenosa</b> para poder utilizar <b>el portal y acceder a la vista oculta</b>.</div>"],
                    ["<div>Sigue el pasillo oculto.</div>"], 
                ],  
                "comercianteitinerante": [[376,489.375]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Nox</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[370.75,475.375]],
                "ingredientevendedor": [["Fluido estimulador de adrenalina"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-55px'>Nº 5</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div>Compra el fluido al mercader ambulante <b>Nox</b> para preparar la <b>Sopa fluida estimulante</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/adrenalina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],    
                "historiaadicional":[[302.5,531]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>La senda arenosa</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Arthetine</h3>
                    Para poder iniciar la misión completa la misión <b><img class="imgitem" src='./imagenes/objetos/mainquest.png'/>El vigilante</b> de la historia principal de Arthetine.
                    </div>`],
                ],
                "monstruos": [[16,358],[148,630],[359,128]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-13.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-14.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-15.png'/></div>"],
                ],     
                "mazmorra": [[641.75,587.625]],
                "nombreMazmorra": [["Verdantier"]], 
            }, 
            "geometry": { "type": "Point", "coordinates": [203.875,-87.5] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "totrich",
                "img": "totrich",
                "nombre": "Totrich", 
                "portal1":[[102,36],["Colinas del Portador del Viento"],["bottom"]], 
                "youtube":[[-232,-388]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/EkjQq-1ZyQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [-86.25,149],
                    [-29.25,453],
                    [181.25,575.5],
                    [224.25,605.75],
                    [266,514.25],
                    [324.25,805.75],
                    [404.25,781.25],
                    [678.125,693.5],   
                ],       
                "afinidad": [[253,386.5]],
                "afinidadnombre": [["orne"]], 
                "vista": [[244.25,520.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"],
                ],     
                "comercianteitinerante": [[-0.5,235.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Nox</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[[4,247.5],[143.25,284.5]],
                "ingredientevendedor": [["Fluido estimulador de adrenalina"],["X-090892"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-55px'>Nº 5</span></div>"],   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div>Compra el fluido al mercader ambulante <b>Nox</b> para preparar la <b>Sopa fluida estimulante</b> que lo prepara el:
                    <div class="guiadiv"><button onclick="panto('losorígenesdestern','-12.5,562')" class="guia">Maestro de cocina</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/adrenalina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Comprale al mercader el ingrediente <b>X-090892</b> y registralo en el tomo del aventurero de Arthetine</div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/numeros.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],  
                "historiaoculta":[[158,177]],
                "historiaocultatitulo":[["<span class='historiaocultatit text-shadow' style='margin-left:-151px'>Bienvenido a Arthetine</span>"]],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Arthetine</h3> 
                    Interactúa con la carta del suelo.
                    </div>`]
                ],  
                "historiaadicional":[[137,168]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow' style='margin-left:-157px'>Ayuda a los huérfanos</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Arthetine</h3>
                    Para poder iniciar la misión completa la misión <b>La risa de un niño</b>. Es una misión normal de Totrich.
                    </div>`],
                ],
                "monstruos": [[205.75,623],[541.25,639]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-58px'>Nº 12</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-11.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Arthetine</h3><img class='monstruos-img' src='./imagenes/monstruos/att-12.png'/></div>"],
                ],
                "jefesdezona": [[537,712.25]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Velkan</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/velkan.png'/></div>"]],     
                "mazmorra": [[-252.5,337]],
                "nombreMazmorra": [["Laboratorio del doctor Bergstrom"]], 
            }, 
            "geometry": { "type": "Point", "coordinates": [206.875,-93.03125] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Arthetine",
                "title": "desiertodearenaroja",
                "img": "desiertodearenaroja",
                "nombre": "Desierto de Arena Roja", 
                "portal1":[[490,82],["Cataratas de Riza"],["left"]], 
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/HPRgu5USyko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [7,747.75],
                    [461.75,920.875],
                    [546.875,446],  
                ],    
            }, 
            "geometry": { "type": "Point", "coordinates": [208.5,-99.0625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Shushire",
                "title": "marhelado",
                "img": "marhelado",
                "nombre": "Mar Helado", 
                "portal1":[[353,863],["Aldea Rigens"],["right"]],
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/3-n3s5OgTO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]], 
                "mokokos": [
                    [236.5,322], 
                    [235.75,328.5],
                    [168.25,574.625],
                    [222.75,640],
                    [244,626.25],
                    [246.25,630.75],
                    [451.75,722.75],
                    [503.875,327.5],
                    [606.5,480.25],
                ],       
                "vista": [[373.5,229]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"],
                ], 
                "afinidad": [[398.75,736.25]],
                "afinidadnombre": [["ganadera Jude"]],  
                "ingrediente":[[486.125,312.5],[221.25,297.25]],
                "ingredientevendedor": [["Sardina zafiro"],["Comida envasada vieja"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra la sardina al mercader ambulante <b>Jeffrey</b> para preparar la <b>Sardina zafiro a la parrilla</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('marhelado','458,301')" class="guia">Helena</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/sardina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoje el ingrediente del suelo y añádelo al tomo del aventurero de Shushire.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidaenvasada.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`], 
                ],
                "comercianteitinerante": [[475,315.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Jeffrey</span></div>"]],
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "cocinero": [[460.375,300.375]],
                "cocineronombre":["Helena"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Helena permite cocinar hasta 2 platos únicos con los ingredientes de Shushire. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Sardina zafiro a la parrilla</td><td>Compra el ingrediente al mercader ambulante Jeffrey por Shushire.</td></tr>
                    <tr><td>Hielo pulido en copo de nieve</td><td>
                    <div class="guiadiv"><button onclick="panto('aldearigens','7,758')" class="guia">Aldea Rigens</button></div> 
                    </td></tr>
                    </tbody>
                    </table>
                </div>`],
                "skillpoint": [[431,454.5]],
                "skillpointnpc": [["El hijo rebelde"]],
                "skillpointguia": [[`<p>Mata a las ratas hasta obtener el <b>Colgante viejo</b></p>. 
                <ul style='text-align:center'><li><img src='./imagenes/ingrediente/colgante-viejo.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                `]], 
                "monstruos": [[107.5,599],[315,819.5],[433.25,475.75]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-13.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-14.png'/></div>"],
                ], 
            }, 
            "geometry": { "type": "Point", "coordinates": [129.9375,-58.75] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Shushire",
                "title": "aldearigens",
                "img": "aldearigens",
                "nombre": "Aldea Rigens", 
                "portal1":[[-6,76],["Mar Helado"],["left"]], 
                "portal2":[[-302,816],["Colina del Viento Amargo"],["bottom"]], 
                "youtube":[[200,-344]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/LnioHE7ce5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [-42,541], 
                    [110,799],
                    [204.5,899.5],
                    [-120,239.5],
                    [377,407],
                    [677.875,679.75],
                    [692.625,674.25],
                ],
                "afinidad": [[371.5,515]],
                "afinidadnombre": [["amanecedor Javern"]],  
                "ingrediente":[[26.5,768.5],[7,758]],
                "ingredientevendedor": [["Lágrimas de Sirius"],["Hielo pulido en copo de nieve"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra las lágrimas a la mercader <b>Isabelle</b> y añade el plato al tomo del aventurero.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/lagrimas.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Compra <b>Trozo de hielo gigante</b> en grandes cantidades (55+) a la mercader <b>Isabelle</b> para crear <b>Trozo de hielo roto</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('marhelado','458,301')" class="guia">Helena</button></div>
                    Cuando crees los trozos de hielo necesitarás que te salgan: <b>x50 Trozo de hielo roto</b> y <b>x5 Trozo de hielo picado</b> para preparar el plato <b>Hielo pulido en copo de nieve</b> em la cocinera:
                    <div class="guiadiv"><button onclick="panto('marhelado','458,301')" class="guia">Helena</button></div>
                    Una vez creado el plato espera 1 min hasta que se convierta en <b>Hielo pulido en copo de nieve de Shushire</b> y regístralo en el tomo del aventurero.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/trozodehielo.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`], 
                ],  
                "vista": [[411,492]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"],
                ],
                "historiaoculta":[[288,677],[346.5,395.5],[-140,345.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>El panadero malhablado</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/2] Los chicos de Shushire</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/2] Los chicos de Shushire</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Shushire</h3> 
                    Interactúa con el plato de comida de perro.
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Shushire</h3> 
                    <div class="guiadiv"><button onclick="panto('aldearigens','-146,344')" class="guia">Segunda parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Shushire</h3> 
                    <div class="guiadiv"><button onclick="panto('aldearigens','350,402')" class="guia">Primera parte</button></div>
                    </div>`]
                ],    
            }, 
            "geometry": { "type": "Point", "coordinates": [137.40625,-50.65625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Shushire",
                "title": "colinadelvientoamargo",
                "img": "colinadelvientoamargo",
                "nombre": "Colina del Viento Amargo",  
                "portal1":[[-132,602],["Lago de la Eternidad"],["bottom"]], 
                "portal2":[[558,194],["Aldea Rigens"],["left"]], 
                "portal3":[[692,268],["Meseta Sangre Gélida"],["top"]],  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/9UrtAxMFrM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [397.25,52],  
                    [378.75,246.75],
                    [575.75,386],
                    [245.75,370.5],
                    [251.125,487.125],
                    [239,487.875],
                    [-33.25,527.75],
                    [90.75,892.75],
                    [99,904.25],
                ],
                "vista": [[410,69]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"],
                ], 
                "ingrediente":[[169.75,239.5],[361,472.5]],
                "ingredientevendedor": [["Sardina zafiro"],["Carne de lobo"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra la sardina al mercader ambulante <b>Jeffrey</b> para preparar la <b>Sardina zafiro a la parrilla</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('marhelado','458,301')" class="guia">Helena</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/sardina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoje la carne del suelo y añádelo al tomo del aventurero de Shushire.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/carnelobo.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`], 
                ],
                "comercianteitinerante": [[187.75,239]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Jeffrey</span></div>"]],
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "historiaoculta":[[150.5,837]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Amor muy honesto</span>"], 
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Shushire</h3> 
                    Interactúa con el objeto cercano a la barricada destruida.
                    </div>`], 
                ],
                "monstruos": [[521.5,384],[430.5,198.5],[222.5,754]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-8.png'/></div>"],
                ],    
            }, 
            "geometry": { "type": "Point", "coordinates": [144.5625,-56.15625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Shushire",
                "title": "mesetasangregelida",
                "img": "mesetasangregelida",
                "nombre": "Meseta Sangre Gélida",  
                "youtube":[[-54,-256]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/9E-55cbc-Tc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "portal1":[[-468,228],["Colina del Viento Amargo"],["bottom"]], 
                "portal2":[[-82,856],["Acantilado de la Mariposa de Hielo"],["bottom"]], 
                "mokokos": [
                    [-209.5,587.5],
                    [26,463],   
                    [85,577],
                    [125.5,885],
                    [438,610.5],
                    [347.125,273.5],
                    [627.5,157.625],
                    [633,158.5],
                    [631.25,147.875],
                ],
                "vista": [[101,728.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"],
                ], 
                "afinidad": [[-177.875,387.125]],
                "afinidadnombre": [["dath de los Lobos Grises"]],  
                "ingrediente":[[-181.5,429.5]],
                "ingredientevendedor": [["Sardina zafiro"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra la sardina al mercader ambulante <b>Jeffrey</b> para preparar la <b>Sardina zafiro a la parrilla</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('marhelado','458,301')" class="guia">Helena</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/sardina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],
                "comercianteitinerante": [[-170.5,439]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Jeffrey</span></div>"]], 
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "pasillosecreto": [
                    [612.5,162]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Rompe las piedras para acceder a las 3 Mokokos.</div>"], 
                ],  
                "historiaoculta":[[-413,212],[-37.5,843.5],[449,593]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] El día en que murió un cazador</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[2/3] El día en que murió un cazador</span>"], 
                    ["<span class='historiaocultatit text-shadow'>El límite de la fe</span>"], 
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Shushire</h3> 
                    <div class="guiadiv"><button onclick="panto('mesetasangregelida','-38,848')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('acantiladodelamariposadehielo','-94,508.5')" class="guia">Tercera parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Shushire</h3> 
                    <div class="guiadiv"><button onclick="panto('mesetasangregelida','-414,214')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('acantiladodelamariposadehielo','-94,508.5')" class="guia">Tercera parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Shushire</h3> 
                    Interactúa con la tabla de madera.
                    </div>`], 
                ],
                "monstruos": [[115,592.5],[408,122]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-2.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-15.png'/></div>"],
                ],
                "mazmorra": [[677.5,444]],
                "nombreMazmorra": [["Templo de pico de escarcha"]],    
            }, 
            "geometry": { "type": "Point", "coordinates": [147.125,-44.0625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Shushire",
                "title": "acantiladodelamariposadehielo",
                "img": "acantiladodelamariposadehielo",
                "nombre": "Acantilado de la Mariposa de Hielo",  
                "portal1":[[124,78],["Meseta Sangre Gélida"],["left"]],  
                "youtube":[[-256,-186]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/q0eL7qlNfi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [-262.625,561.625], 
                    [-171.5,387.5],
                    [-176.25,383.5],
                    [-42.625,357],
                    [50.75,629.875],
                    [245.75,594.875],
                ],
                "vista": [[182.5,519.5],[-60,476.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</div>"],
                ], 
                "afinidad": [[515.5,492.25]],
                "afinidadnombre": [["poppy"]],  
                "ingrediente":[[18.5,376.5],[134.25,118.25]],
                "ingredientevendedor": [["Sardina zafiro"],["Larva de mariposa congelada"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra la sardina al mercader ambulante <b>Jeffrey</b> para preparar la <b>Sardina zafiro a la parrilla</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('marhelado','458,301')" class="guia">Helena</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/sardina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Acaba con las hadas cercanas y recoge la larva para registrarla en el tomo del aventurero de Shushire.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/larva.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],
                "comercianteitinerante": [[30,373.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Jeffrey</span></div>"]], 
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "pasillosecreto": [
                    [-133.25,389]
                ],
                "pasillosecretodesc": [ 
                    ["<div>Pasa entre los acantilados para llegar a las 2 Mokokos.</div>"], 
                ],  
                "historiaoculta":[[-94,508.5],[409,593.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[3/3] El día en que murió un cazador</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[1/3] Carta a mi amigo</span>"],  
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Shushire</h3>  
                    <div class="guiadiv"><button onclick="panto('mesetasangregélida','-413,212')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('mesetasangregélida','-37.5,843.5')" class="guia">Segunda parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Shushire</h3> 
                    <div class="guiadiv"><button onclick="panto('laberintodeespejos','-132,370')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('laberintodeespejos','366,438')" class="guia">Tercera parte</button></div>  
                    </div>`],  
                ], 
                "historiaadicional":[[-266.5,598.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Recuerdos errantes</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Shushire</h3>
                    Para iniciar la misión mata al <b>Espíritu sangriento Moun</b> que se encuentra en este punto y recoge el <b>Recuerdo del fantasma sangriento</b> para iniciar la misión.
                    <div style='text-align:center;padding-top: 15px'><img src='./imagenes/objetos/recuerdo.png'/></div></div>`],
                ],
                "monstruos": [[144.5,221],[-27.75,522.5],[-180.5,711.75],[413,408]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-5.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-12.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-11.png'/></div>"],
                ], 
                "jefesdezona": [[68.5,776.5]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Maneth</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/maneth.png'/></div>"]],
                "mazmorra": [[156.5,876]],
                "nombreMazmorra": [["Laberinto de Espejos"]],    
            }, 
            "geometry": { "type": "Point", "coordinates": [158.25,-46.09375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Shushire",
                "title": "lagodelaeternidad",
                "img": "lagodelaeternidad",
                "nombre": "Lago de la Eternidad",  
                "portal1":[[112,48],["Colina del Viento Amargo"],["left"]],
                "youtube":[[-204,-196]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/pnGqrDt4wug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],  
                "mokokos": [
                    [-93,219.625],
                    [182.375,272.625],
                    [81,683.5],
                    [286.25,778.875],
                    [409,492],
                    [488.375,401.875],
                    [513.75,364.75],
                    [562.25,626.875],
                    [554.5,634.75],  
                ],
                "vista": [[43.375,367.625],[192.5,587.75],[277,332.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"],
                ],  
                "ingrediente":[[19.25,334.875],[328.25,583.5]],
                "ingredientevendedor": [["Sardina zafiro"],["Huevo de araña escarchada"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra la sardina al mercader ambulante <b>Jeffrey</b> para preparar la <b>Sardina zafiro a la parrilla</b> en la cocinera: 
                    <div class="guiadiv"><button onclick="panto('marhelado','460.375,300.375')" class="guia">Helena</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/sardina.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Acaba con las arañas cercanas y recoge el huevo para agregarlo al tomo del aventurero de Shushire.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/huevoarana.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],
                "comercianteitinerante": [[31.625,335.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Jeffrey</span></div>"]], 
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "cancion": [[536.375,616.25]],
                "cancionicono": [["minuetodelbosque"]],
                "cancionnombre": [["Minueto del Bosque"]],                 
                "canciondesc": [["Toca la <b>Minueto del Bosque</b> para acceder a esta zona del mapa."]], 
                "historiaoculta":[[420.75,505],[459,406],[295,716]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] La nana de Tarsila</span>"], 
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-152px'>[2/3] La nana de Tarsila</span>"],  
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-152px'>[3/3] La nana de Tarsila</span>"],  
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Shushire</h3>  
                    <div class="guiadiv"><button onclick="panto('lagodelaeternidad','458,408')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelaeternidad','290,718')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Shushire</h3>
                    <div class="guiadiv"><button onclick="panto('lagodelaeternidad','424,524')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('lagodelaeternidad','290,718')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Shushire</h3>  
                    <div class="guiadiv"><button onclick="panto('lagodelaeternidad','424,524')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('lagodelaeternidad','458,408')" class="guia">Segunda parte</button></div>
                    </div>`], 
                ], 
                "historiaadicional":[[-7.5,870.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow' style='margin-left:-159px'>Dentro de los capullos</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Shushire</h3>
                    Para iniciar la misión debes completar la misión <b><img class="imgitem" src='./imagenes/objetos/mainquest.png'/>Castigo</b> de la historia principal.</div>`],
                ],
                "monstruos": [[172,723],[467,539],[534,388]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-3.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-4.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Shushire</h3><img class='monstruos-img' src='./imagenes/monstruos/ss-10.png'/></div>"],
                ],  
                "corazondegigante": [[314.75,747.25]],
                "corazondegigantedesc": [[`
                <p>Derrota a <b class='jefesdezona text-shadow'>Tarsila</b> para conseguir el Corazón de Gigante.</p>`]],
                "corazondegigantenum": [["<div>Nº 4</div>"]],
                "jefesdezona": [[293,747]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Tarsila</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/tarsila.png'/></div>"]],
                "mazmorra": [[-4.75,918]],
                "nombreMazmorra": [["Escondite de Vrad"]],    
            }, 
            "geometry": { "type": "Point", "coordinates": [152.125,-60.59375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rohendel",
                "title": "ruinasdexeneela",
                "img": "ruinasdexeneela",
                "nombre": "Ruinas de Xeneela",  
                "portal1":[[404,915.5],["Ladera Brisada"],["bottom"]],  
                "mokokos": [
                    [211,728], 
                    [241.625,600.125],
                    [190.25,390.25],
                    [215.625,392.25],
                    [381.625,394.75],
                    [403.625,411.5],
                    [417,450.875],
                    [481.375,188.5],
                    [622.75,605.75],
                ], 
                "cancion": [[182.75,391],[487.75,193.25],[393.75,411.5]],
                "cancionicono": [["canciondeeternidad"],["canciondeeternidad"],["canciondeeternidad"]],
                "cancionnombre": [["Canción de Eternidad"],["Canción de Eternidad"],["Canción de Eternidad"]], 
                "canciondesc": [["Toca la <b>Canción de Eternidad</b> para recoger la Mokoko."],["Toca la <b>Canción de Eternidad</b> para recoger la Mokoko."],["Toca la <b>Canción de Eternidad</b> para recoger la Mokoko."]],
                "pasillosecreto": [[229.25,595],[609.25,587.5]],
                "pasillosecretodesc": [
                    ["<div>Para poder pasar necesitas como mínimo 250 puntos de <b class='amabilidad'>Amabilidad</b>.</div>"],
                    [`<div>Para poder pasar necesitas crear el plato <b>Esencia de éter</b> y utilizarlo en este lugar. El plato lo prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    </div>`]
                ],
                "vista": [[631,243.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</div>"],
                ],
                "questtit": [["Juicio"],["El Ataque de la Bestia"],["Lo que queda en las ruinas"],["El libro de Armonía"]],
                "questdesc": [
                    ["Misión necesaria para desbloquear la misión <b class='questamarilla'>El libro de Armonía</b>"],
                    ["Misión necesaria para desbloquear la misión <b class='questamarilla'>El libro de Armonía</b>"],
                    ["Misión necesaria para desbloquear la misión <b class='questamarilla'>El libro de Armonía</b>"],
                    [`Completa las misiones de este mapa: 
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','380.5,524.25')" class="guia questamarilla">Juicio</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','334.5,535.5')" class="guia questamarilla">El Ataque de le Bestia</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','403.5,764.5')" class="guia questamarilla">Lo que queda en las ruinas</button></div>
                    Interactúa con el objeto para iniciar la misión necesaria para desbloquear <b class='questamarilla'>Torre del Agradecimiento</b>`],
                ],
                "quest":[[381,524],[335.75,535.75],[405.75,763.5],[357.5,510]],  
                "ingrediente":[[701,289],[671.25,287],[666.5,345.25],[674,366.5],[153.25,319.75],[513.5,113.5],[402,819]],
                "ingredientevendedor": [
                    ["Macarrón aceleracorazones"],
                    ["Primera comida elemental contaminada"],
                    ["Primera comida elemental contaminada"],
                    ["Primera comida elemental contaminada"],
                    ["Tercera comida elemental contaminada"],
                    ["Segunda comida elemental contaminada"],
                    ["Segunda comida elemental contaminada"],

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [2/4]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [2/4]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [2/4]</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [4/4]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [3/4]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [3/4]</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra el macarrón al mercader ambulante <b>Aricer</b> y añádelo al tomo del aventurero de Rohendel.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/macarron.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge la comida en uno de los tres puntos marcados para preparar <b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-326,312')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','402,818')" class="guia">Tercer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','153.25,319.75')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidacont.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge la comida en uno de los tres puntos marcados para preparar <b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div> 
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-326,312')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','402,818')" class="guia">Tercer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','153.25,319.75')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidacont.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge la comida en uno de los tres puntos marcados para preparar <b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-326,312')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','402,818')" class="guia">Tercer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','153.25,319.75')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidacont.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Mata al jefe de zona <b>Magmadon</b> para recibir la comida y poder crear la<b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-326,312')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','674,326.5')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','397,820')" class="guia">Tercer ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidacont.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div><div style="background:black; padding: 4px 0; margin-bottom: 5px">📌Este ingrediente se puede obtener de una gran diversidad de enemigos por todo Rohendel.</div>
                    Mata a la <b>Bestia de Xeneela mutada</b> para recibir la comida y poder crear la<b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-326,312')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','674,326.5')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','153,321')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidacont.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div><div style="background:black; padding: 4px 0; margin-bottom: 5px">📌Este ingrediente se puede obtener de una gran diversidad de enemigos por todo Rohendel.</div>
                    Mata a la <b>Bestia de Xeneela mutada</b> para recibir la comida y poder crear la<b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-326,312')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','674,326.5')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','153,321')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/comidacont.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],
                "comercianteitinerante": [[696.5,279]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Aricer</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "historiaoculta":[
                    [377.5,426.5],
                    [297.75,138.25],
                    [370.5,157.5],
                    [427.25,407],
                    [426.75,905.75],
                    [410,419],
                    [538.75,466.75],
                    [604.25,561],
                    [260.5,351],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[2/5] Palabras no pronunciadas</span>"], 
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-194px'>[3/5] Palabras no pronunciadas</span>"], 
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-194px'>[4/5] Palabras no pronunciadas</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[5/5] Palabras no pronunciadas</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[1/2] La canción del fantasma</span>"],  
                    ["<span class='historiaocultatit text-shadow'>[2/2] La canción del fantasma</span>"],  
                    ["<span class='historiaocultatit text-shadow'>[3/4] El pasado perdido</span>"], 
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-150px'>[4/4] El pasado perdido</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[2/3] Juramento de Ojos Azules</span>"], 
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('laderabrisada','-336,92')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','296,138')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','369,158')" class="guia">Cuarta parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','432,407')" class="guia">Quinta parte</button></div>
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('laderabrisada','-336,92')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','378.5,427.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','369,158')" class="guia">Cuarta parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','432,407')" class="guia">Quinta parte</button></div>
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('laderabrisada','-336,92')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','378.5,427.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','296,138')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','432,407')" class="guia">Quinta parte</button></div>
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('laderabrisada','-336,92')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','378.5,427.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','296,138')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','369,158')" class="guia">Cuarta parte</button></div>
                    </div>`], 

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','410.5,419')" class="guia">Segunda parte</button></div>
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','420,908')" class="guia">Primera parte</button></div>
                    </div>`], 

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('rothun','340,361')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('laderabrisada','239,630')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','604,562')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('rothun','340,361')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('laderabrisada','239,630')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','538,467.5')" class="guia">Tercera parte</button></div> 
                    </div>`], 

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('rothun','199.5,813')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','-105.5,522')" class="guia">Tercera parte</button></div> 
                    </div>`], 
                ],  
                "monstruos": [[500.5,173.25],[294.75,307.5],[388.5,205],[319.5,747.25],[541.5,351],[585.25,576.25],[231.93102422918759,466.6904755831213],[119.50104602052653,341.5325753131024]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-3.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-11.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-9.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-9.png'/></div>"],
                    
                ], 
                "jefesdezona": [[165.75,342.75]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Magmadon</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/magmadon.png'/></div>"]],
                "mazmorra": [[476.5,594.5]],
                "nombreMazmorra": [["Reino de los elementales"]],    
            }, 
            "geometry": { "type": "Point", "coordinates": [19.75,-138.625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rohendel",
                "title": "lagodelasolasestremecedoras",
                "img": "lagodelasolasestremecedoras",
                "nombre": "Lago de las Olas Estremecedoras", 
                "portal1":[[680,246],["Rothun"],["left"]],   
                "mokokos": [
                    [123.875,536.125],  
                    [111,476.75], 
                    [315,535], 
                    [393.875,604.875], 
                    [545.375,843.625], 
                    [133,315], 
                    [275.5,361.375], 
                    [474.875,224.25], 
                    [704.375,427.25], 
                    [753,470],
                ], 
                "pasillosecreto": [
                    [155.625,732.375], 
                    [317.5,554],
                    [380.5,604.75],
                    [696,468.75],
                    [279.75,356.25]
                ],
                "pasillosecretodesc": [
                    ["<div>Utiliza el portal para llegar a la vista y al ingrediente.</div>"], 
                    ["<div>Desciende por las enredaderas.</div>"],
                    ["<div>Para poder pasar necesitas como mínimo 250 puntos de Carisma.</div>"],
                    ["<div>Para poder pasar necesitas como mínimo 250 puntos de Valentía.</div>"], 
                    [`<div>Para poder llegar a la Mokoko necesitas utilizar el plato <b class="epico-texto">Cerveza de mantequilla de miel dulce</b> que prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div></div>`],
                ], 
                "questtit": [["Un libro mágico y extraño"]],
                "quest": [[132.75,530.5]], 
                "questdesc": [["Interactúa con la estantería para iniciar la misión necesaria para desbloquear la misión <b class='questamarilla'>Torre del Agradecimiento</b>"]],
                "cancion": [[113.75,472],[530.375,840.375],[480.25,225.625]],
                "cancionicono": [["canciondeeternidad"],["canciondeeternidad"],["canciondeeternidad"]],
                "cancionnombre": [["Canción de Eternidad"],["Canción de Eternidad"],["Canción de Eternidad"]], 
                "canciondesc": [["Toca la <b>Canción de Eternidad</b> para recoger la Mokoko."],["Toca la <b>Canción de Eternidad</b> para recoger la Mokoko."],["Toca la <b>Canción de Eternidad</b> para recoger la Mokoko."]],
                "vista": [[112.375,680.75],[595,656.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas' style='margin-left:-57px'>Nº 2</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"],
                ],  
                "ingrediente":[[697.75,421.5],[121.5,694.5],[687.875,435.125],[603.625,644.625]],
                "ingredientevendedor": [
                    ["Macarrón aceleracorazones"],
                    ["Gelatina masticable"],
                    ["Gelatina ñam, ñam"],
                    ["Gelatina ñam, ñam, ñam"],

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-53px'>Nº 2</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3 - [1/3]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3 - [2/3]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3 - [3/3]</span></div>"],
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra el macarrón al mercader ambulante <b>Aricer</b> y añádelo al tomo del aventurero de Rohendel.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/macarron.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge la gelatina para preparar <b>Chicle de gelatina</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','693.125,435.625')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','603.625,644.625')" class="guia">Tercer ingrediente</button></div>  
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/gelatina1.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge la gelatina para preparar <b>Chicle de gelatina</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','121.5,694.5')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','603.625,644.625')" class="guia">Tercer ingrediente</button></div>  
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/gelatina2.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge la gelatina para preparar <b>Chicle de gelatina</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','121.5,694.5')" class="guia">Primer ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','693.125,435.625')" class="guia">Segundo ingrediente</button></div> 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/gelatina3.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],
                "comercianteitinerante": [[697.875,431.125]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Aricer</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "historiaoculta":[
                    [306.5,609],
                    [300.75,567.5],
                    [461.75,250.75],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/4] La receta secreta</span>"], 
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-143px'>[2/4] La receta secreta</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[4/4] La receta secreta</span>"], 
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','300.75,567.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','-90,408')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','461.75,250.75')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','306.5,609')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','-90,408')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','461.75,250.75')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','306.5,609')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','300.75,567.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','-90,408')" class="guia">Tercera parte</button></div>
                    </div>`],  
                ],  
                "monstruos": [[620,403.75],[667.5,340.75]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-54px'>Nº 2</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-2.png'/></div>"], 
                    
                ],    
                "historiaadicional":[[285,346.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow' style='margin-left:-110px'>Viaje de vuelta</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Rohendel</h3>
                    Para poder iniciar la misión es necesario completar la misión <b class="questamarilla">Torre del Agradecimiento</b> y completar el encargo de Una <b class="verde-texto">Reparando la zona del sello</b>  7 veces.
                    <div class="guiadiv">
                    <button onclick="panto('rothun','536,668')" class="guia questamarilla">Torre del Agradecimiento
                    </div>
                    <div style='text-align:center;padding-top: 15px'><img src='./imagenes/objetos/una.png'/></div></div>`],
                ], 
                "skillpoint": [[296.25,348]],
                "skillpointnpc": [["Viaje de vuelta"]],
                "skillpointguia": [[`<div style='padding: 0 10px 10px 10px; text-align: center;'><p>Para recibir los 3 puntos de habilidad completa la Otra historia <b>Viaje de vuelta</b>.</p>
                <div class='guiadiv'>
                <a class='guia' target='_blank' href='https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/'>Guía completa</a>
                </div></div>`]],
            }, 
            "geometry": { "type": "Point", "coordinates": [38.375,-137.71875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rohendel",
                "title": "rothun",
                "img": "rothun",
                "nombre": "Rothun", 
                "portal1":[[252,138],["Lago del Loto Negro"],["left"]],  
                "portal2":[[-116,786],["Lago de las Olas Estremecedoras"],["bottom"]],     
                "mokokos": [
                    [246,550],   
                    [326.125,623.125], 
                    [333.5,739.5], 
                    [586,684], 
                    [596.375,648.25], 
                    [606.75,748.75], 
                    [392,321.5], 
                    [-138.75,460.75],
                ], 
                "pasillosecreto": [
                    [312.625,617],[572.75,685],[385,331.5] 
                ],
                "pasillosecretodesc": [
                    [`<div>Para poder llegar a la Mokoko necesitas utilizar el plato <b class="epico-texto">Cerveza de mantequilla de miel dulce</b> que prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div></div>`],
                    [`Necesitas <b class="verde-texto">250</b> de <b class="sabiduria">Sabiduría</b> para poder recoger la mokoko, acércate al pilón de la imágen para ir a la sala secreta.
                    <div style="text-aling:center; margin-top: 10px"><img width="300px" src="./imagenes/secretos/mokokorothun.png"></div>`],
                    [`La Mokoko se encuentra dentro del edificio, en la parte derecha de las escaleras:
                    <div style="text-aling:center; margin-top: 10px"><img width="300px" src="./imagenes/secretos/rothunmokoko.png"></div>`]
                ], 
                "cancion": [[604,659],[258,570.5]],
                "cancionicono": [["canciondeeternidad"],["canciondeeternidad"]],
                "cancionnombre": [["Canción de Eternidad"],["Canción de Eternidad"]],
                "canciondesc": [["Toca la canción <b>Canción de Eternidad</b> para revelar a la Mokoko."],["Toca la canción <b>Canción de Eternidad</b> para revelar a la Mokoko."]], 
                "questtit": [["Quest"],["Torre del Agradecimiento"]],
                "questdesc": [
                    ["Icono orientativo para indicar misiones en otras guías o fichas de isla."],
                    [`Completa las siguientes misiones para poder desbloquearla:
                    <div class="guiadiv">
                    <button onclick="panto('lagodelasolasestremecedoras','131,531')" class="guia questamarilla">Un libro mágico y extraño
                    </div>
                    <div class="guiadiv">
                    <button onclick="panto('sombradeelzowin','362,400')" class="guia questamarilla">El libro del tiempo
                    </div>
                    <div class="guiadiv">
                    <button onclick="panto('laderabrisada','540,396')" class="guia questamarilla">El grimorio de magia
                    </div>
                    <div class="guiadiv">
                    <button onclick="panto('laderabrisada','-11,745')" class="guia questamarilla">El grimorio de fuego
                    </div>
                    <div class="guiadiv">
                    <button onclick="panto('ruinasdexeneela','355.5,510.5')" class="guia questamarilla">El libro de la armonía
                    </div>
                    `],
                ],
                "quest": [[255,334.5],[541.5,665]],
                "vista": [[302.75,610.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas' style='margin-left:-57px'>Nº 1</div>"],
                ],  
                "cocinero": [[46.5,96.25]],
                "cocineronombre":["ailara"],
                "cocinerorecetas": [`
                <div style='text-align:center; max-height: 500px; overflow-y:scroll;padding: 0 5px 0 0;'>
                    Ailara permite cocinar hasta 4 platos únicos con los ingredientes de Rohendel. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Cerveza de mantequilla de miel dulce</td><td>
                    Crear este plato es aleatorio, vuleve a intentarlo si no lo consigues.<div class="guiadiv"><button onclick="panto('rothun','27.5,103')" class="guia">Rothun.</button></div>
                    </td></tr>
                    <tr><td>Chicle de gelatina</td><td> 
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','124,695')" class="guia">[1/3] -Lago de las olas estremecedoras</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','687.75,435.125')" class="guia">[2/3] -Lago de las olas estremecedoras</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','605,643')" class="guia">[3/3] -Lago de las olas estremecedoras</button></div>
                    </td></tr>
                    <tr><td>Comida elemental brillante</td><td>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-323.5,322')" class="guia">[1/4] - Ruinas de Xeneela</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','667,321')" class="guia">[2/4] - Ruinas de Xeneela</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','513.5,114')" class="guia">[3/4] - Ruinas de Xeneela</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','153,320.5')" class="guia">[4/4] - Ruinas de Xeneela</button></div>
                    Utiliza la <b>Comida elemental brillante</b> para obtener, con suerte, el plato <b>Zechbas</b>. Añádelo al tomo del aventurero de Rohendel.
                    </td></tr>
                    <tr><td>Esencia de éter</td><td>
                    <div class="guiadiv"><button onclick="panto('rothun','11,86')" class="guia">[1/2] - Rothun.</button></div>
                    El segundo ingrediente se obtiene al alcanzar el nivel 2 de reputación en la misión <b>Hada perversa</b> de los encargos de Una.
                    </td></tr>
                    <tr><td>Brazo de gitano de caracol</td><td>
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','17,472')" class="guia">Sombra de Elzowin.</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-170.5,368')" class="guia">Lago del Loto negro.</button></div>
                    </td></tr>  
                    <tr><td>Sopa tuki tuki</td><td>
                    <div class="guiadiv"><button onclick="panto('laderabrisada','-226,478')" class="guia">Ladera Brisada</button></div> 
                    </td></tr>
                    </tbody>
                    </table>
                </div>`],
                "ingrediente":[[27.5,103.5],[13,87.5]],
                "ingredientevendedor": [
                    ["[1/2] Mantequilla de miel y [2/2] Cerveza"],
                    ["Concentrado de energía azul"], 

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1 - [1/2]</span></div>"],  
                ],
                "descripcioningrediente": [ 
                    [`<div>Compra la <b>cerveza</b> y la <b>mantequilla</b> a la mercader Eiza para poder preparar la <b class="epico-texto">Cerveza de mantequilla de miel dulce</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <ul style='text-align:center;'>
                    <li><img src='./imagenes/ingrediente/cerveza.png' /><span style='position:fixed; margin:25px 0 0 10px'></span><img src='./imagenes/ingrediente/mantequillamiel.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li>
                    </ul></div>`],  
                    [`<div>Compra el <b>concentrado</b> a la mercader Eiza para poder preparar la <b>Esencia de éter</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <ul style='text-align:center;'>
                    <li><img src='./imagenes/ingrediente/energi.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li>
                    </ul></div>`],
                ],
                "historiaoculta":[
                    [197.5,812.25],
                    [341,361.5],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] Juramento de Ojos Azules</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/4] El pasado perdido</span>"],   
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Rohendel</h3>   
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','262,354')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','-105.5,522')" class="guia">Tercera parte</button></div> 
                    </div>`],  
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('laderabrisada','239,630')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','539.25,467.25')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','603.75,561.25')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                ],  
                "subzonaciudad":[[345,289.5]],
                "subzonaciudadNombre":[["Rothun planta baja"]], 
                "subzonaciudad2": [[393,299.5]],
                "subzonaciudadNombre2":[["Rothun segundo piso"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [30,-134.25] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rohendel",
                "title": "lagodellotonegro",
                "img": "lagodellotonegro",
                "nombre": "Lago del Loto Negro",  
                "portal1":[[-468,228],["Ladera Brisada"],["bottom"]], 
                "portal2":[[-208,602],["Rothun"],["right"]], 
                "mokokos": [
                    [-311.5,239],
                    [-116.25,117],   
                    [313.75,261.75],   
                    [242.625,559.875],   
                    [379.5,783.5],   
                    [332.625,582],   
                    [543.5,195.75],   
                    [582.25,163],   
                    [684.25,374],   
                ],  
                "cancion": [[-120.25,127.75],[-313.25,249.25]],
                "cancionicono": [["canciondeeternidad"],["canciondeeternidad"]],
                "cancionnombre": [["Canción de Eternidad"],["Canción de Eternidad"]],  
                "canciondesc": [
                    ["Toca la canción <b>Canción de Eternidad</b> al lado de la flor para revelar la Mokoko."],
                    ["Toca la canción <b>Canción de Eternidad</b> al lado de la flor para revelar la Mokoko."],
                ], 
                "pasillosecretodesc": [
                    [`<div>Para poder llegar a la Mokoko necesitas utilizar el plato <b>Esencia de éter</b> que prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div></div>`], 
                    ["<div>Para poder pasar necesitas como mínimo 250 puntos de <b class='valentia'>Valentía</b>.</div>"],
                ], 
                "pasillosecreto": [
                    [232,576],  
                    [558,198.75]
                ],
                "vista": [[-116.125,380.25],[274,210.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"],
                ],  
                "comercianteitinerante": [[393,370.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Aricer</span></div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]], 
                "ingrediente":[
                    [397.25,377.75],
                    [-366.5,263],
                    [-291.5,290],
                    [-306,371.5],
                    [-168.5,368.5],
                    [-29.75,235.5]
                ],
                "ingredientevendedor": [ 
                    ["Macarrón aceleracorazones"], 
                    ["Concentrado de energía azul"], 
                    ["Concentrado de energía azul"], 
                    ["Concentrado de energía azul"], 
                    ["Receta secreta de pastel"], 
                    ["Concentrado de energía azul"], 

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [1/4]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [1/4]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [1/4]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [2/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6 - [1/4]</span></div>"],   
                ],
                "descripcioningrediente": [  
                    [`<div>Compra el macarrón al mercader ambulante <b>Aricer</b> y añádelo al tomo del aventurero de Rohendel.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/macarron.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge la <b>flor</b> para poder cocinar la <b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','669.5,329.25')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','515,114')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','154,322')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/flor.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge la <b>flor</b> para poder cocinar la <b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','669.5,329.25')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','515,114')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','154,322')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/flor.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge la <b>flor</b> para poder cocinar la <b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','669.5,329.25')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','515,114')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','154,322')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/flor.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Aumenta la reputación con <b class="afinidad">Orelda</b> a <b class="confianza">Confianza</b> para reclamar la <b class="epico-texto">Receta secreta de pastel</b> para poder cocinar el <b class="legendario-texto">Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','17,472')" class="guia">Primer ingrediente</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/recetapastel.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge la <b>flor</b> para poder cocinar la <b>Comida elemental brillante</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','669.5,329.25')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','515,114')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','154,322')" class="guia">Cuarto ingrediente</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/flor.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                ],
                "historiaoculta":[
                    [179.75,204.5], 
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>La historia de mi abuelo</span>"],  
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Rohendel</h3>  
                    Interactúa con el objeto.
                    </div>`],   
                ],   
                "questtit": [["Asedio al santuario"],["¡Demonios!"],["La carta perdida"],["Elemental del bosque herido"],["El chamkuri del bosque"]], 
                "quest":[[139.5,349.25],[-149.25,348.5],[-56,598],[283,810],[295,658]],
                "questdesc":[
                    [`Quest necesaria para desbloquear la Otra Historia <b class='historiaadicionaltit'>La música resuena en Elzowin</b>`],
                    [`Completa la cadena de misiones para conseguir <b class='verde-texto'>10</b> puntos de <b class='amabilidad'>Amabilidad</b>
                    <p>Las otras misiones están en</p>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-56,598')" class="guia">Segunda misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','283,810')" class="guia">Tercera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','295,658')" class="guia">Cuarta misión</button></div>
                    `],
                    [`Completa la cadena de misiones para conseguir <b class='verde-texto'>10</b> puntos de <b class='amabilidad'>Amabilidad</b>
                    <p>Las otras misiones están en</p>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-149.25,348.5')" class="guia">Primera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','283,810')" class="guia">Tercera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','295,658')" class="guia">Cuarta misión</button></div>
                    `],
                    [`Completa la cadena de misiones para conseguir <b class='verde-texto'>10</b> puntos de <b class='amabilidad'>Amabilidad</b>
                    <p>Las otras misiones están en</p>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-149.25,348.5')" class="guia">Primera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-56,598')" class="guia">Segunda misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','295,658')" class="guia">Cuarta misión</button></div>
                    `],
                    [`Completa la cadena de misiones para conseguir <b class='verde-texto'>10</b> puntos de <b class='amabilidad'>Amabilidad</b>
                    <p>Las otras misiones están en</p>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-149.25,348.5')" class="guia">Primera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-56,598')" class="guia">Segunda misión</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','283,810')" class="guia">Tercera misión</button></div> 
                    `]
                ],
                "historiaadicional":[[124,348]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>La música resuena en Elzowin</span>"], 
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Rohendel</h3> 
                    Si quieres consultar todas las misiones de la cadena <a href="https://lostarkcodex.com/sp/quest/106104/" target="_blank">pulsa aquí</a>.<br/> 
                    Guía en proceso.
                    </div>`],
                ], 
                "afinidad": [[-163,359.75]],
                "afinidadnombre": [["orelda"]],  
                "monstruos": [[259,284.5],[-188,272.5],[596.5,450.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-3.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-4.png'/></div>"], 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-5.png'/></div>"], 
                ], 
            }, 
            "geometry": { "type": "Point", "coordinates": [32.5,-127.625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rohendel",
                "title": "sombradeelzowin",
                "img": "sombradeelzowin",
                "nombre": "Sombra de Elzowin",  
                "portal1":[[-194,430],["Rothun planta baja"],["bottom"]],  
                "mokokos": [
                    [138.5,221], 
                    [255.5,190],
                    [198,677],
                    [378,407],
                    [559.5,767],
                    [526.5,461.5],
                    [528.125,477.375],
                    [610,451.375],
                    [580.5,35],  
                ], 
                "cancion": [[372,414],[135,229.75]],
                "cancionicono": [["canciondeeternidad"],["canciondeeternidad"]],
                "cancionnombre": [["Canción de Eternidad"],["Canción de Eternidad"]],  
                "canciondesc": [
                    ["Toca la canción <b>Canción de Eternidad</b> para revelar la Mokoko."],
                    ["Toca la canción <b>Canción de Eternidad</b> para revelar la Mokoko."],
                ], 
                "pasillosecreto": [
                    [505.25,471.25],  
                    [582.75,461.875]
                ],
                "pasillosecretodesc": [
                    ["<div>Para poder pasar necesitas como mínimo 250 puntos de sabiduría.</div>"],
                    [`<div>Para poder llegar a la Mokoko necesitas utilizar el plato <b>Esencia de éter</b> que prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div></div>`], 
                ],
                "quest" :[[361.5,400.25],[553.75,93.75]],
                "questtit":[["El libro del tiempo"],["El libro del tiempo: El futuro"]],
                "questdesc":[
                    [`Interactúa con el objeto para iniciar la misión necesaria para desbloquear la misión <b class='questamarilla'>Torre del Agradecimiento</b>.   
                    <div class="guiadiv"><button onclick="panto('sombradeelzowin','554,94.25')" class="guia">Lee el libro aquí</button></div>`],
                    [`Lee el libro aquí, de la misión <div class="guiadiv"><button onclick="panto('sombradeelzowin','360,401.5')" class="guia">El libro del tiempo</button></div>`],

                ],
                "vista": [[221.5,690.5],[519,491.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</div>"],
                ],  
                "comercianteitinerante": [[276,624.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Aricer</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],  
                "ingrediente":[
                    [292.25,624], 
                    [-113,467.25],
                    [14.5,472.25],
                    [115.75,621.5],
                    [182.5,694],
                    [269.5,727],
                    [473.25,683.5],
                    [585.125,784],
                    [174.375,277.125],
                    [174.75,339],
                    [85.25,245.75],
                ],
                "ingredientevendedor": [ 
                    ["Macarrón aceleracorazones"], 
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  
                    ["Caracol mágico"],  

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-94px'>Nº 7 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/2]</span></div>"],  
                ],
                "descripcioningrediente": [  
                    [`<div>Compra el macarrón al mercader ambulante <b>Aricer</b> y añádelo al tomo del aventurero de Rohendel.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/macarron.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>Recoge el <b>caracol</b> para poder cocinar el <b>Brazo de gitano de caracol</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodellotonegro','-171,368')" class="guia">Segundo ingrediente</button></div>
                    Necesitarás un total de 200 caracoles para crear el plato. 100 para <b>Caracol albino mágico</b> y otros 100 para el plato final.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caracolmagico.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    
                ],
                "historiaoculta":[
                    [501.625,465.5], 
                    [534.375,492.875],
                    [564.625,481.5],
                    [-96,406.5],
                    [-103.25,521.25],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] El cazador silino</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[2/3] El cazador silino</span>"],  
                    ["<span class='historiaocultatit text-shadow'>[3/3] El cazador silino</span>"],  
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-143px'>[3/4] La receta secreta</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[3/3] Juramento de Ojos Azules</span>"],  
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Rohendel</h3>  
                    Interactúa con el objeto.
                    </div>`],  
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Rohendel</h3>  
                    Interactúa con el objeto.
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Rohendel</h3>  
                    Interactúa con el objeto.
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Rohendel</h3>   
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','306.5,609')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','300.75,567.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('lagodelasolasestremecedoras','461.75,250.75')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('rothun','212,814')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','262,354')" class="guia">Segunda parte</button></div>  
                    </div>`], 
                ],  
                "afinidad": [[632,685.5]],
                "afinidadnombre": [["lenora"]],  
                "monstruos": [[-89,522.5],[-41,542],[234.5,205.5],[434,467]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-12.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-13.png'/></div>"], 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-14.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-15.png'/></div>"], 
                    
                ], 
                "mazmorra": [[593.5,56]],
                "nombreMazmorra": [["Palacio Fantasma"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [39.4375,-125.0625] } 
        }, 
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rohendel",
                "title": "laderabrisada",
                "img": "laderabrisada",
                "nombre": "Ladera Brisada",  
                "portal1":[[-292,96],["Ruinas de Xeneela"],["left"]],
                "portal2":[[694,432],["Lago del Loto Negro"],["top"]],
                "mokokos": [
                    [-421,539.5], 
                    [-426,415], 
                    [-373.5,223.5], 
                    [-157,729.75], 
                    [285.75,844.5], 
                    [133.25,332], 
                    [281.5,520.5], 
                    [228.25,420],
                    [257.5,415.25]
                ],  
                "cancion": [[-430,424.25],[277.5,834.75]],
                "cancionicono": [["canciondeeternidad"],["canciondeeternidad"]],
                "cancionnombre": [["Canción de Eternidad"],["Canción de Eternidad"]],  
                "canciondesc": [
                    ["Toca la canción <b>Canción de Eternidad</b> al lado de los troncos con agua para revelar la Mokoko."],
                    ["Toca la canción <b>Canción de Eternidad</b> al lado de los troncos con agua para revelar la Mokoko."],
                ], 
                "pasillosecreto": [
                    [203.5,408.5],  
                    [247,425.5]
                ],
                "pasillosecretodesc": [
                    ["<div>Escala por las enredaderas.</div>"],
                    [`<div>Para poder llegar a la Mokoko necesitas utilizar el plato <b class="epico-texto">Cerveza de mantequilla de miel dulce</b> que prepara la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div></div>`], 
                ], 
                "questtit": [["El grimorio de magia"],["El grimorio en el fuego"]],
                "questdesc": [
                    ["Mata Golems hasta conseguir el <b>Fragmento blando de Gólem</b> para iniciar la misión. Misión necesaria para desbloquear la misión <b class='questamarilla'>Torre del Agradecimiento</b>"],
                    ["Interactúa con el objeto para iniciar la misión necesaria para desbloquear la misión <b class='questamarilla'>Torre del Agradecimiento</b>"]
                ],
                "quest":[[540,394],[-8.25,740.25]],
                "vista": [[183.625,543.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"],
                ],  
                "comercianteitinerante": [[157.5,422.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Aricer</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "ingrediente":[
                    [161,410], 
                    [-230.75,476],
                    [387,766.5],
                ],
                "ingredientevendedor": [ 
                    ["Macarrón aceleracorazones"], 
                    ["Lágrimas de tuki capturado"],  
                    ["Lágrimas de tuki capturado"],

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"],   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"], 
                ],
                "descripcioningrediente": [  
                    [`<div>Compra el macarrón al mercader ambulante <b>Aricer</b> y añádelo al tomo del aventurero de Rohendel.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/macarron.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>En este punto, rara vez, aparece un monstruo que al matarlo soltará el ingrediente para poder cocinar <b>Sopa tuki tuki</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    El segundo ingrediente se obtiene alcanzando la reputación nivel 3 en el encargo de Una <b class="verde-texto">Reparando la zona del sello</b> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/lagrimastuki.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                    [`<div>En este punto, rara vez, aparece un monstruo que al matarlo soltará el ingrediente para poder cocinar <b>Sopa tuki tuki</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('rothun','48,97.5')" class="guia">Ailara</button></div>
                    El segundo ingrediente se obtiene alcanzando la reputación nivel 3 en el encargo de Una <b class="verde-texto">Reparando la zona del sello</b> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/lagrimastuki.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`], 
                ],
                "historiaoculta":[
                    [239,630], 
                    [-334,92.75], 
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[2/4] El pasado perdido</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[1/5] Palabras no pronunciadas</span>"],   
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Rohendel</h3>   
                    <div class="guiadiv"><button onclick="panto('rothun','340,361')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','539.25,467.25')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','603.75,561.25')" class="guia">Cuarta parte</button></div> 
                    </div>`],  
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Rohendel</h3>  
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','378.5,427.5')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','296,138')" class="guia">Tercera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','369,158')" class="guia">Cuarta parte</button></div>
                    <div class="guiadiv"><button onclick="panto('ruinasdexeneela','432,407')" class="guia">Quinta parte</button></div>
                    </div>`],
                    
                ],    
                "monstruos": [[-113,362.5],[-11,658.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-6.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Rohendel</h3><img class='monstruos-img' src='./imagenes/monstruos/rh-7.png'/></div>"],                   
                    
                ],  
            }, 
            "geometry": { "type": "Point", "coordinates": [23,-124.375] } 
        }, 
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yorn",
                "title": "cunadeyorn",
                "img": "cunadeyorn",
                "nombre": "Cuna de Yorn", 
                "portal1":[[676,338],["Gran Castillo"],["top"]], 
                "mokokos": [
                    [233.75,774.25], 
                    [428.5,500.5],
                    [551.5,919],
                    [619.75,828.25],
                    [641.5,459.25], 
                    [625.5,388],
                    [587.5,263],
                    [453.25,238.75],
                    [83.25,503.5]
                ], 
                "cancion": [[235.5,768.25],[92,503.25],[616.25,390.25]],
                "cancionicono": [["armaromantica"],["armaromantica"],["armaromantica"]],
                "cancionnombre": [["Arma Romántica"],["armaromantica"],["armaromantica"]],
                "canciondesc": [["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."]], 
                "pasillosecreto": [
                    [583.5,873],  
                    [623.5,463.5],
                    [443.25,224.75],
                    [311.75,134.75],
                    [458.75,70.25],
                    [442,485]
                ],
                "pasillosecretodesc": [
                    ["<div>Pasa entre el cofre y el barril y sigue por el pasillo hasta llegar a la Mokoko.</div>"],
                    [`<div>Necesitas 300 de <b class="carisma">Carisma</b> o más para poder pasar.</div>`], 
                    [`<div>Necesitas 300 de <b class="sabiduria">Sabiduría</b> o más para poder pasar.</div>`], 
                    [`<div>Mata a los monstruos cercanos y desciende por el acantilado pulsando la tecla 'G', recogerás la Mokoko que está en el centro del mapa.</div>`],  
                    [`<div>Atraviesa la pared invisible para llegar a la vista.</div>`], 
                    [`<div>El pasillo secreto empieza está:
                    <div class="guiadiv"><button onclick="panto('cunadeyorn','312,130')" class="guia">Aquí</button></div></div>`], 
                ], 
                "vista": [[474,88.5],[397,682.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"],
                ],  
                "comercianteitinerante": [[451.5,860.75]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Laitir</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "ingrediente":[
                    [441.25,855.75], 
                    [598.5,224], 
                ],
                "ingredientevendedor": [ 
                    ["Ron de callejón"], 
                    ["Guiso de marisco denso"],   

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/3]</span></div>"], 
                ],
                "descripcioningrediente": [  
                    [`<div>Compra el Ron al Mercader ambulante por <b>1 millón de plata</b> para poder preparar el <b class="epico-texto">Ron maravilloso</b> y llévaselo a la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/rondecallejon.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Completa el encargo de Una <b class="verde"><img class="imgitem" src='./imagenes/objetos/una.png' />Control de calidad</b> para recibir el <b class="raro-texto">Cofre de comida para vender</b>. 
                    Abre el cofre para conseguir el <b class="raro-texto">Marisco importado de calidad</b> y poder recoger el <b class="epico-texto">Guiso de marisco denso</b> del caldero. Llévale el guiso a la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    El resto de ingredientes se encuentran en:
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','108,181.5')" class="guia">Antesala de la Promesa</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','412,497')" class="guia">Mina del Yunque Negro</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/guisodemarisco.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],
                "monstruos": [[323,502],[333,228],[456,279]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-2.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-3.png'/></div>"],                   
                    
                ],  
            }, 
            "geometry": { "type": "Point", "coordinates": [9.71875,-186.875] } 
        }, 
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yorn",
                "title": "grancastillo",
                "img": "grancastillo",
                "nombre": "Gran Castillo",  
                "portal1":[[203,87],["Jardín Inacabado"],["left"]], 
                "portal2":[[-104,402],["Cuna de Yorn"],["bottom"]], 
                "portal3":[[446,924],["Mina del Yunque Negro"],["right"]], 
                "mokokos": [
                    [19.75,156], 
                    [115,50],
                    [213.25,209.25],
                    [326,465],
                    [663,556], 
                    [348,161],
                    [316.5,95.5], 
                    [242,725]
                ],  
                "misionsecreta":[[127.5,531.5]],
                "misionsecretatit":[["Misión secreta"]],
                "misionsecretadesc":[["Cómprale la <b class='verde-texto'>Moneda de la Suerte</b> al mercader para iniciar la misión secreta."]], 
                "questtit": [["Ebentur, el aventurero legendario"]],
                "questdesc": [
                    [`Primera misión de la cadena de una de las <b class="nowrap"><img class="imgitem" src='./imagenes/iconos/misionsecreta.png' />misiones secretas.</b> de Yorn
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','579.5,390.5')" class="guia">Segunda misión</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','253.75,459')" class="guia">Tercera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','230,346.25')" class="guia">Cuarta misión</button></div> 
                    `]],
                "quest":[[141.5,84.5]],
                "pasillosecreto": [[26.5,159.25]],
                "pasillosecretodesc": [
                    [`<div>Necesitas <b class='amabilidad'>300 de Amabilidad</b> para recoger la Mokoko.
                    <img width="300px" style="margin: 15px 0" src="./imagenes/secretos/grancastillomokoko.jpg"></div>
                    La sala se encuentra en la habitación del
                    <div class="guiadiv"><button onclick="panto('grancastillo','194,173.5')" class="guia"> Cocinero del castillo</button></div> 
                    `],   
                ],   
                "cancion": [[197,194.5],[341,151.25]],
                "cancionicono": [["armaromantica"],["armaromantica"]],
                "cancionnombre": [["Arma Romántica"],["Arma Romántica"]],
                "canciondesc": [[`Toca la canción <b>Arma Romántica</b> para revelar la Mokoko.
                <img width="300px" src="./imagenes/secretos/grancastillomokoko2.jpg"></div>`],["Toca la canción <b>Arma Romántica</b> para revelar a la Mokoko."]], 
                "vista": [[325.25,104.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"],
                ],   
                "ingrediente":[
                    [229.5,636.5],
                    [193,156.5]  
                ],
                "ingredientevendedor": [ 
                    ["Surtido de jamón de vagón de mina entero"],   
                    ["Cofre de quesos y botas malolientes"],  
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3</span></div>"],    
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left: -57px'>Nº 4</span></div>"],    
                ],
                "descripcioningrediente": [  
                    [`<div>Sube el nivel de <b class="afinidad">afinidad</b> a <b class="confianza">Confianza</b> con <b class="afinidad">Neria</b> para oconseguir el Jamón y poder preparar la <b class="epico-texto">Fiambrera de vagón de mina</b>. Llévaselo a la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/surtidodejamon.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Compra <b class="verde-texto">Cofre de quesos malolientes</b> y <b class="verde-texto">Cofre de botas malolientes</b> a la cocinera Sufur hasta conseguir:
                    <ul>
                        <li style="margin-bottom:10px"><img class="imgitem comun" src="./imagenes/ingrediente/quesofermentado.png" /><b class="verde-texto"> x15</b> Queso fermentado</li>
                        <li style="margin-bottom:10px"><img class="imgitem raro" src="./imagenes/ingrediente/quesofermentado.png" /><b class="raro-texto"> x2 Queso sobrefermentado</b></li>
                        <li style="margin-bottom:10px"><img class="imgitem comun" src="./imagenes/ingrediente/botasconolor.png" /><b class="verde-texto"> x15 Boras apestosas</b></li>
                        <li><img class="imgitem raro" src="./imagenes/ingrediente/botasconolor.png" /><b class="raro-texto"> x3 Botas con olor raro</b></li>
                    </ul>
                    <p>Una vez consigas todos los ingredientes ya podrás crear el <b class="epico-texto">Aperitivo de queso de neria</b> en el cocinero:</p>
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Bazur</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/cofre.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],    
                ],  
                "cocinero": [[215.5,174]],
                "cocineronombre":["Bazur"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Bazur permite cocinar hasta 7 platos únicos con los ingredientes de Yorn. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Ron maravilloso</td><td><div class="guiadiv"><button onclick="panto('cunadeyorn','442,855')" class="guia">Cuna de Yorn</button></div></td></tr>
                    <tr><td>Cerveza coolkur</td><td> 
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','320,460.5')" class="guia">Mina del Yunque Negro</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','331.5,471.5')" class="guia">Mina del Yunque Negro</button></div>
                    </td></tr>
                    <tr><td>Fiambrera de vagón de mina</td><td><div class="guiadiv"><button onclick="panto('grancastillo','229.5,635')" class="guia">Gran Castillo</button></div></td></tr>
                    <tr><td>Aperitivo de queso de neria</td><td><div class="guiadiv"><button onclick="panto('grancastillo','184,145')" class="guia">Gran Castillo</button></div></td></tr>
                    <tr><td>Revuelto de setas gourmet</td><td>
                    <div class="guiadiv"><button onclick="panto('jardíninacabado','6,142')" class="guia">Jardín Inacabado</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','496,738')" class="guia">Mina del Martillo Férreo</button></div></td></tr> 
                    <tr><td>Gelatina de cabeza de lombriz</td><td><div class="guiadiv"><button onclick="panto('minadelmartilloférreo','358,410')" class="guia">Mina del Martillo Férreo</button></div> </td></tr>
                    <tr><td>Guiso genial</td>
                    <td>
                    <div class="guiadiv"><button onclick="panto('cunadeyorn','598,225.5')" class="guia">Cuna de Yorn</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','411.75,498')" class="guia">Mina del Yunque Negro</button></div>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','110,188')" class="guia">Antesala de la promesa</button></div>
                    </td></tr>
                    </tbody>
                    </table>
                </div>`],
                "historiaoculta":[[178.5,184],[115.5,103.25],[499.75,203],[407,664]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] La despedida de soltero de Mukar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] Obras maestras de Umar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/2] Sobre al Reina Rivera</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] Obras maestras de Umar</span>"],],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Yorn</h3>
                    <img src="./imagenes/secretos/yorn-tomo1.png" width="300px"/>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','250,130')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('puertodekrona','192.75,851.25')" class="guia">Tercera parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Yorn</h3>
                    <img src="./imagenes/secretos/yorn-tomo-6-3.png" width="300px"/>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','172,386')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('grancastillo','405,667')" class="guia">Segunda parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','-140,584')" class="guia">Segunda parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('grancastillo','118,103')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('grancastillo','118,103')" class="guia">Tercera parte</button></div> 
                    </div>`],
                ],
                "historiaadicional":[[252.5,649.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Bitterly!</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Yorn</h3>
                    <img style="width: 200px; height: auto" src="https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png" alt="En construcción" />
                    </div>`],
                ], 
                "afinidad": [[239.5,629.75],[229.25,665.5],[453.25,239]],
                "afinidadnombre": [["neria5"],["bailarín Imar"],["kaysarr"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [4.109375,-193.25] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yorn",
                "title": "minadelyunquenegro",
                "img": "minadelyunquenegro",
                "nombre": "Mina del Yunque Negro", 
                "portal1":[[163,101],["Gran Castillo"],["left"]], 
                "portal2":[[294,909],["Mina del Martillo Férreo"],["right"]],  
                "mokokos": [
                    [99.75,198.75],  
                    [191.25,281.5],
                    [248.75,98],
                    [274.25,430],
                    [313,361.25],
                    [312.75,562.25],
                    [517,443.75],
                    [509.25,417.25],
                    [549.75,357.75],
                    [514.75,322.25],
                    [503.25,249.25],
                ], 
                "misionsecreta":[[582.5,388.5]],
                "misionsecretatit":[["Misión secreta"]],
                "misionsecretadesc":[
                    [`Interactúa con el objeto del suelo para iniciar la misión <b class='questnormal'>Un duelo de shugo gigante</b>. 
                    <div class="guiadiv"><button onclick="panto('grancastillo','146.5,81')" class="guia">Primera misión</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','253.75,459')" class="guia">Tercera misión</button></div> 
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','230,346.25')" class="guia">Cuarta misión</button></div> 
                    `]
                ], 
                "questtit": [["Quest"]],
                "questdesc": [["Icono orientativo para indicar misiones en otras guías o fichas de isla."]],
                "quest":[[81.25,202.75]],
                "pasillosecreto": [[66.5,203],[166.5,259],[246.5,110.75],[510,357.25],[497.5,344],[515,431.25],[342,579.25],],
                "pasillosecretodesc": [ 
                    ["Desciende por los railes para llegar a la Mokoko."],  
                    ["Desciende por los railes para llegar a la Mokoko."],  
                    [`Utiliza la <b class='epico-texto'><img class="imgitem epico"  src="./imagenes/ingrediente/bota.png"/>Cerveza coolkur</b>, es uno de los platos principales de Yorn.`], 
                    [`Utiliza la <b class='epico-texto'><img class="imgitem epico"  src="./imagenes/ingrediente/bota.png"/>Cerveza coolkur</b>, es uno de los platos principales de Yorn.`], 
                    ["Acércate al borde y utiliza la tecla 'G' para descender."],  
                    ["Necesitas 300 de <b class='carisma'>Carisma</b> o más para llegar a la Mokoko."],  
                    ["Desciende por los railes para llegar a la Mokoko. Tendrás que utilizar la tecla 'G' varias veces."],  
                ],
                "cancion": [[252.5,447.75],[308.5,365.25],[545.75,354.75]],
                "cancionicono": [["minuetodelbosque"],["armaromantica"],["armaromantica"]],
                "cancionnombre": [["Minueto del Bosque"],["Arma Romántica"],["Arma Romántica"]],
                "canciondesc": [["Toca la canción <b>Minueto del Bosque</b> para acceder a esta parte del mapa."],["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],], 
                "vista": [[155.5,752],[168.25,367.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"],
                ],    
                "comercianteitinerante": [[236.5,120]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Laitir</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "ingrediente":[
                    [332,471], 
                    [411.25,497.25], 
                    [319.5,460], 
                ],
                "ingredientevendedor": [ 
                    ["Cerveza artesana"], 
                    ["Guiso de cosecha denso"],   
                    ["Botas viejas"]

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 - [2/2]</span></div>"],   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [2/3]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 - [1/2]</span></div>"], 
                ],
                "descripcioningrediente": [  
                    [`<div>Completa la cadena de misiones <b class="amarillo-texto">Buscando la cerveza legendaria</b> que empieza en:
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','81.25,202.75')" class="guia">Ori</button></div>
                    <p style="margin-bottom:0">Una vez completes todas las misiones (3) recibirás la <b class="comun-texto">Cerveza artesana</b> y ya podrás preparar la <b class="epico-texto">Cerveza coolkur</b> en el cocinero:</p>
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Bazur</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/cervezaartesana.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Completa el encargo de Una <b class="verde"><img class="imgitem" src='./imagenes/objetos/una.png' />Control de calidad</b> para recibir la <b class="raro-texto">Producto importado de calidad</b>. 
                    Abre el cofre para conseguir la <b class="raro-texto">Producto importado de calidad</b> y poder recoger el <b class="epico-texto">Guiso de cosecha denso</b> del caldero. Llévale el guiso a la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    El resto de ingredientes se encuentran en:
                    <div class="guiadiv"><button onclick="panto('cunadeyorn','598.5,225.5')" class="guia">Cuna de Yorn</button></div>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','107,184')" class="guia">Antesala de la Promesa</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/guisodenso.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Completa el encargo de Una <b class="comun-texto">¡Catapúm!</b> para conseguir las <b class="epico-texto">Botas viejas</b> y poder preparar <b class="epico-texto">Cerveza coolkur</b> en el cocinero:</p>
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Bazur</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/botasviejas.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],  
                "historiaoculta":[[207.75,225.25],[106,330.5],[191,126.75],[247.5,128.5],[288,236.75],[531.5,537.25]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[3/5] El tesoro de los Umar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[4/5] El tesoro de los Umar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[5/5] El tesoro de los Umar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] La despedida de soltero de Mukar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/2] La canción increíble</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/4] Historia de los Umar</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('maravillosacervecería','168,413')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('maravillosacervecería','92,334')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','109.5,328.5')" class="guia">Cuarta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','191,127.5')" class="guia">Quinta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('maravillosacervecería','168,413')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('maravillosacervecería','92,334')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','208,227')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','191,127.5')" class="guia">Quinta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('maravillosacervecería','168,413')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('maravillosacervecería','92,334')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','208,227')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','109.5,328.5')" class="guia">Cuarta parte</button></div>  
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Yorn</h3>
                    <img src="./imagenes/secretos/yorn-tomo1-2.png" width="300px"/>
                    <div class="guiadiv"><button onclick="panto('grancastillo','182,188')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','542,374')" class="guia">Tercera parte</button></div> 
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','671.5,370.25')" class="guia">Segunda parte</button></div> 
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','636,702')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','438,578')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','50,654')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                ],  
                "monstruos": [[130.75,261.75],[585,335.75],[281.5,807]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-52px'>Nº 8</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-8.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-9.png'/></div>"],                   
                    
                ], 
                "mazmorra": [[368.5,829.5]],
                "nombreMazmorra": [["Maravillosa Cervecería"]],

            }, 
            "geometry": { "type": "Point", "coordinates": [7.78125,-202.0625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yorn",
                "title": "minadelmartilloferreo",
                "img": "minadelmartilloferreo",
                "nombre": "Mina del Martillo Férreo",  
                "portal1":[[416,62],["Mina del Yunque Negro"],["left"]], 
                "portal2":[[658,906],["Antesala de la Promesa"],["top"]],  
                "mokokos": [
                    [-117.75,516.5],   
                    [35.25,521.75],
                    [102.5,587.5],
                    [377.5,844],
                    [641.5,835],
                    [579.5,545.5],
                    [527,384],
                    [681.5,364],
                    [531.75,244.5],
                    [511,156.5],
                    [406.5,323],
                ],  
                "misionsecreta":[[254.75,459]],
                "misionsecretatit":[["Misión secreta"]],
                "misionsecretadesc":[
                    [`Interactúa con el objeto para iniciar la misión secreta <b class='questnormal'>Bloquear a los demonios</b>. 
                    <div class="guiadiv"><button onclick="panto('grancastillo','146.5,81')" class="guia">Primera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','579.5,390.5')" class="guia">Segunda misión</button></div> 
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','230,346.25')" class="guia">Cuarta misión</button></div> 
                    `]
                ], 
                "pasillosecreto": [[85,602],[569,564.5],[527.25,376.5],[515.75,260.25],[383.25,340.5]],
                "pasillosecretodesc": [ 
                    ["Necesitas 300 de <b class='sabiduria'>Sabiduría</b> o más para llegar a la Mokoko."],    
                    ["Desciende por los railes para llegar a la Mokoko."],  
                    [`Utiliza el <b class='epico-texto'><img class="imgitem epico"  src="./imagenes/ingrediente/ronmaravilloso.png"/>Ron maravilloso</b>, el material para crearlo lo vende: <div class="guiadiv"><button onclick="panto('cunadeyorn','440,856')" class="guia">Mercader ambulante</button></div>`], 
                    [`Utiliza el <b class='epico-texto'><img class="imgitem epico"  src="./imagenes/ingrediente/ronmaravilloso.png"/>Ron maravilloso</b>, el material para crearlo lo vende: <div class="guiadiv"><button onclick="panto('cunadeyorn','440,856')" class="guia">Mercader ambulante</button></div>`], 
                    ["Acércate al borde y utiliza la tecla 'G' para descender."],  
                    ["Necesitas 300 de <b class='carisma'>Carisma</b> o más para llegar a la Mokoko."],  
                    ["Necesitas 300 de <b class='sabiduria'>Sabiduría</b> o más para llegar a la Mokoko."],  
                ],
                "cancion": [[327.5,290.25],[-110.25,514.25],[505.25,162]],
                "cancionicono": [["cancionderesonancia"],["armaromantica"],["armaromantica"]],
                "cancionnombre": [["Canción de Resonancia"],["Arma Romántica"],["Arma Romántica"],],
                "canciondesc": [
                    ["Toca la canción <b>Canción de Resonancia</b> para mover la estatua y poder recoger la Mokoko."],
                    ["Toca la canción para revelar la Mokoko."],
                    ["Toca la canción para revelar la Mokoko."],
                ], 
                "vista": [[485.5,238],[326.25,511.75]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</div>"],
                ],    
                "comercianteitinerante": [[14,527.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Laitir</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "ingrediente":[
                    [359,413], 
                    [505,740.5],  
                ],
                "ingredientevendedor": [ 
                    ["Cabeza de lombriz fresca"], 
                    ["Salsa de revuelto de seta rosa"],    

                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"],   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [2/2]</span></div>"],  
                ],
                "descripcioningrediente": [  
                    [`<div>Mata a las lombrices que hay por el mapa para conseguir las cabezas de lombriz.</p> 
                    <p>Ten en cuenta que necesitarás muchas <b class="comun-texto">Cabezas de lombriz fresca</b> para crear (en la cocinera Rinda) <b class="verde-texto">x30 Cabeza de lombriz preparada</b> y <b class="raro-texto">x5 Piel de lombriz preparada</b>.</p>
                    <p>Con esos ingredientes ya podrás crear la <b class="legendario-texto">Gelatina de cabeza de lombriz</b> en el cocinero:</p>
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Bazur</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/cabezadelombriz.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                    [`<div>Derrota a <b class="jefesdezona">Emerald</b> para recibir la <b class="epico-texto">Salsa de revuelto de seta rosa</b> y poder concinar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('jardíninacabado','600,218')" class="guia">Jardín Inacabado</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/salsaderevuelto.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],   
                ],  
                "historiaoculta":[[671.5,370.25],[535.75,369],[49.25,649.25]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-182px'>[2/2] La canción increíble</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] La despedida de soltero de Mukar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[4/4] Historia de los Umar</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','291,238')" class="guia">Primera parte</button></div> 
                    </div>`],
                    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('grancastillo','182,188')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','250,128')" class="guia">Segunda parte</button></div> 
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','636,702')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','438,578')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','528,554')" class="guia">Tercera parte</button></div> 
                    </div>`], 
                ],  
                "monstruos": [[668,425],[110,751],[234,525],[229.25,633.25],[65,636]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-58px'>Nº 12</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],    
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-11.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-12.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-12.png'/></div>"],      
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-12.png'/></div>"],                 
                    
                ], 
                "jefesdezona": [[535.75,755]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Emerald</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/emerald.png'/></div>"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [14.8125,-205.90625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yorn",
                "title": "antesaladelapromesa",
                "img": "antesaladelapromesa",
                "nombre": "Antesala de la promesa", 
                "portal1":[[-156,442],["Mina del Martillo Férreo"],["left"]],  
                "mokokos": [
                    [-212,477], 
                    [-86,623.5],
                    [15.5,393],
                    [246.25,695.25],
                    [549.25,867.5],
                    [532.75,584.25],
                    [660.75,446.25],
                    [454.5,186.75],
                    [227.5,95],   
                ],  
                "misionsecreta":[[229.25,347],[-105,627.5]],
                "misionsecretatit":[["Misión secreta"],["<b class='verde-texto'>Logro oculto</b>"]],
                "misionsecretadesc":[
                    [`Interactúa con la olla para iniciar la misión secreta <b class='questnormal'>La senda prohibida</b>. 
                    <div class="guiadiv"><button onclick="panto('grancastillo','146.5,81')" class="guia">Primera misión</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','579.5,390.5')" class="guia">Segunda misión</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','253.75,459')" class="guia">Tercera misión</button></div>
                    `],
                    ['Interactúa con la caja para conseguir la primera parte del logro <b class="verde-texto">Demasiada información</b>']
                ],  
                "quest" :[[271.25,379.5]], 
                "questtit": [["Quest secreta"]],
                "questdesc": [["Interactúa con la cosa circular de piedra para iniciar una misión oculta."]], 
                "pasillosecreto": [[-227,496.25],[-95.75,644.75],[528,856.75],[510.25,586.75],[610.25,439.25],[436.5,183]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <b cUtiliza la <b class='epico-texto'><img class="imgitem epico"  src="./imagenes/ingrediente/bota.png"/>Cerveza coolkur</b>, es uno de los platos principales de Yorn.`], 
                    ["Utiliza la 'G' para ascender."],  
                    ["Necesitas 300 de <b class='valentia'>Valentía</b> o más para llegar a la Mokoko."],  
                    [`Utiliza la 'G' para descender.`], 
                    ["Utiliza la 'G' para saltar."],  
                    [`Utiliza el <b class='epico-texto'><img class="imgitem epico"  src="./imagenes/ingrediente/ronmaravilloso.png"/>Ron maravilloso</b>, el material para crearlo lo vende: <div class="guiadiv"><button onclick="panto('cunadeyorn','440,856')" class="guia">Mercader ambulante</button></div>`],  
                ], 
                "cancion": [[220,100],[11,396]],
                "cancionicono": [["armaromantica"],["armaromantica"]],
                "cancionnombre": [["Arma Romántica"],["Arma Romántica"]],
                "canciondesc": [["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],], 
                "vista": [[362.5,576.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</div>"], 
                ],    
                "comercianteitinerante": [[-173.25,599.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Laitir</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "ingrediente":[
                    [107.25,177],  
                ],
                "ingredientevendedor": [ 
                    ["Guiso de carne denso"],   

                ],
                "ingredientetooltip": [   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [3/3]</span></div>"],  
                ],
                "descripcioningrediente": [  
                    [`<div>Completa el encargo de Una <b class="verde"><img class="imgitem" src='./imagenes/objetos/una.png' />Control de calidad</b> para recibir la <b class="raro-texto">Carne importada de calidad</b>. 
                    Abre el cofre para conseguir la <b class="raro-texto">Carne importada de calidad</b> y poder recoger el <b class="epico-texto">Guiso de carne denso</b> del caldero. Llévale el guiso a la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    El resto de ingredientes se encuentran en:
                    <div class="guiadiv"><button onclick="panto('cunadeyorn','600,218')" class="guia">Cuna de Yorn</button></div>
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','413,496')" class="guia">Mina del Yunque Negro</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/guisodecarnedenso.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul></div>`],  
                ],  
                "historiaoculta":[[635.75,683.75],[435.5,568.75],[182.5,382.5],[-144.25,577.75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/4] Historia de los Umar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/4] Historia de los Umar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] Obras maestras de Umar</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/2] Sobre al Reina Rivera</span>"],
                ],
                "historiaodcultadescripcion":[ 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Yorn</h3> 
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','436,580')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','535,544')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','48.5,650')" class="guia">Cuarta parte</button></div>  
                    </div>`],
                    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('antesaladelapromesa','640,702')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelyunquenegro','535,544')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','58,654')" class="guia">Cuarta parte</button></div>  
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Yorn</h3> 
                    <div class="guiadiv"><button onclick="panto('grancastillo','406,662')" class="guia">Segunda parte</button></div>
                    <div class="guiadiv"><button onclick="panto('grancastillo','112,104')" class="guia">Tercera parte</button></div> 
                    </div>`], 
                    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Yorn</h3>
                    <div class="guiadiv"><button onclick="panto('grancastillo','500,208')" class="guia">Primera parte</button></div> 
                    </div>`], 
                ],    
                "historiaadicional":[[-17.5,389.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Tesoro antiguo</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Yorn</h3>
                    Para iniciar la misión interactúa con el objeto.</div>`],
                ],
                "monstruos": [[210.5,651],[272,358.5],[622.5,298.25]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-13.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-14.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-15.png'/></div>"],                   
                    
                ],  
                "mazmorra": [[340.5,80.5]],
                "nombreMazmorra": [["El Arca de la Arrogancia"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [24.375,-206.625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Yorn",
                "title": "jardininacabado",
                "img": "jardininacabado",
                "nombre": "Jardín Inacabado", 
                "portal1":[[-270,334],["Gran Castillo"],["bottom"]], 
                "mokokos": [
                    [34.75,795],  
                    [285.5,868.5],
                    [537.5,750.5],
                    [453.75,498.5],
                    [639.75,516],
                    [648.75,455.25],
                    [718.25,399],
                    [47.25,234.25], 
                ],
                "misionsecreta":[[560.75,501.25]],
                "misionsecretatit":[["Misión secreta"]],
                "misionsecretadesc":[
                    [`Interactúa con la máquina para iniciar la misión secreta <b class='questnormal'>Un trabajo solitario</b>.  
                    `], 
                ],  
                "cancion": [[528,748],[31.5,785.75],[658.5,445.5]],
                "cancionicono": [["armaromantica"],["armaromantica"],["armaromantica"]],
                "cancionnombre": [["Arma Romántica"],["Arma Romántica"],["Arma Romántica"]],
                "canciondesc": [["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."],["Toca la canción <b>Arma Romántica</b> para revelar la Mokoko."]],  
                "pasillosecreto": [[283.5,860.75],[618.75,509.75],[40.5,187.25]],
                "pasillosecretodesc": [  
                    ["Rompe la barricada para recoger la Mokoko."],  
                    [`Utiliza el <b class='epico-texto'><img class="imgitem epico"  src="./imagenes/ingrediente/ronmaravilloso.png"/>Ron maravilloso</b>, el material para crearlo lo vende: <div class="guiadiv"><button onclick="panto('cunadeyorn','440,856')" class="guia">Mercader ambulante</button></div>`], 
                    ["Cerca del muro hay un pasillo secreto."],  
                    
                ], 
                "vista": [[234,506.5]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"], 
                ],    
                "comercianteitinerante": [[416,75.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Laitir</span></div>"]],  
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]],
                "ingrediente":[
                    [6.75,143],  
                    [-3,363.5],
                    [273.5,104.5],
                    [531.5,309],
                    [595,307],
                    [467.5,426],
                    [533,577],
                    [412,765],
                    [121,686],
                    [247,858],
                    [552.5,472],
                    [660,362.75],
                    [684,432.75],
                ],
                "ingredientevendedor": [ 
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],    
                    ["Setas ácidas, dulces y rancias."],   
                    ["Setas ácidas, dulces y rancias."],   
                    ["Setas ácidas, dulces y rancias."],   
                    ["Setas ácidas, dulces y rancias."],    
                ],
                "ingredientetooltip": [   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 - [1/2]</span></div>"],  
                ],
                "descripcioningrediente": [  
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`], 
                    [`<div>Recolecta por el mapa (<b class='ingrediente'>Nº 5 - [1/2]</b>) los siguientes ingredientes:
                    <ul>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setarancia.png' /> <b class="comun-texto">x20 Seta rancia sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setaacida.png' /> <b class="comun-texto">x10 Seta ácida sin cocinar</b></li>
                        <li style="margin-bottom:10px;"><img class="imgitem comun" src='./imagenes/ingrediente/setadulce.png' /> <b class="comun-texto">x5 Seta dulce sin cocinar</b></li>
                    </ul> </div>
                    El otro ingrediente se encuentra en:
                    <div class="guiadiv"><button onclick="panto('minadelmartilloférreo','505.5,740')" class="guia">Cuna de Yorn</button></div> 
                    Una vez consigas todos los ingredientes ya puedes preparar el <b class="legendario-texto">Revuelto de setas gourmet</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('grancastillo','215,175')" class="guia">Rinda</button></div>
                    <ul style='text-align:center;'><li style="display:flex; justify-content:center">
                    <img class="" src='./imagenes/ingrediente/setarancia.png' />
                    <img class="" src='./imagenes/ingrediente/setaacida.png' />
                    <img class="" src='./imagenes/ingrediente/setadulce.png' />
                    </li></ul></div>`],  
                ],     
                "monstruos": [[105,503],[69,872],[395,467]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-4.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-5.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Yorn</h3><img class='monstruos-img' src='./imagenes/monstruos/yorn-6.png'/></div>"],                   
                    
                ],   
                "subzonaciudad":[[-51.75,696]],
                "subzonaciudadNombre":[["Jardín Inacabado - Segunda planta"]]
            }, 
            "geometry": { "type": "Point", "coordinates": [21.75,-194.375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Feiton",
                "title": "vallesinnombre",
                "img": "vallesinnombre",
                "nombre": "Valle sin Nombre", 
                "portal1":[[334,866],["Ciudad Kalaja"],["right"]],  
                "mokokos": [
                    [-193.25,451.75],  
                    [19,452],
                    [128.5,249.75],
                    [236.5,204.75],
                    [453.75,195],
                    [332,488],
                    [319.75,624.5],
                    [279.5,614.75],
                    [279.75,836],
                    [597,582], 
                ], 
                "cancion": [
                    [243.25,204.5],
                    [451.75,200.25],
                    [-188.75,444.25]
                ],
                "cancionicono": [["requiemconmovedor"],["requiemconmovedor"],["requiemconmovedor"],],
                "cancionnombre": [["Réquiem Conmovedor"],["Réquiem Conmovedor"],["Réquiem Conmovedor"],],
                "canciondesc": [
                    ["Toca la canción <b>Réquiem Conmovedor</b> para hacer desaparecer el árbol."],
                    ["Toca la canción <b>Réquiem Conmovedor</b> para hacer desaparecer el árbol."],
                    ["Toca la canción <b>Réquiem Conmovedor</b> para hacer desaparecer el árbol."],
                ],   
                "pasillosecreto": [[17.5,458.25],[280,607.5]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <b class='legendario-texto'><img class="imgitem legendario"  src="./imagenes/ingrediente/licorcasiterminado.png"/>Bebida destilada echada a perder</b> para recoger la Mokoko.</div>`], 
                    ["Necesitas <b class='amabilidad'>300 de Amabilidad</b> para poder recoger la Mokoko."],  
                ], 
                "afinidad": [[332.25,95]],
                "afinidadnombre": [["Jederico"]],
                "vista": [[11.75,489.5],[415,535.5],[237.75,651.25]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"], 
                ],  
                "historiaoculta":[[-87,545],[31,424.75],[341.25,141],[320.5,76.75],[341.75,200],[81.25,542.75],[149.5,531.75]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] Se llama</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] Se llama</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] Registros de investigación de Delain</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] Registros de investigación de Delain</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] Registros de investigación de Delain</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/3] Hombre contento</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/4] Que la luz brille sobre esta tierra maldita</span>"],
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','30,427')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','-70,304')" class="guia">Tercera parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','-85.5,545.5')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','-70,304')" class="guia">Tercera parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','319.75,77.75')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','341.75,200.75')" class="guia">Tercera parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','341,141.75')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','341.75,200.75')" class="guia">Tercera parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','341,141.75')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','319.75,77.75')" class="guia">Segunda parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('acantiladosombrío','672,472')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','474,237')" class="guia">Tercera parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('acantiladosombrío','178,702')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','388,772')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','328,798')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                ],    
                "monstruos": [[241,847.5],[424,316],[399,225],[219.5,756.5],[471,654]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-2.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-3.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-4.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-2.png'/></div>"],     
                    
                ],   
            }, 
            "geometry": { "type": "Point", "coordinates": [27.125,-93.5] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Feiton",
                "title": "acantiladosombrio",
                "img": "acantiladosombrio",
                "nombre": "Acantilado Sombrío", 
                "portal1":[[-138,198],["Ciudad Kalaja"],["bottom"]], 
                "mokokos": [
                    [141.5,321.5],  
                    [161,573.25],
                    [-3.25,620.75],
                    [78.5,724],
                    [353.5,880],
                    [452.5,753],
                    [658.5,801.5],
                    [687,811],
                    [499.75,384.25],
                    [380,122.75],
                ], 
                "misionsecreta":[[44,667.75]],
                "misionsecretatit":[["Misión secreta"]],
                "misionsecretadesc":[
                    [`Interactúa con la carta del suelo para iniciar la misión <b class='questnormal'>Palabras no pronunciadas</b>.  
                    `], 
                ], 
                "cancion":[[505,377.75],[347,872],[74.75,717.75]],
                "cancionicono": [["requiemconmovedor"],["requiemconmovedor"],["requiemconmovedor"]],
                "cancionnombre": [["Réquiem Conmovedor"],["Réquiem Conmovedor"],["Réquiem Conmovedor"]],
                "canciondesc": [
                    ["Toca la canción <b>Réquiem Conmovedor</b> para hacer desaparecer el árbol."],
                    ["Toca la canción <b>Réquiem Conmovedor</b> para revelar la Mokoko."],
                    ["Toca la canción <b>Réquiem Conmovedor</b> para revelar la Mokoko."],
                ],   
                "pasillosecreto": [
                    [169.25,304.5], 
                    [155.25,568],
                    [475.25,784.5],
                    [685.5,673.75],
                    [683,799.5],
                    [406,146.25],
                ],
                "pasillosecretodesc": [  
                    ["Entra por el pasillo para llegar a la Mokoko."],  
                    [`Utiliza el <b class='legendario-texto'><img class="imgitem legendario"  src="./imagenes/ingrediente/licorcasiterminado.png"/>Bebida destilada echada a perder</b> para recoger la Mokoko.</div>`], 
                    ["Sube por las escaleras para llegar a la Mokoko."],  
                    ["Utiliza la 'G' para escalar la pared, sigue el camino para matar al <b class='aventurero'>Monstruo Nº 11</b> y una de las Mokokos."],  
                    ["Necesitas <b class='valentia'>300 de Valentía</b> para recoger la Mokoko."],  
                    ["Utiliza la 'G' para saltar y recoger la Mokoko."],   
                ],  
                "vista": [[-6,523]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</div>"], 
                ],  
                "historiaoculta":[[592,784.5],[677,470.5],[186,699.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[1/3] Canción del pasado</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[1/3] Hombre contento</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/4] Que la luz brille sobre esta tierra maldita</span>"],
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('castilloenruinas','560,162')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','704,524')" class="guia">Tercera parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','-85.5,545.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','476,234')" class="guia">Tercera parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','150,532')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','388,772')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','328,798')" class="guia">Cuarta parte</button></div> 
                    </div>`],    
                ],    
                "monstruos": [[319,148],[678.5,778]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-58px'>Nº 11</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-10.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-11.png'/></div>"],      
                    
                ],   
                "mazmorra": [[686,456]],
                "nombreMazmorra": [["Castillo en Ruinas"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [16.09375,-86.6875] } 
        },
        
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Feiton",
                "title": "ciudadkalaja",
                "img": "ciudadkalaja",
                "nombre": "Ciudad Kalaja", 
                "portal1":[[-254,534],["Valle sin Nombre"],["bottom"]],
                "portal2":[[654,540],["Acantilado Sombrío"],["top"]], 
                "mokokos": [
                    [345,789.5], 
                    [315.75,682.5],
                    [401.5,662.5],
                    [565.25,463],
                    [24.25,805.25],
                    [-27,622.5],
                    [234.25,45.75],  
                ],  
                "cancion":[[-20.75,618.5],[340.25,782]],
                "cancionicono": [["requiemconmovedor"],["requiemconmovedor"]],
                "cancionnombre": [["Réquiem Conmovedor"],["Réquiem Conmovedor"],],
                "canciondesc": [
                    ["Toca la canción <b>Réquiem Conmovedor</b> para recoger la Mokoko."],
                    ["Toca la canción <b>Réquiem Conmovedor</b> para recoger la Mokoko."],
                ],   
                "pasillosecreto": [
                    [214.75,46.25], 
                    [555.5,469], 
                ],
                "skillpoint": [[375.25,69.75]],
                "skillpointnpc": [["<span class='questmorada'>Aquellos enterrados en la tierra oscura</span>"]],
                "skillpointguia": [[`<p>Completa la historia principal de Feiton para desbloquear la misión.</p>
                <div class='guiadiv'>
                <a class='guia' target='_blank' href='https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/'>Guía completa</a>
                </div>`]],   
                "pasillosecretodesc": [   
                    ["Necesitas <b class='sabiduria'>300 de Sabiduría</b> para poder bajar por las escaleras y recoger la Mokoko."],   
                    [`Utiliza el <b class='legendario-texto'><img class="imgitem legendario"  src="./imagenes/ingrediente/licorcasiterminado.png"/>Bebida destilada echada a perder</b> para recoger la Mokoko.</div>`],  
                ],  
                "vista": [[176,523]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas' style='margin-left:-52px !important'>Nº 4</div>"], 
                ],  
                "historiaoculta":[[-69,299],[215,202],[272,88],[478.5,236.5]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[3/3] Se llama</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[1/2] El secreto del almacén subterráneo</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/2] El secreto del almacén subterráneo</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/3] Hombre contento</span>"],
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','-83,547')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','32,427')" class="guia">Segunda parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','271,89')" class="guia">Segunda parte</button></div>  
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','217,200')" class="guia">Primera parte</button></div>  
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('acantiladosombrío','678,472')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','83,545')" class="guia">Segunda parte</button></div> 
                    </div>`],   
                ], 
                "comercianteitinerante": [[179.5,574]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Dorella</span></div>"]], 
                "comercianteitinerantehorario":[["1:30, 4:30, 5:30, 7:30, 8:30, 11:30 (AM y PM)"]],
                "ingrediente":[[198,571.5],[321.25,668],[345.5,682.5]],
                "ingredientevendedor": [["Coágulo"],["Sangre del bosque"],["Suministros vegetales"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Compra el <b class="raro-texto">Coágulo</b> al mercader ambulante por <b>200.000 de plata</b> para preparar las <b class="epico-texto">Morcillas de Feiton</b> en la cocinera :<br/>
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/coagulo.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>
                    <i>El siguiente proceso es completamente aleatorio.</i>
                    <ul>
                    <li class="list-margin">1. Compra la <b class="comun-texto">Sangre del bosque</b>.</li>
                    <li class="list-margin">2. Bébetelo para recibir el <img class="imgitem raro" src='./imagenes/ingrediente/licorcasidestilado.png' /><b class="raro-texto">Licor casi destilado</b>.</li>
                    <li class="list-margin">3. Bébete el <img class="imgitem raro" src='./imagenes/ingrediente/licorcasidestilado.png' /><b class="raro-texto">Licor casi destilado</b> para recibir <img class="imgitem epico" src='./imagenes/ingrediente/licorcasiterminado.png' /><b class="epico-texto">Licor casi terminado</b>.</li>
                    <li class="list-margin">4. Bébete el <img class="imgitem epico" src='./imagenes/ingrediente/licorcasiterminado.png' /><b class="epico-texto">Licor casi terminado</b> para recibir el <img class="imgitem legendario" src='./imagenes/ingrediente/licorcasiterminado.png' /><b class="legendario-texto">Puño Sangriento</b>.</li>
                    <li class="list-margin">5. Añádelo al Tomo del Aventurero.</li>
                    </ul>
                    *Recuerda que el <img class="imgitem legendario" src='./imagenes/ingrediente/licorcasiterminado.png' /><b class="legendario-texto">Puño Sangriento</b> se utiliza para acceder a algunas Mokokos del continente de Feiton.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/sangredelbosque.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>  
                    <i>La cantidad recibida es aleatoria.</i>
                    <p>Compra los <img class="imgitem epico" src='./imagenes/ingrediente/suministrosvegetales.png' /><b class="epico-texto">Suministros vegetales</b> a Lodin y ábrelos hasta recibir:</p>
                    <ul>
                    <li class="list-margin"> <img class="comun imgitem" src='./imagenes/ingrediente/videspinosa.png' /><b class="comun-texto"> x30 Vid espinosa</b>.</li> 
                    <li class="list-margin"> <img class="raro imgitem" src='./imagenes/ingrediente/musgo.png' /><b class="raro-texto"> x15 Musgo del pantano</b>.</li>
                    <li class="list-margin"> <img class="epico imgitem" src='./imagenes/ingrediente/flornormal.png' /><b class="epico-texto"> x5 Flor normal</b>.</li>
                    </ul>
                    El último ingrediente está en:
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','574,546')" class="guia">Tercera parte</button></div> 
                    Utiliza todos los ingredientes para preparar la <b class="legendario-texto">Ensalada de caviar de anguila</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/suministrosvegetales.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`]
                ], 
                "afinidad": [[280.5,675.5],[264,280.5]],
                "afinidadnombre": [["navi"],["levi"]],
                "cocinero": [[316,716.5]],
                "cocineronombre":["Janet"],
                "cocinerorecetas": [`
                <div style='text-align:center'>
                    Janet permite cocinar hasta 6 platos únicos con los ingredientes de Feiton. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Cecina de ternera picada ahumada de Avesta</td><td><div class="guiadiv"><button onclick="panto('ciénagaaulladora','-180,492')" class="guia">Ciénaga Aulladora</button></div></td></tr>
                    <tr><td>Morcillas de Feiton</td><td> <div class="guiadiv"><button onclick="panto('ciudadkalaja','198,570.5')" class="guia">Ciudad Kalaja</button></div></td></tr>
                    <tr><td>Kholodet de anguila herbal</td><td> 
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','334,586')" class="guia">Ciénaga Aulladora</button></div>
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','31,554.5')" class="guia">Ciénaga Aulladora</button></div>
                    </td></tr> 
                    <tr><td>Salo de Ryucrokota</td><td>
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','334,586')" class="guia">Sombra de luna carmesí</button></div>
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','514,574')" class="guia">Sombra de luna carmesí</button></div>
                    </td></tr>
                    <tr><td>Puño Sanguiento</td><td><div class="guiadiv"><button onclick="panto('ciudadkalaja','321.5,667.5')" class="guia">Ciudad Kalaja</button></div></td></tr>
                    <tr><td>Sopa cremosa de intestinos de Krakan</td><td><div class="guiadiv"><button onclick="panto('ciénagaaulladora','477,761')" class="guia">Ciénaga Aulladora</button></div></td></tr>
                    <tr><td>Ensalada de caviar de anguila</td><td>
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','345,681.5')" class="guia">Ciudad Kalaja</button></div>
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','579,542')" class="guia">Sombra de luna carmesí</button></div>
                    </td></tr> 
                    </tbody>
                    </table>
                </div>`],
                "historiaadicional":[[365,89]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>La última melodía de un Réquiem</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Feiton</h3> 
                    <div class="guiadiv"><a class="guia" href="https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/#last" target="_blank">Guía</a></div></div>`],
                ], 
                "subzonaciudad":[[318,269],[230.25,603],[383.5,736]],
                "subzonaciudadNombre":[["Ciudad Kalaja - Segunda planta"],["Ciudad Kalaja - Segunda planta"],["Ciudad Kalaja - Segunda planta"]]
            }, 
            "geometry": { "type": "Point", "coordinates": [25.125,-82.6875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Feiton",
                "title": "sombradelunacarmesi",
                "img": "sombradelunacarmesi",
                "nombre": "Sombra de luna carmesí", 
                "portal1":[[-34,538],["Ciudad Kalaja - Segunda planta"],["bottom"]], 
                "mokokos": [
                    [199.5,761.75],  
                    [589,712.5], 
                    [595.5,615.5], 
                    [452,601.5], 
                    [338,460.25], 
                    [167.75,469.25], 
                    [93.75,284], 
                    [435,265.25], 
                    [464.5,345.25],      
                ],
                "cancion":[[173.75,472],[581.5,711.25],[335,453.25]],
                "cancionicono": [["requiemconmovedor"],["requiemconmovedor"],["requiemconmovedor"]],
                "cancionnombre": [["Réquiem Conmovedor"],["Réquiem Conmovedor"],["Réquiem Conmovedor"],],
                "canciondesc": [
                    ["Toca la canción <b>Réquiem Conmovedor</b> para recoger la Mokoko."],
                    ["Toca la canción <b>Réquiem Conmovedor</b> para recoger la Mokoko."],
                ],     
                "pasillosecreto": [[120,273.75],[453.75,322.25]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <img class="imgitem raro" src='./imagenes/ingrediente/licorcasidestilado.png' /><b class="raro-texto">Licor casi destilado</b> para recoger la Mokoko.</div>
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','321.5,670.5')" class="guia">Licor casi destilado</button></div> 
                    `], 
                    ["Necesitas <b class='valentia'>300 de Valentía</b> para entrar y recoger la Mokoko."],  
                ], 
                "vista": [[199.5,558],[392,388]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</div>"], 
                ],  
                "historiaoculta":[[701.25,517.25],[321.5,795.25]],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>[3/3] Canción del pasado</span>"], 
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-275px'>[4/4] Que la luz brille sobre esta tierra maldita</span>"],
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('acantiladosombrío','588,788')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('castilloenruinas','562,172')" class="guia">Segunda parte</button></div> 
                    </div>`],   
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','150,532')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('acantiladosombrío','188,702')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','388,772')" class="guia">Tercera parte</button></div> 
                    </div>`], 
                ], 
                "ingrediente":[[332.5,583],[514,573],[580,544]],
                "ingredientevendedor": [["Ingrediente nº4 - 1/2"],["Ingrediente nº4 - 2/2"],["Caviar de anguila de Feiton"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4 - [2/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [2/2]</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Mata a enemigos por la zona para conseguir el primer ingrediente del Salo de Ryucrokota, necesitarás <b class="comun-texto"><img class="imgitem comun" src='./imagenes/ingrediente/grasadelecrota.png' /> x40</b>.
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','507,578')" class="guia">Segundo ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el plato <b>Nº 4</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <p>Deja 2h y 30min el plato en el inventario para que se convierta en el Salo de Ryucrokota y poder añadirlo al tomo del aventurero de Feiton.</p>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/grasadelecrota.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata a enemigos por la zona para conseguir el segundo ingrediente del Salo de Ryucrokota, necesitarás <b class="raro-texto"><img class="imgitem raro" src='./imagenes/ingrediente/salazul.png' /> x3 Sal azul de Feiton</b>.
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','331.5,583')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el plato <b>Nº 4</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <p>Deja 2h y 30min el plato en el inventario para que se convierta en el Salo de Ryucrokota y poder añadirlo al tomo del aventurero de Feiton.</p>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/salazul.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Derrota a <b class="jefesdezona">Enceladus</b> para conseguir el caviar.
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','347.5,680.5')" class="guia">Otros ingredientes</button></div>
                    Una vez obtengas los dos ingredientes podrás crear <b class="legendario-texto">Ensalada de caviar de anguila</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/caviaranguila.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`]
                ],   
                "monstruos": [[34.5,456.5],[420.25,307.5],[344,528],[674.5,517],[545.5,608]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],    
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-12.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-13.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-14.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-15.png'/></div>"],       
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-15.png'/></div>"],       
                    
                ],     
                "jefesdezona": [[603,544]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Enceladus</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/enceladus.png'/></div>"]],
                "subzonaciudad":[[321,821.25]],
                "subzonaciudadNombre":[["Sombra de luna carmesí - Cueva"]], 
                "mazmorra": [[284.5,715]],
                "nombreMazmorra": [["Cueva del Pecado"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [16.375,-77.75] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Feiton",
                "title": "cienagaaulladora",
                "img": "cienagaaulladora",
                "nombre": "Ciénaga Aulladora", 
                "portal1":[[-238,536],["Ciudad Kalaja - Segunda planta"],["bottom"]],  
                "mokokos": [
                    [-35,583],   
                    [9,772],   
                    [174,804.25],   
                    [502.25,749.5],   
                    [528.75,622.5],   
                    [278.25,389.75],   
                    [137.75,111.5],   
                    [327,161.5],   
                    [373.25,259.75],   
                    [-79.25,322],    
                ], 
                "misionsecreta":[[549,400]],
                "misionsecretatit":[["Misión secreta"]],
                "misionsecretadesc":[
                    [`Interactúa con el cadaver para iniciar la misión secreta <b class='questnormal'>Palabras no pronunciadas</b>.  
                    `], 
                ], 
                "cancion":[[140,117.25],[15.5,768],[271.25,392]],
                "cancionicono": [["requiemconmovedor"],["requiemconmovedor"],["requiemconmovedor"]],
                "cancionnombre": [["Réquiem Conmovedor"],["Réquiem Conmovedor"],["Réquiem Conmovedor"],],
                "canciondesc": [
                    ["Toca la canción <b>Réquiem Conmovedor</b> para recoger la Mokoko."],
                    ["Toca la canción <b>Réquiem Conmovedor</b> para recoger la Mokoko."],
                ],  
                "pasillosecreto": [[-2.5,575.5],[547,603.75]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <b class='legendario-texto'><img class="imgitem legendario"  src="./imagenes/ingrediente/licorcasiterminado.png"/>Bebida destilada echada a perder</b> para llegar la Mokoko. 
                    `], 
                    ["Necesitas <b class='carisma'>300 de Carisma</b> para recoger la Mokoko."],  
                ], 
                "vista": [[-71,375.5],[293.5,607]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"], 
                ],  
                "historiaoculta":[[385.5,766.5]],
                "historiaocultatitulo":[                    
                    ["<span class='historiaocultatit text-shadow'>[3/4] Que la luz brille sobre esta tierra maldita</span>"],
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Feiton</h3>
                    <div class="guiadiv"><button onclick="panto('vallesinnombre','147,537')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('acantiladosombrío','188,706')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('sombradelunacarmesí','320,795')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                ], 
                "historiaadicional":[[252.5,429]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Centinelas de la tierra abandonada</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Feiton</h3> 
                    Acaba con el Vigía del bosque para recibir <b class="comun-texto"><img class="imgitem comun" src="./imagenes/objetos/esporasextrañas.png" />Esporas extrañas de vigilante</div>`],
                ], 
                "ingrediente":[[24.25,565.25],[35,540.25],[573,489],[-180,497],[477,759],[-172,414.5],[-102,377.5],[-25,430],[22,399],[149.5,417],[188,325]],
                "ingredientevendedor": [["Hierbas culinarias"],["Anguila de Feiton"],["Carne de Res"],["Vísceras no identificadas"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3 - [2/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-92px'>Nº 3 - [2/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-52px'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-52px'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-52px'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Recoge las hierbas del suelo.
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','574,489')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Kholodet de anguila herbal</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/especias.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Recoge las hierbas del suelo.
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','574,489')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Kholodet de anguila herbal</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/especias.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata anguilas hasta conseguir <b class="comun-texto
                    "><img class="imgitem comun" src='./imagenes/ingrediente/anguilagigante.png' />x30 Anguilas de Feiton</b>.
                    <div class="guiadiv"><button onclick="panto('ciénagaaulladora','36,564')" class="guia">Segundo ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Kholodet de anguila herbal</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/anguilagigante.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`], 

                    [`<div style='text-align:center'>Recoge los siguientes ingredientes de los cadeveres del suelo marcados con <b class="ingrediente">Nº1</b> hasta conseguir:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/magrares.png" class="imgitem comun"><b class="comun-texto">x10 Trozo de carne magra</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/grasares.png" class="imgitem comun"><b class="comun-texto">x5 Parte grasienta</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/carnecartilago.png" class="imgitem raro"><b class="raro-texto">x1 Cartílago de res</b></li>
                    </ul> 
                    Una vez obtengas los dos ingredientes podrás crear la <b class="epico-texto">Cecina de ternera picada ahumada de Avesta</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <div style='text-align:center; display:flex; justify-content: center'>
                    <img src='./imagenes/ingrediente/magrares.png' />
                    <img src='./imagenes/ingrediente/grasares.png' />
                    <img src='./imagenes/ingrediente/carnecartilago.png' />
                    </div>
                    </div>`],

                    
                    [`<div style='text-align:center'>Mata cangrejos para conseguir sus <b class="verde-texto">Vísceras</b>. Necesitarás muchas vísceras y se las tendrás que llevar a Janet para crear
                    <b class="raro-texto nowrap"><img src="./imagenes/ingrediente/viscerasraras.png" class="imgitem raro" />Intestinos...</b>.
                    Al crear los intestinos recibirás, de manera aleatoria, 2 ingredientes distintos y necesitarás:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/viscerasraras.png" class="imgitem raro"><b class="raro-texto"> x50 Intestinos aceptables</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/viscerasraras.png" class="imgitem epico"><b class="epico-texto"> x10 Intestinos de buena calidad</b></li> 
                    </ul> 
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Sopa cremosa de intestinos de Krakan</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/viscerasnoidentificadas.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],

                    [`<div style='text-align:center'>Recoge los siguientes ingredientes de los cadeveres del suelo marcados con <b class="ingrediente">Nº1</b> hasta conseguir:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/magrares.png" class="imgitem comun"><b class="comun-texto">x10 Trozo de carne magra</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/grasares.png" class="imgitem comun"><b class="comun-texto">x5 Parte grasienta</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/carnecartilago.png" class="imgitem raro"><b class="raro-texto">x1 Cartílago de res</b></li>
                    </ul> 
                    Una vez obtengas los dos ingredientes podrás crear la <b class="epico-texto">Cecina de ternera picada ahumada de Avesta</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <div style='text-align:center; display:flex; justify-content: center'>
                    <img src='./imagenes/ingrediente/magrares.png' />
                    <img src='./imagenes/ingrediente/grasares.png' />
                    <img src='./imagenes/ingrediente/carnecartilago.png' />
                    </div>
                    </div>`],
                    [`<div style='text-align:center'>Recoge los siguientes ingredientes de los cadeveres del suelo marcados con <b class="ingrediente">Nº1</b> hasta conseguir:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/magrares.png" class="imgitem comun"><b class="comun-texto">x10 Trozo de carne magra</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/grasares.png" class="imgitem comun"><b class="comun-texto">x5 Parte grasienta</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/carnecartilago.png" class="imgitem raro"><b class="raro-texto">x1 Cartílago de res</b></li>
                    </ul> 
                    Una vez obtengas los dos ingredientes podrás crear la <b class="epico-texto">Cecina de ternera picada ahumada de Avesta</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <div style='text-align:center; display:flex; justify-content: center'>
                    <img src='./imagenes/ingrediente/magrares.png' />
                    <img src='./imagenes/ingrediente/grasares.png' />
                    <img src='./imagenes/ingrediente/carnecartilago.png' />
                    </div>
                    </div>`],
                    [`<div style='text-align:center'>Recoge los siguientes ingredientes de los cadeveres del suelo marcados con <b class="ingrediente">Nº1</b> hasta conseguir:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/magrares.png" class="imgitem comun"><b class="comun-texto">x10 Trozo de carne magra</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/grasares.png" class="imgitem comun"><b class="comun-texto">x5 Parte grasienta</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/carnecartilago.png" class="imgitem raro"><b class="raro-texto">x1 Cartílago de res</b></li>
                    </ul> 
                    Una vez obtengas los dos ingredientes podrás crear la <b class="epico-texto">Cecina de ternera picada ahumada de Avesta</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <div style='text-align:center; display:flex; justify-content: center'>
                    <img src='./imagenes/ingrediente/magrares.png' />
                    <img src='./imagenes/ingrediente/grasares.png' />
                    <img src='./imagenes/ingrediente/carnecartilago.png' />
                    </div>
                    </div>`],
                    [`<div style='text-align:center'>Recoge los siguientes ingredientes de los cadeveres del suelo marcados con <b class="ingrediente">Nº1</b> hasta conseguir:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/magrares.png" class="imgitem comun"><b class="comun-texto">x10 Trozo de carne magra</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/grasares.png" class="imgitem comun"><b class="comun-texto">x5 Parte grasienta</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/carnecartilago.png" class="imgitem raro"><b class="raro-texto">x1 Cartílago de res</b></li>
                    </ul> 
                    Una vez obtengas los dos ingredientes podrás crear la <b class="epico-texto">Cecina de ternera picada ahumada de Avesta</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <div style='text-align:center; display:flex; justify-content: center'>
                    <img src='./imagenes/ingrediente/magrares.png' />
                    <img src='./imagenes/ingrediente/grasares.png' />
                    <img src='./imagenes/ingrediente/carnecartilago.png' />
                    </div>
                    </div>`],
                    [`<div style='text-align:center'>Recoge los siguientes ingredientes de los cadeveres del suelo marcados con <b class="ingrediente">Nº1</b> hasta conseguir:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/magrares.png" class="imgitem comun"><b class="comun-texto">x10 Trozo de carne magra</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/grasares.png" class="imgitem comun"><b class="comun-texto">x5 Parte grasienta</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/carnecartilago.png" class="imgitem raro"><b class="raro-texto">x1 Cartílago de res</b></li>
                    </ul> 
                    Una vez obtengas los dos ingredientes podrás crear la <b class="epico-texto">Cecina de ternera picada ahumada de Avesta</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <div style='text-align:center; display:flex; justify-content: center'>
                    <img src='./imagenes/ingrediente/magrares.png' />
                    <img src='./imagenes/ingrediente/grasares.png' />
                    <img src='./imagenes/ingrediente/carnecartilago.png' />
                    </div>
                    </div>`],
                    [`<div style='text-align:center'>Recoge los siguientes ingredientes de los cadeveres del suelo marcados con <b class="ingrediente">Nº1</b> hasta conseguir:
                    <ul>
                    <li class="list-margin"><img src="./imagenes/ingrediente/magrares.png" class="imgitem comun"><b class="comun-texto">x10 Trozo de carne magra</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/grasares.png" class="imgitem comun"><b class="comun-texto">x5 Parte grasienta</b></li>
                    <li class="list-margin"><img src="./imagenes/ingrediente/carnecartilago.png" class="imgitem raro"><b class="raro-texto">x1 Cartílago de res</b></li>
                    </ul> 
                    Una vez obtengas los dos ingredientes podrás crear la <b class="epico-texto">Cecina de ternera picada ahumada de Avesta</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('ciudadkalaja','314.5,717.5')" class="guia">Janet</button></div>
                    <div style='text-align:center; display:flex; justify-content: center'>
                    <img src='./imagenes/ingrediente/magrares.png' />
                    <img src='./imagenes/ingrediente/grasares.png' />
                    <img src='./imagenes/ingrediente/carnecartilago.png' />
                    </div>
                    </div>`],
                ],   
                "monstruos": [[-82.5,543],[-21.5,520],[634,579],[82,427],[538,666]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],    
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-5.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-6.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-7.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-8.png'/></div>"],                  
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Feiton</h3><img class='monstruos-img' src='./imagenes/monstruos/fei-9.png'/></div>"],       
                    
                ],      
            }, 
            "geometry": { "type": "Point", "coordinates": [27.875,-77.71875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Punika",
                "title": "caminodelmalecon",
                "img": "caminodelmalecon",
                "nombre": "Camino del Malecón", 
                "portal1":[[676,86],["Aldea de las Nia"],["top"]],  
                "mokokos": [
                    [515,793.25],     
                    [679.75,442.25],  
                    [653.25,395.25],  
                    [282.75,202],  
                    [522.75,70],  
                    [614,49.5], 
                    [250.5,635.75], 
                    [628.25,623.25]  
                ],  
                "cancion": [[290.5,198.5]],
                "cancionicono": [["canciondearmonia"]],
                "cancionnombre": [["Canción de Armonía"]], 
                "canciondesc": [["Toca la <b>Canción de Armonía</b> para romper las nabas y revelar la Mokoko."]],
                "pasillosecreto": [[672,434],[512.5,79.5]],
                "pasillosecretodesc": [ 
                    ["Necesitas <b class='valentia'>350 de Valentía</b> para recoger la Mokoko."],  
                    [`Utiliza el <img class="imgitem comun" src='./imagenes/ingrediente/mojitodulce.png' /><b class="comun-texto">Mojito dulce</b> para recoger la Mokoko.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','646,463')" class="guia">Mojito dulce</button></div> 
                    `], 
                ], 
                "vista": [[239.75,638.25],[573,602]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"], 
                ],   
                "comercianteitinerante": [[669,402.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow' style='margin-left: -56px;'>Rainy</span></div>"]],
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "historiaoculta":[[525.5,844.75],[230.5,214.5],[481.5,470.5],[331.75,727],[280.25,182.25],[655,79.25]],
                "historiaocultatitulo":[                    
                    ["<span class='historiaocultatit text-shadow'>[1/4] Dúo fantástico</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/4] Dúo fantástico</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-213px'>[1/4] Sobre los orígenes de Punika</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/4] Lo que se despertó en el bosque</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-233px'>[2/4] Lo que se despertó en el bosque</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/3] La flor del festival</span>"],
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Punika</h3> 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','224,226')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','30,304')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','218,690')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','527,850')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','23,303.5')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','218,690')" class="guia">Cuarta parte</button></div> 
                    </div>`], 

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Punika</h3>  
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','394,112')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aguastermalesdenaruna','172,756')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('pozodeoreha','654,586')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Punika</h3> 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','265,182')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','476,590')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','652,312.5')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','332,728')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','476,590')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','652,312.5')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','77.5,758.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','151,395.75')" class="guia">Tercera parte</button></div>  
                    </div>`],
                ],  
                "ingrediente":[[619.25,425.75],[612.5,458.5],[656.5,459.75],[511.75,522.25],[482.25,540],[549.25,710.25],[660.75,392.75],[621.25,109]],
                "ingredientevendedor": [["Mojito dulce"],["Mojito dulce"],["Mojito dulce"],["Licor fuerte"],["Licor fuerte"],["Licor fuerte"],["Carne de jabalí"],["Hierbas aromáticas"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-92px'>Nº 1 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1 - [2/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1 - [2/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1 - [2/2]</span></div>"],   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente' style='margin-left:-92px'>Nº 2 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [1/4]</span></div>"],   
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Recoge el mojito en uno de los puntos marcados.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','502,530.5')" class="guia">Segundo ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el <b class="epico-texto">Cóctel de arena estrellada</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/mojitodulce.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Recoge el mojito en uno de los puntos marcados.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','502,530.5')" class="guia">Segundo ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el <b class="epico-texto">Cóctel de arena estrellada</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/mojitodulce.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Recoge el mojito en uno de los puntos marcados.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','502,530.5')" class="guia">Segundo ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el <b class="epico-texto">Cóctel de arena estrellada</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/mojitodulce.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],

                    [`<div style='text-align:center'>Recoge el licor en uno de los puntos marcados.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','628.5,449')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el <b class="epico-texto">Cóctel de arena estrellada</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/coctelfuerte.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Recoge el licor en uno de los puntos marcados.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','628.5,449')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el <b class="epico-texto">Cóctel de arena estrellada</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/coctelfuerte.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Recoge el licor en uno de los puntos marcados.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','628.5,449')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear el <b class="epico-texto">Cóctel de arena estrellada</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/coctelfuerte.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],

                    [`<div style='text-align:center'>Compra la <b class="raro-texto">Carne de Jabalí</b> al mercader ambulante por 200.000 de plata <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/plata32.png" class="imgitem" />.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','628.5,449')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Barbacoa de jabalí Kaloa</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/carnedejabali.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],

                    [`<div style='text-align:center'>Mata a enemigos por la zona hasta conseguir hasta conseguir <b class="comun-texto"><img class="imgitem comun" src='./imagenes/ingrediente/hierbaaromatica.png' /> x1000 Hierbas Aromáticas</b>.                    
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','71,596')" class="guia">Segundo ingrediente</button></div>  
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','136,301')" class="guia">Tercero ingrediente</button></div>  
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','219,609')" class="guia">Cuarto ingrediente</button></div>
                    <p>Una vez consigas los 4 ingredientes podrás crear el <b class="legendario-texto">Plato del festival de Punika</b> en la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/hierbaaromatica.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                ],   
                "monstruos": [[263,333],[359,253],[492.25,102],[632.5,64.25]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-1.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-1.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-2.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-2.png'/></div>"],       
                    
                ],      
            }, 
            "geometry": { "type": "Point", "coordinates": [58.6875,-180.84375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Punika",
                "title": "aldeadelasnia",
                "img": "aldeadelasnia",
                "nombre": "Aldea de las Nia", 
                "portal1":[[16,357],["Camino del Malecón"],["bottom"]],
                "portal2":[[233,101],["Colonia Tikatika"],["left"]],
                "portal3":[[399,128],["Playa de arena estrellada"],["left"]],  
                "mokokos": [
                    [117.5,518.5],     
                    [188,621.5],
                    [365,768],
                    [2.25,171.75],
                    [507,439.5],
                    [340,87.5],
                    [495.25,125.25],
                    [523.75,248],
                    [760,273], 
                ], 
                "cancion": [[499.5,433.75]],
                "cancionicono": [["canciondearmonia"]],
                "cancionnombre": [["Canción de Armonía"]], 
                "canciondesc": [["Toca la <b>Canción de Armonía</b> para romper las nabas y revelar la Mokoko."]],  
                "skillpoint": [[209.25,208.75]],
                "skillpointnpc": [["La piedra del poder"]], 
                "skillpointguia": [
                    [`<div style='margin-bottom:15px'><p>Completa la misión principal <b>El festival y la selección</b> para poder interactuar con el objeto e iniciar la cadena de misiones <b>diaria</b> que empieza con <b class="questnormal">Cartas a Punika</b></p>
                    La tercera misión empieza en
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','358.5,645.5')" class="guia">Playa de Arena Estrellada</button></div>  
                    <div class="guiadiv"><a class="guia" href="https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/#letter" target="_blank">Guía</a></div>
                    <ul style='text-align:center'><li><img width="200px" src='./imagenes/secretos/cartasapunika.jpg' /></li></ul>   
                    </div>`]], 
                "pasillosecreto": [[354,748.25],[487,349],[704.5,292.5]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <img class="imgitem comun" src='./imagenes/ingrediente/coctelfuerte.png' /><b class="comun-texto">Licor fuerte</b> para recoger la Mokoko.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','498,542')" class="guia">Licor Fuerte</button></div> 
                    `], 
                    ["Cuando llegues a la Mokoko bájate de la barca para recogerla."],  
                    ["Necesitas <b class='sabiduria'>350 de Sabiduría</b> para recoger la Mokoko."],  
                ], 
                "vista": [[279,147],[93.25,402]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"], 
                ],    
                "historiaoculta":[
                    [26,303.25],
                    [62.5,277],
                    [92.25,288.5],
                    [161,256.75],
                    [324,77.5],
                    [181.25,654.75],
                    [176,467.75],
                    [110.5,294.75],
                    [246.25,316.25],
                    [488.25,109.25],
                    [526,193.5],
                    [393.25,701.25],
                    [151,395.75],
                ],
                "historiaocultatitulo":[                    
                    ["<span class='historiaocultatit text-shadow'>[3/4] Dúo fantástico</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/5] ¡Te damos la bienvenida al festival de Lailai!</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/5] ¡Te damos la bienvenida al festival de Lailai!</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/5] ¡Te damos la bienvenida al festival de Lailai!</span>"],
                    ["<span class='historiaocultatit text-shadow'>[5/5] ¡Te damos la bienvenida al festival de Lailai!</span>"],
                    ["<span class='historiaocultatit text-shadow'>[4/5] ¡Te damos la bienvenida al festival de Lailai!</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/6] Objeto perdido: el paquete</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/6] Objeto perdido: el paquete</span>"],
                    ["<span class='historiaocultatit text-shadow'>[6/6] Objeto perdido: el paquete</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/6] Objeto perdido: el paquete</span>"],
                    ["<span class='historiaocultatit text-shadow'>[4/6] Objeto perdido: el paquete</span>"],
                    ["<span class='historiaocultatit text-shadow'>[2/2] Diario arrastrado por la marea</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[3/3] La flor del festival</span>"],
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','527,850')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','224,226')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','218,690')" class="guia">Cuarta parte</button></div> 
                    </div>`], 

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','89,289')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','160.5,259')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','182.5,654.5')" class="guia">Cuarta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','324,78')" class="guia">Quinta parte</button></div> 
                    </div>`],  
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Punika</h3> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','61,277')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','160.5,259')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','182.5,654.5')" class="guia">Cuarta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','324,78')" class="guia">Quinta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','89,289')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','61,277')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','182.5,654.5')" class="guia">Cuarta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','324,78')" class="guia">Quinta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','89,289')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','61,277')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','160.5,259')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','182.5,654.5')" class="guia">Cuarta parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','89,289')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','61,277')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','160.5,259')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','-163,724')" class="guia">Quinta parte</button></div> 
                    </div>`], 
                    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Punika</h3> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','112,297.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','484,109')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','530,194')" class="guia">Cuarta parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-163,724')" class="guia">Quinta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','244.5,318')" class="guia">Sexta parte</button></div> 
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','176,469')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','484,109')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','530,194')" class="guia">Cuarta parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-163,724')" class="guia">Quinta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','244.5,318')" class="guia">Sexta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','176,469')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','112,297.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','484,109')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','530,194')" class="guia">Cuarta parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-163,724')" class="guia">Quinta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','176,469')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','112,297.5')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','530,194')" class="guia">Cuarta parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-163,724')" class="guia">Quinta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','244.5,318')" class="guia">Sexta parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','176,469')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','112,297.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','484,109')" class="guia">Tercera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-163,724')" class="guia">Quinta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','244.5,318')" class="guia">Sexta parte</button></div> 
                    </div>`],  
 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','266,707')" class="guia">Primera parte</button></div>   
                    </div>`],
                    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','77.5,758.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','333,726')" class="guia">Segunda parte</button></div> 
                    </div>`],
                ],      
                "cocinero": [[477.5,655]],
                "cocineronombre":["Ranghe"],
                "cocinerorecetas": [`
                <div style='text-align:center; max-height: 500px; overflow: auto'>
                    Ranghe permite cocinar hasta 6 platos únicos con los ingredientes de Punika. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td>Cóctel de arena estrellada</td><td>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','612,459')" class="guia">Camino del Malecón</button></div>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','550,709')" class="guia">Camino del Malecón</button></div>
                    </td></tr>
                    <tr><td>Barbacoa de jabalí Kaloa</td><td> 
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','380,780')" class="guia">Colonia Tikatika</button></div>
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','114,489')" class="guia">Colonia Tikatika</button></div>
                    </td></tr>
                    <tr><td>Ensalada de flores</td><td>  
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','238,486')" class="guia">Colonia Tikatika</button></div>
                    </td></tr> 
                    <tr><td>Pan de plátano silvestre</td><td>
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','133,520')" class="guia">Bosque secreto</button></div> 
                    </td></tr>
                    <tr><td>Cangrejo papu al vapor </td><td><div class="guiadiv"><button onclick="panto('coloniatikatika','395.5,601.5')" class="guia">Colonia Tikatika</button></div></td></tr>
                    <tr><td>Plato del festival de Punika</td><td>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','621.5,108.5')" class="guia">Camino del Malecón</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','71,596')" class="guia">Playa de arena estrellada</button></div> 
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','132,301')" class="guia">Colonia Tikatika</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','219,609')" class="guia">Bosque Secreto</button></div>
                    </td></tr> 
                    </tbody>
                    </table>
                </div>`],
                "afinidad": [
                    [183,477.5],
                    [109.75,289.25],
                    [43,290],
                    [23.25,280],
                    [106.25,260.25],
                    [253.75,309],
                    [338.5,68],
                    [495.5,112.75],
                    [483.25,111.25],
                    [522.75,201],
                ],
                "afinidadnombre": [
                    ["nagi"],
                    ["liru"],
                    ["sapiano el zorro"],
                    ["yom"],
                    ["berver"],
                    ["jahara"],
                    ["albión"],
                    ["nia"],
                    ["hariya"],
                    ["shana"],
                ], 
            }, 
            "geometry": { "type": "Point", "coordinates": [58,-175.9375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Punika",
                "title": "coloniatikatika",
                "img": "coloniatikatika",
                "nombre": "Colonia Tikatika", 
                "portal1":[[406,902],["Aldea de las Nia"],["right"]],
                "portal2":[[476,62],["Bosque Secreto"],["left"]],
                "mokokos": [
                    [-10.5,456.5],  
                    [564.75,747.5],
                    [529.25,609.25],
                    [362.5,514.75],
                    [491.25,427.5],
                    [554.5,387.5],
                    [600.5,347],
                    [549.25,177.5],
                    [386.5,80.25],
                    [364.75,204.75],
                    [131.25,257.25],
                    [145,279.75],  
                ], 
                "cancion": [[138.25,251.75],[593,348.75]],
                "cancionicono": [["canciondearmonia"],["canciondearmonia"]],
                "cancionnombre": [["Canción de Armonía"],["Canción de Armonía"]], 
                "canciondesc": [
                    ["Toca la <b>Canción de Armonía</b> para hacer desaparecer las estatuas de los monos."],
                    [`Toca la <b>Canción de Armonía</b> para hacer desaparecer la estatua del dragón.
                    <div style="text-align:center"><img style="width:300px" src='./imagenes/secretos/punikasecreto.jpg' /></div>`]    
                ],
                "comercianteitinerante": [[373,777.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow' style='margin-left: -56px;'>Rainy</span></div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "pasillosecreto": [[16,466],[521,182.75]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <img class="imgitem comun" src='./imagenes/ingrediente/mojitodulce.png' /><b class="comun-texto">Mojito dulce</b> para recoger la Mokoko.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','646,463')" class="guia">Mojito dulce</button></div> 
                    `], 
                    ["Necesitas <b class='sabiduria'>350 de Sabiduría</b> para recoger la Mokoko."],  
                ], 
                "vista": [[337.5,676.5],[430,165]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8</div>"], 
                ],    
                "historiaoculta":[
                    [394.5,110], 
                ],
                "historiaocultatitulo":[                    
                    ["<span class='historiaocultatit text-shadow'>[2/4] Sobre los orígenes de Punika</span>"], 
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','484,474')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('aguastermalesdenaruna','172,756')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('pozodeoreha','654,586')" class="guia">Cuarta parte</button></div> 
                    </div>`],
                ], 
                "ingrediente":[[379.5,777.25],[238,488],[115,485.5],[141.5,636.5],[43,435],[188,665],[104,324],[395,601],[44,507.5]],
                "ingredientevendedor": [["Carne de jabalí"],["Ensalada de flores"],["Hoja de plátano"],["Plátanos maduros"],["Plátanos maduros"],["Plátanos maduros"],["Plátanos maduros"],["Cangrejo Papú"],["Fruta tropical dulce"]],
                "ingredientetooltip": [ 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 - [2/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [3/4]</span></div>"], 
                ],
                "descripcioningrediente": [  
                    [`<div style='text-align:center'>Compra la <b class="raro-texto">Carne de Jabalí</b> al mercader ambulante por 200.000 de plata <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/plata32.png" class="imgitem" />.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','628.5,449')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Barbacoa de jabalí Kaloa</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/carnedejabali.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],

                    [`<div style='text-align:center'>Mata a los monstruos de la zona para conseguir:
                    <ul>
                    <li class="list-margin"><img class="imgitem comun" src='./imagenes/ingrediente/floraromatica.png' /><b class="comun-texto"> x30 Flores aromáticas</b></li>
                    <li class="list-margin"><img class="imgitem comun" src='./imagenes/ingrediente/flordulce.png' /><b class="comun-texto"> x30 Flores ...</b></li>
                    <li class="list-margin"><img class="imgitem comun" src='./imagenes/ingrediente/floramarilla.png' /><b class="comun-texto"> x5 Flores ...</b></li>
                    </ul>
                    Una vez consigas los 3 ingredientes podrás crear la <b class="epico-texto">Ensalada de Flores</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center; display:flex; justify-content:center;'>
                    <li><img src='./imagenes/ingrediente/floraromatica.png' /></li>
                    <li><img src='./imagenes/ingrediente/flordulce.png' /></li>
                    <li><img src='./imagenes/ingrediente/floramarilla.png' /></li>
                    </ul>
                    </div>`],

                    [`<div style='text-align:center'>Mata monos hasta conseguir <b class="verde-texto"><img class="imgitem" src='./imagenes/ingrediente/hojadeplatano.png' /> x50 Hojas de plátano</b>.
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','375,780')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Barbacoa de jabalí Kaloa</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/hojadeplatano.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    
                    [`<div style='text-align:center'>Mata al Capitán orangután inquieto hasta conseguir <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> x10 Plátanos maduros</b>.
                    <p>Llévale los <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> Plátanos maduros</b> a Ranghe para crear
                    <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/fluorbanana.png' /> Plátano en polvo</b>.</p>
                    <p>Crea en la cocinera Ranghe la <b class="raro-texto nowrap"><img class="imgitem raro" src='./imagenes/ingrediente/masadeplatano.png' /> Masa de pan de plátano</b> y déjala en el inventario durante 12horas para obtener el <b class="legendario-texto">Pan de plátano silvestre</b> de Punika.</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Cocinera Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bananas.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata al Capitán orangután inquieto hasta conseguir <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> x10 Plátanos maduros</b>.
                    <p>Llévale los <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> Plátanos maduros</b> a Ranghe para crear
                    <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/fluorbanana.png' /> Plátano en polvo</b>.</p>
                    <p>Crea en la cocinera Ranghe la <b class="raro-texto nowrap"><img class="imgitem raro" src='./imagenes/ingrediente/masadeplatano.png' /> Masa de pan de plátano</b> y déjala en el inventario durante 12horas para obtener el <b class="legendario-texto">Pan de plátano silvestre</b> de Punika.</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Cocinera Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bananas.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata al Capitán orangután inquieto hasta conseguir <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> x10 Plátanos maduros</b>.
                    <p>Llévale los <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> Plátanos maduros</b> a Ranghe para crear
                    <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/fluorbanana.png' /> Plátano en polvo</b>.</p>
                    <p>Crea en la cocinera Ranghe la <b class="raro-texto nowrap"><img class="imgitem raro" src='./imagenes/ingrediente/masadeplatano.png' /> Masa de pan de plátano</b> y déjala en el inventario durante 12horas para obtener el <b class="legendario-texto">Pan de plátano silvestre</b> de Punika.</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Cocinera Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bananas.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata al Capitán orangután inquieto hasta conseguir <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> x10 Plátanos maduros</b>.
                    <p>Llévale los <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/bananas.png' /> Plátanos maduros</b> a Ranghe para crear
                    <b class="comun-texto nowrap"><img class="comun imgitem" src='./imagenes/ingrediente/fluorbanana.png' /> Plátano en polvo</b>.</p>
                    <p>Crea en la cocinera Ranghe la <b class="raro-texto nowrap"><img class="imgitem raro" src='./imagenes/ingrediente/masadeplatano.png' /> Masa de pan de plátano</b> y déjala en el inventario durante 12horas para obtener el <b class="legendario-texto">Pan de plátano silvestre</b> de Punika.</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Cocinera Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bananas.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    
                    [`<div style='text-align:center'>Mata al jefe de zona <b class="jefesdezona">Moake</b> para conseguir el cangrejo.<br/>
                    Necesitarás <b class="epico-texto"><img class="imgitem epico" src='./imagenes/ingrediente/cangrejopapu.png' /> x3 Cangrejos Papú</b> para crear el <b class="legendario-texto">Cangrejo papu al vapor </b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/cangrejopapu.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],

                    [`<div style='text-align:center'>Mata a enemigos por la zona hasta conseguir hasta conseguir <b class="raro-texto"><img class="imgitem raro" src='./imagenes/ingrediente/mangodulce.png' /> x700 Mangos tropicales</b>.                    
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','621.5,108.5')" class="guia">Primer ingrediente</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','71,596')" class="guia">Segundo ingrediente</button></div>  
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','219,609')" class="guia">Cuarto ingrediente</button></div>
                    <p>Una vez consigas los 4 ingredientes podrás crear el <b class="legendario-texto">Plato del festival de Punika</b> en la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/mangodulce.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                ],   
                "monstruos": [[266.5,650],[72.5,482.5],[113.5,255.5],[176,316],[279.5,603.5],[517,569],[343.5,619],[553.5,566.5],[690,233.5],[644.25,295.25],[614.5,265.5],[475.5,180.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],     
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-7.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-7.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-7.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-7.png'/></div>"],                 
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-8.png'/></div>"],                
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-8.png'/></div>"],                
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-9.png'/></div>"],                
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-9.png'/></div>"],              
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-10.png'/></div>"],            
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-10.png'/></div>"],            
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-11.png'/></div>"],           
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-11.png'/></div>"],       
                    
                ],  
                "historiaadicional":[[395.25,402.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>El caos se desvanece</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 2 de Punika</h3> 
                    <p>Para desbloquearla es necesario completar los encargos de Una:</p> 
                    <ul>
                    <li class="list-margin">
                    <b class="verde-texto"><img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/una.png" class="imgitem"/>El altar de la locura</b>
                    </li>
                    <li class="list-margin">
                    <b class="verde-texto"><img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/una.png" class="imgitem"/>Estanque de purificación</b>
                    </li>
                    <li class="list-margin">
                    <b class="verde-texto"><img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/una.png" class="imgitem"/>Locura apilada en el altar</b>
                    </li>
                    </ul>
                    </div>`],
                ],  
                "jefesdezona": [[409,572]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Moake</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/reymoak.png'/></div>"]],    
            }, 
            "geometry": { "type": "Point", "coordinates": [52.5625,-180.46875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Punika",
                "title": "bosquesecreto",
                "img": "bosquesecreto",
                "nombre": "Bosque Secreto", 
                "portal1":[[-166,520],["Colonia Tikatika"],["bottom"]], 
                "mokokos": [
                    [-81.5,624.5],  
                    [117.25,778.25],
                    [181.5,880],
                    [198.25,550.75],
                    [234.25,246.75],
                    [393.5,156.25],
                    [424.5,356.75],
                    [468,444.5],
                    [458.5,445.25],
                    [663.75,595],
                    [661.25,279.25], 
                ], 
                "cancion": [[430.75,353],[463.75,456.25]],
                "cancionicono": [["canciondearmonia"],["canciondearmonia"]],
                "cancionnombre": [["Canción de Armonía"],["Canción de Armonía"]], 
                "canciondesc": [
                        ["Toca la <b>Canción de Armonía</b> para hacer desaparecer las estatuas de los monos."],
                        ["Toca la <b>Canción de Armonía</b> para hacer desaparecer la estatua del dragón y las dos nabas."]
                    ],
                "comercianteitinerante": [[159.5,739.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow' style='margin-left: -56px;'>Rainy</span></div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "pasillosecreto": [[-83.25,610.5],[344.5,149],[456.75,433.5]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <img class="imgitem comun" src='./imagenes/ingrediente/coctelfuerte.png' /><b class="comun-texto">Licor fuerte</b> para recoger la Mokoko.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','498,542')" class="guia">Licor Fuerte</button></div> 
                    `],  
                    [`Necesitas <b class='carisma'>350 de Carisma</b> para ir a las dos <div class="guiadiv"><button onclick="panto('bosquesecreto','463.25,446.75')" class="guia">Mokokos</button></div> `],  
                    [`Al click en el botón para ver la <div class="guiadiv"><button onclick="panto('bosquesecreto','346,147.5')" class="guia">entrada secreta</button></div> `],  
                ], 
                "vista": [[83,720],[438.5,324]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 10</div>"], 
                ],    
                "historiaoculta":[
                    [653,313], 
                ],
                "historiaocultatitulo":[                    
                    ["<span class='historiaocultatit text-shadow'>[4/4] Lo que se despertó en el bosque</span>"], 
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','332,728')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','265,182')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','476,590')" class="guia">Tercera parte</button></div>  
                    </div>`],
                ], 
                "ingrediente":[[171.5,750.5],[157.5,561.5],[131.5,516],[140.5,332],[178,293],[254.5,265],[221,609]],
                "ingredientevendedor": [["Carne de jabalí"],["Bicho de carne"],["Bicho de carne"],["Bicho de carne"],["Bicho de carne"],["Bicho de carne"],["Carne magra gruesa"]],
                "ingredientetooltip": [ 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 -[4-4]</span></div>"],  
                ],
                "descripcioningrediente": [  
                    [`<div style='text-align:center'>Compra la <b class="raro-texto">Carne de Jabalí</b> al mercader ambulante por 200.000 de plata <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/plata32.png" class="imgitem" />.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','628.5,449')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Barbacoa de jabalí Kaloa</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/carnedejabali.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Tiene muy pocas probabilidades de salir. Añádelo al tomo del aventurero de Punika cuando lo consigas.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bichodecarne.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Tiene muy pocas probabilidades de salir. Añádelo al tomo del aventurero de Punika cuando lo consigas.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bichodecarne.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Tiene muy pocas probabilidades de salir. Añádelo al tomo del aventurero de Punika cuando lo consigas.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bichodecarne.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Tiene muy pocas probabilidades de salir. Añádelo al tomo del aventurero de Punika cuando lo consigas.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bichodecarne.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Tiene muy pocas probabilidades de salir. Añádelo al tomo del aventurero de Punika cuando lo consigas.
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/bichodecarne.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],

                    [`<div style='text-align:center'>Mata a los enemigos cercanos para conseguir <b class="raro-texto"><img src='./imagenes/ingrediente/carnemagragruesa.png' class="imgitem raro" /> x500 Carne magra</b>. 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','621.5,108.5')" class="guia">Primer ingrediente</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','71,596')" class="guia">Segundo ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','132,301')" class="guia">Tercer ingrediente</button></div>  
                    <p>Una vez consigas los 4 ingredientes podrás crear el <b class="legendario-texto">Plato del festival de Punika</b> en la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/carnemagragruesa.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                ],   
                "monstruos": [[298,720],[180,565],[179,236],[248,341]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],   
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-12.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-12.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-13.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-13.png'/></div>"],                
                    
                ],   
                "mazmorra": [[678,289]],
                "nombreMazmorra": [["Pozo de Oreha"]],  
            }, 
            "geometry": { "type": "Point", "coordinates": [47.125,-177.25] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Punika",
                "title": "playadearenaestrellada",
                "img": "playadearenaestrellada",
                "nombre": "Playa de arena estrellada", 
                "portal1":[[-170.5,748],["Aldea de las Nia"],["bottom"]], 
                "mokokos": [
                    [118,800],   
                    [105,749.25], 
                    [284,714], 
                    [-111.75,501.75], 
                    [292.75,450.25], 
                    [509.75,579.5], 
                    [269.5,309.25], 
                    [471.5,239.75], 
                    [375.5,159.25]
                ], 
                "skillpoint": [[358.5,646]],
                "skillpointnpc": [["<span class='questnormal'>Tu siempre reluciente nombre</span>"]],
                "skillpointguia": [[`Tercera parte de la diaria que empieza con:
                <div class="guiadiv"><button onclick="panto('aldeadelasnia','208.25,209.25')" class="guia">Cartas a Punika</button></div>  
                <div class='guiadiv'>
                <a class='guia' target='_blank' href='https://www.thelordoftheguides.com/lost-ark/conseguir-mas-puntos-de-habilidad-a-lvl-50/'>Guía completa</a>
                </div>`]],
                "comercianteitinerante": [[373.25,453.5]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow' style='margin-left: -56px;'>Rainy</span></div>"]], 
                "comercianteitinerantehorario":[["12:30, 2:30, 5:30, 6:30, 8:30, 9:30 (AM y PM)"]],
                "vista": [[382,609.5],[163,246]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5</div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6</div>"], 
                ],    
                "historiaoculta":[
                    [215.5,689],[-159.5,721.5],[477,588.5],[268.75,705.75],[78.5,758], 
                ],
                "historiaocultatitulo":[                    
                    ["<span class='historiaocultatit text-shadow'>[4/4] Dúo fantástico</span>"],
                    ["<span class='historiaocultatit text-shadow'>[5/6] Objeto perdido: el paquete</span>"],
                    ["<span class='historiaocultatit text-shadow'>[3/4] Lo que se despertó en el bosque</span>"],
                    ["<span class='historiaocultatit text-shadow'>[1/2] Diario arrastrado por la marea</span>"], 
                    ["<span class='historiaocultatit text-shadow'>[2/3] La flor del festival</span>"],   
                ],
                "historiaodcultadescripcion":[    
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','527,850')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','224,226')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','23,303.5')" class="guia">Tercera parte</button></div>  
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','176,469')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','112,297.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','484,109')" class="guia">Tercera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-163,724')" class="guia">Quinta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','244.5,318')" class="guia">Sexta parte</button></div> 
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','332,728')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','265,182')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','652,312.5')" class="guia">Cuarta parte</button></div> 
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Punika</h3> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','393.5,702')" class="guia">Segunda parte</button></div>  
                    </div>`],

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Punika</h3>
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','656,84')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','333,726')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','151,395.75')" class="guia">Tercera parte</button></div> 
                    </div>`],
                ],  
                "cancion": [[298,447]],
                "cancionicono": [["canciondearmonia"]],
                "cancionnombre": [["Canción de Armonía"]], 
                "canciondesc": [["Toca la <b>Canción de Armonía</b> para mover los farolillos y recoger la Mokoko."]],
                "ingrediente":[[373,461],[157.5,561.5],[-70.5,598],[75,593.5],[298.5,635.5]],
                "ingredientevendedor": [["Carne de jabalí"],["Botella de vino escondida por alguien"],["Botella de vino escondida por alguien"],["Botella de vino escondida por alguien"],["Botella de vino escondida por alguien"]],
                "ingredientetooltip": [ 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 - [1/2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [2/4]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [2/4]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [2/4]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 7 - [2/4]</span></div>"],  
                ],
                "descripcioningrediente": [  
                    [`<div style='text-align:center'>Compra la <b class="raro-texto">Carne de Jabalí</b> al mercader ambulante por 200.000 de plata <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/plata32.png" class="imgitem" />.
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','628.5,449')" class="guia">Primer ingrediente</button></div>
                    Una vez consigas los 2 ingredientes podrás crear la <b class="epico-texto">Barbacoa de jabalí Kaloa</b> en la cocinera:
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div> 
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/carnedejabali.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],  

                    [`<div style='text-align:center'>Mata a los enemigos cercanos para conseguir <b class="comun-texto"><img src='./imagenes/ingrediente/sourflower.png' class="imgitem comun" /> x500 Botella de vino escondida por alguien</b>. 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','621.5,108.5')" class="guia">Primer ingrediente</button></div>   
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','132,301')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','219,609')" class="guia">Cuarto ingrediente</button></div>
                    <p>Una vez consigas los 4 ingredientes podrás crear el <b class="legendario-texto">Plato del festival de Punika</b> en la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/sourflower.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata a los enemigos cercanos para conseguir <b class="comun-texto"><img src='./imagenes/ingrediente/sourflower.png' class="imgitem comun" /> x500 Botella de vino escondida por alguien</b>. 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','621.5,108.5')" class="guia">Primer ingrediente</button></div>   
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','132,301')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','219,609')" class="guia">Cuarto ingrediente</button></div>
                    <p>Una vez consigas los 4 ingredientes podrás crear el <b class="legendario-texto">Plato del festival de Punika</b> en la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/sourflower.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata a los enemigos cercanos para conseguir <b class="comun-texto"><img src='./imagenes/ingrediente/sourflower.png' class="imgitem comun" /> x500 Botella de vino escondida por alguien</b>. 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','621.5,108.5')" class="guia">Primer ingrediente</button></div>   
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','132,301')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','219,609')" class="guia">Cuarto ingrediente</button></div>
                    <p>Una vez consigas los 4 ingredientes podrás crear el <b class="legendario-texto">Plato del festival de Punika</b> en la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/sourflower.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                    [`<div style='text-align:center'>Mata a los enemigos cercanos para conseguir <b class="comun-texto"><img src='./imagenes/ingrediente/sourflower.png' class="imgitem comun" /> x500 Botella de vino escondida por alguien</b>. 
                    <div class="guiadiv"><button onclick="panto('caminodelmalecón','621.5,108.5')" class="guia">Primer ingrediente</button></div>   
                    <div class="guiadiv"><button onclick="panto('coloniatikatika','132,301')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('bosquesecreto','219,609')" class="guia">Cuarto ingrediente</button></div>
                    <p>Una vez consigas los 4 ingredientes podrás crear el <b class="legendario-texto">Plato del festival de Punika</b> en la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    <ul style='text-align:center;'><li><img src='./imagenes/ingrediente/sourflower.png' /><span style='position:fixed; margin:25px 0 0 10px'></span></li></ul>
                    </div>`],
                ],  
                "monstruos": [[633.25,570.25],[551,545.5],[332.5,648],[248.5,615],[-97.5,566.5],[93.5,539.5]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-3.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-3.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-4.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-4.png'/></div>"],  
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-5.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Punika</h3><img class='monstruos-img' src='./imagenes/monstruos/pu-5.png'/></div>"],                  
                    
                ],   
                "historiaadicional":[[-45.5,633],[648.25,641.5],[346.5,160.75],[648.25,651.5]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>[1/4] Una historia antigua</span>"],
                    ["<span class='historiaadicionaltit text-shadow' style='margin-left:-175px'>[2/4] Una historia antigua</span>"],
                    ["<span class='historiaadicionaltit text-shadow'>[3/4] Una historia antigua</span>"],
                    ["<span class='historiaadicionaltit text-shadow'>[4/4] Una historia antigua</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Punika</h3> 
                    <p>Acepta y completa la <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/02/queschainnormal.png" class="imgitem"/> cadena de misiones que te dará el npc de la imagen:</p>
                    <img style="width: 200px; height: auto" src="./imagenes/secretos/unahistoriaantigua.png" /> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','649,642.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','346.5,161.75')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','649,642.5')" class="guia">Cuarta parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Punika</h3> 
                    <p>Interactúa con la tumba para continuar la <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/02/queschainnormal.png" class="imgitem"/> cadena de misiones.</p>
                    <img style="width: 200px; height: auto" src="./imagenes/secretos/unahistoriaantigua2.png" /> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-44,633')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','346.5,161.75')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','649,642.5')" class="guia">Cuarta parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Punika</h3> 
                    <p>Inspecciona los objetos que hay encima de la mesa para continuar la <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/02/queschainnormal.png" class="imgitem"/> cadena de misiones.</p>
                    <img style="width: 200px; height: auto" src="./imagenes/secretos/unahistoriaantigua3.png" /> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-44,633')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','649,642.5')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','649,642.5')" class="guia">Cuarta parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'>
                    <h3 class='aventurero'>Otra historia nº 1 de Punika</h3> 
                    <p>Interactúa con la tumba para continuar la <img src="http://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/02/queschainnormal.png" class="imgitem"/> cadena de misiones.</p>
                    <img style="width: 200px; height: auto" src="./imagenes/secretos/unahistoriaantigua2.png" /> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','-44,633')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','649,642.5')" class="guia">Segunda parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('playadearenaestrellada','346.5,161.75')" class="guia">Tercera parte</button></div>  
                    </div>`],
                ], 
                "pasillosecreto": [[458.5,240.75],[92.75,742.75]],
                "pasillosecretodesc": [ 
                    [`Utiliza el <img class="imgitem comun" src='./imagenes/ingrediente/coctailestrellado.png' /><b class="epico-texto">Cóctel de arena estrellada</b> para recoger la Mokoko.
                    <p>El plato lo prepara la cocinera:</p> 
                    <div class="guiadiv"><button onclick="panto('aldeadelasnia','475,655')" class="guia">Ranghe</button></div>  
                    `], 
                    ["Necesitas <b class='amabilidad'>350 de Amabilidad</b> para recoger la Mokoko."],  
                ], 
                "mazmorra": [[405,114.5]],
                "nombreMazmorra": [["Aguas termales de Naruna"]],  
            }, 
            "geometry": { "type": "Point", "coordinates": [60.09375,-170.96875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Sur",
                "title": "vestigiosdebellion",
                "img": "vestigiosdebellion",
                "nombre": "Vestigios de Bellion", 
                "portal1":[[275.77164466275354,878.2266222336921],["Territorio de Candaria"],["right"]], 
                "misionsecreta":[[3.8890872965260117,692.9646455628166]],
                "misionsecretatit":[["Misión secreta"]],
                "misionsecretadesc":[[
                    `Interactúa con las zanahorias del suelo y completa las misiones.
                    <img width="300px" src='./imagenes/secretos/zanahorias.jpg' />
                    El gato de la misión se encuentra 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-121.62236636408619,606.6976182580578')" class="guia">Aquí</button></div>  
                    `]],
                "youtube":[[-64,-368]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/PquCH9gZhms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "mokokos": [
                    [-63.993163697382556,478.0041840821062],   
                    [75.30687219636732,481.89327137863216],
                    [169.7056274847714,670.6907819554403],
                    [522.905464687452,783.1207601641014],
                    [630.3856954278071,682.7115972356117],
                    [696,569.75],
                    [370,377.5],
                    [408,263.25],
                    [352.75,162.75],
                    [-22.75,349],
                    [592.25,531],
                    [435,222.75]
                ],    
                "vista": [[218.14244199604994,368.75618638878456],[-73.18555185280768,656.1950929411162]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4</div>"],
                ],
                "cancion": [[167.75,681.75],[520.25,768.25],[418.75,261.25],[-72.5,473.5]],
                "cancionicono": [["himnodelsol"],["himnodelsol"],["himnodelsol"],["himnodelsol"]],
                "cancionnombre": [["Himno del Sol"],["Himno del Sol"],["Himno del Sol"],["Himno del Sol"]],
                "canciondesc": [
                    ["Toca la canción <b>Himno del Sol</b> para revelar la Mokoko."],
                    ["Toca la canción <b>Himno del Sol</b> para revelar la Mokoko."],
                    ["Toca la canción <b>Himno del Sol</b> para revelar la Mokoko."],
                ],
                "pasillosecreto": [[618.5,679.5],[72,472.5],[584,535.25],[429.5,227.25],[-152.381511345701,537.0476003111829]],
                "pasillosecretodesc": [  
                    ["Necesitas <b class='valentia'>350 de Valentía</b> para recoger la Mokoko."],  
                    ["Necesitas <b class='amabilidad'>350 de Amabilidad</b> para entrar por el alcantarillado para recoger el ingrediente y la Mokoko."],  
                    [`Utiliza el <b class='unico-texto'><img class="nowrap unico imgitem" src='./imagenes/ingrediente/brandy.png' />Brandy bernés mágico</b> del tomo del Aventurero para recoger la Mokoko.`],  
                    [`Utiliza el <b class='unico-texto'><img class="nowrap unico imgitem" src='./imagenes/ingrediente/brandy.png' />Brandy bernés mágico</b> del tomo del Aventurero para recoger la Mokoko.`],  
                    [`El gato de la misión secreta se encuentra aquí.
                    <img width="300px" src='./imagenes/secretos/gatomoteado.jpg' />
                    `],  
                ],   
                "comercianteitinerante": [[-56.5,432.75]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow' style='margin-left:-52px'>Evan</span><div>"]],
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]], 
                "afinidad": [[14.14213562373095,574.1707063234766],[140.5,182]],
                "afinidadnombre": [["ludwig"],["thar"]],
                "monstruos": [
                    [255.5,101.5],
                    [142,330.5],
                    [282,413],
                    [591.5,722],
                    [184.5,115],
                    [680.5,585.5],
                    [383.5,717.5],
                    [282,564]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],  
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],  
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],              
                    
                ],   
                "historiaoculta":[
                    [225.5670631985087,810.3443712397835],
                    [333,137.25],
                    [209.25,346], 
                    [183.84776310850233,313.2483040656405],
                    [136.47160876900367,141.42135623730948],
                    [451.13412639701727,307.59144981614816],
                    [211.5,490.75],
                    [328.25,384.75],
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Haz una señal si tienes problemas [2/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Haz una señal si tienes problemas [3/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Lo que es la magia [2/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Listos para la guerra Épica [1/5]</span>"],
                    ["<span class='historiaocultatit text-shadow' style='margin-left:-203px'>Listos para la guerra Épica [2/5]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Listos para la guerra Épica [3/5]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Listos para la guerra Épica [4/5]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Listos para la guerra Épica [5/5]</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','645,511')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','333.75440072005046,138.59292911256333')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','397.747564417433,730.0877515751104')" class="guia">Cuarta parte</button></div>   
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Berna del Sur</h3> 
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','645,511')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','223.44574285494903,811.7585848021566')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','397.747564417433,730.0877515751104')" class="guia">Cuarta parte</button></div>   
                    </div>`], 

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','567.5,394.25')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','554,525.25')" class="guia">Tercera parte</button></div>   
                    </div>`], 

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','136.47160876900367,141.42135623730948')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','451.13412639701727,307.59144981614816')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','211.5,490.75')" class="guia">Cuarta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','328.25,384.75')" class="guia">Quinta parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','183.84776310850233,313.2483040656405')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','451.13412639701727,307.59144981614816')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','211.5,490.75')" class="guia">Cuarta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','328.25,384.75')" class="guia">Quinta parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','183.84776310850233,313.2483040656405')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','136.47160876900367,141.42135623730948')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','211.5,490.75')" class="guia">Cuarta parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','328.25,384.75')" class="guia">Quinta parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','183.84776310850233,313.2483040656405')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','136.47160876900367,141.42135623730948')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','451.13412639701727,307.59144981614816')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','328.25,384.75')" class="guia">Quinta parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 7 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','183.84776310850233,313.2483040656405')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','136.47160876900367,141.42135623730948')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','451.13412639701727,307.59144981614816')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','211.5,490.75')" class="guia">Cuarta parte</button></div> 
                    </div>`], 
                ],
                "ingrediente":[
                    [69.75,149],
                    [58.75,172.5],
                    [42.75,435.25],
                    [58.5,443],
                    [62.75,467.5],
                    [144,536.25],
                    [456.25,562.5],
                    [474.75,576],
                    [171,84.25],
                    [-10.960155108391488,714.5314023890063],
                    [67.25,483.25],
                    [-202,341],
                    [-262,341],
                    [-322,341],
                    [-382,341],
                    [192.75,482.5],
                    [43,245],
                    [133.64318164425748,190.91883092036784]
                ],
                "ingredientevendedor": [
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ostra fresca"],
                    ["Ingredientes: Marisco"],
                    ["Compra: La carne y El plato"],
                    ["Arroz blanco, rojo y marrón"],
                    ["Alas de Bellion"],
                    ["Receta de Cerveza"], 
                    ["Receta de Cerveza"], 
                    ["Receta de Cerveza"], 
                    ["Brandy"]
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 1</span></div>"], 

                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4 [2/2]</span></div>"], 

                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 [Paso 1]</span></div>"],   
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 3</span></div>"], 

                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 [1/6] y [4/6]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 [6/6]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 [5/6]</span></div>"],  
                    
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 6</span></div>"],  
                    
                ],
                "descripcioningrediente": [
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`],
                    [`<div style='text-align:center'>Hay 10 localizaciones en este mapa marcados con <b class="ingrediente">Nº1</b> para conseguir la
                     <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>Ostra Fresca</b>.
                    <p>Para poder crear el plato <b class="epico-texto">Ostra al vapor con vino blanco</b> necesitarás <b class="verde-texto"><img class="imgitem" src="./imagenes/ingrediente/ostrafresca.png"/>x30 Ostras Frescas</b>.</p>
                    Una vez las consigas todas las ostras llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/ostrafresca.png"/>
                    </div>`], 

                    [`<div style='text-align:center'><b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/mariscos.png"/>El Marisco</b> se encuentra en las alcantarillas, para entrar por la <b class="amarillo-texto">estrella del mapa</b>
                    necesitarás <b class="amabilidad">350 de amabilidad</b>.
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','216.02112165249028,557.5536969655927')" class="guia">Primer ingrediente</button></div>
                    Una vez las consigas los dos ingredientes llévaselos al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/mariscos.png"/>
                    </div>`],

                    [`<div style='text-align:center'>Compra la 
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/carne.png"/>Carne</b> y 
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/plato.png"/>El plato</b> al:
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-106,540')" class="guia">Vendedor</button></div>
                    Una vez las consigas los dos ingredientes llévaselos al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <div class="guiadiv">Cuando tengas
                    <b class="comun-texto"><img class="imgitem comun" src="./imagenes/ingrediente/carnecocinada.png"/>Carne cocinada</b> espera 2 horas hasta que puedas utilizar el plato. 
                    <b class="rojo-texto">(Tienes 10 min desde que pasan las 2 horas para utilizarlo)</b>.</div>
                    <div class="guiadiv">Tendrás que repetir el proceso 3 veces más, incluyendo el tiempo de espera de 2 horas cada vez que el plato cambia de calidad:
                    </div>
                    <div class="guiadiv">
                    <b class="raro-texto">Rara</b> -> <b class="epico-texto">Épica</b> -> <b class="legendario-texto">Legendaria</b> -> <b class="unico-texto">Reliquia</b>
                    </div>
                    <div class="guiadiv">Aprende el objeto de calidad Reliquia para añadirlo al tomo del aventurero.
                    </div>
                    <img src="./imagenes/ingrediente/carne.png"/>
                    <img src="./imagenes/ingrediente/plato.png"/>
                    </div>`],
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><b class="rojo-texto">Antes de hacer clic en los enlaces leete todo el proceso.</b></div>
                    Compra 
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozblanco.png"/>x5 Arroz Blanco</b>,
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozrojo.png"/>x1 Arroz Rojo</b> y
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozrojo.png"/>x2 Arroz naranja</b> al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-106,540')" class="guia">Vendedor</button></div>
                    Dirígete con los arroces a
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','80.61017305526642,627.9108216936542')" class="guia">Kandaria</button></div>
                    Utiliza todos los arroces en la localización anterior para recibir 3 beneficios, pasados unos segundos los beneficios cambiarán y una luz aparecerá sobre tu cabeza. Podrás recoger los cangrejos que están en el enlace anterior.
                    
                    <div class="guiadiv">Cuando tengas las
                    <b class="epico-texto"><img class="imgitem epico" src="./imagenes/ingrediente/gambas.png"/>Canrgejos</b> llévaselos al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/arrozblanco.png"/>
                    <img src="./imagenes/ingrediente/arrozmarron.png"/>
                    <img src="./imagenes/ingrediente/arrozrojo.png"/>
                    </div>`],

                    [`<div style='text-align:center'>
                    <div class="guiadiv">Compra las 
                    <b class="raro-texto"><img class="imgitem raro" src="./imagenes/ingrediente/alitasdepollo.png"/>Alas de Bellion</b> al 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-106,540')" class="guia">Vendedor</button></div>
                    y llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/alitasdepollo.png"/> 
                    </div>`],

                    [`<div style='text-align:center'>
                    <div class="guiadiv">Compra la 
                     <b class="comun-texto"><img class="imgitem comun" src="./imagenes/ingrediente/recetaazul.png"/>Parte 1</b> y la
                     <b class="raro-texto"><img class="imgitem raro" src="./imagenes/ingrediente/recetaazul.png"/>Parte 4</b> al
                     <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-106,540')" class="guia">Vendedor</button></div>
                     Cuando tengas todas las partes y llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','593.2625894155134,390.3229432149742')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','341.5325753131024,859.1347391416551')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','41.5,245')" class="guia">Quinto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','193,483')" class="guia">Sexto ingrediente</button></div>
                    <img src="./imagenes/ingrediente/recetaazul.png"/> 
                    </div>`],
                    [`<div style='text-align:center'>
                    <div class="guiadiv">Mata a los enemigos de la zona para conseguir la
                     <b class="raro-texto"><img class="imgitem raro" src="./imagenes/ingrediente/recetaazul.png"/>Parte 6</b> para preparar la Cerveza fría candariana y llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>                    
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-382.5447686219222,340.8254685319159')" class="guia">Primer y cuarto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','593.2625894155134,390.3229432149742')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','341.5325753131024,859.1347391416551')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','41.5,245')" class="guia">Quinto ingrediente</button></div>
                    <img src="./imagenes/ingrediente/recetaazul.png"/> 
                    </div>`],
                    [`<div style='text-align:center'>
                    <div class="guiadiv">
                    Recoge el ingrediente del suelo.
                    </div>
                     Cuando tengas todas las partes llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-382.5447686219222,340.8254685319159')" class="guia">Primer y cuarto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','593.2625894155134,390.3229432149742')" class="guia">Segundo ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','341.5325753131024,859.1347391416551')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','41.5,245')" class="guia">Quinto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','193,483')" class="guia">Sexto ingrediente</button></div>
                    <img src="./imagenes/ingrediente/recetaazul.png"/> 
                    </div>`],

                    [`<div style='text-align:center'>Alcanza la reputación de <b class="confianza">Confianza</b> con Thar para conseguir el 
                    <b class="unico-texto nowrap"><img class="imgitem unico" src="./imagenes/ingrediente/brandy.png"/>Brandy</b>.
                    <div class="guiadiv"><img src="./imagenes/ingrediente/brandy.png"/></div>
                    </div>`],
                ], 
                
                "vendedor": [[-105.5,539]],  
                "vendedordesc": [
                    [`Vendedor de ingredientes de cocina.
                    <div class="guiadiv"><img style="width: 350px" src="./imagenes/extraimg/ingredientesvendedorbernasur.png"/></div>
                    `]
                ],
                "cocinero": [[-83,519.5]],
                "cocineronombre":["Nevado"],
                "cocinerorecetas": [`
                <div style='text-align:center; max-height: 500px; overflow: auto'>
                    Nevado permite cocinar hasta 6 platos únicos con los ingredientes de Berna del Sur. 
                    <table class='tabla-recetas'>
                    <thead>
                    <tr>
                    <th>Plato</th>
                    <th style='width: 50%'>Ingredientes(Zona)</th>
                    </tr></thead>
                    <tbody>
                    <tr><td><b class="epico-texto">Ostras al vapor con vino blanco</b></td><td><div class="guiadiv"><button onclick="panto('vestigiosdebellion','57,445')" class="guia">Vestigios de Bellion</button></div></td></tr>
                    <tr><td><b class="epico-texto">Cerveza fría candariana</b></td><td> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-382.5,340')" class="guia">[1 y 4] Vestigios de Bellion</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','194,483')" class="guia">[2] Vestigios de Bellion</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','194,483')" class="guia">[3] Vestigios de Bellion</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','194,483')" class="guia">[4] Vestigios de Bellion</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','194,483')" class="guia">[5] Vestigios de Bellion</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','194,483')" class="guia">[6] Vestigios de Bellion</button></div>
                    </td></tr>
                    <tr><td><b class="epico-texto">Alas de Bellion</b></td><td><div class="guiadiv"><button onclick="panto('vestigiosdebellion','-261,341')" class="guia">Vestigios de Bellion Nº3</button></div></td></tr>
                    <tr><td><b class="legendario-texto">Cangrejo de río con verduras</b></td><td>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-261,341')" class="guia">Vestigios de Bellion Nº5 [Parte 1]</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','81,628')" class="guia">Territorio de Candaria Nº5 [Parte 2]</button></div>
                    </td></tr>
                    <tr><td><b class="legendario-texto">Vernilaya</b></td><td>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','216,555')" class="guia">Territorio de Candaria [1/2]</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','67.5286976033153,483.30748494100527')" class="guia">Vestigios de Bellion [2/2]</button></div>
                    </td></tr>
                    <tr><td><b class="unico-texto">Falda bernesa</b></td><td><div class="guiadiv"><button onclick="panto('vestigiosdebellion','-201.5,341')" class="guia">Vestigios de Bellion Nº6</button></div></td></tr> 
                    </tbody>
                    </table>
                </div>`],
            }, 
            "geometry": { "type": "Point", "coordinates": [97.9375,-128.546875] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Berna del Sur",
                "title": "territoriodecandaria",
                "img": "territoriodecandaria",
                "nombre": "Territorio de Candaria", 
                "portal1":[[18.38477631085024,253.14422766478404],["Vestigios de Bellion"],["left"]], 
                "portal2":[[676,552],["Berna"],["right"]],  
                "mokokos": [
                    [80,521],
                    [174.5,575.75],
                    [205.5,562.5],
                    [169,799],
                    [388.5,824.25],
                    [387.25,765.75],
                    [328.25,551.25],
                    [527,663.5],
                    [306,293.25],
                    [463.25,175],
                    [584,321.25],
                    [648.75,376.5],
                    [677.25,443],
                ],    
                "misionsecreta":[[324.75,222.25]],
                "misionsecretatit":[["Caída de pétalos negros"]],
                "misionsecretadesc":[
                    [`
                    Es necesario completar el resto de misiones amarillas del mapa para desbloquear la misión oculta.
                    <p>
                    Interactúa con los restos de armadura del suelo para iniciar la misión.  </p>
                    <div style="text-align:center"><img width="300px" src="./imagenes/secretos/candariasecreto.jpg"/></div>
                    `]
                ],
                "youtube":[[-64,-368]],
                "youtubedesc":[["Vídeo de las Mokokos"]],
                "youtubeurl":[[`<iframe width="560" height="315" src="https://www.youtube.com/embed/PquCH9gZhms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]],
                "vista": [[284.6104794275854,487.1965722375313],[121.97591975467945,539.8760274359291]],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1</div>"],
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2</div>"],
                ],
                "cancion": [[78,528],[170,576.25],[309.5,298.75],[581,328]],
                "cancionicono": [["himnodelsol"],["himnodelsol"],["himnodelsol"],["himnodelsol"],],
                "cancionnombre": [["Himno del Sol"],["Himno del Sol"],["Himno del Sol"],["Himno del Sol"],],
                "canciondesc": [
                    ["Toca la canción <b>Himno del Sol</b> para revelar la Mokoko."],
                    ["Toca la canción <b>Himno del Sol</b> para revelar la Mokoko."],
                    ["Toca la canción <b>Himno del Sol</b> para revelar la Mokoko."],
                    ["Toca la canción <b>Himno del Sol</b> para revelar la Mokoko."],
                ],
                "pasillosecreto": [[189.5,571.75],[377.25,770.25],[454.75,196],[659.75,459.75]],
                "pasillosecretodesc": [  
                    ["Necesitas <b class='carisma'>350 de Carisma</b> para recoger la Mokoko y el ingrediente."],  
                    [`Utiliza la Cerveza del Tomo del Aventurero para entrar.
                    <div style="text-align:center"><img src="./imagenes/ingrediente/cervezaberna.png"/></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','193.39370465452077,482.24682476922544')" class="guia">Cómo conseguirla</button></div> 
                    `], 
                    [`Utiliza la Cerveza del Tomo del Aventurero para entrar.
                    <div style="text-align:center"><img src="./imagenes/ingrediente/cervezaberna.png"/></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','193.39370465452077,482.24682476922544')" class="guia">Cómo conseguirla</button></div> 
                    `],  
                    ["Necesitas <b class='sabiduria'>350 de Sabiduría</b> para recoger la Mokoko."],  
                ],   
                "comercianteitinerante": [[196.5,411.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow' style='margin-left:-52px'>Evan</span><div>"]],
                "comercianteitinerantehorario":[["12:30, 3:30, 4:30, 6:30, 7:30, 10:30 (AM y PM)"]], 
                "afinidad": [[457.4980874276963,260.56884886724276],[610.5867055545839,441.58818485099897],[594.25,554]],
                "afinidadnombre": [["gillock"],["neria6"],["cindy"]],
                "monstruos": [
                    [257,875],
                    [183.5,168.5],
                    [39,587.5],
                    [306.5,332.5],
                    [341.5,243],
                    [388,263],
                    [381.5,407],
                    [381,322]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow' style='margin-left:-52px'>Nº 6</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"], 
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],  
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],  
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Berna del Sur</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],              
                    
                ],   
                "historiaoculta":[
                    [397.39401102683973,729.7341981845171],
                    [644.75,509.75],

                    [-67.25,453], 
                    [383.5,788.25],
                    [293.75,493],
                    [-121.5,482.75],

                    [653.75,459],
                    [227.75,752],

                    [-64,406.25], 
                    [121,217.75],
                    [316,379.25],
                    [320.75,110.5],
                    
                    [567.5,393.75],
                    [553.75,524.75],
                    
                    [8.25,620.25],
                    [191.5,663.5],
                    [231.75,591.75]
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Haz una señal si tienes problemas [4/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Haz una señal si tienes problemas [1/4]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Mary la solitaria [1/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Mary la solitaria [2/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Mary la solitaria [3/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Mary la solitaria [4/4]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Promesa sentida [1/2]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Promesa sentida [2/2]</span>"],
                    
                    ["<span class='historiaocultatit text-shadow'>Deseo oscuro [1/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Deseo oscuro [2/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Deseo oscuro [3/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Deseo oscuro [4/4]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Lo que es la magia [1/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Lo que es la magia [3/3]</span>"],
                    
                    ["<span class='historiaocultatit text-shadow'>Superviviente [1/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Superviviente [2/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Superviviente [3/3]</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','645,511')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','223.44574285494903,811.7585848021566')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','333.75440072005046,138.59292911256333')" class="guia">Tercera parte</button></div>  
                    </div>`],
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 1 de Berna del Sur</h3> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','223.44574285494903,811.7585848021566')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','333.75440072005046,138.59292911256333')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','397.747564417433,730.0877515751104')" class="guia">Cuarta parte</button></div>   
                    </div>`],  

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Berna del Sur</h3> 
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','383.9589821842953,789.8382745853735')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','295.5,493')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-121.62236636408616,484.36814511278504')" class="guia">Cuarta parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-64.34671708797582,455.3767670841366')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','295.5,493')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-121.62236636408616,484.36814511278504')" class="guia">Cuarta parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-64.34671708797582,455.3767670841366')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','383.9589821842953,789.8382745853735')" class="guia">Segunda parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-121.62236636408616,484.36814511278504')" class="guia">Cuarta parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 2 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-64.34671708797582,455.3767670841366')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','383.9589821842953,789.8382745853735')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','295.5,493')" class="guia">Tercera parte</button></div>    
                    </div>`],  

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Berna del Sur</h3> 
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','228.39549032325485,753.068721963673')" class="guia">Segunda parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 3 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','654.780879378743,460.3265145524424')" class="guia">Primera parte</button></div>    
                    </div>`],  

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','118.79393923933998,218.49599538664316')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','317.49094475275984,379.716341497176')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','321.02647865869255,111.7228714274745')" class="guia">Cuarta parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-66.46803743153546,406.5863991822648')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','317.49094475275984,379.716341497176')" class="guia">Tercera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','321.02647865869255,111.7228714274745')" class="guia">Cuarta parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-66.46803743153546,406.5863991822648')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','118.79393923933998,218.49599538664316')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','321.02647865869255,111.7228714274745')" class="guia">Cuarta parte</button></div>   
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 4 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','-66.46803743153546,406.5863991822648')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','118.79393923933998,218.49599538664316')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','317.49094475275984,379.716341497176')" class="guia">Tercera parte</button></div>  
                    </div>`],  

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Berna del Sur</h3> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','209.30360723121805,345.7752160002217')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','554,525.25')" class="guia">Tercera parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 5 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','567.5,394.25')" class="guia">Primera parte</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','209.30360723121805,345.7752160002217')" class="guia">Segunda parte</button></div> 
                    <div style="text-align:center"><img width="400px" src="./imagenes/secretos/loqueeslamagia.jpg"/></div>  
                    </div>`],  

                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Berna del Sur</h3>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','191.62593770155436,665.3874810965411')" class="guia">Segunda parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','231.93102422918759,592.5554826343268')" class="guia">Tercera parte</button></div>  
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','7.7781745930520225,621.5468606629752')" class="guia">Primera parte</button></div>    
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','231.93102422918759,592.5554826343268')" class="guia">Tercera parte</button></div> 
                    </div>`], 
                    [`<div style='padding: 0 10px 10px 10px; text-align: center;'><h3 class='aventurero'>Historia oculta nº 6 de Berna del Sur</h3>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','7.7781745930520225,621.5468606629752')" class="guia">Primera parte</button></div>  
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','191.62593770155436,665.3874810965411')" class="guia">Segunda parte</button></div>   
                    </div>`], 
                ],
                "ingrediente":[
                    [83.25,627.75],
                    [258.5,246],
                    [216,557],
                    [341.25,858.5],  
                    [594.25,390.75]
                ],
                "ingredientevendedor": [
                    ["Cangrejos"],
                    ["Cangrejos"],
                    ["Ingrediente"],
                    ["Receta de Cerveza"], 
                    ["Receta de Cerveza"], 
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 [Paso 2]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 5 [Paso 2]</span></div>"],  

                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 4 [1/2]</span></div>"],   
  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 [3/6]</span></div>"],  
                    ["<div><span class='descripcioneslabel text-shadow ingrediente'>Nº 2 [2/6]</span></div>"],    
                    
                ],
                "descripcioningrediente": [ 
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><b class="rojo-texto">Antes de hacer clic en los enlaces leete todo el proceso.</b></div>
                    Compra 
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozblanco.png"/>x5 Arroz Blanco</b>,
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozrojo.png"/>x1 Arroz Rojo</b> y
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozrojo.png"/>x2 Arroz naranja</b> al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-106,540')" class="guia">Vendedor</button></div>
                    Dirígete con los arroces a
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','80.61017305526642,627.9108216936542')" class="guia">Kandaria</button></div>
                    Utiliza todos los arroces en la localización anterior para recibir 3 beneficios, pasados unos segundos los beneficios cambiarán y una luz aparecerá sobre tu cabeza. Podrás recoger los Cangrejos que están en el enlace anterior.
                    
                    <div class="guiadiv">Cuando tengas las
                    <b class="epico-texto"><img class="imgitem epico" src="./imagenes/ingrediente/gambas.png"/>Cangrejos</b> llévaselos al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/gambas.png"/> 
                    </div>`],
                    [`<div style='text-align:center'>
                    <iv class="guiadiv"><b class="rojo-texto">Antes de hacer clic en los enlaces leete todo el proceso.</b></div>
                    Compra 
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozblanco.png"/>x5 Arroz Blanco</b>,
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozrojo.png"/>x1 Arroz Rojo</b> y
                    <b class="comun-texto"><img class="imgitem" src="./imagenes/ingrediente/arrozrojo.png"/>x2 Arroz naranja</b> al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-106,540')" class="guia">Vendedor</button></div>
                    Dirígete con los arroces a
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','80.61017305526642,627.9108216936542')" class="guia">Kandaria</button></div>
                    Utiliza todos los arroces en la localización anterior para recibir 3 beneficios, pasados unos segundos los beneficios cambiarán y una luz aparecerá sobre tu cabeza. Podrás recoger los Cangrejos que están en el enlace anterior.
                    
                    <div class="guiadiv">Cuando tengas las
                    <b class="epico-texto"><img class="imgitem epico" src="./imagenes/ingrediente/gambas.png"/>Cangrejos</b> llévaselos al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div> 
                    <img src="./imagenes/ingrediente/gambas.png"/>
                    </div>`],

                    [`<div style='text-align:center'>Para entrar por la <b class="amarillo-texto">estrella del mapa</b>
                    necesitarás <b class="amabilidad">350 de amabilidad</b>.
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','67.5,483')" class="guia">Segundo ingrediente</button></div>
                    Una vez las consigas los dos ingredientes llévaselos al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <img src="./imagenes/ingrediente/saco2.png"/>
                    </div>`],

                    [`<div style='text-align:center'>
                    Cuando tengas todas las partes llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-382.5447686219222,340.8254685319159')" class="guia">Primer y cuarto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','593.2625894155134,390.3229432149742')" class="guia">Segundo ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','41.5,245')" class="guia">Quinto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','193,483')" class="guia">Sexto ingrediente</button></div>
                    <img src="./imagenes/ingrediente/recetaazul.png"/> 
                    </div>`],
                    [`<div style='text-align:center'> 
                    Cuando tengas todas las partes llévaselas al
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-83.25,518.75')" class="guia">Cocinero de Berna del Sur</button></div>    
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','-382.5447686219222,340.8254685319159')" class="guia">Primer y cuarto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','341.5325753131024,859.1347391416551')" class="guia">Tercer ingrediente</button></div> 
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','41.5,245')" class="guia">Quinto ingrediente</button></div>
                    <div class="guiadiv"><button onclick="panto('vestigiosdebellion','193,483')" class="guia">Sexto ingrediente</button></div>
                    <img src="./imagenes/ingrediente/recetaazul.png"/> 
                    </div>`],
                ],  
                "jefesdezona": [[286.25,140.25]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Alas de Trueno</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/alasdetrueno.png'/></div>"]],
                "quest":[[486,496.75],[310.5,306.5]],   
                "questtit": [["Personas desaparecidas"],["Duende Perdido"]],
                "questdesc": [["Misión necesaria para la Otra Historia de Berna del sur."],["Misión necesaria para la Otra Historia de Berna del sur."]], 
                "historiaadicional":[[449.5,252],[567.75,315.75]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow'>Imparable [5/6]</span>"],
                    ["<span class='historiaadicionaltit text-shadow'>Imparable [4/6]</span>"],
                    
                ],
                "historiaadicionaldescripcion":[
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><button onclick="panto('aldearania','160.51323932934628,412.2432534317572')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Tercera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','567.8067452927976,315.3696244092002')" class="guia">Cuarta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Sexta parte</button></div>
                    Misiones necesarias para desbloquear la <b class="historiaadicionaltit">Otra Historia</b> de Berna del sur.
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','486,496.75')" class="guia">Personas desaparecidas</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','310.5,306.5')" class="guia">Duende Perdido</button></div> 
                    </div>`],
                    [`<div style='text-align:center'>
                    <div class="guiadiv"><button onclick="panto('aldearania','160.51323932934628,412.2432534317572')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Tercera parte</button></div>        
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','449.01280605345767,251.7300141024109')" class="guia">Quinta parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('aldearania','-30.75914498161482,328.80465325174464')" class="guia">Sexta parte</button></div>
                    Misiones necesarias para desbloquear la <b class="historiaadicionaltit">Otra Historia</b> de Berna del sur.
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','486,496.75')" class="guia">Personas desaparecidas</button></div>
                    <div class="guiadiv"><button onclick="panto('territoriodecandaria','310.5,306.5')" class="guia">Duende Perdido</button></div> 
                    </div>`],
                ],
            }, 
            "geometry": { "type": "Point", "coordinates": [113.375,-124.625] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rowen",
                "title": "ríocolmillo",
                "img": "ríocolmillo",
                "nombre": "Río Colmillo",  
                "portal2":[[668.9230150024739,386.08030252785494],["Tierras del lobo acechador"],["center"]],  
                "cancion": [[313.75,911.75]],
                "cancionicono": [["canciondeloslobos"]],
                "cancionnombre": [["Canción de los Lobos"]],
                "canciondesc": [
                    ["Utiliza la <b>Canción de los lobos</b> desvelar la Mokoko oculta tras el tronco con cristales de Sylmael."],
                ], 
                "mokokos": [
                    [473.5,671],
                    [306.25,913.5],
                    [31.81980515339464,849.588797595637],
                    [-109.24799769332161,578.0597936200027],
                    [315.5,510.25],
                    [149.75,443.75],
                    [309.5,154],
                    [448,158],
                    [399.1617779798061,462.09428150540884],
                    [638,540.25],
                ],
                "vista":[
                    [6.5,819.5],
                    [629.6785886466206,706.0461210147678],
                    [223.5,502],
                    [201.25,275.5]
                ],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 1<span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 2<span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 3<span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 4<span></div>"], 
                ], 
                "pasillosecreto" :[
                    [142.25,444.5],
                    [303.25,524.25],
                    [436.5,144.5],
                    [26,838.75],
                    [-80.25,601]
                ],
                "pasillosecretodesc" :[
                    [`
                    Compra la <b class="comun-texto">Leche de Reno</b> en el vendedor, espera 1 hora hasta que se convierta en <b class="raro-texto">Té de Reno</b>, 
                    úsalo y recoge la Mokoko.
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-8.5,661.5')" class="guia">Vendedor</button></div>
                    <div class="guiadiv"><img src="./imagenes/ingrediente/lechedereno.png"/></div>`], 
                    [`
                    Necesitarás <b class="carisma">350 de carisma</b> para atravesar la cascada y recoger la mokoko.`],   
                    [`
                    Compra la <b class="comun-texto">Leche de Reno</b> en el vendedor, espera 1 hora hasta que se convierta en <b class="raro-texto">Té de Reno</b>, 
                    úsalo y recoge la Mokoko.
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-8.5,661.5')" class="guia">Vendedor</button></div>
                    <div class="guiadiv"><img src="./imagenes/ingrediente/lechedereno.png"/></div>`], 
                    [`
                    Entra en la caseta que está junto a la ardilla para recoger la Mokoko y el ingrediente de cocina.
                    <div class="guiadiv"><img style="width: 250px"src="./imagenes/secretos/casamokokorowen1.png"/></div>`], 
                    [`
                    Para desbloquear la afinidad de <b class="afinidad">Sylus</b> tienes que completar 5 veces el encargo de Una
                    <b class="verde-texto">Lo que quedó atrás</b> para desbloquear el encargo de 
                    <b class="verde-texto">El Viento te saluda</b>. Complétalo 1 vez para desbloquear la afinidad.`],            
                ],
                "vendedor": [[-8.5,661.5]],  
                "vendedordesc": [
                    [`Vendedor de ingredientes de cocina.
                    <div class="guiadiv"><img style="width: 350px" src="./imagenes/extraimg/ingredientesvendedorrowen1.png"/></div>
                    `]
                ], 
                "monstruos": [[215,913],[280.72139213105936,859.1347391416551],[400.92954493277244,734.6839456528228],[307.59144981614816,634.9818895055197],[444.0630585851518,482.95393155041194],[98.2878425849301,371.23106012293744]],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 2</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 3</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 5</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 6</span></div>"],  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 1 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 2 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 3 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 4 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],       
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 5 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],      
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 6 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],       
                    
                ],  
                "historiaoculta":[
                    [-104.75,559.75],

                    [-130.5,687],
                    [-13,711],
                    [-92.5,698.5],

                    [118.5,664],
                    [93.5,679.75],
                    [73.75,665.75],

                    [162,644],
                    [135.76450198781714,640.2851903644189],
                    [149.55308422095482,656.5486463317094],
                    [143.89622997146245,631.446355599587],

                    [460.32651455244246,832.971788237753],
                    [580,431.5], 

                    [-183.4942097179091,619.0719869288224],
                    [-66.1144840409422,586.191521603648],
                    [-11.313708498984761,557.5536969655927],
                    [-38.537319574666846,549.4219689819474]
                ],
                "historiaocultatitulo":[
                    ["<span class='historiaocultatit text-shadow'>Un mar de joyas [1/3]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Despiadado [1/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Despiadado [2/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Despiadado [3/3]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Informe de investigación de Sylmael [1/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Informe de investigación de Sylmael [2/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Informe de investigación de Sylmael [3/3]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Cómo formar a un caballero fiel [1/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Cómo formar a un caballero fiel [2/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Cómo formar a un caballero fiel [3/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Cómo formar a un caballero fiel [4/4]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Milicia de la oscuridad [1/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Milicia de la oscuridad [2/4]</span>"], 
                    
                    ["<span class='historiaocultatit text-shadow'>Receta de Rowen [1/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Receta de Rowen [2/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Receta de Rowen [3/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Receta de Rowen [4/4]</span>"],
                ],
                "historiaodcultadescripcion":[
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº1 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','56,281.75')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','423,414.75')" class="guia">Tercera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','265,172')" class="guia">Cuarta parte</button></div>     
                    </div>`],

                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº2 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-13,711')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-92.5,698.5')" class="guia">Tercera parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº2 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-130.5,687')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-92.5,698.5')" class="guia">Tercera parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº2 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-130.5,687')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-13,711')" class="guia">Segunda parte</button></div>     
                    </div>`],

                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº3 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','93.5,679.75')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','73.75,665.75')" class="guia">Tercera parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº3 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','118.5,664')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','73.75,665.75')" class="guia">Tercera parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº3 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','118.5,664')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','93.5,679.75')" class="guia">Segunda parte</button></div>     
                    </div>`],

                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº4 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','135.76450198781714,640.2851903644189')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','149.55308422095482,656.5486463317094')" class="guia">Tercera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','143.89622997146245,631.446355599587')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº4 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','162,644')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','149.55308422095482,656.5486463317094')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','143.89622997146245,631.446355599587')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº4 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','162,644')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','135.76450198781714,640.2851903644189')" class="guia">Segunda parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','143.89622997146245,631.446355599587')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº4 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','162,644')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','135.76450198781714,640.2851903644189')" class="guia">Segunda parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','149.55308422095482,656.5486463317094')" class="guia">Tercera parte</button></div>      
                    </div>`], 

                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº5 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','580,431.5')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','193.747258045114,362.0386719675123')" class="guia">Tercera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','143.89622997146245,631.446355599587')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº5 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','460.32651455244246,832.971788237753')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','193.747258045114,362.0386719675123')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','642.4065107079784,754.8364889166395')" class="guia">Cuarta parte</button></div>     
                    </div>`], 

                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº7 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-66.1144840409422,586.191521603648')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-11.313708498984761,557.5536969655927')" class="guia">Tercera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-38.537319574666846,549.4219689819474')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº7 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-183.4942097179091,619.0719869288224')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-11.313708498984761,557.5536969655927')" class="guia">Tercera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-38.537319574666846,549.4219689819474')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº7 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-183.4942097179091,619.0719869288224')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-66.1144840409422,586.191521603648')" class="guia">Segunda parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-38.537319574666846,549.4219689819474')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº7 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-183.4942097179091,619.0719869288224')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-66.1144840409422,586.191521603648')" class="guia">Segunda parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-11.313708498984761,557.5536969655927')" class="guia">Tercera parte</button></div>      
                    </div>`], 
                ],  
                "historiaadicional":[[152,647.75],[28.284271247461902,775.3425855710494]],
                "historiaadicionaltitulo":[
                    ["<span class='historiaadicionaltit text-shadow' style='margin-left:-165px'>Buscador de la verdad</span>"], 
                    ["<span class='historiaadicionaltit text-shadow'>La fantasía del sueño de Rowen</span>"], 
                ],
                "historiaadicionaldescripcion":[
                    [`<div class="guiadiv" style='text-align:center'><h3 class='aventurero'>Otra Historia nº2 de Rowen</h3>
                    Completa los siguientes pasos para desbloquear la misión:
                    <ol>
                    <li>Desbloquea y escoge una facción.</li>
                    <li>Completa la misión <b class="questamarilla">Encrucijada</b></li>
                    <li>Completa 2 veces el encargo de una <b class="verde"><img class='imgitem' src='./imagenes/objetos/una.png' />Organizar los datos del Sylmael</b></li>
                    </ol>    
                    </div>`], 
                    
                    [`<div style='text-align:center' class="guiadiv"><h3 class='aventurero'>Otra Historia nº1 de Rowen</h3>
                    Completa la historia principal hasta que la Arqueologista Ende te ofrezca una <b class="questamarilla">misión normal</b> en este punto. Completa la misión hasta
                    hablar con Nathan, que te desbloqueará el resto de misiones. 
                    <div class="guiadiv"><img style="width: 250px" src="./imagenes/secretos/otrahistoriarowen1.png"/></div>  
                    </div>`], 
                ],
                "ingrediente":[[24.5,855],[-138.75,715.5],[-39.59797974644666,535.986940139403]],
                "ingredientevendedor": [["Guiso de Reno"],["Arenque Fermentado"],["Arenque Fermentado"]],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 1</span></div>"],
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 6 - [1/2]</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin:-90px'>Nº 6 - [2/2]</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Añade el plato al Tomo del Aventurero.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/guisodereno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],  
                    [`<div>Pesca <b class="comun-texto">x20 Arenques</b> en este punto pulsando la "G".</br>
                    Una vez los consigas, dírigete al vendedor y compra el <b class="comun-texto">Barril de madera cilíndrico</b>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-8.5,661.5')" class="guia">Vendedor</button></div>
                    Habla con el cocinero que está enfrente para juntar los ingredientes.
                    Finalmente ve al punto 2 para intentar fermentar los arenques.
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-41.25,535.5')" class="guia">Punto 2</button></div>
                    Si recibes el objeto épico, solo tendrás que esperar 8h para aprender el plato del Tomo del Aventurero.
                    Si no lo recibes, repite el proceso.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/arenquefermentado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                    [`<div>Lee el paso 1 
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-138.75,715.5')" class="guia">Paso 1</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/arenquefermentado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                ],
                "cocinero": [[-8.75,645]],
                "cocineronombre":["Cocinero"],
                "cocinerorecetas": [`
                <div style='text-align:center; width: 350px'> 
                 <img style='width: 350px' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/>
                </div>`],
                "comercianteitinerante": [[615.75,528.25]],
                "comercianteitinerantenombre": [["<div><span class='descripcioneslabel comerciante text-shadow'>Serihan</span><div>"]],
                "comercianteitinerantehorario":[["Horario sin confirmar"]],
                "afinidad": [[-77.75,595],[28.284271247461902,591.8483758531403],[-119.14749262993327,721.2489168102785],[-56.214989104330535,794.4344686630862]],
                "afinidadnombre": [["sylus"],["piela"],["zenrod"],["anke"]],
            }, 
            "geometry": { "type": "Point", "coordinates": [104.125,-62.75] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rowen",
                "title": "tierrasdelloboacechador",
                "img": "tierrasdelloboacechador",
                "nombre": "Tierras del Lobo Acechador",  
                "portal2":[[-64,320],["Río Colmillo"],["center"]], 
                "portal1":[[467,284],["Gran llanura de Regarbank"],["center"]],  
                "cancion": [[-95,168.5],[-34.75,53.5]],
                "cancionicono": [["canciondeloslobos"],["canciondeloslobos"]],
                "cancionnombre": [["Canción de los Lobos"],["Canción de los Lobos"]],
                "canciondesc": [
                    ["Utiliza la <b>Canción de los lobos</b> desvelar la Mokoko oculta tras el tronco con cristales de Sylmael."],
                    ["Utiliza la <b>Canción de los lobos</b> desvelar la Mokoko oculta tras el tronco con cristales de Sylmael."],
                ], 
                "historiaoculta":[
                    [193.747258045114,362.0386719675123],
                    [642.4065107079784,754.8364889166395], 

                    [56,281.75],
                    [423,414.75],
                    [265,172],
                    
                    [509.75,866.5],
                    [-55.75,90.5],
                    [625.5,608.25],
                ],
                "historiaocultatitulo":[  
                    ["<span class='historiaocultatit text-shadow'>Milicia de la oscuridad [3/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Milicia de la oscuridad [4/4]</span>"],

                    ["<span class='historiaocultatit text-shadow'>Un mar de joyas [2/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Un mar de joyas [3/4]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Un mar de joyas [4/4]</span>"],
                    
                    ["<span class='historiaocultatit text-shadow'>Informe de exploración antiguo [1/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Informe de exploración antiguo [2/3]</span>"],
                    ["<span class='historiaocultatit text-shadow'>Informe de exploración antiguo [3/3]</span>"], 
                    
                ],
                "historiaodcultadescripcion":[  
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº5 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','460.5,833.25')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','580,431.5')" class="guia">Segunda parte</button></div>       
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','642.4065107079784,754.8364889166395')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº5 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','460.5,833.25')" class="guia">Primera parte</button></div> 
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','580,431.5')" class="guia">Segunda parte</button></div>       
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','193.747258045114,362.0386719675123')" class="guia">Tercera parte</button></div>     
                    </div>`],

                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº1 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','-105.00535700620232,560.382124090339')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','423,414.75')" class="guia">Tercera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','265,172')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº1 de Rowen</h3> 
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','-105.00535700620232,560.382124090339')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','56,281.75')" class="guia">Segunda parte</button></div>    
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','265,172')" class="guia">Cuarta parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº1 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','-105.00535700620232,560.382124090339')" class="guia">Primera parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','56,281.75')" class="guia">Segunda parte</button></div>     
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','423,414.75')" class="guia">Tercera parte</button></div>   
                    </div>`],

                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº6 de Rowen</h3>    
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','-55.75,90.5')" class="guia">Segunda parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','625.5,608.25')" class="guia">Tercera parte</button></div>     
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº6 de Rowen</h3> 
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','509.75,866.5')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','625.5,608.25')" class="guia">Tercera parte</button></div>      
                    </div>`],
                    [`<div style='text-align:center'><h3 class='aventurero'>Historia oculta nº6 de Rowen</h3>
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','509.75,866.5')" class="guia">Primera parte</button></div>   
                    <div class="guiadiv"><button onclick="panto('tierrasdelloboacechador','-55.75,90.5')" class="guia">Segunda parte</button></div>    
                    </div>`], 
                ],  
                "monstruos": [
                    [111.01576464628795,246.78026663410506],
                    [-65.05382386916237,94.75230867899737],
                    [191.6259377015544,264.4579361637688],
                    [364.5135457016653,527.5016587651645],
                    [399.5153313703994,735.7446058246028],
                    [418.2536610718429,908.6322138247136]
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 7</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 8</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 9</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 10</span></div>"], 
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 11</span></div>"],  
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 12</span></div>"],  
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 7 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 8 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],     
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 9 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],                   
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 10 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],       
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 11 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],      
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 12 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],       
                    
                ],  
                "mokokos": [
                    [-113.75,203.75],
                    [-95.5,162.75],
                    [-37.25,59.25],
                    [461.3871747242223,480.12550442566584],
                    [467.7511357549012,473.4079900043936],
                    [494.2676400493968,557.2001435749995],
                    [626.5,885.75],
                ],
                "vista":[
                    [126,292],
                    [506.75,520],
                    [454,890], 
                ],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 5<span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 6<span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 7<span></div>"],  
                ], 
                "pasillosecreto" :[
                    [-107,195],
                    [454.25,475.5],
                    [492,551.25],
                    [620.25,884.25]
                ],
                "pasillosecretodesc" :[
                    [`
                    Necesitarás <b class="amabilidad">350 de Amabilidad</b> para pasar por detrás del lobo y recoger la mokoko.
                    <div class="guiadiv"><img style="width: 250px"src="./imagenes/secretos/casamokokorowen2.png"/></div>`],  
                    [`
                    Bebe el <b class="reliquia-texto">Licor de Rowen</b> en este punto para recoger la/s Mokokos.</br>
                    Para poder crear el plato necesitarás el <b class="amarillo-texto">Rango 7</b> con tu facción y <b class="epico-texto">13.000 Cristales de Sylmael</b>.
                    Puedes comprar la receta en cualquiera de los vendedores de cada facción, se encuentran las áreas coloreadas del mapa de <b>Gran Llanura de Regarbank</b>
                    <div class="guiadiv"><img src="./imagenes/ingrediente/licorderowen.png"/></div>`], 
                    [`
                    Bebe el <b class="reliquia-texto">Licor de Rowen</b> en este punto para recoger la/s Mokokos.</br>
                    Para poder crear el plato necesitarás el <b class="amarillo-texto">Rango 7</b> con tu facción y <b class="epico-texto">13.000 Cristales de Sylmael</b>.
                    Puedes comprar la receta en cualquiera de los vendedores de cada facción, se encuentran las áreas coloreadas del mapa de <b>Gran Llanura de Regarbank</b>
                    <div class="guiadiv"><img src="./imagenes/ingrediente/licorderowen.png"/></div>`], 
                    [`
                    Necesitarás <b class="valentia">350 de Valentía</b> para atravesar la cascada y recoger la mokoko.`],        
                ],
                "ingrediente":[
                    [241,237.5],

                    [43.5,355],
                    [56.75,366],
                    [86,349],
                    [96,366.5],
                    [102.5,366.5],
                    [146.25,357.75],
                    [172.25,354.25],
                    [175,346.75],
                    [152,288],
                    [138.25,281],
                    [70.5,270.5],
                    [28.5,261],
                    
                    [166.5,393.5],
                    [96.873629022557,173.24116139070412],
                    [164.75588001646557,129.4005409571382],
                    [338.7041481883562,372.64527368531054],
                    [301,616.5]
                ],
                "ingredientevendedor": [
                    ["Schertstenbalt"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Combinación de lácteos de reno"],
                    ["Conejo Salvaje Asado"]
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 2</span></div>"],

                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 3</span></div>"],

                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow'>Nº 4</span></div>"], 
                ],
                "descripcioningrediente": [ 
                    [`<div>Mata jabalís por esta zona hasta conseguir <b class="comun-texto">100 Carnes de Jabalí</b>.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/carnejabali.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 

                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Recoge <b class="comun-texto">Haz de Centeno</b> hasta conseguir 300 unidades y poder crear el 
                    <b class="raro-texto">Pan de centeno</b>. en el
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    </br> Compra 5 <b class="comun-texto">Leche de reno</b> al vendedor que está al lado del cocinero para crear <b class="raro-texto">Yogur de leche de reno</b>.
                    </br> Finalmente vuelve al cocinero y crea el plato <b class="epico-texto">Combinación de lácteos de reno</b>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/hazdecenteno.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],

                    [`<div>Sigue los siguientes pasos y <b>recuerda no moverte hasta llegar al paso 5</b>.
                    <ol style="text-align:left">
                    <li>Baja de la montura antes de llegar a este punto y acércate a pie.</li>
                    <li>Quédate quieto hasta que aparezca un perjuicio encima de tu barra de maná.</li>
                    <li>Una vez finalice tu perjuicio aparecerá un beneficio encima de tu barra de salud.</li>
                    <li>Cambia la barra de acción al de las habilidades de oficio y espera a que el beneficio se vaya.</li>
                    <li>Caza el conejo y con suerte recibirás un <b class="comun-texto">Conejo salvaje capturado</b>, necesitarás para preparar el plato en el cocinero.</li>
                    </ol>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/conejosalvajecapturado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                    [`<div>Sigue los siguientes pasos y <b>recuerda no moverte hasta llegar al paso 5</b>.
                    <ol style="text-align:left">
                    <li>Baja de la montura antes de llegar a este punto y acércate a pie.</li>
                    <li>Quédate quieto hasta que aparezca un perjuicio encima de tu barra de maná.</li>
                    <li>Una vez finalice tu perjuicio aparecerá un beneficio encima de tu barra de salud.</li>
                    <li>Cambia la barra de acción al de las habilidades de oficio y espera a que el beneficio se vaya.</li>
                    <li>Caza el conejo y con suerte recibirás un <b class="comun-texto">Conejo salvaje capturado</b>, necesitarás para preparar el plato en el cocinero.</li>
                    </ol>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/conejosalvajecapturado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                    [`<div>Sigue los siguientes pasos y <b>recuerda no moverte hasta llegar al paso 5</b>.
                    <ol style="text-align:left">
                    <li>Baja de la montura antes de llegar a este punto y acércate a pie.</li>
                    <li>Quédate quieto hasta que aparezca un perjuicio encima de tu barra de maná.</li>
                    <li>Una vez finalice tu perjuicio aparecerá un beneficio encima de tu barra de salud.</li>
                    <li>Cambia la barra de acción al de las habilidades de oficio y espera a que el beneficio se vaya.</li>
                    <li>Caza el conejo y con suerte recibirás un <b class="comun-texto">Conejo salvaje capturado</b>, necesitarás para preparar el plato en el cocinero.</li>
                    </ol>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/conejosalvajecapturado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                    [`<div>Sigue los siguientes pasos y <b>recuerda no moverte hasta llegar al paso 5</b>.
                    <ol style="text-align:left">
                    <li>Baja de la montura antes de llegar a este punto y acércate a pie.</li>
                    <li>Quédate quieto hasta que aparezca un perjuicio encima de tu barra de maná.</li>
                    <li>Una vez finalice tu perjuicio aparecerá un beneficio encima de tu barra de salud.</li>
                    <li>Cambia la barra de acción al de las habilidades de oficio y espera a que el beneficio se vaya.</li>
                    <li>Caza el conejo y con suerte recibirás un <b class="comun-texto">Conejo salvaje capturado</b>, necesitarás para preparar el plato en el cocinero.</li>
                    </ol>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/conejosalvajecapturado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                    [`<div>Sigue los siguientes pasos y <b>recuerda no moverte hasta llegar al paso 5</b>.
                    <ol style="text-align:left">
                    <li>Baja de la montura antes de llegar a este punto y acércate a pie.</li>
                    <li>Quédate quieto hasta que aparezca un perjuicio encima de tu barra de maná.</li>
                    <li>Una vez finalice tu perjuicio aparecerá un beneficio encima de tu barra de salud.</li>
                    <li>Cambia la barra de acción al de las habilidades de oficio y espera a que el beneficio se vaya.</li>
                    <li>Caza el conejo y con suerte recibirás un <b class="comun-texto">Conejo salvaje capturado</b>, necesitarás para preparar el plato en el cocinero.</li>
                    </ol>
                    <div class="guiadiv"><button onclick="panto('ríocolmillo','-9.25,644.75')" class="guia">Cocinero</button></div>
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/conejosalvajecapturado.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                ],
                "misionsecreta":[[608.1118318204309,572.4029393705102]],
                "misionsecretatit":[["Regalo sorpresa en el campo de nabos"]],
                "misionsecretadesc":[
                    [`
                    Es necesario completar la misión principal <b>El destino de los Taiyer</b>.
                    <p>
                    Interactúa con el suelo en este punto para iniciar la misión, verás unos "brillitos" en el suelo.</p>
                    Completa la misión y pulsa "ESC" para abrir el menú del juego, abre la reserva universal, reclama el cofre y elige una de las máscaras de lobo:
                    <div style="text-align:center"><img width="300px" src="./imagenes/secretos/mascaras.png"/></div>
                    `]
                ],
            }, 
            "geometry": { "type": "Point", "coordinates": [107.5,-54.09375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Rowen",
                "title": "granllanuraderegarbank",
                "img": "granllanuraderegarbank",
                "nombre": "Gran Llanura de Regarbank",  
                "portal2":[[-80,804],["Tierras del Lobo Acechador"],["center"]], 
                "mokokos": [
                    [-193.74725804511405,389.26228304319443], 
                    [145,588.75],
                    [354.25,629.25],
                    [696.75,681.75],
                    [373.5,445.5],
                    [259.5,149.5],
                    [178.75,90.75],
                    [282.25,514]
                ],
                "cancion": [[142,581.25],[347.25,629.25]],
                "cancionicono": [["canciondeloslobos"],["canciondeloslobos"]],
                "cancionnombre": [["Canción de los Lobos"],["Canción de los Lobos"]],
                "canciondesc": [
                    ["Utiliza la <b>Canción de los lobos</b> desvelar la Mokoko oculta tras el tronco con cristales de Sylmael."],
                    ["Utiliza la <b>Canción de los lobos</b> desvelar la Mokoko oculta tras el tronco con cristales de Sylmael."],
                ],  
                "vista":[
                    [136.82516215959697,645.2349378327247],
                    [356.5,622.75], 
                ],
                "vistadescripcion": [
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 8<span></div>"], 
                    ["<div><span class='descripcioneslabel text-shadow vistas'>Nº 9<span></div>"],  
                ],  
                "jefesdezona": [[-151,422],[704,598]],
                "jefesdezonanombre": [["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Hermut</span>"],["<span class='jefesdezona text-shadow'><div><span class='descripcioneslabel'>Hermut</span>"]],
                "jefesdezonaimagen": [["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/hermut.png'/></div>"],["<div style='text-align:center; ver'><img class='monstruos-img' src='./imagenes/jefesdezona/hermut.png'/></div>"]],
                "monstruos": [
                    [115.25840533340724,145.66399692442877],
                    [304.0559159102154,924.1885630108176],
                    [159,661.5], 
                ],
                "monstruosdescripcion": [
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 13</span></div>"],
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 14</span></div>"],   
                    ["<div><span class='descripcioneslabel monstruos text-shadow'>Nº 15</span></div>"],    
                ],
                "monstruosimagen": [
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 13 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],       
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 14 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],      
                    ["<div style='text-align:center; ver'><h3 class='aventurero'>Monstruo nº 15 de Rowen</h3><img class='monstruos-img' src='https://www.thelordoftheguides.com/lost-ark/wp-content/uploads/sites/5/2022/01/guiaconstruccion.png'/></div>"],       
                    
                ], 
                "ingrediente":[
                    [578.4133470105959,694.3788591251896],
                    [601.4133470105959,694.3788591251896],

                    [-13.788582233137678,352.49273042149395],
                    [3.788582233137678,352.49273042149395]
                ],
                "ingredientevendedor": [
                    ["Schertstenbalt"],
                    ["Licor de Rowen"],

                    ["Schertstenbalt"],
                    ["Licor de Rowen"]
                ],
                "ingredientetooltip": [
                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left:-60px'>Nº 5</span></div>"], 
                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left:-60px'>Nº 7</span></div>"],

                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left:-60px'>Nº 5</span></div>"],
                    ["<div><span class='descripcioneslabel ingrediente text-shadow' style='margin-left:-60px'>Nº 7</span></div>"],
                ],
                "descripcioningrediente": [ 
                    [`<div>Necesitas <b class="epico-texto">5000 Cristales de Sylmael</b> y <b class="amarillo-texto">Rango 3</b> con tu facción para complar el plato al vendedor.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/schertstenbalt.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `],
                    [`<div>Necesitas <b class="epico-texto">13000 Cristales de Sylmael</b> y <b class="amarillo-texto">Rango 7</b> con tu facción para complar el plato al vendedor.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/licorderowen.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                    
                    [`<div>Necesitas <b class="epico-texto">5000 Cristales de Sylmael</b> y <b class="amarillo-texto">Rango 3</b> con tu facción para complar el plato al vendedor. 
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/schertstenbalt.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                    [`<div>Necesitas <b class="epico-texto">13000 Cristales de Sylmael</b> y <b class="amarillo-texto">Rango 7</b> con tu facción para complar el plato al vendedor.
                    <ul style='text-align:center'><li><img src='./imagenes/ingrediente/licorderowen.png' /><span style='position:fixed; margin:10px 0 0 10px'></span></li></ul></div>
                    `], 
                ],
            }, 
            "geometry": { "type": "Point", "coordinates": [96.8125,-48.34375] } 
        },
        {
            "type": "Feature", 
            "properties": {
                "anterior": "arkesia", 
                "tipo": "ciudad",
                "zona": "Elgacia",
                "title": "elgacia",
                "img": "elgacia",
                "nombre": "Elgacia",   
                "subzonaciudad":[[317.5,232.5]],
                "subzonaciudadNombre":[["Ereonnor"]], 
                "subzonaciudad2":[[532,301]],
                "subzonaciudadNombre2":[["Monte Filantos"]],
                "subzonaciudad3":[[450.5,609]],
                "subzonaciudadNombre3":[["Jardín de Hestera"]]  
            },
            "geometry": { "type": "Point", "coordinates": [46.125,-66.125]} 
        }
    ]
}  

// !Cajas animados, con su musica correspondiente:
// const contenedor_de_subcajas_anim = document.querySelector('.caja-de-las-subcajas1');
const contenedor_mayor = document.querySelectorAll('.caja-de-las-subcajas1')
// ?Caja mayor de las subcajas, se usará para ver en qué caja se ha hecho click o está la selección:
const play_list = document.querySelectorAll('.sub-caja-lista .play-list');

//!botones arriba:
const boton_buscar = document.getElementById('buscar-lupa');
// ?cosas para buscar:
const caja_padre_buscar = document.querySelector('.caja-2 .caja-2-opciones-arriba .caja-padre-buscar')
const caja_buscar = document.getElementById('caja-buscar');

const input_para_buscar = document.getElementById('input_para_buscar');
const lista_ul_buscar = document.getElementById('lista-ul_buscar');

const usuario_boton = document.getElementById('usuario-boton');
const usuario_contenido = document.querySelector('.caja-2 .caja-padre-usuario')

// !Caja desplegable, osea la lista de todas las musicas, con su nombre:
const lista_musica_de_todo = document.getElementById('lista-musica-de-todo');
const caja_lista_musica = document.getElementById('caja-lista-musica')
// const boton_cerrar_caja_lista_musica = document.getElementById('cerrar-caja-lista-musica');
const contenedor_ul = document.querySelectorAll('.sub-caja-lista-musica .sub-caja-lista-musica-2');

// ?body:
const body = document.querySelector('body');

// !Etiqueta audio:
const audio_reproductor = document.getElementById('audio_reproductor');

// !Caja para cotrolar las musicas, caja 1:
const portada_principal_img = document.getElementById('portada-principal-img');
const caja_1_nombre = document.getElementById('caja-1-nombre');
const caja_1_artista = document.getElementById('caja-1-artista');

// ?Botones en la caja 1:
const boton_play_puasa = document.getElementById('boton_pausar_play');
const icono_play_pausa = document.getElementById('icono-play_puasa');

const boton_repetir = document.getElementById('boton-repetir');
const boton_repetir_icono = document.getElementById('boton-repetir-icono');
const boton_atras = document.getElementById('boton-atras');
const boton_siguiente = document.getElementById('boton-siguiente');

// ?Barra de progreso(input):
const barra_de_progreso = document.getElementById('barra-de-progreso');
const tiempo_actual = document.getElementById('tiempo-actual');
const tiempo_maximo = document.getElementById('tiempo-max');

// ?Barra volumen y boton:
const volumen_input = document.getElementById('volumen-input');
const boton_volumen = document.getElementById('boton-volumen');
const valor_del_volumen = document.getElementById('valor_del_volumen');


// ?Mostrar y ocultar caja desplegable:
lista_musica_de_todo.addEventListener('click', (e)=>{
    e.stopPropagation();
    lista_musica_de_todo.classList.add('lista-musica-de-todo-ocultar');
    // caja_lista_musica.style.transform = "translateX(0)";
    // lista_musica_de_todo.classList.add('oculatar_boton_lista')
    if (usuario_contenido.classList.contains('caja-padre-usuario-mostrar')) {
        usuario_contenido.classList.remove('caja-padre-usuario-mostrar');
    
        usuario_contenido.addEventListener('transitionend', function cerrar(){
            
            caja_lista_musica.classList.add('caja-lista-musica-mostrar');
            // if (e.propertyName == 'transform') {
            //     caja_lista_musica.classList.add('caja-lista-musica-mostrar');
            // };

            usuario_contenido.removeEventListener('transitionend', cerrar)
        });
    } else {
        caja_lista_musica.classList.add('caja-lista-musica-mostrar');
    };
});

usuario_boton.addEventListener('click', (e)=>{
    e.stopPropagation();
    usuario_boton.classList.add('usuario-boton-ocultar');

    if (caja_lista_musica.classList.contains('caja-lista-musica-mostrar')) {
        caja_lista_musica.classList.remove('caja-lista-musica-mostrar');

        caja_lista_musica.addEventListener('transitionend', function cerrar_dos(){
            usuario_contenido.classList.add('caja-padre-usuario-mostrar');
            // if (e.propertyName == 'transform') {
            //     usuario_contenido.classList.add('caja-padre-usuario-mostrar');
            // };
            caja_lista_musica.removeEventListener('transitionend', cerrar_dos);
        });
    } else{
        usuario_contenido.classList.add('caja-padre-usuario-mostrar');
    }
});

document.addEventListener('click', (e)=>{
    console.log(usuario_contenido.classList.contains('caja-padre-usuario-mostrar'));
    
    if (!usuario_contenido.contains(e.target) && usuario_contenido.classList.contains('caja-padre-usuario-mostrar')) {
        usuario_contenido.classList.remove('caja-padre-usuario-mostrar');
        usuario_boton.classList.remove('usuario-boton-ocultar');
    } else if (!caja_lista_musica.contains(e.target) && caja_lista_musica.classList.contains('caja-lista-musica-mostrar')) {
        lista_musica_de_todo.classList.remove('lista-musica-de-todo-ocultar');
        caja_lista_musica.classList.remove('caja-lista-musica-mostrar');
    };
});


// body.addEventListener('click', ()=>{
//     console.log(usuario_contenido);
//     if (lista_musica_de_todo.classList.contains('caja-lista-musica-mostrar') || usuario_contenido.classList.contains('caja-padre-usuario-mostrar')) {
//         caja_lista_musica.classList.toggle('caja-lista-musica-mostrar');
//         usuario_contenido.classList.toggle('caja-padre-usuario-mostrar');
//     }
// });
// boton_cerrar_caja_lista_musica.addEventListener('click', ()=>{
//     caja_lista_musica.classList.remove('caja-lista-musica-mostrar');
//     lista_musica_de_todo.classList.remove('oculatar_boton_lista');
// })


// !Lista de las musicas
const musicas_rock = [
    {
        nombre : 'shadow of the days',
        portada : 'img/shadow of the days.jpg',
        ruta : 'music/Shadow Of The Day.mp3',
        artista : 'Linkin park'
    },
    {
        nombre : 'Desconocido',
        portada : 'img/desconocido.jpg',
        ruta : 'music/DesconocidoMusic.mp3',
        artista : 'unknown'
    },
    {
        nombre : 'shadowborn',
        portada : 'img/shadowborn.webp',
        ruta : 'music/SHADOWBORN.mp3',
        artista : 'unknown'
    }
];

const musicas_romantic = [
    {
        nombre : 'Sharks',
        portada : 'img/paris the prince-sharks.jpg',
        ruta : 'music/Skrahs.mp3',
        artista : 'PARIS the prince'
    },
    {
        nombre : 'A donde voy',
        portada : 'img/A donde voy.jpg',
        ruta : 'music/A dónde voy - Wuicho kun & Azul de Viena.mp3',
        artista : 'Wuicho kun & Azul de Viena'
    }
];

const musicas_top = [
    {
        nombre : 'Windows',
        portada : 'img/Windows.jpg',
        ruta : 'music/M & S R-Windows.mp3',
        artista : 'Social Repose'
    }
];

const todas_las_musicas = [musicas_rock, musicas_romantic, musicas_top];


const colors = ['red', 'blue', 'green', 'yellow', 'blueviolet', 'orange']

let solo_nombres = [];

todas_las_musicas.forEach((elemento, indice)=>{
    elemento.forEach((sub_elemento, sub_indice)=>{
        solo_nombres.push(sub_elemento.nombre)
    })
})

// !Funciones para actualizar inf, play-pausa, etc:
function actualizar_inf(genero_a_reproducir_f_s, caja_musica_s){
    portada_principal_img.src = genero_a_reproducir_f_s[caja_musica_s].portada;
    caja_1_nombre.textContent = genero_a_reproducir_f_s[caja_musica_s].nombre;
    caja_1_artista.textContent = genero_a_reproducir_f_s[caja_musica_s].artista;
};

actualizar_inf(musicas_rock, 0);
audio_reproductor.src = musicas_rock[0].ruta;

// bi bi-pause-fill - bi bi-play-fill
function play_music(){
    icono_play_pausa.classList.remove('bi-play-fill');
    icono_play_pausa.classList.add('bi-pause-fill')
    audio_reproductor.play();
};

function pausar_music(){
    icono_play_pausa.classList.remove('bi-pause-fill');
    icono_play_pausa.classList.add('bi-play-fill')
    audio_reproductor.pause();
};

function play_pause(){
    if (audio_reproductor.paused) {
        play_music();
    } else{
        pausar_music();
    };
};


function forma_tiempo(segundos){
    const min = Math.floor(segundos/60);
    const seg = Math.floor(segundos%60)

    const minStr = min < 10 ? "0" + min : min;
    const segStr = seg < 10 ? "0" + seg : seg;

    return `${minStr}:${segStr}`
};


audio_reproductor.addEventListener('loadedmetadata', ()=>{
    barra_de_progreso.max = audio_reproductor.duration;
    barra_de_progreso.value = audio_reproductor.currentTime;

    tiempo_maximo.textContent = forma_tiempo(audio_reproductor.duration);
});

audio_reproductor.addEventListener('timeupdate', ()=>{
    barra_de_progreso.value = audio_reproductor.currentTime;

    //!137%60 -> 137/60 -> 60 puede entrar 2 veces, entonces 60*2=120 -> 137-120 = 17, cómo 60 puede entrar 2 veces, significa que son 2 minutos completos y resto que sobra, en este caso 17, serian los segundos = 02:17
    tiempo_actual.textContent = forma_tiempo(audio_reproductor.currentTime);
});

barra_de_progreso.addEventListener('input', ()=>{
    audio_reproductor.currentTime = barra_de_progreso.value;
});

boton_volumen.addEventListener('click', ()=>{
    volumen_input.classList.toggle('volumen-input-mostrar');
    valor_del_volumen.classList.toggle('valor_del_volumen-activ');
    
});

function volumen_a_decimal() {
    const volumen_decimal = volumen_input.value / 100;
    audio_reproductor.volume = volumen_decimal;
    valor_del_volumen.textContent = volumen_input.value+'%'
};

// Para que el volumen por defecto comience en 50%:
volumen_a_decimal();

volumen_input.addEventListener('input', ()=>{
    volumen_a_decimal();
    
});


contenedor_mayor.forEach((actual, indice)=>{
    if (indice === 0){
        musicas_rock.forEach((N, indice_rock)=>{
            let nuevo_div = document.createElement('div');
            let img = document.createElement('img');

            img.src = musicas_rock[indice_rock].portada;
            
            nuevo_div.classList.add('track1');
            
            nuevo_div.dataset.indicer = indice_rock;

            // nuevo_div.style.backgroundImage = `url('${musicas_rock[indice_rock].portada}')`;
            
            nuevo_div.appendChild(img);
            actual.appendChild(nuevo_div);
        });
    } else if (indice === 1){
        musicas_romantic.forEach((N, indice_romantic)=>{
            let nuevo_div = document.createElement('div');
            let img = document.createElement('img');

            img.src = musicas_romantic[indice_romantic].portada;

            nuevo_div.dataset.indicer = indice_romantic;

            nuevo_div.classList.add('track1');
            // nuevo_div.style.backgroundColor = colors[indice_romantic];

            nuevo_div.appendChild(img);
            actual.appendChild(nuevo_div);
        });
    } else {
        musicas_top.forEach((N, indice_top)=>{
            let nuevo_div = document.createElement('div');
            let img = document.createElement('img');

            img.src = musicas_top[indice_top].portada;

            nuevo_div.dataset.indicer = indice_top;

            nuevo_div.classList.add('track1');
            // nuevo_div.style.backgroundColor = colors[indice_top];

            nuevo_div.appendChild(img);
            actual.appendChild(nuevo_div);
        });
    };
});

// const contenedor_mayor_reset = document.querySelectorAll('.caja-de-las-subcajas1')

// contenedor_mayor_reset.forEach((elemento, indice)=>{
//     if (indice == 0) {
//         const cajas_track = elemento.querySelectorAll('div');
//         cajas_track.forEach((element_track, indice)=>{
//             element_track.style.backgroundImage = `url('${musicas_rock[indice].portada}')`;
//         });
//     };
// });

// !generando las lista de musica: desplegable
contenedor_ul.forEach((elemento_actual, indice)=>{
    const ul = elemento_actual.querySelector('.lista-ul');
    
    if (indice == 0) {
        musicas_rock.forEach((N, indice)=>{
            let nuevo_li = document.createElement('li');
            nuevo_li.textContent = musicas_rock[indice].nombre;

            ul.appendChild(nuevo_li);
        });
    } else if (indice == 1) {
        musicas_romantic.forEach((N, indice)=>{
            let nuevo_li = document.createElement('li');
            nuevo_li.textContent = musicas_romantic[indice].nombre;

            ul.appendChild(nuevo_li);
        });
    } else{
        musicas_top.forEach((N, indice)=>{
            let nuevo_li = document.createElement('li');
            nuevo_li.textContent = musicas_top[indice].nombre;

            ul.appendChild(nuevo_li);
        });
    };
});

function resetStyle(){
    contenedor_mayor.forEach((actual)=>{
        aplicar_estilos(actual);
    })
};

// function indice_para_cada_musica(){

// };

// function haz_click(){
//     caja.addEventListener('click', ()=>{
//         let genero_que_toca = contenedor.dataset.padre;
//         let genero_actual = todas_las_musicas[genero_que_toca];

//         audio_reproductor.src = genero_actual[caja.dataset.indicer];
//         play_music();
//     });
// }

function aplicar_estilos(contenedor){
    const sub_cajas_track1 = contenedor.querySelectorAll('.track1');
    
    sub_cajas_track1.forEach((track)=>{
        track.classList.remove('anime');
        // track.style.transition = 'none';
    });

    void contenedor.offsetWidth;

    sub_cajas_track1.forEach((t)=>{
        t.classList.add('anime')
        // t.style.transition = 'transform 0.4s ease, opacity 0.4s ease'
    });

    sub_cajas_track1.forEach((caja, indice)=>{
        if (indice === 0) {
            
            // haz_click();
            caja.style.transform = "scale(1) translatey(0)";
            caja.style.opacity = "1"
            caja.style.zIndex = "30";
        } else if (indice === 1) {
            caja.style.transform = "scale(0.95) translatey(10px)";
            caja.style.opacity = "1";
            caja.style.zIndex = "20";
        } else if (indice === 2) {
            caja.style.transform = "scale(0.9) translatey(20px)";
            caja.style.opacity = "1";
            caja.style.zIndex = "10";
        } else {
            caja.style.transform = "scale(0.8) translatey(0)";
            caja.style.opacity = "1";
            caja.style.zIndex = '5';
        };
    });
};


resetStyle();

// !El primer click no va mover la caja
let contador = [0, 0, 0];
let estas_en = 0;
let sub_estas_en = 0;
// let contador2 = 0;
// let contador3 = 0;


function musica_reproducir_segun_caja(contenedor_actual_f, genero_a_reproducir_f) {
    let firs_actualizar = contenedor_actual_f.firstElementChild;

    let caja_musica = firs_actualizar.dataset.indicer;
    audio_reproductor.src = genero_a_reproducir_f[caja_musica].ruta;

    actualizar_inf(genero_a_reproducir_f, caja_musica);

    play_music();
};

function avanzar_al_siguiente() {
    // console.log(`genero: ${estas_en}`);
    // console.log(`Musica: ${sub_estas_en}`);

    let si_se_puede_avazar = todas_las_musicas[estas_en].length - 1;

    sub_estas_en++
    
    if (si_se_puede_avazar < sub_estas_en) {
        estas_en = (estas_en + 1) % todas_las_musicas.length;
        sub_estas_en = 0
    }

    let genero_music = todas_las_musicas[estas_en];
    
    actualizar_inf(genero_music, sub_estas_en);
    audio_reproductor.src = genero_music[sub_estas_en].ruta;
    play_music();
};

boton_siguiente.addEventListener('click', ()=>{
    avanzar_al_siguiente();
});

// bi-repeat-1 : bi-repeat
let repetir_o_no = false;
boton_repetir.addEventListener('click', ()=>{
    repetir_o_no =repetir_o_no == false ? true : false;

    if(repetir_o_no){
        boton_repetir_icono.classList.remove('bi-repeat');
        boton_repetir_icono.classList.add('bi-repeat-1');      
    } else{
        boton_repetir_icono.classList.remove('bi-repeat-1');
        boton_repetir_icono.classList.add('bi-repeat');
    };
});
audio_reproductor.addEventListener('ended', ()=>{
    if (repetir_o_no){
        play_music();
    } else{
        avanzar_al_siguiente();
    };
});

boton_atras.addEventListener('click', ()=>{
    sub_estas_en--
    
    if (sub_estas_en < 0) {
        estas_en = (estas_en - 1 + todas_las_musicas.length) % todas_las_musicas.length;
        sub_estas_en = todas_las_musicas[estas_en].length - 1;
    }

    let genero_music_r = todas_las_musicas[estas_en];
    
    actualizar_inf(genero_music_r, sub_estas_en);
    audio_reproductor.src = genero_music_r[sub_estas_en].ruta;
    play_music();
});

boton_play_puasa.addEventListener('click', ()=>{
    play_pause();

    if (contador[0] <= 0) {
        contador[0]++
    }
});

// !boton buscar: 
boton_buscar.addEventListener('click', ()=>{
    caja_padre_buscar.classList.toggle('caja-padre-buscar-mostrar');
    caja_buscar.classList.toggle('caja-buscar-mostrar');
    
    if (!caja_padre_buscar.classList.contains('caja-padre-buscar-mostrar')) {
        caja_buscar.addEventListener('transitionend', function anim(a){
            if (a.propertyName == 'clip-path') {
                lista_ul_buscar.innerHTML = '';
                input_para_buscar.value = '';
            }
            
            caja_buscar.removeEventListener('transitionend', anim);
        }); 
    };
});

// ?input buscar:
input_para_buscar.addEventListener('input', ()=>{
    const texto = input_para_buscar.value.trim();

    if (!texto) {
        lista_ul_buscar.innerHTML = ''
        return;
    };
    
    const coincidencias = solo_nombres.filter(item => item.toLowerCase().startsWith(texto.toLowerCase()));

    lista_ul_buscar.innerHTML = coincidencias.map(item => `<li>${item}</li>`).join("");
});


contenedor_mayor.forEach((contenedor_actual, indice)=>{
    contenedor_actual.addEventListener('click', ()=>{

        // let play_list_selec = play_list[indice];

        play_list.forEach((play_list_selec, indice_actual)=>{
            play_list_selec.classList.toggle('play-list-selecion', indice_actual == indice);
        });

        let tracks = contenedor_actual.querySelectorAll('.track1');

        // play_list_selec.classList.toggle('play-list-selecion', indice == indice);

        const firs = contenedor_actual.firstElementChild;

        const genero_a_reproducir = todas_las_musicas[indice];
        // let caja_musica = firs.dataset.indicer;

        // if (contador[indice] > 1) {
        //     audio_reproductor.src = genero_a_reproducir[caja_musica].ruta;
        //     play_music();
        // };
        

        if (contador[indice] == 1 & tracks.length > 1 ) {
            firs.style.transform = 'translateY(-150%) rotate(-10deg)';
            firs.style.opacity = '0';
    
            firs.addEventListener('transitionend', function handler(e) {
                if (e.propertyName === 'transform') {
                    contenedor_actual.appendChild(firs);
                    resetStyle(contenedor_actual);
                    
                    musica_reproducir_segun_caja(contenedor_actual, genero_a_reproducir);
    
                    firs.removeEventListener('transitionend', handler)
                }
            });   
        } else {
            
            musica_reproducir_segun_caja(contenedor_actual, genero_a_reproducir);
            // audio_reproductor.src = genero_a_reproducir[caja_musica].ruta;
            // play_music();

            firs.style.transform = 'scale(1.1)'

            firs.addEventListener('transitionend', function handler2() {
                firs.classList.remove('anime');

                void firs.offsetWidth;

                firs.classList.add('anime');

                firs.style.transform = 'scale(1)';

                // if (indice == 0) {
                //     contador[indice] = contador[indice] + 1;
                // } else if(indice == 1) {
                //     contador[indice] = contador[indice] + 1;
                // } else {
                //     contador[indice] = contador[indice] + 1;
                // };

                contador[indice] = contador[indice] + 1;

                firs.removeEventListener('transitionend', handler2)
                // console.log('contador actual', contador+1);
                
            });
        };


    });
});



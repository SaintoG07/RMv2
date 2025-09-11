// !Cajas animados, con su musica correspondiente:
// const contenedor_de_subcajas_anim = document.querySelector('.caja-de-las-subcajas1');
const contenedor_mayor = document.querySelectorAll('.caja-de-las-subcajas1')
// ?Caja mayor de las subcajas, se usará para ver en qué caja se ha hecho click o está la selección:
const play_list = document.querySelectorAll('.sub-caja-lista .play-list');


// !Caja desplegable, osea la lista de todas las musicas, con su nombre:
const lista_musica_de_todo = document.getElementById('lista-musica-de-todo');
const caja_lista_musica = document.getElementById('caja-lista-musica')
const boton_cerrar_caja_lista_musica = document.getElementById('cerrar-caja-lista-musica');
const contenedor_ul = document.querySelectorAll('.sub-caja-lista-musica .sub-caja-lista-musica-2');

// !Etiqueta audio:
const audio_reproductor = document.getElementById('audio_reproductor');


// ?Mostrar y ocultar caja desplegable:
lista_musica_de_todo.addEventListener('click', ()=>{
    // caja_lista_musica.style.transform = "translateX(0)";
    caja_lista_musica.classList.add('caja-lista-musica-mostrar');
    lista_musica_de_todo.classList.add('oculatar_boton_lista')
});

boton_cerrar_caja_lista_musica.addEventListener('click', ()=>{
    caja_lista_musica.classList.remove('caja-lista-musica-mostrar');
    lista_musica_de_todo.classList.remove('oculatar_boton_lista');
})


// !Lista de las musicas
const musicas_rock = [
    {
        nombre : 'A donde voy',
        portada : 'img/A donde voy.jpg',
        ruta : 'music/A dónde voy - Wuicho kun & Azul de Viena.mp3'
    },
    {
        nombre : 'Desconocido',
        portada : 'img/desconocido.jpg',
        ruta : 'music/DesconocidoMusic.mp3'
    }
];

const musicas_romantic = [
    {
        nombre : 'Sharks',
        portada : 'img/paris the prince-sharks.jpg',
        ruta : 'music/Skrahs.mp3'
    },
    {
        nombre : 'shadow of the days',
        portada : 'img/shadow of the days.jpg',
        ruta : 'music/Shadow Of The Day.mp3'
    },
    {
        nombre : 'shadowborn',
        portada : 'img/shadowborn.webp',
        ruta : 'music/SHADOWBORN.mp3'
    }
];

const musicas_top = [
    {
        nombre : 'Windows',
        portada : 'img/Windows.jpg',
        ruta : 'music/M & S R-Windows.mp3'
    }
];

const colors = ['red', 'blue', 'green', 'yellow', 'blueviolet', 'orange']



contenedor_mayor.forEach((actual, indice)=>{
    if (indice === 0){
        musicas_rock.forEach((N, indice_rock)=>{
            let nuevo_div = document.createElement('div');
            let img = document.createElement('img');

            img.src = musicas_rock[indice_rock].portada;
            
            nuevo_div.classList.add('track1');

            // nuevo_div.style.backgroundImage = `url('${musicas_rock[indice_rock].portada}')`;
            
            nuevo_div.appendChild(img);
            actual.appendChild(nuevo_div);
        });
    } else if (indice === 1){
        musicas_romantic.forEach((N, indice_romantic)=>{
            let nuevo_div = document.createElement('div');
            let img = document.createElement('img');

            img.src = musicas_romantic[indice_romantic].portada;

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
// let contador2 = 0;
// let contador3 = 0;

contenedor_mayor.forEach((contenedor_actual, indice)=>{
    contenedor_actual.addEventListener('click', ()=>{

        // let play_list_selec = play_list[indice];

        play_list.forEach((play_list_selec, indice_actual)=>{
            play_list_selec.classList.toggle('play-list-selecion', indice_actual == indice);
        });

        let tracks = contenedor_actual.querySelectorAll('.track1');
        let cantidad_tracks = tracks.length;


        // play_list_selec.classList.toggle('play-list-selecion', indice == indice);

        const firs = contenedor_actual.firstElementChild;

        if (contador[indice] == 1) {
    
            firs.style.transform = 'translateY(-150%) rotate(-10deg)';
            firs.style.opacity = '0';
    
            firs.addEventListener('transitionend', function handler(e) {
                if (e.propertyName === 'transform') {
                    contenedor_actual.appendChild(firs);
                    resetStyle(contenedor_actual);
    
                    firs.removeEventListener('transitionend', handler)
                }
            });   
        } else {
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



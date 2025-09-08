// const contenedor_de_subcajas_anim = document.querySelector('.caja-de-las-subcajas1');
const contenedor_mayor = document.querySelectorAll('.caja-de-las-subcajas1')
const lista_musica_de_todo = document.getElementById('lista-musica-de-todo');
const caja_lista_musica = document.getElementById('caja-lista-musica')
const boton_cerrar_caja_lista_musica = document.getElementById('cerrar-caja-lista-musica');

console.log(caja_lista_musica);

lista_musica_de_todo.addEventListener('click', ()=>{
    // caja_lista_musica.style.transform = "translateX(0)";
    caja_lista_musica.classList.add('caja-lista-musica-mostrar');
});

boton_cerrar_caja_lista_musica.addEventListener('click', ()=>{
    caja_lista_musica.classList.remove('caja-lista-musica-mostrar');
})


const musicas_rock = [1, 2];
const musicas_romantic = [1, 2, 3, 4, 5];
const musicas_top = [1, 2, 3, 4
];

const colors = ['red', 'blue', 'green', 'yellow', 'blueviolet', 'orange']



contenedor_mayor.forEach((actual, indice)=>{
    if (indice === 0){
        musicas_rock.forEach((N, indice_rock)=>{
            let nuevo_div = document.createElement('div');
            nuevo_div.classList.add('track1');
            nuevo_div.style.backgroundColor = colors[indice_rock];

            actual.appendChild(nuevo_div);
        });
    } else if (indice === 1){
        musicas_romantic.forEach((N, indice_romantic)=>{
            let nuevo_div = document.createElement('div');
            nuevo_div.classList.add('track1');
            nuevo_div.style.backgroundColor = colors[indice_romantic];

            actual.appendChild(nuevo_div);
        });
    } else {
        musicas_top.forEach((N, indice_top)=>{
            let nuevo_div = document.createElement('div');
            nuevo_div.classList.add('track1');
            nuevo_div.style.backgroundColor = colors[indice_top];

            actual.appendChild(nuevo_div);
        });
    };
});

// const contenedor_mayor_reset = document.querySelectorAll('.caja-de-las-subcajas1')

function resetStyle(){
    contenedor_mayor.forEach((actual)=>{
        aplicar_estilos(actual);
    })
};

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
            caja.style.transform = "scale(0.95) translatey(8px)";
            caja.style.opacity = "1";
            caja.style.zIndex = "20";
        } else if (indice === 2) {
            caja.style.transform = "scale(0.9) translatey(16px)";
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



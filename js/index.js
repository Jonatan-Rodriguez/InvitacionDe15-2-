//Cuenta regresiva
const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays} : ${t.remainHours} : ${t.remainMinutes} : ${t.remainSeconds}`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Dec 04 2023 21:00:00 GMT-0300', 'clock', '¡Feliz cumpleaños!');

  //copy paste
let inputCbu = document.getElementById(`inputCbu`);
let btnCbu = document.getElementById(`btnCbu`);
let inputAlias = document.getElementById(`inputAlias`);
let btnAlias = document.getElementById(`btnAlias`); 
let noti = document.getElementById(`noti`);
let notificacion = document.getElementById(`notificacion`);

btnCbu.addEventListener(`click`, ()=>{
    inputCbu.focus();
    document.execCommand(`selectAll`);
    document.execCommand(`copy`);
    
    setTimeout(()=>{
        noti.classList.add(`noti-active`);
        notificacion.classList.add(`notificacion-active`);
    },500);

    setTimeout(()=>{
      noti.classList.remove(`noti-active`);
      notificacion.classList.remove(`notificacion-active`);
  },3400);
});

btnAlias.addEventListener(`click`, ()=>{
    inputAlias.focus();
    document.execCommand(`selectAll`);
    document.execCommand(`copy`);
    
    setTimeout(()=>{
      noti.classList.add(`noti-active`);
      notificacion.classList.add(`notificacion-active`);
    },500);

    setTimeout(()=>{
      noti.classList.remove(`noti-active`);
      notificacion.classList.remove(`notificacion-active`);
    },3400);
});

// Reproductor de musica
let music = document.getElementById(`my_audio`);
const playpause = document.querySelector('.playpause');

playpause.addEventListener('click', () => {
  playpause.classList.toggle('playing');

  music.paused? music.play(): music.pause();
});

//animacion de cambio de background
let btnUbi = document.getElementById(`btnUbi`);

btnUbi.addEventListener('click', ()=>{
  btnUbi.classList.add('btn-active');

  setTimeout(()=>{
    btnUbi.classList.remove(`btn-active`);
  },1000);
});

//observer
/* let section1 = document.getElementById(`section1`);

const animacion = (entradas, observador) => {
 
  entradas.forEach((entrada) => {

    if(entrada.isIntersecting){
      entrada.target.classList.add('section-animation');
    } else {
      entrada.target.classList.remove('section-animation');
    }
  });
};

const observador = new IntersectionObserver(animacion, {
  root: null ,
  rootMargin : '0px 0px 0px 0px',
  threshold: '1.0'
});

observador.observe(section1); */

// carrusel de fotos
const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
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
  
  countdown('Mar 04 2023 21:00:00 GMT-0300', 'clock', '¡Feliz cumpleaños!');

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
    },1000);

    setTimeout(()=>{
      noti.classList.remove(`noti-active`);
      notificacion.classList.remove(`notificacion-active`);
  },3900);
});

btnAlias.addEventListener(`click`, ()=>{
    inputAlias.focus();
    document.execCommand(`selectAll`);
    document.execCommand(`copy`);
    
    setTimeout(()=>{
      noti.classList.add(`noti-active`);
      notificacion.classList.add(`notificacion-active`);
    },1000);

    setTimeout(()=>{
      noti.classList.remove(`noti-active`);
      notificacion.classList.remove(`notificacion-active`);
    },3900);
});

// Reproductor de musica
let music = document.getElementById(`my_audio`);
const playpause = document.querySelector('.playpause');

playpause.addEventListener('click', () => {
  playpause.classList.toggle('playing');

  music.paused? music.play(): music.pause();
});

//Observer
let section2 = document.getElementById(`section2`);
let section3 = document.getElementById(`section3`);
let section4 = document.getElementById(`section4`);
let section5 = document.getElementById(`section5`);

const cargarClase = ()=> {
  /* console.log("ejecuta"); */
}

const observador = new IntersectionObserver(cargarClase, {
	root: null,
  rootMargin: '0px 0px',
	threshold: 0.8
});

observador.observe(section2);
observador.observe(section3);
observador.observe(section4);
observador.observe(section5);
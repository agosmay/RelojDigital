const tiempo = setInterval(()=> {
 let reloj = document.getElementById('reloj')
 let tiempoActual = new Date() 
 let horas = tiempoActual.getHours()
 let minutos = tiempoActual.getMinutes()
 let segundos = tiempoActual.getSeconds()
 
 if(minutos < 10) {
	 minutos = "0" + minutos;
 }
 
 if (horas < 10) {
	 horas = "0" + horas;
 }
 
 if (segundos < 10) {
	 segundos = "0" + segundos;
 }
 
reloj.textContent = `${horas} : ${minutos} : ${segundos}`
	
},1000) //se ejecuta cada un segundo
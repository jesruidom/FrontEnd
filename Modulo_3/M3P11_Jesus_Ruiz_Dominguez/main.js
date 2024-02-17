const inicializar = () => {


    const actualizarFecha = () => {
        let contenedorTexto = document.getElementById("texto");
        let fechaHora = new Date;
   
        let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
        let dia = dias[fechaHora.getDay() - 1];
        let mes = meses[fechaHora.getMonth()];
        let horas = fechaHora.getHours();
        let minutos = fechaHora.getMinutes();        

        if(horas.toString().length == 1){
            horas = `0${fechaHora.getHours()}`;
        } else{
            horas = fechaHora.getHours();
        }

        if(minutos.toString().length == 1){
            minutos = `0${fechaHora.getMinutes()}`;
        } else{
            minutos = fechaHora.getMinutes();
        }
  
        contenedorTexto.innerHTML = `Hoy es ${dia}, ${fechaHora.getDate()} de ${mes} de ${fechaHora.getFullYear()}, y son las ${horas}:${minutos} horas.`;
    }

    setInterval(actualizarFecha, 1000);

    actualizarFecha();
}
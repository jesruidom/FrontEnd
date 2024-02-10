const inicializar = () => {

    const actualizarFecha = () => {
        let contenedorTexto = document.getElementById("texto");
        let fechaHora = new Date;
    
        let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
        let dia = dias[fechaHora.getDay() - 1];
        let mes = meses[fechaHora.getMonth()];
    
        contenedorTexto.innerHTML = `Hoy es ${dia}, ${fechaHora.getDate()} de ${mes} de ${fechaHora.getFullYear()}, y son las ${fechaHora.getHours()}:${fechaHora.getMinutes()} horas.`;
    }

    setInterval(actualizarFecha, 1000);

    actualizarFecha();
}
const inicializar = () => {
    const mediaNotas = document.getElementById("mediaNotas");
    const correspondenciaNotas = document.getElementById("correspondenciaNotas");    

    function calculaMedia() {
        let listaNotas = []
        listaNotas.push(parseFloat(document.getElementById("nota1").value));
        listaNotas.push(parseFloat(document.getElementById("nota2").value));
        listaNotas.push(parseFloat(document.getElementById("nota3").value));
        listaNotas.push(parseFloat(document.getElementById("nota4").value));
        listaNotas.push(parseFloat(document.getElementById("nota5").value));
        listaNotas.push(parseFloat(document.getElementById("nota6").value));

        let sumaNotas = 0;

        for(nota of listaNotas){
            if(nota < 0 || nota > 10){
                return alert(`El número ${nota} no es un valor correcto. Introduce una nota entre 0 y 10`);
            } else if(isNaN(nota)){
                return alert(`Hay que ingresar 6 notas para calcular la media`);
            }
            else{
                parseFloat(sumaNotas += nota);
            }
        }
        
        const notaMedia = parseFloat(sumaNotas / listaNotas.length);
        mediaNotas.innerHTML = `La nota media del alumno es ${notaMedia}`;
        console.log(`Las notas introducidas son: ${listaNotas}`);
        return notaMedia;
    }

    const calcularCorrespondencia = () => {
        const nota = parseFloat(calculaMedia());
        let res = null;

        console.log(`La nota media que se obtiene en la correspondencia es ${nota}`);

        if(nota >= 0 && nota < 3){
            res = `Muy deficiente`;
        } else if(nota >= 3 && nota < 5){
            res = `Insuficiente`;
        } else if(nota >= 5 && nota < 6){
            res = `Suficiente`;
        } else if(nota >= 6 && nota < 7){
            res = `Bien`;
        } else if(nota >= 7 && nota < 9){
            res = `Notable`;
        } else if(nota >= 9 && nota <= 10){
            res = `Sobresaliente`;
        } else{
            res = `No es un valor adecuado.`;
        }

        correspondenciaNotas.innerHTML = `El alumno ha sacado un ${nota} que corresponde a un ${res}`;
    }

    const botonMedia = document.getElementById("calculaMedia");
    const botonCorrespondencia = document.getElementById("calculaCorrespondencia");

    botonMedia.onclick = calculaMedia;
    botonCorrespondencia.onclick = calcularCorrespondencia;
}
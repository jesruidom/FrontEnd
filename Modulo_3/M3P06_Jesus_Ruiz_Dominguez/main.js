const inicializar = () => {

    const pedirLetra = () => {
        var letrasConcatenadas = "";

        function esLetra(letra) {
          return /^[a-zA-Z]$/.test(letra);
        }
      
        function pedirLetraRecursivo() {
          var letra = prompt("Introduce una letra:");
      
          if (letra === null) {
            alert("Has cancelado la operación. Letras introducidas: " + letrasConcatenadas);
          } else if (letra.length === 1 && esLetra(letra)) {
            alert("Has introducido la letra: " + letra);
            letrasConcatenadas += letra;
            pedirLetraRecursivo();
          } else if (esLetra(letra)) {
            alert("Error: Solo se pueden introducir letras.");
            pedirLetraRecursivo();
          } else {
            alert("Error: Debes introducir solo una letra.");
            pedirLetraRecursivo();
          }
        }

        pedirLetraRecursivo();
    }

    const boton = document.getElementById("boton");
    boton.onclick = pedirLetra;
}


  
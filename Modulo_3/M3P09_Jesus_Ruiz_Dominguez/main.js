const inicializar = () => {

    function generarTabla() {
        // Obtener la referencia de la tabla
        let tabla = document.getElementById("miTabla");
        const numeroFilas = 3;
        const numeroColumnas = 3; 

        // Limpiar la tabla si ya tiene filas
        tabla.innerHTML = "";
      
        // Crear las filas y celdas de la tabla
        for (let i = 0; i < numeroFilas; i++) {
          // Insertar una nueva fila en la posición i
          var fila = tabla.insertRow(i);
      
          for (let j = 0; j < numeroColumnas; j++) {
            // Insertar una celda en la fila en la posición j
            var celda = fila.insertCell(j);
            // Agregar contenido a la celda (puedes modificar esto según tus necesidades)
            //celda.innerHTML = "Fila " + (i + 1) + ", Celda " + (j + 1);
            let contenido = document.createTextNode(`Celda de la fila ${i}, columna ${j}`);
            celda.appendChild(contenido);
          }
        }
    }
      
    const botonGeneraTabla = document.getElementById("generaTabla");
    botonGeneraTabla.onclick = generarTabla;
    
}

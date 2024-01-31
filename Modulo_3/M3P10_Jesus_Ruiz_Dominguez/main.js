const inicializar = () => {

    class Persona {
        constructor(nombre, apellidos, edad) {
          this.nombre = nombre;
          this.apellidos = apellidos;
          this.edad = edad;
        }
    }

    const personasArray = [];
      
    function agregarPersonas() {
        for (let i = 0; i < 5; i++) {
        const nombre = prompt(`Ingrese el nombre #${i + 1}:`);
        const apellidos = prompt(`Ingrese los apellidos #${i + 1}:`);
        let edad;
    
        do {
            const edadInput = prompt(`Ingrese la edad #${i + 1}:`);
            edad = parseInt(edadInput);
    
            if (isNaN(edad)) {
            alert("Por favor, ingrese un número válido para la edad.");
            }
        } while (isNaN(edad));

        const nuevaPersona = new Persona(nombre, apellidos, edad);
        personasArray.push(nuevaPersona);
    }
    
    alert("Personas agregadas correctamente.");

    }
      
    function mostrarPersonas() {
    if (personasArray.length === 0) {
        alert("No hay personas almacenadas.");
    } else {
        let mensaje = "Personas almacenadas:\n";
        for (const persona of personasArray) {
        mensaje += `Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, Edad: ${persona.edad}\n`;
        }
        alert(mensaje);
    }
    }

    const botonAgregar = document.getElementById("botonAgregar");
    const botonMostrar = document.getElementById("botonMostrar");
      
    botonAgregar.onclick = agregarPersonas;
    botonMostrar.onclick = mostrarPersonas;
}
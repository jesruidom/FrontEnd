const inicializar = () => {
    let numeroEntero = parseInt(prompt("Introduzca un número entero entre 0 y 10"));

    if(numeroEntero < 0 || numeroEntero > 10){
        alert("El número introducido no es correcto, introduzca un número entero entre 0 y 10")
        location.reload()
    }

    let texto = `El numero que ha elegido el usuairo es el ${numeroEntero}`;

    const calcularFactorial = (numeroEntero) => {
        let resultado = 1
        for(let i = 1; i<=numeroEntero; i++){
            resultado = resultado * i;
        }
        return resultado;
    }

    const factorialCalculado = calcularFactorial(numeroEntero)
    let textoResultado = `El factorial de ${numeroEntero} es: ${factorialCalculado}`

    const contenedorNumero = document.getElementById("contenedorNumero");
    contenedorNumero.innerHTML = texto;
    const contenedorResultado = document.getElementById("contenedorResultado")
    contenedorResultado.innerHTML = textoResultado 

    const recargarPagina = () => {
        location.reload()
    }

    const boton = document.getElementById("boton");
    boton.onclick = recargarPagina;
}
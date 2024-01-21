const inicializar = () => {

  let marcadorDeMonedas = document.getElementById("monedasDisponibles");
  marcadorDeMonedas.innerHTML = `Monedas disponibles: 50`;
  
  function realizarApuesta() {
    let monedasDisponibles = 50;
    let marcadorDeMonedas = document.getElementById("monedasDisponibles");
    marcadorDeMonedas.innerHTML = `Monedas disponibles: ${monedasDisponibles}`;
    // Obtener el valor del input por su ID
    var monedasApostadas = parseInt(document.getElementById("monedasApostadas").value);

    if(monedasApostadas >= 1 && monedasApostadas <= monedasDisponibles){
      monedasDisponibles -= monedasApostadas;
      alert("El valor ingresado es: " + monedasApostadas);
      alert(`El valor de monedas disponibles es: ${monedasDisponibles}`)
    } else{
      alert("El valor ingresado no es correcto");
    }

  }

  const boton = document.getElementById("boton");
  boton.onclick = realizarApuesta;
}

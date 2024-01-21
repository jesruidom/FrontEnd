const inicializar = () => {

  let marcadorDeMonedas = document.getElementById("monedasDisponibles");
  marcadorDeMonedas.innerHTML = `Monedas disponibles: 50`;
  let monedasDisponibles = 50;

  let numerosAleatoriosGenerados = document.getElementById("numerosAleatorios");
  let listaLumerosAleatorios = [];

  function getRandomInt(min, max){
    numero = Math.floor(Math.random() * (max - min)) + min
    alert(`El numero que ha salido ha sido el: ${numero}`)
    return numero;
  }
  
  function realizarApuesta() {
    let monedasApostadas = parseInt(document.getElementById("monedasApostadas").value);
    let numeroApostado = parseInt(document.getElementById("numeroApostado").value);

    if(monedasApostadas >= 1 && monedasApostadas <= monedasDisponibles){
      if(numeroApostado >= 1 && numeroApostado <= 6){
        numeroRandom = parseInt(getRandomInt(1,7));
        listaLumerosAleatorios.push(numeroRandom)
        if(numeroApostado == numeroRandom){
          monedasDisponibles += monedasApostadas;
          alert(`¡Enhorabuena! Has ganado ${monedasApostadas} monedas.`);
          if(monedasDisponibles == 100){
            alert(`¡Enhorabuena!¡Has ganado el juego!`);
            numerosAleatoriosGenerados.innerHTML = `Los números aleatorios que se han generado son: ${listaLumerosAleatorios}`;
          }
        } else{
          monedasDisponibles -= monedasApostadas;
          alert(`Vaya! Has perdido ${monedasApostadas} monedas.`);
          if(monedasDisponibles <= 0){
            alert(`Game Over`);
            numerosAleatoriosGenerados.innerHTML = `Los números aleatorios que se han generado son: ${listaLumerosAleatorios}`;
          }
        }
        
        /*console.log(`Se han apostado ${monedasApostadas} monedas`);
        console.log(`El valor de monedas disponibles es: ${monedasDisponibles}`)
        console.log(`El número al que se ha apostado es: ${numeroApostado}`)
        console.log(`El número que ha salido ha sido el: ${numeroRandom}`)
        console.log(`Todos los números aleatorios que se han generado son: ${listaLumerosAleatorios}`)*/

        marcadorDeMonedas.innerHTML = `Monedas disponibles: ${monedasDisponibles}`;
        return monedasDisponibles;
      } else {
        alert("Tienes que apostar a un número comprendido entre el 1 y el 6");
      }

    } else{
      alert(`El valor ingresado no es correcto. Debes apostar mínimo 1 moneda y máximo ${monedasDisponibles}`);
    }

  }

  const boton = document.getElementById("boton");
  boton.onclick = realizarApuesta;

}

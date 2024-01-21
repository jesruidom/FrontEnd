const inicializar = () => {
    const eleccionMenu = () => {
        const primerPlato = parseInt(prompt("Indique el número del primer plato que desea pedir"));
        const segundoPlato = parseInt(prompt("Indique el número del segundo plato que desea pedir"));

        let listaPrimerosPlatos = [
            "Sopa de Tomate",
            "Ensalada César",
            "Carpaccio de Salmón",
            "Bruschetta de Champiñones",
            "Pasta Carbonara"
        ];

        let listaSegundosPlatos = [
            "Lomo de Cerdo a la Parrilla",
            "Pescado a la Veracruzana",
            "Risotto de Champiñones",
            "Pechuga de Pollo al Limón",
            "Bistec a la Pimienta"
        ];

        if(primerPlato >= 1 && primerPlato <= 5 && segundoPlato >= 1 && segundoPlato <= 5){
            alert(`Ha elegido de primer plato ${listaPrimerosPlatos[primerPlato-1]} y de segundo plato ${listaSegundosPlatos[segundoPlato-1]}`);
        } else {
            alert(`El número de los platos elegidos debe estar entre 1 y 5. Vuelva a intentarlo`);
            eleccionMenu();
        }
    }

    const boton = document.getElementById("elegirMenu");
    boton.onclick = eleccionMenu;
}
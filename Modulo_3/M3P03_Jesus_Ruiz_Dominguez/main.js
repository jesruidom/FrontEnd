const nota = parseFloat(prompt(`Introduce una nota entre 0 y 10 con dos decimales`));
let res = null;

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

document.getElementById("pContenido").textContent = `La nota indicada es ${nota} - ${res}`;

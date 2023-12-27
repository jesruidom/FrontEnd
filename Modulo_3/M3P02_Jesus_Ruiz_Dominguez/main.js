//Se pide el valor con Pront y se parsea a float para poder operar con él
const radioEsfera = parseFloat(prompt(`Índica el radio de la esfera que se quiere calcular`));
const formula = `4/3 * PI * radioEsfera^3`;
const volumenEsfera = 4/3 * Math.PI * Math.pow(radioEsfera,3);

document.getElementById("pContenido").textContent = `El volumen de la esfera se calcula con la fórmula ${formula}, por tanto una esfera de radio ${radioEsfera} tiene un volumen de ${volumenEsfera}`;







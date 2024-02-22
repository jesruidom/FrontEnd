const inicializar = () =>{
    
    // Función para contar el número total de enlaces en la página
    function contarEnlaces() {
        let enlaces = document.getElementsByTagName('a');
        alert('Número total de enlaces: ' + enlaces.length);
    }

    // Función para mostrar la dirección del penúltimo enlace
    function mostrarPenultimoEnlace() {
        let enlaces = document.getElementsByTagName('a');
        let penultimoEnlace = enlaces[enlaces.length - 2].href;
        alert('Dirección del penúltimo enlace: ' + penultimoEnlace);
    }

    // Función para contar el número de enlaces que apuntan a https://www.twitter.com
    function contarEnlacesTwitter() {
        let enlacesTwitter = document.querySelectorAll('a[href="https://www.twitter.com"]');
        alert('Número de enlaces a Twitter: ' + enlacesTwitter.length);
    }

    // Función para contar el número de enlaces en el tercer párrafo
    function contarEnlacesTercerParrafo() {
        let tercerParrafo = document.getElementsByTagName('p')[2];
        let enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');
        alert('Número de enlaces en el tercer párrafo: ' + enlacesTercerParrafo.length);
    }

    const btnContarEnlaces = document.getElementById('btnContarEnlaces');
    const btnPenultimoEnlace = document.getElementById('btnPenultimoEnlace');
    const btnEnlacesTwitter = document.getElementById('btnEnlacesTwitter');
    const btnEnlacesTercerParrafo = document.getElementById('btnEnlacesTercerParrafo');

    btnContarEnlaces.onclick = contarEnlaces;
    btnPenultimoEnlace.onclick = mostrarPenultimoEnlace;
    btnEnlacesTwitter.onclick = contarEnlacesTwitter;
    btnEnlacesTercerParrafo.onclick = contarEnlacesTercerParrafo;
}
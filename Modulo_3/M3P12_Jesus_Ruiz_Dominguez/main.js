const validador = () => {
    alert("Se ha entrado en el validador");
    const formulario = document.forms.nombreFormulario;

    const nombre = formulario.nombre.value;
    const correo = formulario.correo.value;
    const contrasena = formulario.contrasena.value;
    const contrasena2 = formulario.repiteContrasena.value;

    const expresionRegularCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(nombre.length < 4){
        alert("El nombre debe tener al menos 4 caracteres");
        return false;
    }

    if(expresionRegularCorreo.test(correo) == false){
        alert("El correo electrónico ingresado no es válido");
        return false;
    }
    
    if(contrasena != contrasena2){
        alert("La contraseña no coincide");
        return false;
    }

    if(contrasena.length < 6){
        alert("La contraseña es demasiado corta");
        return false;
    } else if (contrasena.length > 12){
        alert("La contraseña es demasiado larga");
        return false;
    }

    return true;

    
}

const inicializar = () => {
    console.log("Se ha inicializado la página");
}
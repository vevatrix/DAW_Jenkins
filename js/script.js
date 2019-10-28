function validar(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var edad = document.getElementById("edad").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    //validación de nombre
    nombre = nombre.trim();
    if(nombre == ""){
        alert("El campo nombre no puede estar vacío.");
        document.getElementById("nombre").focus();
        return false;
    }

    //validación apellidos
    apellidos = apellidos.trim();
    if(nombre == ""){
        alert("El campo apellidos no puede estar vacío.");
        document.getElementById("apellidos").focus();
        return false;
    }

    //validación de dirección
    direccion = direccion.trim();
    if(direccion == ""){
        alert("El campo dirección no puede estar vacío.");
        document.getElementById("direccion").focus();
        return false;
    }
    //validación de edad
    if (isNaN(edad)){
        alert("El campo edad debe ser numérico(18-100).");
        document.getElementById("edad").focus();
        return false;
    }
    else if(edad<18 || edad>=60){
        alert("La edad debe estar comprendida entre 18 y 100 años.");
        document.getElementById("edad").focus();
        return false;
    } 

    //validación de pass
    pass1 = pass1.trim();
    pass2 = pass2.trim();
    if(pass1 !== pass2){
        alert("Las contraseñas no coinciden.");
        document.getElementById("pass1").focus();
        return false;
    }

    //validación de móvil
    movil = movil.trim();
    if(!(/^[6]{1}([0-9]+){8}$/i.test(movil))) {
        alert("Debe introducir un número de móvil válido.");
        document.getElementById("movil").focus();
        return false;
    } 

    //validación de email
    email = email.trim();
    if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))) {
        alert("Debe introducir un email válido.");
        document.getElementById("email").focus();
        return false;
    }
    return true;
}
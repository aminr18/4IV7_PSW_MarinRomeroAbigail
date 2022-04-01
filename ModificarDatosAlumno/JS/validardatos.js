function validar(formulario){
let boleta = document.getElementById("boleta").value;
let nuevaboleta = document.getElementById("nuevaboleta").value;
var expresion = /^\d{10}$/;
alert("La boleta es: "+ expresion.test(boleta));
if(expresion.test(boleta)){
    if (expresion.test(nuevaboleta)){
        todovalido = true;
    }
}
else{
    alert("tu boleta no es válida, vuelve a intentarlo");
document.getElementById("boleta").focus();}
}


function validar2(formulario){
    let telefono = document.getElementById("telefono").value;
    let telefono1 = document.getElementById("telefono1").value;
    var expresion = /^\d{10}$/;
    alert("El teléfono es: "+ expresion.test(telefono));
    if(expresion.test(telefono)){
        if (expresion.test(telefono1)){
            todovalido = true;
        }
    }
    else{
        alert("tu teléfono no es válida, vuelve a intentarlo");
    document.getElementById("telefono").focus();}
    }
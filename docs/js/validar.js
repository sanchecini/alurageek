export function validar(input){

    input.forEach((elemento) =>{
        if(expresion[elemento.dataset.tipo]!=null){
            if (expresion[elemento.dataset.tipo].test(elemento.value)) {
                elemento.parentElement.querySelector(".a-input-mensaje").innerHTML = "";
                elemento.parentElement.querySelector(".a-input-mensaje").classList.remove("a-input-message-error")
                elemento.classList.remove("a-input-container--invalid")
            } else {
                elemento.parentElement.querySelector(".a-input-mensaje").classList.add("a-input-message-error")
                elemento.parentElement.querySelector(".a-input-mensaje").innerHTML = error[elemento.dataset.tipo]
                elemento.classList.add("a-input-container--invalid")
            }      
        }
        
    } )
}


const expresion = {
    nombre  : /^[a-zA-Z]]{4,16}$/, // Letras, numeros, guion y guion_bajo
    usuario  : /^[a-z_]{4,16}$/, // Letras, numeros, guion y guion_bajo

    password : /^[a-zA-Z0-9_.-]{1,16}$/, // Letras, numeros, guion y guion_bajo
    imagen : /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
    categoria : /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
    nombreProducto : /^[a-zA-Z0-9\_\-\s]{1,50}$/, // Letras, numeros, guion y guion_bajo
    precio : /^\d{1,3}(?:\.\d{3})*(?:,\d+)?$/ // Letras, numeros, guion y guion_bajo
    
}

const error = {
    usuario : "Por favor digite un usuario correcto",
    nombre  : "Digite un nombre",
    password : "clave incorrecta",
    imagen : "clave incorrecta",
    categoria : "clave incorrecta",
    nombreProducto : "clave incorrecta",
    precio : "clave incorrecta"
}
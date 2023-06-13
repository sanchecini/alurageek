
import { logingServices } from "../service/logingServices.js";

const FormularioIngreso = document.getElementById("loging");


FormularioIngreso.addEventListener("submit", (event) => {
  event.preventDefault();
  const usuario = FormularioIngreso.querySelector("#usuario");
  const contrasena = FormularioIngreso.querySelector("#password");


  logingServices.listarLoging(usuario.value , contrasena.value)
  .then((respuesta)=>window.location.href = `productos.html?id=${respuesta[0].id}&editar=true`)
  .catch(err => alert("Usuario o contraseña no existe" +err));
})




// loginForm.addEventListener("submit" , (event) =>{

//     event.preventDefault();    
//     http.open("get", "http://localhost:3000/Contrasena")
//     http.send()

//     http.onload = () => {
//         const respuesta = http.response;
//         const Contrasena = JSON.parse(respuesta)
//         const loginInput = loginForm.querySelectorAll("[data-loging]");
//         Contrasena.forEach(nodo => {
//             loginInput.forEach(db => {
//                 verificarInput(db, nodo)
//             });
//         });
//         enviarform();
//     }
// });

// function verificarInput (nodo , db){
//     const datos = db[nodo.dataset.loging]
      
//     if (datos == nodo.value) {
//         nodo.parentElement.querySelector(".a-input-mensaje").innerHTML = "";
//         nodo.parentElement.querySelector(".a-input-mensaje").classList.remove("a-input-message-error")
//         nodo.classList.remove("a-input-container--invalid")
//     } else {
//         nodo.parentElement.querySelector(".a-input-mensaje").classList.add("a-input-message-error")
//         nodo.parentElement.querySelector(".a-input-mensaje").innerHTML = "Revisa la informacion"
//         nodo.classList.add("a-input-container--invalid")
//     }
// }

// function enviarform (){
//     const inputs = loginForm.querySelectorAll(".a-input-message-error")
    
//     if(inputs.length == 0){
//         document.location.href = "productos.html?editar=true"
//     }
// }
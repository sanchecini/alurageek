import { clienteServices } from "../service/ProductServices.js";


const url = new URL(window.location)
const urlid = url.searchParams.get("id")
const editar = url.searchParams.get("editar")

if (urlid && urlid != null ) {
  console.log(url)
    if(editar && editar != null){
      const nuevoProductoForm = document.getElementById("nuevoProducto");
      nuevoProductoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const dataFormulario = new FormData(nuevoProductoForm)
        const dataFormularioEntradas = Object.fromEntries(dataFormulario.entries());
        const dataFormularioEntradasObj = Object.assign(dataFormularioEntradas, { id: uuid.v4() });
        const inputs = nuevoProductoForm.querySelectorAll(".a-input-message-error")
    
    
        if (inputs.length == 0) {
    
          clienteServices.crearProducto(dataFormularioEntradasObj)
            .then(() => {
              alert("Se creo un nuevo producto " + dataFormularioEntradasObj.id)
              window.location.href = `productos.html?id=${urlid}&editar=${editar}`
            })
            .catch((err) => console.log(err));
    
        }
      })
    }
}





////////////////////////////
// traerDatosParaEditar(input)
// const seccion = document.querySelectorAll("[data-servicios]");
// const nuevoProductoForm = document.getElementById("nuevoProducto");
// const input = nuevoProductoForm.querySelectorAll("[data-tipo]");
// const url = new URL(window.location)
// const id = url.searchParams.get("id")
// const categoria = url.searchParams.get("categoria")
// const estado = url.searchParams.get("editar")


// const traerDatosParaEditar =(aregloNodosInput)=>{


//   if (estado) {

//     const http = new XMLHttpRequest
//     http.open("GET", `http://localhost:3000/productos/${id}`)
//     http.send()

//     http.onload = () => {
//       const datosServidorXml = http.responseText
//       const datosServidorObj = JSON.parse(datosServidorXml)
//       aregloNodosInput.forEach(nodoInput => {
//         nodoInput.value = datosServidorObj[nodoInput.id]
//       });
//     }
//   }
// }  






// traerDatosParaEditar(input)
// nuevoProductoForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const inputs = nuevoProductoForm.querySelectorAll(".a-input-message-error")
    
//   if(inputs.length == 0){
//       document.location.href = "productos.html?editar=true"
//       enviarValoresDelFormulario(nuevoProductoForm )
//   }
    
//   // if(inputError.length == 0){
//   //   enviarValoresDelFormulario(nuevoProductoForm )
//   // }
    
// })


// const enviarValoresDelFormulario =(formulario)=>{
//   const dataFormulario = new FormData(formulario)
//   const dataFormularioEntradas = Object.fromEntries(dataFormulario.entries());

  
//   const http = new XMLHttpRequest
//   if(estado){

//     console.log(dataFormularioEntradas.categoria + " "+categoria)  
//     http.open("PUT" , `http://localhost:3000/productos/${id}`)
//     http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     http.send(JSON.stringify(dataFormularioEntradas))

//   }else{
//     http.open("POST" , `http://localhost:3000/productos`)
//     http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     http.send(JSON.stringify(dataFormularioEntradas))
//     http.onloadend =()=>{
//       console.log(categoria + " "+id)  

//     }
//   }

//   window.location.href = "productos.html?editar=true"
// }




// //   http.onload = ()=>{
// //     const dataMXL = http.responseText
// //     const data = JSON.parse(dataMXL)

// //     input.forEach(element => {
// //       const inputElement = element.dataset.tipo
// //        element.value = data[inputElement]
// //     });
// //   }




// // nuevoProductoForm.addEventListener("submit", (event) => {
// //     event.preventDefault();

// //     const formData = new FormData(nuevoProductoForm);

// //     const data = Object.fromEntries(formData.entries());

// //     const http = new XMLHttpRequest
// //     const url = new URL(window.location)
// //     const id = url.searchParams.get("id")
// //     const categoria = url.searchParams.get("categoria")


// //     if(categoria != data.categoria){
// //         input.forEach((element) => {
// //             if(element.id == "categoria"){
// //               http.open("POST", `http://localhost:3000/${element.value}`);
// //               http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //               http.send(JSON.stringify(data));
              
// //               http.onreadystatechange = () => {
// //                 if (http.readyState === XMLHttpRequest.DONE) {
// //                   if (http.status === 201) {
// //                     console.log(categoria +" "+ id)
// //                     console.log("El cliente se ha agregado exitosamente");
// //                     http.open("DELETE" , `http://localhost:3000/${categoria}/${id}`),
// //                     http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //                     http.send();
// //                     http.onload =()=>{
// //                         alert("Se eliminara el regsitro")
// //                     }
// //                   } else {
// //                     console.error("Error al agregar el cliente");
// //                   }
// //                 }
// //               };
// //             }
// //         });

// //     }else{
// //         http.open("PUT" , `http://localhost:3000/${categoria}/${id}`)
// //         http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //         http.send(JSON.stringify(data));
        
// //         http.onreadystatechange = () => {
// //           console.log(http.status)
// //           if (http.readyState === XMLHttpRequest.DONE) {
// //             if (http.status === 200) {
// //               console.log("El cliente se ha agregado exitosamente");
// //             } else {
// //               console.error("Error al agregar el cliente");
// //             }
// //           }
// //         };
// //     }
// //     document.location.href = "productos.html"
    
// // })
  
  

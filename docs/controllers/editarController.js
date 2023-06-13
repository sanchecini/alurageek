import { clienteServices } from "../service/ProductServices.js";


const seccion = document.querySelector('[data-form="nuevoProducto"]')

const obtenerInformacion = async (seccion)=>{
    
    const url = new URL(window.location)
    const id = url.searchParams.get("id")


    try{

        await clienteServices.detalleProducto(id)
        .then((formData) => {
            const inputForm = seccion.querySelectorAll("[data-tipo]")

            inputForm.forEach(element => {
                element.value = formData[element.name]
                
            });
        })
    }catch(err){
        alert("ocurrio un error " + err)

    }
    
}
obtenerInformacion(seccion)

seccion.addEventListener("submit", (event)=>{
    event.preventDefault();
    const url = new URL(window.location);
    const user = url.searchParams.get("user");
    const editar = url.searchParams.get("editar");
    const id = url.searchParams.get("id");
    const formdata = new FormData(seccion)
    const data = Object.fromEntries(formdata.entries())
    clienteServices.actualizarProducto(data,id)
    .then(()=>{
        alert("Se edito el elemento con id " + id)
        window.location.href = `productos.html?id=${user}&editar=${editar}`;
    })
})

// import { llenardatos } from "./editar-services-edit.js";
// const seccion = document.querySelectorAll("[data-servicios]");
// const nuevoProductoForm = document.getElementById("nuevoProducto");
// const input = nuevoProductoForm.querySelectorAll("[data-tipo]");

// const url = new URL(window.location)
// console.log(nuevoProductoForm)


// function editar(node) {

//         const tabla = node.dataset.categoria;
//         const id = node.dataset.id;
//         document.location.href =`http://127.0.0.1:5500/clientApp/screens/producto-Editar.html?categoria=${tabla}&id=${id}`
//         llenardatos(input)      

// }


// seccion.forEach(element => {
//     element.addEventListener("click", (event)=>{

//         if(event.target.id == "editar"){
//             const btnEditar = event.target;
//             console.log(btnEditar)
//             editar(btnEditar)

//         }

//     });

// });

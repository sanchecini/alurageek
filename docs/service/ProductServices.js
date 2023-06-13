const listarProductos = (seccion) => fetch("https://my-json-server.typicode.com/sanchecini/geekson/productos").then((respuesta) => respuesta.json())

const crearProducto = (dataFormulario) => {
   return fetch("https://my-json-server.typicode.com/sanchecini/geekson/productos",{
    method:"POST" ,
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(dataFormulario),
    })

}

const eliminarProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/sanchecini/geekson/productos/${id}`, {
        
        method: "DELETE",
    })

    .then(response => {
        alert("Se elimino el producto con id " + id )
    })
    .catch(error => {
        console.error('Hubo un error eliminando el producto:', error);
        throw error;
    });
}


const  detalleProducto = (id) => fetch(`https://my-json-server.typicode.com/sanchecini/geekson/productos/${id}`).then((repuesta)=>repuesta.json())


const actualizarProducto =(dataFormulario , id) => fetch(`https://my-json-server.typicode.com/sanchecini/geekson/productos/${id}` , {
    method:"PUT",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(dataFormulario)
    })
    .then((resolve)=>resolve)
    .catch((err)=>console.log(err))

export const clienteServices = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}


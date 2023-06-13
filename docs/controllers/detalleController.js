import { clienteServices } from "../service/ProductServices.js";


const crearProducto = (producto , precio, imagen,id, categoria, mensaje,tarjetaDetalle) => {
    const tarjeta = document.createElement("div")
    const url = new URL(window.location)
         
        tarjeta.classList.add("m-cards")
        if(tarjetaDetalle){
            const contenidoTarjeta = 
            `
            <div class="m-cards__descripcion">
                <h2 class="a-title -left -carprincipal m-cards__descripcion -secundaryColor">${producto}</h2>
                <h3 class="a-title  m-cards__title -detalle -secundaryColor">${categoria}</h3>
                <h3 class="">${mensaje}</h3>
            </div>
           `
            const imagenTargeta =` <img src="assets/img/${imagen}.png" alt="" class="a-img -detalle"></img>`
            tarjeta.innerHTML = imagenTargeta + contenidoTarjeta;
            tarjeta.classList.add("m-cards")
            tarjeta.classList.add("-detalle")
            
        } else{
            const contenidoTarjeta = 
            `
            <div class="m-cards__descripcion">
                <h2 class="a-title m-cards__title -detalle -secundaryColor">${producto}</h2>
                <h3 class="a-title -left  m-cards__descripcion -secundaryColor">$ ${precio}</h3>
                <a class="a-button -link m-cards__button" href="detalleProducto.html?id=${id}&categoria=${categoria}">Ver Producto</a>
            </div>
           `
            const imagenTargeta =` <img src="assets/img/${imagen}.png" alt="" class="a-img"></img>`
            tarjeta.innerHTML = imagenTargeta + contenidoTarjeta;
            tarjeta.classList.add("m-cards")
        }
    
        return tarjeta;
    }

clienteServices.listarProductos()
    
    .then((datosServidorObj) => {
        const tarjeta = document.createElement("div")

        const url = new URL(window.location)
        const urlid = url.searchParams.get("id")
        const editar = url.searchParams.get("editar")
        const categoriaUrl = url.searchParams.get("categoria")

        const seccion = document.querySelectorAll("[data-servicios]");
        seccion.forEach(element => {
            if (element.dataset.servicios == "detalleCard") {
                datosServidorObj.forEach(infotarjeta => {
                    if(infotarjeta.id == urlid){
                        const tarjetaDetalle = true

                        const tarjetaPrductos = crearProducto(infotarjeta.nombreProducto, infotarjeta.precio, infotarjeta.imagen, infotarjeta.id, infotarjeta.categoria, infotarjeta.mensaje, tarjetaDetalle)
                        element.appendChild(tarjetaPrductos)
                        
                    }

                });
            } else {
                datosServidorObj.forEach(infotarjeta => {
                    if (categoriaUrl == infotarjeta.categoria && urlid != infotarjeta.id) {
                        const tarjetaPrductos = crearProducto(infotarjeta.nombreProducto, infotarjeta.precio, infotarjeta.imagen, infotarjeta.id, infotarjeta.categoria)
                        element.appendChild(tarjetaPrductos)
                    }
                   
                });
            }
        })
    })
    .catch((error) => alert("Ocurrió un error " + error));

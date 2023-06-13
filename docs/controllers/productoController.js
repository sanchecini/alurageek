
import { clienteServices } from "../service/ProductServices.js"

const crearProducto = (producto , precio, imagen,id, categoria) => {
    const tarjeta = document.createElement("div")
    const url = new URL(window.location)
    const urlid = url.searchParams.get("id")
    const editar = url.searchParams.get("editar")
    const urlcategoria = url.searchParams.get("categoria")

    if(urlid && editar ){
        const contenidoTarjeta = 
        `<ul class="a-lists" data-id=${id}>
            <li>
                <div class = "-icon">
                            <i name="eliminar" class="fa-solid fa-trash a-icon -tarjetas type="button" id="eliminar" data-categoria=${categoria}></i>
                            <a id="editarIcon" class="fa-solid fa-pen a-icon -tarjetas" type="button"  data-categoria=${categoria} href="editarProducto.html?id=${id}&user=${urlid}&editar=${editar}"></a>
                </div>
                <img src="assets/img/${imagen}.png" alt="" class="a-img">
            </li>

            <li>
                <h2 class="a-title m-cards__title -secundaryColor">${producto}</h2>
            </li>
            <li>
                <h3 class="a-title  m-cards__descripcion -secundaryColor">$ ${precio}</h3>
            </li>
            <li><a class="a-button -link m-cards__button" href="detalleProducto.html?id=${id}&categoria=${categoria}">Ver Producto</a></li>
        </ul >`
        tarjeta.innerHTML = contenidoTarjeta;
        tarjeta.classList.add("m-cards")
        tarjeta.addEventListener("click", (event)=>{

        
            if(event.target.id == "eliminar"){
  
                clienteServices.eliminarProducto(id)
            }
        }); 
        
        return tarjeta;
    
    }else{
        const contenidoTarjeta = 
        `<ul class="a-lists">
            <li>
                <img src="assets/img/${imagen}.png" alt="" class="a-img">

            </li>
            <li>
                <h2 class="a-title m-cards__title -secundaryColor">${producto}</h2>
            </li>
            <li>
                <h3 class="a-title -left m-cards__descripcion -secundaryColor">$ ${precio}</h3>
            </li>
            <li><a class="a-button -link m-cards__button" href="detalleProducto.html?id=${id}&categoria=${categoria}">Ver Producto</a></li>
        </ul >`
        
        tarjeta.innerHTML = contenidoTarjeta;
        tarjeta.classList.add("m-cards")        
        return tarjeta;
  
    }

}


clienteServices.listarProductos()
    
    .then((datosServidorObj) => {

        const seccion = document.querySelectorAll("[data-servicios]");
        seccion.forEach(element => {
            if (element.dataset.servicios == "todoProducto") {
                datosServidorObj.forEach(infotarjeta => {
                    const tarjetaPrductos = crearProducto(infotarjeta.nombreProducto, infotarjeta.precio, infotarjeta.imagen, infotarjeta.id, infotarjeta.categoria)
                    element.appendChild(tarjetaPrductos)
                });
            } else {
                datosServidorObj.forEach(infotarjeta => {
                    if (element.dataset.servicios == infotarjeta.categoria) {
                        const tarjetaPrductos = crearProducto(infotarjeta.nombreProducto, infotarjeta.precio, infotarjeta.imagen, infotarjeta.id, infotarjeta.categoria)
                        element.appendChild(tarjetaPrductos)
                    }
                });
            }
        })
    })
    .catch((error) => alert("Ocurrió un error " + error));


    const btnAgregarProducto = document.getElementById("agregarProducto");
    const btnPromocion = document.getElementById("agregarProducto");
    const rediccionCrearproducto= ()=>{
            if(btnAgregarProducto){
                btnAgregarProducto.addEventListener("click" , (event)=>{
                    event.preventDefault()
                    const url = new URL(window.location)
                    const urlid = url.searchParams.get("id")
                    const editar = url.searchParams.get("editar")
                    if(urlid && urlid != null  && editar != null){
                        document.location.href = `registrarProducto.html?id=${urlid}&editar=${editar}`
                    }
                })
            }
            
}

rediccionCrearproducto()



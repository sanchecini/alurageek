import { validar } from "../js/validar.js";

const form = document.querySelector("form");
const formularios = document.querySelectorAll("[data-form]");


formularios.forEach(element => {

    const input = element.querySelectorAll("[data-tipo]")
    element.addEventListener("submit", (event) => {
        event.preventDefault();
        validar(input)
    })
});

       

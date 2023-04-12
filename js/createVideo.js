import { apiConnect } from "./ApiConnection.js";

const form = document.querySelector("[data-form]");

async function createdVideo(event){
    event.preventDefault();
    const title = document.querySelector("[data-title]").value;
    const url = document.querySelector("[data-url]").value;
    const img = document.querySelector("[data-img]").value;
    const description = Math.floor(Math.random() * 10).toString();

    try{
        await apiConnect.createVideo(url, img, title, description);
        window.location.href = "./../pages/envio-concluido.html";
    }catch (e){
        alert(e);
    }
}

form.addEventListener("submit", (event) => {
    createdVideo(event);
});
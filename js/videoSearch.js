import { apiConnect } from "./ApiConnection.js";
import cardConstruction from "./videosList.js";

const buttonSearch = document.querySelector("[data-buttonsearch]");

async function videoSearch(event){
    event.preventDefault();

    const searchData = document.querySelector("[data-search]").value;
    const get = await apiConnect.videosSerch(searchData);

    const list = document.querySelector("[data-list]");

    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    
    if(get.length > 0){
        get.forEach(element => {
            list.appendChild(cardConstruction(element.url, element.imagem, element.titulo, element.descricao))   
        });
    }else{
        list.innerHTML = `<h2 class="mensagem__titulo">Item de busca não encontrado.</h2>`;
    }
}

buttonSearch.addEventListener("click", (event) => {
    videoSearch(event);
})
import { apiConnect } from "./ApiConnection.js";

const list = document.querySelector('[data-list]');

export default function cardConstruction(url, img, title, description){
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${img}" alt="logo">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>`;

    return video;
}

async function videoList(){

    try{
        const apiList = await apiConnect.videosList();

        apiList.forEach(element => {
            list.appendChild(
                cardConstruction(
                    element.url,
                    element.imagem,
                    element.titulo,
                    element.descricao
                )); 
        });
    }catch{
        list.innerHTML = `<h2 class="mensagem__titulo">Não foi possível fazer o carregamento do video</h2>`;
    }
    
}


videoList();
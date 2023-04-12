async function videosList(){
    const connection = await fetch("http://localhost:3000/videos");
    const convertedConnection = await connection.json();
    
    return convertedConnection;
}

async function createVideo(url, img, title, description){
    
    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil visualizações`,
            url: url,
            imagem: img
        })
    });

    if(!connection.ok){
        throw new Error("Não foi possível enviar o vídeo.");
    }

    const convertedConnection = await connection.json();
    return convertedConnection;
}

async function videosSerch(query){
    const connection = await fetch(`http://localhost:3000/videos?q=${query}`)
    const convertedConnection = await connection.json();

    return convertedConnection;
}

export const apiConnect = {
    videosList,
    createVideo,
    videosSerch
}
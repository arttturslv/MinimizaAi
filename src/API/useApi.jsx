import {API} from './API.js'

export async function createShortURL (inputValue) {
    let data = null, error = null;
    
    try {
        const response = await fetch(`${API}`, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({URL: inputValue})
        });

        if(!response.ok) {
            throw new Error("Erro ao buscar dados");
        }

        const result = await response.json();
        data = result;

    } catch (err) {
        console.log("Erro no GET: ", err)
        error = err;
    } 

    return {data, error}
}


export async function getOriginalURL (shortLinkId) {
    let data = null, error = null;
    
    try {
        const response = await fetch(`${API}${shortLinkId}`, {
            method: 'GET',
        });

        if(!response.ok) {
            throw new Error("Erro ao buscar dados");
        }

        const result = await response.json();
        data = result.originalURL;

    } catch (err) {
        console.log("Erro no GET: ", err)
        error = err;
    } 

    return {data, error}
}

export async function deleteById(id) {
    try {
        const response= await fetch(`${API}${id}`, {
            method: 'DELETE',
        })

        if(!response.ok) throw new Error("Erro ao apagar URL")

    } catch (error) {
        console.log("Erro no delete: ", error);
    }
}
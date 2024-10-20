export function openURL(url) {
    window.open(url, "_blank")
}

const LOCAL_URLS = "allLinks";

/**
 * Recebe um array, transforma em string e armazena localmente
 * @param {*} arr é um arr
 */
export function storeLocally(arr) {
    try {
        if(!typeof(arr) === Array)  throw new Error("Item não é um array.")

        localStorage.setItem(LOCAL_URLS, JSON.stringify(arr))
    } catch (error) {
        console.log("Erro na função storeLocally: ", error)
    }
}

/**
 * @returns um array vazio ou com itens já em formato obj.
 */
export function retriveLocally() {
    try {
        let items = localStorage.getItem(LOCAL_URLS);
        items = items != null ? JSON.parse(items) : [];
        
        return items;
    } catch (error) {
        console.log("Erro na função retriveLocally: ", error)
    }
}

/**
 * 
 * @param {*} newItem Recebe um objeto JSON da URL, pega os itens locais e atualiza a lista,
 * modificando no localhost.
 * @returns A lista atualizada.
 */
export function addLocally(newItem) {
    console.log("add locally: ", newItem.shortLinkId)
    try {
        let items = retriveLocally();
        items.push(newItem);

        storeLocally(items);
        
        return items;
    } catch (error) {
        console.log("Erro na função addLocally: ", error)
    }
}

export function deleteLocally(Id) {
    try {
        let items = retriveLocally();
        let newArray = items.filter((item) => item.id != Id) || [];
        
        storeLocally(newArray);
        
        return newArray;
    } catch (error) {
        console.log("Erro na função deleteLocally: ", error)
    }
}

export function hasValidURL(value) {
    try {
        new URL(value);
        return true;
    } catch (error) {
        return false;
    }   
}

export function copyToClipboard(shortLinkId) {
    let currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl+shortLinkId);
}
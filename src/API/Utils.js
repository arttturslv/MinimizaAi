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
export function updateLocally(newItem) {
    console.log("update locally: ", newItem.shortLink)
    try {
        let items = retriveLocally();
        items.push(newItem);

        storeLocally(items);
        
        return items;
    } catch (error) {
        console.log("Erro na função updateLocally: ", error)
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
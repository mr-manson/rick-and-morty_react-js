
export const getApi = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            return false;
        }
        return await res.json();
    } catch (error) {
        console.error(error.message);
        return false
    }
}

export const getPageId = (url, param) => {
    const pos = url.lastIndexOf(param);
    return Number(url.slice(pos + param.length, url.length));
}
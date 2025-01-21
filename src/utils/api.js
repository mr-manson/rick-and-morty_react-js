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

/*
    const url = 'https://rickandmortyapi.com/api/character';

    (async () => {
        const body = await getApi(url);
        console.log(body);
    })();
*/

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error('Could not fetch.', res.status)
        }

        return await res.json()

    } catch (e) {
        console.error('Could not fetch.', e.message)
        return false
    }
}

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     console.log(body)
// })()


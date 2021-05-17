import {HTTP, HTTPS} from "../constants/api";
/**
 * change URL from HTTP to HTTPS
 * @param {string} url -url for changes
 * @return {String} - url with HTTPS
 * **/

export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url

    return result
}

/**
 * Fetch request
 * @param {string} url -url for request
 * @return {Promise} - Promise with request result
 * **/
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error('Could not fetch.', res.status)
            return false
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


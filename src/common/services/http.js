import CONSTANTS from '../constants';

/**
 * @description simple Http client
 */
const Http = {
    /**
     * @description makes http get request
     * @param {string} url path of url
     * @returns Promise with json response
     */
    get: async (url) => {
        const response = await fetch(`${CONSTANTS.API_BASE_URI}/${url}`);

        return await response.json();
    }
}

export default Http;
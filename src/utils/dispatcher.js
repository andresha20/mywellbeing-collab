import { ENDPOINTS } from "./data";
import fetcher from "./fetcher";

const dispatchEndpoint = async (endpoint, query, queryParams, params = {}, headerParams = {}) => {
    try {
        if (!ENDPOINTS[endpoint]) throw Error('Invalid endpoint');
        const METHOD = endpoint.split('-')?.[0];
        const reqObject = {
            method: METHOD,
            headers: {
                'Content-Type': 'application/json',
                ...headerParams
            },
            ...params
        }
        const queryStringURL = queryParams ? '?' + new URLSearchParams(queryParams).toString() : '';
        const response = await fetcher(`${ENDPOINTS[endpoint]}${query ?? ''}${queryStringURL}`, reqObject);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export default dispatchEndpoint;
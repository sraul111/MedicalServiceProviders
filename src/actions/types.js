export const FETCH_MEDISERVICES = 'FETCH_MEDISERVICES';
export const FETCH_MEDIPROVIDERS = 'FETCH_MEDIPROVIDERS';
export const FETCH_ERROR = 'FETCH_ERROR';



export function fetchErrors(error) {
    return {
        type: FETCH_ERROR,
        error: error
    }
}


import * as actions from '../actions/types';

const initialState = {
    pending: false,
    mservices: [],
    mservices: {},
    error: null
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_MEDISERVICES: 
            return {
                ...state,
                pending: false,
                mservices: action.payload
            }
        case actions.FETCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }

}


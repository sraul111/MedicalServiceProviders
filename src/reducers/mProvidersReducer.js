import * as actions from '../actions/types';

const initialState = {
    pending: false,
    mproviders: [],
    mproviders: {},
    error: null
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_MEDIPROVIDERS:
            return {
                ...state,
                pending: false,
                mproviders: action.payload
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


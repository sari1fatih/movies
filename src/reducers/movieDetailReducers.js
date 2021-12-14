import {
    MOVIE_DETAIL_LIST_REQUEST,
    MOVIE_DETAIL_LIST_SUCCESS,
    MOVIE_DETAIL_LIST_FAIL
} from '../constants/movieDetailConstants';

export const movieDetailReducers = (state = { data: [] }, action) => {
    switch (action.type) {
        case MOVIE_DETAIL_LIST_REQUEST:
            return { ...state, loading: true, data: [] };

        case MOVIE_DETAIL_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case MOVIE_DETAIL_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

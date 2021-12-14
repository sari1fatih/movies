import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,

    MOVIE_LIST_MORE_REQUEST,
    MOVIE_LIST_MORE_SUCCESS,
    MOVIE_LIST_MORE_FAIL
} from '../constants/movieConstants';
export const movieListReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case MOVIE_LIST_REQUEST:
            return { ...state, loading: true, movies: [] };

        case MOVIE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.results,
                page: action.payload.page,
            };
        case MOVIE_LIST_MORE_REQUEST:
            return { ...state, loadingMore: true };
        case MOVIE_LIST_MORE_SUCCESS:
            return {
                ...state,
                loadingMore: false,
                movies: [...state.movies, ...action.payload.results],
                page: action.payload.page,
            };
        case MOVIE_LIST_FAIL:
            return { ...state, loading: false, loadingMore: false, error: action.payload.status_message };

        default:
            return state;
    }
};

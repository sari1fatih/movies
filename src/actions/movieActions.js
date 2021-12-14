import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,

    MOVIE_LIST_MORE_REQUEST,
    MOVIE_LIST_MORE_SUCCESS,
    MOVIE_LIST_MORE_FAIL
} from '../constants/movieConstants';

export const listMovies = (keyword = '', page = 1) => async (
    dispatch
) => {
    dispatch({
        type: MOVIE_LIST_REQUEST,
    });
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=091d8a3bea53979b43c8d9a0115d1f87&language=tr-TR&page=${page}`)
    const movies = await request.json();
    if (movies?.success == false) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload: movies,
        });
    }
    else {
        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: movies,
        });
    }
};

export const listMoreMovies = (keyword = '', page = 1) => async (
    dispatch
) => {
    dispatch({
        type: MOVIE_LIST_MORE_REQUEST,
    });
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=091d8a3bea53979b43c8d9a0115d1f87&language=tr-TR&page=${page}`)
    const movies = await request.json();
    if (movies?.success == false) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload: movies,
        });
    }
    else {
        dispatch({
            type: MOVIE_LIST_MORE_SUCCESS,
            payload: movies,
        });
    }
};
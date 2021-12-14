import {
    MOVIE_DETAIL_LIST_REQUEST,
    MOVIE_DETAIL_LIST_SUCCESS,
    MOVIE_DETAIL_LIST_FAIL
} from '../constants/movieDetailConstants';

export const moviesDetail = (keyword = '') => async (
    dispatch
) => {
    dispatch({
        type: MOVIE_DETAIL_LIST_REQUEST,
    });
    var request = await fetch(`https://api.themoviedb.org/3/movie/${keyword}?api_key=091d8a3bea53979b43c8d9a0115d1f87&language=tr-TR`)
    const movieDetail = await request.json();

    request = await fetch(`https://api.themoviedb.org/3/movie/${keyword}/credits?api_key=091d8a3bea53979b43c8d9a0115d1f87&language=tr-TR`)
    const team = await request.json();
    const data = { movieDetail, team }

    dispatch({
        type: MOVIE_DETAIL_LIST_SUCCESS,
        payload: data,
    });

};

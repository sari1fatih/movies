import React, { useEffect } from 'react'
import CardGrid from '../../components/CardGrid'
import { Box, Grid, Button, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { listMovies, listMoreMovies } from '../../src/actions/movieActions';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
const Movie = () => {
    const dispatch = useDispatch();

    const movieList = useSelector((state) => state.movieList);
    const { loading, loadingMore, error, movies, page } = movieList;
    useEffect(() => {
        if (movies.length == 0) {
            dispatch(listMovies('', 1));
            return () => {
                dispatch(listMovies('', 1));
            }
        }

    }, [])

    return (
        <>
            {loading ?
                <Loading /> :
                !!error ?
                    <Error error={error} />
                    :
                    <div>
                        <Box sx={{ flexGrow: 1 }}>

                            <Grid container columns={{ xs: 4, sm: 3, md: 12 }}
                                alignItems="center" flexDirection="column" >
                                <Grid container columns={{ xs: 4, sm: 5, md: 12 }}
                                    style={{ width: '60%', marginTop: '10px', marginBottom: '20px', alignItems: "center", display: "flex" }}
                                    spacing={2}
                                >
                                    {movies?.map((item, index) => {
                                        return (
                                            <Grid key={index} item columns={{ xs: 4, sm: 3, md: 12 }}>
                                                <CardGrid item={item} key={index} />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                {!!loadingMore == true && (
                                    <Loading />
                                )}

                                <Button onClick={() => {
                                    dispatch(listMoreMovies('', page + 1));
                                }} variant="contained" fullWidth style={{ textTransform: 'none', fontSize: 20, fontWeight: 'bold' }}>Daha Fazla Yükle</Button>
                            </Grid>
                        </Box>

                    </div>
            }

        </>
    )
}


export default Movie
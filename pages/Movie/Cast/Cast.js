import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography, CircularProgress, Card, CardMedia } from '@mui/material';
import helper from '../../../public/utils/helper';
import { useRouter } from 'next/router'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { moviesDetail } from '../../../src/actions/movieDetailActions';

export default function Cast() {
    const router = useRouter()
    const dispatch = useDispatch();

    const movieDetail = useSelector((state) => state.movieDetail);

    useEffect(() => {
        if (!!router.query?.movieID) {
            dispatch(moviesDetail(router.query?.movieID));
            return () => {
                dispatch(moviesDetail(router.query?.movieID));
            }
        }
    }, [router.query?.movieID])

    return (
        <div>
            <Box
                sx={{
                    marginTop: '1%',
                    width: '100%',
                    height: 150
                }}
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.6) 100%),url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetail?.movieDetail?.poster_path})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',
                }}
            >
                <Grid container sx={{ height: 180 }}>
                    <Grid container xs={12} md={5} lg={4} alignContent="center" justifyContent="center">
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                height="100"
                                width='100%'
                                image={`https://www.themoviedb.org/t/p/w116_and_h174_face${movieDetail?.data?.movieDetail?.poster_path}`}
                                alt="green iguana"
                                style={{ objectFit: 'fill' }}
                            />
                        </Card>
                        <Grid item xs={12} md={5} lg={8} >
                            <Typography variant="h5" style={{ marginTop: '2%', marginLeft: '2%' }} gutterBottom color="common.white">
                                {movieDetail?.data?.movieDetail?.title}
                            </Typography>

                            <Typography onClick={() => {
                                router.back()
                            }} gutterBottom component="div" style={{ marginTop: '2%', marginLeft: '3%', color: 'gray', fontSize: 20, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                Sayfaya Dön
                            </Typography>
                        </Grid>

                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ width: '100%', marginLeft: '3%' }}>
                <Grid container spacing={2} alignItems="center"   >
                    <Grid item xs={6}>
                        <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    display: 'flex',

                                }}
                            >
                                <Typography variant="h6" style={{ marginTop: '2%', marginLeft: '3%' }} gutterBottom >
                                    Oyuncu Kadrosu
                                </Typography>
                                <Typography variant="h6" style={{ marginTop: '2%', marginLeft: '3%', color: 'gray', }} gutterBottom component="div">
                                    {movieDetail?.data?.team?.cast?.length}
                                </Typography>
                            </Box>


                            {movieDetail?.data?.team?.cast.map((item, index) => {
                                if (!!item?.profile_path) {
                                    return (<ListItem>
                                        <ListItemAvatar>
                                            <CardMedia
                                                component="img"
                                                height="132"
                                                width='132'
                                                image={`https://www.themoviedb.org/t/p/w132_and_h132_face/${item.profile_path}`}
                                                alt="green iguana"
                                                style={{ objectFit: 'fill' }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText sx={{ padding: 0, margin: 0, marginLeft: '10px' }}
                                            primary={
                                                <Typography gutterBottom component="div" style={{ marginRight: '4px', fontWeight: 'bold', fontSize: 22, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                    {item.name}
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography gutterBottom component="div" style={{ marginRight: '4px', fontSize: 18, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                    {item.character}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>)
                                }

                            })}
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    display: 'flex',

                                }}
                            >
                                <Typography variant="h6" style={{ marginTop: '2%', marginLeft: '3%' }} gutterBottom >
                                    Oyuncu Kadrosu
                                </Typography>
                                <Typography variant="h6" style={{ marginTop: '2%', marginLeft: '3%', color: 'gray', }} gutterBottom component="div">
                                    {movieDetail?.data?.team?.cast?.length}
                                </Typography>
                            </Box>


                            {movieDetail?.data?.team?.cast.map((item, index) => {
                                if (!!item?.profile_path) {
                                    return (
                                        <>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <CardMedia
                                                        component="img"
                                                        height="132"
                                                        width='132'
                                                        image={`https://www.themoviedb.org/t/p/w132_and_h132_face/${item.profile_path}`}
                                                        alt="green iguana"
                                                        style={{ objectFit: 'fill' }}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText sx={{ padding: 0, margin: 0, marginLeft: '10px' }}
                                                    primary={
                                                        <Typography gutterBottom component="div" style={{ marginRight: '4px', fontWeight: 'bold', fontSize: 22, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                            {item.name}
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography gutterBottom component="div" style={{ marginRight: '4px', fontSize: 18, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                            {item.character}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        </>
                                    )
                                }

                            })}
                        </List>
                    </Grid>

                </Grid>


            </Box>

        </div>
    )
}

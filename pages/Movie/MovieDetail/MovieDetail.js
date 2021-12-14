import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Grid, Typography, CircularProgress, Card, CardMedia } from '@mui/material';
import helper from '../../../public/utils/helper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch, useSelector } from 'react-redux';
import { moviesDetail } from '../../../src/actions/movieDetailActions';
import Loading from '../../../components/Loading'
import Error from '../../../components/Error';
export default function MovieDetail(props) {

    const router = useRouter()

    const dispatch = useDispatch();
    const movieDetail = useSelector((state) => state.movieDetail);
    const { loading, error, data } = movieDetail;


    useEffect(() => {
        if (!!router.query?.movieID) {
            dispatch(moviesDetail(router.query?.movieID));
            return () => {
                dispatch(moviesDetail(router.query?.movieID));
            }
        }
    }, [router.query?.movieID])

    const getSelectedCrew = () => {
        var returnData = []
        data?.team?.crew?.filter((item) => {
            if (item.job == 'Screenplay' || item.job == 'Director' || item.job == 'Producer') {
                if (returnData?.findIndex(o => (o.job == item.job)) == -1) {
                    returnData.push(item)
                }
            }
        })

        returnData?.filter((item) => {
            var job = ""
            var skill = data?.team?.crew.filter(o => o.name === item.name)
            if (skill.length > 1) {
                skill.map((x) => {
                    if (job.indexOf(x.job) == -1) {
                        job += x.job + ','
                    }

                })
                job = job.substring(0, job.length - 1)
                item.job = job
            }
        })

        return returnData

    };

    return (
        <>
            {loading ?
                <Loading /> :
                <div>
                    <Box
                        sx={{
                            marginTop: '2%',
                            width: '100%',
                            height: 510
                        }}
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.6) 100%),url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data?.movieDetail?.poster_path})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Grid container sx={{ height: 510 }}>
                            <Grid container xs={12} md={5} lg={4} alignContent="center" justifyContent="center">
                                <Card sx={{ maxWidth: 300 }}>
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        width='100%'
                                        image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data?.movieDetail?.poster_path}`}
                                        alt="green iguana"
                                        style={{ objectFit: 'fill' }}
                                    />

                                </Card>
                            </Grid>
                            <Grid container xs={12} md={7} lg={8} flexDirection="column" alignContent="flex-start" justifyContent="center">
                                <Grid item xs={12} md={1} lg={1} >
                                    <Typography gutterBottom color="common.white" style={{ fontSize: 30 }}>

                                    </Typography>
                                </Grid>
                                <Grid container xs={12} md={11} lg={11} >
                                    <Box sx={{ width: '100%', maxWidth: 700 }}>
                                        <Typography gutterBottom color="common.white" style={{ fontSize: 30 }}>
                                            {data?.movieDetail?.title} ({helper.dateTrans.getDate(data?.movieDetail?.release_date)})
                                        </Typography>
                                        <Grid container flexDirection="row"  >
                                            <Typography gutterBottom component="div" color="common.white" sx={{ borderWidth: 2, padding: '2px', borderStyle: 'solid' }} style={{ fontSize: 18, fontFamily: 'Times New Roman' }}>
                                                +18
                                            </Typography>
                                            <Typography gutterBottom component="div" color="common.white" style={{ marginLeft: '4px', fontSize: 18, fontFamily: 'Times New Roman' }}>
                                                {helper.dateTrans.modifiTimeSmall(data?.movieDetail?.release_date)} - {helper.stringFormat.getArraytoText(data?.movieDetail?.genres)} - {helper.dateTrans.getHoursMinutes(data?.movieDetail?.runtime)}
                                            </Typography>
                                        </Grid>

                                        <Grid container flexDirection="row" style={{ marginTop: '1%', marginBottom: '1%' }} >
                                            <Typography gutterBottom component="div" color="common.white" style={{ marginRight: '4px', fontSize: 18, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                Genel Değerlendirme
                                            </Typography>
                                            <Box sx={{ position: 'relative', display: 'inline-flex', backgroundColor: 'black', borderRadius: '50%' }}>
                                                <CircularProgress variant="determinate" value={84}
                                                    color={
                                                        (data?.movieDetail?.vote_average == 0) || (data?.movieDetail?.vote_average * 10 <= 100 && data?.movieDetail?.vote_average * 10 >= 70) ?
                                                            "success" :
                                                            (data?.movieDetail?.vote_average * 10 < 70 && data?.movieDetail?.vote_average * 10 > 40) ?
                                                                "primary" :
                                                                "warning"
                                                    }
                                                    style={{
                                                        'color': (data?.movieDetail?.vote_average == 0) || (data?.movieDetail?.vote_average * 10 <= 100 && data?.movieDetail?.vote_average * 10 >= 70) ?
                                                            "green" :
                                                            (data?.movieDetail?.vote_average * 10 < 70 && data?.movieDetail?.vote_average * 10 > 40) ?
                                                                "yellow" :
                                                                "red"
                                                    }}
                                                />
                                                <Box
                                                    sx={{
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',

                                                    }}
                                                >
                                                    <Typography variant="caption" component="div" color="text.secondary" sx={{ color: 'white' }}>
                                                        {data?.movieDetail?.vote_average != 0 ? data?.movieDetail?.vote_average * 10 : 84}
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: 8 }}>
                                                        %
                                                    </Typography>
                                                </Box>
                                            </Box>

                                        </Grid>
                                        <Typography variant="body1" gutterBottom color="common.white">
                                            {data?.movieDetail?.overview}
                                        </Typography>
                                        <Box sx={{ flexGrow: 1, marginTop: '3%' }}>
                                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                                {(getSelectedCrew()).map((item, index) => (
                                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                                        <Typography gutterBottom component="div" color="common.white" style={{ marginRight: '4px', fontSize: 18, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography gutterBottom component="div" style={{ marginRight: '4px', color: 'lightGray', fontSize: 16, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                            {item.job}
                                                        </Typography>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            display: 'flex',

                        }}
                    >
                        <Typography variant="h4" style={{ marginTop: 4, marginRight: 13 }} gutterBottom component="div">
                            Başrol Oyuncuları
                        </Typography>
                        <Typography onClick={() => {
                            router.push({
                                pathname: '/Movie/Cast',
                                query: { movieID: router.query?.movieID },
                            })
                        }} variant="h4" style={{ marginTop: 4, color: 'gray', }} gutterBottom component="div">
                            (Tüm Ekibi Gör)
                        </Typography>
                    </Box>
                    <ImageList sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingRight: 3
                    }}>
                        {data?.team?.cast?.map((item, index) => {
                            if (!!item?.profile_path) {
                                return (

                                    <ImageListItem style={{ marginLeft: 3 }} key={item.profile_path}>
                                        <Card sx={{ width: 300 }}>

                                            <CardMedia
                                                component="img"
                                                height="200"
                                                width='600'
                                                image={`https://www.themoviedb.org/t/p/w276_and_h350_face/${item.profile_path}`}
                                                alt="green iguana"
                                                style={{ objectFit: 'fill' }}
                                            />

                                        </Card>

                                        <Box sx={{ flexGrow: 1, marginTop: '3%' }} alignItems='center' justifyContent='center' >
                                            <Typography gutterBottom component="div" style={{ marginRight: '4px', fontWeight: 'bold', fontSize: 18, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                {item.name}
                                            </Typography>
                                            <Typography gutterBottom component="div" style={{ marginRight: '4px', color: 'gray', fontSize: 16, marginTop: '1%', fontFamily: 'Times New Roman' }}>
                                                {item.character}
                                            </Typography>
                                        </Box>

                                    </ImageListItem>
                                )
                            }
                        })}
                    </ImageList>
                </div>
            }
        </>
    )
}


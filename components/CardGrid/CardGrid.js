import * as React from 'react';
import { Button, CardActionArea, CircularProgress, Typography, Card, CardContent, CardMedia } from '@mui/material';
import helper from '../../public/utils/helper';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
export default function CardGrid({ item }) {
    const router = useRouter()
    return (
        <Card onClick={() => {
            router.push({
                pathname: '/Movie/MovieDetail',
                query: { movieID: item.id },
            })
        }} sx={{ width: '182px', height: '373px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="273"
                    width="180"
                    image={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt="green iguana"

                />

                <CardContent>
                    <Box sx={{ position: 'absolute', display: 'inline-flex', backgroundColor: 'black', borderRadius: '50%', top: '240px' }}>
                        <CircularProgress variant="determinate" value={item.vote_average != 0 ? item.vote_average * 10 : 84}
                            color={
                                (item.vote_average == 0) || (item.vote_average * 10 <= 100 && item.vote_average * 10 >= 70) ?
                                    "success" :
                                    (item.vote_average * 10 < 70 && item.vote_average * 10 > 40) ?
                                        "primary" :
                                        "warning"
                            }
                            style={{
                                'color': (item.vote_average == 0) || (item.vote_average * 10 <= 100 && item.vote_average * 10 >= 70) ?
                                    "green" :
                                    (item.vote_average * 10 < 70 && item.vote_average * 10 > 40) ?
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
                                {item.vote_average != 0 ? item.vote_average * 10 : 84}
                            </Typography>
                            <Typography sx={{ color: 'white', fontSize: 8 }}>
                                %
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} variant="body2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {helper.dateTrans.modifiTimeSmall(item.release_date)}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>

    );
}
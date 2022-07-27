import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Box } from '@mui/material';
import '../../styles/cardBlog.css';
import Data from '../Data'
import {useSelector}  from 'react-redux'



export default function CardBlog() {
    
    // const user = useSelector(store => store.usersReducers.user)
    // //console.log(user)



    return (
        <>
            <div className='conteinerCards'>
                {Data.map((data, index) => (
                    <Card className='card-conteiner_B' sx={{ maxWidth: 645, flexWrap: 'nowrap' }} key={index}>
                        <Typography sx={{ maxWidth: 145, display: 'flex', justifyContent: 'flex-start', }} gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Box sx={{ maxWidth: 645, display: 'flex', justifyContent: 'space-between' }} >
                            <Box>
                                <CardMedia className='img-blog_B'
                                    component="img"
                                    height="140"
                                    image={data.image}
                                    alt={data.name}
                                />
                            </Box>
                            <Box className='box-conteiner-info-cardAction_B' sx={{ maxWidth: 300, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                                <CardContent className='text-blog_B'>
                                    <Typography sx={{ marginBottom: 0.5, marginRight: 1 }} variant="body2" color="text.secondary">
                                        {data.country}
                                    </Typography>
                                </CardContent>
                                <CardActions className='buttom-blog_B' >
                                    <Button sx={{ color: 'black' }} size="small" color="primary">
                                        Show More
                                    </Button>
                                </CardActions>
                            </Box>
                        </Box>
                    </Card>
                ))
                }
            </div>
        </>
    );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Box } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom'
import '../../styles/cardBlog.css';
import Data from '../Data'



export default function CardBlog() {




    return (
        <>
            <div className='conteinerCards'>
                {Data.map((data, index) => (
                    <Card className='card-conteiner_B' sx={{ maxWidth: 645, flexWrap: 'nowrap' }} key={index}>

                        <Box className='boxCardRP' >
                        <Typography className='titleCardRP'>
                            {data.name}
                            </Typography>
                                <CardMedia className='img-blog_B'
                                    component="img"
                                    height="140"
                                    image={data.image}
                                    alt={data.name}
                                />
                            
                        </Box>
                            <Box className='boxContainerRP' sx={{ maxWidth: 300, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                                <CardContent className='text-blog_B'>
                                    <Typography >
                                        {data.country}
                                    </Typography>
                                </CardContent>
                                <CardActions className='buttom-blog_B' >
                                        <LinkRouter to={`'${Data._id}`}>
                                            <Button sx={{ color: 'black' }} size="small" color="primary">
                                                Show More
                                            </Button>
                                        </LinkRouter>
                                    </CardActions>
                            </Box>
                          

                    </Card>
                ))
                }
            </div>
        </>
    );
}

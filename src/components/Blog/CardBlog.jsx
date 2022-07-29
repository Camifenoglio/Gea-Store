import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Box } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import blogActions from '../../redux/actions/blogActions'
import Data from '../Data'
import '../../styles/cardBlog.css';


export default function CardBlog() {

    const dispatch = useDispatch();
    const post = useSelector(store => store.blogReducer.post);
    console.log(post)

    useEffect(() => {
        const blog = dispatch(blogActions.getPosts())
        console.log(blog)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (


        <div className='blogContainer_F'>
            <div className='conteinerCards'>
                {post.map((onepost =>(
            
                <Card className='card-conteiner_B' sx={{ maxWidth: 645, flexWrap: 'nowrap' }} key={onepost._id}>
                        <Box className='boxCardRP' >
                            <Typography className='titleCardRP'>
                                {onepost.title}
                            </Typography>
                            <CardMedia className='img-blog_B'
                                component="img"
                                height="140"
                                image={onepost.fileUpload}
                                alt={onepost.name}
                            />
                        </Box>
                        <Box className='boxContainerRP' sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                            <CardContent className='text-blog_B'>
                                <Typography >
                                    {onepost.description}
                                </Typography>
                            </CardContent>

                        </Box>
                    </Card>
                
                
                
                )))}
                


                {Data.map((data, index) => (
                    <Card className='card-conteiner_B' sx={{ maxWidth: 645, flexWrap: 'nowrap' }} key={index}>
                        <Box className='boxCardRP' >
                            <Typography className='titleCardRP'>
                                {data.title}
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

                        </Box>
                        <Box className='boxContainerRP' sx={{ maxWidth: 300, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                            <CardContent className='text-blog_B'>
                                <Typography >
                                    {data.country}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </div>
        </div>
    )
}






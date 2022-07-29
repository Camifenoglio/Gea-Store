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
                {post.map((onepost => (

                    <div className='card-conteiner_B' sx={{ maxWidth: 645, flexWrap: 'nowrap' }} key={onepost._id}>
                        <div className='boxCardRP' >
                            <div className='img-conteiner'>
                                <img className='img-blog_B'
                                    src={onepost.fileUpload}
                                    alt={onepost.name} />
                            </div>
                            <div className='img-description'>

                                <h2 className='titleCardRP'>
                                    {onepost.title}
                                </h2>
                                <p className='description'>{onepost.description}</p>
                            </div>
                        </div>
                    </div>
                )))}

            </div>
        </div>
    )
}






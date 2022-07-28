import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Box } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom'
import '../../styles/cardBlog.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Data from '../Data';
import blogActions from '../../redux/actions/blogActions'

export default function CardBlog() {

    const dispatch = useDispatch();
    const post = useSelector(store => store.blogReducer.post);
    console.log(post)

    useEffect(() => {
        const blog = dispatch(blogActions.getPosts())
        console.log(blog)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // async function blogs() {

    //     const res = await dispatch(blogActions.getPosts())
    //     console.log(res)
    // }


    // const selectCategoryBtn = async (event) => {
    //     setCategory(event.target.value)
    //     const selectCategory = category
    //     console.log(selectCategory)

    //     if (event.target.value === 'All Categories') {
    //         dispatch(blogActions.getPosts())
    //         setReload(!reload)
    //     }
    // }


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

            {/* <div className='conteinerCards'>

    
            </div> */}


            {/* // <Card className='card-conteiner_B' sx={{ maxWidth: 645, flexWrap: 'nowrap' }} key={index}>

                    //     <Box className='boxCardRP' >
                    //         <Typography className='titleCardRP'>
                    //             {blog.title}
                    //         </Typography>
                    //         <CardMedia className='img-blog_B'
                    //             component="img"
                    //             height="140"
                    //             image={blog.fileUpload}
                    //             alt={blog.title}
                    //         />

                    //     </Box>
                    //     <Box className='boxContainerRP' sx={{ maxWidth: 300, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                    //         <CardContent className='text-blog_B'>
                    //             <Typography >
                    //                 {blog.description}
                    //             </Typography>
                    //         </CardContent>
                    //         <CardActions className='buttom-blog_B' >
                    //             <LinkRouter to={`/blog/${blog._id}`}>
                    //                 <Button sx={{ color: 'black' }} size="small" color="primary">
                    //                     Show More
                    //                 </Button>
                    //             </LinkRouter>
                    //         </CardActions>
                    //     </Box>


                    // </Card> */}




        </>
    );
}

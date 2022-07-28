import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux/es/exports';

export default function ImgMediaCard() {

const product = useSelector(store => store.productReducers.products)
console.log(product)
    return (

    <>
    {product.favorite ? product.map((product) 
        (<Card key={product._id} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>)
            ):

            <h1>No likes in your list yet</h1>}  
        </>     
    );
}

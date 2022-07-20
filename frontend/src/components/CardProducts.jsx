import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../styles/cardProducts.css'

export default function CardProducts() {
  return (
    <div>
      <input className="input-busqueda" placeholder="search"/>
      <Card className='BL-card-products'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://static6.depositphotos.com/1001599/647/i/450/depositphotos_6477165-stock-photo-fire-swirl-letter-y.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography className='BL-NyP-products'>
              <h4>Price:</h4>
              <h4>Name:</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    );
}
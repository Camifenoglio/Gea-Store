import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import '../../styles/cardBlog.css'
import Data from '../Data'

export default function CardBlog() {
    return (
        <>
            <div className='conteinerCards'>
                {Data.map((Data) => (
                    <Card sx={{ maxWidth: 445, flexWrap: 'nowrap' }} key={Data._id}>
                        <CardActionArea>
                            <Typography sx={{ maxWidth: 145, display:'flex', justifyContent:'flex-start', }}  gutterBottom variant="h5" component="div">
                                {Data.name}
                            </Typography>
                            <Box sx={{ maxWidth: 445, display:'flex', justifyContent:'space-between' }} >
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={Data.image}
                                        alt={Data.name}
                                    />
                                </Box>
                                <Box sx={{ maxWidth: 145, display:'flex', justifyContent:'flex-end', alignItems:'flex-end', flexDirection:'column' }}>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {Data.country}
                                        </Typography>
                                    </CardContent>
                                <CardActions >
                                    <Button  size="small" color="primary">
                                        Show More
                                    </Button>
                                </CardActions>
                            </Box>
                        </Box>
                        </CardActionArea>
                    </Card>
                ))
                }
            </div>

        </>



    );
}

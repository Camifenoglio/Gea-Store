import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import '../../styles/cardDetailBlog.css'
import Data from '../Data'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardDetailBlog() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Box className='conteiner_B'>
            {/* {Data.map((Data) => ( */}

            <Card sx={{ maxWidth: 745, maxHeight: 2045, margin: 5 }}>

                <CardMedia className='img-conteiner_B'
                    component="img"
                    height="194"
                    image="https://tn.com.ar/resizer/vFwcoi5inEccL8Ulut_oq75_67c=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/DGFMQ72OJXWSODJGLFHPP7BMTU.jpg"
                    alt="Gea Store"
                />

                <Box className='conteiner'>
                    <Box className='conteiner-text1-B'>
                        <CardContent className='conteiner-text2_B'>
                            <Typography className='text' variant="body2" color="text.secondary">
                            River: Nacho Scocco reveló detalles de su nueva alimentación para "seguir jugando y no largar todo".
                            </Typography>
                            <CardHeader className='card-header-detailBlog_B'
                            avatar={
                                <Avatar sx={{ bgcolor: red[500], height: 60, width: 60 }} aria-label="recipe">
                                    R
                                </Avatar>
                            }

                            title="Name"
                            subheader="September 14, 2016"
                        />
                        </CardContent>

                    </Box>

                </Box>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                        Tres desgarros seguidos en el mismo gemelo le hicieron pensar a Nacho Scocco en largar el fútbol. La lesión no lo dejaba en paz y los últimos meses de 2018 y los primeros meses de 2019 fueron muy complicados para el delantero de 34 años que tuvo que cambiar casi por completo su alimentación para poder seguir jugando en River.
                        </Typography>
                        <Typography paragraph>
                        "Fue la misma lesión que no se terminaba de curar. En un momento que no le encontraba la vuelta se me cruzó por la cabeza largar todo", dijo Scocco en una entrevista con el diario Olé, aunque luego encontró respuestas viajando a España para ver a un médico y un nutricionista especialistas en lesiones musculares.
                        </Typography>
                        <Typography paragraph>
                        "El viaje a España fue mi último manotazo de ahogado para encontrar una solución. Me acomodaron mucho en cuanto a la alimentación y ahora realmente me siento muy bien", contó Nacho, que en mayo cumplirá 35 años.
                        </Typography>
                        <Typography>
                        Entre las cosas que el delantero ya no puede comer están "lo dulce, la harina de trigo y los lácteos", según contó. Además, reveló que ahora "tengo que comer mucha comida para celíacos, muchas cosas endulzadas con stevia y después, en lugar de lácteos, ahora me alimento a base de queso de cabra".
                        </Typography>
                        <Typography>
                        El futbolista de River asegura que siente cambios importantes desde que modificó su alimentación: "Siento una diferencia en cuanto a lo físico y a la recuperación de un entrenamiento a otro. Una mejora. Sobre todo en la pretemporada que fue corta y exigente. También es mejor la recuperación post partido".
                        </Typography>
                        
                    </CardContent>
                </Collapse>
            </Card>
            {/* ))
     }  */}
        </Box>

    );
}

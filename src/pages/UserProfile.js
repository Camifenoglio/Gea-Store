import React from 'react';
import '../App';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import BtnSignOut from '../components/SignIn-Out/Btn-SignOut';

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

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const user = useSelector(store => store.usersReducers.user)
    console.log(user)
    return (
<>
{ user ?
        <Card sx={{ margin: '5rem', backgroundImage: 'url("https://i.imgur.com/c6Ttmlb.jpg")' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#6D8C3E' }} aria-label="recipe">
                        {user.fullName.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={user.fullName}
                subheader="Thanks for your purchase!"
            />
            <CardMedia
                component="img"
                height="100%"
                image={user.imageUser}
                alt={user.image}
            />
                <CardActions disableSpacing>
                <BtnSignOut/>
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
                    <Typography paragraph>My Favorite</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card> : 
                <CardContent sx={{ margin: '5rem', backgroundImage: 'url("https://i.imgur.com/c6Ttmlb.jpg")' }}>
                    
                    <Typography paragraph>
                        Please Sign In to see your profile
                    </Typography>
                </CardContent>
        }
</>
    );
}

// REACT
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';

//MUI
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

// STYLES
import '../App';

//COMPONENTS
import BtnSignOut from '../components/SignIn-Out/Btn-SignOut';
import UserLikes from '../components/UserAndAdmin/UserLikes';


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
    //console.log(user)
    return (
<>
{ user ?
        <Card sx={{ margin: '5rem', backgroundImage: 'url("https://i.imgur.com/s7vvi05.png")', borderRadius: '30px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#6D8C3E' }} aria-label="recipe">
                        {user.fullName.charAt(0)}
                    </Avatar>
                }
                title={user.fullName}
                subheader="Thanks for your purchase!"
            />
            <Avatar sx={{ width: 200, height: 200, margin: 'auto', marginTop: '1rem' }} 
                src={user.imageUser}
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
                    <CardContent>
                        <UserLikes/>
                    </CardContent>
                </CardContent>
            </Collapse>
        </Card> : 
                <div className='SignInCallToAction_F'>
                    <LinkRouter to='/sign' className='underline-none'>
                        <h1 className='callToActionUserProfile_F'>Please Sign In to see your profile</h1>
                        <img className='imgProfileAction_F' src='https://i.imgur.com/v3tmtDk.png' alt='plant'/>
                    </LinkRouter>

                </div>
        }
</>
    );
}

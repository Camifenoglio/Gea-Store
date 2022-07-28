import * as React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux'

//STYLES
import '../styles/navbar.css'
import userActions from '../redux/actions/userActions';
// ['Home', 'Products', 'About Us', 'Blog']


const pages = [
    {
        to: '/',
        name: 'Home'
    },
    {
        to: '/products',
        name: 'Products'
    },
    {
        to: '/aboutus',
        name: 'About Us'
    },
    {
        to: '/blog',
        name: 'Blog'
    }
];
const settings = [
    {
        to: '/user',
        name: 'Profile'
    },
    {
        to: '/sign',
        name: 'Sign'
    }
];
const NavBar = (props) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const count = useSelector(store => store.shoppingReducers.cart);

const settingProfile = [
    {
        to: '/user',
        name: 'Profile'
    },
    {
        to: '/buys',
        name: 'Buying History'
    }

]
    const user = useSelector(store => store.usersReducers.user)
    //console.log(user)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const ScrollToTop = () =>  {
        window.scroll({
            top: 0,
            behavior: "smooth",
            left:0
        })
    }
    return (
        <AppBar position="static" className='navbarColor_F'>
            <Container maxWidth="xl" className='navbarFlex_F'>
                <Toolbar disableGutters>

                    {/* MENU HAMBURGUESA */}
                    <Box sx={{ display: { xs: 'flex', md: 'none', backgroundColor: '#A4BF41' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            className='pagesTypography_F'
                        >
                            <MenuIcon className='navbarIconMenu_F' />
                        </IconButton>
                        <img src='https://i.imgur.com/UFZBBG3.png' className='logoContainer_F' alt='logoGea' style={{ height: "4rem" }} />

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}

                        >
                            {pages.map((page, index) => (
                                <LinkRouter
                                    to={page.to}
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    className='underline-none'
                                >
                                    <MenuItem className='pagesTypography_F'>
                                        <Typography style={{ color: '#6D8C3E', fontWeight: 700, }} textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            ))}
                        </Menu>
                    </Box>

                    {/* GRANDE */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src='https://i.imgur.com/UFZBBG3.png' className='logoContainer_F' alt='logoGea' style={{ height: "5rem" }} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <LinkRouter
                                to={page.to}
                                key={index}
                                onClick={handleCloseNavMenu}
                                className='underline-none'
                            >
                                <Button
                                    sx={{ my: 2, color: '#6D8C3E ', display: 'block', fontWeight: 'bolder', width: 'fit-content' }}
                                >
                                    {page.name}
                                </Button>
                            </LinkRouter>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, justifyContent: 'space-between' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: '#6D8C3E' }}>
                                {user ?
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Typography sx={{ color: 'black' }}>{user.fullName}</Typography>
                                        <Avatar src={user.imageUser} alt='imgUsuario' />
                                    </Box> :
                                    <AccountCircleIcon />
                                }
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >{!user ?
                            settings.map((setting, index) => (
                                <LinkRouter
                                    to={setting.to}
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    className='underline-none'
                                >
                                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            ))
                            : (settingProfile.map((setting, index) => (
                            <LinkRouter key={index} to={setting.to} className='underline-none'>
                            <MenuItem >
                                <Typography textAlign="center">{setting.name}</Typography>
                            </MenuItem>
                        </LinkRouter>)))}
                        </Menu>
                        <LinkRouter to='/shopping-cart'>
                            <IconButton>
                                <Badge color='error' badgeContent={count.length}>
                                    <ShoppingCartOutlinedIcon style={{ color: '#6D8C3E' }} fontSize='large' />
                                </Badge >
                            </IconButton >
                        </LinkRouter>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;
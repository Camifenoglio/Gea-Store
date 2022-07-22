import * as React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

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

//STYLES
import '../styles/navbar.css'
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
const settings = ['Profile', 'Logout'];


const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                        >
                            {settings.map((setting, index) => (
                                
                                <MenuItem key={index} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                                
                            ))}
                        </Menu>
                        <IconButton>
                            <ShoppingCartOutlinedIcon style={{ color: '#6D8C3E' }} fontSize='large' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;

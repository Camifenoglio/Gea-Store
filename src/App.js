// REACT
import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from 'react-scroll-to-top'

//STYLES
import './styles/App.css';

//COMPONENTS
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import DetailsPage from './pages/DetailsProducts';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import SignInOutPage from './pages/SignInOutPage';
import CartPage from './pages/CartPage';
import AddProductPage from './components/UserAndAdmin/AddProductPage.jsx';
import { connect } from 'react-redux';
import userActions from '../src/redux/actions/userActions'
import AddBlogPage from './components/UserAndAdmin/AddBlogPage.jsx'
import AdminPage from './pages/AdminPage';
import UserProfile from './pages/UserProfile';
import BuyingHistoy from './pages/BuyingHistory';
import Loader from './components/Loader';
import CardDetailBlog from './components/Blog/cardDetailBlog';

//MUI
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
//ACTIONS
import productsActions from './redux/actions/productsActions';

function App(props) {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            const token = localStorage.getItem('token')
            props.verifyToken(token)
        }
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 500)
    }, [])

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <div className="App">

            {loading ? (
                <div className="loadingContainer">
                    <div className="loadingImg">
                        <Loader />
                    </div>
                </div>
            ) : (
                <>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/products' element={<ProductsPage />} />
                        <Route path='/products/:id' element={<DetailsPage />} />
                        <Route path='/aboutus' element={<AboutUsPage />} />
                        <Route path='/blog' element={<BlogPage />} />
                        <Route path='/user' element={props.user?.role === 'admin' ? <AdminPage /> : <UserProfile />} />
                        <Route path='/shopping-cart' element={<ShoppingCart />} />
                        <Route path='/buys' element={<BuyingHistoy />} />
                        <Route path='/sign' element={props.user ? <HomePage /> : <SignInOutPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/addproduct' element={<AddProductPage />} />
                        <Route path='/addblog' element={<AddBlogPage />} />
                    </Routes>
                    <Footer />
                    <Toaster
                        position='top-center'
                        autoClose={6000}
                        hideProgressBar={true}
                        newestOnTop={true}
                        transition={'scale'}
                    />
                    <ScrollToTop
                        smooth
                        component={< ArrowCircleUpRoundedIcon sx={{ color: "#F2F2F2", fontSize: "4.5rem", backgroundColor: "#F2A0A0", borderRadius: "100%" }} />}
                        style={{ backgroundColor: "transparent", boxShadow: "none", paddingBottom: "4.4rem", paddingRight: '3rem'}}
                    />
                </>
            )}
        </div>
    );
}

const mapDispatchToProps = {
    verifyToken: userActions.verifyToken
}
const mapStateToProps = (state) => {
    return {
        user: state.usersReducers.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



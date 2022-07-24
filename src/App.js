// REACT
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

//STYLES
import './styles/App.css';

//COMPONENTS
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import DetailsPage from './pages/DetailsProducts';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import SignInOutPage from './pages/SignInOutPage';
import CartPage from './pages/CartPage';
import NavBarAdmin from './components/UserAndAdmin/NavBarAdmin';
import AddProductPage from './components/UserAndAdmin/AddProductPage.jsx'
import AddBlogPage from './components/UserAndAdmin/AddBlogPage.jsx'

//ACTIONS
import productsActions from './redux/actions/productsActions';


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line
    }, [])

    return (
        <div className="App">
            <NavBar />
            <NavBarAdmin />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/products/:id' element={<DetailsPage />} />
                    <Route path='/aboutus' element={<AboutUsPage />} />
                    <Route path='/blog' element={<BlogPage />} />
                    <Route path='/sign' element={<SignInOutPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/addproduct' element={<AddProductPage />} />
                    <Route path='/addblog' element={<AddBlogPage />} />

                </Routes>
            <Footer />
        </div>
    );
}

export default App;

// REACT
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/:id' element={<DetailsPage />} />
                <Route path='/aboutus' element={<AboutUsPage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/sign' element={<SignInOutPage />} />
                <Route path='/cart' element={<CartPage />} />
                {/* <DetailsPage /> */}
            </Routes>
            <Footer />
            <Toaster
                position='top-center'
                autoClose={6000}
                hideProgressBar={true}
                newestOnTop={true}
                transition={'scale'}
            />
        </div>
    );
}

export default App;

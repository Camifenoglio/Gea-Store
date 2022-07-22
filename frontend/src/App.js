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
                    <Route path='/cart' element={<CartPage />} />
                    {/* <DetailsPage /> */}
                </Routes>
            <Footer />
        </div>
    );
}

export default App;

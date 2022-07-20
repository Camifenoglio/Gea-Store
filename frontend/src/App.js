// import Main from './components/Main'

//STYLES
import './styles/App.css';

//COMPONENTS
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import DetailsPage from './pages/DetailsProducts';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/details:id' element={<DetailsPage />} />
        </Routes>
          {/* <HomePage /> */}
          {/* <ProductsPage /> */}
          {/* <DetailsPage /> */}
        <Footer />
    </div>
  );
}

export default App;

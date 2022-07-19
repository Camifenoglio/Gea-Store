//COMPONENTS
// import Main from './components/Main'
import CarouselProduct from './components/CarouselProductDetails';
import NavBar from './components/NavBar'
import HomePage from './pages/Home';

//STYLES
import './styles/App.css';
import './styles/App.css';
import Main from './components/Main';
import MainCarousel from './components/MainCarousel';
import CardProducts from './components/CardProducts'
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import DetailsCarousel from './components/CarouselProductDetails';

function App() {
  return (
    <div className="App">
        <NavBar />
        <CarouselProduct />
        <HomePage/>
        <Main></Main>
        <Carrousel />
        {/* <DetailsCarousel /> */}
        <Footer />
    </div>
  );
}

export default App;

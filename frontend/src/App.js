import './styles/App.css';
import Main from './components/Main';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import DetailsCarousel from './components/CarouselProductDetails';

function App() {
  return (
    <div className="App">
      <h1>Ultimo esfuerzo!</h1>
      <Main></Main>
      <Carrousel />
      {/* <DetailsCarousel /> */}
      <Footer />
    </div>
  );
}

export default App;

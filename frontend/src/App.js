//COMPONENTS
// import Main from './components/Main'
import CarouselProduct from './components/CarouselProductDetails';
import NavBar from './components/NavBar'
import HomePage from './pages/Home';

//STYLES
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <CarouselProduct />
        <HomePage/>
    </div>
  );
}

export default App;

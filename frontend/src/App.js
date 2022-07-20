// import Main from './components/Main'

//STYLES
import './styles/App.css';

//COMPONENTS
import NavBar from './components/NavBar'
import Footer from './components/Footer';
//import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import DetailsPage from './pages/DetailsProducts';


function App() {
  return (
    <div className="App">
        <NavBar />
          {/* <HomePage /> */}
          {/* <ProductsPage /> */}
          <DetailsPage />
        <Footer />
    </div>
  );
}

export default App;

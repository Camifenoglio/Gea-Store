import '../App';
import MainCarousel from '../components/Home/MainCarousel';
import BannerInfo from '../components/Home/BannerInfo';
import Carrousel from '../components/Home/Carrousel';


function HomePage() {
    return (
        <>
            <MainCarousel />
            <BannerInfo />
            <Carrousel />
        </>
    );
}

export default HomePage

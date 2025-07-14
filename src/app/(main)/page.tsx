import Promo from "@/features/home/Promo/Promo";
import FavoriteBrands from "@/features/home/FavoriteBrands/FavoriteBrands";
import UkrainianBrands from "@/features/home/UkrainianBrands/UkrainianBrands";
import Recommendations from "@/features/home/Recommendations/Recommendations";
import "@/styles/globals.scss";


const Home = () => {
    return (
        <div className='home-container'>
            <Promo />
            <FavoriteBrands />
            <UkrainianBrands />
            <Recommendations />
        </div>
    );
};

export default Home;

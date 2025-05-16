import Promo from '@/features/catalogue/Promo/Promo';
import FavoriteBrands from '@/features/catalogue/FavoriteBrands/FavoriteBrands';
import UkrainianBrands from '@/features/catalogue/UkrainianBrands/UkrainianBrands';
import Recommendations from '@/features/catalogue/Recommendations/Recommendations';
import '@/styles/globals.scss';

const Catalogue = () => {
  return (
    <div className='catalogue-container'>
      <Promo />
      <FavoriteBrands />
      <UkrainianBrands />
      <Recommendations />
    </div>
  );
};

export default Catalogue;

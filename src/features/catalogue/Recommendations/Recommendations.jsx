import ProductCard from '../ProductCard/ProductCard.jsx';
import LinkIcon from '@/components/icons/LinkIcon.jsx';
import './Recommendations.scss';

export default function RecommendationsNew() {
  const products = [
    {
      image: '/img/product/woman-rec.png',
      title: "Women's Midi Slip Dress",
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'A New Day',
      colors: ['#252527', '#757c6a', '#62232c'],
    },
    {
      image: '/img/product/man-rec.png',
      title: 'Men Twill Block Puffer Jacket',
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'Members Only',
      colors: ['#535049', '#494e62'],
    },
    {
      image: '/img/product/woman2-rec.png',
      title: "Women's Long Sleeve",
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'Wild Fable',
      colors: ['#252527', '#066277', '#8c1d37'],
    },
    {
      image: '/img/product/kid-rec.png',
      title: 'Winnie the Pooh Baby',
      price: 25.0,
      oldPrice: 43.0,
      isOnSale: true,
      brand: 'Disney',
      colors: ['#000000'],
    },
  ];
  return (
    <section className='section-container'>
      <div className='section-wrapper'>
        <h2 className='section-logo'>Recommendations</h2>
        <a className='section-link' href='#'>
          Shop now
          <LinkIcon />
        </a>
      </div>
      <div className='product-wrapper'>
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}

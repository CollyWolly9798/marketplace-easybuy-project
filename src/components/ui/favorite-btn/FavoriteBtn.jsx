import FavoriteIcon from '@/components/icons/FavoriteIcon.jsx';
import FavoriteNotIcon from '@/components/icons/FavoriteNotIcon.jsx';

export default function FavoriteBtn({ isFavorite }) {
  return isFavorite ? <FavoriteIcon /> : <FavoriteNotIcon />;
}

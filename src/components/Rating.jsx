import { Star, StarHalf } from 'lucide-react';

const Rating = ({ rating, reviews, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={size} className="text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && <StarHalf size={size} className="text-yellow-400 fill-current" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i + fullStars} size={size} className="text-yellow-400" />
        ))}
      </div>
      <span className="text-sm text-gray-600 ml-1">
        ({rating}) • {reviews} reseñas
      </span>
    </div>
  );
};
export default Rating;
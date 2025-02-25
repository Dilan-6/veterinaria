import React, { useState } from "react";

interface StarRatingProps {
  onRatingChange: (rating: number) => void;
  initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
    onRatingChange(index);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`star ${ (hover || rating) >= index ? "filled" : "" }`}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

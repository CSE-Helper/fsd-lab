//App.js
import React, { useState } from 'react';

const StarRating = () => {

    const EMPTY_STAR =

  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";

const FULL_STAR =

  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

  const [rating, setRating] = useState(0);

  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarHover = (starRating) => {

    setHoveredRating(starRating);

  };

  const handleStarClick = (starRating) => {

    setRating(starRating);

  };

  const handleMouseLeave = () => {

    setHoveredRating(0);

  };

  return (

    <div>

      {[1, 2, 3, 4, 5].map((star) => (

        <img

          key={star}

          src={star <= (hoveredRating || rating) ? FULL_STAR : EMPTY_STAR}

          alt="Star"

          onMouseEnter={() => handleStarHover(star)}

          onClick={() => handleStarClick(star)}

          onMouseLeave={handleMouseLeave}

        />

      ))}

    </div>

  );

};

export default StarRating;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import "../../src/cardInfo.css";
import "../../src/index.css";

const CardInfo = ({
  title = "Card Title",
  description = "Card Description",
  imgUrl = "https://example.com/image.jpg",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front of the Card */}
        <div className="card-front border-2 bg-card">
          <img
            className="rounded-full w-[8rem] h-[8rem] object-cover mb-2"
            alt={title}
            src={imgUrl}
          />
          <span>{title}</span>
        </div>

        {/* Back of the Card */}
        <div className="card-back border-2 bg-card">
          <h3>More about {title}</h3>
          <p>{description}</p>
          <Button
            variant="outline"
            className="border-gray-500 text-white bg-transparent hover:bg-gray-600 hover:text-white"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;

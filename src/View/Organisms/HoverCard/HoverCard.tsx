import React from "react";
import "./HoverCard.scss";

interface ImageCardProps {
  imageUrl: string;
  altText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText }) => {
  return (
    <div className="imageCard">
      <img src={imageUrl} alt={altText} className="image" />
      <div className="playButton">&#9658;</div>
    </div>
  );
};

export default ImageCard;

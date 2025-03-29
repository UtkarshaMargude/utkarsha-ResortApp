import React from "react";
import "./CarouselInfoCard.scss"; // Ensure you have the appropriate styles in this file
import { HomeIconMuiIcon } from "../../../assets/Icons";

export interface CarouselInfoCardProps {
  image: string;
  title: string;
}

export const CarouselInfoCard: React.FC<CarouselInfoCardProps> = ({
  image,
  title,
}) => {
  return (
    <div
      className="carousel_info_card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="content">
        <div className="feature-box__icon">
          <HomeIconMuiIcon />
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

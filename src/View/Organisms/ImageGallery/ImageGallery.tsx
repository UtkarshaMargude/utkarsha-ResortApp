import React from "react";
import "./ImageGallery.scss";
export const ImageGallery = () => {
  const unsplashUrl =
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <section className="gallery">
      {Array.from({ length: 14 }, (_, index) => (
        <figure
          key={index}
          className={`gallery__item gallery__item--${index + 1}`}
        >
          <img
            src={`${unsplashUrl}${index + 1}`}
            alt={`Gallery image ${index + 1}`}
            className="gallery__img"
            loading="lazy"
          />
        </figure>
      ))}
    </section>
  );
};

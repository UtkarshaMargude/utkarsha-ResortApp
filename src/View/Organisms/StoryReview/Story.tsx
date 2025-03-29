import React from "react";
import "./Story.scss";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s";
export const Review = ({
  name,
  title,
  description,
  imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s",
}: {
  name: string;
  title: string;
  description: string;
  imgUrl?: string | null;
}): JSX.Element => {
  return (
    <>
      <div className="Review">
        <div className="story">
          <figure className="story__shape">
            <img
              src={imgUrl || img}
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">{name}</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
            <p className="description_tag">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

import "./InstagramCard.scss";

export const InstagramCard = ({
  link,
  imgUrl,
}: {
  link: string;
  imgUrl: string;
}): JSX.Element => {
  return (
    <div className="instagram_card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt="instagram_image" />
      </a>
    </div>
  );
};

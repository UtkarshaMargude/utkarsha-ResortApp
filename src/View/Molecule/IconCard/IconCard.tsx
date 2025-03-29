import { SearchSharpMuiIcon } from "../../../assets/Icons";
import "./IconCard.scss";

interface IconCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // This specifies that the icon prop can be any valid React node
}

export const IconCard = ({
  title,
  description,
  icon,
}: IconCardProps): JSX.Element => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className="feature-box__icon icon-basic-world">{icon}</i>
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text">{description}</p>
      </div>
    </div>
  );
};

// Usage example:
// <IconCard title="Search" description="This is a search icon" icon={<SearchSharpMuiIcon />} />

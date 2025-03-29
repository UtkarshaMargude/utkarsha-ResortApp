import { LocalLaundryServiceMuiIcon } from "../../../assets/Icons";
import "./IconAndDescription.scss";
export const IconAndDescription = () => {
  return (
    <div className="icon_and_description_container">
      <div className="icon_div">{<LocalLaundryServiceMuiIcon />}</div>
      <h1 className="title">Restaurant</h1>
      <p className="description">
        A wonderful little place that serves up tasty food at affordable prices.
      </p>
    </div>
  );
};

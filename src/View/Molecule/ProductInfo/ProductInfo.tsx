import {
  BathtubOutlinedMuiIcon,
  BedOutlinedMuiIcon,
  CropFreeOutlinedMuiIcon,
  WcOutlinedMuiIcon,
} from "../../../assets/Icons";
import "./ProductInfo.scss";
export const ProductInfo = ({
  title,
  info01,
  info02,
  info03,
  info04,
}: {
  title: string;
  info01: string;
  info02: string;
  info03: string;
  info04: string;
}): JSX.Element => {
  return (
    <div className="product_info_card">
      <h1>{title}</h1>
      <div className="products">
        <Products info={info01} Icon={CropFreeOutlinedMuiIcon} />
        <Products info={info02} Icon={WcOutlinedMuiIcon} />
        <Products info={info03} Icon={BedOutlinedMuiIcon} />
        <Products info={info04} Icon={BathtubOutlinedMuiIcon} />
      </div>
    </div>
  );
};

export const Products = ({ Icon, info }: { Icon: any; info: string }) => {
  return (
    <div className="product_div">
      <Icon />
      <p>{info}</p>
    </div>
  );
};

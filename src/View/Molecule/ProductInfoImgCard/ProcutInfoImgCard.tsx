import { ProductInfo } from "../ProductInfo/ProductInfo";
import "./ProductInfoImgCard.scss";
export const ProductInfoImgCar = ({
  imgUrl,
  title,
  info01,
  info02,
  info03,
  info04,
}: {
  imgUrl: string;
  title: string;
  info01: string;
  info02: string;
  info03: string;
  info04: string;
}): JSX.Element => {
  return (
    <div className="product_info_img_car">
      <img className="imgage_card" src={imgUrl} alt={`${title} image`} />
      <div className="information_div">
        <ProductInfo
          title={title}
          info01={info01}
          info02={info02}
          info03={info03}
          info04={info04}
        />
      </div>
    </div>
  );
};

import { RoomInfoData } from "../../../Data/Data";
import { ProductInfoImgCar } from "../../Molecule/ProductInfoImgCard/ProcutInfoImgCard";
import "./RoomInfo.scss";
export const RoomInfo = (): JSX.Element => {
  return (
    <div className="rooms_info_div">
      <p className="p_tag">Explore</p>
      <h1 className="h_tag">Rooms & Suites</h1>
      <div className="room_card_info">
        {RoomInfoData.map((item, index) => {
          return (
            <ProductInfoImgCar
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              info01={item.info01}
              info02={item.info02}
              info03={item.info03}
              info04={item.info04}
            />
          );
        })}
      </div>
    </div>
  );
};

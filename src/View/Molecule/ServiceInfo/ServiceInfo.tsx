import React from "react";
import "./ServiceInfo.scss";
import { LocalLaundryServiceMuiIcon } from "../../../assets/Icons";
export const ServiceInfo = ({ Icon, title }: { Icon: any; title: string }) => {
  const unsplashUrl =
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="service_info_card">
      <div className="icon_div">
        <Icon />
      </div>
      <h3 className="service_title">{title}</h3>
    </div>
  );
};

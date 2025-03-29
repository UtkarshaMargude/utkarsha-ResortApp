import { allServicesData } from "../../../Data/Data";
import { ServiceInfo } from "../../Molecule/ServiceInfo/ServiceInfo";
import "./AllServices.scss";

export const AllServices = () => {
  return (
    <div className="all_services_container">
      {allServicesData.map((item, index) => {
        return <ServiceInfo Icon={item.Icon} title={item.title} key={index} />;
      })}
    </div>
  );
};

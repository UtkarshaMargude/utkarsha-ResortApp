import { AllServices } from "../../Organisms/AllServices/AllServices";
import "./ServiceTemplate.scss";
export const ServicesTemplate = () => {
  return (
    <div className="service_template_container">
      <h3>Our Services</h3>
      <h1>Hotel Facelities</h1>
      <div className="all_service_container">
        <AllServices />
      </div>
    </div>
  );
};

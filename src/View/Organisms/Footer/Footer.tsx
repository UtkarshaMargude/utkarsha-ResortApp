import { Link } from "react-router-dom";
import { NavBarButtonsData } from "../../../Data/Data";
import { NavButton } from "../../Atom/NavigationButton/NavigationButton";
import "./Footer.scss";
import { InstagramMuiIcon } from "../../../assets/Icons";
export const Footer = (): JSX.Element => {
  return (
    <footer className="footer_container">
      <div className="all_elements_div">
        <div className="about_us_div common_flex">
          <h1 className="color_light">About Us</h1>
          <p className="color_dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="contact_us_div common_flex">
          <h1 className="color_light">Contact Us</h1>
          <p className="color_dark">
            PO Box 16122 Collins StreetWest Victoria 8007 Australia
          </p>
          <p className="color_dark">info@swiss-resort.com</p>
          <p className="color_dark">+91 45596 56698</p>
        </div>
        <div className="links_div common_flex">
          <h1 className="color_light">Links</h1>
          {NavBarButtonsData.map((navItem, index) => {
            return (
              <Link key={index} className="color_dark_link" to={navItem.link}>
                {navItem.title}
              </Link>
            );
          })}
        </div>
        <div className="media_links">
          <InstagramMuiIcon />
          <InstagramMuiIcon />
          <InstagramMuiIcon />
          <InstagramMuiIcon />
        </div>
      </div>
      <p className="copyright">
        &copy; Copyright 2014 Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Molestiae unde porro nemo deleniti, aut excepturi!
        Explicabo vel quasi alias possimus voluptate nemo sed iusto quidem,
        doloremque veniam, id eveniet neque.
      </p>
    </footer>
  );
};

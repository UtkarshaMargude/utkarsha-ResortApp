import { NavBarMenu } from "../NavBar/NavBar";
import "./NavBarMenuAndBg.scss";
export const NavBarMenuAndBg = (): JSX.Element => {
  const image01 =
    "https://wallpapers.com/images/hd/beach-house-vaadhoo-island-resort-ikbv3kfksxnqqu5q.jpg";
  const gradient =
    "linear-gradient(rgba(16, 29, 44, 0.600), rgba(16, 29, 44, 0.600))";
  return (
    <div
      style={{ backgroundImage: `${gradient}, url(${image01})` }}
      className="nav_bar_menu_and_bg"
    >
      <div className="nav_bar_menu">
        <NavBarMenu />
      </div>
      {/* <div className="title_div">
        <h1>About Swiss Hotel</h1>
      </div> */}
    </div>
  );
};

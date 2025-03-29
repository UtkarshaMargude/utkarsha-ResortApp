import { AppBar, Box, Drawer } from "@mui/material";
import "./NavBar.scss";
import { ShortTextMuiIcon } from "../../../assets/Icons";
import { useState } from "react";
import { TopDrawer } from "../../Molecule/TopDrawer/TopDrawer";
export const NavBarMenu = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav_bar_menu_container">
      <AppBar className="app_bar" position="static">
        <div onClick={() => setOpen(true)} className="menu_icon">
          <ShortTextMuiIcon />
          <h1>Menu</h1>
        </div>
        <img
          className="resort_logo"
          src="https://images-platform.99static.com//hPCanOpBkJZgWLVYwFisxzz8YU4=/247x230:915x898/fit-in/500x500/99designs-contests-attachments/129/129576/attachment_129576888"
          alt="resort image"
        />

        <h1 className="book_now">Book Now</h1>
      </AppBar>
      <TopDrawer open={open} setOpen={setOpen} />
    </div>
  );
};

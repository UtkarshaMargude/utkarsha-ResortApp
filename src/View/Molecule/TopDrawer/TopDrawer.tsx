import { Drawer, Grid } from "@mui/material";
import "./topDrawer.scss";
import { NavButton } from "../../Atom/NavigationButton/NavigationButton";
import { CloseIconMuiIcon, PlayArrowMuiIcon } from "../../../assets/Icons";
import { NavBarButtonsData } from "../../../Data/Data";
import { AddressCard } from "../AddressCard/AddressCard";
export const TopDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };
  return (
    <Drawer
      className="top_drawer_container"
      anchor="top"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <Grid container spacing={2}>
        <Grid
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          sx={{
            paddingLeft: 15,
          }}
          item
          xs={12}
          sm={12}
          md={8}
          className="navigation_menu_buttons"
        >
          <div
            onClick={() => toggleDrawer(false)}
            className="close_nav_bar_container"
          >
            <CloseIconMuiIcon />
            <h1>CLOSE</h1>
          </div>
          {NavBarButtonsData.map((navItem, index) => {
            return (
              <NavButton
                onClick={() => toggleDrawer(false)}
                key={index}
                Icon={navItem.Icon || ""}
                link={navItem.link || ""}
                title={navItem.title || ""}
              />
            );
          })}
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          item
          xs={12}
          sm={12}
          md={4}
          className="address_container"
        >
          <AddressCard />
        </Grid>
      </Grid>
    </Drawer>
  );
};

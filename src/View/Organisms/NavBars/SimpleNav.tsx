import * as React from "react";
import "./navBar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";
interface NavBarLink {
  title: string;
  icon: any; // Adjust the type according to your icon type, e.g., React.ReactNode if it's a React component
  link: string;
}

interface ButtonAppBarProps {
  navBarLink: NavBarLink[];
  borderRadius?: string;
  backgroundColor?: string;
}

export default function ButtonAppBar({
  navBarLink,
  borderRadius = "4rem",
  backgroundColor,
}: ButtonAppBarProps) {
  return (
    <Box
      className="navBar_container"
      sx={{ flexGrow: 1, borderRadius: borderRadius }}
    >
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Hidden smDown>
            {navBarLink.map((link, index) => (
              <Link
                className="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group button_comp"
                to={link?.link}
              >
                {link?.title}

                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton
              className="icon_button"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { Link } from "react-router-dom";
import React from "react";
import "./NavigationButton.scss";

interface NavButtonProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  link?: string;
  onClick?: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({
  Icon,
  title,
  link = "/",
  onClick,
}) => {
  return (
    <Link className="nav_button_link" to={link} onClick={onClick}>
      <Icon /> <h1>{title}</h1>
    </Link>
  );
};

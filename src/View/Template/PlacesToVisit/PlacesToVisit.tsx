import { Box, Grid } from "@mui/material";
import { MultiCarousel } from "../../Molecule/MultiCarousel/MultiCarousel";
import { CarouselCardData } from "../../../Data/Data";
import { CarouselInfoCard } from "../../Molecule/CarouselInfoCard/CarouselInfoCard";
import "./PlacesToVisit.scss";
export const PlacesToVisit = (): JSX.Element => {
  return (
    <div className="places_to_visit">
      <Grid className="title_grid">
        <p className="p_tag">There's So Much to Discover</p>
        <h1 className="h_tag">Unforgettable Experience</h1>
      </Grid>
    </div>
  );
};

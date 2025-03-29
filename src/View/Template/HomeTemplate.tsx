import React, { useState } from "react";

import { Box, Drawer, Grid, Typography } from "@mui/material";
import { MultiCarousel } from "../Molecule/MultiCarousel/MultiCarousel";
import { CarouselInfoCard } from "../Molecule/CarouselInfoCard/CarouselInfoCard";
import { CarouselCardData } from "../../Data/Data";
import { CompositionImages } from "../Molecule/CompositionImages/CompositionImages";
import { Review } from "../Organisms/StoryReview/Story";

const navBarLink = [
  { title: "Home01", icon: "", link: "/" },
  { title: "Home02", icon: "", link: "/2" },
];

export const Home = () => {
  return (
    <>
      <Grid container>
        <Grid xs={12} sm={12} md={12}>
          <CompositionImages />
        </Grid>
      </Grid>
      <Grid mb={3} xs={12} sm={12} md={12}>
        <Review
          name="Onkar"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
          title="Owner"
        />
      </Grid>
      <Grid mb={3} xs={12} sm={12} md={12}></Grid>
      <Grid container spacing={0}>
        <Grid
          xs={12}
          sm={12}
          md={12}
          sx={{
            "& .react-multi-carousel-item": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <MultiCarousel>
            {CarouselCardData.map((card, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    m: 3, // Responsive margin
                    width: { xs: "80%", sm: "80%", md: "80%" }, // Responsive width
                  }}
                >
                  <CarouselInfoCard title={card.title} image={card.image} />
                </Box>
              );
            })}
          </MultiCarousel>
        </Grid>
      </Grid>
    </>
  );
};

import { Box, Grid } from "@mui/material";
import { CompositionImages } from "../../Molecule/CompositionImages/CompositionImages";
import { ServicesTemplate } from "../ServicesTemplate/ServicesTemplate";
import { AllServices } from "../../Organisms/AllServices/AllServices";
import { Review } from "../../Organisms/StoryReview/Story";
import { IconAndDescription } from "../../Molecule/IconAndDescription/IconAndDescription";
import { ImageAndTitle } from "../../Organisms/ImageAndTitle/ImageAndTitle";
import { ImageGallery } from "../../Organisms/ImageGallery/ImageGallery";
import { MultiCarousel } from "../../Molecule/MultiCarousel/MultiCarousel";
import { CarouselCardData } from "../../../Data/Data";
import { CarouselInfoCard } from "../../Molecule/CarouselInfoCard/CarouselInfoCard";
import { PlacesToVisit } from "../PlacesToVisit/PlacesToVisit";
import { ProductInfo } from "../../Molecule/ProductInfo/ProductInfo";
import { ProductInfoImgCar } from "../../Molecule/ProductInfoImgCard/ProcutInfoImgCard";
import { RoomInfo } from "../../Organisms/RoomInfo/RoomInfo";

export const HomePage = (): JSX.Element => {
  return (
    <Grid container className="home_page_container">
      <Grid xs={12} sm={12} md={12}>
        <CompositionImages />
      </Grid>
      <Grid mb={3} xs={12} sm={12} md={12}>
        <ServicesTemplate />
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <RoomInfo />
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <ImageAndTitle />
      </Grid>
      <Grid mb={3} xs={12} sm={12} md={12}>
        <PlacesToVisit />
      </Grid>
      <Grid mb={3} xs={12} sm={12} md={12}>
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
                    m: 2, // Responsive margin
                    mb: 3,
                    width: "80%", // Responsive width
                  }}
                >
                  <CarouselInfoCard title={card.title} image={card.image} />
                </Box>
              );
            })}
          </MultiCarousel>
        </Grid>
      </Grid>
      {/* <Grid mb={3} xs={12} sm={12} md={12}>
        <ImageGallery />
      </Grid> */}
    </Grid>
  );
};

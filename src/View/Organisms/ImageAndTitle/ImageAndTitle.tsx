import { Grid } from "@mui/material";
import { IconAndDescription } from "../../Molecule/IconAndDescription/IconAndDescription";
import "./ImageAndTitle.scss";
export const ImageAndTitle = () => {
  return (
    <Grid sx={{ p: 4 }} container spacing={2} className="image_and_title">
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{ mb: 2 }}
        xs={12}
        sm={12}
        md={12}
      >
        <p>SWISS RESORT LUXURY HOTEL</p>
        <h1>Exceptional gastronomy in beautiful spaces</h1>
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
        sm={12}
        md={6}
        className="image_container"
      >
        <img
          src="https://creativelayers.net/themes/swiss-resort-html/img/about/4/1.png"
          alt="image"
        />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
        sm={12}
        md={6}
        className="description_container"
      >
        <IconAndDescription />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
        sm={12}
        md={6}
        className="image_container"
      >
        <img
          src="https://creativelayers.net/themes/swiss-resort-html/img/about/4/1.png"
          alt="image"
        />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
        sm={12}
        md={6}
        className="description_container"
      >
        <IconAndDescription />
      </Grid>{" "}
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
        sm={12}
        md={6}
        className="image_container"
      >
        <img
          src="https://creativelayers.net/themes/swiss-resort-html/img/about/4/1.png"
          alt="image"
        />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
        sm={12}
        md={6}
        className="description_container"
      >
        <IconAndDescription />
      </Grid>
      s
    </Grid>
  );
};

import { Grid } from "@mui/material";
import "./AboutUsPage.scss";
import { Review } from "../../Organisms/StoryReview/Story";
import { InstagramData, TeamsInfoData } from "../../../Data/Data";
import { InstagramCard } from "../../Molecule/InstagramCard/InstagramCard";
export const AboutUsPage = (): JSX.Element => {
  return (
    <Grid container className="about_us_container">
      <Grid xs={12} md={12} className="about_us_intro">
        <p className="p_tag">SWISS RESORT LUXURY HOTEL</p>
        <h1 className="h_tag">Book your room & enjoy the comforts</h1>
        <p className="p_tag_01">
          Welcome to the best five-star deluxe hotel in New York. Hotel
          elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
          volutpat. Donec in quis the pellentesque velit. Hotel ut nisl quam
          nestibulum. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
          justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          Cras dapibus. Vivamus elementum semper nisi.
        </p>
      </Grid>
      <Grid xs={12} md={12} className="rooms_info_main_div">
        <div className="rooms_info">
          <h3 className="room_count h_tag">22</h3>
          <h3 className="h_tag_01">Rooms</h3>
        </div>
        <div className="rooms_info">
          <h3 className="room_count h_tag">12</h3>
          <h3 className="h_tag_01">SUITS</h3>
        </div>
        <div className="rooms_info">
          <h3 className="room_count h_tag">15</h3>
          <h3 className="h_tag_01">Adventures</h3>
        </div>
      </Grid>
      <Grid xs={12} md={12} className="team_info">
        <h1 className="h_tag">Our Team</h1>
        {TeamsInfoData.map((item, index) => {
          return (
            <Review
              key={index}
              imgUrl={item?.imgUrl || null}
              name={item?.name}
              description={item?.description}
              title={item?.title}
            />
          );
        })}
      </Grid>
      <Grid
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          margin: "20px 0",
        }}
        xs={12}
        md={12}
        className="instagram_div"
      >
        <p className="p_tag_01">@swiss152</p>
        <h1 className="h_tag">Follow Us On Instagram</h1>
      </Grid>
      <Grid xs={12} md={12} className="follow_use_div">
        {InstagramData.map((item, index) => {
          return (
            <InstagramCard
              link={item?.link}
              imgUrl={item?.imgUrl}
              key={index}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

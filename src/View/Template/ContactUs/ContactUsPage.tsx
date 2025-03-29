import { Button, Grid } from "@mui/material";
import Map from "../../Molecule/Contact/Map/Map";
import { Formik, validateYupSchema } from "formik";
import { MFSubmitButton, MFTextField } from "../../Atom/Formik";
import "./contactUsPage.scss";
import { contactusShema } from "../../../components/SchemaValidations/Shema";
import { useEffect, useState } from "react";
import { InstagramData } from "../../../Data/Data";
import { InstagramCard } from "../../Molecule/InstagramCard/InstagramCard";
import {
  MarkEmailReadOutlinedMuiIcon,
  MaximizeOutlinedMuiIcon,
} from "../../../assets/Icons";
import { AddressCard } from "../../Molecule/AddressCard/AddressCard";
import CustomizedAccordions from "../../Molecule/AccordianComp/AccordianCom";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number | null;
  comment: string;
};

const initialValue: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: null,
  comment: "",
};

export const ContactUsPage = (): JSX.Element => {
  const handleFormSubmit = (values: Values) => {
    console.log(values, "values");
  };

  const [initialVal, setInitialValues] = useState(initialValue);

  useEffect(() => {
    setInitialValues({
      firstName: "",
      lastName: "",
      phone: null,
      email: "",
      comment: "",
    });
  }, []);

  return (
    <Grid container className="contact_us_page_container">
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
        xs={12}
        sm={12}
        md={12}
        className="email_container"
      >
        <MarkEmailReadOutlinedMuiIcon />
        <p className="p_tag_01">GET IN TOUCH</p>
        <h1 className="h_tag">Leave us your info</h1>
        <p className="p_tag_01" style={{ maxWidth: "80rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt
          voluptate vitae, voluptates ullam consequuntur quaerat facere minus,
          magni tempore cupiditate impedit non eaque ipsa quam? Itaque
          temporibus molestiae architecto.
        </p>
      </Grid>
      <Formik
        initialValues={initialVal}
        onSubmit={handleFormSubmit}
        validationSchema={contactusShema}
      >
        {({ handleSubmit, errors }) => (
          <Grid
            component="form"
            noValidate
            onSubmit={handleSubmit}
            container
            spacing={2}
            className="formik_container"
          >
            <Grid item xs={12} md={6}>
              <MFTextField
                multiline
                rows={1.3}
                label="First Name"
                placeholder="Enter First Name"
                name="firstName"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MFTextField
                multiline
                rows={1.3}
                label="Last Name"
                placeholder="Enter Last Name"
                name="lastName"
              />
            </Grid>
            <Grid sx={{ mt: "-3rem" }} item xs={12} md={6}>
              <MFTextField
                multiline
                rows={1.3}
                label="Email"
                placeholder="Enter Email"
                name="email"
              />
            </Grid>{" "}
            <Grid sx={{ mt: "-3rem" }} item xs={12} md={6}>
              <MFTextField
                multiline
                rows={1.3}
                label="Mobile Number"
                placeholder="Enter Mobile Number"
                name="phone"
              />
            </Grid>
            <Grid sx={{ mt: "-3rem" }} item xs={12}>
              <MFTextField
                multiline
                rows={8}
                label="Comment"
                placeholder="Enter Comment"
                name="comment"
              />
            </Grid>
            <Grid sx={{ mt: "-3rem" }} item xs={12}>
              <Button variant="contained" className="button_comp" type="submit">
                <p> Send Your Message</p>
              </Button>
              {/* <MFSubmitButton label="Submit" /> */}
            </Grid>
          </Grid>
        )}
      </Formik>
      <Grid className="map_and_info" columnSpacing={0} container item xs={12}>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddressCard />
        </Grid>
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

import { Route, Routes } from "react-router-dom";
import { Home } from "../Template/HomeTemplate";
import "./Pages.scss";
import { NavBarMenuAndBg } from "../Organisms/NavBarMenuAndBg/NavBarMenuAndBg";
import { Grid } from "@mui/material";
import { Footer } from "../Organisms/Footer/Footer";
import { HomePage } from "../Template/HomePage/HomePage";
import { AboutUsPage } from "../Template/AboutUsPage/AboutUsPage";
import { ContactUsPage } from "../Template/ContactUs/ContactUsPage";
import { Faq } from "../Template/Faq/FAQ";
import Terms from "../Template/TermsAndConditions/Terms";
export const Pages = () => {
  return (
    <div className="pages_container">
      <Grid xs={12} sm={12} md={12} container>
        <NavBarMenuAndBg />
      </Grid>
      <Routes>
        <Route path="/swiss-resort/" element={<HomePage />} />
        <Route path="/a" element={<Home />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms_and_conditions" element={<Terms />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Grid xs={12} sm={12} md={12} container>
        <Footer />
      </Grid>
    </div>
  );
};

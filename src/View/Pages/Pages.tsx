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
        <Route path="/utkarsha-ResortApp/" element={<HomePage />} />
        <Route path="/utkarsha-ResortApp/a" element={<Home />} />
        <Route path="/utkarsha-ResortApp/about_us" element={<AboutUsPage />} />
        <Route path="/utkarsha-ResortApp/contact_us" element={<ContactUsPage />} />
        <Route path="/utkarsha-ResortApp/faq" element={<Faq />} />
        <Route path="/utkarsha-ResortApp/terms_and_conditions" element={<Terms />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Grid xs={12} sm={12} md={12} container>
        <Footer />
      </Grid>
    </div>
  );
};

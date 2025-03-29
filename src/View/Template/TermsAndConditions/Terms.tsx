import { useState } from "react";
import { TabButton } from "../../Atom/ButtonsFile";
import "./Terms.scss";
import { Grid } from "@mui/material";
import { termsAndConditionData, TermsDataType } from "../../../Data/Data";
import { FiberManualRecordMuiIcon } from "../../../assets/Icons";

const initialTabData = [
  {
    id: 1,
    title: "Account & Payments",
    isActive: true,
  },
  {
    id: 2,
    title: "Manage Orders",
    isActive: false,
  },
  {
    id: 3,
    title: "Returns & Refunds",
    isActive: false,
  },
];

export const Terms = (): JSX.Element => {
  const [tabData, setTabData] = useState(initialTabData);
  const [termsData, setTermsData] = useState<TermsDataType>(
    termsAndConditionData[0]
  );

  const handleTabClick = (id: number) => {
    const updatedTabData = tabData.map((item) =>
      item.id === id
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );

    const selectedTermsData =
      termsAndConditionData.find((term) => term.id === id) || termsData;

    setTabData(updatedTabData);
    setTermsData(selectedTermsData);
  };

  return (
    <Grid container className="terms_and_condition_container">
      <Grid item xs={12} className="tab_section">
        {tabData.map((item) => (
          <TabButton
            key={item.id}
            title={item.title}
            isActive={item.isActive}
            onClick={() => handleTabClick(item.id)}
          />
        ))}
      </Grid>
      <Grid item xs={12} className="terms_info">
        <h1 className="h_tag_01">{termsData.heading01}</h1>
        {termsData.description01.map((desc, index) => (
          <p style={{ marginBottom: "1rem" }} className="p_tag_01" key={index}>
            {desc}
          </p>
        ))}
        <h1 className="h_tag_01 list_heading">{termsData.listHeading}</h1>
        <ul className="list_section">
          {termsData.list.map((item, index) => (
            <li className="p_tag_01" key={index}>
              <div className="li_section">
                {
                  <FiberManualRecordMuiIcon
                    style={{ color: "salmon", marginRight: "0.5rem" }}
                  />
                }
                {item}
              </div>
            </li>
          ))}
        </ul>
        {termsData?.heading02 && (
          <h1 className="h_tag_01 h2_bottom_tag">{termsData.heading01}</h1>
        )}

        {(termsData?.description02 || []).length > 0 &&
          (termsData?.description02 || []).map((desc, index) => (
            <p className="p_tag_01 p_02_tag" key={index}>
              {desc}
            </p>
          ))}
      </Grid>
    </Grid>
  );
};

export default Terms;

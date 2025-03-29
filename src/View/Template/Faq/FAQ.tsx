import { Grid } from "@mui/material";
import CustomizedAccordions from "../../Molecule/AccordianComp/AccordianCom";
import { Description } from "@mui/icons-material";
import "./FAQ.scss";
const accordianData01 = [
  {
    pannel: "01",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
  {
    pannel: "02",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
  {
    pannel: "03",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
  {
    pannel: "04",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
];
const accordianData02 = [
  {
    pannel: "01",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
  {
    pannel: "02",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
  {
    pannel: "03",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
  {
    pannel: "04",
    title: "Do I have to pay extra fees?",
    description:
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
  },
];
export const Faq = (): JSX.Element => {
  return (
    <Grid container className="faq_container">
      <Grid xs={12} md={12} className="accordian_items">
        <h1 className="heading">Payments</h1>
        {accordianData01?.map((item) => {
          return (
            <CustomizedAccordions
              key={item?.pannel}
              pannel={item?.pannel}
              title={item?.title}
              description={item?.description}
            />
          );
        })}
      </Grid>
      <Grid xs={12} md={12} className="accordian_items">
        <h1 className="heading">Reservation</h1>
        {accordianData02?.map((item) => {
          return (
            <CustomizedAccordions
              key={item?.pannel}
              pannel={item?.pannel}
              title={item?.title}
              description={item?.description}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

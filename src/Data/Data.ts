import { SvgIconTypeMap } from "@mui/material";
import {
  AirportShuttleMuiIcon,
  BedOutlinedMuiIcon,
  CallMuiIcon,
  CleaningServicesMuiIcon,
  ConnectedTvMuiIcon,
  HelpOutlineIconMuiIcon,
  HomeIconMuiIcon,
  LibraryBooksIconMuiIcon,
  LocalLaundryServiceMuiIcon,
  PaymentMuiICon,
  PeopleAltIconMuiIcon,
  WifiMuiIcon,
} from "../assets/Icons";
import { CarouselInfoCardProps } from "../View/Molecule/CarouselInfoCard/CarouselInfoCard";
import { string } from "yup";

export const NavBarButtonsData: { Icon: any; title: string; link: string }[] = [
  { Icon: HomeIconMuiIcon, title: "Home", link: "/" },
  { Icon: PeopleAltIconMuiIcon, title: "About Us", link: "/about_us" },
  { Icon: CallMuiIcon, title: "Contact", link: "/contact_us" },
  { Icon: HelpOutlineIconMuiIcon, title: "FAQ", link: "/faq" },
  // { Icon: PaymentMuiICon, title: "Pricing", link: "/pricing" },
  {
    Icon: LibraryBooksIconMuiIcon,
    title: "Terms & Conditions",
    link: "/terms_and_conditions",
  },
];

export const CarouselCardData: CarouselInfoCardProps[] = [
  {
    title: "Swimming",
    image:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/5.png",
    //Icon: LibraryBooksIconMuiIcon as unknown as React.ReactNode,
  },
  {
    title: "Mountain View",
    image:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/4.png",
    //Icon: LibraryBooksIconMuiIcon as unknown as React.ReactNode,
  },
  {
    title: "Resort",
    image:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/6.png",
    //Icon: PaymentMuiICon as unknown as React.ReactNode,
  },
  {
    title: "Dinning",
    image:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/7.png",
    //Icon: HomeIconMuiIcon as unknown as React.ReactNode,
  },
  {
    title: "Snow Ridding",
    image:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/3.png",
    //Icon: LibraryBooksIconMuiIcon as unknown as React.ReactNode,
  },
  {
    title: "Golf",
    image:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/2.png",
    //Icon: PaymentMuiICon as unknown as React.ReactNode,
  },
  {
    title: "Bike Ridding",
    image:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/1.png",
    //Icon: HomeIconMuiIcon as unknown as React.ReactNode,
  },
  // Add more card data as needed
];

export const allServicesData: {
  Icon: any;
  title: string;
}[] = [
  { Icon: WifiMuiIcon, title: "Wifi & Internet" },
  { Icon: AirportShuttleMuiIcon, title: "Airport Transfer" },
  { Icon: ConnectedTvMuiIcon, title: "Smart TV" },
  { Icon: BedOutlinedMuiIcon, title: "Breakfast in Bed" },
  { Icon: LocalLaundryServiceMuiIcon, title: "Laundry Services" },
  { Icon: CleaningServicesMuiIcon, title: "Housekeeper Services" },
];

export const RoomInfoData: {
  imgUrl: string;
  title: string;
  info01: string;
  info02: string;
  info03: string;
  info04: string;
}[] = [
  {
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/rooms/2/1.png",
    title: "Luxury Suite",
    info01: "30M2",
    info02: "2 GUEST",
    info03: "1 BED",
    info04: "1 BATH",
  },
  {
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/rooms/2/2.png",
    title: "Double Room",
    info01: "30M2",
    info02: "2 GUEST",
    info03: "1 BED",
    info04: "1 BATH",
  },
  {
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/rooms/2/3.png",
    title: "Delux Suite",
    info01: "30M2",
    info02: "2 GUEST",
    info03: "1 BED",
    info04: "1 BATH",
  },
  {
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/cards/rooms/2/4.png",
    title: "Luxury Suite",
    info01: "30M2",
    info02: "2 GUEST",
    info03: "1 BED",
    info04: "1 BATH",
  },
];

export const TeamsInfoData: {
  name: string;
  description: string;
  title: string;
  imgUrl: string;
}[] = [
  {
    imgUrl:
      "https://media-pnq1-2.cdn.whatsapp.net/v/t61.24694-24/347484543_200503602811058_7771531668860474579_n.jpg?ccb=11-4&oh=01_Q5AaILZr2sVhwoxu2whi8QeYADl-3Znb_oIOLY6Pbhtp4OiL&oe=66C2B8E1&_nc_sid=5e03e0&_nc_cat=106",
    name: "Anshul Karasai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
    title: "Owner",
  },
  {
    name: "Ramu Kaka",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
    title: "Chef",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygxO4NBCnPiSBDtReaTWbHyzVJ76uJKKkJA&s",
  },
  {
    name: "Sudeep Sharma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
    title: "Manager",
    imgUrl:
      "https://www.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-600nw-548848999.jpg",
  },
];

export const InstagramData: {
  link: string;
  imgUrl: string;
}[] = [
  {
    link: "",
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/inst/1/1.png",
  },
  {
    link: "",
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/inst/1/2.png",
  },
  {
    link: "",
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/inst/1/3.png",
  },
  {
    link: "",
    imgUrl:
      "https://creativelayers.net/themes/swiss-resort-html/img/inst/1/4.png",
  },
];
export interface TermsDataType {
  id: number;
  heading01: string;
  description01: string[];
  listHeading: string;
  list: string[];
  heading02?: string;
  description02?: string[];
}
export const termsAndConditionData: TermsDataType[] = [
  {
    id: 1,
    heading01: "What makes a good brand book?",
    description01: [
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.",
      "Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
    ],
    listHeading: "Room Rules",
    list: [
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
      "At urna condimentum mattis pellentesque id nibh.",
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
      "At urna condimentum mattis pellentesque id nibh.",
    ],
    heading02: "What makes a good brand book?",
    description02: [
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.",
      "Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
    ],
  },
  {
    id: 2,
    heading01: "What makes a good brand book 02?",
    description01: [
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.",
      "Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
    ],
    listHeading: "Room Rules",
    list: [
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
      "At urna condimentum mattis pellentesque id nibh.",
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
      "At urna condimentum mattis pellentesque id nibh.",
    ],
    heading02: "What makes a good brand book?",
    description02: [
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.",
      "Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
    ],
  },
  {
    id: 3,
    heading01: "What makes a good brand book 03?",
    description01: [
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.",
      "Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
    ],
    listHeading: "Room Rules",
    list: [
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
      "At urna condimentum mattis pellentesque id nibh.",
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
      "At urna condimentum mattis pellentesque id nibh.",
    ],
    heading02: "What makes a good brand book?",
    description02: [
      "Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.",
      "Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.",
    ],
  },
];

import { StaticImageData } from "next/image";
import row1Image1 from "../../public/assets/galleryComponentAssests/row-1-1.jpg";
import row1Image2 from "../../public/assets/galleryComponentAssests/row-1-2.jpeg";
import row1Image3 from "../../public/assets/galleryComponentAssests/row-1-3.jpg";
import row1Image4 from "../../public/assets/galleryComponentAssests/row-1-4.jpeg";
import row2Image1 from "../../public/assets/galleryComponentAssests/row-2-1.jpg";
import row2Image2 from "../../public/assets/galleryComponentAssests/row-2-2.jpg";
import row2Image3 from "../../public/assets/galleryComponentAssests/row-2-3.jpg";
import row2Image4 from "../../public/assets/galleryComponentAssests/row-2-4.jpeg";
import row3Image1 from "../../public/assets/galleryComponentAssests/row-3-1.jpeg";
import row3Image2 from "../../public/assets/galleryComponentAssests/row-3-2.jpeg";
import row3Image3 from "../../public/assets/galleryComponentAssests/row-3-3.jpeg";
import row3Image4 from "../../public/assets/galleryComponentAssests/row-3-4.jpeg";

import chalakaThisaruwan from "../../public/assets/teamMembers/chalakaThisaruwan.png";
import chamikaRohan from "../../public/assets/teamMembers/chamikaRohan.png";
import hiranSenevirathna from "../../public/assets/teamMembers/hiranSenevirathna.png";
import kasunDilshan from "../../public/assets/teamMembers/kasunDilshan.png";
import pasanSilva from "../../public/assets/teamMembers/pasanSilva.png";
import vidhuraPolgolla from "../../public/assets/teamMembers/vidhuraPolgolla.png";
import { IconProps, Icons } from "./ui/Icons";

import logo1 from "../../public/assets/evolutionOfLogos/logo1.png";
import logo2 from "../../public/assets/evolutionOfLogos/logo2.png";
import logo3 from "../../public/assets/evolutionOfLogos/logo3.png";

export const row1: StaticImageData[] = [
  row1Image1,
  row1Image2,
  row1Image3,
  row1Image4,
];
export const row2: StaticImageData[] = [
  row2Image1,
  row2Image2,
  row2Image3,
  row2Image4,
];
export const row3: StaticImageData[] = [
  row3Image1,
  row3Image2,
  row3Image3,
  row3Image4,
];

export type teamMember = {
  avatar: StaticImageData;
  name: string;
  title: string;
};
export const teamMembers: teamMember[] = [
  {
    avatar: hiranSenevirathna,
    name: "Hiran Senivirathna",
    title: "President",
  },
  {
    avatar: chamikaRohan,
    name: "Chamilka Rohan",
    title: "Photography & Videography Lead",
  },
  {
    avatar: pasanSilva,
    name: "Pasan Silva",
    title: "Vice President",
  },
  {
    avatar: chalakaThisaruwan,
    name: "Chalaka Thisaruwan",
    title: "Secretary",
  },
  {
    avatar: kasunDilshan,
    name: "Kasun Dilshan",
    title: "Junior Treasurer",
  },
  {
    avatar: vidhuraPolgolla,
    name: "Vidhura Polgolla",
    title: "Editor",
  },
];

export type contact = {
  title: string;
  Icon: (props: IconProps) => JSX.Element;
  description: string;
  details: string;
};

export const contacts: contact[] = [
  {
    title: "Email",
    description: "Our friendly team is here to help.",
    details: "contactrefmedia@gmail.com",
    Icon: Icons.mail,
  },
  {
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    details: "+94 41 22 22222",
    Icon: Icons.phone,
  },
  {
    title: "Address",
    description: "Come say hello at our faculty.",
    details:
      "Engineering Faculty, University of Ruhuna, Hapugala, Galle, Sri Lanka",
    Icon: Icons.map,
  },
];

export type socialLink = {
  Icon: (props: IconProps) => JSX.Element;
  linkText: string;
  to: string;
};

export const socialLinks: socialLink[] = [
  {
    Icon: Icons.facebook,
    linkText: "Facebook",
    to: "https://web.facebook.com/refmediauor",
  },
  {
    Icon: Icons.youtube,
    linkText: "Youtube",
    to: "https://www.youtube.com/@refmedia",
  },
  {
    Icon: Icons.linkedIn,
    linkText: "LinkedIn",
    to: "https://www.linkedin.com/company/ref-media",
  },
];

export type evolutionOfLogo = {
  imgSrc: StaticImageData;
  title: string;
  year: string;
};

export const evolutionOfLogos: evolutionOfLogo[] = [
  {
    imgSrc: logo1,
    title: "The Beginning",
    year: "2016",
  },
  {
    imgSrc: logo2,
    title: "Embracing Modernity",
    year: "2018",
  },
  {
    imgSrc: logo3,
    title: "A Bold New Identity",
    year: "2024",
  },
];

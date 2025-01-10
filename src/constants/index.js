import { records, screening, user, apps } from "../assets";

export const navlinks = [
  {
    name: "Dashboard",
    imgUrl: apps,
    link: "/home",
  },
  {
    name: "Records",
    imgUrl: records,
    link: "/medical-records",
  },
  {
    name: "Screening",
    imgUrl: screening,
    link: "/screening-schedules",
  },

  {
    name: "Profile",
    imgUrl: user,
    link: "/profile",
  },
];
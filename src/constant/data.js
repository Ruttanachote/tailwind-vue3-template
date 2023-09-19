import userImg from "@/assets/images/all-img/user2.png";
import user2Img from "@/assets/images/all-img/user2.png";
import user3Img from "@/assets/images/all-img/user3.png";
import user4Img from "@/assets/images/all-img/user4.png";

export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    child: [
      {
        childtitle: "Blank Page",
        childlink: "blank-page",
      },
    ],
  },
];
export const topMenu = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    child: [
      {
        childtitle: "Blank Page",
        childlink: "blank-page",
      },
    ],
  },
];
export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",
    image: userImg,
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: user2Img,
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",
    image: user3Img,
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",
    image: user4Img,
    link: "#",
  },
];





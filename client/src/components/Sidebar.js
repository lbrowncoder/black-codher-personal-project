import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IoIcons5 from "react-icons/io5";
import * as HiIcons from "react-icons/hi";

export const Sidebar = [
 {
  title: "Home",
  path: "/",
  icon: <AiIcons.AiFillHome />,
  cName: "nav-text",
 },
 {
  title: "Nursery Search",
  path: "/search",
  icon: <FaIcons.FaSearchLocation />,
  cName: "nav-text",
 },
 {
  title: "Guides",
  path: "/guide",
  icon: <IoIcons5.IoBookOutline />,
  cName: "nav-text",
 },
 {
  title: "Write A Review",
  path: "/reviewform",
  icon: <HiIcons.HiOutlinePencilAlt />,
  cName: "nav-text",
 },
 {
  title: "Sign Up",
  path: "/signup",
  icon: <IoIcons5.IoPersonCircleSharp />,
  cName: "nav-text",
 },
 {
  title: "About",
  path: "/about",
  icon: <IoIcons.IoMdHelpCircle />,
  cName: "nav-text",
 },
];

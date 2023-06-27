import "./style.scss";
import {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
} from "./modules/functions";

import { loadHeader } from "./modules/header";
import { loadHomePage } from "./modules/home";
import { loadMenuPage } from "./modules/menu";
import { loadContactPage } from "./modules/contact";
import { loadFooter } from "./modules/footer";

/* Header - Start */
loadHeader();
/* Header - End */

/* Content Pages - Start */

loadHomePage();
loadMenuPage();
loadContactPage();

/* Content Pages - End */

/* Footer - Start */
loadFooter();
/* Footer - End */

/* Eventlistener for Nav Bar */

const homeButton = document.querySelector(".nav0");
homeButton.addEventListener("click", () => {
  const homeSection = document.querySelector("#home");
  homeSection.classList.remove("hide");
  const menuSection = document.querySelector("#menu");
  menuSection.classList.add("hide");
  const contactSection = document.querySelector("#contact");
  contactSection.classList.add("hide");
});

const menuButton = document.querySelector(".nav1");
menuButton.addEventListener("click", () => {
  const homeSection = document.querySelector("#home");
  homeSection.classList.add("hide");
  const menuSection = document.querySelector("#menu");
  menuSection.classList.remove("hide");
  const contactSection = document.querySelector("#contact");
  contactSection.classList.add("hide");
});

const contactButton = document.querySelector(".nav2");
contactButton.addEventListener("click", () => {
  const homeSection = document.querySelector("#home");
  homeSection.classList.add("hide");
  const menuSection = document.querySelector("#menu");
  menuSection.classList.add("hide");
  const contactSection = document.querySelector("#contact");
  contactSection.classList.remove("hide");
});

import "./style.scss";
import logo from "./img/new_cherry_blossom_logo3.jpg";
import noodle1 from "./img/noodle1.jpg";
import bowl1 from "./img/bowl1.jpg";
import ramen1 from "./img/ramen1.jpg";
import sushi1 from "./img/sushi1.jpg";
import sushi2 from "./img/sushi2.jpg";
import sushi3 from "./img/sushi3.jpg";

import {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
} from "./modules/functions";

const allFoodPictures = [noodle1, bowl1, ramen1, sushi1, sushi2, sushi3];
console.log(allFoodPictures[1]);

/* Header - Start */

const header = createTags("header", "header");
expandHtml(document.body, header);

const headerLogo = addPicture(logo, header);

const headerNavi = createTags("ul", "nav");
expandHtml(header, headerNavi);
createMultipleTags("li", 2, headerNavi, ["Home", "Menu", "Contact Us"], "nav");

/* Header - End */

/* Home section - Start */

const home = createTags("section", null, "home");
expandHtml(document.body, home);

const cover = createTags("div", null, "cover");
expandHtml(home, cover);
const coverHeadline = createTags("h1", null, null, "Welcome to Sakura");
expandHtml(cover, coverHeadline);

const foodExamples = createTags("div", null, "food_examples");
expandHtml(home, foodExamples);
const foodExamplesHeadline = createTags(
  "h2",
  null,
  null,
  "Authentic Japanese Dishes"
);
expandHtml(foodExamples, foodExamplesHeadline);

const foodPictures = createTags("div", null, "food_pictures");
expandHtml(foodExamples, foodPictures);

const foodImg1 = addPicture(bowl1, foodPictures);
const foodImg2 = addPicture(ramen1, foodPictures);
const foodImg3 = addPicture(sushi3, foodPictures);

/* Home section - End */

/* Menu section - Star */

const menu = createTags("section", "hide", "menu");
expandHtml(document.body, menu);

const menuHeadline = createTags(
  "h1",
  null,
  "menu_Headline",
  "Best japanese cuisine for the best price!"
);
expandHtml(menu, menuHeadline);

const menuContainer = createTags("div", null, "menu_Container");
expandHtml(menu, menuContainer);

const menuPictures = createMultipleTags(
  "div",
  5,
  menuContainer,
  [
    "Ramen - $12.90",
    "Bowl - $9.90",
    "Noodle Dishes - from $8.90",
    "Sushi Mix - $15.90",
    "California Rolls - $10.90",
    "Sushi Boat - $29.90",
  ],
  "picBox"
);

/* Menu section - End */

/* Contact section - Start */

const contact = createTags("section", "hide", "contact");
expandHtml(document.body, contact);

const contactCover = createTags("div", null, "contact_Cover");
expandHtml(contact, contactCover);

const contactForm = createTags("div", null, "form");
expandHtml(contact, contactForm);

const formHeadline = createTags("h2", null, "form_Head", "Contact Us");
expandHtml(contactForm, formHeadline);

const formInputs = createMultipleTags("input", 1, contactForm);
contactForm.children[1].type = "text";
contactForm.children[1].placeholder = "Name";
contactForm.children[2].type = "text";
contactForm.children[2].placeholder = "Mail-Adress";

const textArea = createTags("textarea");
expandHtml(contactForm, textArea);

const sendButton = createTags("button", null, "send", "Send");
expandHtml(contactForm, sendButton);

const informationBox = createTags("div", null, "contact_Info");
expandHtml(contact, informationBox);

const contactInfo1 = createTags("div", "c_info1");
const contactInfo2 = createTags("div", "c_info2");
expandHtml(informationBox, contactInfo1);
expandHtml(informationBox, contactInfo2);

const adress = createMultipleTags("p", 4, contactInfo1, [
  "Japanese Restaurant Sakura",
  "Kirschblütenweg 3",
  "8010 Graz",
  "Tel.: 0316-123456",
  "E-Mail: office@sakura.com",
]);

const openingHours = createMultipleTags("p", 2, contactInfo2, [
  "Mon: closed",
  "Tue-Fri: 11am - 10pm",
  "Sat+Sun: 9:30am - 11:30pm",
]);

const maps = createTags("iframe");
expandHtml(informationBox, maps);
maps.src =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1360373.8804298334!2d15.245060420185965!3d48.24550791210151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da9c53ee8bd3d%3A0xf0c02b0e5e31cd4c!2sRestaurant%20Sakura!5e0!3m2!1sde!2sat!4v1687802401494!5m2!1sde!2sat";

/* Contact section - End */

/* Footer - Start */

const footer = createTags("footer", "footer");
expandHtml(document.body, footer);

const terms = createTags("div", "terms");
expandHtml(footer, terms);

const termsLinks = createMultipleTags("a", 1, terms, [
  "Terms of Use",
  "Privacy Policy",
]);

const socialMedia = createTags("div", "socialmedia");
expandHtml(footer, socialMedia);

const follow = createTags("span", null, null, "Follow us on:");
expandHtml(socialMedia, follow);

const socialMediaLinks = createMultipleTags("a", 2, socialMedia);
const socialMediaIcon1 = createTags("i", "fa-brands");
socialMediaIcon1.classList.add("fa-facebook");
expandHtml(socialMedia.children[1], socialMediaIcon1);

const socialMediaIcon2 = createTags("i", "fa-brands");
socialMediaIcon2.classList.add("fa-instagram");
expandHtml(socialMedia.children[2], socialMediaIcon2);

const socialMediaIcon3 = createTags("i", "fa-brands");
socialMediaIcon3.classList.add("fa-twitter");
expandHtml(socialMedia.children[3], socialMediaIcon3);
/* Footer - End */

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

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
createMultipleTags("li", 3, headerNavi, [
  "Home",
  "Menu",
  "Gallery",
  "Contact Us",
]);

/* Header - End */

/* Home section - Start */

const home = createTags("section", "hide", "home");
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

const menu = createTags("section", null, "menu");
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

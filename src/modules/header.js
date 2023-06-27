"use strict";

import logo from "../img/new_cherry_blossom_logo3.jpg";
import {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
} from "./functions";

const loadHeader = () => {
  const header = createTags("header", "header");
  expandHtml(document.body, header);

  const headerLogo = addPicture(logo, header);

  const headerNavi = createTags("ul", "nav");
  expandHtml(header, headerNavi);
  createMultipleTags(
    "li",
    2,
    headerNavi,
    ["Home", "Menu", "Contact Us"],
    "nav"
  );
};

export { loadHeader };

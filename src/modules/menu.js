"use strict";

import * from "./functions";

const loadMenuPage = () => {
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
};

export { loadMenuPage };

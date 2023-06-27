"use strict";

import bowl1 from "../img/bowl1.jpg";
import ramen1 from "../img/ramen1.jpg";
import sushi3 from "../img/sushi3.jpg";

import {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
} from "./functions";

/* Home section - Start */

const loadHomePage = () => {
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
};

/* Home section - End */

export { loadHomePage };

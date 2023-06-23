import "./style.scss";

import { createTags, expandHtml } from "./modules/functions";

const htmlTags = createTags(["div", "h1"]);
expandHtml(document.body, htmlTags);

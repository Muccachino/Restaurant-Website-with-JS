"use strict"

import * from "./functions"

const loadFooter = () => {
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
};

export {loadFooter};
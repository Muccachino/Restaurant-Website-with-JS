"use strict";

import * from "./functions";

const loadContactPage = () => {
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
};

export { loadContactPage };

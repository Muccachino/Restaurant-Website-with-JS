"use strict";

function createTags(htmlTags) {
  let tags = [];
  for (let item of htmlTags) {
    tags.push(document.createElement(item));
  }
  return tags;
}

function expandHtml(expand, tags) {
  for (let item of tags) {
    expand.appendChild(item);
  }
}

export { createTags, expandHtml };

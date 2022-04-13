import { createApp } from "vue";
import { createPrismic } from "@prismicio/vue";
import * as prismicH from "@prismicio/helpers";

import App from "./App.vue";
import "./index.css";


const htmlSerializer: prismicH.HTMLMapSerializer = {
  heading1: ({ children }) => `<h1 class="text-3xl font-bold">${children}</h1>`,
  heading6: ({ children }) => `<p class="text-xl italic">${children}</p>`,
  paragraph: ({ children }) => {
    const parsedChildren = children.replace(/`(.*?)`/g, "<code class=\"bg-gray-200 rounded py-px px-1 font-mono\">$1</code>");

    return `<p>${parsedChildren}</p>`
  },
  list: ({ children }) => `<ul class="list-disc list-inside">${children}</ul>`,
  oList: ({ children }) => `<ul class="list-decimal list-inside">${children}</ul>`,
};

createApp(App).use(createPrismic({
  endpoint: "html-serializer",
  htmlSerializer
})).mount("#app")

import { createApp } from "vue";
import { createPrismic } from "@prismicio/vue";

import App from "./App.vue";
import "./index.css";

import { htmlSerializer } from "./htmlSerializer";

createApp(App).use(createPrismic({
  endpoint: "html-serializer",
  htmlSerializer
})).mount("#app")

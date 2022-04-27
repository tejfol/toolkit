import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

import BaseButton from "./components/base/base.button.component.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);

app.use(router);
app.mount("#app");

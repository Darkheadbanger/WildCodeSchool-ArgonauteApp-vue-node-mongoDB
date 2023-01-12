import { createApp } from "vue";
import application from "./App.vue";
import route from "./router";
let app = createApp(application);
app.use(route), app.mount("#app");

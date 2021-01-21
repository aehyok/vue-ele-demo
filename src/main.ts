import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import Component from "vue-class-component";

const app = createApp(App);
// Register the router hooks with their names
// Component.registerHooks(["beforeRouteEnter", "beforeRouteLeave", "beforeRouteUpdate"]);
app.use(ElementPlus, { size: "medium", zIndex: 3000 });
app
  .use(store)
  .use(router)
  .mount("#app");

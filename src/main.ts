import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import axios from "axios";
import * as echarts from "echarts";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$echarts = echarts;
app.use(ElementPlus, { size: "medium", zIndex: 3000 });
app
  .use(store)
  .use(router)
  .mount("#app");

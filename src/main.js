import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";

createApp(App)
  .use(router)
  .use(
    AOS.init({
      duration: 800,
      delay: 300,
    })
  )
  .mount("#app");

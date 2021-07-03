import { name } from "../package.json";
import router from "./router";
import App from "./App.vue";
export default {
  name,
  install(
    /**
     * @type {import('vue-module-loader/src/interfaces').Context}
     */
    context
  ) {
    const app = context.Vue.createApp(App);
    app.use(router);
    app.mount("#app");
    context.app = app;
  },
};

import { name } from "../package.json";
import router from "./router";
import App from "./App.vue";
// 导出模块定义对象
export default {
  name,
  install(
    /**
     * @type {import('vue-module-loader/src/interfaces').Context}
     */
    context
  ) {
    const app = context.Vue.createApp(App);
    // 主框架实例化后应存储在上下文对象中供其他模块安装时使用
    context.app = app;
    app.use(router);
    app.mount("#app");
  },
};

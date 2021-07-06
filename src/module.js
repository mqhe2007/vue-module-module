import { name } from "../package.json";
import routes from "./routes";
// 导出模块定义对象
export default {
  name,
  install(
    /**
     * @type {import('vue-module-loader/src/interfaces').Context}
     */
    context
  ) {
    routes.forEach(item => {
      context.app.config.globalProperties.$router.addRoute(item);
    });
  },
};

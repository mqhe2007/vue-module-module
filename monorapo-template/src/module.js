import { name } from "../package.json";
import routes from "./router/routes";
/**
 * 模块运行入口文件
 * 导出模块名和安装方法（模块定义）
 */
export default {
  name,
  install(
    /**
     * @type {import('vue-module-loader/src/interfaces').Context}
     */
    context
  ) {
    routes.forEach((item) => {
      context.app.config.globalProperties.$router.addRoute(item);
    });
  },
};

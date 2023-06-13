/**
 * 模块独立运行入口文件
 * 启动开发服务的入口文件
 * 打包为模块时，该文件不会被打包。
 */
import { createApp } from "vue";
import { useModule } from "vue-module-loader";
const main = async () => {
  const mainModule = await import("<主应用包>");
  await useModule(mainModule.default, { createApp });
  const thisModule = await import("./module");
  useModule(thisModule.default);
};
main();

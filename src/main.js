/**
 * 模块独立运行入口文件
 * 启动开发服务的入口文件
 * 打包为模块时，该文件不会被打包。
 */
import * as Vue from "vue";
import { useModule } from "vue-module-loader";
import localModule from "./module";
useModule(
  "https://mqhe2007.github.io/vue-module-frame/module/vue-module-frame.iife.js",
  { Vue }
).then(() => {
  useModule(localModule);
});

import * as Vue from "vue";
import { useModule } from "vue-module-loader";
import localModule from "./module";
useModule(
  "http://static.mengqinghe.com/vml/frame/vue-module-frame.iife.js",
  Vue
).then(() => {
  useModule(localModule);
});

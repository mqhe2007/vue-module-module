import { useModule } from "vue-module-loader";
import localModule from "./module";
useModule(
  "http://static.mengqinghe.com/vml/frame/vue-module-frame.iife.js"
).then(() => {
  useModule(localModule);
});

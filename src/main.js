import * as Vue from "vue";
import { useModule } from "vue-module-loader";
import localModule from "./module";
useModule(
  "https://mqhe2007.github.io/vue-module-frame/module/vue-module-frame.iife.js",
  { Vue }
).then(() => {
  useModule(localModule);
});

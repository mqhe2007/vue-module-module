import vue from "@vitejs/plugin-vue";
import { name } from "./package.json";
import { resolve } from "path";
function camelize(str) {
  return (str + "").replace(/-\D/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
export default ({ command }) => {
  /**
   * @type {import('vite').UserConfig}
   */
  const config = {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    plugins: [vue()],
  };
  if (
    command === "build" &&
    process.env.npm_lifecycle_event === "build:module"
  ) {
    config.define = {
      "process.env.NODE_ENV": '"production"',
    };
    config.build = {
      outDir: "./dist/module",
      sourcemap: "inline",
      lib: {
        entry: resolve(__dirname, "src/module.js"),
        // 格式必须为iife
        formats: ["iife"],
        name: camelize(name),
      },
      minify: false,
      rollupOptions: {
        // 为了使用同一vue对象，所有模块必须外置化vue
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
    };
  }
  return config;
};

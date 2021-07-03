import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
export default ({ command }) => {
  /**
   * @type {import('vite').UserConfig}
   */
  const config = {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: [vue()],
  };
  if (command === "build" && process.env.BUILD_MODULE === "1") {
    config.build = {
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, "src/module.js"),
        formats: ["iife"],
        name: "viteModule",
      },
      minify: false,
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue"],
      },
    };
  }
  return config;
};

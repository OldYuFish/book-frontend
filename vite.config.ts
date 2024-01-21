import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, `${__dirname}/env`);
  return {
    envDir: "./env/",
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: true,
          filepath: "./src/.eslintrc-auto-import.json",
        },
        dts: "./src/auto-imports.d.ts",
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dts: "./src/components.d.ts",
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        vue: resolve("./node_modules/vue"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/element-variables.scss" as *;',
        },
      },
    },
  };
});

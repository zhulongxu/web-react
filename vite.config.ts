import { defineConfig } from "vite";
import * as path from "path";
import  plugins  from "./plugins/index";
export default defineConfig({
  base:'./',
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", //ip地址
    port: 8086, // 设置服务启动端口号
  },
});

import { defineConfig } from "vite";
import * as path from "path";
export default defineConfig({
  base:'./',
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

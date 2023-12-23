import { defineConfig, loadEnv, UserConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    build: {
      outDir: "build",
    },
    server: {
      open: true,
      port: parseInt(env.PORT),
    },
  };
});

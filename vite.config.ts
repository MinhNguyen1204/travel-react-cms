import { UserConfig, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgrPlugin()
    ],
    build: {
      outDir: 'build',
    },
    server: {
      open: true,
      port: parseInt(env.PORT),
    }
  }
});

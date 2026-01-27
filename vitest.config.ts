import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: true,
      server: {
        deps: {
          inline: ['@devexpress/dx-react-grid-material-ui', '@mui/material', '@mui/icons-material'],
        },
      },
    },
  })
);

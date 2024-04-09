import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run site-mobile:start',
        production: 'nx run site-mobile:preview',
      },
      ciWebServerCommand: 'nx run site-mobile:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

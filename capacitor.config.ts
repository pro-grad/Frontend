import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.studentx.beta',
  appName: 'StudentX Beta',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;

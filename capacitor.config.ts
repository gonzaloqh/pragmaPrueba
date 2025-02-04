import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pragma.test',
  appName: 'PruebaTecnica',
  webDir: 'www',
  backgroundColor: '#00000000',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#00000000',
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      showSpinner: false
    },
    StatusBar: {
      overlaysWebView: true
    }
  }
};

export default config;

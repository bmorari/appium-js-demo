import { join } from 'node:path';

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android Emulator',
  'appium:app': join(__dirname, 'app', 'sauce-demo.apk'),
  'appium:autoGrantPermissions': true,
  'appium:noReset': false,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 120
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: Number(process.env.APPIUM_PORT) || 4723,
  path: '/',
  logLevel: 'info',
  capabilities
};

export default { wdOpts };

// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // 🔹 Common settings for all tests
  use: {
    headless: false,          // Browser visible rahega
    trace: 'on-first-retry',  // First retry pe trace
  },

  projects: [

    // ================= DESKTOP (MAXIMIZED – NO DEVICES) =================
    {
      name: 'Desktop Chrome',

      use: {
        browserName: 'chromium',   // Desktop browser
        viewport: null,            // ✅ Full screen (important)
        launchOptions: {
          args: ['--start-maximized'], // ✅ Chrome maximize
        },
      },
    },

    // ================= MOBILE (DEVICE BASED) =================
    {
      name: 'Mobile Chrome',

      use: {
        ...devices['Pixel 5'], // ✅ Mobile viewport + scale factor
        // ❌ viewport null yahan nahi aayega
      },
    },

    // ================= REAL GOOGLE CHROME (OPTIONAL) =================
    {
      name: 'Google Chrome',

      use: {
        channel: 'chrome',     // Real Chrome
        viewport: null,        // Full screen
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});

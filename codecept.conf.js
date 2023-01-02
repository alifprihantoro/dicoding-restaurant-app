const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/**/*.spec.js',
  output: './e2e/out/',
  helpers: {
    Playwright: {
      url: 'http://localhost:8080',
      show: true,
      browser: 'chromium',
      timeout: 90000,
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'restaurant-apps',
}

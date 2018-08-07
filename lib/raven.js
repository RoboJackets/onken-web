import Raven from 'raven-js';

// https://gist.github.com/impressiver/5092952
const clientIgnores = {
  ignoreErrors: [
    'top.GLOBALS',
    'originalCreateNotification',
    'canvas.contentDocument',
    'MyApp_RemoveAllHighlights',
    'http://tt.epicplay.com',
    "Can't find variable: ZiteReader",
    'jigsaw is not defined',
    'ComboSearch is not defined',
    'http://loading.retry.widdit.com/',
    'atomicFindClose',
    'fb_xd_fragment',
    'bmi_SafeAddOnload',
    'EBCallBackMessageReceived',
    'conduitPage',
    'Script error.',
  ],
  ignoreUrls: [
    // Facebook flakiness
    /graph\.facebook\.com/i,
    // Facebook blocked
    /connect\.facebook\.net\/en_US\/all\.js/i,
    // Woopra flakiness
    /eatdifferent\.com\.woopra-ns\.com/i,
    /static\.woopra\.com\/js\/woopra\.js/i,
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
    // Other plugins
    /127\.0\.0\.1:4001\/isrunning/i, // Cacaoweb
    /webappstoolbarba\.texthelp\.com\//i,
    /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
  ],
}

const options = {
  autoBreadcrumbs: true,
  captureUnhandledRejections: true,
}

const dsn = process.env ? process.env.SENTRY_DSN : ''
let IsomorphicRaven = null

if (dsn) {
  if (process.browser === true) {
    const config = {
      ...clientIgnores,
      ...options,
    }
    IsomorphicRaven = Raven
    IsomorphicRaven.config(dsn, config).install()
  } else {
    IsomorphicRaven = eval("require('raven')")
    IsomorphicRaven.config(dsn, options).install()
  }
}

export default IsomorphicRaven;
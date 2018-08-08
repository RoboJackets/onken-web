import NextError from 'next/error'
import IsomorphicRaven from '../lib/raven'

class MyError extends NextError {
  static async getInitialProps(context) {
    if (context.err && process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
      // Log error to Sentry
      IsomorphicRaven.captureException(context.err)
    }
    return await NextError.getInitialProps(context)
  }
}

export default MyError
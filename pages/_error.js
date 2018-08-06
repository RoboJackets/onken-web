import NextError from 'next/error';
import IsomorphicRaven from '../lib/raven';

class MyError extends NextError {
  static getInitialProps = async (context) => {
    if (context.err && process.env.NODE_ENV === 'production') {
      // Log error to Sentry
      IsomorphicRaven.captureException(context.err)
    }
    console.log(process.env.NODE_ENV)
    const errorInitialProps = await NextError.getInitialProps(context)
    return errorInitialProps
  }
}

export default MyError;
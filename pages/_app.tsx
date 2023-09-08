import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks/browser')
  worker.start()
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

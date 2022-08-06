import Layout from '../components/layout'
require('../styles/globals.css');


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
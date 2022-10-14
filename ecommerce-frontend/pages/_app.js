import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp

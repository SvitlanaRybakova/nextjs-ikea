import { Fragment } from 'react'

import { AuthProvider } from '../context/AuthContext'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Fragment>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Fragment>
    </AuthProvider>
  )
}

export default MyApp

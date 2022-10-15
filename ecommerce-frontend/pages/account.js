import React, { Fragment, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { HOME_URL } from '../utils/constants'
import AuthContext from '../context/AuthContext'

const Account = () => {
  const { user, logoutUser } = useContext(AuthContext)

  if (!user) {
    return (
      <div>
        <p>Please login or register</p>
        <Link href={HOME_URL}>
          <a>Go back</a>
        </Link>
      </div>
    )
  }
  return (
    <Fragment>
      <Head>
        <title>IKEA || Account</title>
        <meta name="description" content="The account page, view ypur orders" />
      </Head>
      <h2>Account page</h2>
      <a href={HOME_URL} onClick={logoutUser}>
        Logout
      </a>
    </Fragment>
  )
}
export default Account

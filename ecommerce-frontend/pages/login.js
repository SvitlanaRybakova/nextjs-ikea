import React, { Fragment, useContext, useState } from 'react'
import Head from 'next/head'

import AuthContext from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const { loginUser } = useContext(AuthContext)

  const handleOnchange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginUser(email)
  }

  return (
    <Fragment>
      <Head>
        <title>IKEA || Login </title>
        <meta name="description" content={`login here to make your purchase`} />
      </Head>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type={'email'}
          value={email}
          onChange={handleOnchange}
          placeholder={'Email Address'}
        />
        <button type={'submit'}>Login</button>
      </form>
    </Fragment>
  )
}

export default Login

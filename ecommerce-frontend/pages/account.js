import React, { Fragment, useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { HOME_URL, API_URL } from '../utils/constants'
import AuthContext from '../context/AuthContext'

const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            if (user) {
                try {
                    const token = await getToken()
                    const order_res = await fetch(`${API_URL}/api/orders`
                    //     , {
                    //     headers: {
                    //         Authorization: `Bearer ${token}`,
                    //     },
                    // }
                    )
                    const data = await order_res.json()
                    setOrders(data)
                } catch (err) {
                    setOrders([])
                }
            }
        }
        fetchOrders()
    }, [user])

    return orders
}


const Account = () => {
  const { user, logoutUser, getToken } = useContext(AuthContext)

    const orders = useOrders(user, getToken)
    console.log("Account. render orders", orders)

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

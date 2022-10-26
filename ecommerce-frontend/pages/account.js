import React, { Fragment, useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {MdDeleteOutline, MdOutlineAdd, MdOutlineRemove} from "react-icons/md"

import { HOME_URL, API_URL, ICON_SIZE } from '../utils/constants'
import AuthContext from '../context/AuthContext'
import {fromImageToUrl} from "../utils/utils"

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const token = await getToken()
          const order_res = await fetch(
            `${API_URL}/api/orders?filters[checkout_session][$eq]=${user.email}&&populate[product][populate]=img`,
            //     , {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
          )
          const data = await order_res.json()
          const destructureObj = data.data.map((order) => {
            return {
              img: order.attributes.product.data.attributes.img.data.attributes,
              name: order.attributes.product.data.attributes.name,
              price: order.attributes.product.data.attributes.price,
              category: order.attributes.product.data.attributes.category,
              subcategory: order.attributes.product.data.attributes.subcategory,
              slug: order.attributes.product.data.attributes.slug,
            }
          })
          setOrders(destructureObj)
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
      <main>
        <div className="container cart-wrapper">
          <h2 className="cart-header">Cart</h2>
          {!orders && <div>Loading...</div>}
              <ul className="cart-list">
                {orders.map(order => (
                    <li className="cart-item">
                      <div className="product">
                        <div className="product__image-container">
                          <img
                              src={fromImageToUrl(order.img)}
                              alt={order.name}
                          />
                        </div>
                        <div className="product__description">
                          <h3 className="product__name">
                            <Link href={`/product/${order.slug}`}>
                              <a>{order.name}</a>
                            </Link>
                          </h3>
                          <p className="product_description-text">
                            {order.category} {order.subcategory}
                          </p>
                        </div>
                        <div className="product__prices">
                          <div className="product__price-type product__price-type-regular">
                            <div>
                              <div className="product__total product__total-regular">
                                {order.price}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product__controls">
                          <div className="product-controls__remove">
                            <button type="button" className="btn">
                              <MdDeleteOutline size={ICON_SIZE}/>
                            </button>
                            <button className="btn"><MdOutlineRemove size={ICON_SIZE}/></button>
                            <p className="counter">1</p>
                            <button className="btn"><MdOutlineAdd size={ICON_SIZE}/></button>
                          </div>
                        </div>
                      </div>
                    </li>
                ))}

              </ul>
            <div className="cart-total">
            <span className="cart-total-label">Ammount</span>
            <span className="cart-total-price">297.-</span>
            </div>



          {/*<form id="form" className="cart-form">*/}
          {/*    <label>*/}
          {/*        <input type="text" name="name" placeholder="Ваше имя">*/}
          {/*    </label>*/}
          {/*    <label>*/}
          {/*        <input type="email" name="email" placeholder="Ваш email">*/}
          {/*    </label>*/}
          {/*    <button type="submit" className="cart-checkout">Оформить</button>*/}
          {/*</form>*/}
        </div>
      </main>
    </Fragment>
  )
}
export default Account

import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { FcLikePlaceholder } from 'react-icons/fc'
import { GiBasket } from 'react-icons/gi'
import logoImg from '../../images/ikea-logo.svg'

import {
  ICON_SIZE,
  HOME_URL,
  LOGIN_URL,
  ACCOUNT_URL,
} from '../../utils/constants'
import AuthContext from '../../context/AuthContext'

export default function Navbar() {
  const { user } = useContext(AuthContext)

  return (
    <header>
      <div className="container">
        <div className="header">
          <button className="btn btn-burger" aria-label="open the menu">
            <FiMenu size={ICON_SIZE} />
          </button>
          <Link href={HOME_URL} className="logo">
            <a>
              <Image src={logoImg} alt="IKEA logo" width={500} height={500} />
            </a>
          </Link>
          {/* TODO implement search*/}
          <form className="search">
            <input
              type="search"
              name="s"
              maxLength="150"
              className="search-input"
              spellCheck="false"
              aria-label="Search for products,"
              aria-placeholder="Search for products,"
              placeholder="Search"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
            />
            <button
              type="submit"
              className="btn search-btn"
              aria-label="find"
            />
          </form>
          {/*  TODO: redirect to wishList*/}
          <button className="btn btn-wishlist">
            <FcLikePlaceholder size={ICON_SIZE} className="pointer" />
          </button>
          {/*  TODO: redirect to cart*/}
          <button className="btn btn-cart">
            <GiBasket size={ICON_SIZE} />
          </button>
        </div>
      </div>
      <div className="auth" style={{ border: '1px solid red' }}>
        {user ? (
          <Link href={ACCOUNT_URL}>
            <a>{user.email}</a>
          </Link>
        ) : (
          <Link href={LOGIN_URL}>
            <a>Log in</a>
          </Link>
        )}
      </div>
    </header>
  )
}

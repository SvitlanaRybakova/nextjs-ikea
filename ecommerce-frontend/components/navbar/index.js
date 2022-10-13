import Link from 'next/link'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { FcLikePlaceholder } from 'react-icons/fc'
import { GiBasket } from 'react-icons/gi'
import logoImg from '../../image/ikea-logo.svg'

import { ICON_SIZE } from '../../utils/constants'

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <button className="btn btn-burger" aria-label="open the menu">
            <FiMenu size={ICON_SIZE} />
          </button>
          <Link href="/" className="logo">
            <Image src={logoImg} alt="IKEA logo" width={500} height={500} />
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
          <button href="goods.html?cat=wishlist" className="btn btn-wishlist">
            <FcLikePlaceholder size={ICON_SIZE} className="pointer" />
          </button>
          {/*  TODO: redirect to cart*/}
          <button className="btn btn-cart">
            <GiBasket size={ICON_SIZE} />
          </button>
        </div>
      </div>
    </header>
  )
}

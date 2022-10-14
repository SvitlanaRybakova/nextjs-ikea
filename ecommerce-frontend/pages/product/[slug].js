import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {TiShoppingCart} from "react-icons/ti"
import {FaRegHeart} from "react-icons/fa"

import { capitalizeFirstLetter, fromImageToUrl } from '../../utils/utils'
import {ICON_SIZE} from "../../utils/constants"
import products from '../../products.json'

const ProductDetails = () => {
  const router = useRouter()
  const productId = router.query.slug

  const product = products.data[0].attributes
  return (
    <Fragment>
      <Head>
        <title>IKEA || {capitalizeFirstLetter(productId)} </title>
        <meta
          name="description"
          content={`details page for ${capitalizeFirstLetter(
            productId,
          )} product`}
        />
      </Head>
      <h1>This is product details {capitalizeFirstLetter(productId)}</h1>

      <div className="container">
        <div className="breadcrumb">
          <nav
            role="navigation"
            aria-label="Breadcrumb"
            className="breadcrumb__nav"
          >
            <ul className="breadcrumb__list">
              <li className="breadcrumb__list-item">
                <Link href={`/categories/${product.category}`}>
                  <a className="breadcrumb__link">
                    <span>{product.category}</span>
                  </a>
                </Link>
              </li>

              <li className="breadcrumb__list-item">
                <Link href={`/categories/${product.subcategory}`}>
                  <a className="breadcrumb__link">
                    <span>{product.subcategory}</span>
                  </a>
                </Link>
              </li>

              <li className="breadcrumb__list-item">
                <Link href={`/product/${product.name}`}>
                  <a className="breadcrumb__link">
                    <span>{product.name}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="good wrapper">
          <div className="good-images">
            <div className="good-image__item">
              <img src={fromImageToUrl(product?.image)} alt={product.name} />
            </div>
          </div>
          <div className="good-item">
            <p className="good-item__new">New</p>

            <div
              className="good-item__section"
              style={{ border: '1px solid red' }}
            >
              <div style={{ width: '75%' }}>
                <h2 className="good-item__header">{product?.name}</h2>
                <p className="good-item__description">{product?.description}</p>
              </div>
              <p className="good-item__price" style={{ width: '20%' }}>
                <span className="good-item__count">
                  left: {product?.count} pcs
                </span>
                <span className="good-item__price-value">{product?.price}</span>
                <span className="good-item__currency"> SEK</span>
              </p>
            </div>

            <div className="good-item__buttons">
              <button type="button" className="btn btn-good" data-idd="idd001">
                <TiShoppingCart size={ICON_SIZE}/>
                <span className="btn-good__label">Add to Cart</span>
              </button>
              <button
                type="button"
                className="btn btn-add-wishlist"
                data-idd="idd001"
              >
                <FaRegHeart size={ICON_SIZE} className="btn-add-wishlist__svg"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default ProductDetails

import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { TiShoppingCart } from 'react-icons/ti'
import { FaRegHeart } from 'react-icons/fa'

import { capitalizeFirstLetter, fromImageToUrl } from '../../utils/utils'
import {
  ICON_SIZE,
  API_URL,
  CATEGORIES_URL,
  PRODUCT_URL,
} from '../../utils/constants'

const ProductDetails = ({ product }) => {
  const router = useRouter()
  const productId = router.query.slug

  const { category, count, description, name, price, slug, subcategory, img } =
    product.data[0].attributes

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
      <div className="container">
        <div className="breadcrumb">
          <nav
            role="navigation"
            aria-label="Breadcrumb"
            className="breadcrumb__nav"
          >
            <ul className="breadcrumb__list">
              <li className="breadcrumb__list-item">
                <Link href={`${CATEGORIES_URL}/${category}`}>
                  <a className="breadcrumb__link">
                    <span>{category}</span>
                  </a>
                </Link>
              </li>

              <li className="breadcrumb__list-item">
                <Link href={`${PRODUCT_URL}/${name}`}>
                  <a className="breadcrumb__link">
                    <span>{name}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="good wrapper">
          <div className="good-images">
            <div className="good-image__item">
              <img src={fromImageToUrl(img?.data?.attributes)} alt={name} />
            </div>
          </div>
          <div className="good-item">
            <p className="good-item__new">New</p>

            <div
              className="good-item__section"
              style={{ border: '1px solid red' }}
            >
              <div style={{ width: '75%' }}>
                <h2 className="good-item__header">{name}</h2>
                <p className="good-item__description">{description}</p>
              </div>
              <p className="good-item__price" style={{ width: '20%' }}>
                <span className="good-item__count">left: {count} pcs</span>
                <span className="good-item__price-value">{price}</span>
                <span className="good-item__currency"> SEK</span>
              </p>
            </div>

            <div className="good-item__buttons">
              <button type="button" className="btn btn-good" data-idd="idd001">
                <TiShoppingCart size={ICON_SIZE} />
                <span className="btn-good__label">Add to Cart</span>
              </button>
              <button
                type="button"
                className="btn btn-add-wishlist"
                data-idd="idd001"
              >
                <FaRegHeart
                  size={ICON_SIZE}
                  className="btn-add-wishlist__svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

// export const getStaticProps = async({params: {slug}}) => {
//   const product_res = await fetch(`${API_URL}/api/products/?slug=${slug}`)
//   const found_product = await product_res.json()
//
//   return {
//     props: {
//       product : found
//     }
//   }
// }
// export const getStaticPath = async () => {
//   // Retrieve all the possible paths
//   const product_res = await fetch(`${API_URL}/api/products/`)
//   const products = await product_res.json()
//
//   // Return them to NextJS context
//   return {
//     // fallback: false > Tells to next.js to show a 404 if the param doesn't match
//     fallback: false,
//     paths: products.data((product) => ({
//       params: { slug: String(product.attributes.slug) },
//     })),
//   }
// }

export async function getServerSideProps(context) {
  const { slug } = context.params

  // Fetch data from API
  const product_res = await fetch(
    `${API_URL}/api/products/?filters[slug][$eq]=${slug}&&populate=*`,
  )
  const product = await product_res.json()

  return {
    props: {
      product,
    },
  }
}

export default ProductDetails

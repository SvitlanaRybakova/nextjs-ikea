import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { fromImageToUrl, capitalizeFirstLetter } from '../../utils/utils'

const ProductCard = ({ attributes }) => {
  if (!attributes) return

  return (
    <Fragment>
      <li className="goods-list__item">
        {/* TODO: create a path*/}
        <Link href={`/product/${attributes?.slug}`}>
          <a className="goods-item__link">
            <article className="goods-item">
              <div className="goods-item__img">
                <img
                  src={fromImageToUrl(attributes?.img.data?.attributes)}
                  alt={attributes?.name}
                />
              </div>
              <p className="goods-item__new">New</p>
              <h3 className="goods-item__header">{attributes?.name}</h3>
              <p className="goods-item__description">
                {capitalizeFirstLetter(attributes?.subcategory)}
              </p>
              <p className="goods-item__price">
                <span className="goods-item__price-value">
                  {attributes?.price}
                </span>
                <span className="goods-item__currency"> SEK</span>
              </p>
              {/*  TODO: add item to cart */}
              <button
                className="btn btn-add-card"
                aria-label="Add to Cart"
                data-idd="idd001"
              ></button>
            </article>
          </a>
        </Link>
      </li>
    </Fragment>
  )
}
export default ProductCard

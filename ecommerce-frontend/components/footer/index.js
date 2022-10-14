import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import products from '../../products.json'
import { ABOUT_US, CONTACT_US } from '../../utils/constants'
import { capitalizeFirstLetter } from '../../utils/utils'

const Footer = () => {
  const [uniqueCategories, setUniqueCategories] = useState(null)

  const getUniqueCategory = () => {
    // convert obj properties to array of strings
    const map = products.data.map((item) => item.attributes.category)
    // get unique strings
    const set = new Set(map)
    // copy to the array
    setUniqueCategories([...set])
  }

  useEffect(() => {
    getUniqueCategory()
  }, [products])

  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-catalog">
              <h2 className="footer-header">Catalog</h2>
              <ul>
                {uniqueCategories &&
                  uniqueCategories.map((category) => (
                    <li className="footer-list" key={uuidv4()}>
                      {/* TODO: replace to categories/category*/}
                      <Link href={`/categories/${category}`}>
                        {capitalizeFirstLetter(category)}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="footer-about">
              <h2 className="footer-header">About us</h2>
              <ul>
                {ABOUT_US.map((item) => (
                  <li className="footer-list" key={item.id}>
                    <Link href={`/dummy-data/${item.title}`}>
                      {capitalizeFirstLetter(item.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-connection">
              <h2 className="footer-header">Contact us</h2>
              <ul>
                {CONTACT_US.map((item) => (
                  <li className="footer-list" key={item.id}>
                    <Link href={`/dummy-data/${item.title}`}>
                      {capitalizeFirstLetter(item.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer

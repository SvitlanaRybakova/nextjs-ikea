import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { capitalizeFirstLetter } from '../../utils/utils'
import { API_URL } from '../../utils/constants'
import ProductCard from '../../components/productCard'

const Category = ({ products }) => {
  const router = useRouter()
  const category = router.query.category

  return (
    <Fragment>
      <Head>
        <title>IKEA || {capitalizeFirstLetter(category)} </title>
        <meta
          name="description"
          content={`details page for ${capitalizeFirstLetter(category)}`}
        />
      </Head>
      <div className="container">
        <h2 className="main-header">{capitalizeFirstLetter(category)}</h2>
        <div className="goods wrapper">
          <ul className="goods-list">
            {products &&
              products.data.map((product) => (
                <div key={product.id}>
                  <ProductCard attributes={product.attributes} />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  const { category } = context.params
  const url = `http://localhost:1337/api/products/?filters[category][$eq]=${category}&&populate=*`

  // Fetch data from API
  const product_res = await fetch(url)
  const products = await product_res.json()

  return {
    props: {
      products,
    },
  }
}
export default Category

import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { capitalizeFirstLetter } from '../../utils/utils'
import {API_URL} from "../../utils/constants"
import ProductCard from '../../components/productCard'

const Category = ({ products }) => {
  const router = useRouter()
  const category = router.query.category

  return (
    <Fragment>
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
// export const getStaticPath = async () => {
//   const product_res = await fetch(`${API_URL}/api/products/`)
//   const products = await product_res.json()
//
//   return {
//     fallback: true,
//     paths: products.data.map((product) => ({
//       params: {category: product.id}
//     }))
//   }
// }
//
// export const getStaticProps = async () => {
//   // Fetch the products
//   const product_res = await fetch(`${API_URL}/api/products/`)
//   const products = await product_res.json()
//
//   // Return the products as props
//   return {
//     props: {
//       products,
//     },
//   }
// }

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  const {category} = context.params

  // Fetch data from API
  const product_res = await fetch(`${API_URL}/api/products/?filters[category][$eq]=${category}&&populate=*`)
  const products = await product_res.json()

  return {
    props: {
      products,
    },
  }
}
export default Category

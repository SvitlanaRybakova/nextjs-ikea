import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { capitalizeFirstLetter } from '../../utils/utils'
import ProductCard from '../../components/productCard'
import products from '../../products.json'

const Category = () => {
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
export default Category

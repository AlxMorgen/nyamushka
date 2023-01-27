import React from 'react'
import { data } from '../data'
import Product from './Product'

const ProductsBlock = () => {
  const cards = data.map((card) => {
    return <Product key={card.product} productData={card} />
  })
  return <div className='products'>{cards}</div>
}

export default ProductsBlock

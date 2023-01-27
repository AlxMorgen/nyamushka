import React from 'react'
import checkValue from './checkValue'
import { data } from './data'
import Product from './Product'

const cards = data.map((card) => {
  const { product, weigth, description, stock, portions, freeMouse } = card
  const currentMouses = checkValue(
    freeMouse,
    'мышь в подарок',
    ' мыши в подарок',
    ' мышей в подарок',
  )

  const currentPortion = checkValue(portions, 'порция', ' порции', ' порций')

  return (
    <Product
      key={product}
      product={product}
      portions={currentPortion}
      freeMouse={currentMouses}
      weigth={weigth}
      description={description}
      stock={stock}
      storage={data.length}
    />
  )
})

const ProductsBlock = () => {
  return <div className='products'>{cards}</div>
}

export default ProductsBlock

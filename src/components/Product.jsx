import React from 'react'
import cat from '../img/cat.png'
import { useState } from 'react'
import Label from './Label'
import Border from './Border'
import { handlerClick, handlerLeave, handlerHover } from './Handlers'

const Product = (props) => {
  const [isSelected, setIsSelected] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)
  const { weigth, stock, product, description } = props
  return (
    <div
      className={`${!isSelected ? 'product' : 'product selected'} ${
        !isQuestion ? '' : 'question-hover'
      } `}
    >
      <div
        className={stock > 0 ? 'product-inner' : 'product-inner disable'}
        onMouseLeave={() => {
          handlerLeave(isSelected, setIsQuestion)
        }}
        onMouseEnter={() => {
          handlerHover(isSelected, isQuestion, setIsQuestion)
        }}
        onClick={(event) => {
          handlerClick(isSelected, setIsSelected, setIsQuestion, event)
        }}
      >
        <img className='cat-img' src={cat} alt='cat' />
        <span className='ball'>
          <div className='weight'>
            <p>{weigth}</p>
            <p>кг</p>
          </div>
        </span>
        <Label label={props} />
        <Border />
      </div>
      <div className={stock > 0 ? 'buy' : 'buy hidden'}>
        <p>
          Чего сидишь? Порадуй котэ, &nbsp;
          <span
            className={'buy-link'}
            onClick={() => setIsSelected(!isSelected)}
          >
            &nbsp;купи.
          </span>
        </p>
      </div>
      <p className='composition'>{description}</p>

      <div className={stock === 0 ? 'buy sad' : 'buy sad hidden'}>
        Печалька, {product} закончился.
      </div>
    </div>
  )
}

export default Product

import React from 'react'

const Label = (props) => {
  const { product, portions, freeMouse } = props.label
  return (
    <div className='label'>
      <h3 className='firm question'>Котэ не одобряет?</h3>
      <h3 className='firm'>Сказочное заморское яство</h3>
      <h1 className='title'>Нямушка</h1>
      <h2 className='title-description'>{product}</h2>
      <p className='portions'>{portions}</p>
      <p className='description'>{freeMouse}</p>
    </div>
  )
}

export default Label

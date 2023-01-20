import React from 'react'

const Label = (props) => {
    
  return  (
    <div className="label">
        <h3 className="firm question" >Котэ не одобряет?</h3>
        <h3 className="firm">{props.label.firm}</h3>
        <h1 className="title">{props.label.title}</h1>
        <h2 className="title-description">{props.label.title_description}</h2>
        <p className='portions'>{props.label.portions}</p>
        <p className="description">{props.label.freeMouse}</p>
        
        
      </div>
  )
}

export default Label
import React from 'react'

const Product = ({handleClickIncrease,handleClickDecrease,veri}) => {
  return (
    <div>
        <h1>Product </h1>
                    <h1>{veri.product}</h1>
                    <h1>{veri.price}</h1>
                    <h1>{veri.quantity}</h1>
                    <button id={veri.id} onClick = {handleClickIncrease} >increase</button>
                    <button id={veri.id} onClick = {handleClickDecrease} >decrease</button>
    </div>
  )
}

export default Product
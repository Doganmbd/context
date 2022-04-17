import React, { useContext }  from 'react'
import { Context } from './Context'


const Product = ({veri}) => {

  const {handleClickIncrease,handleClickDecrease}= useContext(Context)



  return (
    <div>
      <h1>Product</h1>
        <h4>{veri.product}</h4>
        <h4>{veri.price}</h4>

        <button onClick= {()=> handleClickIncrease(veri.id)} >increase</button>
        
        <button onClick= {()=> handleClickDecrease(veri.id)} >decrease</button>
        
    </div>
  )
}

export default Product
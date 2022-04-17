import React , {useContext} from 'react'
import { Context } from './Context'

const Product = () => {

  //* burada hangi context i kullancaksma use context içerisine parametre olarak  onu göndermem lazım .

  const {data} = useContext(Context)
  

  console.log(data)
  return (
    <div>
        product
    </div>
  )
}

export default Product
import React, {useContext} from 'react'
import { Context } from './Context'
import Product from './Product'


const Products = () => {


  //* burada hangi context i kullancaksma use context içerisine parametre olarak  onu göndermem lazım .Ben artık context içeriisinde value olarak gönderdiğim her şeye bir obje gibi buradan ulaşabilirim.burada işime yarayacak olan tek şey data olduğu için sadece data yı çektim . destructure yaparak.

  const {data}= useContext(Context)

  return (
    <div>

      {data.map((veri)=> (
           <Product
           key={veri.id}
           veri={veri}
           />
      ))}
     
    </div>
  )
}

export default Products
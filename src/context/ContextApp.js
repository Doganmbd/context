import React from 'react'
import Products from './Products';
import { ProductProvider } from "./Context";

//*öncelikle Context.js içerisinde ProductProvider oluşturdum ve kullanacağım bütün fonk. , state,vb. bunun içerisine yerleştirdim.bunun içine yerleştirdiğim zaman diğer componentlerle ilişki kurabilmek için ProductProvider ile sarmalladım.

const ContextApp = () => {
  return (
    <ProductProvider>
        <Products/>
    </ProductProvider>
  )
}

export default ContextApp
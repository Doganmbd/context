import {useState} from 'react';
import Data from "./data";

const ProductApp = () => {


    const [data, setData] = useState(Data)

    console.log(data);


  return (
    <div>ProductApp</div>
  )
}

export default ProductApp
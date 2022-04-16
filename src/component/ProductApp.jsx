import {useState} from 'react';
import Data from "./data";

const ProductApp = () => {


    const [data, setData] = useState(Data)

    console.log(data[0].product);


  return (
    <div>
        {data.map((veri)=>{
            return(
                <div>
                    <h1>{veri.price}</h1>
                </div>
            )
            
        })}
     
        
    </div>
  )
}

export default ProductApp
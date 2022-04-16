import {useState} from 'react';
import Data from "./data";

const ProductApp = () => {


    const [data, setData] = useState(Data)
    

 

    const handleClickIncrease = (e)=> {
        console.log(e.target.id)
        const newData = [...data];
        newData[e.target.id - 1].price++;
        setData(newData);

    }

  return (
    <div>
        {data.map((veri,index)=>{
            return(
                <div>
                    <h1>Product {index +1}</h1>
                    <h1>{veri.product}</h1>
                    <h1>{veri.price}</h1>
                    <h1>{veri.quantity}</h1>
                    <button id={veri.id} onClick = {handleClickIncrease} >increase</button>
                    
                </div>
            )
            
        })}
        
                    <button>decrease</button>
     
        
    </div>
  )
}

export default ProductApp
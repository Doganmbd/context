import {useState} from 'react';
import Data from "./data";
import Products from './Products';

const ProductApp = () => {


    const [data, setData] = useState(Data)
    

 

    const handleClickIncrease = (e)=> {
        console.log(e.target.id)
        const newData = [...data];
        newData[e.target.id - 1].price++;
        setData(newData);

    }
    const handleClickDecrease = (e)=> {
        console.log(e.target.id)
        const newData = [...data];
        newData[e.target.id - 1].price--;
        setData(newData);

    }

  return (
    <div>
        {data.map((veri,index)=>{
            return(
                <div key = {index}>
                  <Products veri={veri} handleClickDecrease={handleClickDecrease} handleClickIncrease={handleClickIncrease} />
                    
                </div>
            )
            
        })}
        
                    
     
        
    </div>
  )
}

export default ProductApp
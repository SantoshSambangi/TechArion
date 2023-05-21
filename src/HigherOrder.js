import React from 'react';
import { useState } from 'react';

const HigherOrder = (ExtraComponent) => {
   const NewHoc = ()=>{
        const [money,setMoney] = useState(10)

        const handleIncrease = ()=>{
            setMoney(money+2)
        }

        return <ExtraComponent money={money} handleIncrease={handleIncrease}/>
   }
   return NewHoc;
}

export default HigherOrder;
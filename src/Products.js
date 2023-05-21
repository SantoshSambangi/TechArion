import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsList } from './redux/productsSlice';

const Products = () => {

  const data = useSelector((state) => state.products);

  console.log(data)
  const dispatch = useDispatch();

  // useEffect(() => {

  //   if(data.status === 'idle'){
  //       dispatch(fetchProductsList())
  //   }
       
  // },[data,dispatch])

  return (
    <div>
        <h1>Products</h1>
    </div>
  )
}

export default Products;
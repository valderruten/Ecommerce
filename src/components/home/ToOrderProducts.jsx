import React from 'react'
import { useDispatch } from 'react-redux'
import { descendingOrderProducts , ascendingOrderProducts } from '../../store/slices/products.slice'
 
export const ToOrderProducts = () => {

    const dispatch=useDispatch()

    const handleAscending=()=>{
        dispatch(ascendingOrderProducts())
            
    }
    const handleDescending=()=>{
        dispatch(descendingOrderProducts())
    }
  return (
    <div>
        <button onClick={handleAscending}>Ascending Order</button>
        <button onClick={handleDescending}>Descending Order</button>
    </div>
  )
}
export default ToOrderProducts

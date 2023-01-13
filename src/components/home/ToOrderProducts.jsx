import React from 'react'
import { useDispatch } from 'react-redux'
import { descendingOrderProducts , ascendingOrderProducts } from '../../store/slices/products.slice'
import "./styles/toOrderProducts.css"

 
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
        <button className='btn__order' onClick={handleAscending} > <i className="fa-solid fa-arrow-down-1-9"></i> </button>
        <button className='btn__order' onClick={handleDescending}> <i className="fa-solid fa-arrow-down-9-1"></i></button>
    </div>
  )
}
export default ToOrderProducts

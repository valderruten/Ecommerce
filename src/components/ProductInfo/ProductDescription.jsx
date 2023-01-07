import axios from 'axios'
import React, { useState } from 'react'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import { useDispatch, useSelector } from 'react-redux'
import "./styles/productDescription.css"

const ProductDescription = ({product}) => {
const cart=useSelector (state=>state.cart)

  const [counter, setCounter] = useState(1)

  const handleMinus = () => {
    if(counter - 1 > 0){
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const dispatch = useDispatch();
const handleCart=()=>{
  const URL='https://e-commerce-api.academlo.tech/api/v1/cart'
  const data={
    id:product.id,
    quantity:counter
  }
  axios.post(URL,data,getConfig())
  .then(res=>{
    console.log(res.data)
    dispatch (getUserCart())
   } )
  .catch(err=>{
    if(err.response.status === 400){
const URLPatch= 'https://e-commerce-api.academlo.tech/api/v1/cart'      
const prevQuantity=cart.filter(e=>e.id === product.id )[0].productsInCart.quantity

const data={
  id:product.id,
  newQuantity:prevQuantity + counter
}
axios.patch(URLPatch,data,getConfig())
.then(res=>{
  console.log(res.data)
  dispatch(getUserCart())
})
.catch(err=>console.log(err))
    }
  })
}

  return (
    <article className='product-description'>
 
      <h2 className='product-description__title'>{product?.title}</h2>
      <p className='product-description__description'>{product?.description}</p>
      <footer className='product-description__footer' >
        <div className='product-description__price-container'>
        <h3 className='product-description__price-label' >Price</h3>
        <h2 className='product-description__price-number'>{product?.price}</h2>
        </div>
        <div className='product-description__quantity-container'>
        <h3 className='product-description__quantity-label'>Quantity</h3>
        <div className='counter'>
          <div onClick={handleMinus} className='counter__minus'>-</div>
          <div className='counter__number'>{counter}</div>
          <div onClick={handlePlus} className='counter__plus'>+</div>
        </div>
      </div>    
      <button className='product-description__btn' onClick={handleCart}>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
      </footer>
      
     
    </article>
  )
}

export default ProductDescription

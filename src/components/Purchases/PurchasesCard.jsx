import React from 'react'

const PurchasesCard = ({purchase}) => {
   
    console.log(purchase)
  
  const datePurchase=new Date(purchase.createdAt)
  const options={weekday:'long', year: 'numeric', month: 'long', day: 'numeric'}
    return (
    <article >
        <h3>{datePurchase.toLocaleDateString('en-US',options)}</h3>
        <div>
            <ul style={{padding:"20px",border:"1px solid black"}} >
                {
                    purchase.cart.products.map(prod=>(
                        <li key={prod.id}>
                            <h4>{prod.title}</h4>
                            <span>{prod.productsInCart.quantity}</span>
                            <span>{prod.price}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </article>
  )
}

export default PurchasesCard
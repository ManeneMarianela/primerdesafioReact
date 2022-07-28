import React from 'react'

function CartWidget () {
    const products = ["Ropa deportiva", "Ropa casual", "ropa formal"]
    const productsList = products.map(products => <h2>{products}</h2>) 


    return (
    <div>
      {productsList}
    </div>
  );
}

export default CartWidget

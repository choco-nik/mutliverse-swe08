import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div className='text-center'>
        <img className='small' src={product.image} alt={product.name}></img>

        <div className='add-checkout'>
            <button onClick={()=>onAdd(product)} className='add-checkout'>Add to Cart</button>
        </div>
        <h3>{product.name}</h3>
        <div>£{product.price}</div>
    </div>
  );
}
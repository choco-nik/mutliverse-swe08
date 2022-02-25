import React from 'react';
import Product from './Product';


export default function Plants(props) {
      const { products, onAdd } = props;
      return (
        <main className="block col-2">
          <h2>Plants</h2>
          <div className="row">
            {products.map((product) => {
                if(product.category === 2)
                return <Product 
                key={product.id} product={product} onAdd={onAdd}>
                </Product>
            })}
          </div>
        </main>
      );
    }

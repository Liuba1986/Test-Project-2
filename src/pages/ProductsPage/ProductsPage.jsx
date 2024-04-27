import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../requests/products';
import { Context } from '../../context';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';

export default function ProductsPage() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => getAllProducts(setProducts), [])

  console.log(setProducts);


  return (
    <div>
      <Context.Provider value={{ products }}>
        <ProductsContainer />
      </Context.Provider>
    </div>
  )
}

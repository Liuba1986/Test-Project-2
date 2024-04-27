import React, { useContext } from 'react'
import { Context } from '../../context'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductsContainer() {

    const { products } = useContext(Context)

  return (
    <div>
        {
            products.map(el => <ProductCard key={el.id} {...el}/>)
        }
    </div>
  )
}

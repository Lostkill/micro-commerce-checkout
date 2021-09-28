import React from 'react'

interface IProductsData {
  title: string
  image: any
  price: string
}

interface IProductsListProps {
  products: IProductsData[]
}

function ProductsList ({ products }: IProductsListProps) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li>
            {product.image} | {product.title} | {product.price}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsList
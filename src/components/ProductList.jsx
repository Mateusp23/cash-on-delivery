import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onBuyClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <ProductCard key={product.product_id} product={product} onBuyClick={onBuyClick} />
    ))}
  </div>
);

export default ProductList;

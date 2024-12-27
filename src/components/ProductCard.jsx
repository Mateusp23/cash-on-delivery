import React from 'react';

const ProductCard = ({ product, onBuyClick }) => (
  <div className="border rounded-lg p-4 shadow-lg">
    <img
      src={product.image_url}
      alt={product.name}
      className="w-full h-40 object-cover rounded-lg mb-4"
    />
    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
    <p className="text-gray-700 mb-1">
      Preço: <span className="font-semibold">R$ {product.price.toFixed(2)}</span>
    </p>
    {product.discount > 0 && (
      <p className="text-green-600 mb-1">Desconto: R$ {product.discount.toFixed(2)}</p>
    )}
    <p className="text-gray-500 mb-4">{product.freight}</p>
    {product.best_choice && (
      <span className="bg-yellow-300 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
        Melhor escolha
      </span>
    )}
    <button
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={() => onBuyClick(product.product_id)}
    >
      Comprar
    </button>
  </div>
);

export default ProductCard;

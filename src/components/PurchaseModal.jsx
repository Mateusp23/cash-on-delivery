import React from 'react';
import PurchaseForm from './PurchaseForm';

const PurchaseModal = ({ productId, isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h3 className="text-xl font-semibold mb-4">Formulário de Compra</h3>
        <PurchaseForm productId={productId} onClose={onClose} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default PurchaseModal;

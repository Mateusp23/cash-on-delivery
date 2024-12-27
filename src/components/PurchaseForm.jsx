import React, { useState } from 'react';

const PurchaseForm = ({ productId, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    street_number: '',
    street: '',
    district: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h3 className="text-xl font-semibold mb-4">Formulário de Compra</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="w-full px-4 py-2 border rounded"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street_number" className="block text-sm font-medium text-gray-700">Número da Rua</label>
            <input
              type="text"
              name="street_number"
              id="street_number"
              className="w-full px-4 py-2 border rounded"
              value={formData.street_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Rua</label>
            <input
              type="text"
              name="street"
              id="street"
              className="w-full px-4 py-2 border rounded"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">Bairro</label>
            <input
              type="text"
              name="district"
              id="district"
              className="w-full px-4 py-2 border rounded"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              className="w-full px-4 py-2 border rounded"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado</label>
            <input
              type="text"
              name="state"
              id="state"
              className="w-full px-4 py-2 border rounded"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;

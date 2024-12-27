import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ThankYouScreen = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-xl font-semibold">Obrigado pela Compra!</h3>
          <AiOutlineCheckCircle className="text-green-500 text-3xl ml-2" />
        </div>
        <p className="text-gray-700 mb-6 text-center">
          Sua compra foi concluída com sucesso.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;

import { useState, useEffect } from 'react';
import { fetchPageData, postPurchaseData } from '../services/productService';

export const useProductData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isThankYouScreenVisible, setIsThankYouScreenVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchPageData();
      setData(response.object[0]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const submitPurchase = async (formData, productId) => {
    const { name, email, phone_number, street_number, street, district, city, state } = formData;
    const purchaseData = {
      ...formData,
      product_id: productId,
    };

    try {
      const response = await postPurchaseData(purchaseData, purchaseData.product_id);
      if (response.HTTPStatus === 201) {
        setIsThankYouScreenVisible(true);
        setSelectedProductId(null);
        setIsModalOpen(false);
      } else {
        throw new Error('Erro ao realizar a compra.');
      }
    } catch (error) {
      console.error('Erro ao realizar a compra:', error);
      alert('Erro ao realizar a compra, tente novamente.');
    }
  };

  const handleCloseThankYouScreen = () => {
    setIsThankYouScreenVisible(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    isThankYouScreenVisible,
    submitPurchase,
    handleCloseThankYouScreen,
    handleCloseModal,
    isModalOpen,
    setIsModalOpen,
    setSelectedProductId,
    selectedProductId,
  };
};

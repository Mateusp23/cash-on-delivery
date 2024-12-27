import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ProductList from '../components/ProductList';
import { convertToEmbedUrl } from '../utils/videoConverter';
import LoadingSpinner from '../components/LoadingSpinner';
import PurchaseModal from '../components/PurchaseModal';
import ThankYouScreen from './ThankYou';
import { useProductData } from '../hooks/useProductData';

function App() {
  const {
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
  } = useProductData();

  const handleBuyClick = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleSubmitForm = async (formData) => {
    await submitPurchase(formData, selectedProductId);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Erro ao carregar os dados: {error.message}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <VideoPlayer
        headline={data.video_headline}
        subheadline={data.video_sub_headline}
        videoUrl={convertToEmbedUrl(data.video_url)}
      />
      <ProductList products={data.products} onBuyClick={handleBuyClick} />
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitForm}
        productId={selectedProductId}
      />
      {isThankYouScreenVisible && <ThankYouScreen onClose={handleCloseThankYouScreen} />}
    </div>
  );
}

export default App

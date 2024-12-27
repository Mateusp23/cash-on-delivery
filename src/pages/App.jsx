import React, { useEffect, useState } from 'react';
import { fetchPageData, postPurchaseData } from '../services/productService';
import VideoPlayer from '../components/VideoPlayer';
import ProductList from '../components/ProductList';
import { convertToEmbedUrl } from '../utils/videoConverter';
import LoadingSpinner from '../components/LoadingSpinner';
import PurchaseModal from '../components/PurchaseModal';
import ThankYouScreen from './ThankYou';

function App() {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isThankYouScreenVisible, setIsThankYouScreenVisible] = useState(false);

  const handleBuyClick = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = async (formData) => {
    const { name, email, phone_number, street_number, street, district, city, state } = formData;
    const purchaseData = {
      ...formData,
      product_id: selectedProductId,
    };

    try {
      const response = await postPurchaseData(purchaseData, purchaseData.product_id);
      if (response.HTTPStatus === 201) {
        setIsModalOpen(false);
        setIsThankYouScreenVisible(true);
      } else {
        alert('Erro ao realizar a compra, tente novamente.');
      }
    } catch (error) {
      alert('Erro ao realizar a compra, tente novamente.');
    }
  };

  const handleCloseThankYouScreen = () => {
    setIsThankYouScreenVisible(false);
  };

  useEffect(() => {
    fetchPageData()
      .then((response) => setData(response.object[0]))
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  if (!data) {
    return <LoadingSpinner />;
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
        productId={selectedProductId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitForm}
      />
      {isThankYouScreenVisible && (
        <ThankYouScreen onClose={handleCloseThankYouScreen} />
      )}
    </div>
  );
}

export default App

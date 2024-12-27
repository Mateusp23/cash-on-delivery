import React, { useEffect, useState } from 'react';
import { fetchPageData, postPurchaseData } from './services/productService';
import VideoPlayer from './components/VideoPlayer';
import ProductList from './components/ProductList';
import { convertToEmbedUrl } from './utils/videoConverter';
import LoadingSpinner from './components/LoadingSpinner';
import PurchaseModal from './components/PurchaseModal';

function App() {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleBuyClick = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
    console.log(selectedProductId, "produtoid");
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
      console.log(response, "response");
      if (response.HTTPStatus === 201) {
        alert('Compra realizada com sucesso!');
        setIsModalOpen(false);
      } else {
        alert('Erro ao realizar a compra, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados da compra:', error);
      alert('Erro ao realizar a compra, tente novamente.');
    }
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
    </div>
  );
}

export default App

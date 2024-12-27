import React, { useEffect, useState } from 'react';
import { fetchPageData } from './services/productService';
import VideoPlayer from './components/VideoPlayer';
import ProductList from './components/ProductList';
import { convertToEmbedUrl } from './utils/videoConverter';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPageData()
      .then((response) => setData(response.object[0]))
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  const handleBuyClick = (productId) => {
    console.log('Produto selecionado:', productId);
  };

  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-6">
      <VideoPlayer
        headline={data.video_headline}
        subheadline={data.video_sub_headline}
        videoUrl={convertToEmbedUrl(data.video_url)}
      />
      <ProductList products={data.products} onBuyClick={handleBuyClick} />
    </div>
  );
}

export default App

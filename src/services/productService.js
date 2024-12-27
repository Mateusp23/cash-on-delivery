import api from './api';

export const fetchPageData = async () => {
  try {
    const response = await api.get('/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da página:', error);
    throw error;
  }
};

export const buyProduct = async (productId) => {
  try {
    const response = await api.post(`/buy/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao comprar produto:', error);
    throw error;
  }
};

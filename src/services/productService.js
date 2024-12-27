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

export const postPurchaseData = async (data, productId) => {
  try {
    const response = await api.post(`/buy/${productId}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao enviar os dados da compra');
  }
};

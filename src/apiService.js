import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; 

const apiService = {
  createItem: async (item) => {
    try {
      const response = await axios.post(`${BASE_URL}/create`, item);
      return response.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  },

  readItems: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Error reading items:', error);
      throw error;
    }
  },

  updateItem: async (itemId, updatedItem) => {
    try {
      const response = await axios.put(`${BASE_URL}/posts/${itemId}`, updatedItem);
      return response.data;
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  },

  deleteItem: async (itemId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/posts/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  },
};

export default apiService;

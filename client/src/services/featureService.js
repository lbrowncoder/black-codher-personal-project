import axios from 'axios';

export default {
  getAll: async () => {
    const res = await axios.get(`/api/feature`);
    return res.data || [];
  },
};

import axios from 'axios';

export default {
  getAllFeature: async () => {
    const res = await axios.get(`/api/feature`);
    return res.data || [];
  },
};

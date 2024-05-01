import axios from 'axios';

const jobAPI = {
  async getJobs() {
    try {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit: 10,
        offset: 0
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching jobs:', error);
    }
  }
};

export default jobAPI;

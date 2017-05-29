var axios = require('axios');

module.exports = {
  fetchSampleImages: (pageNum) => {
    var url = `https://api.dribbble.com/v1/shots?page=${pageNum}&per_page=6&access_token=96632acaeab0254bc8c23f4cf669c4762898e5bfcd4550e9ada59b0caf595fa0`
    return axios.get(url)
      .then((response) => {
        return response.data;
      })
  }
}

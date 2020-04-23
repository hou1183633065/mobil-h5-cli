export default {
  get: {
    method: 'get'
  },
  post: {},
  postJson: {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  download: {
    method: 'post',
    responseType: 'blob'
  },
  upload: {},
  getImage: {},
};

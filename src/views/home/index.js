
import { Button } from 'vant';
export default {
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  mounted() {
    this.sendHttpData({
      method: 'postJson',
      url: '/tableList',
      baseURL: '/',
      params: {
        userName: 'hzq',
        password: '123456'
      },
      loadingOverlay: false,
      successMessage: '请求成功',
      errorMessage: '请求失败',
      success: (result) => {
        console.log('result111', result);
      },
      error: (error) => {
        console.log('errort111', error);
      }
    });
  },
  methods: {
    getElement() {
      console.log(111);
    }
  }
};

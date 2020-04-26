import CreateRequest from '@/axios/index';

const httpRequest = new CreateRequest();
export default {
  methods: {
    controllerResultData(result, callback) {
      if (callback) callback(result);
    },
    controllerResultMessage({ successMessage, errorMessage }, { message = '', success }) {
      this.$toast.clear();
      if (success) {
        message = successMessage && successMessage !== true ? successMessage : message;
        if (successMessage) this.$toast.success(message);
      } else {
        message = errorMessage && errorMessage !== true ? errorMessage : message;
        if (errorMessage) this.$toast(message);
      }
    },
    sendHttpData(params = {}) {
      let { loadingOverlay = true } = params;
      if (loadingOverlay) this.loadingGlobalToast();

      httpRequest.send(params).then(result => {
        this.controllerResultData(result, params.success);
        this.controllerResultMessage(params, result);
      }).catch(error => {
        this.controllerResultData(error, params.error);
        this.controllerResultMessage(params, error);
      });
    },
    loadingGlobalToast() {
      this.$toast.loading({
        forbidClick: true,
        className: 'global-loading',
        duration: 0,
        overlay: true,
        loadingType: 'spinner',
      });
    }
  }
};

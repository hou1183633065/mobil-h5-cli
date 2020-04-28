import DataMixin from './index.data';
import MethodsMixin from './index.methods';
import NetworkMixin from './index.network';
import CallbackMixin from './index.callback';

export default {
  mixins: [DataMixin, MethodsMixin, NetworkMixin, CallbackMixin]
};

<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    fixed
    placeholder
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight" />
</template>
<script>
import { NavBar } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    }
  }
};
</script>

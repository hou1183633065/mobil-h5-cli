<template>
  <div id="app">
    <header-nav-bar />

    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>

    <footer-tab-bar />
  </div>
</template>
<script>
import {
  NumberKeyboard,
  Skeleton
} from 'vant';
import HeaderNavBar from '@/components/HeaderNavBar.vue';
import FooterTabBar from '@/components/FooterTabBar.vue';
export default {
  components: {
    HeaderNavBar,
    FooterTabBar,
    [NumberKeyboard.name]: NumberKeyboard,
    [Skeleton.name]: Skeleton
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

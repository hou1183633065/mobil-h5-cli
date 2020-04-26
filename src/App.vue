<template>
  <div id="app">
    <header-nav-bar />

    <transition name="van-slide-down">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </transition>

    <footer-tab-bar />
  </div>
</template>
<script>
import HeaderNavBar from '@/components/HeaderNavBar.vue';
import FooterTabBar from '@/components/FooterTabBar.vue';
export default {
  components: {
    HeaderNavBar,
    FooterTabBar,
  }
};

</script>

<style lang="scss" src="@/assets/style/App.scss"></style>

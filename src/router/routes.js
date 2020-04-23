import Home from '@/views/home/index.vue';

export default [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/index.vue')
  }
];

import Vue from 'vue';
import VueRouter from 'vue-router';
import allRoutes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...allRoutes
  ]
});

router.beforeEach((to, from, next) => {
  if (to?.meta?.title) document.title = to.meta.title;

  next();
});

export default router;

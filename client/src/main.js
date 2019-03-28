import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'; // Webpack knows it is an index.js if named index
import App from './App';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList.vue';
import UploadForm from './components/UploadForm.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
  ],
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

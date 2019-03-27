import Vue from 'vue';
import App from './App';
import store from './store'; // Webpack knows it is an index.js if named index

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

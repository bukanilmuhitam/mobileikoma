import Vue from 'vue'
import Home from './Home.vue'
import Router from 'vue-router'
import MainHome from '@/components/MainHome' // this is the import line to add


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainHome',
      component: MainHome
    },
  ]
})

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.config.productionTip = false

Vue.filter('truncate', filter);

new Vue({
 
  render: h => h(Home),
}).$mount('#app')
